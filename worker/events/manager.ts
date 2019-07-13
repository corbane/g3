
const ALL_CALLBACKS = '*'

declare namespace Internal
{
    type EventNames = "*" | "error"
                    | "resource-loaded"
                  // | "use-sketch" | "play-sketch"
                  // | "use-view" | "resize-view" | "lost-view"
                  // | "resize-window" // | "resize-window-start" | "resize-window-stop"

    type AnyCallbacks = (...args: any[]) => void
    
    function on       (event: EventNames, fn: AnyCallbacks) : void
    function once     (event: EventNames, fn: AnyCallbacks) : void
    function off      (event: EventNames, fn: AnyCallbacks) : void
    function dispatch (event: EventNames, ...args: any)     : void
}

;{  // Internal Event Manager

    type Names = Internal.EventNames
    type Cb = Internal.AnyCallbacks

    const m_cbs = new Map<string, Set<Cb>>()

    const on = function (event: Names, fn: Cb)
    {
        if(m_cbs.has(event))
            m_cbs.get(event).add(fn)

        else
            m_cbs.set(event, new Set <Cb> ().add(fn))
    }

    const off = function (event: Names, fn: Cb)
    {
        if(event === ALL_CALLBACKS && !fn)
        {
            m_cbs.clear ()
            return
        }

        if(!fn)
            return
    
        const fns = m_cbs.get (event)

        if(fns)
        {
            if(fns.size === 1)
                m_cbs.delete (event)
                
            else
                fns.delete (fn)
        }
    }

    const once = function (event: Names, fn: Cb)
    {
        let _on = (...args: any) =>
        {
            off(event, _on)
            fn (...args) //.apply(NS_API, args)
        }
        return on(event, _on)
    }

    const dispatch = function (event: Names, ...args: any)
    {
        if(event !== ALL_CALLBACKS)
        {
            const fns = m_cbs.get(event)
            if(fns)
                for (const cb of fns) cb (...args)
        }

        const fns = m_cbs.get(ALL_CALLBACKS)
        if(fns)
            for (const cb of fns) cb (...args)
    }

    Internal.defineInternalMethods ({
        on,
        once,
        off,
        dispatch
    })
}