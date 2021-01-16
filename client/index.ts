/// <reference path="../shared/index.ts" />

"use strict"

declare namespace g3
{
    class View extends HTMLCanvasElement {}
}

;{
    interface View extends HTMLCanvasElement
    {
        _worker: Worker
        _offscreen: OffscreenCanvas
    }

    const $$ = (query: string) => Object.values (document.querySelectorAll (query))

    let m_views  = [] as View[]
    let m_libdir = null as string
    let m_cwd    = null as string

    document.addEventListener ("DOMContentLoaded", () =>
    {
        _appendKeyboardEvents ()
        _initDirectories ()
        _initViews ()
        requestAnimationFrame (_watch)
    })

    const _initDirectories = function ()
    {
        var path = null as string
        
        for(const tag  of $$ ("script") as HTMLScriptElement[])
        {
            const src = tag.src

            if(src && src.substr(-5) == "g3.js")
            {
                const c = src.substr (-6, 1)
                if(src.length > 5 && c != '.' && c != '/')
                    continue

                path = src
                break
            }
        }

        if(path == null)
            throw "Internal error"

        m_libdir = path.substr(0, path.length - 5)

        if (m_libdir.substr (-1) != '/')
            m_libdir += '/'

        //

        m_cwd = location.href

        const regex = /[^.\/]+\.html?$/i
        const match = m_cwd.match (regex)

        if(match)
            m_cwd = m_cwd.substr (0, match.index)
        
        if (m_cwd.substr (-1) != '/')
            m_cwd += '/'
    }

    const _initViews = function ()
    {
        for(const view of $$ ("canvas[data-sketch]") as View[])
        {
            const wrk  = new Worker (m_libdir + "g3-worker.js")
            wrk.onerror   = _onWorkerError
            wrk.onmessage = _onWorkerMessage

            const ofs  = view.transferControlToOffscreen ()

            ofs.width  = view.clientWidth
            ofs.height = view.clientHeight

            view._worker    = wrk
            view._offscreen = ofs

            m_views.push (view)

            _post (wrk, G3_INIT_EVENT,
                {
                    canvas: ofs,
                    sketch: new URL (view.dataset.sketch, m_cwd).href,
                    baseUri: m_cwd,
                    libDirectory: m_libdir
                },
                [ofs]
            )

            _appendMouseEvents (view)
        }
    }

    const _watch = function ()
    {
        for(const v of m_views)
        {
            if (v.clientWidth  != v._offscreen.width
            ||  v.clientHeight != v._offscreen.height)
            {
                _post (v._worker, G3_RESIZE_EVENT, {
                    Width : (v._offscreen.width = v.clientWidth),
                    Height: (v._offscreen.height = v.clientHeight)
                })
            }
        }
    }

    // #region Utilities

    type PropertiesNames <T>   = { [K in keyof T]: T[K] extends keyof g3.ClientMessages ? never : K }[keyof T]
    type PropertiesMap <O> =  { [K in PropertiesNames <O>]: O[K] }

    const _post = function <K extends keyof g3.ClientMessages = keyof g3.ClientMessages> (w: Worker, type: K, msg: PropertiesMap<g3.ClientMessages[K]>, t?: [OffscreenCanvas|Transferable])
    {
        msg = Object.assign (msg, { [GS_EVENT_TYPE]: type })
        w.postMessage (msg, t as any)
    }

    const _postToAll = function <K extends keyof g3.ClientMessages = keyof g3.ClientMessages> (type: K, msg: PropertiesMap<g3.ClientMessages[K]>, t?: [OffscreenCanvas|Transferable])
    {
        const m = Object.assign (msg, { [GS_EVENT_TYPE]: type })
        for(const v of m_views)
            v._worker.postMessage (m, t as any)
    }

    // #endregion

    // #region Keyboard Events

    const _appendKeyboardEvents = function ()
    {
        window.addEventListener("keydown", _onDown)
        window.addEventListener("keyup"  , _onUp)
    }

    const _onDown = function (e: KeyboardEvent)
    {
        _postToAll (G3_KEY_DOWN_EVENT, {
            Key: e.key,
            KeyCode: e.keyCode
        })
        
    }

    const _onUp = function (e: KeyboardEvent)
    {
        const view = e.target as g3.View

        _postToAll (G3_KEY_UP_EVENT, {
            Key: e.key,
            KeyCode: e.keyCode
        })
    }

    // #endregion

    // #region Mouse Events

    const _appendMouseEvents = function (v: View)
    {
        v.addEventListener ("mousedown", _onButtonDown)
        v.addEventListener ("mouseup"  , _onButtonUp)
        v.addEventListener ("mousemove", _onMouseMove)
        v.addEventListener ("touchmove", _onMouseMove, { passive: true })
        v.addEventListener ("wheel"    , _updateWheelEvent, { passive: true })
    }

    const _removeMouseEvents = function (v: View)
    {
        v.removeEventListener ("mousedown", _onButtonDown)
        v.removeEventListener ("mouseup"  , _onButtonUp)
        v.removeEventListener ("mousemove", _onMouseMove)
        v.removeEventListener ("touchmove", _onMouseMove)
        v.removeEventListener ("wheel"    , _updateWheelEvent)
    }

    const _onButtonDown = function (e: MouseEvent)
    {
        const view = e.target as View

        _post (view._worker, G3_BUTTON_DOWN_EVENT, {
            Button: e.button
        })
    }

    const _onButtonUp = function (e: MouseEvent)
    {
        const view = e.target as View

        _post (view._worker, G3_BUTTON_UP_EVENT, {
            Button: e.button
        })
    }

    const _onMouseMove = function (e: MouseEvent)
    {
        const view = e.target as View

        _post (view._worker, G3_POINTER_MOVE_EVENT, {
            PointerLocation: [e.clientX, e.clientY],
            PointerMovement: [e.movementX, e.movementY],
            Force     : 1
        })
    }

    const _updateWheelEvent = function (e: WheelEvent)
    {
        const view = e.target as View

        _post (view._worker, G3_WHEEL_EVENT, {
            WheelDelta: e.deltaY,
            WheelMode : e.deltaMode
        })
    }

    // #endregion

    // #region Worker Events

    const _onWorkerError = function (e: ErrorEvent)
    {
        
    }

    const _onWorkerMessage = function (e: MessageEvent)
    {
        switch (e.data[GS_EVENT_TYPE])
        {
        }
    }

    // #endregion
}