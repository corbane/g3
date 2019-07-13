
/**
 * 2 Dimensional Vector
 * @module vec2
 */

interface vec2 extends Float32Array {}
type LVec2 <C = number> = vec2 | [C, C]

function vec2 (): LVec2
function vec2 (x: number, y: number): LVec2
function vec2 ()
{
    if(arguments.length == 2)
        return new Float32Array (arguments)

    const out = new Float32Array(2)
    out[0] = arguments[0]
    out[1] = arguments[1]
    return out
}

namespace vec2
{
    /**
     * Creates a new, empty vec2
     *
     * @returns a new 2D vector
     */
    export function create (): LVec2
    {
        return new Float32Array(2);
    }

    /**
     * Creates a new vec2 initialized with values from an existing vector
     *
     * @param a vector to clone
     * @returns a new 2D vector
     */
    export function clone (a: LVec2): LVec2
    {
        let out = new Float32Array(2);
        out[0] = a[0];
        out[1] = a[1];
        return out;
    }

    /**
     * Creates a new vec2 initialized with the given values
     *
     * @param x X component
     * @param y Y component
     * @returns a new 2D vector
     */
    export function fromValues (x: number, y: number): LVec2
    {
        let out = new Float32Array(2);
        out[0] = x;
        out[1] = y;
        return out;
    }

    /**
     * Copy the values from one vec2 to another
     *
     * @param out the receiving vector
     * @param a the source vector
     * @returns out
     */
    export function copy (out: LVec2, a: LVec2): LVec2
    {
        out[0] = a[0];
        out[1] = a[1];
        return out;
    }

    /**
     * Set the components of a vec2 to the given values
     *
     * @param out the receiving vector
     * @param x X component
     * @param y Y component
     * @returns out
     */
    export function set (out: LVec2, x: number, y: number): LVec2
    {
        out[0] = x;
        out[1] = y;
        return out;
    }

    /**
     * Adds two vec2's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function add (out: LVec2, a: LVec2, b: LVec2): LVec2
    {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        return out;
    }

    /**
     * Subtracts vector b from vector a
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function subtract (out: LVec2, a: LVec2, b: LVec2): LVec2
    {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        return out;
    }

    /**
     * Multiplies two vec2's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function multiply (out: LVec2, a: LVec2, b: LVec2): LVec2
    {
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[1];
        return out;
    }

    /**
     * Divides two vec2's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function divide (out: LVec2, a: LVec2, b: LVec2): LVec2
    {
        out[0] = a[0] / b[0];
        out[1] = a[1] / b[1];
        return out;
    }

    /**
     * Math.ceil the components of a vec2
     *
     * @param out the receiving vector
     * @param a vector to ceil
     * @returns out
     */
    export function ceil (out: LVec2, a: LVec2): LVec2
    {
        out[0] = Math.ceil(a[0]);
        out[1] = Math.ceil(a[1]);
        return out;
    }

    /**
     * Math.floor the components of a vec2
     *
     * @param out the receiving vector
     * @param a vector to floor
     * @returns out
     */
    export function floor (out: LVec2, a: LVec2): LVec2
    {
        out[0] = Math.floor(a[0]);
        out[1] = Math.floor(a[1]);
        return out;
    }

    /**
     * Returns the minimum of two vec2's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function min (out: LVec2, a: LVec2, b: LVec2): LVec2
    {
        out[0] = Math.min(a[0], b[0]);
        out[1] = Math.min(a[1], b[1]);
        return out;
    }

    /**
     * Returns the maximum of two vec2's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function max (out: LVec2, a: LVec2, b: LVec2): LVec2
    {
        out[0] = Math.max(a[0], b[0]);
        out[1] = Math.max(a[1], b[1]);
        return out;
    }

    /**
     * Math.round the components of a vec2
     *
     * @param out the receiving vector
     * @param a vector to round
     * @returns out
     */
    export function round (out: LVec2, a: LVec2): LVec2
    {
        out[0] = Math.round(a[0]);
        out[1] = Math.round(a[1]);
        return out;
    }

    /**
     * Scales a vec2 by a scalar number
     *
     * @param out the receiving vector
     * @param a the vector to scale
     * @param b amount to scale the vector by
     * @returns out
     */
    export function scale (out: LVec2, a: LVec2, b: number): LVec2
    {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        return out;
    }

    /**
     * Adds two vec2's after scaling the second operand by a scalar value
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @param scale the amount to scale b by before adding
     * @returns out
     */
    export function scaleAndAdd (out: LVec2, a: LVec2, b: LVec2, scale: number): LVec2
    {
        out[0] = a[0] + (b[0] * scale);
        out[1] = a[1] + (b[1] * scale);
        return out;
    }

    /**
     * Calculates the euclidian distance between two vec2's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns distance between a and b
     */
    export function distance (a: LVec2, b: LVec2): number
    {
        var x = b[0] - a[0],
            y = b[1] - a[1];
        return Math.hypot(x, y);
    }

    /**
     * Calculates the squared euclidian distance between two vec2's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns squared distance between a and b
     */
    export function squaredDistance (a: LVec2, b: LVec2): number
    {
        var x = b[0] - a[0],
            y = b[1] - a[1];
        return x * x + y * y;
    }

    /**
     * Calculates the length of a vec2
     *
     * @param a vector to calculate length of
     * @returns length of a
     */
    export function _length (a: LVec2): number
    {
        var x = a[0],
            y = a[1];
        return Math.hypot(x, y);
    }

    /**
     * Calculates the squared length of a vec2
     *
     * @param a vector to calculate squared length of
     * @returns squared length of a
     */
    export function squaredLength (a: LVec2): number
    {
        var x = a[0],
            y = a[1];
        return x * x + y * y;
    }

    /**
     * Negates the components of a vec2
     *
     * @param out the receiving vector
     * @param a vector to negate
     * @returns out
     */
    export function negate (out: LVec2, a: LVec2): LVec2
    {
        out[0] = -a[0];
        out[1] = -a[1];
        return out;
    }

    /**
     * Returns the inverse of the components of a vec2
     *
     * @param out the receiving vector
     * @param a vector to invert
     * @returns out
     */
    export function inverse (out: LVec2, a: LVec2): LVec2
    {
        out[0] = 1.0 / a[0];
        out[1] = 1.0 / a[1];
        return out;
    }

    /**
     * Normalize a vec2
     *
     * @param out the receiving vector
     * @param a vector to normalize
     * @returns out
     */
    export function normalize (out: LVec2, a: LVec2): LVec2
    {
        var x = a[0],
            y = a[1];
        var len = x * x + y * y;
        if(len > 0)
        {
            //TODO: evaluate use of glm_invsqrt here?
            len = 1 / Math.sqrt(len);
        }
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        return out;
    }

    /**
     * Calculates the dot product of two vec2's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns dot product of a and b
     */
    export function dot (a: LVec2, b: LVec2): number
    {
        return a[0] * b[0] + a[1] * b[1];
    }

    /**
     * Computes the cross product of two vec2's
     * Note that the cross product must by definition produce a 3D vector
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function cross (out: vec3, a: LVec2, b: LVec2): vec3
    {
        var z = a[0] * b[1] - a[1] * b[0];
        out[0] = out[1] = 0;
        out[2] = z;
        return out;
    }

    /**
     * Performs a linear interpolation between two vec2's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @param t interpolation amount, in the range [0-1], between the two inputs
     * @returns out
     */
    export function lerp (out: LVec2, a: LVec2, b: LVec2, t: number): LVec2
    {
        var ax = a[0],
            ay = a[1];
        out[0] = ax + t * (b[0] - ax);
        out[1] = ay + t * (b[1] - ay);
        return out;
    }

    /**
     * Generates a random vector with the given scale
     *
     * @param out the receiving vector
     * @param [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
     * @returns out
     */
    export function random (out: LVec2, scale: number): LVec2
    {
        scale = scale || 1.0;
        var r = Math.random() * 2.0 * Math.PI;
        out[0] = Math.cos(r) * scale;
        out[1] = Math.sin(r) * scale;
        return out;
    }

    /**
     * Transforms the vec2 with a mat2
     *
     * @param out the receiving vector
     * @param a the vector to transform
     * @param m matrix to transform with
     * @returns out
     */
    export function transformMat2 (out: LVec2, a: LVec2, m: mat2): LVec2
    {
        var x = a[0],
            y = a[1];
        out[0] = m[0] * x + m[2] * y;
        out[1] = m[1] * x + m[3] * y;
        return out;
    }

    /**
     * Transforms the vec2 with a mat2d
     *
     * @param out the receiving vector
     * @param a the vector to transform
     * @param m matrix to transform with
     * @returns out
     */
    export function transformMat2d (out: LVec2, a: LVec2, m: mat2d): LVec2
    {
        var x = a[0],
            y = a[1];
        out[0] = m[0] * x + m[2] * y + m[4];
        out[1] = m[1] * x + m[3] * y + m[5];
        return out;
    }

    /**
     * Transforms the vec2 with a mat3
     * 3rd vector component is implicitly '1'
     *
     * @param out the receiving vector
     * @param a the vector to transform
     * @param m matrix to transform with
     * @returns out
     */
    export function transformMat3 (out: LVec2, a: LVec2, m: mat3): LVec2
    {
        var x = a[0],
            y = a[1];
        out[0] = m[0] * x + m[3] * y + m[6];
        out[1] = m[1] * x + m[4] * y + m[7];
        return out;
    }

    /**
     * Transforms the vec2 with a mat4
     * 3rd vector component is implicitly '0'
     * 4th vector component is implicitly '1'
     *
     * @param out the receiving vector
     * @param a the vector to transform
     * @param m matrix to transform with
     * @returns out
     */
    export function transformMat4 (out: LVec2, a: LVec2, m: mat4): LVec2
    {
        let x = a[0];
        let y = a[1];
        out[0] = m[0] * x + m[4] * y + m[12];
        out[1] = m[1] * x + m[5] * y + m[13];
        return out;
    }

    /**
     * Rotate a 2D vector
     * @param out The receiving vec2
     * @param a The vec2 point to rotate
     * @param b The origin of the rotation
     * @param c The angle of rotation
     * @returns out
     */
    export function rotate (out: LVec2, a: LVec2, b: LVec2, c: number): LVec2
    {
        //Translate point to the origin
        let p0 = a[0] - b[0],
            p1 = a[1] - b[1],
            sinC = Math.sin(c),
            cosC = Math.cos(c);

        //perform rotation and translate to correct position
        out[0] = p0 * cosC - p1 * sinC + b[0];
        out[1] = p0 * sinC + p1 * cosC + b[1];

        return out;
    }

    /**
     * Get the angle between two 2D vectors
     * @param a The first operand
     * @param b The second operand
     * @returns The angle in radians
     */
    export function angle (a: LVec2, b: LVec2): number
    {
        let x1 = a[0],
            y1 = a[1],
            x2 = b[0],
            y2 = b[1];

        let len1 = x1 * x1 + y1 * y1;
        if(len1 > 0)
        {
            //TODO: evaluate use of glm_invsqrt here?
            len1 = 1 / Math.sqrt(len1);
        }

        let len2 = x2 * x2 + y2 * y2;
        if(len2 > 0)
        {
            //TODO: evaluate use of glm_invsqrt here?
            len2 = 1 / Math.sqrt(len2);
        }

        let cosine = (x1 * x2 + y1 * y2) * len1 * len2;


        if(cosine > 1.0)
        {
            return 0;
        }
        else if(cosine < -1.0)
        {
            return Math.PI;
        } else
        {
            return Math.acos(cosine);
        }
    }

    /**
     * Set the components of a vec2 to zero
     *
     * @param out the receiving vector
     * @returns out
     */
    export function zero (out: LVec2): LVec2
    {
        out[0] = 0.0;
        out[1] = 0.0;
        return out;
    }

    /**
     * Returns a string representation of a vector
     *
     * @param a vector to represent as a string
     * @returns string representation of the vector
     */
    export function str (a: LVec2): string
    {
        return 'vec2(' + a[0] + ', ' + a[1] + ')';
    }

    /**
     * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
     *
     * @param a The first vector.
     * @param b The second vector.
     * @returns True if the vectors are equal, false otherwise.
     */
    export function exactEquals (a: LVec2, b: LVec2): boolean
    {
        return a[0] === b[0] && a[1] === b[1];
    }

    /**
     * Returns whether or not the vectors have approximately the same elements in the same position.
     *
     * @param a The first vector.
     * @param b The second vector.
     * @returns True if the vectors are equal, false otherwise.
     */
    export function equals (a: LVec2, b: LVec2): boolean
    {
        let a0 = a[0], a1 = a[1];
        let b0 = b[0], b1 = b[1];
        return (Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
            Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)));
    }

    /**
     * Alias for {@link vec2.length}
     * @function
     */
    export const len = _length;

    /**
     * Alias for {@link vec2.subtract}
     * @function
     */
    export const sub = subtract;

    /**
     * Alias for {@link vec2.multiply}
     * @function
     */
    export const mul = multiply;

    /**
     * Alias for {@link vec2.divide}
     * @function
     */
    export const div = divide;

    /**
     * Alias for {@link vec2.distance}
     * @function
     */
    export const dist = distance;

    /**
     * Alias for {@link vec2.squaredDistance}
     * @function
     */
    export const sqrDist = squaredDistance;

    /**
     * Alias for {@link vec2.squaredLength}
     * @function
     */
    export const sqrLen = squaredLength;

    /**
     * Perform some operation over an array of vec2s.
     *
     * @param a the array of vectors to iterate over
     * @param stride Number of elements between the start of each vec2. If 0 assumes tightly packed
     * @param offset Number of elements to skip at the beginning of the array
     * @param count Number of vec2s to iterate over. If 0 iterates over entire array
     * @param fn Function to call for each vector in the array
     * @param [arg] additional argument to pass to fn
     * @returns a
     * @function
     */
    export const forEach = (function ()
    {
        let vec = create();

        return function (a: LVec2, stride: number, offset: number, count: number, fn: (thisArg: LVec2, vec: LVec2, arg: any) => void, arg: any)
        {
            let i: number, l: number
            if(!stride)
            {
                stride = 2;
            }

            if(!offset)
            {
                offset = 0;
            }

            if(count)
            {
                l = Math.min((count * stride) + offset, a.length);
            }
            else
            {
                l = a.length;
            }

            for(i = offset; i < l; i += stride)
            {
                vec[0] = a[i]; vec[1] = a[i + 1];
                fn(vec, vec, arg);
                a[i] = vec[0]; a[i + 1] = vec[1];
            }

            return a;
        };
    })();

}
