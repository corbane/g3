/// <reference no-default-lib="true"/>
/// <reference lib="webworker" />
/// <reference path="../../build/g3-worker.d.ts" />

;{
    const obj         = fetchMesh     ("../_assets/gazebo.json")
    const plane       = createPlane   ()
    const tex         = fetchTexture  ('./texture.png')
    const overlay     = createTexture (256, 256)
    const planeShader = fetchShader   ("./pln-shd.vert", "./pln-shd.frag")
    const meshShader  = createShader  (`

            attribute vec3 a_vertex;
            attribute vec3 a_normal;
            uniform mat4 u_mvproj;

            varying vec3 normal;

            void main()
            {
                normal = a_normal;
                gl_Position = u_mvproj * vec4 (a_vertex, 1.);
            }
        `,`

            precision highp float;

            varying vec3 normal;

            void main()
            {
                gl_FragColor = vec4(normal * 0.5 + 0.5, 1.0);
            }
        `)

    var angle     = 0
    var last_time = 0

    OnDraw = function (time: number)
    {
        const delta = (time - last_time) / 1000
        last_time = time
        angle += Math.PI/4 * delta;

        drawOnTexture(overlay)
        {
            drawBackground (1, 1, 1, 1)

            usePerspectiveView(45, 0.1, 100)
            translateView (0, -0.2, -3)
        
            resetTransformations ()
            rotate          (Math.PI/6, 1, 0, 0)
            rotate          (angle    , 0, 1, 0)
            scale           (0.01, 0.01, 0.01)

            useShader(meshShader, {
                u_mvproj : getTransformsProjection (),
                a_vertex : obj.buffers.vertices,
                a_normal : obj.buffers.normals
            })
            drawMesh(obj)
        }

        drawOnView()
        {
            drawBackground (1, 1, 1, 1)

            usePerspectiveView(45, 0.1, 100)
            translateView (0, 0, -5)
            rotateView    (Math.PI/6, 1, 0, 0)
            rotateView    (angle, 0, 1, 0)
            
            resetTransformations ()
            useShader(planeShader, {
                u_mvproj   : getTransformsProjection (),
                a_vertex   : plane.buffers.vertices,
                a_texCoord : plane.buffers.coords,
                texture    : useTexture(tex, 0),
                overlay    : useTexture(overlay, 1)
            })
            drawMesh(plane)
        }
    }

    useDepthTest()
    //useFullscreen()
    play ()
}