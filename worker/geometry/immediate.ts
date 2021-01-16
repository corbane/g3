/// <reference path="../math/vec2.ts" />
/// <reference path="../math/vec4.ts" />
/// <reference path="./mesh.ts" />

"use strict"

declare function beginMesh      (mode: Internal.DrawingMode)                  : void

declare function setPointSize   (size: number)                                : void

declare function setLineWidth   (width: number)                               : void

declare function setVertexColor (r: number, g: number, b: number, a?: number) : void
declare function setVertexColor (color: LVec3|LVec4)                           : void

declare function texCoord       (u: number, v: number)                        : void
declare function texCoord       (coord: vec2)                                 : void

declare function drawVertex     (x: number, y: number, z: number)             : void
declare function drawVertex     (vertex: LVec3)                               : void
declare function drawVertices   (...vertices: LVec3[])                        : void

declare function endMesh        (tdraw?: boolean)                             : IMesh

;{	// Immediate mode
    
    // Provide an implementation of OpenGL's deprecated immediate mode. This is
    // depricated for a reason: constantly re-specifying the geometry is a bad
    // idea for performance. You should use a `GL.Mesh` instead, which specifies
    // the geometry once and caches it on the graphics card. Still, nothing
    // beats a quick `gl.begin(gl.POINTS); gl.vertex(1, 2, 3); gl.end();` for
    // debugging. This intentionally doesn't implement fixed-function lighting
    // because it's only meant for quick debugging tasks.

    const m_state = {
        mesh     : null         as IMesh,
        mode     : null         as Internal.DrawingMode,
        shader   : null         as IShader,
        coord    : [0, 0]       as [number, number],
        color    : [1, 1, 1, 1] as [number, number, number, number],
        pointSize: 1
    }
	
    const _enableImmediateMode = function ()
    {
        m_state.mesh = createMesh({ coords: true, colors: true, triangles: false })
        m_state.shader = createShader(`

            attribute vec4 a_vertex;
            attribute vec4 a_texCoord;
            attribute vec4 a_color;

            uniform float pointSize;
            uniform bool  useTexture;
            uniform mat4  u_mvpMatrix;

            varying vec4 color;
            varying vec4 coord;

            void main()
            {
                color        = a_color;
                coord        = a_texCoord;
                gl_Position  = u_mvpMatrix * a_vertex;
                gl_PointSize = pointSize;
			}
        `,`
            
            precision highp float;

            uniform sampler2D texture;
            uniform float pointSize;
            uniform bool  useTexture;
            varying vec4  color;
            varying vec4  coord;

            void main()
            {
                gl_FragColor = color;

                if (useTexture) 
                    gl_FragColor *= texture2D(texture, coord.xy);
            }`
        )
    }

    const  beginMesh = function (mode: Internal.DrawingMode)
    {
        if(m_state.shader == null)
            _enableImmediateMode()

        else if(m_state.mode != null)
            throw new Error('mismatched gl.begin() and gl.end() calls')

        m_state.mode = mode
        m_state.mesh = createMesh({ coords: true, colors: true, triangles: false })

        useShader(m_state.shader)
    }

    const  setPointSize = function (size: number)
    {
        m_state.pointSize = size
    }

    const setLineWidth = function (width: number)
    {
        gl.lineWidth(width)
    }

    const setVertexColor = function (r: number|LVec3|LVec4, g?: number, b?: number, a?: number)
    {
        if(r.length == 1)
            //@ts-ignore
            m_state.color =  [r[0], r[1], r[2], r[3] || 1]
        else
            m_state.color = [r as number, g, b, a || 1]
    }

    const  texCoord = function (u: number|vec2, v?: number)
    {
        if(typeof u == "number")
            m_state.coord = [u, v]
        else
            //@ts-ignore
            m_state.coord = [u[0], u[1]]
    }

    const  drawVertex = function (x: number|LVec3, y?: number, z?: number)
    {
        const st = m_state
        const buffers = (st.mesh as Internal.Mesh).buffers
        const vdata   = buffers.vertices.data
        const tdata   = buffers.coords.data
        const cdata   = buffers.colors.data

        cdata.push (st.color)
        tdata.push (st.coord)
        vdata.push (typeof x == "number" ? [x, y, z] : [ x[0], x[1], x[2] ])
    }

    const drawVertices = function (...vertices: LVec3[])
    {
        const st      = m_state
        const buffers = (st.mesh as Internal.Mesh).buffers
        const vdata   = buffers.vertices.data
        const tdata   = buffers.coords.data
        const cdata   = buffers.colors.data

        for(const v of vertices)
        {
            cdata.push (st.color)
            tdata.push (st.coord)
            vdata.push ( [ v[0], v[1], v[2] ] )
        }
    }

    const endMesh = function (draw = true)
    {
        const st = m_state
        const m = (st.mesh as Internal.Mesh)

        if(st.mode == null)
			throw new Error('mismatched gl.begin() and gl.end() calls')

        Internal.uploadBuffers (m.buffers)

        if(draw)
        {
            const buf = m.buffers

            attachShaderAttributes ({
                a_vertex   : buf.vertices,
                a_texCoord : buf.coords,
                a_color    : buf.colors
            })
            setShaderUniforms ({
                u_mvpMatrix : mat4.mul (mat4(), getProjectionMatrix(), getTransforms()),
                pointSize   : st.pointSize,
                useTexture  : !!gl.getParameter(gl.TEXTURE_BINDING_2D)
            })
            setDrawingMode (st.mode)
            drawMesh       (st.mesh)
        }
        else
        {
            const _dmode = st.mode
            const _psize = st.pointSize
            const _shd   = st.shader
            const _buf   = m.buffers

            m.onDraw = () =>
            {
                useShader (_shd)
                attachShaderAttributes ({
                    a_vertex   : _buf.vertices,
                    a_texCoord : _buf.coords,
                    a_color    : _buf.colors
                })
                setShaderUniforms ({
                    u_mvpMatrix : mat4.mul (mat4(), getProjectionMatrix(), getTransforms()),
                    pointSize   : _psize,
                    useTexture  : !!gl.getParameter(gl.TEXTURE_BINDING_2D)
                })
                setDrawingMode (_dmode)
            }
        }

        st.mode = null
        return m as IMesh
    }

    Internal.definePublicMethods ({
        beginMesh,
        setPointSize,
        setLineWidth,
        setVertexColor,
        texCoord,
        drawVertex,
        drawVertices,
        endMesh
    })
}
