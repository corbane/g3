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
            // https://github.com/Microsoft/TypeScript/blob/master/src/compiler/utilities.ts#L1012
            const TriSlashRef = /^(\/\/\/\s*<reference\s+path\s*=\s*)('|")(.+?)\2.*?\/>/gm

            // https://github.com/gavinhungry/typestring/blob/master/typestring.js

           //src = src.replace(TriSlashRef, (m, p1, p2, filename) => 
           //{
           //    // refs[filename] || m);
           //})


            var output = ts.transpile (src, {
                module: ts.ModuleKind.None,
                outFile: "out.js",
                
            })

           cb (output)
        })
    }

    Internal.defineInternalMethods ({
        compileSketch
    })
}