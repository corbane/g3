
"use strict"

var gl = null as WebGLRenderingContext

interface WebGLRenderbuffer
{
    width?: number
    height?: number
}

type GLExtension = "OES_texture_float"
                 | "OES_texture_float_linear"
                 | "OES_texture_half_float"
                 | "OES_texture_half_float_linear"

declare function useGLExtention (name: GLExtension) : boolean

const CullFaceMode = // https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#Culling
{
    "back"          : 0x0405,
    "front"         : 0x0404,
    "front and back": 0x0408
}

declare function useCullFace (mode?: keyof typeof CullFaceMode) : void

const TestFunc = // https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#Depth_or_stencil_tests
{
    "greater" : 0x0204,  // gl.GREATER
    "gequal"  : 0x0206,  // gl.GEQUAL
    "lequal"  : 0x0203,  // gl.LEQUAL
    "less"    : 0x0201,  // gl.LESS
    "notequal": 0x0205,  // gl.NOTEQUAL
    "equal"   : 0x0202,  // gl.EQUAL
    "never"   : 0x0200,  // gl.NEVER
    "always"  : 0x0207,  // gl.ALWAYS
}

declare function useDepthTest(active: false): void
declare function useDepthTest(func?: keyof typeof TestFunc): void

declare function useStencilFunc(func: keyof typeof TestFunc, ref: number, mask: number) : void

declare function usePolygonOffset(active: false): void
declare function usePolygonOffset(): void
declare function usePolygonOffset(factor: number, units: number) : void

declare function useSampleCoverage(value: number, invert: boolean) : void

declare function useScissor(x: number, y: number, width: number, height: number) : void

const BlendEquationMode = // https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#Blending_equations
{
    "add"                   : 0x8006, // gl.FUNC_ADD
    "func substract"        : 0x800A, // gl.FUNC_SUBTRACT
    "func reverse substract": 0x800B, // gl.FUNC_REVERSE_SUBTRACT

    // EXT_blend_minmax */
    //"min ext" : ext.MIN_EXT,
    //"max ext" : ext.MAX_EXT,

    // WebGL 2 */
    //"min" : gl.MIN,
    //"max" : gl.MAX,

}

// #region algo
//
//    0     4       9    13     18
//  "[z]ero[ ]"    [ ]   [ ]    [ ]       : z
//  "[o]ne"[ ]     [ ]   [ ]    [ ]       : o
//  "[o]ne [m]inus [d]st [a]lpha[ ]"      : omda
//  "[o]ne [m]inus [d]st [c]olor[ ]"      : omdc
//  "[o]ne [m]inus [s]rc [a]lpha[ ]"      : omsa
//  "[o]ne [m]inus [s]rc [c]olor[ ]"      : omsc
//  "[o]ne [m]inus [c]ons[t]ant [c]olor"  : omctc
//  "[o]ne [m]inus [c]ons[t]ant [a]lpha"  : omcta
//  "[d]st [a]lpha"[ ]   [ ]    [ ]       : da
//  "[d]st [c]olor"[ ]   [ ]    [ ]       : dc
//  "[s]rc [a]lpha"[ ]   [ ]    [ ]       : sa
//  "[s]rc [c]olor"[ ]   [ ]    [ ]       : sc
//  "[s]rc [a]lpha [s]atu[r]ate"[ ]       : sasr
//  "[c]ons[t]ant a[l]pha[ ]"   [ ]       : ctl
//  "[c]ons[t]ant c[o]lor[ ]"   [ ]       : cto
//
// #endregion
const BlendFuncFactor = // https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#Blending_modes
{
    "zero"                    : 0,      //  gl.ZERO,
    "one"                     : 1,      //  gl.ONE,
    "src color"               : 0x0300, //  gl.SRC_COLOR,
    "one minus src color"     : 0x0301, //  gl.ONE_MINUS_SRC_COLOR,
    "dst color"               : 0x0306, //  gl.DST_COLOR,
    "one minus dst color"     : 0x0307, //  gl.ONE_MINUS_DST_COLOR,
    "src alpha"               : 0x0302, //  gl.SRC_ALPHA,
    "one minus src alpha"     : 0x0303, //  gl.ONE_MINUS_SRC_ALPHA,
    "dst alpha"               : 0x0304, //  gl.DST_ALPHA,
    "one minus dst alpha"     : 0x0305, //  gl.ONE_MINUS_DST_ALPHA,
    "constant color"          : 0x8001, //  gl.CONSTANT_COLOR,
    "one minus constant color": 0x8002, //  gl.ONE_MINUS_CONSTANT_COLOR,
    "constant alpha"          : 0x8003, // gl.CONSTANT_ALPHA,
    "one minus constant alpha": 0x8004, // gl.ONE_MINUS_CONSTANT_ALPHA,
    "src alpha saturate"      : 0x0308, // gl.SRC_ALPHA_SATURATE,
}

declare function useBlend(active: false) : void
declare function useBlend() : void
declare function useBlend(equation: keyof typeof BlendEquationMode, sfactor: keyof typeof BlendFuncFactor, dfactor: keyof typeof BlendFuncFactor): void

declare function drawOnTexture  (tex: ITexture2D) : void
declare function drawOnView     ()                : void

;{
    let m_fbuf       = null as WebGLFramebuffer
    let m_rbuf       = null as WebGLRenderbuffer
    let m_stack_view = null as Int32Array

    const drawOnTexture = function(tex: ITexture2D)
    {
        if(m_stack_view)
            drawOnView()

        m_stack_view = gl.getParameter(gl.VIEWPORT) 

        m_fbuf = m_fbuf || gl.createFramebuffer()
        m_rbuf = m_rbuf || gl.createRenderbuffer()

        gl.bindFramebuffer  (FRAMEBUFFER , m_fbuf)
        gl.bindRenderbuffer (RENDERBUFFER, m_rbuf)

        if(tex.width != m_rbuf.width || tex.height != m_rbuf.height)
        {
            m_rbuf.width  = tex.width
            m_rbuf.height = tex.height
            gl.renderbufferStorage(RENDERBUFFER, DEPTH_COMPONENT16, tex.width, tex.height)
        }

        gl.framebufferTexture2D    (FRAMEBUFFER, COLOR_ATTACHMENT0, TEXTURE_2D, (tex as Internal.Sampler2D).GL_HANDLE, 0)
        gl.framebufferRenderbuffer (FRAMEBUFFER, DEPTH_ATTACHMENT, RENDERBUFFER, m_rbuf)

        if(gl.checkFramebufferStatus (FRAMEBUFFER) != FRAMEBUFFER_COMPLETE)
            throw new Error('Rendering to this texture is not supported (incomplete framebuffer)')
        
        gl.viewport(0, 0, tex.width, tex.height)
    }

    const drawOnView = function()
    {
        if(m_stack_view == null)
            return
        
        gl.bindFramebuffer  (FRAMEBUFFER, null);
        gl.bindRenderbuffer (RENDERBUFFER, null);

        const v = m_stack_view
        gl.viewport(v[0], v[1], v[2], v[3])
        m_stack_view = null
    }

    Internal.definePublicMethods ({
        drawOnTexture,
        drawOnView
    })
}
;{
    
    const useGLExtention = function (name: GLExtension)
    {
        return gl.getExtension(name) != null
    }

    const useCullFace = function (mode?: keyof typeof CullFaceMode)
    {
        gl.enable(gl.CULL_FACE)

        if(mode)
            gl.cullFace(CullFaceMode[mode])
    }

    const useDepthTest = function (a?: keyof typeof TestFunc|false)
    {
        if(a === false)
        {
            gl.disable(gl.DEPTH_TEST)
        }
        else
        {
            gl.enable(gl.DEPTH_TEST)

            if(a)
                gl.depthFunc(TestFunc[a])
        }
    }

    const useStencilFunc = function (func: keyof typeof TestFunc, ref: number, mask: number)
    {
        gl.enable(gl.STENCIL_TEST)
        gl.stencilFunc(TestFunc[func], ref, mask)
    }

    const usePolygonOffset = function (a?: number|false, b?: number)
    {
        if(a === false)
        {
            gl.disable(gl.POLYGON_OFFSET_FILL)
        }
        else
        {
            gl.enable(gl.POLYGON_OFFSET_FILL)

            if(a)
                gl.polygonOffset(a, b)
        }
    }

    const useSampleCoverage = function (value: number, invert: boolean)
    {
        gl.enable(gl.SAMPLE_COVERAGE)
        gl.sampleCoverage(value, invert)
    }

    const useScissor = function (x: number, y: number, width: number, height: number)
    {
        gl.enable(gl.SCISSOR_TEST)
        gl.scissor(x, y, width, height)
    }

    const useBlend = function(a?: keyof typeof BlendEquationMode|false, sfactor?: keyof typeof BlendFuncFactor, dfactor?: keyof typeof BlendFuncFactor)
    {
        if(a === false)
        {
            gl.disable(gl.BLEND)
        }
        else
        {
            gl.enable (gl.BLEND)

            if(a)
                gl.blendEquation (BlendEquationMode[a])
            
            if(sfactor && dfactor)
                gl.blendFunc (BlendFuncFactor[sfactor], BlendFuncFactor[dfactor])
        }
    }

    Internal.definePublicMethods ({
        useGLExtention,
        useCullFace,
        useDepthTest,
        useStencilFunc,
        usePolygonOffset,
        useSampleCoverage,
        useScissor,
        useBlend
    })
}


namespace Internal
{
    export function InitGLContext (offscreen: OffscreenCanvas)
    {
        try
        {
            gl = offscreen.getContext('webgl') as WebGLRenderingContext
        }
        catch (error)
        {
            throw new Error('WebGL not supported')
        }
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants
    export const UniformTypes =
    {
        byte       : 0x1400,   // gl.BYTE
        ubyte      : 0x1401,   // gl.UNSIGNED_BYTE

        short      : 0x1402,   // gl.SHORT
        ushort     : 0x1403,   // gl.UNSIGNED_SHORT

        int        : 0x1404,   // gl.INT
        uint       : 0x1405,   // gl.UNSIGNED_INT
        ivec2      : 0x8B53,   // gl.INT_VEC2
        ivec3      : 0x8B54,   // gl.INT_VEC3
        ivec4      : 0x8B55,   // gl.INT_VEC4

        float      : 0x1406,   // gl.FLOAT
        fmat2      : 0x8B5A,   // gl.FLOAT_MAT2
        fmat3      : 0x8B5B,   // gl.FLOAT_MAT3
        fmat4      : 0x8B5C,   // gl.FLOAT_MAT4
        fvec2      : 0x8B50,   // gl.FLOAT_VEC2
        fvec3      : 0x8B51,   // gl.FLOAT_VEC3
        fvec4      : 0x8B52,   // gl.FLOAT_VEC4

        bool       : 0x8B56,   // gl.BOOL
        bvec2      : 0x8B57,   // gl.BOOL_VEC2
        bvec3      : 0x8B58,   // gl.BOOL_VEC3
        bvec4      : 0x8B59,   // gl.BOOL_VEC4

        tex2D      : 0x8B5E,   // gl.SAMPLER_2D
        texCube    : 0x8B60,   // gl.SAMPLER_CUBE

        /* WebGL 2 */

        tex3D          : 0x8B5F,   // gl.SAMPLER_3D
        tex2D_arr      : 0x8DC1,   // gl.SAMPLER_2D_ARRAY
        tex2D_arrshadow: 0x8DC4,   // gl.SAMPLER_2D_ARRAY_SHADOW
        tex2D_shadow   : 0x8B62,   // gl.SAMPLER_2D_SHADOW
        texCube_shadow : 0x8DC5,   // gl.SAMPLER_CUBE_SHADOW

        itex2D         : 0x8DCA,   // gl.INT_SAMPLER_2D
        itex2D_arr     : 0x8DCF,   // gl.INT_SAMPLER_2D_ARRAY
        itex3D         : 0x8DCB,   // gl.INT_SAMPLER_3D
        itexCUBE       : 0x8DCC,   // gl.INT_SAMPLER_CUBE

        uitex2D        : 0x8DD2,   // gl.UNSIGNED_INT_SAMPLER_2D
        uitex2D_arr    : 0x8DD7,   // gl.UNSIGNED_INT_SAMPLER_2D_ARRAY
        uitex3D        : 0x8DD3,   // gl.UNSIGNED_INT_SAMPLER_3D
        uitexCube      : 0x8DD4,   // gl.UNSIGNED_INT_SAMPLER_CUBE

        texBinding     : 0x8919,   // gl.SAMPLER_BINDING
    }
}

