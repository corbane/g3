
"use strict"

declare var Button: number

declare var OnButtonDown : () => void
declare var OnButtonUp : () => void

;{  // Mouse Events

    let m_ondown = null as () => void
    let m_onup = null as () => void

    const onButtonDown = function (data: g3.ButtonMessage)
    {
        Object.assign (globalThis, data)

        if (m_ondown)
            m_ondown ()
    }

    const onButtonUp = function (data: g3.ButtonMessage)
    {
        Object.assign (globalThis, data)

        if (m_onup)
            m_onup ()
    }

    Internal.definePublicProperties ({
        OnButtonDown : {
            get () { m_ondown },
            set (cb) { if(typeof cb == "function") m_ondown = cb; else throw "The OnButtonDown value is not a function" }
        },
        OnButtonUp : {
            get () { m_onup },
            set (cb) { if(typeof cb == "function") m_onup = cb; else throw "The OnButtonUp value is not a function" }
        }
    })

    Internal.defineInternalMethods ({
        onButtonDown,
        onButtonUp
    })
}

declare namespace Internal
{
    function onButtonDown  (data: g3.ButtonMessage) : void
    function onButtonUp    (data: g3.ButtonMessage) : void
}