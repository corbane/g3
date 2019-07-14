
"use strict"

namespace v3
{
    const same = Object.create

    export function fromAngles (theta: number, phi: number)
    {
        return <LVec3> [
            Math.cos (theta) * Math.cos (phi),
            Math.sin (phi),
            Math.sin (theta) * Math.cos (phi)
        ]
    }

    export function normalize (a: LVec3): LVec3
    {
        let x = a[0]
        let y = a[1]
        let z = a[2]
        let len = x * x + y * y + z * z;
        if(len > 0)
        {
            //TODO: evaluate use of glm_invsqrt here?
            len = 1 / Math.sqrt(len);
        }
        a[0] = a[0] * len
        a[1] = a[1] * len
        a[2] = a[2] * len
        return a
    }
    
    export function getNormalized (a: LVec3, out: LVec3 = same(a)): LVec3
    {
        let x = a[0];
        let y = a[1];
        let z = a[2];
        let len = x * x + y * y + z * z;
        if(len > 0)
        {
            //TODO: evaluate use of glm_invsqrt here?
            len = 1 / Math.sqrt(len);
        }
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        out[2] = a[2] * len;
        return out;
    }

    export function negate (a: LVec3, out: LVec3 = same(a)): LVec3
    {
        out[0] = -a[0];
        out[1] = -a[1];
        out[2] = -a[2];
        return out;
    }



    export function add (a: LVec3, b: LVec3, out: LVec3 = same(a)): LVec3
    {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        return out;
    }

    export function subtract (a: LVec3, b: LVec3, out: LVec3 = same(a)): LVec3
    {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        return out;
    }

    export function multiply (a: LVec3, b: LVec3, out: LVec3 = same(a)): LVec3
    {
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[1];
        out[2] = a[2] * b[2];
        return out;
    }

    export function multiplyByScalar (a: LVec3, b: number, out: LVec3 = same(a)): LVec3
    {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        return out;
    }

    export function divide (a: LVec3, b: LVec3, out: LVec3 = same(a)): LVec3
    {
        out[0] = a[0] / b[0];
        out[1] = a[1] / b[1];
        out[2] = a[2] / b[2];
        return out;
    }

    export function dot (a: LVec3, b: LVec3): number
    {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    }
    
    export function cross (a: LVec3, b: LVec3, out: LVec3 = same(a)): LVec3
    {
        let ax = a[0], ay = a[1], az = a[2];
        let bx = b[0], by = b[1], bz = b[2];

        out[0] = ay * bz - az * by;
        out[1] = az * bx - ax * bz;
        out[2] = ax * by - ay * bx;
        return out;
    }



    export function lerp (a: LVec3, b: LVec3, t: number, out: LVec3 = same(a)): LVec3
    {
        let ax = a[0];
        let ay = a[1];
        let az = a[2];
        out[0] = ax + t * (b[0] - ax);
        out[1] = ay + t * (b[1] - ay);
        out[2] = az + t * (b[2] - az);
        return out;
    }

    

    export function ceil (a: LVec3, out: LVec3 = same(a)): LVec3
    {
        out[0] = Math.ceil(a[0]);
        out[1] = Math.ceil(a[1]);
        out[2] = Math.ceil(a[2]);
        return out;
    }

    export function floor (a: LVec3, out: LVec3 = same(a)): LVec3
    {
        out[0] = Math.floor(a[0]);
        out[1] = Math.floor(a[1]);
        out[2] = Math.floor(a[2]);
        return out;
    }

    export function min (a: LVec3, b: LVec3, out: LVec3 = same(a)): LVec3
    {
        out[0] = Math.min(a[0], b[0]);
        out[1] = Math.min(a[1], b[1]);
        out[2] = Math.min(a[2], b[2]);
        return out;
    }

    export function max (a: LVec3, b: LVec3, out: LVec3 = same(a)): LVec3
    {
        out[0] = Math.max(a[0], b[0]);
        out[1] = Math.max(a[1], b[1]);
        out[2] = Math.max(a[2], b[2]);
        return out;
    }

    export function round (a: LVec3, out: LVec3 = same(a)): LVec3
    {
        out[0] = Math.round(a[0]);
        out[1] = Math.round(a[1]);
        out[2] = Math.round(a[2]);
        return out;
    }
}
