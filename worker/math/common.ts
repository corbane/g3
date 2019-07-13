/**
 * Common utilities
 * @module glMatrix
 */

namespace glMatrix
{
    export function equals (a: number, b: number)
    {
        return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
    }

    if(!Math.hypot) Math.hypot = function ()
    {
        var y = 0, i = arguments.length;
        while(i--) y += arguments[i] * arguments[i];
        return Math.sqrt(y);
    };


}

interface Number { readonly length: 1 }
//@ts-ignore
Number.prototype.length = 1

interface Boolean { readonly length: 1 }
//@ts-ignore
Boolean.prototype.length = 1

type LVecN = LVec2 <number> | LVec3 <number> | LVec4 <number> 
type LVecB = LVec2 <boolean> | LVec3 <boolean> | LVec4 <boolean> 


const PI = 3.141592653589793
const EPSILON = 0.000001

declare function radians (degrees: number): number

;{
    const deg2rad = Math.PI / 180;

    const radians = function (degrees: number)
    {
        return degrees * deg2rad
    }

    Internal.definePublicMethods ({
        radians
    })
}






/* TEST


Number.prototype.length = 1

const model1 = function (fn)
{
    return function (a)
    {
        switch (a.length)
        {
        case 1:
            return fn (a)

        case 2:
            const v2 = Object.create (a)
            v2[0] = fn (a[0])
            v2[1] = fn (a[1])
            return v2
            
        case 3:
            const v3 = Object.create (a)
            v3[0] = fn (a[0])
            v3[1] = fn (a[1])
            v3[2] = fn (a[2])
            return v3

        case 4:
            const v4 = Object.create (a)
            v4[0] = fn (a[0])
            v4[1] = fn (a[1])
            v4[2] = fn (a[2])
            v4[3] = fn (a[4])
            return v4
        }
    }
}

sin1 = model1 (Math.sin)

var t1 = performance.now ()
for(var i = 0; i != 1000000; i++) Math.sin (2.5)
var t2 = performance.now ()
console.log ("Math.sin => " + (t2-t1))

var t1 = performance.now ()
for(var i = 0; i != 1000000; i++)  sin1 (2.5)
var t2 = performance.now ()
console.log ("sin1     => " + (t2-t1))

// No differences

// ----

sin1 = model1 (Math.sin)
const val = [12.5, 5.032, 5124.2]

var t1 = performance.now ()
for(var i = 0; i != 1000000; i++) 
{
  Math.sin (val[0])
  Math.sin (val[1])
  Math.sin (val[2])
}
var t2 = performance.now ()
console.log ("Math.sin => " + (t2-t1))

var t1 = performance.now ()
for(var i = 0; i != 1000000; i++)  sin1 (val)
var t2 = performance.now ()
console.log ("sin1     => " + (t2-t1))


// Math.sin => 466.74499999971886
// sin1     => 646.6299999992771

// ----

sin1 = model1 (Math.sin)
const val = [12.5, 5.032, 5124.2, 0.00002]

var t1 = performance.now ()
for(var i = 0; i != 1000000; i++) 
{
  const v4 = Object.create (val)
  v4[0] = Math.sin (val[0])
  v4[1] = Math.sin (val[1])
  v4[2] = Math.sin (val[2])
  v4[3] = Math.sin (val[3])
}
var t2 = performance.now ()
console.log ("Math.sin => " + (t2-t1))

var t1 = performance.now ()
for(var i = 0; i != 1000000; i++)  sin1 (val)
var t2 = performance.now ()
console.log ("sin1     => " + (t2-t1))

// Math.sin => 991.7649999988498
// sin1     => 666.1600000006729


// ------

function direct (a)
{
    const v4 = Object.create (a)
    v4[0] = Math.sin (a[0])
    v4[1] = Math.sin (a[1])
    v4[2] = Math.sin (a[2])
    v4[3] = Math.sin (a[4])
    return v4
}

sin1 = model1 (Math.sin)
const val = [12.5, 5.032, 5124.2, 0.00002]

var t1 = performance.now ()
for(var i = 0; i != 1000000; i++) direct (val)
var t2 = performance.now ()
console.log ("Math.sin => " + (t2-t1))

var t1 = performance.now ()
for(var i = 0; i != 1000000; i++)  sin1 (val)
var t2 = performance.now ()
console.log ("sin1     => " + (t2-t1))

Math.sin => 774.9050000002171
sin1     => 664.2350000001898

// ------

*/