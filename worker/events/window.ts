
"use strict"

declare var OnResize : () => void

;{
    let m_onresize = null as () => void

    const onResize = function (data: g3.ResizeMessage)
    {
        Internal.resizeView (data.Width, data.Height)
        
        if (m_onresize)
            m_onresize ()
    }

    Internal.definePublicProperties ({
        OnResize : {
            get () { return m_onresize },
            set (cb: () => void) { if(typeof cb == "function") m_onresize = cb; else throw "The OnResize value is not a function" }
        }
    })

    Internal.defineInternalMethods({
        onResize
    })
}

declare namespace Internal
{
    function onResize (data: g3.ResizeMessage): void
}