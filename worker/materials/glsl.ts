
const // Shader data tags
GL_TYPE            = Symbol.for("GL_TYPE"),
GS_VERTEX_SHADER   = Symbol.for("GS_VERTEX_SHADER"),
GS_FRAGMENT_SHADER = Symbol.for("GS_FRAGMENT_SHADER"),
GS_INSERT          = Symbol.for("GS_INSERT"),
GS_SOURCE          = Symbol.for("GS_SOURCE"),
GS_SHADER          = Symbol.for("GS_SHADER")

const // Uniform & Attribute types
u_byte    = { [GL_TYPE]: 0x1400 /* BYTE           */ },
u_ubyte   = { [GL_TYPE]: 0x1401 /* UNSIGNED_BYTE  */ },
u_short   = { [GL_TYPE]: 0x1402 /* SHORT          */ },
u_ushort  = { [GL_TYPE]: 0x1403 /* UNSIGNED_SHORT */ },
u_int     = { [GL_TYPE]: 0x1404 /* INT            */ },
u_uint    = { [GL_TYPE]: 0x1405 /* UNSIGNED_INT   */ },
u_float   = { [GL_TYPE]: 0x1406 /* FLOAT          */ },
u_vec2    = { [GL_TYPE]: 0x8B50 /* FLOAT_VEC2     */ } , a_vec2  = {  [GL_TYPE]: 0x8B50 },
u_vec3    = { [GL_TYPE]: 0x8B51 /* FLOAT_VEC3     */ } , a_vec3  = {  [GL_TYPE]: 0x8B51 },
u_vec4    = { [GL_TYPE]: 0x8B52 /* FLOAT_VEC4     */ } , a_vec4  = {  [GL_TYPE]: 0x8B52 },
u_ivec2   = { [GL_TYPE]: 0x8B53 /* INT_VEC2       */ } , a_ivec2 = {  [GL_TYPE]: 0x8B53 },
u_ivec3   = { [GL_TYPE]: 0x8B54 /* INT_VEC3       */ } , a_ivec3 = {  [GL_TYPE]: 0x8B54 },
u_ivec4   = { [GL_TYPE]: 0x8B55 /* INT_VEC4       */ } , a_ivec4 = {  [GL_TYPE]: 0x8B55 },
a_bool    = { [GL_TYPE]: 0x8B56 /* BOOL           */ },
u_bvec2   = { [GL_TYPE]: 0x8B57 /* BOOL_VEC2      */ },
u_bvec3   = { [GL_TYPE]: 0x8B58 /* BOOL_VEC3      */ },
u_bvec4   = { [GL_TYPE]: 0x8B59 /* BOOL_VEC4      */ },
u_mat2    = { [GL_TYPE]: 0x8B5A /* FLOAT_MAT2     */ },
u_mat3    = { [GL_TYPE]: 0x8B5B /* FLOAT_MAT3     */ },
u_mat4    = { [GL_TYPE]: 0x8B5C /* FLOAT_MAT4     */ },
u_tex2D   = { [GL_TYPE]: 0x8B5E /* SAMPLER_2D     */ },
u_texCude = { [GL_TYPE]: 0x8B60 /* SAMPLER_CUBE   */ }

type IGLSL <D> = Pick<D, Internal.GLSL.PublicKeys <D>>

type GLSLOptions = {
    "GS_FRAGMENT_SHADER" ? : typeof GS_FRAGMENT_SHADER
    "GS_VERTEX_SHADER"   ? : typeof GS_VERTEX_SHADER
    [GS_INSERT]          ? : (string|IResource<string>)[]|string|IResource<string>
    [key: string] : any
}

declare function glsl <D extends GLSLOptions> (strings: TemplateStringsArray, ...defs: D[]): IGLSL <D>

declare namespace Internal
{
    type GLSL <D> = IGLSL <D> & {
        [GS_SHADER] : typeof GS_VERTEX_SHADER | typeof GS_FRAGMENT_SHADER
        [GS_SOURCE] : Array<{ string: string, value: IResource<string> }>
    }
    
    namespace GLSL
    {
        type HiddenKeys = "GS_SHADER" | "GS_VERTEX_SHADER"  | "GS_FRAGMENT_SHADER"| typeof GS_SHADER | typeof GS_INSERT | typeof GS_SOURCE
        type PublicKeys <T> = { [K in keyof T]: K extends HiddenKeys ? never : K }[keyof T]
    }
}

;{  // GLSL Functions
    
    const fetchGlsl = function (url: string)
    {
        return loadText (url, (t) => loadGlsl (t))
    }

    const loadGlsl = function (code: string)
    {
        return Internal.EvluateAsPublic ("glsl`" + code.replace ("`", "\\`") + "`") as { [key: string]: any }
    }

    const glsl = function <D extends GLSLOptions> (strings: TemplateStringsArray, ...defs: D[]): IGLSL <D>
    {
        return _initGlsl (strings, defs)
    }

    const _initGlsl = function <D extends GLSLOptions> (strings: ReadonlyArray<string>, defs: D[]): IGLSL <D>
    {
        const result = { [GS_SOURCE]: [] } as Internal.GLSL <D>

        var part = { string: "", value: null as IResource<string> }
        //var str  = ""

        for(var i = 0; i < strings.length; i++)
        {
            const data = defs[i]

            if(typeof data != "object")
            {
                part.string += strings[i] + (data || '')
                continue
            }

            part.string += strings[i]

            if(data.GS_VERTEX_SHADER)
            {
                if(data.GS_VERTEX_SHADER != GS_VERTEX_SHADER)
                    throw "Use the syntax '${{ GS_VERTEX_SHADER }}' for define a vertex shader"

                if(result[GS_SHADER] && result[GS_SHADER] != GS_VERTEX_SHADER)
                    throw "The shader is already define as a fragment shader ?"

                result[GS_SHADER] = GS_VERTEX_SHADER
                delete data.GS_VERTEX_SHADER
            }

            if(data.GS_FRAGMENT_SHADER)
            {
                if(data.GS_FRAGMENT_SHADER != GS_FRAGMENT_SHADER)
                    throw "Use the syntax '${{ GS_FRAGMENT_SHADER }}' for define a fragment shader"

                if(result[GS_SHADER] && result[GS_SHADER] != GS_FRAGMENT_SHADER)
                    throw "The shader is already define as a vertex shader"

                result[GS_SHADER] = GS_FRAGMENT_SHADER
                delete data.GS_FRAGMENT_SHADER
            }

            const inserts = data[GS_INSERT]
            if(inserts)
            {
                const qeue = Array.isArray (inserts) ? inserts : [inserts]

                for(const inc of qeue)
                {
                    if(typeof inc == "string")
                    {
                        part.string += inc
                    }
                    else if(inc[GS_EVENT_TYPE] == IS_RESOURCE)
                    {
                        part.value = inc
                        result[GS_SOURCE].push (part)
                        part = { string: "", value: null }
                    }
                    else
                    {
                        throw "Unknown insert type"
                    }
                }
                delete data[GS_INSERT]
            }

            Object.assign (result, data)
        }

        result[GS_SOURCE].push (part)

        return result as IGLSL <D>
    }
    

    const getGlslSourceCode = function <D> (glsl: IGLSL <D>)
    {
        var str = ""

        for(const part of (glsl as Internal.GLSL <D>)[GS_SOURCE])
            str += part.string + (part.value ? (part.value.data || '') : '')
        
        return str
    }

    Internal.definePublicMethods({
        glsl
    })

}