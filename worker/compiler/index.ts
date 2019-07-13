/// <reference path="./typescriptServices.d.ts" />

declare namespace Internal
{
    function compileSketch (path: string, cb: (src: string) => void) : void
}

; {
    const compileSketch = function (path: string, cb: (src: string) => void) : void
    {
        fetch (path)
        .then (ret => ret.text ())
        .then (src =>
        {
           var output = ts.transpile (src, {
               module: ts.ModuleKind.None
           })

           cb (output)
        })
    }

    Internal.defineInternalMethods ({
        compileSketch
    })
}