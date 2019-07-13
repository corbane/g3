
"use strict"

declare var Width  : number
declare var Height : number

declare function drawBackground (r: number, g: number, b: number, a: number)                            : void
declare function setClearColor  (r: number, g: number, b: number, a: number)                            : void
declare function clearView      (stencil?: boolean)                                                     : void

declare namespace Internal
{
    type FullscreenOptions =
    {
        paddingTop?   : number
        paddingLeft?  : number
        paddingRight? : number
        paddingBottom?: number
        camera?       : any
        fov?          : number
        near?         : number
        far?          : number
    }

    function initView   (offcanvas: OffscreenCanvas) : void
    function resizeView (width: number, height: number) : void
}

;{  // View API

    let m_width  = 0
    let m_height = 0
    let m_offcanvas: OffscreenCanvas

    const initView = function (offcanvas: OffscreenCanvas)
    {
        m_offcanvas = offcanvas

        m_width  = m_offcanvas.width 
        m_height = m_offcanvas.height
        
        gl.viewport(0, 0, m_width, m_height)
    }

    const resizeView = function (width: number, height: number)
    { 
        m_width  = width
        m_height = height

        m_offcanvas.width  = width   // * pixelRation
        m_offcanvas.height = height  // * pixelRation
        
        gl.viewport(0, 0, m_width, m_height)
    }

    const drawBackground = function (r: number, g: number, b: number, a: number)
    {
        gl.clearColor(r, g, b, a);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
    }

    const setClearColor = function (r: number, g: number, b: number, a: number)
    {
        gl.clearColor(r, g, b, a);
    }

    const clearView = function (stencil: boolean = false)
    {
        if(stencil)
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT)
        else
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
    }

    Internal.definePublicProperties ({
        Width : {
            get () { return m_width },
            set (v) { throw "You can not the Width property" }
        },
        Height : {
            get () { return m_height },
            set (v) { throw "You can not the Height property" }
        },
    })

    Internal.definePublicMethods ({
        drawBackground,
        setClearColor,
        clearView
    })

    Internal.defineInternalMethods ({
        initView,
        resizeView
    })
}

