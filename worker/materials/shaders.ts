/// <reference path="../geometry/buffers.ts" />

interface IShader
{
    readonly vertexSource: string
    readonly fragmentSource: string

    onUse: (() => void) | null
}

declare function fetchShader            (vspath: string, fspath: string)                                     : IShader
declare function createShader           (vssource: string | Array<string>, fssource: string | Array<string>) : IShader
declare function useShader              (shader: IShader | IResource<IShader>, data?: { [key:string]: any }) : void
declare function getCurrentShader       ()                                                                   : IShader
declare function setShaderData          (data: { [key:string]: any })                                        : void
declare function attachShaderBuffers    (mesh: IMesh)                                                        : void
declare function attachShaderAttributes (data: { [key:string]: any })                                        : void
declare function setShaderUniforms      (data: { [key:string]: any })                                        : void

declare namespace Internal
{
    interface AttributeInfo extends WebGLActiveInfo
    {
        location: NonNullable<number>
    }
    interface UniformInfo extends WebGLActiveInfo
    {
        location: NonNullable<WebGLUniformLocation>
        isSampler: NonNullable<boolean>
    }

    type Shader = { -readonly [P in keyof IShader]: IShader[P] } &
    {
        program: NonNullable<WebGLProgram>
        attInfos: { [key: string]: NonNullable<AttributeInfo> }
        uniInfos: { [key: string]: NonNullable<UniformInfo> }
    }
}

;{  // IShader Functions

    let m_shader: Internal.Shader

    const fetchShader = function (vspath: string, fspath: string)
    {
        var vssource = null as string
        var fssource = null as string

        const shader = <Internal.Shader> {
            vertexSource: null,
            fragmentSource: null
        }

        Internal.once ("resource-loaded", () => {
            Object.assign (shader, createShader (vssource, fssource))
        })

        loadText (vspath, (src) => { vssource = src })
        loadText (fspath, (src) => { fssource = src })

        return shader as IShader
    }

    const createShader = function (vssource: string|Array<string>, fssource: string|Array<string>)
    {
        if(Array.isArray(vssource))
            vssource = vssource.join('\n')

        if(Array.isArray(fssource))
            fssource = fssource.join('\n')

        const prog = gl.createProgram()

        if(prog == null)
            throw "gl.createProgram error"

        gl.attachShader (prog, compileSource(gl.VERTEX_SHADER  , vssource))
        gl.attachShader (prog, compileSource(gl.FRAGMENT_SHADER, fssource))
        gl.linkProgram  (prog)

        if(!gl.getProgramParameter(prog, gl.LINK_STATUS))
            throw new Error('link error: ' + gl.getProgramInfoLog(prog))

        return _initShader (<Internal.Shader> {
            vertexSource  : vssource,
            fragmentSource: fssource,
            program       : prog,
            attInfos      : {},
            uniInfos      : {},
            onUse         : null
        })
        
        function compileSource (type: number, source: string)
        {
            const shd = gl.createShader(type)

            if(shd == null)
                throw "gl.createShader error"

            gl.shaderSource  (shd, source)
            gl.compileShader (shd)

            if(!gl.getShaderParameter(shd, gl.COMPILE_STATUS))
                throw new Error('compile error: ' + gl.getShaderInfoLog(shd))

            return shd
        }
    }

    const _initShader = function(shader: IShader)
    {
        const prog   = (shader as Internal.Shader).program
        const atts   = (shader as Internal.Shader).attInfos
        const unis   = (shader as Internal.Shader).uniInfos
        const acount = gl.getProgramParameter(prog, gl.ACTIVE_ATTRIBUTES)
        const ucount = gl.getProgramParameter(prog, gl.ACTIVE_UNIFORMS)

        for (let i = 0; i < acount; ++i)
        {
            const a = gl.getActiveAttrib(prog, i)

            if(a == null)
                throw "internal error"

            atts[a.name] = {
                name: a.name,
                size: a.size,
                type: a.type,
                location: gl.getAttribLocation(prog, a.name)
            }
        }

        for (let i = 0; i < ucount; ++i)
        {
            const u = gl.getActiveUniform(prog, i)

            if(u == null)
                throw "internal error"

            unis[u.name] = {
                name     : u.name,
                size     : u.size,
                type     : u.type,
                location : gl.getUniformLocation(prog, u.name) as WebGLUniformLocation,
                isSampler: _isSampler(u)
            }
        }

        return shader
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getActiveUniform
    const _isSampler = function (info: WebGLActiveInfo)
    {
        switch (info.type)
        { 
        case gl.SAMPLER_2D  : return true
        case gl.SAMPLER_CUBE: return true
        default             : return false;
        }
        /*
        // WebGL 2
        // https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#Samplers
        // https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getActiveUniform

        */
    }

    const useShader = function(shader: IShader|IResource<IShader>, data?: { [key:string]: any })
    {
        m_shader = (shader as Internal.Resource<IShader>) [IS_RESOURCE] 
                 ? (shader as IResource<Internal.Shader>).data as Internal.Shader
                 :  shader as Internal.Shader
        
        gl.useProgram(m_shader.program);

        if(m_shader.onUse)
            m_shader.onUse()

        if(data)
        {
            attachShaderAttributes (data)
            setShaderUniforms      (data)
        }
    }

    const getCurrentShader = function ()
    {
        return m_shader
    }

    const setShaderData = function (data: { [key:number]: any })
    {
        attachShaderAttributes (data)
        setShaderUniforms      (data)
    }

    const attachShaderBuffers = function (mesh: IMesh)
    {
        attachShaderAttributes ((mesh as Internal.Mesh).buffers)
    }

    const attachShaderAttributes = function (data: { [key:string]: any })
    {
        const shd  = m_shader
        const ainf = shd.attInfos

        // Attach vertex buffers
        for(const aname in ainf)
        {
            if(!(aname in data))
                continue

            const a = ainf[aname]
            const d = data[aname] as Internal.Buffer
            const l = a.location
            
			gl.bindBuffer              (d.GL_TARGET, d.GL_HANDLE)
			gl.enableVertexAttribArray (l)
			gl.vertexAttribPointer     (l, d.element_size, d.GL_TYPE, false, 0, 0)
        }
    }

    const setShaderUniforms = function (data: { [key:string]: any })
    {
        const shd  = m_shader as Internal.Shader
        const uinf = shd.uniInfos

        // Set uniforms values
        for(const uname in uinf)
        {
            if(!(uname in data))
                continue

            const u = uinf[uname]
            const d = data[uname]
            const l = u.location

            switch (u.type)
            {
            case 0x1400: /* BYTE           */ gl.uniform1f        (l, d)           ; continue
            case 0x1401: /* UNSIGNED_BYTE  */ gl.uniform1f        (l, d)           ; continue

            case 0x1402: /* SHORT          */ gl.uniform1f        (l, d)           ; continue
            case 0x1403: /* UNSIGNED_SHORT */ gl.uniform1f        (l, d)           ; continue

            case 0x1404: /* INT            */ gl.uniform1i        (l, d)           ; continue
            case 0x1405: /* UNSIGNED_INT   */ gl.uniform1i        (l, d)           ; continue

            case 0x1406: /* FLOAT          */ gl.uniform1f        (l, d)           ; continue

            case 0x8B50: /* FLOAT_VEC2     */ gl.uniform2fv       (l, d)           ; continue
            case 0x8B51: /* FLOAT_VEC3     */ gl.uniform3fv       (l, d)           ; continue
            case 0x8B52: /* FLOAT_VEC4     */ gl.uniform4fv       (l, d)           ; continue

            case 0x8B53: /* INT_VEC2       */ gl.uniform2iv       (l, d)           ; continue
            case 0x8B54: /* INT_VEC3       */ gl.uniform3iv       (l, d)           ; continue
            case 0x8B55: /* INT_VEC4       */ gl.uniform4iv       (l, d)           ; continue

            case 0x8B56: /* BOOL           */ gl.uniform1i        (l, d)           ; continue
            case 0x8B57: /* BOOL_VEC2      */ gl.uniform2iv       (l, d)           ; continue
            case 0x8B58: /* BOOL_VEC3      */ gl.uniform3iv       (l, d)           ; continue
            case 0x8B59: /* BOOL_VEC4      */ gl.uniform4iv       (l, d)           ; continue

            case 0x8B5A: /* FLOAT_MAT2     */ gl.uniformMatrix2fv (l, false, d)    ; continue
            case 0x8B5B: /* FLOAT_MAT3     */ gl.uniformMatrix3fv (l, false, d)    ; continue
            case 0x8B5C: /* FLOAT_MAT4     */ gl.uniformMatrix4fv (l, false, d)    ; continue

            case 0x8B5E: /* SAMPLER_2D     */ typeof d == "number" 
                                            ? gl.uniform1i        (l, d) 
                                            : gl.uniform1i        (l, d.bindIndex) ;
                                            continue

            case 0x8B60: /* SAMPLER_CUBE   */ typeof d == "number" 
                                            ? gl.uniform1i        (l, d) 
                                            : gl.uniform1i        (l, d.bindIndex) ; continue
            }
            
            if(gl.VERSION != 2)
                throw `Cann not set the uniform ${uname} with data type: ${typeof d}`

            switch (u.type)
            {
            // TODO
            // https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/uniform
            // https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/uniformMatrix
            // https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#Samplers
            // https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#Data_types_2
            
            // case 0x8B5F :/* SAMPLER_3D                    */
            
            // case 0x8B62: /* SAMPLER_2D_SHADOW             */
            // case 0x8B65: /* FLOAT_MAT2x3                  */ gl.uniformMatrix2x3fv (l, flase, d, ...) ; continue
            // case 0x8B66: /* FLOAT_MAT2x4                  */ gl.uniformMatrix2x4fv (l, flase, d, ...) ; continue
            // case 0x8B67: /* FLOAT_MAT3x2                  */ gl.uniformMatrix3x2fv (l, flase, d, ...) ; continue
            // case 0x8B68: /* FLOAT_MAT3x4                  */ gl.uniformMatrix3x4fv (l, flase, d, ...) ; continue
            // case 0x8B69: /* FLOAT_MAT4x2                  */ gl.uniformMatrix4x2fv (l, flase, d, ...) ; continue
            // case 0x8B6A: /* FLOAT_MAT4x3                  */ gl.uniformMatrix4x3fv (l, flase, d, ...) ; continue
            // case 0x8DC1: /* SAMPLER_2D_ARRAY              */
            // case 0x8DC4: /* SAMPLER_2D_ARRAY_SHADOW       */
            // case 0x8DC5: /* SAMPLER_CUBE_SHADOW           */
            // case 0x8DC6: /* UNSIGNED_INT_VEC2             */
            // case 0x8DC7: /* UNSIGNED_INT_VEC3             */
            // case 0x8DC8: /* UNSIGNED_INT_VEC4             */
            // case 0x8DCA: /* INT_SAMPLER_2D                */
            // case 0x8DCB: /* INT_SAMPLER_3D                */
            // case 0x8DCC: /* INT_SAMPLER_CUBE              */
            // case 0x8DCF: /* INT_SAMPLER_2D_ARRAY          */
            // case 0x8DD2: /* UNSIGNED_INT_SAMPLER_2D       */
            // case 0x8DD3: /* UNSIGNED_INT_SAMPLER_3D       */
            // case 0x8DD4: /* UNSIGNED_INT_SAMPLER_CUBE     */
            // case 0x8DD7: /* UNSIGNED_INT_SAMPLER_2D_ARRAY */
            }
        }
    }

    Internal.definePublicMethods ({
        fetchShader,
        createShader,
        useShader,
        getCurrentShader,
        setShaderData,
        attachShaderAttributes,
        setShaderUniforms,
    })
}
