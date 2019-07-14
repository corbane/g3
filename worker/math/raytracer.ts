
"use strict"

// Provides a convenient raytracing interface.

// This is the object used to return hit test results. If there are no
// arguments, the constructed argument represents a hit infinitely far
// away.
class HitTest
{
    t: number
    hit: LVec3
    normal: LVec3

    constructor(t?: number, hit?: LVec3, normal?: LVec3)
    {
        this.t      = arguments.length ? t : Number.MAX_VALUE;
        this.hit    = hit;
        this.normal = normal;
    }

    // Changes this object to be the closer of the two hit test results.
    mergeWith (other: HitTest)
    {
        if(other.t > 0 && other.t < this.t)
        {
            this.t      = other.t;
            this.hit    = other.hit;
            this.normal = other.normal;
        }
    }
};


// This will read the current modelview matrix, projection matrix, and viewport,
// reconstruct the eye position, and store enough information to later generate
// per-pixel rays using `getRayForPixel()`.
//
// Example usage:
//
//     var tracer = new GL.Raytracer();
//     var ray = tracer.getRayForPixel(
//       gl.canvas.width / 2,
//       gl.canvas.height / 2);
//     var result = GL.Raytracer.hitTestSphere(
//       tracer.eye, ray, new GL.Vector(0, 0, 0), 1);
class Raytracer
{
    eye: LVec3
    ray00: LVec3
    ray10: LVec3
    ray01: LVec3
    ray11: LVec3
    viewport: LVec4

    constructor ()
    {
        var v = gl.getParameter(gl.VIEWPORT) as LVec4
        var m = getTransforms ()

        var axisX  = vec3 (m[0], m[4], m[8]);
        var axisY  = vec3 (m[1], m[5], m[9]);
        var axisZ  = vec3 (m[2], m[6], m[10]);
        var offset = vec3 (m[3], m[7], m[11]);

        this.eye = vec3 ( - v3.dot (offset, axisX), - v3.dot (offset, axisY), - v3.dot (offset, axisZ) )

        var minX = v[0], maxX = minX + v[2];
        var minY = v[1], maxY = minY + v[3];
        this.ray00 = v3.subtract (unProject (minX, minY, 1), this.eye);
        this.ray10 = v3.subtract (unProject (maxX, minY, 1), this.eye);
        this.ray01 = v3.subtract (unProject (minX, maxY, 1), this.eye);
        this.ray11 = v3.subtract (unProject (maxX, maxY, 1), this.eye);
        this.viewport = v;
    }

    // Returns the ray originating from the camera and traveling through the pixel `x, y`.
    getRayForPixel (x: number, y: number)
    {
        x = (x - this.viewport[0]) / this.viewport[2]
        y = 1 - (y - this.viewport[1]) / this.viewport[3]

        var ray0 = v3.lerp(this.ray00, this.ray10, x)
        var ray1 = v3.lerp(this.ray01, this.ray11, x)

        return v3.normalize (v3.lerp(ray0, ray1, y))
    }
};


const unProject = function(winX: number, winY: number, winZ: number, modelview?: LMat4, projection?: LMat4, viewport?: LVec2)
{
    modelview  = modelview  || getTransforms ()
    projection = projection || getProjectionMatrix ()
    viewport   = viewport   || gl.getParameter(gl.VIEWPORT)

    var point = vec3 (
      (winX - viewport[0]) / viewport[2] * 2 - 1,
      (winY - viewport[1]) / viewport[3] * 2 - 1,
      winZ * 2 - 1
    )
    
    const mvp = m4.multiply (projection, modelview)
    return m4.transformVec3 (point, m4.invert (mvp))
  };

namespace Raytracer
{
    const M = Math

    // Traces the ray starting from `origin` along `ray` against the axis-aligned box
    // whose coordinates extend from `min` to `max`. Returns a `HitTest` with the
    // information or `null` for no intersection.
    //
    // This implementation uses the [slab intersection method](http://www.siggraph.org/education/materials/HyperGraph/raytrace/rtinter3.htm).
    export const hitTestBox = function (origin: LVec3, ray: LVec3, min: LVec3, max: LVec3)
    {
        const tMin  = v3.divide (v3.subtract (min, origin), ray)
        const tMax  = v3.divide (v3.subtract (max, origin), ray)
        const t1    = v3.min(tMin, tMax)
        const t2    = v3.max(tMin, tMax)
        const tNear = M.max(M.max(t1[0], t1[1]), t1[3])
        const tFar  = M.max(M.max(t2[0], t2[1]), t2[3])

        if (tNear > 0 && tNear < tFar)
        {
            const epsilon = [1.0e-6, 1.0e-6, 1.0e-6] as LVec3
            const hit     = v3.add (origin, v3.multiply (ray, [tNear, tNear, tNear]))

            min = v3.add (min, epsilon)
            max = v3.subtract (max, epsilon)

            return new HitTest(tNear, hit, vec3 (
                (hit[0] > max[0] ? 1:0) - (hit[0] < min[0] ? 1:0),
                (hit[1] > max[1] ? 1:0) - (hit[1] < min[1] ? 1:0),
                (hit[2] > max[2] ? 1:0) - (hit[2] < min[2] ? 1:0)
            ))
        }

        return null
    };

    // Traces the ray starting from `origin` along `ray` against the sphere defined
    // by `center` and `radius`. Returns a `HitTest` with the information or `null`
    // for no intersection.
    export const hitTestSphere = function (origin: LVec3, ray: LVec3, center: LVec3, radius: number)
    {
        var offset       = v3.subtract (origin, center)
        var a            = v3.dot (ray, ray)
        var b            = 2 * v3.dot (ray, offset)
        var c            = v3.dot (offset, offset) - radius * radius;
        var discriminant = b * b - 4 * a * c;

        if(discriminant > 0)
        {
            var t   = ( -b - M.sqrt(discriminant) ) / (2 * a)
            var hit = v3.add (origin, v3.multiply (ray, [t, t, t]));
            
            return new HitTest(t, hit, v3.divide (v3.subtract (hit, center), [radius, radius, radius])); 
        }

        return null;
    }

    // Traces the ray starting from `origin` along `ray` against the triangle defined
    // by the points `a`, `b`, and `c`. Returns a `HitTest` with the information or
    // `null` for no intersection.
    export const hitTestTriangle = function (origin: LVec3, ray: LVec3, a: LVec3, b: LVec3, c: LVec3)
    {
        var ab     = v3.subtract   (b, a)
        var ac     = v3.subtract   (c, a)
        var normal = v3.normalize  (v3.cross (ab, ac))
        var t      = v3.dot ( normal, v3.subtract (a, origin) ) / v3.dot (normal, ray)

        if(t > 0)
        {
            var hit   = v3.add (origin, v3.multiply (ray, [t, t, t]))
            var toHit = v3.subtract (hit, a)

            var dot00 = v3.dot (ac, ac)
            var dot01 = v3.dot (ac, ab)
            var dot02 = v3.dot (ac, toHit)
            var dot11 = v3.dot (ab, ab)
            var dot12 = v3.dot (ab, toHit)

            var divide = dot00 * dot11 - dot01 * dot01;
            var u      = (dot11 * dot02 - dot01 * dot12) / divide;
            var v      = (dot00 * dot12 - dot01 * dot02) / divide;

            if(u >= 0 && v >= 0 && u + v <= 1)
                return new HitTest(t, hit, normal);
        }

        return null;
    };
}
