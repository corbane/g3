
"use strict"

//type Col <T> = { [key: string]: T }
const API = globalThis

/*const __decorate = function (decorators: Function[], target: any, key: string, descriptor: PropertyDescriptor)
{
    switch(arguments.length)
    {
    case 2: // class
    
        // CLS = __decorate ([dec], API)
        // => dec (ctor: { new(...args: any): {} })

        let ctor
        for (const dec of decorators)
            ctor = dec (ctor) || ctor

        return ctor

    case 3: // Properties
       
        // __decorate ([dec], CLS          , "name", void 0) //if static
        // __decorate ([dec], CLS.prototype, "name", void 0)
        // => dec (target: any, propertyKey: string)

        for (const dec of decorators)
            dec (target, key)

    default: // Properties accessor | Function

        // __decorate ([dec], CLS          , "name", null) //if static
        // __decorate ([dec], CLS.prototype, "name", null)
        // => dec (target: any, propertyKey: string, descriptor: PropertyDescriptor)
    
        var desc = descriptor || Object.getOwnPropertyDescriptor(target, key)

        for (const dec of decorators)
            desc = dec(target, key, desc) || desc
    }
}*/

declare namespace Internal
{
    //type PropertiesNames <T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T]
    type PropertiesMap = { [K in keyof typeof globalThis]?: PropertyDescriptor } & ThisType<any> 

    function defineInternalMethods  (funcs: Partial<typeof Internal>)   : void
    function definePublicMethods    (funcs: Partial<typeof globalThis>) : void
    function definePublicProperties (props: PropertiesMap)              : void
    function EvluateAsPublic        (code: string)                      : any
}

namespace Internal { "use strict" }

;{  // API Manager

    const m_eval = eval.bind(globalThis)

    const defineInternalMethods  = (funcs: Partial<typeof Internal>)   => Object.assign(Internal, funcs)
    const definePublicMethods    = (funcs: Partial<typeof globalThis>) => Object.assign(globalThis, funcs)
    const definePublicProperties = (props: Internal.PropertiesMap)     => Object.defineProperties(globalThis, props as PropertyDescriptorMap)

    const EvluateAsPublic        = (code: string)                      => m_eval (code)

    defineInternalMethods ({
        defineInternalMethods,
        definePublicMethods,
        definePublicProperties,
        EvluateAsPublic
    })
}

