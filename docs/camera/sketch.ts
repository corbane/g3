
/// <reference no-default-lib="true"/>
/// <reference lib="webworker" />
/// <reference path="../build/g3-worker.d.ts" />

"use strict"

;{
        
    let sphere     = computeWireframe (createSphere ({ normals: true, radius: 4 }))
    let shader     = buitinShader ("uvColor")
    let isdragging = false
    let ispan      = false
    let lastX      = 0
    let lastY      = 0
    let zoom       = 1
    let angleX     = 0
    let angleY     = 0
    let posX       = 0
    let posY       = 0

    OnSetup = function ()
    {

        useCullFace()
        usePolygonOffset(1, 1)
        useDepthTest()
        setClearColor (0.8, 0.8, 0.8, 1)
        draw ()
    }

    OnResize = function ()
    {
        draw ()
    }

    OnButtonDown = function ()
    {
        const pos = PointerLocation

        isdragging = true
        lastX = pos[0]
        lastY = pos[1]
    }

    OnButtonUp = function ()
    {
        isdragging = false
    }

    OnPointerMove = function ()
    {
        if(isdragging)
        {
            const pos    = PointerLocation
            const deltaX = (pos[0] - lastX)
            const deltaY = (pos[1] - lastY)

            if(ispan)
            {
                posX += deltaX / Width  * 4 // useOrthogonalView  (-2, 2, -2, 2, 0.1, 1000)
                posY -= deltaY / Height * 4 //                     -2 to 2 == 4
            }
            else
            {
                angleY += Math.PI * (deltaX / Width )
                angleX += Math.PI * (deltaY / Height)
            }

            lastX = pos[0]
            lastY = pos[1]
            draw ()
        }
    }

    OnKeyDown = function ()
    {
        if(KeyCode == 17)
            ispan = true
    }

    OnKeyUp = function ()
    {
        if(KeyCode == 17)
            ispan = false
    }

    OnWheel = function ()
    {
        zoom += WheelDelta > 1 ? 0.1 : -0.1
        if(zoom <= 0) zoom = 0.1
        draw ()
    }

    OnDraw = function ()
    {
        clearView ();

        useOrthogonalView  (-2, 2, -2, 2, 0.1, 1000)

        translateView (posX, posY, -2)
        rotateView    (angleX, 1, 0, 0)
        rotateView    (angleY, 0, 1, 0)

        resetTransformations ()
        scale (zoom)

        useShader(shader, {
            u_mvp     : getTransformsProjection (),
            a_normal  : sphere.buffers.normals,
            a_vertex  : sphere.buffers.vertices,
            brightness: 1
        })

        setDrawingMode ("triangles")
        drawMesh       (sphere)

        setShaderUniforms({
            brightness: 0
        })

        setDrawingMode ("lines")
        drawMesh       (sphere)
    }
    
    draw ()
}