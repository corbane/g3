
"use strict"

const AxisX = [1, 0, 0] as [number, number, number]
const AxisY = [0, 1, 0] as [number, number, number]
const AxisZ = [0, 0, 1] as [number, number, number]

declare function resetViewMatrix     ()                                                                                    : void
declare function usePerspectiveView  (fov: number, near: number, far: number)                              : void
declare function frustumView         (left: number, right: number, bottom: number, top: number, near: number, far: number) : void
declare function useOrthogonalView   (l: number, r: number, b: number, t: number, n: number, f: number)                    : void
declare function scaleView           (x: number, y: number, z: number)                                                     : void
declare function zoomView            (zoom: number)                                                                        : void
declare function translateView       (x: number, y: number, z: number)                                                     : void
declare function rotateView          (a: number, x: number, y: number, z: number)                                          : void
declare function getProjectionMatrix ()                                                                                    : mat4

;{   // Projection Matrix Transformations

    const m_proj    = mat4()
    const mat_tmp1  = mat4()
    const mat_tmp2  = mat4()
       
    const resetViewMatrix = function ()
    {
        mat4.identity(m_proj)
    }

    const usePerspectiveView = function (fov: number, near: number, far: number)
    {
        mat4.perspective (m_proj, fov, Width/Height, near, far)
    }

    const frustumView = function (left: number, right: number, bottom: number, top: number, near: number, far: number)
    {
        const tmp    = mat_tmp1
        const result = mat_tmp2

        mat4.frustum  (tmp, left, right, bottom, top, near, far)
        mat4.multiply (result, m_proj, tmp)
        mat4.copy     (result, m_proj)
    }

    const useOrthogonalView = function (l: number, r: number, b: number, t: number, n: number, f: number)
    {
        const ratio = Width / Height
        mat4.ortho (m_proj, l*ratio, r*ratio, b, t, n, f)
    }

    const scaleView = function (x: number, y: number, z: number)
    {
        mat4.scale (m_proj, m_proj, vec3(x, y, z))
    }

    const zoomView = function (zoom: number)
    {
        mat4.translate (m_proj, m_proj, vec3(0, 0, zoom))
    }

    const translateView = function (x: number, y: number, z: number)
    {
        mat4.translate (m_proj, m_proj, vec3(x, y, z))
    }

    const rotateView = function (a: number, x: number, y: number, z: number)
    {
        mat4.rotate (m_proj, m_proj, a, vec3(x, y, z))
    }

//    const lookAt (ex: number, ey: number, ez: number, cx: number, cy: number, cz: number, ux: number, uy: number, uz: number)
//    {
//        const mat    = m_projmat
//        const tmp    = mat_tmp1
//        const result = mat_tmp2
//
//        Matrix.lookAt   (ex, ey, ez, cx, cy, cz, ux, uy, uz, tmp)
//        Matrix.multiply (mat, tmp, result)
//
//        mat.copy(result)
//    }

    const getProjectionMatrix = function (): mat4
    {
        return m_proj
    }

    Internal.definePublicMethods ({
        resetViewMatrix,
        usePerspectiveView,
        useOrthogonalView,
        scaleView,
        zoomView,
        translateView,
        rotateView,
        getProjectionMatrix
    })
}
