
declare function lerp <T extends LVec2|LVec3|LVec4> (vin: T, vout: T, v: number): T
declare function remap (vin: LVec2, vout: LVec2, v: number)                     : number

//declare function length    (a: LVec2|LVec3|LVec4)
declare function len       (a: LVec2|LVec3|LVec4)                    : number
declare function distance  <T extends LVec2|LVec3|LVec4> (a: T, b: T): number
declare function dot       <T extends LVec2|LVec3|LVec4> (a: T, b: T): number
declare function cross     (a: LVec3, b: LVec3)                      : LVec3
declare function normalize <T extends LVec2|LVec3|LVec4> (a: T)      : T

;{
    type Tin = LVec2|LVec3|LVec4

    const remap = function (vin: LVec2, vout: LVec2, t: number)
    {
        const num = (t - vin[0]) / (vin[1]-vin[0])
        return vout[0] + num     * (vout[1]-vout[0])
    }

    const lerp = function <T extends Tin> (vin: T, vout: T, v: number)
    {
        switch (vin.length)
        {
        case 2: return vec2.lerp (vec2(), vin as LVec2, vout as LVec2, v) as T
        case 3: return vec3.lerp (vec3(), vin as LVec3, vout as LVec3, v) as T
        case 4: return vec4.lerp (vec4(), vin as LVec4, vout as LVec4, v) as T
        default: throw "Invalid arguments"
        }
    }

    Internal.definePublicMethods ({
        lerp,
        remap
    })
}

;{ // Geometric Functions

    type Tin = LVec2|LVec3|LVec4

    const length = function (a: Tin)
    {
        switch (a.length)
        {
        case 2: return vec2._length (a as LVec2)
        case 3: return vec3._length (a as LVec3)
        case 4: return vec4._length (a as LVec4)
        default: throw "Invalid arguments"
        }
    }

    const distance = function <T extends Tin>  (a: T, b: T)
    {
        switch (a.length)
        {
        case 2: return vec2.distance (a as LVec2, b as LVec2)
        case 3: return vec3.distance (a as LVec3, b as LVec3)
        case 4: return vec4.distance (a as LVec4, b as LVec4)
        default: throw "Invalid arguments"
        }
    }

    const dot = function <T extends Tin> (a: T, b: T)
    {
        switch (a.length)
        {
        case 2: return vec2.dot (a as LVec2, b as LVec2)
        case 3: return vec3.dot (a as LVec3, b as LVec3)
        case 4: return vec4.dot (a as LVec4, b as LVec4)
        default: throw "Invalid arguments"
        }
    }

    const cross = function (a: LVec3, b: LVec3)
    {
        return vec3.cross (vec3 (), a as LVec3, b as LVec3)
    }

    const normalize = function <T extends Tin>  (a: T): T
    {
        switch (a.length)
        {
        case 2: return vec2.normalize (a as LVec2, a as LVec2) as T
        case 3: return vec3.normalize (a as LVec3, a as LVec3) as T
        case 4: return vec4.normalize (a as LVec4, a as LVec4) as T
        default: throw "Invalid arguments"
        }
    }

    /*
    T faceforward(T N, T I, T Nref);    returns N if dot(Nref, I) < 0, else -N
    T reflect(T I, T N);                reflection direction I - 2 * dot(N,I) * N
    T refract(T I, T N, float eta);     refraction vector
    */

    Internal.definePublicMethods ({
        len: length,
        distance,
        dot,
        cross,
        normalize
    })
}


// http://www.shaderific.com/glsl-functions

;{  // Component-wise operation
        
    const template1 = function <T extends number|LVecN> (fn: (n: number) => number)
    {
        return function (a: T): T
        {
            switch (a.length)
            {
            case 1:
                return fn (a as number) as T
    
            case 2:
                const v2 = Object.create (a as LVecN)
                v2[0] = fn ((a as LVec2)[0])
                v2[1] = fn ((a as LVec2)[1])
                return v2
                
            case 3:
                const v3 = Object.create (a as LVecN)
                v3[0] = fn ((a as LVec3)[0])
                v3[1] = fn ((a as LVec3)[1])
                v3[2] = fn ((a as LVec3)[2])
                return v3
    
            case 4:
                const v4 = Object.create (a as LVecN)
                v4[0] = fn ((a as LVec4)[0])
                v4[1] = fn ((a as LVec4)[1])
                v4[2] = fn ((a as LVec4)[2])
                v4[3] = fn ((a as LVec4)[4])
                return v4
            }
            throw "Invalid arguments"
        }
    }
         
    const template1OutB = function <T extends number|LVecN> (fn: (n: number) => boolean)
    {
        return function (a: T): boolean | LVecB
        {
            switch (a.length)
            {
            case 1:
                return fn (a as number) as boolean
    
            case 2:
                const v2 = Object.create (a as LVecN)
                v2[0] = fn ((a as LVec2)[0])
                v2[1] = fn ((a as LVec2)[1])
                return v2
                
            case 3:
                const v3 = Object.create (a as LVecN)
                v3[0] = fn ((a as LVec3)[0])
                v3[1] = fn ((a as LVec3)[1])
                v3[2] = fn ((a as LVec3)[2])
                return v3
    
            case 4:
                const v4 = Object.create (a as LVecN)
                v4[0] = fn ((a as LVec4)[0])
                v4[1] = fn ((a as LVec4)[1])
                v4[2] = fn ((a as LVec4)[2])
                v4[3] = fn ((a as LVec4)[4])
                return v4
            }
            throw "Invalid argument"
        }
    }
      
    const template2 = function <T extends number|LVecN> (fn: (n1: number, n2: number) => number)
    {
        return function (a: T, b: T): T
        {
            switch (a.length)
            {
            case 1:
                return fn (a as number, b as number) as T
    
            case 2:
                const v2 = Object.create (a as LVecN)
                v2[0] = fn ( (a as LVec2)[0] , (b as LVec2)[0] )
                v2[1] = fn ( (a as LVec2)[1] , (b as LVec2)[1] )
                return v2
                
            case 3:
                const v3 = Object.create (a as LVecN)
                v3[0] = fn ( (a as LVec3)[0] , (b as LVec3)[0] )
                v3[1] = fn ( (a as LVec3)[1] , (b as LVec3)[1] )
                v3[2] = fn ( (a as LVec3)[2] , (b as LVec3)[2] )
                return v3
    
            case 4:
                const v4 = Object.create (a as LVecN)
                v4[0] = fn ( (a as LVec4)[0] , (b as LVec4)[0] )
                v4[1] = fn ( (a as LVec4)[1] , (b as LVec4)[1] )
                v4[2] = fn ( (a as LVec4)[2] , (b as LVec4)[2] )
                v4[3] = fn ( (a as LVec4)[4] , (b as LVec4)[4] )
                return v4
            }
            throw "Invalid arguments"
        }
    }
        
    const template3 = function <T extends number|LVecN> (fn: (n1: number, n2: number, n3: number) => number)
    {
        return function (a: T, b: T, c: T): T
        {
            switch (a.length)
            {
            case 1:
                return fn (a as number, b as number, c as number) as T
    
            case 2:
                const v2 = Object.create (a as LVecN)
                v2[0] = fn ( (a as LVec2)[0] , (b as LVec2)[0] , (c as LVec2)[0] )
                v2[1] = fn ( (a as LVec2)[1] , (b as LVec2)[1] , (c as LVec2)[1] )
                return v2
                
            case 3:
                const v3 = Object.create (a as LVecN)
                v3[0] = fn ( (a as LVec3)[0] , (b as LVec3)[0] , (c as LVec3)[0] )
                v3[1] = fn ( (a as LVec3)[1] , (b as LVec3)[1] , (c as LVec3)[1] )
                v3[2] = fn ( (a as LVec3)[2] , (b as LVec3)[2] , (c as LVec3)[2] )
                return v3
    
            case 4:
                const v4 = Object.create (a as LVecN)
                v4[0] = fn ( (a as LVec4)[0] , (b as LVec4)[0] , (c as LVec4)[0] )
                v4[1] = fn ( (a as LVec4)[1] , (b as LVec4)[1] , (c as LVec4)[1] )
                v4[2] = fn ( (a as LVec4)[2] , (b as LVec4)[2] , (c as LVec4)[2] )
                v4[3] = fn ( (a as LVec4)[4] , (b as LVec4)[4] , (c as LVec4)[4] )
                return v4
            }
            throw "Invalid arguments"
            
        }
    }

    // # Angle & Trigonometry Functions [8.1]

    Internal.definePublicMethods (
    {
        sin   : template1 (Math.cos),
        cos   : template1 (Math.cos),
        tan   : template1 (Math.tan),
        asin  : template1 (Math.asin),
        acos  : template1 (Math.acos),
        atan  : template1 (Math.atan),
        /* GLES 3.0 */
        sinh  : template1 (Math.sinh),
        cosh  : template1 (Math.cosh),
        tanh  : template1 (Math.tanh),
        asinh : template1 (Math.asinh),
        acosh : template1 (Math.acosh),
        atanh : template1 (Math.atanh)
    })
    
    // # Exponential Functions [8.2]

    Internal.definePublicMethods (
    {
        pow  : template2 (Math.pow),
        exp  : template1 (Math.exp),
        log  : template1 (Math.log),
        exp2 : template1 ((n) => Math.pow (2, n)),
        log2 : template1 (Math.log2),
        sqrt : template1 (Math.sqrt)
        //inversesqrt
    })

    // # Common Functions [8.3]

    Internal.definePublicMethods (
    {
        abs   : template1 (Math.abs),
        sign  : template1 (Math.sign),
        floor : template1 (Math.floor),
        trunc : template1 (Math.trunc),
        round : template1 (Math.round),
        //roundEven
        ceil  : template1 (Math.ceil),
        fract : template1 ((n) => n - Math.floor (n)),
        mod   : template2 ((a, b) => a % b),
        min   : template2 (Math.min),
        max   : template2 (Math.max),
        clamp : template3 ((a, b, c) => Math.min (Math.max (a, b), c)),
        //mix == lerp ?
        step  : template2 ((a, b) => b < a ? 0 : 1),
        //smoothstep
        isnan : template1OutB (isNaN),
        isinf : template1OutB ((a) => a == Infinity)
        // floatBitsToInt
        // intBitsToFloat
    })
}

// # Angle & Trigonometry Functions [8.1]
// In case of a vector the operation is calculated separately for every component.

declare function sin   <T extends number|LVecN> (radian: T) : T
declare function cos   <T extends number|LVecN> (radian: T) : T
declare function tan   <T extends number|LVecN> (radian: T) : T
declare function asin  <T extends number|LVecN> (radian: T) : T
declare function acos  <T extends number|LVecN> (radian: T) : T
declare function atan  <T extends number|LVecN> (radian: T) : T

/* GLES 3.0 */

declare function sinh  <T extends number> (radian: T) : T
declare function sinh  <T extends LVecN>  (radian: T) : T

declare function cosh  <T extends number> (radian: T) : T
declare function cosh  <T extends LVecN>  (radian: T) : T

declare function tanh  <T extends number> (radian: T) : T
declare function tanh  <T extends LVecN>  (radian: T) : T

declare function asinh <T extends number> (radian: T) : T
declare function asinh <T extends LVecN>  (radian: T) : T

declare function acosh <T extends number> (radian: T) : T
declare function acosh <T extends LVecN>  (radian: T) : T

declare function atanh <T extends number> (radian: T) : T
declare function atanh <T extends LVecN>  (radian: T) : T

// # Exponential Functions [8.2]
// In case of a vector the operation is calculated separately for every component.

declare function pow  <T extends number> (n1: T, n2: T) : T
declare function pow  <T extends LVecN>  (n1: T, n2: T) : T

declare function exp  <T extends number> (n: T) : T
declare function exp  <T extends LVecN>  (n: T) : T

declare function log  <T extends number> (n: T) : T
declare function log  <T extends LVecN>  (n: T) : T

declare function exp2 <T extends number> (n: T) : T
declare function exp2 <T extends LVecN>  (n: T) : T

declare function log2 <T extends number> (n: T) : T
declare function log2 <T extends LVecN>  (n: T) : T

declare function sqrt <T extends number> (n: T) : T
declare function sqrt <T extends LVecN>  (n: T) : T

//inversesqrt

// # Common Functions [8.3]
// In case of a vector the operation is calculated separately for every component.

declare function abs   <T extends number|LVecN> (n: T) : T
declare function sign  <T extends number|LVecN> (n: T) : T
declare function floor <T extends number|LVecN> (n: T) : T
declare function trunc <T extends number|LVecN> (n: T) : T
declare function round <T extends number|LVecN> (n: T) : T

declare function ceil  <T extends number|LVecN> (n: T) : T
declare function fract <T extends number|LVecN> (n: T) : T
declare function mod   <T extends number|LVecN> (n1: T, n2: T) : T
declare function min   <T extends number|LVecN> (n1: T, n2: T) : T
declare function max   <T extends number|LVecN> (n1: T, n2: T) : T
declare function clamp <T extends number|LVecN> (n1: T, n2: T, a: T) : T

declare function step  <T extends number|LVecN> (n1: T, n2: T) : T

declare function isnan <T extends number|LVecN> (n: T) : boolean | LVecB
declare function isinf <T extends number|LVecN> (n: T) : boolean | LVecB



