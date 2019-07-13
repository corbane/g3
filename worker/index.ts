/// <reference path="./utilities.ts" />

/// <reference path="./math/common.ts" />
/// <reference path="./math/vec2.ts" />
/// <reference path="./math/vec3.ts" />
/// <reference path="./math/vec4.ts" />
/// <reference path="./math/mat2.ts" />
/// <reference path="./math/mat2d.ts" />
/// <reference path="./math/mat3.ts" />
/// <reference path="./math/mat4.ts" />
/// <reference path="./math/quat.ts" />
/// <reference path="./math/quat2.ts" />
/// <reference path="./math/funcs.ts" />

/// <reference path="../shared/index.ts" />

/// <reference path="./events/manager.ts" />

/// <reference path="./context/gl-constants-1.ts" />
/// <reference path="./context/gl-constants-2.ts" />
/// <reference path="./context/gl.ts" />

/// <reference path="./events/errors.ts" />
/// <reference path="./events/key.ts" />
/// <reference path="./events/pointer.ts" />
/// <reference path="./events/wheel.ts" />
/// <reference path="./events/button.ts" />
/// <reference path="./events/window.ts" />

/// <reference path="./io/ressource.ts" />

/// <reference path="./context/view.ts" />
/// <reference path="./context/projection.ts" />
/// <reference path="./context/sketch.ts" />

/// <reference path="./materials/textures.ts" />
// <reference path="./materials/glsl.ts" />
/// <reference path="./materials/shaders.ts" />

/// <reference path="./geometry/transforms.ts" />
/// <reference path="./geometry/buffers.ts" />
/// <reference path="./geometry/mesh.ts" />
/// <reference path="./geometry/immediate.ts" />
/// <reference path="./geometry/buitin/plane.ts" />
/// <reference path="./geometry/buitin/box.ts" />
/// <reference path="./geometry/buitin/sphere.ts" />

/// <reference path="./compiler/index.ts" />


;{  // Worker
    
    onmessage = (e) =>
    {
        switch (e.data[GS_EVENT_TYPE] as keyof g3.ClientMessages)
        {
        case G3_INIT_EVENT        : _init (e.data)                  ; break
        case G3_RESIZE_EVENT      : Internal.onResize      (e.data) ; break
        case G3_POINTER_MOVE_EVENT: Internal.onPointerMove (e.data) ; break
        case G3_WHEEL_EVENT       : Internal.onWheelEvent  (e.data) ; break
        case G3_BUTTON_DOWN_EVENT : Internal.onButtonDown  (e.data) ; break
        case G3_BUTTON_UP_EVENT   : Internal.onButtonUp    (e.data) ; break
        case G3_KEY_DOWN_EVENT    : Internal.onKeyDown     (e.data) ; break
        case G3_KEY_UP_EVENT      : Internal.onKeyUp       (e.data) ; break
        }
    }

    const _init = function (data: g3.InitMessage)
    {
        Internal.setBaseUri      (data.baseUri)
        Internal.InitGLContext   (data.canvas)
        Internal.initView        (data.canvas)
        
        const inc = ((path: string) => { importScripts (path) }).bind (globalThis)
        const ext = data.sketch.substr (-3).toLocaleLowerCase ()

        if(ext == ".js")
        {
            inc (data.sketch)
        }
        else if(ext == ".ts")
        {
            inc (data.libDirectory + "/typescriptServices.js")
            Internal.compileSketch (data.sketch, (src => {
                Internal.EvluateAsPublic (src)
            }))
        }
        else
            throw "Unknow file format"
    }
}