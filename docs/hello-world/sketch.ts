/// <reference no-default-lib="true"/>
/// <reference lib="webworker" />
/// <reference path="../build/g3-worker.d.ts" />

;{
    const cube = computeWireframe (createBox ())
    let shader = buitinShader ("uvColor")

    OnSetup = function ()
    {
        useCullFace ()
        useDepthTest ()
        usePolygonOffset (1, 1)

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
            u_mvp: getTransformsProjection (),
            brightness: 1
        })

        setDrawingMode ("triangles")
        drawMesh (cube)

        setShaderData ({
            brightness: 0
        })

        setDrawingMode ("lines")
        drawMesh (cube)
    }

    play ()
}