
"use strict"

const IS_RESOURCE = Symbol.for ("GS_RESOURCE")

interface IResource <T = any>
{
    readonly isLoaded: boolean
    readonly data    : T|null
}

declare function loadImage <T> (url: string, callback?: (rsc: ImageBitmap) => T): IResource<T>
declare function loadText  <T> (url: string, callback?: (rsc: string) => T)     : IResource<T>
declare function loadJson  <T> (url: string, callback?: (rsc: object) => T)     : IResource<T>

declare namespace Internal
{
    type Resource <T = any> = { -readonly [K in keyof IResource<T>]: IResource<T>[K] } & { [IS_RESOURCE]: true }

    function isLoading (): boolean
    function setBaseUri (uri: string): void
    function getResourcePath (path: string): string
}

;{  // Resources Manager
    
    let m_baseuri = ""
    let m_loading_count = 0

    const setBaseUri = function (uri: string)
    {
        if(uri[uri.length - 1] != '/')
            m_baseuri = uri + '/'
        else
            m_baseuri = uri
    }

    const getResourcePath = function (path: string)
    {
        return m_baseuri + ( path[0] == '/' ?  path.substring (1) : path )
    }

    const isLoading = function () { return m_loading_count != 0 }

    const fetchArrayBuffer = function <R> (url: string, callback?: (rsc: ArrayBuffer) => R)
    {
        m_loading_count++
        
        const rsc: Partial <Internal.Resource <R>> = {
            [IS_RESOURCE]  : true,
            isLoaded       : false,
            data           : null
        }
        
        fetch (url)
        .then (ret => ret.arrayBuffer ())
        .then (arrbuf =>
        {
            rsc.isLoaded = true

            if (callback)
                rsc.data = callback (arrbuf)
                
            _finallyLoad ()
        })
        .catch (err =>
        {
            Internal.addAndEmitError (err)

            _finallyLoad ()
        })

        return rsc as IResource <R>
    }

    const loadImage = function <R> (url: string, callback?: (rsc: ImageBitmap) => R)
    {
        m_loading_count++
        
        const rsc: Partial <Internal.Resource <R>> = {
            [IS_RESOURCE]  : true,
            isLoaded: false,
            data: null
        } 

        fetch (getResourcePath (url))
        .then (ret => ret.blob ())
        .then (blob => createImageBitmap (blob))
        .then (img =>
        {
            rsc.isLoaded = true

            if (callback)
                rsc.data = callback (img)
                
            _finallyLoad ()
        })
        .catch (err =>
        {
            Internal.addAndEmitError (err)

            _finallyLoad ()
        })

        return rsc as IResource <R>
    }

    const loadText = function <R> (url: string, callback?: (text: string) => R)
    {
        m_loading_count++
        
        const rsc: Partial <Internal.Resource <R>> = {
            [IS_RESOURCE]  : true,
            isLoaded: false,
            data: null
        }

        fetch (getResourcePath (url))
        .then (ret => ret.text())
        .then (text =>
        {
            rsc.isLoaded = true

            if (callback)
                rsc.data = callback (text)
                
            _finallyLoad ()
        })
        .catch (err =>
        {
            Internal.addAndEmitError (err)

            _finallyLoad ()
        })

        return rsc as IResource <R>
    }

    const loadJson = function <R> (url: string, callback?: (json: object) => R)
    {
        m_loading_count++

        const rsc: Partial <Internal.Resource <R>> = {
            [IS_RESOURCE]  : true,
            isLoaded: false,
            data: null
        }

        fetch (getResourcePath (url))
        .then (ret => ret.json())
        .then (json => 
        {
            rsc.isLoaded = true

            if(callback)
                rsc.data = callback(json)
                
            _finallyLoad()
        })
        .catch (err =>
        {
            Internal.addAndEmitError (err)

            _finallyLoad()
        })

        return rsc as IResource <R>
    }

    const _finallyLoad = function ()
    {
        m_loading_count--

        if (m_loading_count != 0)
            return

        //if (m_on_loaded)
        //    m_on_loaded ()

        Internal.dispatch ("resource-loaded")
    }

    Internal.definePublicMethods ({
        loadImage,
        loadText,
        loadJson
    })

    Internal.defineInternalMethods ({
        isLoading,
        setBaseUri,
        getResourcePath
    })
}
