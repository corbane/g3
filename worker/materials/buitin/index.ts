
type BuitinShaderNames = "uvColor"

declare function buitinShader (name: BuitinShaderNames) : IShader

;{

    const buitinShader = function (name: BuitinShaderNames)
    {
        return createShader(`
    
            attribute vec3 a_vertex;
            attribute vec3 a_normal;
            uniform mat4   u_mvp;
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
    }

    Internal.definePublicMethods ({
        buitinShader
    })
}