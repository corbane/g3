
"use strict"

interface ISketch
{
    onError ? (err: Error): void
}

declare var error: Error
declare var stopOnError: boolean

declare var OnError : (err: Error) => void

declare namespace Internal
{
    function addError        (err: Error): void
    function addAndEmitError (err: Error): void
    
    function initSketchErrorEvents (): void
}

;{  // Errors Events

    let m_onerr = null as (err: Error) => void

    let m_errors    = [] as Error[]
    let m_lasterr   = null as Error
    let m_stoponerr = true    

    const addError = function (err: Error)
    {
        m_errors.push(err)

        if(m_stoponerr)
            throw err.message
    }

    const addAndEmitError = function (err: Error)
    {
        m_errors.push(err)

        if (m_onerr)
            m_onerr (err)

        if(m_stoponerr)
            throw err.message
    }
    
    Internal.definePublicProperties({
        error: {
            get () { return m_lasterr },
            set (value) { addAndEmitError(value) }
        },
        stopOnError: {
            get () { return m_stoponerr },
            set (value) { m_stoponerr = Boolean(value) }
        },
        OnError: {
            get () { return m_onerr },
            set (cb: () => void) { if(typeof cb == "function") m_onerr = cb; else throw "The OnError value is not a function" }
        }
    })

    Internal.defineInternalMethods({
        addError,
        addAndEmitError
    })
}
