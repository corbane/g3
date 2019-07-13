
/// <reference no-default-lib="true"/>
/// <reference lib="webworker" />
/// <reference path="../../g3-worker.d.ts" />

"use strict"

;{

    let isdragging = false
    let ispan      = false
    let lastX      = 0
    let lastY      = 0
    let zoom       = -10
    //let centerX    = 0
    //let centerY    = 0
    let angleX     = 0
    let angleY     = 0
    let posX       = 0
    let posY       = 0

    let sphere : IMesh

    let shader : IShader

    OnSetup = function ()
    {
        sphere = createSphere({ normals: true, radius: 4 }) ; computeWireframe(sphere)

        shader = createShader(`

            attribute vec3 a_vertex; // { a_vec3 ("vertex") }
            attribute vec3 a_normal; // { a_vec3 ("avertex", sphere.points) }
            uniform mat4   u_mvp;    // { u_mat4 ("") }
            varying vec3   normal;
            
            void main()
            {
                normal = a_normal;
                gl_Position = u_mvp * vec4 (a_vertex, 1.);
            }
        `,`

            precision highp float;

            uniform float brightness;
            varying vec3 normal;
            
            void main()
            {
                gl_FragColor = vec4(brightness * (normal * 0.5 + 0.5), 1.0);
            }
        `)
        useCullFace()
        usePolygonOffset(1, 1)
        useDepthTest()
        //  useSquareView ()
        //  useFullscreen()

        setClearColor (0.8, 0.8, 0.8, 1)
    }

    OnResize = function ()
    {
        //console.log (`Resize ${Width} - ${Height}`)
        draw ()
    }

    OnWheel = function ()
    {
        const delta = WheelDelta

        zoom -= delta/100

        const pos = PointerLocation
        const x = -1 + (pos[0] / Width ) * 2 // == remap ([0, Width ], [-1, 1], pos[0])
        const y = -1 + (pos[1] / Height) * 2 // == remap ([0, Height], [-1, 1], pos[1])
        
        console.log ([x, y])

        if(delta < 0)
        {
            posX -= x
            posY += y
        }
        else
        {
            posX += x
            posY -= y
        }

        draw ()
    }

    OnButtonDown = function ()
    {
        const pos = PointerLocation

        isdragging = true
        lastX = pos[0]
        lastY = pos[1]

        draw ()
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
                posX -= deltaX / Width  * zoom
                posY += deltaY / Height * zoom
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

    OnDraw = function ()
    {
        clearView ()

        usePerspectiveView(45, Width / Height, 1, 1000)

        translateView (posX, posY, zoom)
        rotateView    (angleX, 1, 0, 0)
        rotateView    (angleY, 0, 1, 0)

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