
"use strict"

declare var HasDownKeys: boolean
declare var Key        : string
declare var KeyCode    : number

declare var OnKeyDown : () => void
declare var OnKeyUp   : () => void

declare function getKeys   ()                                  : string[]
declare function isDownKey (key: string)                       : boolean
declare function isDownKey (keyCode: number)                   : boolean
declare function isDownKey (combination: Array<string|number>) : boolean

;{  // Keyboard Events

    let m_ondown = null as () => void
    let m_onup   = null as () => void
    let m_kcodes = {} as { [key: number]: boolean }

    const onKeyDown = function (data: g3.KeyDownMessage)
    {
        Object.assign (globalThis, data)
        m_kcodes[data.KeyCode] = true

        if (m_ondown)
            m_ondown ()
    }

    const onKeyUp = function (data: g3.KeyUpMessage)
    {
        Object.assign (globalThis, data)
        m_kcodes[data.KeyCode] = false

        if (m_onup)
            m_onup ()
    }

    const getKeys = function ()
    {
        return Object.keys(m_kcodes)
    }

    const isDownKey = function (arg: string|number|Array<string|number>)
    {
        if(typeof arg == "number")
            return arg in m_kcodes
           
        if(typeof arg == "string")
            return arg.charCodeAt(0) in m_kcodes

        for(const i in arg)
        {
            const k = arg[i]
            
            if(typeof k == "number" && !(k in m_kcodes))
                return false

            else if(typeof k == "string" && !(k.charCodeAt(0) in m_kcodes))
                return false

            else
                return false
        }
        return true
    }

    Internal.definePublicProperties ({
        HasDownKeys: {
            get () { return Object.keys(m_kcodes).length != 0 },
            set (value) { throw "You can not assign the 'hasDownKeys' variable" }
        },
        OnKeyDown : {
            get () { m_ondown },
            set (cb) { if(typeof cb == "function") m_ondown = cb; else throw "The OnKeyDown value is not a function" }
        },
        OnKeyUp : {
            get () { m_onup },
            set (cb) { if(typeof cb == "function") m_onup = cb; else throw "The OnKeyUp value is not a function" }
        }
    })

    Internal.definePublicMethods ({
        getKeys,
        isDownKey
    })

    Internal.defineInternalMethods ({
        onKeyDown,
        onKeyUp
    })
}

declare namespace Internal
{
    function onKeyDown (data: g3.KeyDownMessage) : void
    function onKeyUp   (data: g3.KeyUpMessage) : void
}