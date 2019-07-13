
"use strict"

declare var PointerLocation: [number, number]
declare var PointerMovement: [number, number]
declare var PointerX : number
declare var PointerY : number
declare var deltaX   : number
declare var deltaY   : number

declare var OnPointerMove : () => void

;{  // Mouse Events

    let m_onmove = null as () => void
    let m_state = <g3.PointerMessage> {
        PointerLocation: [0, 0],
        PointerMovement: [0, 0],
        Force: 1
    }

    const onPointerMove = function (data: g3.PointerMessage)
    {
        Object.assign (m_state, data)
        Object.assign (globalThis, data)

        if (m_onmove)
            m_onmove ()
    }

    Internal.definePublicProperties ({
        PointerX: {
            get () { return m_state.PointerLocation[0] }
        },
        PointerY: {
            get () { return m_state.PointerLocation[1] }
        },
        OnPointerMove: {
            get () { return m_onmove },
            set (cb) { if(typeof cb == "function") m_onmove = cb; else throw "The OnPointerMove value is not a function" }
        }
    })

    Internal.defineInternalMethods ({
        onPointerMove
    })
}

declare namespace Internal
{
    function onPointerMove (data: g3.PointerMessage): void
}