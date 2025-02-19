
/**
 * 4 Dimensional Vector
 * @module vec4
 */

type LVec4 <C = number> = vec4|[C, C, C, C]

interface vec4 extends Float32Array {}

function vec4(): vec4
function vec4(x: number, y: number, z: number, w: number): vec4
function vec4(...values: number[])
{
    let out = new Float32Array(4);
    if(values.length == 4)
    {
        out[0] = values[0];
        out[1] = values[1];
        out[2] = values[2];
        out[3] = values[3];
    }
    return out; 
}

namespace vec4
{
    /**
     * Creates a new, empty vec4
     *
     * @returns a new 4D vector
     */
    export function create (): LVec4
    {
        return vec4();
    }

    /**
     * Creates a new vec4 initialized with values from an existing vector
     *
     * @param a vector to clone
     * @returns a new 4D vector
     */
    export function clone (a: LVec4): LVec4
    {
        let out = vec4();
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        return out;
    }

    /**
     * Creates a new vec4 initialized with the given values
     *
     * @param x X component
     * @param y Y component
     * @param z Z component
     * @param w W component
     * @returns a new 4D vector
     */
    export function fromValues (x: number, y: number, z: number, w: number): LVec4
    {
        let out = vec4();
        out[0] = x;
        out[1] = y;
        out[2] = z;
        out[3] = w;
        return out;
    }

    /**
     * Copy the values from one vec4 to another
     *
     * @param out the receiving vector
     * @param a the source vector
     * @returns out
     */
    export function copy (out: LVec4, a: LVec4): LVec4
    {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        return out;
    }

    /**
     * Set the components of a vec4 to the given values
     *
     * @param out the receiving vector
     * @param x X component
     * @param y Y component
     * @param z Z component
     * @param w W component
     * @returns out
     */
    export function set (out: LVec4, x: number, y: number, z: number, w: number): LVec4
    {
        out[0] = x;
        out[1] = y;
        out[2] = z;
        out[3] = w;
        return out;
    }

    /**
     * Adds two vec4's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function add (out: LVec4, a: LVec4, b: LVec4): LVec4
    {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        out[3] = a[3] + b[3];
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
    export function subtract (out: LVec4, a: LVec4, b: LVec4): LVec4
    {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        out[3] = a[3] - b[3];
        return out;
    }

    /**
     * Multiplies two vec4's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function multiply (out: LVec4, a: LVec4, b: LVec4): LVec4
    {
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[1];
        out[2] = a[2] * b[2];
        out[3] = a[3] * b[3];
        return out;
    }

    /**
     * Divides two vec4's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     */
    export function divide (out: LVec4, a: LVec4, b: LVec4): LVec4
    {
        out[0] = a[0] / b[0];
        out[1] = a[1] / b[1];
        out[2] = a[2] / b[2];
        out[3] = a[3] / b[3];
        return out;
    }

    /**
     * Math.ceil the components of a vec4
     *
     * @param out the receiving vector
     * @param a vector to ceil
     * @returns out
     */
    export function ceil (out: LVec4, a: LVec4): LVec4
    {
        out[0] = Math.ceil(a[0]);
        out[1] = Math.ceil(a[1]);
        out[2] = Math.ceil(a[2]);
        out[3] = Math.ceil(a[3]);
        return out;
    }

    /**
     * Math.floor the components of a vec4
     *
     * @param out the receiving vector
     * @param a vector to floor
     * @returns out
     */
    export function floor (out: LVec4, a: LVec4): LVec4
    {
        out[0] = Math.floor(a[0]);
        out[1] = Math.floor(a[1]);
        out[2] = Math.floor(a[2]);
        out[3] = Math.floor(a[3]);
        return out;
    }

    /**
     * Returns the minimum of two vec4's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function min (out: LVec4, a: LVec4, b: LVec4): LVec4
    {
        out[0] = Math.min(a[0], b[0]);
        out[1] = Math.min(a[1], b[1]);
        out[2] = Math.min(a[2], b[2]);
        out[3] = Math.min(a[3], b[3]);
        return out;
    }

    /**
     * Returns the maximum of two vec4's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function max (out: LVec4, a: LVec4, b: LVec4): LVec4
    {
        out[0] = Math.max(a[0], b[0]);
        out[1] = Math.max(a[1], b[1]);
        out[2] = Math.max(a[2], b[2]);
        out[3] = Math.max(a[3], b[3]);
        return out;
    }

    /**
     * Math.round the components of a vec4
     *
     * @param out the receiving vector
     * @param a vector to round
     * @returns out
     */
    export function round (out: LVec4, a: LVec4): LVec4
    {
        out[0] = Math.round(a[0]);
        out[1] = Math.round(a[1]);
        out[2] = Math.round(a[2]);
        out[3] = Math.round(a[3]);
        return out;
    }

    /**
     * Scales a vec4 by a scalar number
     *
     * @param out the receiving vector
     * @param a the vector to scale
     * @param b amount to scale the vector by
     * @returns out
     */
    export function scale (out: LVec4, a: LVec4, b: number): LVec4
    {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        out[3] = a[3] * b;
        return out;
    }

    /**
     * Adds two vec4's after scaling the second operand by a scalar value
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @param scale the amount to scale b by before adding
     * @returns out
     */
    export function scaleAndAdd (out: LVec4, a: LVec4, b: LVec4, scale: number): LVec4
    {
        out[0] = a[0] + (b[0] * scale);
        out[1] = a[1] + (b[1] * scale);
        out[2] = a[2] + (b[2] * scale);
        out[3] = a[3] + (b[3] * scale);
        return out;
    }

    /**
     * Calculates the euclidian distance between two vec4's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns distance between a and b
     */
    export function distance (a: LVec4, b: LVec4): number
    {
        let x = b[0] - a[0];
        let y = b[1] - a[1];
        let z = b[2] - a[2];
        let w = b[3] - a[3];
        return Math.hypot(x, y, z, w);
    }

    /**
     * Calculates the squared euclidian distance between two vec4's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns squared distance between a and b
     */
    export function squaredDistance (a: LVec4, b: LVec4): number
    {
        let x = b[0] - a[0];
        let y = b[1] - a[1];
        let z = b[2] - a[2];
        let w = b[3] - a[3];
        return x * x + y * y + z * z + w * w;
    }

    /**
     * Calculates the length of a vec4
     *
     * @param a vector to calculate length of
     * @returns length of a
     */
    export function _length (a: LVec4): number
    {
        let x = a[0];
        let y = a[1];
        let z = a[2];
        let w = a[3];
        return Math.hypot(x, y, z, w);
    }

    /**
     * Calculates the squared length of a vec4
     *
     * @param a vector to calculate squared length of
     * @returns squared length of a
     */
    export function squaredLength (a: LVec4): number
    {
        let x = a[0];
        let y = a[1];
        let z = a[2];
        let w = a[3];
        return x * x + y * y + z * z + w * w;
    }

    /**
     * Negates the components of a vec4
     *
     * @param out the receiving vector
     * @param a vector to negate
     * @returns out
     */
    export function negate (out: LVec4, a: LVec4): LVec4
    {
        out[0] = -a[0];
        out[1] = -a[1];
        out[2] = -a[2];
        out[3] = -a[3];
        return out;
    }

    /**
     * Returns the inverse of the components of a vec4
     *
     * @param out the receiving vector
     * @param a vector to invert
     * @returns out
     */
    export function inverse (out: LVec4, a: LVec4): LVec4
    {
        out[0] = 1.0 / a[0];
        out[1] = 1.0 / a[1];
        out[2] = 1.0 / a[2];
        out[3] = 1.0 / a[3];
        return out;
    }

    /**
     * Normalize a vec4
     *
     * @param out the receiving vector
     * @param a vector to normalize
     * @returns out
     */
    export function normalize (out: LVec4, a: LVec4): LVec4
    {
        let x = a[0];
        let y = a[1];
        let z = a[2];
        let w = a[3];
        let len = x * x + y * y + z * z + w * w;
        if(len > 0)
        {
            len = 1 / Math.sqrt(len);
        }
        out[0] = x * len;
        out[1] = y * len;
        out[2] = z * len;
        out[3] = w * len;
        return out;
    }

    /**
     * Calculates the dot product of two vec4's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns dot product of a and b
     */
    export function dot (a: LVec4, b: LVec4): number
    {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
    }

    /**
     * Returns the cross-product of three vectors in a 4-dimensional space
     *
     * @param result the receiving vector
     * @param U the first vector
     * @param V the second vector
     * @param W the third vector
     * @returns result
     */
    export function cross (out: LVec4, u: LVec4, v: LVec4, w: LVec4): LVec4
    {
        let A = (v[0] * w[1]) - (v[1] * w[0]),
            B = (v[0] * w[2]) - (v[2] * w[0]),
            C = (v[0] * w[3]) - (v[3] * w[0]),
            D = (v[1] * w[2]) - (v[2] * w[1]),
            E = (v[1] * w[3]) - (v[3] * w[1]),
            F = (v[2] * w[3]) - (v[3] * w[2]);
        let G = u[0];
        let H = u[1];
        let I = u[2];
        let J = u[3];

        out[0] = (H * F) - (I * E) + (J * D);
        out[1] = -(G * F) + (I * C) - (J * B);
        out[2] = (G * E) - (H * C) + (J * A);
        out[3] = -(G * D) + (H * B) - (I * A);

        return out;
    };

    /**
     * Performs a linear interpolation between two vec4's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @param t interpolation amount, in the range [0-1], between the two inputs
     * @returns out
     */
    export function lerp (out: LVec4, a: LVec4, b: LVec4, t: number): LVec4
    {
        let ax = a[0];
        let ay = a[1];
        let az = a[2];
        let aw = a[3];
        out[0] = ax + t * (b[0] - ax);
        out[1] = ay + t * (b[1] - ay);
        out[2] = az + t * (b[2] - az);
        out[3] = aw + t * (b[3] - aw);
        return out;
    }

    /**
     * Generates a random vector with the given scale
     *
     * @param out the receiving vector
     * @param [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
     * @returns out
     */
    export function random (out: LVec4, scale: number): LVec4
    {
        scale = scale || 1.0;

        // Marsaglia, George. Choosing a Point from the Surface of a
        // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
        // http://projecteuclid.org/euclid.aoms/1177692644;
        var v1, v2, v3, v4;
        var s1, s2;
        do
        {
            v1 = Math.random() * 2 - 1;
            v2 = Math.random() * 2 - 1;
            s1 = v1 * v1 + v2 * v2;
        } while(s1 >= 1);
        do
        {
            v3 = Math.random() * 2 - 1;
            v4 = Math.random() * 2 - 1;
            s2 = v3 * v3 + v4 * v4;
        } while(s2 >= 1);

        var d = Math.sqrt((1 - s1) / s2);
        out[0] = scale * v1;
        out[1] = scale * v2;
        out[2] = scale * v3 * d;
        out[3] = scale * v4 * d;
        return out;
    }

    /**
     * Transforms the vec4 with a mat4.
     *
     * @param out the receiving vector
     * @param a the vector to transform
     * @param m matrix to transform with
     * @returns out
     */
    export function transformMat4 (out: LVec4, a: LVec4, m: mat4): LVec4
    {
        const x = a[0], y = a[1], z = a[2], w = a[3];
        out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
        out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
        out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
        out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
        return out;
    }

    /**
     * Transforms the vec4 with a quat
     *
     * @param out the receiving vector
     * @param a the vector to transform
     * @param q quaternion to transform with
     * @returns out
     */
    export function transformQuat (out: LVec4, a: LVec4, q: quat): LVec4
    {
        let x = a[0], y = a[1], z = a[2];
        let qx = q[0], qy = q[1], qz = q[2], qw = q[3];

        // calculate quat * vec
        let ix = qw * x + qy * z - qz * y;
        let iy = qw * y + qz * x - qx * z;
        let iz = qw * z + qx * y - qy * x;
        let iw = -qx * x - qy * y - qz * z;

        // calculate result * inverse quat
        out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
        out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
        out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
        out[3] = a[3];
        return out;
    }

    /**
     * Set the components of a vec4 to zero
     *
     * @param out the receiving vector
     * @returns out
     */
    export function zero (out: LVec4): LVec4
    {
        out[0] = 0.0;
        out[1] = 0.0;
        out[2] = 0.0;
        out[3] = 0.0;
        return out;
    }

    /**
     * Returns a string representation of a vector
     *
     * @param a vector to represent as a string
     * @returns string representation of the vector
     */
    export function str (a: LVec4): string
    {
        return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
    }

    /**
     * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
     *
     * @param a The first vector.
     * @param b The second vector.
     * @returns True if the vectors are equal, false otherwise.
     */
    export function exactEquals (a: LVec4, b: LVec4): boolean
    {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
    }

    /**
     * Returns whether or not the vectors have approximately the same elements in the same position.
     *
     * @param a The first vector.
     * @param b The second vector.
     * @returns True if the vectors are equal, false otherwise.
     */
    export function equals (a: LVec4, b: LVec4): boolean
    {
        let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
        let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
        return (Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
            Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
            Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
            Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)));
    }

    /**
     * Alias for {@link vec4.subtract}
     * @function
     */
    export const sub = subtract;

    /**
     * Alias for {@link vec4.multiply}
     * @function
     */
    export const mul = multiply;

    /**
     * Alias for {@link vec4.divide}
     * @function
     */
    export const div = divide;

    /**
     * Alias for {@link vec4.distance}
     * @function
     */
    export const dist = distance;

    /**
     * Alias for {@link vec4.squaredDistance}
     * @function
     */
    export const sqrDist = squaredDistance;

    /**
     * Alias for {@link vec4.length}
     * @function
     */
    export const len = _length;

    /**
     * Alias for {@link vec4.squaredLength}
     * @function
     */
    export const sqrLen = squaredLength;

    /**
     * Perform some operation over an array of vec4s.
     *
     * @param a the array of vectors to iterate over
     * @param stride Number of elements between the start of each vec4. If 0 assumes tightly packed
     * @param offset Number of elements to skip at the beginning of the array
     * @param count Number of vec4s to iterate over. If 0 iterates over entire array
     * @param fn Function to call for each vector in the array
     * @param [arg] additional argument to pass to fn
     * @returns a
     * @function
     */
    export const forEach = (function ()
    {
        let vec = create();

        return function (a: LVec4, stride: number, offset: number, count: number, fn: (argThis: LVec4, vec: LVec4, arg: any) => void, arg: any)
        {
            let i: number, l: number;
            if(!stride)
            {
                stride = 4;
            }

            if(!offset)
            {
                offset = 0;
            }

            if(count)
            {
                l = Math.min((count * stride) + offset, a.length);
            } else
            {
                l = a.length;
            }

            for(i = offset; i < l; i += stride)
            {
                vec[0] = a[i]; vec[1] = a[i + 1]; vec[2] = a[i + 2]; vec[3] = a[i + 3];
                fn(vec, vec, arg);
                a[i] = vec[0]; a[i + 1] = vec[1]; a[i + 2] = vec[2]; a[i + 3] = vec[3];
            }

            return a;
        };
    })();
}
