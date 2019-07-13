/// <reference no-default-lib="true"/>
/// <reference lib="webworker" />
/// <reference path="../../build/g3-worker.d.ts" />

;{
    const cube = createBox ()
    const shader = createShader (`
        // Vertex Shader

        attribute vec3 a_vertex;
        attribute vec3 a_normal;
        uniform mat4 u_mvproj;
        varying vec3 v_normal;

        void main ()
        {
            v_normal = a_normal;
            gl_Position = u_mvproj * vec4 (a_vertex, 1.);
        }
    `,`
        // Fragment Shader

        precision highp float;

        varying vec3 v_normal;

        void main()
        {
            gl_FragColor = vec4(v_normal * 0.5 + 0.5, 1.0);
        }
    `)

    OnSetup = function ()
    {
        useCullFace ()

        usePerspectiveView (45, 0.1, 1000)

        useShader (shader, {
            a_vertex: cube.buffers.vertices,
            a_normal: cube.buffers.normals
        })
    }

    OnDraw = function (milliseconds: number)
    {
        const rad = radians (45) * (milliseconds / 1000)

        const norm = sin (rad)
        setClearColor (norm, -norm, 1, 1)
        clearView ()

        resetTransformations ()
        translate (0, 0, -5)
        rotateX (rad)
        rotateY (rad)
        scale (remap ([-1, 1], [0.1, 1.2], norm))

        setShaderData ({
            u_mvproj: getTransformsProjection ()
        })

        drawMesh (cube)
    }

    play ()
}