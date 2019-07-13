"use strict";
const API = globalThis;
var Internal;
(function (Internal) {
    "use strict";
})(Internal || (Internal = {}));
;
{
    const m_eval = eval.bind(globalThis);
    const defineInternalMethods = (funcs) => Object.assign(Internal, funcs);
    const definePublicMethods = (funcs) => Object.assign(globalThis, funcs);
    const definePublicProperties = (props) => Object.defineProperties(globalThis, props);
    const EvluateAsPublic = (code) => m_eval(code);
    defineInternalMethods({
        defineInternalMethods,
        definePublicMethods,
        definePublicProperties,
        EvluateAsPublic
    });
}
var glMatrix;
(function (glMatrix) {
    function equals(a, b) {
        return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
    }
    glMatrix.equals = equals;
    if (!Math.hypot)
        Math.hypot = function () {
            var y = 0, i = arguments.length;
            while (i--)
                y += arguments[i] * arguments[i];
            return Math.sqrt(y);
        };
})(glMatrix || (glMatrix = {}));
Number.prototype.length = 1;
Boolean.prototype.length = 1;
const PI = 3.141592653589793;
const EPSILON = 0.000001;
{
    const deg2rad = Math.PI / 180;
    const radians = function (degrees) {
        return degrees * deg2rad;
    };
    Internal.definePublicMethods({
        radians
    });
}
function vec2() {
    if (arguments.length == 2)
        return new Float32Array(arguments);
    const out = new Float32Array(2);
    out[0] = arguments[0];
    out[1] = arguments[1];
    return out;
}
(function (vec2) {
    function create() {
        return new Float32Array(2);
    }
    vec2.create = create;
    function clone(a) {
        let out = new Float32Array(2);
        out[0] = a[0];
        out[1] = a[1];
        return out;
    }
    vec2.clone = clone;
    function fromValues(x, y) {
        let out = new Float32Array(2);
        out[0] = x;
        out[1] = y;
        return out;
    }
    vec2.fromValues = fromValues;
    function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        return out;
    }
    vec2.copy = copy;
    function set(out, x, y) {
        out[0] = x;
        out[1] = y;
        return out;
    }
    vec2.set = set;
    function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        return out;
    }
    vec2.add = add;
    function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        return out;
    }
    vec2.subtract = subtract;
    function multiply(out, a, b) {
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[1];
        return out;
    }
    vec2.multiply = multiply;
    function divide(out, a, b) {
        out[0] = a[0] / b[0];
        out[1] = a[1] / b[1];
        return out;
    }
    vec2.divide = divide;
    function ceil(out, a) {
        out[0] = Math.ceil(a[0]);
        out[1] = Math.ceil(a[1]);
        return out;
    }
    vec2.ceil = ceil;
    function floor(out, a) {
        out[0] = Math.floor(a[0]);
        out[1] = Math.floor(a[1]);
        return out;
    }
    vec2.floor = floor;
    function min(out, a, b) {
        out[0] = Math.min(a[0], b[0]);
        out[1] = Math.min(a[1], b[1]);
        return out;
    }
    vec2.min = min;
    function max(out, a, b) {
        out[0] = Math.max(a[0], b[0]);
        out[1] = Math.max(a[1], b[1]);
        return out;
    }
    vec2.max = max;
    function round(out, a) {
        out[0] = Math.round(a[0]);
        out[1] = Math.round(a[1]);
        return out;
    }
    vec2.round = round;
    function scale(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        return out;
    }
    vec2.scale = scale;
    function scaleAndAdd(out, a, b, scale) {
        out[0] = a[0] + (b[0] * scale);
        out[1] = a[1] + (b[1] * scale);
        return out;
    }
    vec2.scaleAndAdd = scaleAndAdd;
    function distance(a, b) {
        var x = b[0] - a[0], y = b[1] - a[1];
        return Math.hypot(x, y);
    }
    vec2.distance = distance;
    function squaredDistance(a, b) {
        var x = b[0] - a[0], y = b[1] - a[1];
        return x * x + y * y;
    }
    vec2.squaredDistance = squaredDistance;
    function _length(a) {
        var x = a[0], y = a[1];
        return Math.hypot(x, y);
    }
    vec2._length = _length;
    function squaredLength(a) {
        var x = a[0], y = a[1];
        return x * x + y * y;
    }
    vec2.squaredLength = squaredLength;
    function negate(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        return out;
    }
    vec2.negate = negate;
    function inverse(out, a) {
        out[0] = 1.0 / a[0];
        out[1] = 1.0 / a[1];
        return out;
    }
    vec2.inverse = inverse;
    function normalize(out, a) {
        var x = a[0], y = a[1];
        var len = x * x + y * y;
        if (len > 0) {
            len = 1 / Math.sqrt(len);
        }
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        return out;
    }
    vec2.normalize = normalize;
    function dot(a, b) {
        return a[0] * b[0] + a[1] * b[1];
    }
    vec2.dot = dot;
    function cross(out, a, b) {
        var z = a[0] * b[1] - a[1] * b[0];
        out[0] = out[1] = 0;
        out[2] = z;
        return out;
    }
    vec2.cross = cross;
    function lerp(out, a, b, t) {
        var ax = a[0], ay = a[1];
        out[0] = ax + t * (b[0] - ax);
        out[1] = ay + t * (b[1] - ay);
        return out;
    }
    vec2.lerp = lerp;
    function random(out, scale) {
        scale = scale || 1.0;
        var r = Math.random() * 2.0 * Math.PI;
        out[0] = Math.cos(r) * scale;
        out[1] = Math.sin(r) * scale;
        return out;
    }
    vec2.random = random;
    function transformMat2(out, a, m) {
        var x = a[0], y = a[1];
        out[0] = m[0] * x + m[2] * y;
        out[1] = m[1] * x + m[3] * y;
        return out;
    }
    vec2.transformMat2 = transformMat2;
    function transformMat2d(out, a, m) {
        var x = a[0], y = a[1];
        out[0] = m[0] * x + m[2] * y + m[4];
        out[1] = m[1] * x + m[3] * y + m[5];
        return out;
    }
    vec2.transformMat2d = transformMat2d;
    function transformMat3(out, a, m) {
        var x = a[0], y = a[1];
        out[0] = m[0] * x + m[3] * y + m[6];
        out[1] = m[1] * x + m[4] * y + m[7];
        return out;
    }
    vec2.transformMat3 = transformMat3;
    function transformMat4(out, a, m) {
        let x = a[0];
        let y = a[1];
        out[0] = m[0] * x + m[4] * y + m[12];
        out[1] = m[1] * x + m[5] * y + m[13];
        return out;
    }
    vec2.transformMat4 = transformMat4;
    function rotate(out, a, b, c) {
        let p0 = a[0] - b[0], p1 = a[1] - b[1], sinC = Math.sin(c), cosC = Math.cos(c);
        out[0] = p0 * cosC - p1 * sinC + b[0];
        out[1] = p0 * sinC + p1 * cosC + b[1];
        return out;
    }
    vec2.rotate = rotate;
    function angle(a, b) {
        let x1 = a[0], y1 = a[1], x2 = b[0], y2 = b[1];
        let len1 = x1 * x1 + y1 * y1;
        if (len1 > 0) {
            len1 = 1 / Math.sqrt(len1);
        }
        let len2 = x2 * x2 + y2 * y2;
        if (len2 > 0) {
            len2 = 1 / Math.sqrt(len2);
        }
        let cosine = (x1 * x2 + y1 * y2) * len1 * len2;
        if (cosine > 1.0) {
            return 0;
        }
        else if (cosine < -1.0) {
            return Math.PI;
        }
        else {
            return Math.acos(cosine);
        }
    }
    vec2.angle = angle;
    function zero(out) {
        out[0] = 0.0;
        out[1] = 0.0;
        return out;
    }
    vec2.zero = zero;
    function str(a) {
        return 'vec2(' + a[0] + ', ' + a[1] + ')';
    }
    vec2.str = str;
    function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1];
    }
    vec2.exactEquals = exactEquals;
    function equals(a, b) {
        let a0 = a[0], a1 = a[1];
        let b0 = b[0], b1 = b[1];
        return (Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
            Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)));
    }
    vec2.equals = equals;
    vec2.len = _length;
    vec2.sub = subtract;
    vec2.mul = multiply;
    vec2.div = divide;
    vec2.dist = distance;
    vec2.sqrDist = squaredDistance;
    vec2.sqrLen = squaredLength;
    vec2.forEach = (function () {
        let vec = create();
        return function (a, stride, offset, count, fn, arg) {
            let i, l;
            if (!stride) {
                stride = 2;
            }
            if (!offset) {
                offset = 0;
            }
            if (count) {
                l = Math.min((count * stride) + offset, a.length);
            }
            else {
                l = a.length;
            }
            for (i = offset; i < l; i += stride) {
                vec[0] = a[i];
                vec[1] = a[i + 1];
                fn(vec, vec, arg);
                a[i] = vec[0];
                a[i + 1] = vec[1];
            }
            return a;
        };
    })();
})(vec2 || (vec2 = {}));
function vec3() {
    switch (arguments.length) {
        case 0: return new Float32Array(3);
        case 1: return new Float32Array(arguments[0]);
        case 3: return new Float32Array(arguments);
        default: throw "Bad vec3 arguments";
    }
}
(function (vec3) {
    function create() {
        let out = new Float32Array(3);
        return out;
    }
    vec3.create = create;
    function clone(a) {
        var out = new Float32Array(3);
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        return out;
    }
    vec3.clone = clone;
    function _length(a) {
        let x = a[0];
        let y = a[1];
        let z = a[2];
        return Math.hypot(x, y, z);
    }
    vec3._length = _length;
    function fromValues(x, y, z) {
        let out = new Float32Array(3);
        out[0] = x;
        out[1] = y;
        out[2] = z;
        return out;
    }
    vec3.fromValues = fromValues;
    function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        return out;
    }
    vec3.copy = copy;
    function set(out, x, y, z) {
        out[0] = x;
        out[1] = y;
        out[2] = z;
        return out;
    }
    vec3.set = set;
    function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        return out;
    }
    vec3.add = add;
    function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        return out;
    }
    vec3.subtract = subtract;
    function multiply(out, a, b) {
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[1];
        out[2] = a[2] * b[2];
        return out;
    }
    vec3.multiply = multiply;
    function divide(out, a, b) {
        out[0] = a[0] / b[0];
        out[1] = a[1] / b[1];
        out[2] = a[2] / b[2];
        return out;
    }
    vec3.divide = divide;
    function ceil(out, a) {
        out[0] = Math.ceil(a[0]);
        out[1] = Math.ceil(a[1]);
        out[2] = Math.ceil(a[2]);
        return out;
    }
    vec3.ceil = ceil;
    function floor(out, a) {
        out[0] = Math.floor(a[0]);
        out[1] = Math.floor(a[1]);
        out[2] = Math.floor(a[2]);
        return out;
    }
    vec3.floor = floor;
    function min(out, a, b) {
        out[0] = Math.min(a[0], b[0]);
        out[1] = Math.min(a[1], b[1]);
        out[2] = Math.min(a[2], b[2]);
        return out;
    }
    vec3.min = min;
    function max(out, a, b) {
        out[0] = Math.max(a[0], b[0]);
        out[1] = Math.max(a[1], b[1]);
        out[2] = Math.max(a[2], b[2]);
        return out;
    }
    vec3.max = max;
    function round(out, a) {
        out[0] = Math.round(a[0]);
        out[1] = Math.round(a[1]);
        out[2] = Math.round(a[2]);
        return out;
    }
    vec3.round = round;
    function scale(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        return out;
    }
    vec3.scale = scale;
    function scaleAndAdd(out, a, b, scale) {
        out[0] = a[0] + (b[0] * scale);
        out[1] = a[1] + (b[1] * scale);
        out[2] = a[2] + (b[2] * scale);
        return out;
    }
    vec3.scaleAndAdd = scaleAndAdd;
    function distance(a, b) {
        let x = b[0] - a[0];
        let y = b[1] - a[1];
        let z = b[2] - a[2];
        return Math.hypot(x, y, z);
    }
    vec3.distance = distance;
    function squaredDistance(a, b) {
        let x = b[0] - a[0];
        let y = b[1] - a[1];
        let z = b[2] - a[2];
        return x * x + y * y + z * z;
    }
    vec3.squaredDistance = squaredDistance;
    function squaredLength(a) {
        let x = a[0];
        let y = a[1];
        let z = a[2];
        return x * x + y * y + z * z;
    }
    vec3.squaredLength = squaredLength;
    function negate(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        out[2] = -a[2];
        return out;
    }
    vec3.negate = negate;
    function inverse(out, a) {
        out[0] = 1.0 / a[0];
        out[1] = 1.0 / a[1];
        out[2] = 1.0 / a[2];
        return out;
    }
    vec3.inverse = inverse;
    function normalize(out, a) {
        let x = a[0];
        let y = a[1];
        let z = a[2];
        let len = x * x + y * y + z * z;
        if (len > 0) {
            len = 1 / Math.sqrt(len);
        }
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        out[2] = a[2] * len;
        return out;
    }
    vec3.normalize = normalize;
    function dot(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    }
    vec3.dot = dot;
    function cross(out, a, b) {
        let ax = a[0], ay = a[1], az = a[2];
        let bx = b[0], by = b[1], bz = b[2];
        out[0] = ay * bz - az * by;
        out[1] = az * bx - ax * bz;
        out[2] = ax * by - ay * bx;
        return out;
    }
    vec3.cross = cross;
    function lerp(out, a, b, t) {
        let ax = a[0];
        let ay = a[1];
        let az = a[2];
        out[0] = ax + t * (b[0] - ax);
        out[1] = ay + t * (b[1] - ay);
        out[2] = az + t * (b[2] - az);
        return out;
    }
    vec3.lerp = lerp;
    function hermite(out, a, b, c, d, t) {
        let factorTimes2 = t * t;
        let factor1 = factorTimes2 * (2 * t - 3) + 1;
        let factor2 = factorTimes2 * (t - 2) + t;
        let factor3 = factorTimes2 * (t - 1);
        let factor4 = factorTimes2 * (3 - 2 * t);
        out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
        out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
        out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
        return out;
    }
    vec3.hermite = hermite;
    function bezier(out, a, b, c, d, t) {
        let inverseFactor = 1 - t;
        let inverseFactorTimesTwo = inverseFactor * inverseFactor;
        let factorTimes2 = t * t;
        let factor1 = inverseFactorTimesTwo * inverseFactor;
        let factor2 = 3 * t * inverseFactorTimesTwo;
        let factor3 = 3 * factorTimes2 * inverseFactor;
        let factor4 = factorTimes2 * t;
        out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
        out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
        out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
        return out;
    }
    vec3.bezier = bezier;
    function random(out, scale) {
        scale = scale || 1.0;
        let r = Math.random() * 2.0 * Math.PI;
        let z = (Math.random() * 2.0) - 1.0;
        let zScale = Math.sqrt(1.0 - z * z) * scale;
        out[0] = Math.cos(r) * zScale;
        out[1] = Math.sin(r) * zScale;
        out[2] = z * scale;
        return out;
    }
    vec3.random = random;
    function transformMat4(out, a, m) {
        let x = a[0], y = a[1], z = a[2];
        let w = m[3] * x + m[7] * y + m[11] * z + m[15];
        w = w || 1.0;
        out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
        out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
        out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
        return out;
    }
    vec3.transformMat4 = transformMat4;
    function transformMat3(out, a, m) {
        let x = a[0], y = a[1], z = a[2];
        out[0] = x * m[0] + y * m[3] + z * m[6];
        out[1] = x * m[1] + y * m[4] + z * m[7];
        out[2] = x * m[2] + y * m[5] + z * m[8];
        return out;
    }
    vec3.transformMat3 = transformMat3;
    function transformQuat(out, a, q) {
        let qx = q[0], qy = q[1], qz = q[2], qw = q[3];
        let x = a[0], y = a[1], z = a[2];
        let uvx = qy * z - qz * y, uvy = qz * x - qx * z, uvz = qx * y - qy * x;
        let uuvx = qy * uvz - qz * uvy, uuvy = qz * uvx - qx * uvz, uuvz = qx * uvy - qy * uvx;
        let w2 = qw * 2;
        uvx *= w2;
        uvy *= w2;
        uvz *= w2;
        uuvx *= 2;
        uuvy *= 2;
        uuvz *= 2;
        out[0] = x + uvx + uuvx;
        out[1] = y + uvy + uuvy;
        out[2] = z + uvz + uuvz;
        return out;
    }
    vec3.transformQuat = transformQuat;
    function rotateX(out, a, b, c) {
        let p = [], r = [];
        p[0] = a[0] - b[0];
        p[1] = a[1] - b[1];
        p[2] = a[2] - b[2];
        r[0] = p[0];
        r[1] = p[1] * Math.cos(c) - p[2] * Math.sin(c);
        r[2] = p[1] * Math.sin(c) + p[2] * Math.cos(c);
        out[0] = r[0] + b[0];
        out[1] = r[1] + b[1];
        out[2] = r[2] + b[2];
        return out;
    }
    vec3.rotateX = rotateX;
    function rotateY(out, a, b, c) {
        let p = [], r = [];
        p[0] = a[0] - b[0];
        p[1] = a[1] - b[1];
        p[2] = a[2] - b[2];
        r[0] = p[2] * Math.sin(c) + p[0] * Math.cos(c);
        r[1] = p[1];
        r[2] = p[2] * Math.cos(c) - p[0] * Math.sin(c);
        out[0] = r[0] + b[0];
        out[1] = r[1] + b[1];
        out[2] = r[2] + b[2];
        return out;
    }
    vec3.rotateY = rotateY;
    function rotateZ(out, a, b, c) {
        let p = [], r = [];
        p[0] = a[0] - b[0];
        p[1] = a[1] - b[1];
        p[2] = a[2] - b[2];
        r[0] = p[0] * Math.cos(c) - p[1] * Math.sin(c);
        r[1] = p[0] * Math.sin(c) + p[1] * Math.cos(c);
        r[2] = p[2];
        out[0] = r[0] + b[0];
        out[1] = r[1] + b[1];
        out[2] = r[2] + b[2];
        return out;
    }
    vec3.rotateZ = rotateZ;
    function angle(a, b) {
        let tempA = fromValues(a[0], a[1], a[2]);
        let tempB = fromValues(b[0], b[1], b[2]);
        normalize(tempA, tempA);
        normalize(tempB, tempB);
        let cosine = dot(tempA, tempB);
        if (cosine > 1.0) {
            return 0;
        }
        else if (cosine < -1.0) {
            return Math.PI;
        }
        else {
            return Math.acos(cosine);
        }
    }
    vec3.angle = angle;
    function zero(out) {
        out[0] = 0.0;
        out[1] = 0.0;
        out[2] = 0.0;
        return out;
    }
    vec3.zero = zero;
    function str(a) {
        return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
    }
    vec3.str = str;
    function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
    }
    vec3.exactEquals = exactEquals;
    function equals(a, b) {
        let a0 = a[0], a1 = a[1], a2 = a[2];
        let b0 = b[0], b1 = b[1], b2 = b[2];
        return (Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
            Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
            Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)));
    }
    vec3.equals = equals;
    vec3.sub = subtract;
    vec3.mul = multiply;
    vec3.div = divide;
    vec3.dist = distance;
    vec3.sqrDist = squaredDistance;
    vec3.len = _length;
    vec3.sqrLen = squaredLength;
    vec3.forEach = (function () {
        let vec = create();
        return function (a, stride, offset, count, fn, arg) {
            let i, l;
            if (!stride) {
                stride = 3;
            }
            if (!offset) {
                offset = 0;
            }
            if (count) {
                l = Math.min((count * stride) + offset, a.length);
            }
            else {
                l = a.length;
            }
            for (i = offset; i < l; i += stride) {
                vec[0] = a[i];
                vec[1] = a[i + 1];
                vec[2] = a[i + 2];
                fn(vec, vec, arg);
                a[i] = vec[0];
                a[i + 1] = vec[1];
                a[i + 2] = vec[2];
            }
            return a;
        };
    })();
})(vec3 || (vec3 = {}));
function vec4(...values) {
    let out = new Float32Array(4);
    if (values.length == 4) {
        out[0] = values[0];
        out[1] = values[1];
        out[2] = values[2];
        out[3] = values[3];
    }
    return out;
}
(function (vec4) {
    function create() {
        return vec4();
    }
    vec4.create = create;
    function clone(a) {
        let out = vec4();
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        return out;
    }
    vec4.clone = clone;
    function fromValues(x, y, z, w) {
        let out = vec4();
        out[0] = x;
        out[1] = y;
        out[2] = z;
        out[3] = w;
        return out;
    }
    vec4.fromValues = fromValues;
    function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        return out;
    }
    vec4.copy = copy;
    function set(out, x, y, z, w) {
        out[0] = x;
        out[1] = y;
        out[2] = z;
        out[3] = w;
        return out;
    }
    vec4.set = set;
    function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        out[3] = a[3] + b[3];
        return out;
    }
    vec4.add = add;
    function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        out[3] = a[3] - b[3];
        return out;
    }
    vec4.subtract = subtract;
    function multiply(out, a, b) {
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[1];
        out[2] = a[2] * b[2];
        out[3] = a[3] * b[3];
        return out;
    }
    vec4.multiply = multiply;
    function divide(out, a, b) {
        out[0] = a[0] / b[0];
        out[1] = a[1] / b[1];
        out[2] = a[2] / b[2];
        out[3] = a[3] / b[3];
        return out;
    }
    vec4.divide = divide;
    function ceil(out, a) {
        out[0] = Math.ceil(a[0]);
        out[1] = Math.ceil(a[1]);
        out[2] = Math.ceil(a[2]);
        out[3] = Math.ceil(a[3]);
        return out;
    }
    vec4.ceil = ceil;
    function floor(out, a) {
        out[0] = Math.floor(a[0]);
        out[1] = Math.floor(a[1]);
        out[2] = Math.floor(a[2]);
        out[3] = Math.floor(a[3]);
        return out;
    }
    vec4.floor = floor;
    function min(out, a, b) {
        out[0] = Math.min(a[0], b[0]);
        out[1] = Math.min(a[1], b[1]);
        out[2] = Math.min(a[2], b[2]);
        out[3] = Math.min(a[3], b[3]);
        return out;
    }
    vec4.min = min;
    function max(out, a, b) {
        out[0] = Math.max(a[0], b[0]);
        out[1] = Math.max(a[1], b[1]);
        out[2] = Math.max(a[2], b[2]);
        out[3] = Math.max(a[3], b[3]);
        return out;
    }
    vec4.max = max;
    function round(out, a) {
        out[0] = Math.round(a[0]);
        out[1] = Math.round(a[1]);
        out[2] = Math.round(a[2]);
        out[3] = Math.round(a[3]);
        return out;
    }
    vec4.round = round;
    function scale(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        out[3] = a[3] * b;
        return out;
    }
    vec4.scale = scale;
    function scaleAndAdd(out, a, b, scale) {
        out[0] = a[0] + (b[0] * scale);
        out[1] = a[1] + (b[1] * scale);
        out[2] = a[2] + (b[2] * scale);
        out[3] = a[3] + (b[3] * scale);
        return out;
    }
    vec4.scaleAndAdd = scaleAndAdd;
    function distance(a, b) {
        let x = b[0] - a[0];
        let y = b[1] - a[1];
        let z = b[2] - a[2];
        let w = b[3] - a[3];
        return Math.hypot(x, y, z, w);
    }
    vec4.distance = distance;
    function squaredDistance(a, b) {
        let x = b[0] - a[0];
        let y = b[1] - a[1];
        let z = b[2] - a[2];
        let w = b[3] - a[3];
        return x * x + y * y + z * z + w * w;
    }
    vec4.squaredDistance = squaredDistance;
    function _length(a) {
        let x = a[0];
        let y = a[1];
        let z = a[2];
        let w = a[3];
        return Math.hypot(x, y, z, w);
    }
    vec4._length = _length;
    function squaredLength(a) {
        let x = a[0];
        let y = a[1];
        let z = a[2];
        let w = a[3];
        return x * x + y * y + z * z + w * w;
    }
    vec4.squaredLength = squaredLength;
    function negate(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        out[2] = -a[2];
        out[3] = -a[3];
        return out;
    }
    vec4.negate = negate;
    function inverse(out, a) {
        out[0] = 1.0 / a[0];
        out[1] = 1.0 / a[1];
        out[2] = 1.0 / a[2];
        out[3] = 1.0 / a[3];
        return out;
    }
    vec4.inverse = inverse;
    function normalize(out, a) {
        let x = a[0];
        let y = a[1];
        let z = a[2];
        let w = a[3];
        let len = x * x + y * y + z * z + w * w;
        if (len > 0) {
            len = 1 / Math.sqrt(len);
        }
        out[0] = x * len;
        out[1] = y * len;
        out[2] = z * len;
        out[3] = w * len;
        return out;
    }
    vec4.normalize = normalize;
    function dot(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
    }
    vec4.dot = dot;
    function cross(out, u, v, w) {
        let A = (v[0] * w[1]) - (v[1] * w[0]), B = (v[0] * w[2]) - (v[2] * w[0]), C = (v[0] * w[3]) - (v[3] * w[0]), D = (v[1] * w[2]) - (v[2] * w[1]), E = (v[1] * w[3]) - (v[3] * w[1]), F = (v[2] * w[3]) - (v[3] * w[2]);
        let G = u[0];
        let H = u[1];
        let I = u[2];
        let J = u[3];
        out[0] = (H * F) - (I * E) + (J * D);
        out[1] = -(G * F) + (I * C) - (J * B);
        out[2] = (G * E) - (H * C) + (J * A);
        out[3] = -(G * D) + (H * B) - (I * A);
        return out;
    }
    vec4.cross = cross;
    ;
    function lerp(out, a, b, t) {
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
    vec4.lerp = lerp;
    function random(out, scale) {
        scale = scale || 1.0;
        var v1, v2, v3, v4;
        var s1, s2;
        do {
            v1 = Math.random() * 2 - 1;
            v2 = Math.random() * 2 - 1;
            s1 = v1 * v1 + v2 * v2;
        } while (s1 >= 1);
        do {
            v3 = Math.random() * 2 - 1;
            v4 = Math.random() * 2 - 1;
            s2 = v3 * v3 + v4 * v4;
        } while (s2 >= 1);
        var d = Math.sqrt((1 - s1) / s2);
        out[0] = scale * v1;
        out[1] = scale * v2;
        out[2] = scale * v3 * d;
        out[3] = scale * v4 * d;
        return out;
    }
    vec4.random = random;
    function transformMat4(out, a, m) {
        const x = a[0], y = a[1], z = a[2], w = a[3];
        out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
        out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
        out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
        out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
        return out;
    }
    vec4.transformMat4 = transformMat4;
    function transformQuat(out, a, q) {
        let x = a[0], y = a[1], z = a[2];
        let qx = q[0], qy = q[1], qz = q[2], qw = q[3];
        let ix = qw * x + qy * z - qz * y;
        let iy = qw * y + qz * x - qx * z;
        let iz = qw * z + qx * y - qy * x;
        let iw = -qx * x - qy * y - qz * z;
        out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
        out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
        out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
        out[3] = a[3];
        return out;
    }
    vec4.transformQuat = transformQuat;
    function zero(out) {
        out[0] = 0.0;
        out[1] = 0.0;
        out[2] = 0.0;
        out[3] = 0.0;
        return out;
    }
    vec4.zero = zero;
    function str(a) {
        return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
    }
    vec4.str = str;
    function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
    }
    vec4.exactEquals = exactEquals;
    function equals(a, b) {
        let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
        let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
        return (Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
            Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
            Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
            Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)));
    }
    vec4.equals = equals;
    vec4.sub = subtract;
    vec4.mul = multiply;
    vec4.div = divide;
    vec4.dist = distance;
    vec4.sqrDist = squaredDistance;
    vec4.len = _length;
    vec4.sqrLen = squaredLength;
    vec4.forEach = (function () {
        let vec = create();
        return function (a, stride, offset, count, fn, arg) {
            let i, l;
            if (!stride) {
                stride = 4;
            }
            if (!offset) {
                offset = 0;
            }
            if (count) {
                l = Math.min((count * stride) + offset, a.length);
            }
            else {
                l = a.length;
            }
            for (i = offset; i < l; i += stride) {
                vec[0] = a[i];
                vec[1] = a[i + 1];
                vec[2] = a[i + 2];
                vec[3] = a[i + 3];
                fn(vec, vec, arg);
                a[i] = vec[0];
                a[i + 1] = vec[1];
                a[i + 2] = vec[2];
                a[i + 3] = vec[3];
            }
            return a;
        };
    })();
})(vec4 || (vec4 = {}));
function mat2(...values) {
    const out = new Float32Array(4);
    if (values.length == 4) {
        out[0] = values[0];
        out[1] = values[1];
        out[2] = values[2];
        out[3] = values[3];
    }
    else {
        out[0] = 1;
        out[3] = 1;
    }
    return out;
}
var lat2;
(function (lat2) {
    function create() {
        let out = new Float32Array(4);
        out[0] = 1;
        out[3] = 1;
        return out;
    }
    lat2.create = create;
    function clone(a) {
        let out = new Float32Array(4);
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        return out;
    }
    lat2.clone = clone;
    function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        return out;
    }
    lat2.copy = copy;
    function identity(out) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        return out;
    }
    lat2.identity = identity;
    function fromValues(m00, m01, m10, m11) {
        let out = new Float32Array(4);
        out[0] = m00;
        out[1] = m01;
        out[2] = m10;
        out[3] = m11;
        return out;
    }
    lat2.fromValues = fromValues;
    function set(out, m00, m01, m10, m11) {
        out[0] = m00;
        out[1] = m01;
        out[2] = m10;
        out[3] = m11;
        return out;
    }
    lat2.set = set;
    function transpose(out, a) {
        if (out === a) {
            let a1 = a[1];
            out[1] = a[2];
            out[2] = a1;
        }
        else {
            out[0] = a[0];
            out[1] = a[2];
            out[2] = a[1];
            out[3] = a[3];
        }
        return out;
    }
    lat2.transpose = transpose;
    function invert(out, a) {
        let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
        let det = a0 * a3 - a2 * a1;
        if (!det) {
            return null;
        }
        det = 1.0 / det;
        out[0] = a3 * det;
        out[1] = -a1 * det;
        out[2] = -a2 * det;
        out[3] = a0 * det;
        return out;
    }
    lat2.invert = invert;
    function adjoint(out, a) {
        let a0 = a[0];
        out[0] = a[3];
        out[1] = -a[1];
        out[2] = -a[2];
        out[3] = a0;
        return out;
    }
    lat2.adjoint = adjoint;
    function determinant(a) {
        return a[0] * a[3] - a[2] * a[1];
    }
    lat2.determinant = determinant;
    function multiply(out, a, b) {
        let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
        let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
        out[0] = a0 * b0 + a2 * b1;
        out[1] = a1 * b0 + a3 * b1;
        out[2] = a0 * b2 + a2 * b3;
        out[3] = a1 * b2 + a3 * b3;
        return out;
    }
    lat2.multiply = multiply;
    function rotate(out, a, rad) {
        let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
        let s = Math.sin(rad);
        let c = Math.cos(rad);
        out[0] = a0 * c + a2 * s;
        out[1] = a1 * c + a3 * s;
        out[2] = a0 * -s + a2 * c;
        out[3] = a1 * -s + a3 * c;
        return out;
    }
    lat2.rotate = rotate;
    function scale(out, a, v) {
        let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
        let v0 = v[0], v1 = v[1];
        out[0] = a0 * v0;
        out[1] = a1 * v0;
        out[2] = a2 * v1;
        out[3] = a3 * v1;
        return out;
    }
    lat2.scale = scale;
    function fromRotation(out, rad) {
        let s = Math.sin(rad);
        let c = Math.cos(rad);
        out[0] = c;
        out[1] = s;
        out[2] = -s;
        out[3] = c;
        return out;
    }
    lat2.fromRotation = fromRotation;
    function fromScaling(out, v) {
        out[0] = v[0];
        out[1] = 0;
        out[2] = 0;
        out[3] = v[1];
        return out;
    }
    lat2.fromScaling = fromScaling;
    function str(a) {
        return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
    }
    lat2.str = str;
    function frob(a) {
        return (Math.hypot(a[0], a[1], a[2], a[3]));
    }
    lat2.frob = frob;
    function LDU(L, D, U, a) {
        L[2] = a[2] / a[0];
        U[0] = a[0];
        U[1] = a[1];
        U[3] = a[3] - L[2] * U[1];
        return [L, D, U];
    }
    lat2.LDU = LDU;
    function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        out[3] = a[3] + b[3];
        return out;
    }
    lat2.add = add;
    function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        out[3] = a[3] - b[3];
        return out;
    }
    lat2.subtract = subtract;
    function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
    }
    lat2.exactEquals = exactEquals;
    function equals(a, b) {
        let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
        let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
        return (Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
            Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
            Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
            Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)));
    }
    lat2.equals = equals;
    function multiplyScalar(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        out[3] = a[3] * b;
        return out;
    }
    lat2.multiplyScalar = multiplyScalar;
    function multiplyScalarAndAdd(out, a, b, scale) {
        out[0] = a[0] + (b[0] * scale);
        out[1] = a[1] + (b[1] * scale);
        out[2] = a[2] + (b[2] * scale);
        out[3] = a[3] + (b[3] * scale);
        return out;
    }
    lat2.multiplyScalarAndAdd = multiplyScalarAndAdd;
    lat2.mul = multiply;
    lat2.sub = subtract;
})(lat2 || (lat2 = {}));
function mat2d(...values) {
    const out = new Float32Array(6);
    if (values.length == 6) {
        out[0] = values[0];
        out[1] = values[1];
        out[2] = values[2];
        out[3] = values[3];
        out[4] = values[4];
        out[5] = values[5];
    }
    else {
        out[0] = 1;
        out[3] = 1;
    }
    return out;
}
(function (mat2d) {
    function create() {
        let out = new Float32Array(6);
        out[0] = 1;
        out[3] = 1;
        return out;
    }
    mat2d.create = create;
    function clone(a) {
        let out = new Float32Array(6);
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        return out;
    }
    mat2d.clone = clone;
    function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        return out;
    }
    mat2d.copy = copy;
    function identity(out) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        out[4] = 0;
        out[5] = 0;
        return out;
    }
    mat2d.identity = identity;
    function fromValues(a, b, c, d, tx, ty) {
        let out = new Float32Array(6);
        out[0] = a;
        out[1] = b;
        out[2] = c;
        out[3] = d;
        out[4] = tx;
        out[5] = ty;
        return out;
    }
    mat2d.fromValues = fromValues;
    function set(out, a, b, c, d, tx, ty) {
        out[0] = a;
        out[1] = b;
        out[2] = c;
        out[3] = d;
        out[4] = tx;
        out[5] = ty;
        return out;
    }
    mat2d.set = set;
    function invert(out, a) {
        let aa = a[0], ab = a[1], ac = a[2], ad = a[3];
        let atx = a[4], aty = a[5];
        let det = aa * ad - ab * ac;
        if (!det) {
            return null;
        }
        det = 1.0 / det;
        out[0] = ad * det;
        out[1] = -ab * det;
        out[2] = -ac * det;
        out[3] = aa * det;
        out[4] = (ac * aty - ad * atx) * det;
        out[5] = (ab * atx - aa * aty) * det;
        return out;
    }
    mat2d.invert = invert;
    function determinant(a) {
        return a[0] * a[3] - a[1] * a[2];
    }
    mat2d.determinant = determinant;
    function multiply(out, a, b) {
        let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
        let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
        out[0] = a0 * b0 + a2 * b1;
        out[1] = a1 * b0 + a3 * b1;
        out[2] = a0 * b2 + a2 * b3;
        out[3] = a1 * b2 + a3 * b3;
        out[4] = a0 * b4 + a2 * b5 + a4;
        out[5] = a1 * b4 + a3 * b5 + a5;
        return out;
    }
    mat2d.multiply = multiply;
    function rotate(out, a, rad) {
        let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
        let s = Math.sin(rad);
        let c = Math.cos(rad);
        out[0] = a0 * c + a2 * s;
        out[1] = a1 * c + a3 * s;
        out[2] = a0 * -s + a2 * c;
        out[3] = a1 * -s + a3 * c;
        out[4] = a4;
        out[5] = a5;
        return out;
    }
    mat2d.rotate = rotate;
    function scale(out, a, v) {
        let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
        let v0 = v[0], v1 = v[1];
        out[0] = a0 * v0;
        out[1] = a1 * v0;
        out[2] = a2 * v1;
        out[3] = a3 * v1;
        out[4] = a4;
        out[5] = a5;
        return out;
    }
    mat2d.scale = scale;
    function translate(out, a, v) {
        let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
        let v0 = v[0], v1 = v[1];
        out[0] = a0;
        out[1] = a1;
        out[2] = a2;
        out[3] = a3;
        out[4] = a0 * v0 + a2 * v1 + a4;
        out[5] = a1 * v0 + a3 * v1 + a5;
        return out;
    }
    mat2d.translate = translate;
    function fromRotation(out, rad) {
        let s = Math.sin(rad), c = Math.cos(rad);
        out[0] = c;
        out[1] = s;
        out[2] = -s;
        out[3] = c;
        out[4] = 0;
        out[5] = 0;
        return out;
    }
    mat2d.fromRotation = fromRotation;
    function fromScaling(out, v) {
        out[0] = v[0];
        out[1] = 0;
        out[2] = 0;
        out[3] = v[1];
        out[4] = 0;
        out[5] = 0;
        return out;
    }
    mat2d.fromScaling = fromScaling;
    function fromTranslation(out, v) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        out[4] = v[0];
        out[5] = v[1];
        return out;
    }
    mat2d.fromTranslation = fromTranslation;
    function str(a) {
        return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' +
            a[3] + ', ' + a[4] + ', ' + a[5] + ')';
    }
    mat2d.str = str;
    function frob(a) {
        return (Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], 1));
    }
    mat2d.frob = frob;
    function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        out[3] = a[3] + b[3];
        out[4] = a[4] + b[4];
        out[5] = a[5] + b[5];
        return out;
    }
    mat2d.add = add;
    function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        out[3] = a[3] - b[3];
        out[4] = a[4] - b[4];
        out[5] = a[5] - b[5];
        return out;
    }
    mat2d.subtract = subtract;
    function multiplyScalar(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        out[3] = a[3] * b;
        out[4] = a[4] * b;
        out[5] = a[5] * b;
        return out;
    }
    mat2d.multiplyScalar = multiplyScalar;
    function multiplyScalarAndAdd(out, a, b, scale) {
        out[0] = a[0] + (b[0] * scale);
        out[1] = a[1] + (b[1] * scale);
        out[2] = a[2] + (b[2] * scale);
        out[3] = a[3] + (b[3] * scale);
        out[4] = a[4] + (b[4] * scale);
        out[5] = a[5] + (b[5] * scale);
        return out;
    }
    mat2d.multiplyScalarAndAdd = multiplyScalarAndAdd;
    function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
    }
    mat2d.exactEquals = exactEquals;
    function equals(a, b) {
        let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
        let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
        return (Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
            Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
            Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
            Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
            Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
            Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)));
    }
    mat2d.equals = equals;
    mat2d.mul = multiply;
    mat2d.sub = subtract;
})(mat2d || (mat2d = {}));
function mat3(...values) {
    const out = new Float32Array(9);
    if (values.length == 9) {
        out[0] = values[0];
        out[1] = values[1];
        out[2] = values[2];
        out[3] = values[3];
        out[4] = values[4];
        out[5] = values[5];
        out[6] = values[6];
        out[7] = values[7];
        out[8] = values[8];
    }
    else {
        out[0] = 1;
        out[4] = 1;
        out[8] = 1;
    }
    return out;
}
(function (mat3) {
    function create() {
        let out = new Float32Array(9);
        out[0] = 1;
        out[4] = 1;
        out[8] = 1;
        return out;
    }
    mat3.create = create;
    function fromMat4(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[4];
        out[4] = a[5];
        out[5] = a[6];
        out[6] = a[8];
        out[7] = a[9];
        out[8] = a[10];
        return out;
    }
    mat3.fromMat4 = fromMat4;
    function clone(a) {
        let out = new Float32Array(9);
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        return out;
    }
    mat3.clone = clone;
    function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        return out;
    }
    mat3.copy = copy;
    function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
        let out = new Float32Array(9);
        out[0] = m00;
        out[1] = m01;
        out[2] = m02;
        out[3] = m10;
        out[4] = m11;
        out[5] = m12;
        out[6] = m20;
        out[7] = m21;
        out[8] = m22;
        return out;
    }
    mat3.fromValues = fromValues;
    function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
        out[0] = m00;
        out[1] = m01;
        out[2] = m02;
        out[3] = m10;
        out[4] = m11;
        out[5] = m12;
        out[6] = m20;
        out[7] = m21;
        out[8] = m22;
        return out;
    }
    mat3.set = set;
    function identity(out) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 1;
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
        out[8] = 1;
        return out;
    }
    mat3.identity = identity;
    function transpose(out, a) {
        if (out === a) {
            let a01 = a[1], a02 = a[2], a12 = a[5];
            out[1] = a[3];
            out[2] = a[6];
            out[3] = a01;
            out[5] = a[7];
            out[6] = a02;
            out[7] = a12;
        }
        else {
            out[0] = a[0];
            out[1] = a[3];
            out[2] = a[6];
            out[3] = a[1];
            out[4] = a[4];
            out[5] = a[7];
            out[6] = a[2];
            out[7] = a[5];
            out[8] = a[8];
        }
        return out;
    }
    mat3.transpose = transpose;
    function invert(out, a) {
        let a00 = a[0], a01 = a[1], a02 = a[2];
        let a10 = a[3], a11 = a[4], a12 = a[5];
        let a20 = a[6], a21 = a[7], a22 = a[8];
        let b01 = a22 * a11 - a12 * a21;
        let b11 = -a22 * a10 + a12 * a20;
        let b21 = a21 * a10 - a11 * a20;
        let det = a00 * b01 + a01 * b11 + a02 * b21;
        if (!det) {
            return null;
        }
        det = 1.0 / det;
        out[0] = b01 * det;
        out[1] = (-a22 * a01 + a02 * a21) * det;
        out[2] = (a12 * a01 - a02 * a11) * det;
        out[3] = b11 * det;
        out[4] = (a22 * a00 - a02 * a20) * det;
        out[5] = (-a12 * a00 + a02 * a10) * det;
        out[6] = b21 * det;
        out[7] = (-a21 * a00 + a01 * a20) * det;
        out[8] = (a11 * a00 - a01 * a10) * det;
        return out;
    }
    mat3.invert = invert;
    function adjoint(out, a) {
        let a00 = a[0], a01 = a[1], a02 = a[2];
        let a10 = a[3], a11 = a[4], a12 = a[5];
        let a20 = a[6], a21 = a[7], a22 = a[8];
        out[0] = (a11 * a22 - a12 * a21);
        out[1] = (a02 * a21 - a01 * a22);
        out[2] = (a01 * a12 - a02 * a11);
        out[3] = (a12 * a20 - a10 * a22);
        out[4] = (a00 * a22 - a02 * a20);
        out[5] = (a02 * a10 - a00 * a12);
        out[6] = (a10 * a21 - a11 * a20);
        out[7] = (a01 * a20 - a00 * a21);
        out[8] = (a00 * a11 - a01 * a10);
        return out;
    }
    mat3.adjoint = adjoint;
    function determinant(a) {
        let a00 = a[0], a01 = a[1], a02 = a[2];
        let a10 = a[3], a11 = a[4], a12 = a[5];
        let a20 = a[6], a21 = a[7], a22 = a[8];
        return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
    }
    mat3.determinant = determinant;
    function multiply(out, a, b) {
        let a00 = a[0], a01 = a[1], a02 = a[2];
        let a10 = a[3], a11 = a[4], a12 = a[5];
        let a20 = a[6], a21 = a[7], a22 = a[8];
        let b00 = b[0], b01 = b[1], b02 = b[2];
        let b10 = b[3], b11 = b[4], b12 = b[5];
        let b20 = b[6], b21 = b[7], b22 = b[8];
        out[0] = b00 * a00 + b01 * a10 + b02 * a20;
        out[1] = b00 * a01 + b01 * a11 + b02 * a21;
        out[2] = b00 * a02 + b01 * a12 + b02 * a22;
        out[3] = b10 * a00 + b11 * a10 + b12 * a20;
        out[4] = b10 * a01 + b11 * a11 + b12 * a21;
        out[5] = b10 * a02 + b11 * a12 + b12 * a22;
        out[6] = b20 * a00 + b21 * a10 + b22 * a20;
        out[7] = b20 * a01 + b21 * a11 + b22 * a21;
        out[8] = b20 * a02 + b21 * a12 + b22 * a22;
        return out;
    }
    mat3.multiply = multiply;
    function translate(out, a, v) {
        let a00 = a[0], a01 = a[1], a02 = a[2], a10 = a[3], a11 = a[4], a12 = a[5], a20 = a[6], a21 = a[7], a22 = a[8], x = v[0], y = v[1];
        out[0] = a00;
        out[1] = a01;
        out[2] = a02;
        out[3] = a10;
        out[4] = a11;
        out[5] = a12;
        out[6] = x * a00 + y * a10 + a20;
        out[7] = x * a01 + y * a11 + a21;
        out[8] = x * a02 + y * a12 + a22;
        return out;
    }
    mat3.translate = translate;
    function rotate(out, a, rad) {
        let a00 = a[0], a01 = a[1], a02 = a[2], a10 = a[3], a11 = a[4], a12 = a[5], a20 = a[6], a21 = a[7], a22 = a[8], s = Math.sin(rad), c = Math.cos(rad);
        out[0] = c * a00 + s * a10;
        out[1] = c * a01 + s * a11;
        out[2] = c * a02 + s * a12;
        out[3] = c * a10 - s * a00;
        out[4] = c * a11 - s * a01;
        out[5] = c * a12 - s * a02;
        out[6] = a20;
        out[7] = a21;
        out[8] = a22;
        return out;
    }
    mat3.rotate = rotate;
    ;
    function scale(out, a, v) {
        let x = v[0], y = v[1];
        out[0] = x * a[0];
        out[1] = x * a[1];
        out[2] = x * a[2];
        out[3] = y * a[3];
        out[4] = y * a[4];
        out[5] = y * a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        return out;
    }
    mat3.scale = scale;
    function fromTranslation(out, v) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 1;
        out[5] = 0;
        out[6] = v[0];
        out[7] = v[1];
        out[8] = 1;
        return out;
    }
    mat3.fromTranslation = fromTranslation;
    function fromRotation(out, rad) {
        let s = Math.sin(rad), c = Math.cos(rad);
        out[0] = c;
        out[1] = s;
        out[2] = 0;
        out[3] = -s;
        out[4] = c;
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
        out[8] = 1;
        return out;
    }
    mat3.fromRotation = fromRotation;
    function fromScaling(out, v) {
        out[0] = v[0];
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = v[1];
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
        out[8] = 1;
        return out;
    }
    mat3.fromScaling = fromScaling;
    function fromMat2d(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = 0;
        out[3] = a[2];
        out[4] = a[3];
        out[5] = 0;
        out[6] = a[4];
        out[7] = a[5];
        out[8] = 1;
        return out;
    }
    mat3.fromMat2d = fromMat2d;
    function fromQuat(out, q) {
        let x = q[0], y = q[1], z = q[2], w = q[3];
        let x2 = x + x;
        let y2 = y + y;
        let z2 = z + z;
        let xx = x * x2;
        let yx = y * x2;
        let yy = y * y2;
        let zx = z * x2;
        let zy = z * y2;
        let zz = z * z2;
        let wx = w * x2;
        let wy = w * y2;
        let wz = w * z2;
        out[0] = 1 - yy - zz;
        out[3] = yx - wz;
        out[6] = zx + wy;
        out[1] = yx + wz;
        out[4] = 1 - xx - zz;
        out[7] = zy - wx;
        out[2] = zx - wy;
        out[5] = zy + wx;
        out[8] = 1 - xx - yy;
        return out;
    }
    mat3.fromQuat = fromQuat;
    function normalFromMat4(out, a) {
        let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
        let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
        let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
        let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
        let b00 = a00 * a11 - a01 * a10;
        let b01 = a00 * a12 - a02 * a10;
        let b02 = a00 * a13 - a03 * a10;
        let b03 = a01 * a12 - a02 * a11;
        let b04 = a01 * a13 - a03 * a11;
        let b05 = a02 * a13 - a03 * a12;
        let b06 = a20 * a31 - a21 * a30;
        let b07 = a20 * a32 - a22 * a30;
        let b08 = a20 * a33 - a23 * a30;
        let b09 = a21 * a32 - a22 * a31;
        let b10 = a21 * a33 - a23 * a31;
        let b11 = a22 * a33 - a23 * a32;
        let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
        if (!det) {
            return null;
        }
        det = 1.0 / det;
        out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
        out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
        out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
        out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
        out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
        out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
        out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
        out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
        out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
        return out;
    }
    mat3.normalFromMat4 = normalFromMat4;
    function projection(out, width, height) {
        out[0] = 2 / width;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = -2 / height;
        out[5] = 0;
        out[6] = -1;
        out[7] = 1;
        out[8] = 1;
        return out;
    }
    mat3.projection = projection;
    function str(a) {
        return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' +
            a[3] + ', ' + a[4] + ', ' + a[5] + ', ' +
            a[6] + ', ' + a[7] + ', ' + a[8] + ')';
    }
    mat3.str = str;
    function frob(a) {
        return (Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]));
    }
    mat3.frob = frob;
    function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        out[3] = a[3] + b[3];
        out[4] = a[4] + b[4];
        out[5] = a[5] + b[5];
        out[6] = a[6] + b[6];
        out[7] = a[7] + b[7];
        out[8] = a[8] + b[8];
        return out;
    }
    mat3.add = add;
    function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        out[3] = a[3] - b[3];
        out[4] = a[4] - b[4];
        out[5] = a[5] - b[5];
        out[6] = a[6] - b[6];
        out[7] = a[7] - b[7];
        out[8] = a[8] - b[8];
        return out;
    }
    mat3.subtract = subtract;
    function multiplyScalar(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        out[3] = a[3] * b;
        out[4] = a[4] * b;
        out[5] = a[5] * b;
        out[6] = a[6] * b;
        out[7] = a[7] * b;
        out[8] = a[8] * b;
        return out;
    }
    mat3.multiplyScalar = multiplyScalar;
    function multiplyScalarAndAdd(out, a, b, scale) {
        out[0] = a[0] + (b[0] * scale);
        out[1] = a[1] + (b[1] * scale);
        out[2] = a[2] + (b[2] * scale);
        out[3] = a[3] + (b[3] * scale);
        out[4] = a[4] + (b[4] * scale);
        out[5] = a[5] + (b[5] * scale);
        out[6] = a[6] + (b[6] * scale);
        out[7] = a[7] + (b[7] * scale);
        out[8] = a[8] + (b[8] * scale);
        return out;
    }
    mat3.multiplyScalarAndAdd = multiplyScalarAndAdd;
    function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] &&
            a[3] === b[3] && a[4] === b[4] && a[5] === b[5] &&
            a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
    }
    mat3.exactEquals = exactEquals;
    function equals(a, b) {
        let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7], a8 = a[8];
        let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8];
        return (Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
            Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
            Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
            Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
            Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
            Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
            Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
            Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
            Math.abs(a8 - b8) <= EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)));
    }
    mat3.equals = equals;
    mat3.mul = multiply;
    mat3.sub = subtract;
})(mat3 || (mat3 = {}));
function mat4(...values) {
    const out = new Float32Array(16);
    if (values.length == 16) {
        out[0] = values[0];
        out[1] = values[1];
        out[2] = values[2];
        out[3] = values[3];
        out[4] = values[4];
        out[5] = values[5];
        out[6] = values[6];
        out[7] = values[7];
        out[8] = values[8];
        out[9] = values[9];
        out[10] = values[10];
        out[11] = values[11];
        out[12] = values[12];
        out[13] = values[13];
        out[14] = values[14];
        out[15] = values[15];
    }
    else {
        out[0] = 1;
        out[5] = 1;
        out[10] = 1;
        out[15] = 1;
    }
    return out;
}
(function (mat4) {
    function create() {
        let out = new Float32Array(16);
        out[0] = 1;
        out[5] = 1;
        out[10] = 1;
        out[15] = 1;
        return out;
    }
    mat4.create = create;
    function clone(a) {
        let out = new Float32Array(16);
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        out[9] = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
        return out;
    }
    mat4.clone = clone;
    function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        out[9] = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
        return out;
    }
    mat4.copy = copy;
    function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
        let out = new Float32Array(16);
        out[0] = m00;
        out[1] = m01;
        out[2] = m02;
        out[3] = m03;
        out[4] = m10;
        out[5] = m11;
        out[6] = m12;
        out[7] = m13;
        out[8] = m20;
        out[9] = m21;
        out[10] = m22;
        out[11] = m23;
        out[12] = m30;
        out[13] = m31;
        out[14] = m32;
        out[15] = m33;
        return out;
    }
    mat4.fromValues = fromValues;
    function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
        out[0] = m00;
        out[1] = m01;
        out[2] = m02;
        out[3] = m03;
        out[4] = m10;
        out[5] = m11;
        out[6] = m12;
        out[7] = m13;
        out[8] = m20;
        out[9] = m21;
        out[10] = m22;
        out[11] = m23;
        out[12] = m30;
        out[13] = m31;
        out[14] = m32;
        out[15] = m33;
        return out;
    }
    mat4.set = set;
    function identity(out) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = 1;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 1;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
    }
    mat4.identity = identity;
    function transpose(out, a) {
        if (out === a) {
            let a01 = a[1], a02 = a[2], a03 = a[3];
            let a12 = a[6], a13 = a[7];
            let a23 = a[11];
            out[1] = a[4];
            out[2] = a[8];
            out[3] = a[12];
            out[4] = a01;
            out[6] = a[9];
            out[7] = a[13];
            out[8] = a02;
            out[9] = a12;
            out[11] = a[14];
            out[12] = a03;
            out[13] = a13;
            out[14] = a23;
        }
        else {
            out[0] = a[0];
            out[1] = a[4];
            out[2] = a[8];
            out[3] = a[12];
            out[4] = a[1];
            out[5] = a[5];
            out[6] = a[9];
            out[7] = a[13];
            out[8] = a[2];
            out[9] = a[6];
            out[10] = a[10];
            out[11] = a[14];
            out[12] = a[3];
            out[13] = a[7];
            out[14] = a[11];
            out[15] = a[15];
        }
        return out;
    }
    mat4.transpose = transpose;
    function invert(out, a) {
        const a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
        const a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
        const a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
        const a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
        const b00 = a00 * a11 - a01 * a10;
        const b01 = a00 * a12 - a02 * a10;
        const b02 = a00 * a13 - a03 * a10;
        const b03 = a01 * a12 - a02 * a11;
        const b04 = a01 * a13 - a03 * a11;
        const b05 = a02 * a13 - a03 * a12;
        const b06 = a20 * a31 - a21 * a30;
        const b07 = a20 * a32 - a22 * a30;
        const b08 = a20 * a33 - a23 * a30;
        const b09 = a21 * a32 - a22 * a31;
        const b10 = a21 * a33 - a23 * a31;
        const b11 = a22 * a33 - a23 * a32;
        let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
        if (!det) {
            return null;
        }
        det = 1.0 / det;
        out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
        out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
        out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
        out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
        out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
        out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
        out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
        out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
        out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
        out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
        out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
        out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
        out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
        out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
        out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
        out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
        return out;
    }
    mat4.invert = invert;
    function adjoint(out, a) {
        let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
        let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
        let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
        let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
        out[0] = (a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22));
        out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
        out[2] = (a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12));
        out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
        out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
        out[5] = (a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22));
        out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
        out[7] = (a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12));
        out[8] = (a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21));
        out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
        out[10] = (a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11));
        out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
        out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
        out[13] = (a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21));
        out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
        out[15] = (a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11));
        return out;
    }
    mat4.adjoint = adjoint;
    function determinant(a) {
        let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
        let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
        let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
        let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
        let b00 = a00 * a11 - a01 * a10;
        let b01 = a00 * a12 - a02 * a10;
        let b02 = a00 * a13 - a03 * a10;
        let b03 = a01 * a12 - a02 * a11;
        let b04 = a01 * a13 - a03 * a11;
        let b05 = a02 * a13 - a03 * a12;
        let b06 = a20 * a31 - a21 * a30;
        let b07 = a20 * a32 - a22 * a30;
        let b08 = a20 * a33 - a23 * a30;
        let b09 = a21 * a32 - a22 * a31;
        let b10 = a21 * a33 - a23 * a31;
        let b11 = a22 * a33 - a23 * a32;
        return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    }
    mat4.determinant = determinant;
    function multiply(out, a, b) {
        const a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
        const a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
        const a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
        const a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
        let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
        out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        b0 = b[4];
        b1 = b[5];
        b2 = b[6];
        b3 = b[7];
        out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        b0 = b[8];
        b1 = b[9];
        b2 = b[10];
        b3 = b[11];
        out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        b0 = b[12];
        b1 = b[13];
        b2 = b[14];
        b3 = b[15];
        out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        return out;
    }
    mat4.multiply = multiply;
    function translate(out, a, v) {
        const x = v[0], y = v[1], z = v[2];
        let a00, a01, a02, a03;
        let a10, a11, a12, a13;
        let a20, a21, a22, a23;
        if (a === out) {
            out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
            out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
            out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
            out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
        }
        else {
            a00 = a[0];
            a01 = a[1];
            a02 = a[2];
            a03 = a[3];
            a10 = a[4];
            a11 = a[5];
            a12 = a[6];
            a13 = a[7];
            a20 = a[8];
            a21 = a[9];
            a22 = a[10];
            a23 = a[11];
            out[0] = a00;
            out[1] = a01;
            out[2] = a02;
            out[3] = a03;
            out[4] = a10;
            out[5] = a11;
            out[6] = a12;
            out[7] = a13;
            out[8] = a20;
            out[9] = a21;
            out[10] = a22;
            out[11] = a23;
            out[12] = a00 * x + a10 * y + a20 * z + a[12];
            out[13] = a01 * x + a11 * y + a21 * z + a[13];
            out[14] = a02 * x + a12 * y + a22 * z + a[14];
            out[15] = a03 * x + a13 * y + a23 * z + a[15];
        }
        return out;
    }
    mat4.translate = translate;
    function scale(out, a, v) {
        let x = v[0], y = v[1], z = v[2];
        out[0] = a[0] * x;
        out[1] = a[1] * x;
        out[2] = a[2] * x;
        out[3] = a[3] * x;
        out[4] = a[4] * y;
        out[5] = a[5] * y;
        out[6] = a[6] * y;
        out[7] = a[7] * y;
        out[8] = a[8] * z;
        out[9] = a[9] * z;
        out[10] = a[10] * z;
        out[11] = a[11] * z;
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
        return out;
    }
    mat4.scale = scale;
    function rotate(out, a, rad, axis) {
        let x = axis[0], y = axis[1], z = axis[2];
        let len = Math.hypot(x, y, z);
        let s, c, t;
        let a00, a01, a02, a03;
        let a10, a11, a12, a13;
        let a20, a21, a22, a23;
        let b00, b01, b02;
        let b10, b11, b12;
        let b20, b21, b22;
        if (len < EPSILON) {
            return null;
        }
        len = 1 / len;
        x *= len;
        y *= len;
        z *= len;
        s = Math.sin(rad);
        c = Math.cos(rad);
        t = 1 - c;
        a00 = a[0];
        a01 = a[1];
        a02 = a[2];
        a03 = a[3];
        a10 = a[4];
        a11 = a[5];
        a12 = a[6];
        a13 = a[7];
        a20 = a[8];
        a21 = a[9];
        a22 = a[10];
        a23 = a[11];
        b00 = x * x * t + c;
        b01 = y * x * t + z * s;
        b02 = z * x * t - y * s;
        b10 = x * y * t - z * s;
        b11 = y * y * t + c;
        b12 = z * y * t + x * s;
        b20 = x * z * t + y * s;
        b21 = y * z * t - x * s;
        b22 = z * z * t + c;
        out[0] = a00 * b00 + a10 * b01 + a20 * b02;
        out[1] = a01 * b00 + a11 * b01 + a21 * b02;
        out[2] = a02 * b00 + a12 * b01 + a22 * b02;
        out[3] = a03 * b00 + a13 * b01 + a23 * b02;
        out[4] = a00 * b10 + a10 * b11 + a20 * b12;
        out[5] = a01 * b10 + a11 * b11 + a21 * b12;
        out[6] = a02 * b10 + a12 * b11 + a22 * b12;
        out[7] = a03 * b10 + a13 * b11 + a23 * b12;
        out[8] = a00 * b20 + a10 * b21 + a20 * b22;
        out[9] = a01 * b20 + a11 * b21 + a21 * b22;
        out[10] = a02 * b20 + a12 * b21 + a22 * b22;
        out[11] = a03 * b20 + a13 * b21 + a23 * b22;
        if (a !== out) {
            out[12] = a[12];
            out[13] = a[13];
            out[14] = a[14];
            out[15] = a[15];
        }
        return out;
    }
    mat4.rotate = rotate;
    function rotateX(out, a, rad) {
        const s = Math.sin(rad);
        const c = Math.cos(rad);
        const a10 = a[4];
        const a11 = a[5];
        const a12 = a[6];
        const a13 = a[7];
        const a20 = a[8];
        const a21 = a[9];
        const a22 = a[10];
        const a23 = a[11];
        if (a !== out) {
            out[0] = a[0];
            out[1] = a[1];
            out[2] = a[2];
            out[3] = a[3];
            out[12] = a[12];
            out[13] = a[13];
            out[14] = a[14];
            out[15] = a[15];
        }
        out[4] = a10 * c + a20 * s;
        out[5] = a11 * c + a21 * s;
        out[6] = a12 * c + a22 * s;
        out[7] = a13 * c + a23 * s;
        out[8] = a20 * c - a10 * s;
        out[9] = a21 * c - a11 * s;
        out[10] = a22 * c - a12 * s;
        out[11] = a23 * c - a13 * s;
        return out;
    }
    mat4.rotateX = rotateX;
    function rotateY(out, a, rad) {
        let s = Math.sin(rad);
        let c = Math.cos(rad);
        let a00 = a[0];
        let a01 = a[1];
        let a02 = a[2];
        let a03 = a[3];
        let a20 = a[8];
        let a21 = a[9];
        let a22 = a[10];
        let a23 = a[11];
        if (a !== out) {
            out[4] = a[4];
            out[5] = a[5];
            out[6] = a[6];
            out[7] = a[7];
            out[12] = a[12];
            out[13] = a[13];
            out[14] = a[14];
            out[15] = a[15];
        }
        out[0] = a00 * c - a20 * s;
        out[1] = a01 * c - a21 * s;
        out[2] = a02 * c - a22 * s;
        out[3] = a03 * c - a23 * s;
        out[8] = a00 * s + a20 * c;
        out[9] = a01 * s + a21 * c;
        out[10] = a02 * s + a22 * c;
        out[11] = a03 * s + a23 * c;
        return out;
    }
    mat4.rotateY = rotateY;
    function rotateZ(out, a, rad) {
        let s = Math.sin(rad);
        let c = Math.cos(rad);
        let a00 = a[0];
        let a01 = a[1];
        let a02 = a[2];
        let a03 = a[3];
        let a10 = a[4];
        let a11 = a[5];
        let a12 = a[6];
        let a13 = a[7];
        if (a !== out) {
            out[8] = a[8];
            out[9] = a[9];
            out[10] = a[10];
            out[11] = a[11];
            out[12] = a[12];
            out[13] = a[13];
            out[14] = a[14];
            out[15] = a[15];
        }
        out[0] = a00 * c + a10 * s;
        out[1] = a01 * c + a11 * s;
        out[2] = a02 * c + a12 * s;
        out[3] = a03 * c + a13 * s;
        out[4] = a10 * c - a00 * s;
        out[5] = a11 * c - a01 * s;
        out[6] = a12 * c - a02 * s;
        out[7] = a13 * c - a03 * s;
        return out;
    }
    mat4.rotateZ = rotateZ;
    function fromTranslation(out, v) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = 1;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 1;
        out[11] = 0;
        out[12] = v[0];
        out[13] = v[1];
        out[14] = v[2];
        out[15] = 1;
        return out;
    }
    mat4.fromTranslation = fromTranslation;
    function fromScaling(out, v) {
        out[0] = v[0];
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = v[1];
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = v[2];
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
    }
    mat4.fromScaling = fromScaling;
    function fromRotation(out, rad, axis) {
        let x = axis[0], y = axis[1], z = axis[2];
        let len = Math.hypot(x, y, z);
        let s, c, t;
        if (len < EPSILON) {
            return null;
        }
        len = 1 / len;
        x *= len;
        y *= len;
        z *= len;
        s = Math.sin(rad);
        c = Math.cos(rad);
        t = 1 - c;
        out[0] = x * x * t + c;
        out[1] = y * x * t + z * s;
        out[2] = z * x * t - y * s;
        out[3] = 0;
        out[4] = x * y * t - z * s;
        out[5] = y * y * t + c;
        out[6] = z * y * t + x * s;
        out[7] = 0;
        out[8] = x * z * t + y * s;
        out[9] = y * z * t - x * s;
        out[10] = z * z * t + c;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
    }
    mat4.fromRotation = fromRotation;
    function fromXRotation(out, rad) {
        let s = Math.sin(rad);
        let c = Math.cos(rad);
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = c;
        out[6] = s;
        out[7] = 0;
        out[8] = 0;
        out[9] = -s;
        out[10] = c;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
    }
    mat4.fromXRotation = fromXRotation;
    function fromYRotation(out, rad) {
        let s = Math.sin(rad);
        let c = Math.cos(rad);
        out[0] = c;
        out[1] = 0;
        out[2] = -s;
        out[3] = 0;
        out[4] = 0;
        out[5] = 1;
        out[6] = 0;
        out[7] = 0;
        out[8] = s;
        out[9] = 0;
        out[10] = c;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
    }
    mat4.fromYRotation = fromYRotation;
    function fromZRotation(out, rad) {
        let s = Math.sin(rad);
        let c = Math.cos(rad);
        out[0] = c;
        out[1] = s;
        out[2] = 0;
        out[3] = 0;
        out[4] = -s;
        out[5] = c;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 1;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
    }
    mat4.fromZRotation = fromZRotation;
    function fromRotationTranslation(out, q, v) {
        let x = q[0], y = q[1], z = q[2], w = q[3];
        let x2 = x + x;
        let y2 = y + y;
        let z2 = z + z;
        let xx = x * x2;
        let xy = x * y2;
        let xz = x * z2;
        let yy = y * y2;
        let yz = y * z2;
        let zz = z * z2;
        let wx = w * x2;
        let wy = w * y2;
        let wz = w * z2;
        out[0] = 1 - (yy + zz);
        out[1] = xy + wz;
        out[2] = xz - wy;
        out[3] = 0;
        out[4] = xy - wz;
        out[5] = 1 - (xx + zz);
        out[6] = yz + wx;
        out[7] = 0;
        out[8] = xz + wy;
        out[9] = yz - wx;
        out[10] = 1 - (xx + yy);
        out[11] = 0;
        out[12] = v[0];
        out[13] = v[1];
        out[14] = v[2];
        out[15] = 1;
        return out;
    }
    mat4.fromRotationTranslation = fromRotationTranslation;
    function fromQuat2(out, a) {
        let translation = new Float32Array(3);
        let bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7];
        let magnitude = bx * bx + by * by + bz * bz + bw * bw;
        if (magnitude > 0) {
            translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
            translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
            translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
        }
        else {
            translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
            translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
            translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
        }
        fromRotationTranslation(out, a, translation);
        return out;
    }
    mat4.fromQuat2 = fromQuat2;
    function getTranslation(out, mat) {
        out[0] = mat[12];
        out[1] = mat[13];
        out[2] = mat[14];
        return out;
    }
    mat4.getTranslation = getTranslation;
    function getScaling(out, mat) {
        let m11 = mat[0];
        let m12 = mat[1];
        let m13 = mat[2];
        let m21 = mat[4];
        let m22 = mat[5];
        let m23 = mat[6];
        let m31 = mat[8];
        let m32 = mat[9];
        let m33 = mat[10];
        out[0] = Math.hypot(m11, m12, m13);
        out[1] = Math.hypot(m21, m22, m23);
        out[2] = Math.hypot(m31, m32, m33);
        return out;
    }
    mat4.getScaling = getScaling;
    function getRotation(out, mat) {
        let scaling = new Float32Array(3);
        getScaling(scaling, mat);
        let is1 = 1 / scaling[0];
        let is2 = 1 / scaling[1];
        let is3 = 1 / scaling[2];
        let sm11 = mat[0] * is1;
        let sm12 = mat[1] * is2;
        let sm13 = mat[2] * is3;
        let sm21 = mat[4] * is1;
        let sm22 = mat[5] * is2;
        let sm23 = mat[6] * is3;
        let sm31 = mat[8] * is1;
        let sm32 = mat[9] * is2;
        let sm33 = mat[10] * is3;
        let trace = sm11 + sm22 + sm33;
        let S = 0;
        if (trace > 0) {
            S = Math.sqrt(trace + 1.0) * 2;
            out[3] = 0.25 * S;
            out[0] = (sm23 - sm32) / S;
            out[1] = (sm31 - sm13) / S;
            out[2] = (sm12 - sm21) / S;
        }
        else if ((sm11 > sm22) && (sm11 > sm33)) {
            S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
            out[3] = (sm23 - sm32) / S;
            out[0] = 0.25 * S;
            out[1] = (sm12 + sm21) / S;
            out[2] = (sm31 + sm13) / S;
        }
        else if (sm22 > sm33) {
            S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
            out[3] = (sm31 - sm13) / S;
            out[0] = (sm12 + sm21) / S;
            out[1] = 0.25 * S;
            out[2] = (sm23 + sm32) / S;
        }
        else {
            S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
            out[3] = (sm12 - sm21) / S;
            out[0] = (sm31 + sm13) / S;
            out[1] = (sm23 + sm32) / S;
            out[2] = 0.25 * S;
        }
        return out;
    }
    mat4.getRotation = getRotation;
    function fromRotationTranslationScale(out, q, v, s) {
        let x = q[0], y = q[1], z = q[2], w = q[3];
        let x2 = x + x;
        let y2 = y + y;
        let z2 = z + z;
        let xx = x * x2;
        let xy = x * y2;
        let xz = x * z2;
        let yy = y * y2;
        let yz = y * z2;
        let zz = z * z2;
        let wx = w * x2;
        let wy = w * y2;
        let wz = w * z2;
        let sx = s[0];
        let sy = s[1];
        let sz = s[2];
        out[0] = (1 - (yy + zz)) * sx;
        out[1] = (xy + wz) * sx;
        out[2] = (xz - wy) * sx;
        out[3] = 0;
        out[4] = (xy - wz) * sy;
        out[5] = (1 - (xx + zz)) * sy;
        out[6] = (yz + wx) * sy;
        out[7] = 0;
        out[8] = (xz + wy) * sz;
        out[9] = (yz - wx) * sz;
        out[10] = (1 - (xx + yy)) * sz;
        out[11] = 0;
        out[12] = v[0];
        out[13] = v[1];
        out[14] = v[2];
        out[15] = 1;
        return out;
    }
    mat4.fromRotationTranslationScale = fromRotationTranslationScale;
    function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
        let x = q[0], y = q[1], z = q[2], w = q[3];
        let x2 = x + x;
        let y2 = y + y;
        let z2 = z + z;
        let xx = x * x2;
        let xy = x * y2;
        let xz = x * z2;
        let yy = y * y2;
        let yz = y * z2;
        let zz = z * z2;
        let wx = w * x2;
        let wy = w * y2;
        let wz = w * z2;
        let sx = s[0];
        let sy = s[1];
        let sz = s[2];
        let ox = o[0];
        let oy = o[1];
        let oz = o[2];
        let out0 = (1 - (yy + zz)) * sx;
        let out1 = (xy + wz) * sx;
        let out2 = (xz - wy) * sx;
        let out4 = (xy - wz) * sy;
        let out5 = (1 - (xx + zz)) * sy;
        let out6 = (yz + wx) * sy;
        let out8 = (xz + wy) * sz;
        let out9 = (yz - wx) * sz;
        let out10 = (1 - (xx + yy)) * sz;
        out[0] = out0;
        out[1] = out1;
        out[2] = out2;
        out[3] = 0;
        out[4] = out4;
        out[5] = out5;
        out[6] = out6;
        out[7] = 0;
        out[8] = out8;
        out[9] = out9;
        out[10] = out10;
        out[11] = 0;
        out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
        out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
        out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
        out[15] = 1;
        return out;
    }
    mat4.fromRotationTranslationScaleOrigin = fromRotationTranslationScaleOrigin;
    function fromQuat(out, q) {
        let x = q[0], y = q[1], z = q[2], w = q[3];
        let x2 = x + x;
        let y2 = y + y;
        let z2 = z + z;
        let xx = x * x2;
        let yx = y * x2;
        let yy = y * y2;
        let zx = z * x2;
        let zy = z * y2;
        let zz = z * z2;
        let wx = w * x2;
        let wy = w * y2;
        let wz = w * z2;
        out[0] = 1 - yy - zz;
        out[1] = yx + wz;
        out[2] = zx - wy;
        out[3] = 0;
        out[4] = yx - wz;
        out[5] = 1 - xx - zz;
        out[6] = zy + wx;
        out[7] = 0;
        out[8] = zx + wy;
        out[9] = zy - wx;
        out[10] = 1 - xx - yy;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
    }
    mat4.fromQuat = fromQuat;
    function frustum(out, left, right, bottom, top, near, far) {
        let rl = 1 / (right - left);
        let tb = 1 / (top - bottom);
        let nf = 1 / (near - far);
        out[0] = (near * 2) * rl;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = (near * 2) * tb;
        out[6] = 0;
        out[7] = 0;
        out[8] = (right + left) * rl;
        out[9] = (top + bottom) * tb;
        out[10] = (far + near) * nf;
        out[11] = -1;
        out[12] = 0;
        out[13] = 0;
        out[14] = (far * near * 2) * nf;
        out[15] = 0;
        return out;
    }
    mat4.frustum = frustum;
    function perspective(out, fovy, aspect, near, far) {
        let f = 1.0 / Math.tan(fovy / 2), nf;
        out[0] = f / aspect;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = f;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[11] = -1;
        out[12] = 0;
        out[13] = 0;
        out[15] = 0;
        if (far != null && far !== Infinity) {
            nf = 1 / (near - far);
            out[10] = (far + near) * nf;
            out[14] = (2 * far * near) * nf;
        }
        else {
            out[10] = -1;
            out[14] = -2 * near;
        }
        return out;
    }
    mat4.perspective = perspective;
    function perspectiveFromFieldOfView(out, fov, near, far) {
        let upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
        let downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
        let leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
        let rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
        let xScale = 2.0 / (leftTan + rightTan);
        let yScale = 2.0 / (upTan + downTan);
        out[0] = xScale;
        out[1] = 0.0;
        out[2] = 0.0;
        out[3] = 0.0;
        out[4] = 0.0;
        out[5] = yScale;
        out[6] = 0.0;
        out[7] = 0.0;
        out[8] = -((leftTan - rightTan) * xScale * 0.5);
        out[9] = ((upTan - downTan) * yScale * 0.5);
        out[10] = far / (near - far);
        out[11] = -1.0;
        out[12] = 0.0;
        out[13] = 0.0;
        out[14] = (far * near) / (near - far);
        out[15] = 0.0;
        return out;
    }
    mat4.perspectiveFromFieldOfView = perspectiveFromFieldOfView;
    function ortho(out, left, right, bottom, top, near, far) {
        let lr = 1 / (left - right);
        let bt = 1 / (bottom - top);
        let nf = 1 / (near - far);
        out[0] = -2 * lr;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = -2 * bt;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 2 * nf;
        out[11] = 0;
        out[12] = (left + right) * lr;
        out[13] = (top + bottom) * bt;
        out[14] = (far + near) * nf;
        out[15] = 1;
        return out;
    }
    mat4.ortho = ortho;
    function lookAt(out, eye, center, up) {
        let x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
        let eyex = eye[0];
        let eyey = eye[1];
        let eyez = eye[2];
        let upx = up[0];
        let upy = up[1];
        let upz = up[2];
        let centerx = center[0];
        let centery = center[1];
        let centerz = center[2];
        if (Math.abs(eyex - centerx) < EPSILON &&
            Math.abs(eyey - centery) < EPSILON &&
            Math.abs(eyez - centerz) < EPSILON) {
            return identity(out);
        }
        z0 = eyex - centerx;
        z1 = eyey - centery;
        z2 = eyez - centerz;
        len = 1 / Math.hypot(z0, z1, z2);
        z0 *= len;
        z1 *= len;
        z2 *= len;
        x0 = upy * z2 - upz * z1;
        x1 = upz * z0 - upx * z2;
        x2 = upx * z1 - upy * z0;
        len = Math.hypot(x0, x1, x2);
        if (!len) {
            x0 = 0;
            x1 = 0;
            x2 = 0;
        }
        else {
            len = 1 / len;
            x0 *= len;
            x1 *= len;
            x2 *= len;
        }
        y0 = z1 * x2 - z2 * x1;
        y1 = z2 * x0 - z0 * x2;
        y2 = z0 * x1 - z1 * x0;
        len = Math.hypot(y0, y1, y2);
        if (!len) {
            y0 = 0;
            y1 = 0;
            y2 = 0;
        }
        else {
            len = 1 / len;
            y0 *= len;
            y1 *= len;
            y2 *= len;
        }
        out[0] = x0;
        out[1] = y0;
        out[2] = z0;
        out[3] = 0;
        out[4] = x1;
        out[5] = y1;
        out[6] = z1;
        out[7] = 0;
        out[8] = x2;
        out[9] = y2;
        out[10] = z2;
        out[11] = 0;
        out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
        out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
        out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
        out[15] = 1;
        return out;
    }
    mat4.lookAt = lookAt;
    function targetTo(out, eye, target, up) {
        let eyex = eye[0], eyey = eye[1], eyez = eye[2], upx = up[0], upy = up[1], upz = up[2];
        let z0 = eyex - target[0], z1 = eyey - target[1], z2 = eyez - target[2];
        let len = z0 * z0 + z1 * z1 + z2 * z2;
        if (len > 0) {
            len = 1 / Math.sqrt(len);
            z0 *= len;
            z1 *= len;
            z2 *= len;
        }
        let x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
        len = x0 * x0 + x1 * x1 + x2 * x2;
        if (len > 0) {
            len = 1 / Math.sqrt(len);
            x0 *= len;
            x1 *= len;
            x2 *= len;
        }
        out[0] = x0;
        out[1] = x1;
        out[2] = x2;
        out[3] = 0;
        out[4] = z1 * x2 - z2 * x1;
        out[5] = z2 * x0 - z0 * x2;
        out[6] = z0 * x1 - z1 * x0;
        out[7] = 0;
        out[8] = z0;
        out[9] = z1;
        out[10] = z2;
        out[11] = 0;
        out[12] = eyex;
        out[13] = eyey;
        out[14] = eyez;
        out[15] = 1;
        return out;
    }
    mat4.targetTo = targetTo;
    ;
    function str(a) {
        return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' +
            a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' +
            a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' +
            a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
    }
    mat4.str = str;
    function frob(a) {
        return (Math.hypot(a[0], a[1], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]));
    }
    mat4.frob = frob;
    function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        out[3] = a[3] + b[3];
        out[4] = a[4] + b[4];
        out[5] = a[5] + b[5];
        out[6] = a[6] + b[6];
        out[7] = a[7] + b[7];
        out[8] = a[8] + b[8];
        out[9] = a[9] + b[9];
        out[10] = a[10] + b[10];
        out[11] = a[11] + b[11];
        out[12] = a[12] + b[12];
        out[13] = a[13] + b[13];
        out[14] = a[14] + b[14];
        out[15] = a[15] + b[15];
        return out;
    }
    mat4.add = add;
    function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        out[3] = a[3] - b[3];
        out[4] = a[4] - b[4];
        out[5] = a[5] - b[5];
        out[6] = a[6] - b[6];
        out[7] = a[7] - b[7];
        out[8] = a[8] - b[8];
        out[9] = a[9] - b[9];
        out[10] = a[10] - b[10];
        out[11] = a[11] - b[11];
        out[12] = a[12] - b[12];
        out[13] = a[13] - b[13];
        out[14] = a[14] - b[14];
        out[15] = a[15] - b[15];
        return out;
    }
    mat4.subtract = subtract;
    function multiplyScalar(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        out[3] = a[3] * b;
        out[4] = a[4] * b;
        out[5] = a[5] * b;
        out[6] = a[6] * b;
        out[7] = a[7] * b;
        out[8] = a[8] * b;
        out[9] = a[9] * b;
        out[10] = a[10] * b;
        out[11] = a[11] * b;
        out[12] = a[12] * b;
        out[13] = a[13] * b;
        out[14] = a[14] * b;
        out[15] = a[15] * b;
        return out;
    }
    mat4.multiplyScalar = multiplyScalar;
    function multiplyScalarAndAdd(out, a, b, scale) {
        out[0] = a[0] + (b[0] * scale);
        out[1] = a[1] + (b[1] * scale);
        out[2] = a[2] + (b[2] * scale);
        out[3] = a[3] + (b[3] * scale);
        out[4] = a[4] + (b[4] * scale);
        out[5] = a[5] + (b[5] * scale);
        out[6] = a[6] + (b[6] * scale);
        out[7] = a[7] + (b[7] * scale);
        out[8] = a[8] + (b[8] * scale);
        out[9] = a[9] + (b[9] * scale);
        out[10] = a[10] + (b[10] * scale);
        out[11] = a[11] + (b[11] * scale);
        out[12] = a[12] + (b[12] * scale);
        out[13] = a[13] + (b[13] * scale);
        out[14] = a[14] + (b[14] * scale);
        out[15] = a[15] + (b[15] * scale);
        return out;
    }
    mat4.multiplyScalarAndAdd = multiplyScalarAndAdd;
    function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] &&
            a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] &&
            a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] &&
            a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
    }
    mat4.exactEquals = exactEquals;
    function equals(a, b) {
        let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
        let a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7];
        let a8 = a[8], a9 = a[9], a10 = a[10], a11 = a[11];
        let a12 = a[12], a13 = a[13], a14 = a[14], a15 = a[15];
        let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
        let b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7];
        let b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11];
        let b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
        return (Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
            Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
            Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
            Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
            Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
            Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
            Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
            Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
            Math.abs(a8 - b8) <= EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) &&
            Math.abs(a9 - b9) <= EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) &&
            Math.abs(a10 - b10) <= EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) &&
            Math.abs(a11 - b11) <= EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) &&
            Math.abs(a12 - b12) <= EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) &&
            Math.abs(a13 - b13) <= EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) &&
            Math.abs(a14 - b14) <= EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) &&
            Math.abs(a15 - b15) <= EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15)));
    }
    mat4.equals = equals;
    mat4.mul = multiply;
    mat4.sub = subtract;
})(mat4 || (mat4 = {}));
function quat() {
    const out = new Float32Array(4);
    out[3] = 1;
    return out;
}
(function (quat) {
    function create() {
        let out = new Float32Array(4);
        out[3] = 1;
        return out;
    }
    quat.create = create;
    function identity(out) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        return out;
    }
    quat.identity = identity;
    function setAxisAngle(out, axis, rad) {
        rad = rad * 0.5;
        let s = Math.sin(rad);
        out[0] = s * axis[0];
        out[1] = s * axis[1];
        out[2] = s * axis[2];
        out[3] = Math.cos(rad);
        return out;
    }
    quat.setAxisAngle = setAxisAngle;
    function getAxisAngle(out_axis, q) {
        let rad = Math.acos(q[3]) * 2.0;
        let s = Math.sin(rad / 2.0);
        if (s > EPSILON) {
            out_axis[0] = q[0] / s;
            out_axis[1] = q[1] / s;
            out_axis[2] = q[2] / s;
        }
        else {
            out_axis[0] = 1;
            out_axis[1] = 0;
            out_axis[2] = 0;
        }
        return rad;
    }
    quat.getAxisAngle = getAxisAngle;
    function multiply(out, a, b) {
        let ax = a[0], ay = a[1], az = a[2], aw = a[3];
        let bx = b[0], by = b[1], bz = b[2], bw = b[3];
        out[0] = ax * bw + aw * bx + ay * bz - az * by;
        out[1] = ay * bw + aw * by + az * bx - ax * bz;
        out[2] = az * bw + aw * bz + ax * by - ay * bx;
        out[3] = aw * bw - ax * bx - ay * by - az * bz;
        return out;
    }
    quat.multiply = multiply;
    function rotateX(out, a, rad) {
        rad *= 0.5;
        let ax = a[0], ay = a[1], az = a[2], aw = a[3];
        let bx = Math.sin(rad), bw = Math.cos(rad);
        out[0] = ax * bw + aw * bx;
        out[1] = ay * bw + az * bx;
        out[2] = az * bw - ay * bx;
        out[3] = aw * bw - ax * bx;
        return out;
    }
    quat.rotateX = rotateX;
    function rotateY(out, a, rad) {
        rad *= 0.5;
        let ax = a[0], ay = a[1], az = a[2], aw = a[3];
        let by = Math.sin(rad), bw = Math.cos(rad);
        out[0] = ax * bw - az * by;
        out[1] = ay * bw + aw * by;
        out[2] = az * bw + ax * by;
        out[3] = aw * bw - ay * by;
        return out;
    }
    quat.rotateY = rotateY;
    function rotateZ(out, a, rad) {
        rad *= 0.5;
        let ax = a[0], ay = a[1], az = a[2], aw = a[3];
        let bz = Math.sin(rad), bw = Math.cos(rad);
        out[0] = ax * bw + ay * bz;
        out[1] = ay * bw - ax * bz;
        out[2] = az * bw + aw * bz;
        out[3] = aw * bw - az * bz;
        return out;
    }
    quat.rotateZ = rotateZ;
    function calculateW(out, a) {
        let x = a[0], y = a[1], z = a[2];
        out[0] = x;
        out[1] = y;
        out[2] = z;
        out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
        return out;
    }
    quat.calculateW = calculateW;
    function slerp(out, a, b, t) {
        let ax = a[0], ay = a[1], az = a[2], aw = a[3];
        let bx = b[0], by = b[1], bz = b[2], bw = b[3];
        let omega, cosom, sinom, scale0, scale1;
        cosom = ax * bx + ay * by + az * bz + aw * bw;
        if (cosom < 0.0) {
            cosom = -cosom;
            bx = -bx;
            by = -by;
            bz = -bz;
            bw = -bw;
        }
        if ((1.0 - cosom) > EPSILON) {
            omega = Math.acos(cosom);
            sinom = Math.sin(omega);
            scale0 = Math.sin((1.0 - t) * omega) / sinom;
            scale1 = Math.sin(t * omega) / sinom;
        }
        else {
            scale0 = 1.0 - t;
            scale1 = t;
        }
        out[0] = scale0 * ax + scale1 * bx;
        out[1] = scale0 * ay + scale1 * by;
        out[2] = scale0 * az + scale1 * bz;
        out[3] = scale0 * aw + scale1 * bw;
        return out;
    }
    quat.slerp = slerp;
    function random(out) {
        let u1 = Math.random();
        let u2 = Math.random();
        let u3 = Math.random();
        let sqrt1MinusU1 = Math.sqrt(1 - u1);
        let sqrtU1 = Math.sqrt(u1);
        out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
        out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
        out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
        out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
        return out;
    }
    quat.random = random;
    function invert(out, a) {
        let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
        let dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
        let invDot = dot ? 1.0 / dot : 0;
        out[0] = -a0 * invDot;
        out[1] = -a1 * invDot;
        out[2] = -a2 * invDot;
        out[3] = a3 * invDot;
        return out;
    }
    quat.invert = invert;
    function conjugate(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        out[2] = -a[2];
        out[3] = a[3];
        return out;
    }
    quat.conjugate = conjugate;
    function fromMat3(out, m) {
        let fTrace = m[0] + m[4] + m[8];
        let fRoot;
        if (fTrace > 0.0) {
            fRoot = Math.sqrt(fTrace + 1.0);
            out[3] = 0.5 * fRoot;
            fRoot = 0.5 / fRoot;
            out[0] = (m[5] - m[7]) * fRoot;
            out[1] = (m[6] - m[2]) * fRoot;
            out[2] = (m[1] - m[3]) * fRoot;
        }
        else {
            let i = 0;
            if (m[4] > m[0])
                i = 1;
            if (m[8] > m[i * 3 + i])
                i = 2;
            let j = (i + 1) % 3;
            let k = (i + 2) % 3;
            fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
            out[i] = 0.5 * fRoot;
            fRoot = 0.5 / fRoot;
            out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
            out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
            out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
        }
        return out;
    }
    quat.fromMat3 = fromMat3;
    function fromEuler(out, x, y, z) {
        let halfToRad = 0.5 * Math.PI / 180.0;
        x *= halfToRad;
        y *= halfToRad;
        z *= halfToRad;
        let sx = Math.sin(x);
        let cx = Math.cos(x);
        let sy = Math.sin(y);
        let cy = Math.cos(y);
        let sz = Math.sin(z);
        let cz = Math.cos(z);
        out[0] = sx * cy * cz - cx * sy * sz;
        out[1] = cx * sy * cz + sx * cy * sz;
        out[2] = cx * cy * sz - sx * sy * cz;
        out[3] = cx * cy * cz + sx * sy * sz;
        return out;
    }
    quat.fromEuler = fromEuler;
    function str(a) {
        return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
    }
    quat.str = str;
    quat.clone = vec4.clone;
    quat.fromValues = vec4.fromValues;
    quat.copy = vec4.copy;
    quat.set = vec4.set;
    quat.add = vec4.add;
    quat.mul = multiply;
    quat.scale = vec4.scale;
    quat.dot = vec4.dot;
    quat.lerp = vec4.lerp;
    quat._length = vec4._length;
    quat.len = quat._length;
    quat.squaredLength = vec4.squaredLength;
    quat.sqrLen = quat.squaredLength;
    quat.normalize = vec4.normalize;
    quat.exactEquals = vec4.exactEquals;
    quat.equals = vec4.equals;
    quat.rotationTo = (function () {
        let tmpvec3 = vec3.create();
        let xUnitVec3 = vec3.fromValues(1, 0, 0);
        let yUnitVec3 = vec3.fromValues(0, 1, 0);
        return function (out, a, b) {
            let dot = vec3.dot(a, b);
            if (dot < -0.999999) {
                vec3.cross(tmpvec3, xUnitVec3, a);
                if (vec3.len(tmpvec3) < 0.000001)
                    vec3.cross(tmpvec3, yUnitVec3, a);
                vec3.normalize(tmpvec3, tmpvec3);
                setAxisAngle(out, tmpvec3, Math.PI);
                return out;
            }
            else if (dot > 0.999999) {
                out[0] = 0;
                out[1] = 0;
                out[2] = 0;
                out[3] = 1;
                return out;
            }
            else {
                vec3.cross(tmpvec3, a, b);
                out[0] = tmpvec3[0];
                out[1] = tmpvec3[1];
                out[2] = tmpvec3[2];
                out[3] = 1 + dot;
                return quat.normalize(out, out);
            }
        };
    })();
    quat.sqlerp = (function () {
        let temp1 = create();
        let temp2 = create();
        return function (out, a, b, c, d, t) {
            slerp(temp1, a, d, t);
            slerp(temp2, b, c, t);
            slerp(out, temp1, temp2, 2 * t * (1 - t));
            return out;
        };
    }());
    quat.setAxes = (function () {
        let matr = mat3.create();
        return function (out, view, right, up) {
            matr[0] = right[0];
            matr[3] = right[1];
            matr[6] = right[2];
            matr[1] = up[0];
            matr[4] = up[1];
            matr[7] = up[2];
            matr[2] = -view[0];
            matr[5] = -view[1];
            matr[8] = -view[2];
            return quat.normalize(out, fromMat3(out, matr));
        };
    })();
})(quat || (quat = {}));
function quat2() {
    if (arguments.length == 8)
        return new Float32Array(arguments);
    const dq = new Float32Array(8);
    dq[3] = 1;
    return dq;
}
(function (quat2) {
    function create() {
        let dq = new Float32Array(8);
        dq[3] = 1;
        return dq;
    }
    quat2.create = create;
    function clone(a) {
        let dq = new Float32Array(8);
        dq[0] = a[0];
        dq[1] = a[1];
        dq[2] = a[2];
        dq[3] = a[3];
        dq[4] = a[4];
        dq[5] = a[5];
        dq[6] = a[6];
        dq[7] = a[7];
        return dq;
    }
    quat2.clone = clone;
    function fromValues(x1, y1, z1, w1, x2, y2, z2, w2) {
        let dq = new Float32Array(8);
        dq[0] = x1;
        dq[1] = y1;
        dq[2] = z1;
        dq[3] = w1;
        dq[4] = x2;
        dq[5] = y2;
        dq[6] = z2;
        dq[7] = w2;
        return dq;
    }
    quat2.fromValues = fromValues;
    function fromRotationTranslationValues(x1, y1, z1, w1, x2, y2, z2) {
        let dq = new Float32Array(8);
        dq[0] = x1;
        dq[1] = y1;
        dq[2] = z1;
        dq[3] = w1;
        let ax = x2 * 0.5, ay = y2 * 0.5, az = z2 * 0.5;
        dq[4] = ax * w1 + ay * z1 - az * y1;
        dq[5] = ay * w1 + az * x1 - ax * z1;
        dq[6] = az * w1 + ax * y1 - ay * x1;
        dq[7] = -ax * x1 - ay * y1 - az * z1;
        return dq;
    }
    quat2.fromRotationTranslationValues = fromRotationTranslationValues;
    function fromRotationTranslation(out, q, t) {
        let ax = t[0] * 0.5, ay = t[1] * 0.5, az = t[2] * 0.5, bx = q[0], by = q[1], bz = q[2], bw = q[3];
        out[0] = bx;
        out[1] = by;
        out[2] = bz;
        out[3] = bw;
        out[4] = ax * bw + ay * bz - az * by;
        out[5] = ay * bw + az * bx - ax * bz;
        out[6] = az * bw + ax * by - ay * bx;
        out[7] = -ax * bx - ay * by - az * bz;
        return out;
    }
    quat2.fromRotationTranslation = fromRotationTranslation;
    function fromTranslation(out, t) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        out[4] = t[0] * 0.5;
        out[5] = t[1] * 0.5;
        out[6] = t[2] * 0.5;
        out[7] = 0;
        return out;
    }
    quat2.fromTranslation = fromTranslation;
    function fromRotation(out, q) {
        out[0] = q[0];
        out[1] = q[1];
        out[2] = q[2];
        out[3] = q[3];
        out[4] = 0;
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
        return out;
    }
    quat2.fromRotation = fromRotation;
    function fromMat4(out, a) {
        let outer = quat.create();
        mat4.getRotation(outer, a);
        let t = new Float32Array(3);
        mat4.getTranslation(t, a);
        fromRotationTranslation(out, outer, t);
        return out;
    }
    quat2.fromMat4 = fromMat4;
    function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        return out;
    }
    quat2.copy = copy;
    function identity(out) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        out[4] = 0;
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
        return out;
    }
    quat2.identity = identity;
    function set(out, x1, y1, z1, w1, x2, y2, z2, w2) {
        out[0] = x1;
        out[1] = y1;
        out[2] = z1;
        out[3] = w1;
        out[4] = x2;
        out[5] = y2;
        out[6] = z2;
        out[7] = w2;
        return out;
    }
    quat2.set = set;
    quat2.getReal = quat.copy;
    function getDual(out, a) {
        out[0] = a[4];
        out[1] = a[5];
        out[2] = a[6];
        out[3] = a[7];
        return out;
    }
    quat2.getDual = getDual;
    quat2.setReal = quat.copy;
    function setDual(out, q) {
        out[4] = q[0];
        out[5] = q[1];
        out[6] = q[2];
        out[7] = q[3];
        return out;
    }
    quat2.setDual = setDual;
    function getTranslation(out, a) {
        let ax = a[4], ay = a[5], az = a[6], aw = a[7], bx = -a[0], by = -a[1], bz = -a[2], bw = a[3];
        out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
        out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
        out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
        return out;
    }
    quat2.getTranslation = getTranslation;
    function translate(out, a, v) {
        let ax1 = a[0], ay1 = a[1], az1 = a[2], aw1 = a[3], bx1 = v[0] * 0.5, by1 = v[1] * 0.5, bz1 = v[2] * 0.5, ax2 = a[4], ay2 = a[5], az2 = a[6], aw2 = a[7];
        out[0] = ax1;
        out[1] = ay1;
        out[2] = az1;
        out[3] = aw1;
        out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
        out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
        out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
        out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
        return out;
    }
    quat2.translate = translate;
    function rotateX(out, a, rad) {
        let bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7], ax1 = ax * bw + aw * bx + ay * bz - az * by, ay1 = ay * bw + aw * by + az * bx - ax * bz, az1 = az * bw + aw * bz + ax * by - ay * bx, aw1 = aw * bw - ax * bx - ay * by - az * bz;
        quat.rotateX(out, a, rad);
        bx = out[0];
        by = out[1];
        bz = out[2];
        bw = out[3];
        out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
        out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
        out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
        out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
        return out;
    }
    quat2.rotateX = rotateX;
    function rotateY(out, a, rad) {
        let bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7], ax1 = ax * bw + aw * bx + ay * bz - az * by, ay1 = ay * bw + aw * by + az * bx - ax * bz, az1 = az * bw + aw * bz + ax * by - ay * bx, aw1 = aw * bw - ax * bx - ay * by - az * bz;
        quat.rotateY(out, a, rad);
        bx = out[0];
        by = out[1];
        bz = out[2];
        bw = out[3];
        out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
        out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
        out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
        out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
        return out;
    }
    quat2.rotateY = rotateY;
    function rotateZ(out, a, rad) {
        let bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7], ax1 = ax * bw + aw * bx + ay * bz - az * by, ay1 = ay * bw + aw * by + az * bx - ax * bz, az1 = az * bw + aw * bz + ax * by - ay * bx, aw1 = aw * bw - ax * bx - ay * by - az * bz;
        quat.rotateZ(out, a, rad);
        bx = out[0];
        by = out[1];
        bz = out[2];
        bw = out[3];
        out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
        out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
        out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
        out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
        return out;
    }
    quat2.rotateZ = rotateZ;
    function rotateByQuatAppend(out, a, q) {
        let qx = q[0], qy = q[1], qz = q[2], qw = q[3], ax = a[0], ay = a[1], az = a[2], aw = a[3];
        out[0] = ax * qw + aw * qx + ay * qz - az * qy;
        out[1] = ay * qw + aw * qy + az * qx - ax * qz;
        out[2] = az * qw + aw * qz + ax * qy - ay * qx;
        out[3] = aw * qw - ax * qx - ay * qy - az * qz;
        ax = a[4];
        ay = a[5];
        az = a[6];
        aw = a[7];
        out[4] = ax * qw + aw * qx + ay * qz - az * qy;
        out[5] = ay * qw + aw * qy + az * qx - ax * qz;
        out[6] = az * qw + aw * qz + ax * qy - ay * qx;
        out[7] = aw * qw - ax * qx - ay * qy - az * qz;
        return out;
    }
    quat2.rotateByQuatAppend = rotateByQuatAppend;
    function rotateByQuatPrepend(out, q, a) {
        let qx = q[0], qy = q[1], qz = q[2], qw = q[3], bx = a[0], by = a[1], bz = a[2], bw = a[3];
        out[0] = qx * bw + qw * bx + qy * bz - qz * by;
        out[1] = qy * bw + qw * by + qz * bx - qx * bz;
        out[2] = qz * bw + qw * bz + qx * by - qy * bx;
        out[3] = qw * bw - qx * bx - qy * by - qz * bz;
        bx = a[4];
        by = a[5];
        bz = a[6];
        bw = a[7];
        out[4] = qx * bw + qw * bx + qy * bz - qz * by;
        out[5] = qy * bw + qw * by + qz * bx - qx * bz;
        out[6] = qz * bw + qw * bz + qx * by - qy * bx;
        out[7] = qw * bw - qx * bx - qy * by - qz * bz;
        return out;
    }
    quat2.rotateByQuatPrepend = rotateByQuatPrepend;
    function rotateAroundAxis(out, a, axis, rad) {
        if (Math.abs(rad) < EPSILON) {
            return copy(out, a);
        }
        let axisLength = Math.hypot(axis[0], axis[1], axis[2]);
        rad = rad * 0.5;
        let s = Math.sin(rad);
        let bx = s * axis[0] / axisLength;
        let by = s * axis[1] / axisLength;
        let bz = s * axis[2] / axisLength;
        let bw = Math.cos(rad);
        let ax1 = a[0], ay1 = a[1], az1 = a[2], aw1 = a[3];
        out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
        out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
        out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
        out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
        let ax = a[4], ay = a[5], az = a[6], aw = a[7];
        out[4] = ax * bw + aw * bx + ay * bz - az * by;
        out[5] = ay * bw + aw * by + az * bx - ax * bz;
        out[6] = az * bw + aw * bz + ax * by - ay * bx;
        out[7] = aw * bw - ax * bx - ay * by - az * bz;
        return out;
    }
    quat2.rotateAroundAxis = rotateAroundAxis;
    function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        out[3] = a[3] + b[3];
        out[4] = a[4] + b[4];
        out[5] = a[5] + b[5];
        out[6] = a[6] + b[6];
        out[7] = a[7] + b[7];
        return out;
    }
    quat2.add = add;
    function multiply(out, a, b) {
        let ax0 = a[0], ay0 = a[1], az0 = a[2], aw0 = a[3], bx1 = b[4], by1 = b[5], bz1 = b[6], bw1 = b[7], ax1 = a[4], ay1 = a[5], az1 = a[6], aw1 = a[7], bx0 = b[0], by0 = b[1], bz0 = b[2], bw0 = b[3];
        out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
        out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
        out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
        out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
        out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0;
        out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0;
        out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0;
        out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0;
        return out;
    }
    quat2.multiply = multiply;
    quat2.mul = multiply;
    function scale(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        out[3] = a[3] * b;
        out[4] = a[4] * b;
        out[5] = a[5] * b;
        out[6] = a[6] * b;
        out[7] = a[7] * b;
        return out;
    }
    quat2.scale = scale;
    quat2.dot = quat.dot;
    function lerp(out, a, b, t) {
        let mt = 1 - t;
        if (quat2.dot(a, b) < 0)
            t = -t;
        out[0] = a[0] * mt + b[0] * t;
        out[1] = a[1] * mt + b[1] * t;
        out[2] = a[2] * mt + b[2] * t;
        out[3] = a[3] * mt + b[3] * t;
        out[4] = a[4] * mt + b[4] * t;
        out[5] = a[5] * mt + b[5] * t;
        out[6] = a[6] * mt + b[6] * t;
        out[7] = a[7] * mt + b[7] * t;
        return out;
    }
    quat2.lerp = lerp;
    function invert(out, a) {
        let sqlen = quat2.squaredLength(a);
        out[0] = -a[0] / sqlen;
        out[1] = -a[1] / sqlen;
        out[2] = -a[2] / sqlen;
        out[3] = a[3] / sqlen;
        out[4] = -a[4] / sqlen;
        out[5] = -a[5] / sqlen;
        out[6] = -a[6] / sqlen;
        out[7] = a[7] / sqlen;
        return out;
    }
    quat2.invert = invert;
    function conjugate(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        out[2] = -a[2];
        out[3] = a[3];
        out[4] = -a[4];
        out[5] = -a[5];
        out[6] = -a[6];
        out[7] = a[7];
        return out;
    }
    quat2.conjugate = conjugate;
    quat2._length = quat._length;
    quat2.len = quat2._length;
    quat2.squaredLength = quat.squaredLength;
    quat2.sqrLen = quat2.squaredLength;
    function normalize(out, a) {
        let magnitude = quat2.squaredLength(a);
        if (magnitude > 0) {
            magnitude = Math.sqrt(magnitude);
            let a0 = a[0] / magnitude;
            let a1 = a[1] / magnitude;
            let a2 = a[2] / magnitude;
            let a3 = a[3] / magnitude;
            let b0 = a[4];
            let b1 = a[5];
            let b2 = a[6];
            let b3 = a[7];
            let a_dot_b = (a0 * b0) + (a1 * b1) + (a2 * b2) + (a3 * b3);
            out[0] = a0;
            out[1] = a1;
            out[2] = a2;
            out[3] = a3;
            out[4] = (b0 - (a0 * a_dot_b)) / magnitude;
            out[5] = (b1 - (a1 * a_dot_b)) / magnitude;
            out[6] = (b2 - (a2 * a_dot_b)) / magnitude;
            out[7] = (b3 - (a3 * a_dot_b)) / magnitude;
        }
        return out;
    }
    quat2.normalize = normalize;
    function str(a) {
        return 'quat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' +
            a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ')';
    }
    quat2.str = str;
    function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] &&
            a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
    }
    quat2.exactEquals = exactEquals;
    function equals(a, b) {
        let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7];
        let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7];
        return (Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
            Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
            Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
            Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
            Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
            Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
            Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
            Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)));
    }
    quat2.equals = equals;
})(quat2 || (quat2 = {}));
{
    const remap = function (vin, vout, t) {
        const num = (t - vin[0]) / (vin[1] - vin[0]);
        return vout[0] + num * (vout[1] - vout[0]);
    };
    const lerp = function (vin, vout, v) {
        switch (vin.length) {
            case 2: return vec2.lerp(vec2(), vin, vout, v);
            case 3: return vec3.lerp(vec3(), vin, vout, v);
            case 4: return vec4.lerp(vec4(), vin, vout, v);
            default: throw "Invalid arguments";
        }
    };
    Internal.definePublicMethods({
        lerp,
        remap
    });
}
;
{
    const length = function (a) {
        switch (a.length) {
            case 2: return vec2._length(a);
            case 3: return vec3._length(a);
            case 4: return vec4._length(a);
            default: throw "Invalid arguments";
        }
    };
    const distance = function (a, b) {
        switch (a.length) {
            case 2: return vec2.distance(a, b);
            case 3: return vec3.distance(a, b);
            case 4: return vec4.distance(a, b);
            default: throw "Invalid arguments";
        }
    };
    const dot = function (a, b) {
        switch (a.length) {
            case 2: return vec2.dot(a, b);
            case 3: return vec3.dot(a, b);
            case 4: return vec4.dot(a, b);
            default: throw "Invalid arguments";
        }
    };
    const cross = function (a, b) {
        return vec3.cross(vec3(), a, b);
    };
    const normalize = function (a) {
        switch (a.length) {
            case 2: return vec2.normalize(a, a);
            case 3: return vec3.normalize(a, a);
            case 4: return vec4.normalize(a, a);
            default: throw "Invalid arguments";
        }
    };
    Internal.definePublicMethods({
        len: length,
        distance,
        dot,
        cross,
        normalize
    });
}
;
{
    const template1 = function (fn) {
        return function (a) {
            switch (a.length) {
                case 1:
                    return fn(a);
                case 2:
                    const v2 = Object.create(a);
                    v2[0] = fn(a[0]);
                    v2[1] = fn(a[1]);
                    return v2;
                case 3:
                    const v3 = Object.create(a);
                    v3[0] = fn(a[0]);
                    v3[1] = fn(a[1]);
                    v3[2] = fn(a[2]);
                    return v3;
                case 4:
                    const v4 = Object.create(a);
                    v4[0] = fn(a[0]);
                    v4[1] = fn(a[1]);
                    v4[2] = fn(a[2]);
                    v4[3] = fn(a[4]);
                    return v4;
            }
            throw "Invalid arguments";
        };
    };
    const template1OutB = function (fn) {
        return function (a) {
            switch (a.length) {
                case 1:
                    return fn(a);
                case 2:
                    const v2 = Object.create(a);
                    v2[0] = fn(a[0]);
                    v2[1] = fn(a[1]);
                    return v2;
                case 3:
                    const v3 = Object.create(a);
                    v3[0] = fn(a[0]);
                    v3[1] = fn(a[1]);
                    v3[2] = fn(a[2]);
                    return v3;
                case 4:
                    const v4 = Object.create(a);
                    v4[0] = fn(a[0]);
                    v4[1] = fn(a[1]);
                    v4[2] = fn(a[2]);
                    v4[3] = fn(a[4]);
                    return v4;
            }
            throw "Invalid argument";
        };
    };
    const template2 = function (fn) {
        return function (a, b) {
            switch (a.length) {
                case 1:
                    return fn(a, b);
                case 2:
                    const v2 = Object.create(a);
                    v2[0] = fn(a[0], b[0]);
                    v2[1] = fn(a[1], b[1]);
                    return v2;
                case 3:
                    const v3 = Object.create(a);
                    v3[0] = fn(a[0], b[0]);
                    v3[1] = fn(a[1], b[1]);
                    v3[2] = fn(a[2], b[2]);
                    return v3;
                case 4:
                    const v4 = Object.create(a);
                    v4[0] = fn(a[0], b[0]);
                    v4[1] = fn(a[1], b[1]);
                    v4[2] = fn(a[2], b[2]);
                    v4[3] = fn(a[4], b[4]);
                    return v4;
            }
            throw "Invalid arguments";
        };
    };
    const template3 = function (fn) {
        return function (a, b, c) {
            switch (a.length) {
                case 1:
                    return fn(a, b, c);
                case 2:
                    const v2 = Object.create(a);
                    v2[0] = fn(a[0], b[0], c[0]);
                    v2[1] = fn(a[1], b[1], c[1]);
                    return v2;
                case 3:
                    const v3 = Object.create(a);
                    v3[0] = fn(a[0], b[0], c[0]);
                    v3[1] = fn(a[1], b[1], c[1]);
                    v3[2] = fn(a[2], b[2], c[2]);
                    return v3;
                case 4:
                    const v4 = Object.create(a);
                    v4[0] = fn(a[0], b[0], c[0]);
                    v4[1] = fn(a[1], b[1], c[1]);
                    v4[2] = fn(a[2], b[2], c[2]);
                    v4[3] = fn(a[4], b[4], c[4]);
                    return v4;
            }
            throw "Invalid arguments";
        };
    };
    Internal.definePublicMethods({
        sin: template1(Math.cos),
        cos: template1(Math.cos),
        tan: template1(Math.tan),
        asin: template1(Math.asin),
        acos: template1(Math.acos),
        atan: template1(Math.atan),
        sinh: template1(Math.sinh),
        cosh: template1(Math.cosh),
        tanh: template1(Math.tanh),
        asinh: template1(Math.asinh),
        acosh: template1(Math.acosh),
        atanh: template1(Math.atanh)
    });
    Internal.definePublicMethods({
        pow: template2(Math.pow),
        exp: template1(Math.exp),
        log: template1(Math.log),
        exp2: template1((n) => Math.pow(2, n)),
        log2: template1(Math.log2),
        sqrt: template1(Math.sqrt)
    });
    Internal.definePublicMethods({
        abs: template1(Math.abs),
        sign: template1(Math.sign),
        floor: template1(Math.floor),
        trunc: template1(Math.trunc),
        round: template1(Math.round),
        ceil: template1(Math.ceil),
        fract: template1((n) => n - Math.floor(n)),
        mod: template2((a, b) => a % b),
        min: template2(Math.min),
        max: template2(Math.max),
        clamp: template3((a, b, c) => Math.min(Math.max(a, b), c)),
        step: template2((a, b) => b < a ? 0 : 1),
        isnan: template1OutB(isNaN),
        isinf: template1OutB((a) => a == Infinity)
    });
}
const GS_EVENT_TYPE = "G3_EVENT_TYPE";
const G3_INIT_EVENT = 1;
const G3_RESIZE_EVENT = 2;
const G3_POINTER_EVENT = 3;
const G3_POINTER_MOVE_EVENT = 4;
const G3_BUTTON_DOWN_EVENT = 5;
const G3_BUTTON_UP_EVENT = 6;
const G3_WHEEL_EVENT = 7;
const G3_KEYBOARD_EVENT = 8;
const G3_KEY_DOWN_EVENT = 9;
const G3_KEY_UP_EVENT = 10;
const G3_NEED_FULL_SCREEN = 1;
const G3_NEED_SQAURE_VIEW = 2;
const ALL_CALLBACKS = '*';
;
{
    const m_cbs = new Map();
    const on = function (event, fn) {
        if (m_cbs.has(event))
            m_cbs.get(event).add(fn);
        else
            m_cbs.set(event, new Set().add(fn));
    };
    const off = function (event, fn) {
        if (event === ALL_CALLBACKS && !fn) {
            m_cbs.clear();
            return;
        }
        if (!fn)
            return;
        const fns = m_cbs.get(event);
        if (fns) {
            if (fns.size === 1)
                m_cbs.delete(event);
            else
                fns.delete(fn);
        }
    };
    const once = function (event, fn) {
        let _on = (...args) => {
            off(event, _on);
            fn(...args);
        };
        return on(event, _on);
    };
    const dispatch = function (event, ...args) {
        if (event !== ALL_CALLBACKS) {
            const fns = m_cbs.get(event);
            if (fns)
                for (const cb of fns)
                    cb(...args);
        }
        const fns = m_cbs.get(ALL_CALLBACKS);
        if (fns)
            for (const cb of fns)
                cb(...args);
    };
    Internal.defineInternalMethods({
        on,
        once,
        off,
        dispatch
    });
}
const DEPTH_BUFFER_BIT = 0x00000100;
const STENCIL_BUFFER_BIT = 0x00000400;
const COLOR_BUFFER_BIT = 0x00004000;
const POINTS = 0x0000;
const LINES = 0x0001;
const LINE_LOOP = 0x0002;
const LINE_STRIP = 0x0003;
const TRIANGLES = 0x0004;
const TRIANGLE_STRIP = 0x0005;
const TRIANGLE_FAN = 0x0006;
const ZERO = 0;
const ONE = 1;
const SRC_COLOR = 0x0300;
const ONE_MINUS_SRC_COLOR = 0x0301;
const SRC_ALPHA = 0x0302;
const ONE_MINUS_SRC_ALPHA = 0x0303;
const DST_ALPHA = 0x0304;
const ONE_MINUS_DST_ALPHA = 0x0305;
const DST_COLOR = 0x0306;
const ONE_MINUS_DST_COLOR = 0x0307;
const SRC_ALPHA_SATURATE = 0x0308;
const FUNC_ADD = 0x8006;
const BLEND_EQUATION = 0x8009;
const BLEND_EQUATION_RGB = 0x8009;
const BLEND_EQUATION_ALPHA = 0x883D;
const FUNC_SUBTRACT = 0x800A;
const FUNC_REVERSE_SUBTRACT = 0x800B;
const BLEND_DST_RGB = 0x80C8;
const BLEND_SRC_RGB = 0x80C9;
const BLEND_DST_ALPHA = 0x80CA;
const BLEND_SRC_ALPHA = 0x80CB;
const CONSTANT_COLOR = 0x8001;
const ONE_MINUS_CONSTANT_COLOR = 0x8002;
const CONSTANT_ALPHA = 0x8003;
const ONE_MINUS_CONSTANT_ALPHA = 0x8004;
const BLEND_COLOR = 0x8005;
const ARRAY_BUFFER = 0x8892;
const ELEMENT_ARRAY_BUFFER = 0x8893;
const ARRAY_BUFFER_BINDING = 0x8894;
const ELEMENT_ARRAY_BUFFER_BINDING = 0x8895;
const STREAM_DRAW = 0x88E0;
const STATIC_DRAW = 0x88E4;
const DYNAMIC_DRAW = 0x88E8;
const BUFFER_SIZE = 0x8764;
const BUFFER_USAGE = 0x8765;
const CURRENT_VERTEX_ATTRIB = 0x8626;
const FRONT = 0x0404;
const BACK = 0x0405;
const FRONT_AND_BACK = 0x0408;
const CULL_FACE = 0x0B44;
const BLEND = 0x0BE2;
const DITHER = 0x0BD0;
const STENCIL_TEST = 0x0B90;
const DEPTH_TEST = 0x0B71;
const SCISSOR_TEST = 0x0C11;
const POLYGON_OFFSET_FILL = 0x8037;
const SAMPLE_ALPHA_TO_COVERAGE = 0x809E;
const SAMPLE_COVERAGE = 0x80A0;
const NO_ERROR = 0;
const INVALID_ENUM = 0x0500;
const INVALID_VALUE = 0x0501;
const INVALID_OPERATION = 0x0502;
const OUT_OF_MEMORY = 0x0505;
const CW = 0x0900;
const CCW = 0x0901;
const LINE_WIDTH = 0x0B21;
const ALIASED_POINT_SIZE_RANGE = 0x846D;
const ALIASED_LINE_WIDTH_RANGE = 0x846E;
const CULL_FACE_MODE = 0x0B45;
const FRONT_FACE = 0x0B46;
const DEPTH_RANGE = 0x0B70;
const DEPTH_WRITEMASK = 0x0B72;
const DEPTH_CLEAR_VALUE = 0x0B73;
const DEPTH_FUNC = 0x0B74;
const STENCIL_CLEAR_VALUE = 0x0B91;
const STENCIL_FUNC = 0x0B92;
const STENCIL_FAIL = 0x0B94;
const STENCIL_PASS_DEPTH_FAIL = 0x0B95;
const STENCIL_PASS_DEPTH_PASS = 0x0B96;
const STENCIL_REF = 0x0B97;
const STENCIL_VALUE_MASK = 0x0B93;
const STENCIL_WRITEMASK = 0x0B98;
const STENCIL_BACK_FUNC = 0x8800;
const STENCIL_BACK_FAIL = 0x8801;
const STENCIL_BACK_PASS_DEPTH_FAIL = 0x8802;
const STENCIL_BACK_PASS_DEPTH_PASS = 0x8803;
const STENCIL_BACK_REF = 0x8CA3;
const STENCIL_BACK_VALUE_MASK = 0x8CA4;
const STENCIL_BACK_WRITEMASK = 0x8CA5;
const VIEWPORT = 0x0BA2;
const SCISSOR_BOX = 0x0C10;
const COLOR_CLEAR_VALUE = 0x0C22;
const COLOR_WRITEMASK = 0x0C23;
const UNPACK_ALIGNMENT = 0x0CF5;
const PACK_ALIGNMENT = 0x0D05;
const MAX_TEXTURE_SIZE = 0x0D33;
const MAX_VIEWPORT_DIMS = 0x0D3A;
const SUBPIXEL_BITS = 0x0D50;
const RED_BITS = 0x0D52;
const GREEN_BITS = 0x0D53;
const BLUE_BITS = 0x0D54;
const ALPHA_BITS = 0x0D55;
const DEPTH_BITS = 0x0D56;
const STENCIL_BITS = 0x0D57;
const POLYGON_OFFSET_UNITS = 0x2A00;
const POLYGON_OFFSET_FACTOR = 0x8038;
const TEXTURE_BINDING_2D = 0x8069;
const SAMPLE_BUFFERS = 0x80A8;
const SAMPLES = 0x80A9;
const SAMPLE_COVERAGE_VALUE = 0x80AA;
const SAMPLE_COVERAGE_INVERT = 0x80AB;
const COMPRESSED_TEXTURE_FORMATS = 0x86A3;
const DONT_CARE = 0x1100;
const FASTEST = 0x1101;
const NICEST = 0x1102;
const GENERATE_MIPMAP_HINT = 0x8192;
const BYTE = 0x1400;
const UNSIGNED_BYTE = 0x1401;
const SHORT = 0x1402;
const UNSIGNED_SHORT = 0x1403;
const INT = 0x1404;
const UNSIGNED_INT = 0x1405;
const FLOAT = 0x1406;
const DEPTH_COMPONENT = 0x1902;
const ALPHA = 0x1906;
const RGB = 0x1907;
const RGBA = 0x1908;
const LUMINANCE = 0x1909;
const LUMINANCE_ALPHA = 0x190A;
const UNSIGNED_SHORT_4_4_4_4 = 0x8033;
const UNSIGNED_SHORT_5_5_5_1 = 0x8034;
const UNSIGNED_SHORT_5_6_5 = 0x8363;
const FRAGMENT_SHADER = 0x8B30;
const VERTEX_SHADER = 0x8B31;
const MAX_VERTEX_ATTRIBS = 0x8869;
const MAX_VERTEX_UNIFORM_VECTORS = 0x8DFB;
const MAX_VARYING_VECTORS = 0x8DFC;
const MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8B4D;
const MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8B4C;
const MAX_TEXTURE_IMAGE_UNITS = 0x8872;
const MAX_FRAGMENT_UNIFORM_VECTORS = 0x8DFD;
const SHADER_TYPE = 0x8B4F;
const DELETE_STATUS = 0x8B80;
const LINK_STATUS = 0x8B82;
const VALIDATE_STATUS = 0x8B83;
const ATTACHED_SHADERS = 0x8B85;
const ACTIVE_UNIFORMS = 0x8B86;
const ACTIVE_ATTRIBUTES = 0x8B89;
const SHADING_LANGUAGE_VERSION = 0x8B8C;
const CURRENT_PROGRAM = 0x8B8D;
const NEVER = 0x0200;
const LESS = 0x0201;
const EQUAL = 0x0202;
const LEQUAL = 0x0203;
const GREATER = 0x0204;
const NOTEQUAL = 0x0205;
const GEQUAL = 0x0206;
const ALWAYS = 0x0207;
const KEEP = 0x1E00;
const REPLACE = 0x1E01;
const INCR = 0x1E02;
const DECR = 0x1E03;
const INVERT = 0x150A;
const INCR_WRAP = 0x8507;
const DECR_WRAP = 0x8508;
const VENDOR = 0x1F00;
const RENDERER = 0x1F01;
const VERSION = 0x1F02;
const NEAREST = 0x2600;
const LINEAR = 0x2601;
const NEAREST_MIPMAP_NEAREST = 0x2700;
const LINEAR_MIPMAP_NEAREST = 0x2701;
const NEAREST_MIPMAP_LINEAR = 0x2702;
const LINEAR_MIPMAP_LINEAR = 0x2703;
const TEXTURE_MAG_FILTER = 0x2800;
const TEXTURE_MIN_FILTER = 0x2801;
const TEXTURE_WRAP_S = 0x2802;
const TEXTURE_WRAP_T = 0x2803;
const TEXTURE_2D = 0x0DE1;
const TEXTURE = 0x1702;
const TEXTURE_CUBE_MAP = 0x8513;
const TEXTURE_BINDING_CUBE_MAP = 0x8514;
const TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515;
const TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516;
const TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517;
const TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518;
const TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519;
const TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851A;
const MAX_CUBE_MAP_TEXTURE_SIZE = 0x851C;
const TEXTURE0 = 0x84C0;
const TEXTURE1 = 0x84C1;
const TEXTURE2 = 0x84C2;
const TEXTURE3 = 0x84C3;
const TEXTURE4 = 0x84C4;
const TEXTURE5 = 0x84C5;
const TEXTURE6 = 0x84C6;
const TEXTURE7 = 0x84C7;
const TEXTURE8 = 0x84C8;
const TEXTURE9 = 0x84C9;
const TEXTURE10 = 0x84CA;
const TEXTURE11 = 0x84CB;
const TEXTURE12 = 0x84CC;
const TEXTURE13 = 0x84CD;
const TEXTURE14 = 0x84CE;
const TEXTURE15 = 0x84CF;
const TEXTURE16 = 0x84D0;
const TEXTURE17 = 0x84D1;
const TEXTURE18 = 0x84D2;
const TEXTURE19 = 0x84D3;
const TEXTURE20 = 0x84D4;
const TEXTURE21 = 0x84D5;
const TEXTURE22 = 0x84D6;
const TEXTURE23 = 0x84D7;
const TEXTURE24 = 0x84D8;
const TEXTURE25 = 0x84D9;
const TEXTURE26 = 0x84DA;
const TEXTURE27 = 0x84DB;
const TEXTURE28 = 0x84DC;
const TEXTURE29 = 0x84DD;
const TEXTURE30 = 0x84DE;
const TEXTURE31 = 0x84DF;
const ACTIVE_TEXTURE = 0x84E0;
const REPEAT = 0x2901;
const CLAMP_TO_EDGE = 0x812F;
const MIRRORED_REPEAT = 0x8370;
const FLOAT_VEC2 = 0x8B50;
const FLOAT_VEC3 = 0x8B51;
const FLOAT_VEC4 = 0x8B52;
const INT_VEC2 = 0x8B53;
const INT_VEC3 = 0x8B54;
const INT_VEC4 = 0x8B55;
const BOOL = 0x8B56;
const BOOL_VEC2 = 0x8B57;
const BOOL_VEC3 = 0x8B58;
const BOOL_VEC4 = 0x8B59;
const FLOAT_MAT2 = 0x8B5A;
const FLOAT_MAT3 = 0x8B5B;
const FLOAT_MAT4 = 0x8B5C;
const SAMPLER_2D = 0x8B5E;
const SAMPLER_CUBE = 0x8B60;
const VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622;
const VERTEX_ATTRIB_ARRAY_SIZE = 0x8623;
const VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624;
const VERTEX_ATTRIB_ARRAY_TYPE = 0x8625;
const VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886A;
const VERTEX_ATTRIB_ARRAY_POINTER = 0x8645;
const VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889F;
const IMPLEMENTATION_COLOR_READ_TYPE = 0x8B9A;
const IMPLEMENTATION_COLOR_READ_FORMAT = 0x8B9B;
const COMPILE_STATUS = 0x8B81;
const LOW_FLOAT = 0x8DF0;
const MEDIUM_FLOAT = 0x8DF1;
const HIGH_FLOAT = 0x8DF2;
const LOW_INT = 0x8DF3;
const MEDIUM_INT = 0x8DF4;
const HIGH_INT = 0x8DF5;
const FRAMEBUFFER = 0x8D40;
const RENDERBUFFER = 0x8D41;
const RGBA4 = 0x8056;
const RGB5_A1 = 0x8057;
const RGB565 = 0x8D62;
const DEPTH_COMPONENT16 = 0x81A5;
const STENCIL_INDEX8 = 0x8D48;
const DEPTH_STENCIL = 0x84F9;
const RENDERBUFFER_WIDTH = 0x8D42;
const RENDERBUFFER_HEIGHT = 0x8D43;
const RENDERBUFFER_INTERNAL_FORMAT = 0x8D44;
const RENDERBUFFER_RED_SIZE = 0x8D50;
const RENDERBUFFER_GREEN_SIZE = 0x8D51;
const RENDERBUFFER_BLUE_SIZE = 0x8D52;
const RENDERBUFFER_ALPHA_SIZE = 0x8D53;
const RENDERBUFFER_DEPTH_SIZE = 0x8D54;
const RENDERBUFFER_STENCIL_SIZE = 0x8D55;
const FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8CD0;
const FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8CD1;
const FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8CD2;
const FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8CD3;
const COLOR_ATTACHMENT0 = 0x8CE0;
const DEPTH_ATTACHMENT = 0x8D00;
const STENCIL_ATTACHMENT = 0x8D20;
const DEPTH_STENCIL_ATTACHMENT = 0x821A;
const NONE = 0;
const FRAMEBUFFER_COMPLETE = 0x8CD5;
const FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8CD6;
const FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8CD7;
const FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8CD9;
const FRAMEBUFFER_UNSUPPORTED = 0x8CDD;
const FRAMEBUFFER_BINDING = 0x8CA6;
const RENDERBUFFER_BINDING = 0x8CA7;
const MAX_RENDERBUFFER_SIZE = 0x84E8;
const INVALID_FRAMEBUFFER_OPERATION = 0x0506;
const UNPACK_FLIP_Y_WEBGL = 0x9240;
const UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241;
const CONTEXT_LOST_WEBGL = 0x9242;
const UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243;
const BROWSER_DEFAULT_WEBGL = 0x9244;
const READ_BUFFER = 0x0C02;
const UNPACK_ROW_LENGTH = 0x0CF2;
const UNPACK_SKIP_ROWS = 0x0CF3;
const UNPACK_SKIP_PIXELS = 0x0CF4;
const PACK_ROW_LENGTH = 0x0D02;
const PACK_SKIP_ROWS = 0x0D03;
const PACK_SKIP_PIXELS = 0x0D04;
const COLOR = 0x1800;
const DEPTH = 0x1801;
const STENCIL = 0x1802;
const RED = 0x1903;
const RGB8 = 0x8051;
const RGBA8 = 0x8058;
const RGB10_A2 = 0x8059;
const TEXTURE_BINDING_3D = 0x806A;
const UNPACK_SKIP_IMAGES = 0x806D;
const UNPACK_IMAGE_HEIGHT = 0x806E;
const TEXTURE_3D = 0x806F;
const TEXTURE_WRAP_R = 0x8072;
const MAX_3D_TEXTURE_SIZE = 0x8073;
const UNSIGNED_INT_2_10_10_10_REV = 0x8368;
const MAX_ELEMENTS_VERTICES = 0x80E8;
const MAX_ELEMENTS_INDICES = 0x80E9;
const TEXTURE_MIN_LOD = 0x813A;
const TEXTURE_MAX_LOD = 0x813B;
const TEXTURE_BASE_LEVEL = 0x813C;
const TEXTURE_MAX_LEVEL = 0x813D;
const MIN = 0x8007;
const MAX = 0x8008;
const DEPTH_COMPONENT24 = 0x81A6;
const MAX_TEXTURE_LOD_BIAS = 0x84FD;
const TEXTURE_COMPARE_MODE = 0x884C;
const TEXTURE_COMPARE_FUNC = 0x884D;
const CURRENT_QUERY = 0x8865;
const QUERY_RESULT = 0x8866;
const QUERY_RESULT_AVAILABLE = 0x8867;
const STREAM_READ = 0x88E1;
const STREAM_COPY = 0x88E2;
const STATIC_READ = 0x88E5;
const STATIC_COPY = 0x88E6;
const DYNAMIC_READ = 0x88E9;
const DYNAMIC_COPY = 0x88EA;
const MAX_DRAW_BUFFERS = 0x8824;
const DRAW_BUFFER0 = 0x8825;
const DRAW_BUFFER1 = 0x8826;
const DRAW_BUFFER2 = 0x8827;
const DRAW_BUFFER3 = 0x8828;
const DRAW_BUFFER4 = 0x8829;
const DRAW_BUFFER5 = 0x882A;
const DRAW_BUFFER6 = 0x882B;
const DRAW_BUFFER7 = 0x882C;
const DRAW_BUFFER8 = 0x882D;
const DRAW_BUFFER9 = 0x882E;
const DRAW_BUFFER10 = 0x882F;
const DRAW_BUFFER11 = 0x8830;
const DRAW_BUFFER12 = 0x8831;
const DRAW_BUFFER13 = 0x8832;
const DRAW_BUFFER14 = 0x8833;
const DRAW_BUFFER15 = 0x8834;
const MAX_FRAGMENT_UNIFORM_COMPONENTS = 0x8B49;
const MAX_VERTEX_UNIFORM_COMPONENTS = 0x8B4A;
const SAMPLER_3D = 0x8B5F;
const SAMPLER_2D_SHADOW = 0x8B62;
const FRAGMENT_SHADER_DERIVATIVE_HINT = 0x8B8B;
const PIXEL_PACK_BUFFER = 0x88EB;
const PIXEL_UNPACK_BUFFER = 0x88EC;
const PIXEL_PACK_BUFFER_BINDING = 0x88ED;
const PIXEL_UNPACK_BUFFER_BINDING = 0x88EF;
const FLOAT_MAT2x3 = 0x8B65;
const FLOAT_MAT2x4 = 0x8B66;
const FLOAT_MAT3x2 = 0x8B67;
const FLOAT_MAT3x4 = 0x8B68;
const FLOAT_MAT4x2 = 0x8B69;
const FLOAT_MAT4x3 = 0x8B6A;
const SRGB = 0x8C40;
const SRGB8 = 0x8C41;
const SRGB8_ALPHA8 = 0x8C43;
const COMPARE_REF_TO_TEXTURE = 0x884E;
const RGBA32F = 0x8814;
const RGB32F = 0x8815;
const RGBA16F = 0x881A;
const RGB16F = 0x881B;
const VERTEX_ATTRIB_ARRAY_INTEGER = 0x88FD;
const MAX_ARRAY_TEXTURE_LAYERS = 0x88FF;
const MIN_PROGRAM_TEXEL_OFFSET = 0x8904;
const MAX_PROGRAM_TEXEL_OFFSET = 0x8905;
const MAX_VARYING_COMPONENTS = 0x8B4B;
const TEXTURE_2D_ARRAY = 0x8C1A;
const TEXTURE_BINDING_2D_ARRAY = 0x8C1D;
const R11F_G11F_B10F = 0x8C3A;
const UNSIGNED_INT_10F_11F_11F_REV = 0x8C3B;
const RGB9_E5 = 0x8C3D;
const UNSIGNED_INT_5_9_9_9_REV = 0x8C3E;
const TRANSFORM_FEEDBACK_BUFFER_MODE = 0x8C7F;
const MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS = 0x8C80;
const TRANSFORM_FEEDBACK_VARYINGS = 0x8C83;
const TRANSFORM_FEEDBACK_BUFFER_START = 0x8C84;
const TRANSFORM_FEEDBACK_BUFFER_SIZE = 0x8C85;
const TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN = 0x8C88;
const RASTERIZER_DISCARD = 0x8C89;
const MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS = 0x8C8A;
const MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS = 0x8C8B;
const INTERLEAVED_ATTRIBS = 0x8C8C;
const SEPARATE_ATTRIBS = 0x8C8D;
const TRANSFORM_FEEDBACK_BUFFER = 0x8C8E;
const TRANSFORM_FEEDBACK_BUFFER_BINDING = 0x8C8F;
const RGBA32UI = 0x8D70;
const RGB32UI = 0x8D71;
const RGBA16UI = 0x8D76;
const RGB16UI = 0x8D77;
const RGBA8UI = 0x8D7C;
const RGB8UI = 0x8D7D;
const RGBA32I = 0x8D82;
const RGB32I = 0x8D83;
const RGBA16I = 0x8D88;
const RGB16I = 0x8D89;
const RGBA8I = 0x8D8E;
const RGB8I = 0x8D8F;
const RED_INTEGER = 0x8D94;
const RGB_INTEGER = 0x8D98;
const RGBA_INTEGER = 0x8D99;
const SAMPLER_2D_ARRAY = 0x8DC1;
const SAMPLER_2D_ARRAY_SHADOW = 0x8DC4;
const SAMPLER_CUBE_SHADOW = 0x8DC5;
const UNSIGNED_INT_VEC2 = 0x8DC6;
const UNSIGNED_INT_VEC3 = 0x8DC7;
const UNSIGNED_INT_VEC4 = 0x8DC8;
const INT_SAMPLER_2D = 0x8DCA;
const INT_SAMPLER_3D = 0x8DCB;
const INT_SAMPLER_CUBE = 0x8DCC;
const INT_SAMPLER_2D_ARRAY = 0x8DCF;
const UNSIGNED_INT_SAMPLER_2D = 0x8DD2;
const UNSIGNED_INT_SAMPLER_3D = 0x8DD3;
const UNSIGNED_INT_SAMPLER_CUBE = 0x8DD4;
const UNSIGNED_INT_SAMPLER_2D_ARRAY = 0x8DD7;
const DEPTH_COMPONENT32F = 0x8CAC;
const DEPTH32F_STENCIL8 = 0x8CAD;
const FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8DAD;
const FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING = 0x8210;
const FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE = 0x8211;
const FRAMEBUFFER_ATTACHMENT_RED_SIZE = 0x8212;
const FRAMEBUFFER_ATTACHMENT_GREEN_SIZE = 0x8213;
const FRAMEBUFFER_ATTACHMENT_BLUE_SIZE = 0x8214;
const FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE = 0x8215;
const FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE = 0x8216;
const FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE = 0x8217;
const FRAMEBUFFER_DEFAULT = 0x8218;
const UNSIGNED_INT_24_8 = 0x84FA;
const DEPTH24_STENCIL8 = 0x88F0;
const UNSIGNED_NORMALIZED = 0x8C17;
const DRAW_FRAMEBUFFER_BINDING = 0x8CA6;
const READ_FRAMEBUFFER = 0x8CA8;
const DRAW_FRAMEBUFFER = 0x8CA9;
const READ_FRAMEBUFFER_BINDING = 0x8CAA;
const RENDERBUFFER_SAMPLES = 0x8CAB;
const FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER = 0x8CD4;
const MAX_COLOR_ATTACHMENTS = 0x8CDF;
const COLOR_ATTACHMENT1 = 0x8CE1;
const COLOR_ATTACHMENT2 = 0x8CE2;
const COLOR_ATTACHMENT3 = 0x8CE3;
const COLOR_ATTACHMENT4 = 0x8CE4;
const COLOR_ATTACHMENT5 = 0x8CE5;
const COLOR_ATTACHMENT6 = 0x8CE6;
const COLOR_ATTACHMENT7 = 0x8CE7;
const COLOR_ATTACHMENT8 = 0x8CE8;
const COLOR_ATTACHMENT9 = 0x8CE9;
const COLOR_ATTACHMENT10 = 0x8CEA;
const COLOR_ATTACHMENT11 = 0x8CEB;
const COLOR_ATTACHMENT12 = 0x8CEC;
const COLOR_ATTACHMENT13 = 0x8CED;
const COLOR_ATTACHMENT14 = 0x8CEE;
const COLOR_ATTACHMENT15 = 0x8CEF;
const FRAMEBUFFER_INCOMPLETE_MULTISAMPLE = 0x8D56;
const MAX_SAMPLES = 0x8D57;
const HALF_FLOAT = 0x140B;
const RG = 0x8227;
const RG_INTEGER = 0x8228;
const R8 = 0x8229;
const RG8 = 0x822B;
const R16F = 0x822D;
const R32F = 0x822E;
const RG16F = 0x822F;
const RG32F = 0x8230;
const R8I = 0x8231;
const R8UI = 0x8232;
const R16I = 0x8233;
const R16UI = 0x8234;
const R32I = 0x8235;
const R32UI = 0x8236;
const RG8I = 0x8237;
const RG8UI = 0x8238;
const RG16I = 0x8239;
const RG16UI = 0x823A;
const RG32I = 0x823B;
const RG32UI = 0x823C;
const VERTEX_ARRAY_BINDING = 0x85B5;
const R8_SNORM = 0x8F94;
const RG8_SNORM = 0x8F95;
const RGB8_SNORM = 0x8F96;
const RGBA8_SNORM = 0x8F97;
const SIGNED_NORMALIZED = 0x8F9C;
const COPY_READ_BUFFER = 0x8F36;
const COPY_WRITE_BUFFER = 0x8F37;
const COPY_READ_BUFFER_BINDING = 0x8F36;
const COPY_WRITE_BUFFER_BINDING = 0x8F37;
const UNIFORM_BUFFER = 0x8A11;
const UNIFORM_BUFFER_BINDING = 0x8A28;
const UNIFORM_BUFFER_START = 0x8A29;
const UNIFORM_BUFFER_SIZE = 0x8A2A;
const MAX_VERTEX_UNIFORM_BLOCKS = 0x8A2B;
const MAX_FRAGMENT_UNIFORM_BLOCKS = 0x8A2D;
const MAX_COMBINED_UNIFORM_BLOCKS = 0x8A2E;
const MAX_UNIFORM_BUFFER_BINDINGS = 0x8A2F;
const MAX_UNIFORM_BLOCK_SIZE = 0x8A30;
const MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS = 0x8A31;
const MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS = 0x8A33;
const UNIFORM_BUFFER_OFFSET_ALIGNMENT = 0x8A34;
const ACTIVE_UNIFORM_BLOCKS = 0x8A36;
const UNIFORM_TYPE = 0x8A37;
const UNIFORM_SIZE = 0x8A38;
const UNIFORM_BLOCK_INDEX = 0x8A3A;
const UNIFORM_OFFSET = 0x8A3B;
const UNIFORM_ARRAY_STRIDE = 0x8A3C;
const UNIFORM_MATRIX_STRIDE = 0x8A3D;
const UNIFORM_IS_ROW_MAJOR = 0x8A3E;
const UNIFORM_BLOCK_BINDING = 0x8A3F;
const UNIFORM_BLOCK_DATA_SIZE = 0x8A40;
const UNIFORM_BLOCK_ACTIVE_UNIFORMS = 0x8A42;
const UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = 0x8A43;
const UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = 0x8A44;
const UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 0x8A46;
const INVALID_INDEX = 0xFFFFFFFF;
const MAX_VERTEX_OUTPUT_COMPONENTS = 0x9122;
const MAX_FRAGMENT_INPUT_COMPONENTS = 0x9125;
const MAX_SERVER_WAIT_TIMEOUT = 0x9111;
const OBJECT_TYPE = 0x9112;
const SYNC_CONDITION = 0x9113;
const SYNC_STATUS = 0x9114;
const SYNC_FLAGS = 0x9115;
const SYNC_FENCE = 0x9116;
const SYNC_GPU_COMMANDS_COMPLETE = 0x9117;
const UNSIGNALED = 0x9118;
const SIGNALED = 0x9119;
const ALREADY_SIGNALED = 0x911A;
const TIMEOUT_EXPIRED = 0x911B;
const CONDITION_SATISFIED = 0x911C;
const WAIT_FAILED = 0x911D;
const SYNC_FLUSH_COMMANDS_BIT = 0x00000001;
const VERTEX_ATTRIB_ARRAY_DIVISOR = 0x88FE;
const ANY_SAMPLES_PASSED = 0x8C2F;
const ANY_SAMPLES_PASSED_CONSERVATIVE = 0x8D6A;
const SAMPLER_BINDING = 0x8919;
const RGB10_A2UI = 0x906F;
const INT_2_10_10_10_REV = 0x8D9F;
const TRANSFORM_FEEDBACK = 0x8E22;
const TRANSFORM_FEEDBACK_PAUSED = 0x8E23;
const TRANSFORM_FEEDBACK_ACTIVE = 0x8E24;
const TRANSFORM_FEEDBACK_BINDING = 0x8E25;
const TEXTURE_IMMUTABLE_FORMAT = 0x912F;
const MAX_ELEMENT_INDEX = 0x8D6B;
const TEXTURE_IMMUTABLE_LEVELS = 0x82DF;
const TIMEOUT_IGNORED = -1;
const MAX_CLIENT_WAIT_TIMEOUT_WEBGL = 0x9247;
var gl = null;
const CullFaceMode = {
    "back": 0x0405,
    "front": 0x0404,
    "front and back": 0x0408
};
const TestFunc = {
    "greater": 0x0204,
    "gequal": 0x0206,
    "lequal": 0x0203,
    "less": 0x0201,
    "notequal": 0x0205,
    "equal": 0x0202,
    "never": 0x0200,
    "always": 0x0207,
};
const BlendEquationMode = {
    "add": 0x8006,
    "func substract": 0x800A,
    "func reverse substract": 0x800B,
};
const BlendFuncFactor = {
    "zero": 0,
    "one": 1,
    "src color": 0x0300,
    "one minus src color": 0x0301,
    "dst color": 0x0306,
    "one minus dst color": 0x0307,
    "src alpha": 0x0302,
    "one minus src alpha": 0x0303,
    "dst alpha": 0x0304,
    "one minus dst alpha": 0x0305,
    "constant color": 0x8001,
    "one minus constant color": 0x8002,
    "constant alpha": 0x8003,
    "one minus constant alpha": 0x8004,
    "src alpha saturate": 0x0308,
};
{
    let m_fbuf = null;
    let m_rbuf = null;
    let m_stack_view = null;
    const drawOnTexture = function (tex) {
        if (m_stack_view)
            drawOnView();
        m_stack_view = gl.getParameter(gl.VIEWPORT);
        m_fbuf = m_fbuf || gl.createFramebuffer();
        m_rbuf = m_rbuf || gl.createRenderbuffer();
        gl.bindFramebuffer(FRAMEBUFFER, m_fbuf);
        gl.bindRenderbuffer(RENDERBUFFER, m_rbuf);
        if (tex.width != m_rbuf.width || tex.height != m_rbuf.height) {
            m_rbuf.width = tex.width;
            m_rbuf.height = tex.height;
            gl.renderbufferStorage(RENDERBUFFER, DEPTH_COMPONENT16, tex.width, tex.height);
        }
        gl.framebufferTexture2D(FRAMEBUFFER, COLOR_ATTACHMENT0, TEXTURE_2D, tex.GL_HANDLE, 0);
        gl.framebufferRenderbuffer(FRAMEBUFFER, DEPTH_ATTACHMENT, RENDERBUFFER, m_rbuf);
        if (gl.checkFramebufferStatus(FRAMEBUFFER) != FRAMEBUFFER_COMPLETE)
            throw new Error('Rendering to this texture is not supported (incomplete framebuffer)');
        gl.viewport(0, 0, tex.width, tex.height);
    };
    const drawOnView = function () {
        if (m_stack_view == null)
            return;
        gl.bindFramebuffer(FRAMEBUFFER, null);
        gl.bindRenderbuffer(RENDERBUFFER, null);
        const v = m_stack_view;
        gl.viewport(v[0], v[1], v[2], v[3]);
        m_stack_view = null;
    };
    Internal.definePublicMethods({
        drawOnTexture,
        drawOnView
    });
}
;
{
    const useGLExtention = function (name) {
        return gl.getExtension(name) != null;
    };
    const useCullFace = function (mode) {
        gl.enable(gl.CULL_FACE);
        if (mode)
            gl.cullFace(CullFaceMode[mode]);
    };
    const useDepthTest = function (a) {
        if (a === false) {
            gl.disable(gl.DEPTH_TEST);
        }
        else {
            gl.enable(gl.DEPTH_TEST);
            if (a)
                gl.depthFunc(TestFunc[a]);
        }
    };
    const useStencilFunc = function (func, ref, mask) {
        gl.enable(gl.STENCIL_TEST);
        gl.stencilFunc(TestFunc[func], ref, mask);
    };
    const usePolygonOffset = function (a, b) {
        if (a === false) {
            gl.disable(gl.POLYGON_OFFSET_FILL);
        }
        else {
            gl.enable(gl.POLYGON_OFFSET_FILL);
            if (a)
                gl.polygonOffset(a, b);
        }
    };
    const useSampleCoverage = function (value, invert) {
        gl.enable(gl.SAMPLE_COVERAGE);
        gl.sampleCoverage(value, invert);
    };
    const useScissor = function (x, y, width, height) {
        gl.enable(gl.SCISSOR_TEST);
        gl.scissor(x, y, width, height);
    };
    const useBlend = function (a, sfactor, dfactor) {
        if (a === false) {
            gl.disable(gl.BLEND);
        }
        else {
            gl.enable(gl.BLEND);
            if (a)
                gl.blendEquation(BlendEquationMode[a]);
            if (sfactor && dfactor)
                gl.blendFunc(BlendFuncFactor[sfactor], BlendFuncFactor[dfactor]);
        }
    };
    Internal.definePublicMethods({
        useGLExtention,
        useCullFace,
        useDepthTest,
        useStencilFunc,
        usePolygonOffset,
        useSampleCoverage,
        useScissor,
        useBlend
    });
}
var Internal;
(function (Internal) {
    function InitGLContext(offscreen) {
        try {
            gl = offscreen.getContext('webgl');
        }
        catch (error) {
            throw new Error('WebGL not supported');
        }
    }
    Internal.InitGLContext = InitGLContext;
    Internal.UniformTypes = {
        byte: 0x1400,
        ubyte: 0x1401,
        short: 0x1402,
        ushort: 0x1403,
        int: 0x1404,
        uint: 0x1405,
        ivec2: 0x8B53,
        ivec3: 0x8B54,
        ivec4: 0x8B55,
        float: 0x1406,
        fmat2: 0x8B5A,
        fmat3: 0x8B5B,
        fmat4: 0x8B5C,
        fvec2: 0x8B50,
        fvec3: 0x8B51,
        fvec4: 0x8B52,
        bool: 0x8B56,
        bvec2: 0x8B57,
        bvec3: 0x8B58,
        bvec4: 0x8B59,
        tex2D: 0x8B5E,
        texCube: 0x8B60,
        tex3D: 0x8B5F,
        tex2D_arr: 0x8DC1,
        tex2D_arrshadow: 0x8DC4,
        tex2D_shadow: 0x8B62,
        texCube_shadow: 0x8DC5,
        itex2D: 0x8DCA,
        itex2D_arr: 0x8DCF,
        itex3D: 0x8DCB,
        itexCUBE: 0x8DCC,
        uitex2D: 0x8DD2,
        uitex2D_arr: 0x8DD7,
        uitex3D: 0x8DD3,
        uitexCube: 0x8DD4,
        texBinding: 0x8919,
    };
})(Internal || (Internal = {}));
;
{
    let m_onerr = null;
    let m_errors = [];
    let m_lasterr = null;
    let m_stoponerr = true;
    const addError = function (err) {
        m_errors.push(err);
        if (m_stoponerr)
            throw err.message;
    };
    const addAndEmitError = function (err) {
        m_errors.push(err);
        if (m_onerr)
            m_onerr(err);
        if (m_stoponerr)
            throw err.message;
    };
    Internal.definePublicProperties({
        error: {
            get() { return m_lasterr; },
            set(value) { addAndEmitError(value); }
        },
        stopOnError: {
            get() { return m_stoponerr; },
            set(value) { m_stoponerr = Boolean(value); }
        },
        OnError: {
            get() { return m_onerr; },
            set(cb) { if (typeof cb == "function")
                m_onerr = cb;
            else
                throw "The OnError value is not a function"; }
        }
    });
    Internal.defineInternalMethods({
        addError,
        addAndEmitError
    });
}
{
    let m_ondown = null;
    let m_onup = null;
    let m_kcodes = {};
    const onKeyDown = function (data) {
        Object.assign(globalThis, data);
        m_kcodes[data.KeyCode] = true;
        if (m_ondown)
            m_ondown();
    };
    const onKeyUp = function (data) {
        Object.assign(globalThis, data);
        m_kcodes[data.KeyCode] = false;
        if (m_onup)
            m_onup();
    };
    const getKeys = function () {
        return Object.keys(m_kcodes);
    };
    const isDownKey = function (arg) {
        if (typeof arg == "number")
            return arg in m_kcodes;
        if (typeof arg == "string")
            return arg.charCodeAt(0) in m_kcodes;
        for (const i in arg) {
            const k = arg[i];
            if (typeof k == "number" && !(k in m_kcodes))
                return false;
            else if (typeof k == "string" && !(k.charCodeAt(0) in m_kcodes))
                return false;
            else
                return false;
        }
        return true;
    };
    Internal.definePublicProperties({
        HasDownKeys: {
            get() { return Object.keys(m_kcodes).length != 0; },
            set(value) { throw "You can not assign the 'hasDownKeys' variable"; }
        },
        OnKeyDown: {
            get() { m_ondown; },
            set(cb) { if (typeof cb == "function")
                m_ondown = cb;
            else
                throw "The OnKeyDown value is not a function"; }
        },
        OnKeyUp: {
            get() { m_onup; },
            set(cb) { if (typeof cb == "function")
                m_onup = cb;
            else
                throw "The OnKeyUp value is not a function"; }
        }
    });
    Internal.definePublicMethods({
        getKeys,
        isDownKey
    });
    Internal.defineInternalMethods({
        onKeyDown,
        onKeyUp
    });
}
{
    let m_onmove = null;
    let m_state = {
        PointerLocation: [0, 0],
        PointerMovement: [0, 0],
        Force: 1
    };
    const onPointerMove = function (data) {
        Object.assign(m_state, data);
        Object.assign(globalThis, data);
        if (m_onmove)
            m_onmove();
    };
    Internal.definePublicProperties({
        PointerX: {
            get() { return m_state.PointerLocation[0]; }
        },
        PointerY: {
            get() { return m_state.PointerLocation[1]; }
        },
        OnPointerMove: {
            get() { return m_onmove; },
            set(cb) { if (typeof cb == "function")
                m_onmove = cb;
            else
                throw "The OnPointerMove value is not a function"; }
        }
    });
    Internal.defineInternalMethods({
        onPointerMove
    });
}
{
    let m_onwheel = null;
    const onWheelEvent = function (data) {
        Object.assign(globalThis, data);
        if (m_onwheel)
            m_onwheel();
    };
    Internal.definePublicProperties({
        OnWheel: {
            get() { return m_onwheel; },
            set(cb) { if (typeof cb == "function")
                m_onwheel = cb;
            else
                throw "The OnWheel value is not a function"; }
        }
    });
    Internal.defineInternalMethods({
        onWheelEvent
    });
}
{
    let m_ondown = null;
    let m_onup = null;
    const onButtonDown = function (data) {
        Object.assign(globalThis, data);
        if (m_ondown)
            m_ondown();
    };
    const onButtonUp = function (data) {
        Object.assign(globalThis, data);
        if (m_onup)
            m_onup();
    };
    Internal.definePublicProperties({
        OnButtonDown: {
            get() { m_ondown; },
            set(cb) { if (typeof cb == "function")
                m_ondown = cb;
            else
                throw "The OnButtonDown value is not a function"; }
        },
        OnButtonUp: {
            get() { m_onup; },
            set(cb) { if (typeof cb == "function")
                m_onup = cb;
            else
                throw "The OnButtonUp value is not a function"; }
        }
    });
    Internal.defineInternalMethods({
        onButtonDown,
        onButtonUp
    });
}
{
    let m_onresize = null;
    const onResize = function (data) {
        Internal.resizeView(data.Width, data.Height);
        if (m_onresize)
            m_onresize();
    };
    Internal.definePublicProperties({
        OnResize: {
            get() { return m_onresize; },
            set(cb) { if (typeof cb == "function")
                m_onresize = cb;
            else
                throw "The OnResize value is not a function"; }
        }
    });
    Internal.defineInternalMethods({
        onResize
    });
}
const IS_RESOURCE = Symbol.for("GS_RESOURCE");
;
{
    let m_baseuri = "";
    let m_loading_count = 0;
    const setBaseUri = function (uri) {
        if (uri[uri.length - 1] != '/')
            m_baseuri = uri + '/';
        else
            m_baseuri = uri;
    };
    const getResourcePath = function (path) {
        return m_baseuri + (path[0] == '/' ? path.substring(1) : path);
    };
    const isLoading = function () { return m_loading_count != 0; };
    const fetchArrayBuffer = function (url, callback) {
        m_loading_count++;
        const rsc = {
            [IS_RESOURCE]: true,
            isLoaded: false,
            data: null
        };
        fetch(url)
            .then(ret => ret.arrayBuffer())
            .then(arrbuf => {
            rsc.isLoaded = true;
            if (callback)
                rsc.data = callback(arrbuf);
            _finallyLoad();
        })
            .catch(err => {
            Internal.addAndEmitError(err);
            _finallyLoad();
        });
        return rsc;
    };
    const loadImage = function (url, callback) {
        m_loading_count++;
        const rsc = {
            [IS_RESOURCE]: true,
            isLoaded: false,
            data: null
        };
        fetch(getResourcePath(url))
            .then(ret => ret.blob())
            .then(blob => createImageBitmap(blob))
            .then(img => {
            rsc.isLoaded = true;
            if (callback)
                rsc.data = callback(img);
            _finallyLoad();
        })
            .catch(err => {
            Internal.addAndEmitError(err);
            _finallyLoad();
        });
        return rsc;
    };
    const loadText = function (url, callback) {
        m_loading_count++;
        const rsc = {
            [IS_RESOURCE]: true,
            isLoaded: false,
            data: null
        };
        fetch(getResourcePath(url))
            .then(ret => ret.text())
            .then(text => {
            rsc.isLoaded = true;
            if (callback)
                rsc.data = callback(text);
            _finallyLoad();
        })
            .catch(err => {
            Internal.addAndEmitError(err);
            _finallyLoad();
        });
        return rsc;
    };
    const loadJson = function (url, callback) {
        m_loading_count++;
        const rsc = {
            [IS_RESOURCE]: true,
            isLoaded: false,
            data: null
        };
        fetch(getResourcePath(url))
            .then(ret => ret.json())
            .then(json => {
            rsc.isLoaded = true;
            if (callback)
                rsc.data = callback(json);
            _finallyLoad();
        })
            .catch(err => {
            Internal.addAndEmitError(err);
            _finallyLoad();
        });
        return rsc;
    };
    const _finallyLoad = function () {
        m_loading_count--;
        if (m_loading_count != 0)
            return;
        Internal.dispatch("resource-loaded");
    };
    Internal.definePublicMethods({
        loadImage,
        loadText,
        loadJson
    });
    Internal.defineInternalMethods({
        isLoading,
        setBaseUri,
        getResourcePath
    });
}
;
{
    let m_width = 0;
    let m_height = 0;
    let m_offcanvas;
    const initView = function (offcanvas) {
        m_offcanvas = offcanvas;
        m_width = m_offcanvas.width;
        m_height = m_offcanvas.height;
        gl.viewport(0, 0, m_width, m_height);
    };
    const resizeView = function (width, height) {
        m_width = width;
        m_height = height;
        m_offcanvas.width = width;
        m_offcanvas.height = height;
        gl.viewport(0, 0, m_width, m_height);
    };
    const drawBackground = function (r, g, b, a) {
        gl.clearColor(r, g, b, a);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    };
    const setClearColor = function (r, g, b, a) {
        gl.clearColor(r, g, b, a);
    };
    const clearView = function (stencil = false) {
        if (stencil)
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);
        else
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    };
    Internal.definePublicProperties({
        Width: {
            get() { return m_width; },
            set(v) { throw "You can not the Width property"; }
        },
        Height: {
            get() { return m_height; },
            set(v) { throw "You can not the Height property"; }
        },
    });
    Internal.definePublicMethods({
        drawBackground,
        setClearColor,
        clearView
    });
    Internal.defineInternalMethods({
        initView,
        resizeView
    });
}
const AxisX = [1, 0, 0];
const AxisY = [0, 1, 0];
const AxisZ = [0, 0, 1];
{
    const m_proj = mat4();
    const mat_tmp1 = mat4();
    const mat_tmp2 = mat4();
    const resetViewMatrix = function () {
        mat4.identity(m_proj);
    };
    const usePerspectiveView = function (fov, near, far) {
        mat4.perspective(m_proj, fov, Width / Height, near, far);
    };
    const frustumView = function (left, right, bottom, top, near, far) {
        const tmp = mat_tmp1;
        const result = mat_tmp2;
        mat4.frustum(tmp, left, right, bottom, top, near, far);
        mat4.multiply(result, m_proj, tmp);
        mat4.copy(result, m_proj);
    };
    const useOrthogonalView = function (l, r, b, t, n, f) {
        const ratio = Width / Height;
        mat4.ortho(m_proj, l * ratio, r * ratio, b, t, n, f);
    };
    const scaleView = function (x, y, z) {
        mat4.scale(m_proj, m_proj, vec3(x, y, z));
    };
    const zoomView = function (zoom) {
        mat4.translate(m_proj, m_proj, vec3(0, 0, zoom));
    };
    const translateView = function (x, y, z) {
        mat4.translate(m_proj, m_proj, vec3(x, y, z));
    };
    const rotateView = function (a, x, y, z) {
        mat4.rotate(m_proj, m_proj, a, vec3(x, y, z));
    };
    const getProjectionMatrix = function () {
        return m_proj;
    };
    Internal.definePublicMethods({
        resetViewMatrix,
        usePerspectiveView,
        useOrthogonalView,
        scaleView,
        zoomView,
        translateView,
        rotateView,
        getProjectionMatrix
    });
}
{
    let m_onsetup = null;
    let m_ondraw = null;
    let m_framecb = null;
    let m_isrun = false;
    let m_issetup = false;
    const draw = function () {
        if (m_isrun)
            return;
        _beforeDraw();
        if (m_issetup)
            _waitResource(() => m_ondraw(0));
        else
            _setup(() => _waitResource(() => m_ondraw(0)));
    };
    const play = function () {
        if (m_isrun)
            return;
        _beforeDraw();
        m_framecb = (millis) => {
            m_ondraw(millis);
            requestAnimationFrame(m_framecb);
        };
        m_isrun = true;
        if (m_issetup)
            _waitResource(() => requestAnimationFrame(m_framecb));
        else
            _setup(() => _waitResource(() => requestAnimationFrame(m_framecb)));
    };
    const pause = function () {
        if (!m_isrun)
            return;
        m_framecb = () => { m_isrun = false; };
    };
    const _beforeDraw = function () {
        if (typeof m_ondraw != "function")
            throw "You must define a 'onDraw' function in the sketch before play it.";
    };
    const _waitResource = function (cb) {
        if (Internal.isLoading())
            Internal.once("resource-loaded", () => { cb(); });
        else
            cb();
    };
    const _setup = function (cb) {
        m_issetup = true;
        _waitResource(() => { if (m_onsetup)
            m_onsetup(); cb(); });
    };
    Internal.definePublicMethods({
        draw,
        play,
        pause
    });
    Internal.definePublicProperties({
        OnSetup: {
            get() { return m_onsetup; },
            set(cb) { if (typeof cb == "function")
                m_onsetup = cb;
            else
                throw "The OnSetup value is not a function"; }
        },
        OnDraw: {
            get() { return m_ondraw; },
            set(cb) { if (typeof cb == "function")
                m_ondraw = cb;
            else
                throw "The OnDraw value is not a function"; }
        }
    });
}
;
{
    const fetchTexture = function (url, opts) {
        const tex = {};
        var img = null;
        Internal.once("resource-loaded", () => {
            Object.assign(tex, _initTexture(img, opts));
        });
        loadImage(url, (image) => { img = image; });
        return tex;
    };
    const fetchTextureCube = function (imgs) {
        return createTextureCude({
            xneg: fetchTexture(imgs.xneg),
            xpos: fetchTexture(imgs.xpos),
            yneg: fetchTexture(imgs.yneg),
            ypos: fetchTexture(imgs.ypos),
            zneg: fetchTexture(imgs.zneg),
            zpos: fetchTexture(imgs.zpos),
        });
    };
    const _initTexture = function (img, opts = {}) {
        const tex = createTexture(img.width, img.height, opts);
        try {
            gl.texImage2D(gl.TEXTURE_2D, 0, tex.GL_FORMAT, tex.GL_FORMAT, tex.GL_TYPE, img);
            tex.imageElement = img;
        }
        catch (e) {
            if (location.protocol == 'file:')
                throw new Error('image not loaded for security reasons (serve this page over "http://" instead)');
            else
                throw new Error('image not loaded for security reasons (image must originate from the same ' +
                    'domain as this page or use Cross-Origin Resource Sharing)');
        }
        if (opts.minFilter && opts.minFilter != gl.NEAREST && opts.minFilter != gl.LINEAR)
            gl.generateMipmap(gl.TEXTURE_2D);
        return tex;
    };
    const createTexture = function (w, h, opts = {}) {
        const NEAREST = 0x2600, HALF_FLOAT_OES = 0x8D61, FLOAT = 0x1406, TEXTURE_MAG_FILTER = 0x2800, TEXTURE_MIN_FILTER = 0x2801, TEXTURE_WRAP_S = 0x2802, TEXTURE_WRAP_T = 0x2803, TEXTURE_2D = 0x0DE1, UNPACK_FLIP_Y_WEBGL = 0x9240;
        const magFilter = opts.filter || opts.magFilter || gl.LINEAR;
        const minFilter = opts.filter || opts.minFilter || gl.LINEAR;
        const wrapS = opts.wrap || opts.wrapS || gl.CLAMP_TO_EDGE;
        const wrapT = opts.wrap || opts.wrapT || gl.CLAMP_TO_EDGE;
        const t = {
            GL_HANDLE: gl.createTexture(),
            GL_TARGET: gl.TEXTURE_2D,
            width: w,
            height: h,
            GL_FORMAT: opts.format || 0x1908,
            GL_TYPE: opts.type || 0x1401
        };
        if (t.GL_TYPE === gl.FLOAT) {
            if (!useGLExtention("OES_texture_float"))
                throw new Error('OES_texture_float is required but not supported');
            if ((minFilter !== gl.NEAREST || magFilter !== gl.NEAREST) && !useGLExtention("OES_texture_float_linear"))
                throw new Error('OES_texture_float_linear is required but not supported');
        }
        else if (t.GL_TYPE === HALF_FLOAT_OES) {
            if (!useGLExtention("OES_texture_half_float"))
                throw new Error('OES_texture_half_float is required but not supported');
            if ((minFilter !== gl.NEAREST || magFilter !== gl.NEAREST) && !useGLExtention("OES_texture_half_float_linear"))
                throw new Error('OES_texture_half_float_linear is required but not supported');
        }
        gl.bindTexture(gl.TEXTURE_2D, t.GL_HANDLE);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, magFilter);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrapS);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrapT);
        gl.texImage2D(gl.TEXTURE_2D, 0, t.GL_FORMAT, w, h, 0, t.GL_FORMAT, t.GL_TYPE, opts.data || null);
        return t;
    };
    const createTextureCude = function (imgs) {
        const tex = {
            GL_HANDLE: gl.createTexture(),
            images: imgs
        };
        const _create = function () {
            gl.bindTexture(TEXTURE_CUBE_MAP, tex.GL_HANDLE);
            gl.pixelStorei(UNPACK_FLIP_Y_WEBGL, 1);
            gl.texParameteri(TEXTURE_CUBE_MAP, TEXTURE_MAG_FILTER, LINEAR);
            gl.texParameteri(TEXTURE_CUBE_MAP, TEXTURE_MIN_FILTER, LINEAR);
            gl.texParameteri(TEXTURE_CUBE_MAP, TEXTURE_WRAP_S, CLAMP_TO_EDGE);
            gl.texParameteri(TEXTURE_CUBE_MAP, TEXTURE_WRAP_T, CLAMP_TO_EDGE);
            gl.texImage2D(TEXTURE_CUBE_MAP_NEGATIVE_X, 0, RGB, RGB, UNSIGNED_BYTE, imgs.xneg);
            gl.texImage2D(TEXTURE_CUBE_MAP_POSITIVE_X, 0, RGB, RGB, UNSIGNED_BYTE, imgs.xpos);
            gl.texImage2D(TEXTURE_CUBE_MAP_NEGATIVE_Y, 0, RGB, RGB, UNSIGNED_BYTE, imgs.yneg);
            gl.texImage2D(TEXTURE_CUBE_MAP_POSITIVE_Y, 0, RGB, RGB, UNSIGNED_BYTE, imgs.ypos);
            gl.texImage2D(TEXTURE_CUBE_MAP_NEGATIVE_Z, 0, RGB, RGB, UNSIGNED_BYTE, imgs.zneg);
            gl.texImage2D(TEXTURE_CUBE_MAP_POSITIVE_Z, 0, RGB, RGB, UNSIGNED_BYTE, imgs.zpos);
        };
        if (Internal.isLoading())
            Internal.once("resource-loaded", _create);
        else
            _create();
        return tex;
    };
    const swapTextures = function (texA, texB) {
        var tmpA;
        const A = texA;
        const B = texB;
        tmpA = A.GL_HANDLE;
        A.GL_HANDLE = B.GL_HANDLE;
        B.GL_HANDLE = tmpA;
        tmpA = A.width;
        A.width = B.width;
        B.width = tmpA;
        tmpA = A.height;
        A.height = B.height;
        B.height = tmpA;
    };
    const useTexture = function (texture, pos = 0) {
        const tex = texture;
        if (pos > -1) {
            gl.activeTexture(gl.TEXTURE0 + pos);
            gl.bindTexture(tex.GL_TARGET, tex.GL_HANDLE);
            tex.isBinded = true;
            tex.bindIndex = pos;
        }
        else if (tex.isBinded) {
            gl.activeTexture(gl.TEXTURE0 + tex.bindIndex);
            gl.bindTexture(tex.GL_TARGET, null);
            tex.isBinded = false;
        }
        return tex;
    };
    Internal.definePublicMethods({
        fetchTexture,
        fetchTextureCube,
        createTexture,
        createTextureCude,
        useTexture,
        swapTextures,
    });
}
var BufferTarget;
(function (BufferTarget) {
    BufferTarget[BufferTarget["ARRAY_BUFFER"] = 34962] = "ARRAY_BUFFER";
    BufferTarget[BufferTarget["ELEMENT_ARRAY_BUFFER"] = 34963] = "ELEMENT_ARRAY_BUFFER";
})(BufferTarget || (BufferTarget = {}));
;
{
    const createVertexBuffer = function (name) {
        return createBuffer(name, 0x8892, Float32Array);
    };
    const createIndexBuffer = function (name) {
        return createBuffer(name, 0x8893, Uint16Array);
    };
    const isVBO = function (buffer) {
        return buffer.GL_TARGET == 0x8892;
    };
    const isIBO = function (buffer) {
        return buffer.GL_TARGET == 0x8893;
    };
    const createBuffer = function (name, target, ctor) {
        var esize;
        var gtype;
        const n = ctor.name;
        switch (n[0]) {
            case 'I':
                switch (n[3]) {
                    case '8':
                        gtype = 0x1400;
                        esize = 1;
                        break;
                    case '1':
                        gtype = 0x1402;
                        esize = 2;
                        break;
                    default:
                        gtype = 0x1404;
                        esize = 4;
                        break;
                }
                break;
            case 'U':
                switch (n[4]) {
                    case '8':
                        gtype = 0x1401;
                        esize = 1;
                        break;
                    case '1':
                        gtype = 0x1403;
                        esize = 2;
                        break;
                    default:
                        gtype = 0x1405;
                        esize = 4;
                        break;
                }
                break;
            case 'F':
                switch (n[5]) {
                    case '3':
                        gtype = 0x1406;
                        esize = 4;
                        break;
                    default: throw "Not yet implemented";
                }
                break;
            case 'B':
                throw "Not yet implemented";
            default:
                gtype = 0x1400;
                esize = 1;
        }
        return {
            name: name,
            ctor: ctor,
            GL_TYPE: gtype,
            GL_TARGET: target,
            GL_HANDLE: null,
            data: [],
            length: 0,
            element_size: esize,
            element_count: 0
        };
    };
    const uploadBuffer = function (buf, dynamic = false) {
        const data = buf.data.flat();
        const usage = dynamic ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW;
        const spacing = data.length / buf.data.length;
        if (spacing != Math.round(spacing))
            throw new Error('buffer elements not of consistent size, average size is ' + spacing);
        buf.GL_HANDLE = buf.GL_HANDLE || gl.createBuffer();
        buf.length = data.length;
        buf.element_size = spacing;
        buf.element_count = buf.data.length;
        gl.bindBuffer(buf.GL_TARGET, buf.GL_HANDLE);
        gl.bufferData(buf.GL_TARGET, new buf.ctor(data), usage);
    };
    const uploadBuffers = function (buffers, dynamic = false) {
        const DYNAMIC_DRAW = 0x88E8, STATIC_DRAW = 0x88E4;
        for (const bname in buffers) {
            const buf = buffers[bname];
            const data = buf.data.flat();
            const usage = dynamic ? DYNAMIC_DRAW : STATIC_DRAW;
            const spacing = data.length / buf.data.length;
            if (spacing != Math.round(spacing))
                throw new Error('buffer elements not of consistent size, average size is ' + spacing);
            buf.GL_HANDLE = buf.GL_HANDLE || gl.createBuffer();
            buf.length = data.length;
            buf.element_size = spacing;
            buf.element_count = buf.data.length;
            gl.bindBuffer(buf.GL_TARGET, buf.GL_HANDLE);
            gl.bufferData(buf.GL_TARGET, new buf.ctor(data), usage);
        }
    };
    Internal.defineInternalMethods({
        isVBO,
        isIBO,
        createVertexBuffer,
        createIndexBuffer,
        uploadBuffer,
        uploadBuffers
    });
}
;
{
    let m_shader;
    const fetchShader = function (vspath, fspath) {
        var vssource = null;
        var fssource = null;
        const shader = {
            vertexSource: null,
            fragmentSource: null
        };
        Internal.once("resource-loaded", () => {
            Object.assign(shader, createShader(vssource, fssource));
        });
        loadText(vspath, (src) => { vssource = src; });
        loadText(fspath, (src) => { fssource = src; });
        return shader;
    };
    const createShader = function (vssource, fssource) {
        if (Array.isArray(vssource))
            vssource = vssource.join('\n');
        if (Array.isArray(fssource))
            fssource = fssource.join('\n');
        const prog = gl.createProgram();
        if (prog == null)
            throw "gl.createProgram error";
        gl.attachShader(prog, compileSource(gl.VERTEX_SHADER, vssource));
        gl.attachShader(prog, compileSource(gl.FRAGMENT_SHADER, fssource));
        gl.linkProgram(prog);
        if (!gl.getProgramParameter(prog, gl.LINK_STATUS))
            throw new Error('link error: ' + gl.getProgramInfoLog(prog));
        return _initShader({
            vertexSource: vssource,
            fragmentSource: fssource,
            program: prog,
            attInfos: {},
            uniInfos: {},
            onUse: null
        });
        function compileSource(type, source) {
            const shd = gl.createShader(type);
            if (shd == null)
                throw "gl.createShader error";
            gl.shaderSource(shd, source);
            gl.compileShader(shd);
            if (!gl.getShaderParameter(shd, gl.COMPILE_STATUS))
                throw new Error('compile error: ' + gl.getShaderInfoLog(shd));
            return shd;
        }
    };
    const _initShader = function (shader) {
        const prog = shader.program;
        const atts = shader.attInfos;
        const unis = shader.uniInfos;
        const acount = gl.getProgramParameter(prog, gl.ACTIVE_ATTRIBUTES);
        const ucount = gl.getProgramParameter(prog, gl.ACTIVE_UNIFORMS);
        for (let i = 0; i < acount; ++i) {
            const a = gl.getActiveAttrib(prog, i);
            if (a == null)
                throw "internal error";
            atts[a.name] = {
                name: a.name,
                size: a.size,
                type: a.type,
                location: gl.getAttribLocation(prog, a.name)
            };
        }
        for (let i = 0; i < ucount; ++i) {
            const u = gl.getActiveUniform(prog, i);
            if (u == null)
                throw "internal error";
            unis[u.name] = {
                name: u.name,
                size: u.size,
                type: u.type,
                location: gl.getUniformLocation(prog, u.name),
                isSampler: _isSampler(u)
            };
        }
        return shader;
    };
    const _isSampler = function (info) {
        switch (info.type) {
            case gl.SAMPLER_2D: return true;
            case gl.SAMPLER_CUBE: return true;
            default: return false;
        }
    };
    const useShader = function (shader, data) {
        m_shader = shader[IS_RESOURCE]
            ? shader.data
            : shader;
        gl.useProgram(m_shader.program);
        if (m_shader.onUse)
            m_shader.onUse();
        if (data) {
            attachShaderAttributes(data);
            setShaderUniforms(data);
        }
    };
    const getCurrentShader = function () {
        return m_shader;
    };
    const setShaderData = function (data) {
        attachShaderAttributes(data);
        setShaderUniforms(data);
    };
    const attachShaderBuffers = function (mesh) {
        attachShaderAttributes(mesh.buffers);
    };
    const attachShaderAttributes = function (data) {
        const shd = m_shader;
        const ainf = shd.attInfos;
        for (const aname in ainf) {
            if (!(aname in data))
                continue;
            const a = ainf[aname];
            const d = data[aname];
            const l = a.location;
            gl.bindBuffer(d.GL_TARGET, d.GL_HANDLE);
            gl.enableVertexAttribArray(l);
            gl.vertexAttribPointer(l, d.element_size, d.GL_TYPE, false, 0, 0);
        }
    };
    const setShaderUniforms = function (data) {
        const shd = m_shader;
        const uinf = shd.uniInfos;
        for (const uname in uinf) {
            if (!(uname in data))
                continue;
            const u = uinf[uname];
            const d = data[uname];
            const l = u.location;
            switch (u.type) {
                case 0x1400:
                    gl.uniform1f(l, d);
                    continue;
                case 0x1401:
                    gl.uniform1f(l, d);
                    continue;
                case 0x1402:
                    gl.uniform1f(l, d);
                    continue;
                case 0x1403:
                    gl.uniform1f(l, d);
                    continue;
                case 0x1404:
                    gl.uniform1i(l, d);
                    continue;
                case 0x1405:
                    gl.uniform1i(l, d);
                    continue;
                case 0x1406:
                    gl.uniform1f(l, d);
                    continue;
                case 0x8B50:
                    gl.uniform2fv(l, d);
                    continue;
                case 0x8B51:
                    gl.uniform3fv(l, d);
                    continue;
                case 0x8B52:
                    gl.uniform4fv(l, d);
                    continue;
                case 0x8B53:
                    gl.uniform2iv(l, d);
                    continue;
                case 0x8B54:
                    gl.uniform3iv(l, d);
                    continue;
                case 0x8B55:
                    gl.uniform4iv(l, d);
                    continue;
                case 0x8B56:
                    gl.uniform1i(l, d);
                    continue;
                case 0x8B57:
                    gl.uniform2iv(l, d);
                    continue;
                case 0x8B58:
                    gl.uniform3iv(l, d);
                    continue;
                case 0x8B59:
                    gl.uniform4iv(l, d);
                    continue;
                case 0x8B5A:
                    gl.uniformMatrix2fv(l, false, d);
                    continue;
                case 0x8B5B:
                    gl.uniformMatrix3fv(l, false, d);
                    continue;
                case 0x8B5C:
                    gl.uniformMatrix4fv(l, false, d);
                    continue;
                case 0x8B5E:
                    typeof d == "number"
                        ? gl.uniform1i(l, d)
                        : gl.uniform1i(l, d.bindIndex);
                    continue;
                case 0x8B60:
                    typeof d == "number"
                        ? gl.uniform1i(l, d)
                        : gl.uniform1i(l, d.bindIndex);
                    continue;
            }
            if (gl.VERSION != 2)
                throw `Cann not set the uniform ${uname} with data type: ${typeof d}`;
            switch (u.type) {
            }
        }
    };
    Internal.definePublicMethods({
        fetchShader,
        createShader,
        useShader,
        getCurrentShader,
        setShaderData,
        attachShaderAttributes,
        setShaderUniforms,
    });
}
{
    const m_mvm = mat4();
    const m_stack = [];
    const pushTransformations = function () {
        m_stack.push(m_mvm);
        mat4.identity(m_mvm);
    };
    const popTransformations = function () {
        const m = m_stack.pop();
        if (m == undefined)
            return;
        mat4.copy(m_mvm, m);
    };
    const resetTransformations = function () {
        mat4.identity(m_mvm);
    };
    const translate = function (a, b, c) {
        if (a.length == 3)
            mat4.translate(m_mvm, m_mvm, a);
        else
            mat4.translate(m_mvm, m_mvm, vec3(a, b, c));
    };
    const translateX = function (offset) {
        mat4.translate(m_mvm, m_mvm, [offset, 0, 0]);
    };
    const translateY = function (offset) {
        mat4.translate(m_mvm, m_mvm, [0, offset, 0]);
    };
    const translateZ = function (offset) {
        mat4.translate(m_mvm, m_mvm, [0, 0, offset]);
    };
    const rotate = function (rad, a, b, c) {
        if (a.length == 3)
            mat4.rotate(m_mvm, m_mvm, rad, a);
        else
            mat4.rotate(m_mvm, m_mvm, rad, vec3(a, b, c));
    };
    const rotateX = function (rad) {
        mat4.rotateX(m_mvm, m_mvm, rad);
    };
    const rotateY = function (rad) {
        mat4.rotateY(m_mvm, m_mvm, rad);
    };
    const rotateZ = function (rad) {
        mat4.rotateZ(m_mvm, m_mvm, rad);
    };
    const scale = function (a, b, c) {
        if (a.length == 3)
            mat4.scale(m_mvm, m_mvm, a);
        else
            mat4.scale(m_mvm, m_mvm, [a, (b || a), (c || a)]);
    };
    const scaleX = function (factor) {
        mat4.scale(m_mvm, m_mvm, [factor, 0, 0]);
    };
    const scaleY = function (factor) {
        mat4.scale(m_mvm, m_mvm, [0, factor, 0]);
    };
    const scaleZ = function (factor) {
        mat4.scale(m_mvm, m_mvm, [0, 0, factor]);
    };
    const getTransforms = function () {
        return m_mvm;
    };
    const getTransformsInverse = function () {
        return mat4.invert(mat4(), m_mvm);
    };
    const getTransformsProjection = function () {
        return mat4.multiply(mat4(), getProjectionMatrix(), m_mvm);
    };
    Internal.definePublicMethods({
        resetTransformations,
        pushTransformations,
        popTransformations,
        translate,
        translateX,
        translateY,
        translateZ,
        rotate,
        rotateX,
        rotateY,
        rotateZ,
        scale,
        scaleX,
        scaleY,
        scaleZ,
        getTransforms,
        getTransformsInverse,
        getTransformsProjection
    });
}
var Internal;
(function (Internal) {
    class Indexer {
        constructor() {
            this.unique = [];
            this.indices = [];
            this.map = {};
        }
        add(obj) {
            var key = JSON.stringify(obj);
            if (!(key in this.map)) {
                this.map[key] = this.unique.length;
                this.unique.push(obj);
            }
            return this.map[key];
        }
    }
    Internal.Indexer = Indexer;
})(Internal || (Internal = {}));
;
{
    let m_drawmode = "triangles";
    const fetchMesh = function (path) {
        var data = null;
        const mesh = {};
        Internal.once("resource-loaded", () => {
            Object.assign(mesh, loadMesh(data));
        });
        loadJson(path, (json) => data = json);
        return mesh;
    };
    const loadMesh = function (json) {
        const opts = {
            coords: 'coords' in json,
            normals: 'normals' in json,
            colors: 'colors' in json,
            triangles: 'triangles' in json,
            lines: 'lines' in json,
        };
        const mesh = createMesh(opts);
        mesh.buffers.vertices.data = json.vertices;
        if (opts.coords)
            mesh.buffers.coords.data = json.coords;
        if (opts.normals)
            mesh.buffers.normals.data = json.normals;
        if (opts.colors)
            mesh.buffers.colors.data = json.colors;
        if (opts.triangles)
            mesh.buffers.triangles.data = json.triangles;
        if (opts.lines)
            mesh.buffers.lines.data = json.lines;
        Internal.uploadBuffers(mesh.buffers);
        return mesh;
    };
    const createMesh = function (options = {}) {
        const bufs = {
            vertices: Internal.createVertexBuffer("vertices")
        };
        if (options.normals)
            bufs.normals = Internal.createVertexBuffer("normals");
        if (options.colors)
            bufs.colors = Internal.createVertexBuffer("colors");
        if (options.coords)
            bufs.coords = Internal.createVertexBuffer("coords");
        if (options.triangles)
            bufs.triangles = Internal.createIndexBuffer("triangles");
        if (options.lines)
            bufs.lines = Internal.createIndexBuffer("lines");
        return {
            buffers: bufs
        };
    };
    const setDrawingMode = function (mode) {
        m_drawmode = mode;
    };
    const drawMesh = function (mesh) {
        const buffers = mesh.buffers;
        const onDraw = mesh.onDraw;
        if (onDraw)
            onDraw();
        const idxbuf = buffers[m_drawmode];
        const GL_MODE = getGLDrawingType(m_drawmode);
        if (idxbuf) {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, idxbuf.GL_HANDLE);
            gl.drawElements(GL_MODE, idxbuf.length, idxbuf.GL_TYPE, 0);
        }
        else {
            gl.drawArrays(GL_MODE, 0, buffers.vertices.element_count);
        }
    };
    const getGLDrawingType = function (mode) {
        if (mode.length < 10) {
            switch (mode[4]) {
                case 't': return gl.POINTS;
                case 's': return gl.LINES;
                case ' ': return gl.LINE_LOOP;
                case 'n': return gl.TRIANGLES;
            }
        }
        else {
            switch (mode[9]) {
                case 'p': return gl.LINE_STRIP;
                case 's': return gl.TRIANGLE_STRIP;
                case 'f': return gl.TRIANGLE_FAN;
            }
        }
        throw "Bad drawing mode value";
    };
    const transform = function (mesh, matrix) {
        const vdata = mesh.buffers.vertices.data;
        const normals = mesh.buffers.normals;
        for (var i = 0; i < vdata.length; i++)
            vec3.transformMat4(vdata[i], vdata[i], matrix);
        if (normals) {
            const ndata = normals.data;
            const invTrans = mat4.invert(mat4(), matrix);
            if (invTrans == null)
                throw "Can not get inverse model-view matrix";
            mat4.transpose(invTrans, invTrans);
            for (var i = 0; i < ndata.length; i++) {
                vec3.transformMat4(ndata[i], ndata[i], invTrans);
                vec3.normalize(ndata[i], ndata[i]);
            }
        }
        Internal.uploadBuffers(mesh.buffers);
        return mesh;
    };
    const computeWireframe = function (mesh) {
        const indexer = new Internal.Indexer();
        const buffers = mesh.buffers;
        const triangles = buffers.triangles;
        if (triangles == undefined)
            throw "A triangles buffer is required for computeNormals";
        for (var i = 0; i < triangles.data.length; i++) {
            const t = triangles.data[i];
            for (var j = 0; j < t.length; j++) {
                const a = t[j];
                const b = t[(j + 1) % t.length];
                indexer.add([Math.min(a, b), Math.max(a, b)]);
            }
        }
        if (!buffers.lines)
            buffers.lines = Internal.createIndexBuffer("lines");
        buffers.lines.data = indexer.unique;
        Internal.uploadBuffers(mesh.buffers);
    };
    const computeNormals = function (mesh) {
        const buffers = mesh.buffers;
        const vdata = buffers.vertices.data;
        if (buffers.triangles == undefined)
            throw "A triangles buffer is required for computeNormals";
        const tdata = buffers.triangles.data;
        const nms = [];
        for (var i = 0; i < vdata.length; i++)
            nms[i] = vec3();
        for (var i = 0; i < tdata.length; i++) {
            const t = tdata[i];
            const a = vec3(vdata[t[0]]);
            const b = vec3(vdata[t[1]]);
            const c = vec3(vdata[t[2]]);
            const n = vec3();
            vec3.cross(n, vec3.subtract(vec3(), b, a), vec3.subtract(vec3(), c, a));
            vec3.normalize(n, n);
            vec3.add(nms[t[0]], nms[t[0]], n);
            vec3.add(nms[t[1]], nms[t[1]], n);
            vec3.add(nms[t[2]], nms[t[2]], n);
        }
        if (!buffers.normals)
            buffers.normals = Internal.createVertexBuffer("normals");
        const ndata = buffers.normals.data;
        for (var i = 0; i < vdata.length; i++)
            vec3.normalize(ndata[i], nms[i]);
        Internal.uploadBuffers(mesh.buffers);
        return mesh;
    };
    const getAABB = function (mesh) {
        const vdata = mesh.buffers.vertices.data;
        var min = vec3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
        var max = vec3.negate(vec3(), min);
        for (var i = 0; i < vdata.length; i++) {
            var v = vec3(vdata[i]);
            vec3.min(min, min, v);
            vec3.max(max, max, v);
        }
        return { min: min, max: max };
    };
    const getBoundingSphere = function (mesh) {
        const vdata = mesh.buffers.vertices.data;
        const aabb = getAABB(mesh);
        const center = vec3.add(vec3(), aabb.min, aabb.max);
        vec3.divide(center, center, [2, 2, 2]);
        const sphere = { center: center, radius: 0 };
        for (var i = 0; i < vdata.length; i++) {
            sphere.radius = Math.max(sphere.radius, vec3._length(vec3.subtract(vec3(), vdata[i], center)));
        }
        return sphere;
    };
    Internal.definePublicMethods({
        fetchMesh,
        loadMesh,
        createMesh,
        setDrawingMode,
        drawMesh,
        computeWireframe
    });
}
{
    const m_state = {
        mesh: null,
        mode: null,
        shader: null,
        coord: [0, 0],
        color: [1, 1, 1, 1],
        pointSize: 1
    };
    const _enableImmediateMode = function () {
        m_state.mesh = createMesh({ coords: true, colors: true, triangles: false });
        m_state.shader = createShader(`

            attribute vec4 a_vertex;
            attribute vec4 a_texCoord;
            attribute vec4 a_color;

            uniform float pointSize;
            uniform bool  useTexture;
            uniform mat4  u_mvpMatrix;

            varying vec4 color;
            varying vec4 coord;

            void main()
            {
                color        = a_color;
                coord        = a_texCoord;
                gl_Position  = u_mvpMatrix * a_vertex;
                gl_PointSize = pointSize;
			}
        `, `
            
            precision highp float;

            uniform sampler2D texture;
            uniform float pointSize;
            uniform bool  useTexture;
            varying vec4  color;
            varying vec4  coord;

            void main()
            {
                gl_FragColor = color;

                if (useTexture) 
                    gl_FragColor *= texture2D(texture, coord.xy);
            }`);
    };
    const beginMesh = function (mode) {
        if (m_state.shader == null)
            _enableImmediateMode();
        else if (m_state.mode != null)
            throw new Error('mismatched gl.begin() and gl.end() calls');
        m_state.mode = mode;
        m_state.mesh = createMesh({ coords: true, colors: true, triangles: false });
        useShader(m_state.shader);
    };
    const setPointSize = function (size) {
        m_state.pointSize = size;
    };
    const setLineWidth = function (width) {
        gl.lineWidth(width);
    };
    const setVertexColor = function (r, g, b, a) {
        if (r.length == 1)
            m_state.color = [r[0], r[1], r[2], r[3] || 1];
        else
            m_state.color = [r, g, b, a || 1];
    };
    const texCoord = function (u, v) {
        if (u.length == 2)
            m_state.coord = [u, v];
        else
            m_state.coord = [u[0], u[1]];
    };
    const drawVertex = function (x, y, z) {
        const st = m_state;
        const buffers = st.mesh.buffers;
        const vdata = buffers.vertices.data;
        const tdata = buffers.coords.data;
        const cdata = buffers.colors.data;
        cdata.push(st.color);
        tdata.push(st.coord);
        vdata.push(typeof x == "number" ? [x, y, z] : [x[0], x[1], x[2]]);
    };
    const drawVertices = function (...vertices) {
        const st = m_state;
        const buffers = st.mesh.buffers;
        const vdata = buffers.vertices.data;
        const tdata = buffers.coords.data;
        const cdata = buffers.colors.data;
        for (const v of vertices) {
            cdata.push(st.color);
            tdata.push(st.coord);
            vdata.push([v[0], v[1], v[2]]);
        }
    };
    const endMesh = function (draw = true) {
        const st = m_state;
        const m = st.mesh;
        if (st.mode == null)
            throw new Error('mismatched gl.begin() and gl.end() calls');
        Internal.uploadBuffers(m.buffers);
        if (draw) {
            const buf = m.buffers;
            attachShaderAttributes({
                a_vertex: buf.vertices,
                a_texCoord: buf.coords,
                a_color: buf.colors
            });
            setShaderUniforms({
                u_mvpMatrix: mat4.mul(mat4(), getProjectionMatrix(), getTransforms()),
                pointSize: st.pointSize,
                useTexture: !!gl.getParameter(gl.TEXTURE_BINDING_2D)
            });
            setDrawingMode(st.mode);
            drawMesh(st.mesh);
        }
        else {
            const _dmode = st.mode;
            const _psize = st.pointSize;
            const _shd = st.shader;
            const _buf = m.buffers;
            m.onDraw = () => {
                useShader(_shd);
                attachShaderAttributes({
                    a_vertex: _buf.vertices,
                    a_texCoord: _buf.coords,
                    a_color: _buf.colors
                });
                setShaderUniforms({
                    u_mvpMatrix: mat4.mul(mat4(), getProjectionMatrix(), getTransforms()),
                    pointSize: _psize,
                    useTexture: !!gl.getParameter(gl.TEXTURE_BINDING_2D)
                });
                setDrawingMode(_dmode);
            };
        }
        st.mode = null;
        return m;
    };
    Internal.definePublicMethods({
        beginMesh,
        setPointSize,
        setLineWidth,
        setVertexColor,
        texCoord,
        drawVertex,
        drawVertices,
        endMesh
    });
}
{
    const createPlane = function (opts = {}) {
        const detailX = opts.detailX || opts.detail || 1;
        const detailY = opts.detailY || opts.detail || 1;
        const mesh = createMesh({ coords: true, normals: true, triangles: true });
        const vts = mesh.buffers.vertices.data;
        const uvs = mesh.buffers.coords.data;
        const nms = mesh.buffers.normals.data;
        const tri = mesh.buffers.triangles.data;
        for (var y = 0; y <= detailY; y++) {
            const v = y / detailY;
            for (var x = 0; x <= detailX; x++) {
                const u = x / detailX;
                vts.push([2 * u - 1, 2 * v - 1, 0]);
                uvs.push([u, v]);
                nms.push([0, 0, 1]);
                if (x < detailX && y < detailY) {
                    const i = x + y * (detailX + 1);
                    tri.push([i, i + 1, i + detailX + 1]);
                    tri.push([i + detailX + 1, i + 1, i + detailX + 2]);
                }
            }
        }
        Internal.uploadBuffers(mesh.buffers);
        return mesh;
    };
    Internal.definePublicMethods({
        createPlane
    });
}
{
    const pickOctant = function (i) {
        return vec3((i & 1) * 2 - 1, (i & 2) - 1, (i & 4) / 2 - 1);
    };
    const cubeData = [
        [0, 4, 2, 6, -1, 0, 0],
        [1, 3, 5, 7, +1, 0, 0],
        [0, 1, 4, 5, 0, -1, 0],
        [2, 6, 3, 7, 0, +1, 0],
        [0, 2, 1, 3, 0, 0, -1],
        [4, 5, 6, 7, 0, 0, +1]
    ];
    const createBox = function (opts = {}) {
        const detailX = opts.detailX || opts.detail || 1;
        const detailY = opts.detailY || opts.detail || 1;
        const mesh = createMesh({ coords: true, normals: true, triangles: true });
        const vts = mesh.buffers.vertices.data;
        const uvs = mesh.buffers.coords.data;
        const nms = mesh.buffers.normals.data;
        const tri = mesh.buffers.triangles.data;
        for (var i = 0; i < cubeData.length; i++) {
            const data = cubeData[i];
            const v = i * 4;
            for (var j = 0; j < 4; j++) {
                const d = data[j];
                const o = pickOctant(d);
                vts.push([o[0], o[1], o[2]]);
                uvs.push([j & 1, (j & 2) / 2]);
                nms.push(data.slice(4, 7));
            }
            tri.push([v, v + 1, v + 2]);
            tri.push([v + 2, v + 1, v + 3]);
        }
        Internal.uploadBuffers(mesh.buffers);
        return mesh;
    };
    Internal.definePublicMethods({
        createBox
    });
}
{
    const pickOctant = function (i) {
        return vec3((i & 1) * 2 - 1, (i & 2) - 1, (i & 4) / 2 - 1);
    };
    const createSphere = function (opts = {}) {
        const detail = opts.detail || 6;
        const mesh = createMesh({ coords: true, normals: true, triangles: true });
        const vts = mesh.buffers.vertices.data;
        const uvs = mesh.buffers.coords.data;
        const nms = mesh.buffers.normals.data;
        const fcs = mesh.buffers.triangles.data;
        const indexer = new Internal.Indexer();
        for (var octant = 0; octant < 8; octant++) {
            const scale = pickOctant(octant);
            const flip = scale[0] * scale[1] * scale[2] > 0;
            const data = [];
            const tri = (a, b, c) => flip ? [a, c, b] : [a, b, c];
            const fix = (x) => x + (x - x * x) / 2;
            for (var i = 0; i <= detail; i++) {
                for (var j = 0; i + j <= detail; j++) {
                    const a = i / detail;
                    const b = j / detail;
                    const c = (detail - i - j) / detail;
                    const v = vec3(fix(a), fix(b), fix(c));
                    vec3.multiply(v, vec3.normalize(v, v), scale);
                    const idx = indexer.add({
                        vertex: [v[0], v[1], v[2]],
                        coord: scale[1] > 0 ? [1 - a, c] : [c, 1 - a]
                    });
                    data.push(idx);
                }
                if (i > 0) {
                    for (var j = 0; i + j <= detail; j++) {
                        const a = (i - 1) * (detail + 1) + ((i - 1) - (i - 1) * (i - 1)) / 2 + j;
                        const b = i * (detail + 1) + (i - i * i) / 2 + j;
                        fcs.push(tri(data[a], data[a + 1], data[b]));
                        if (i + j < detail)
                            fcs.push(tri(data[b], data[a + 1], data[b + 1]));
                    }
                }
            }
        }
        for (const v of indexer.unique) {
            vts.push(v.vertex);
            uvs.push(v.coord);
        }
        ;
        mesh.buffers.normals.data = vts;
        Internal.uploadBuffers(mesh.buffers);
        return mesh;
    };
    Internal.definePublicMethods({
        createSphere
    });
}
;
{
    const compileSketch = function (path, cb) {
        fetch(path)
            .then(ret => ret.text())
            .then(src => {
            var output = ts.transpile(src, {
                module: ts.ModuleKind.None
            });
            cb(output);
        });
    };
    Internal.defineInternalMethods({
        compileSketch
    });
}
;
{
    onmessage = (e) => {
        switch (e.data[GS_EVENT_TYPE]) {
            case G3_INIT_EVENT:
                _init(e.data);
                break;
            case G3_RESIZE_EVENT:
                Internal.onResize(e.data);
                break;
            case G3_POINTER_MOVE_EVENT:
                Internal.onPointerMove(e.data);
                break;
            case G3_WHEEL_EVENT:
                Internal.onWheelEvent(e.data);
                break;
            case G3_BUTTON_DOWN_EVENT:
                Internal.onButtonDown(e.data);
                break;
            case G3_BUTTON_UP_EVENT:
                Internal.onButtonUp(e.data);
                break;
            case G3_KEY_DOWN_EVENT:
                Internal.onKeyDown(e.data);
                break;
            case G3_KEY_UP_EVENT:
                Internal.onKeyUp(e.data);
                break;
        }
    };
    const _init = function (data) {
        Internal.setBaseUri(data.baseUri);
        Internal.InitGLContext(data.canvas);
        Internal.initView(data.canvas);
        const inc = ((path) => { importScripts(path); }).bind(globalThis);
        const ext = data.sketch.substr(-3).toLocaleLowerCase();
        if (ext == ".js") {
            inc(data.sketch);
        }
        else if (ext == ".ts") {
            inc(data.libDirectory + "/typescriptServices.js");
            Internal.compileSketch(data.sketch, (src => {
                Internal.EvluateAsPublic(src);
            }));
        }
        else
            throw "Unknow file format";
    };
}
//# sourceMappingURL=g3-worker.js.map