/// <reference path="../events/pointer.ts" />

"use strict"

declare function requestAnimationFrame (callbacl: (time: number) => void): void

/*
interface ISketch
{
    OnSetup ? ()
    OnDraw  ? (millis: number)
}
declare var Sketch : ISketch
*/

declare var OnSetup      : () => void
declare var OnDraw       : (millis: number) => void

declare function draw  (): void
declare function play  (): void
declare function pause (): void

;{  // Sketch API

    let m_onsetup = null as () => void
    let m_ondraw  = null as (millis: number) => void
    let m_framecb = null as (millis: number) => void
    let m_isrun   = false
    let m_issetup = false

    const draw = function ()
    {
        if (m_isrun)
            return
            
        _beforeDraw ()

        if(m_issetup)
            _waitResource (() => m_ondraw (0))
        else
            _setup (() => _waitResource (() => m_ondraw (0)))
    }

    const play = function ()
    {
        if (m_isrun)
            return
            
        _beforeDraw ()

        m_framecb = (millis: number) =>
        {
            m_ondraw (millis)
            requestAnimationFrame(m_framecb)
        }

        m_isrun = true
        
        if(m_issetup)
            _waitResource (() => requestAnimationFrame(m_framecb))
        else
            _setup (() => _waitResource (() => requestAnimationFrame(m_framecb)))
    }

    const pause = function ()
    {
        if (!m_isrun)
            return

        m_framecb = () => { m_isrun = false }
    }

    const _beforeDraw = function ()
    {
        if(typeof m_ondraw != "function")
            throw "You must define a 'onDraw' function in the sketch before play it."  
    }
    
    const _waitResource = function (cb: () => void)
    {
        if (Internal.isLoading ())
            Internal.once ("resource-loaded", () => { cb () })
        else
            cb ()
    }

    const _setup = function (cb: () => void)
    {
        m_issetup = true
        _waitResource (() => { if(m_onsetup) m_onsetup () ; cb () })
    }

    Internal.definePublicMethods ({
        draw,
        play,
        pause
    })

    Internal.definePublicProperties({
        OnSetup: {
            get () { return m_onsetup },
            set (cb: () => void) { if(typeof cb == "function") m_onsetup = cb; else throw "The OnSetup value is not a function" }
        },
        OnDraw: {
            get () { return m_ondraw },
            set (cb: () => void) { if(typeof cb == "function") m_ondraw = cb; else throw "The OnDraw value is not a function" }
        }
    })
}
