
"use strict"

declare var WheelDelta : number
declare var WheelMode: number

declare var OnWheel : () => void

;{  // Wheel Events

    let m_onwheel = null as () => void

    const onWheelEvent = function (data: g3.WheelMessage)
    {
        Object.assign(globalThis, data)

        if(m_onwheel)
            m_onwheel ()
    }

    Internal.definePublicProperties ({
        OnWheel : {
            get () { return m_onwheel },
            set (cb: () => void) { if(typeof cb == "function") m_onwheel = cb; else throw "The OnWheel value is not a function" }
        }
    })

    Internal.defineInternalMethods ({
        onWheelEvent
    })
}

declare namespace Internal
{
    function onWheelEvent  (data: g3.WheelMessage)  : void
}