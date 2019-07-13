/// <reference path="../math/vec3.ts" />
/// <reference path="../math/mat4.ts" />

"use strict"

declare function resetTransformations (): void

declare function pushTransformations (): void
declare function popTransformations  (): void

declare function translate  (offset: LVec3)                                     : void
declare function translate  (offsetX: number, offsetY: number, offsetZ: number) : void
declare function translateX (offset: number)                                    : void
declare function translateY (offset: number)                                    : void
declare function translateZ (offset: number)                                    : void

declare function rotate  (angle: number, x: number, y: number, z: number) : void
declare function rotate  (angle: number, axis: LVec3)                     : void
declare function rotateX (angle: number)                                  : void
declare function rotateY (angle: number)                                  : void
declare function rotateZ (angle: number)                                  : void

declare function scale  (factor: number)                  : void
declare function scale  (factors: LVec3)                  : void
declare function scale  (x: number, y: number, z: number) : void
declare function scaleX (factor: number)                  : void
declare function scaleY (factor: number)                  : void
declare function scaleZ (factor: number)                  : void

declare function getTransforms           () : mat4
declare function getTransformsInverse    () : mat4
declare function getTransformsProjection () : mat4

;{  // Model Transformations

	const m_mvm  = mat4()
	const m_stack = [] as mat4[]

	const pushTransformations = function ()
	{
		m_stack.push(m_mvm)
		mat4.identity(m_mvm)
	}

	const popTransformations = function ()
	{
        const m = m_stack.pop()

        if(m == undefined)
            return

		mat4.copy(m_mvm, m)
	}

	const resetTransformations = function ()
	{
		mat4.identity (m_mvm)
	}

	const translate = function (a: number|LVec3, b?: number, c?: number)
	{
		if(a.length == 3)
			mat4.translate (m_mvm, m_mvm, a as vec3)
		else
			mat4.translate (m_mvm, m_mvm, vec3(a as number, b as number, c as number))
	}

	const translateX = function (offset: number)
	{
		mat4.translate (m_mvm, m_mvm, [offset, 0, 0])
	}

	const translateY = function (offset: number)
	{
		mat4.translate (m_mvm, m_mvm, [0, offset, 0])
	}

	const translateZ = function (offset: number)
	{
		mat4.translate (m_mvm, m_mvm, [0, 0, offset])
	}

	const rotate = function (rad: number, a: number|LVec3, b?: number, c?: number)
	{
		if(a.length == 3)
			mat4.rotate (m_mvm, m_mvm, rad, a as vec3)
		else
			mat4.rotate (m_mvm, m_mvm, rad, vec3(a as number, b as number, c as number))
	}

	const rotateX = function (rad: number)
	{
		mat4.rotateX (m_mvm, m_mvm, rad)
	}

	const rotateY = function (rad: number)
	{
		mat4.rotateY (m_mvm, m_mvm, rad)
	}

	const rotateZ = function (rad: number)
	{
		mat4.rotateZ (m_mvm, m_mvm, rad)
	}

	const scale = function (a: number|LVec3, b?: number, c?: number)
	{
		if(a.length == 3)
			mat4.scale (m_mvm, m_mvm, a as LVec3)
		else
			mat4.scale (m_mvm, m_mvm, [a as number, (b || a) as number, (c || a) as number])
	}

	const scaleX = function (factor: number)
	{
		mat4.scale (m_mvm, m_mvm, [factor, 0, 0])
	}

	const scaleY = function (factor: number)
	{
		mat4.scale (m_mvm, m_mvm, [0, factor, 0])
	}

	const scaleZ = function (factor: number)
	{
		mat4.scale (m_mvm, m_mvm, [0, 0, factor])
	}

	const getTransforms = function ()
	{
		return m_mvm
	}

	const getTransformsInverse = function ()
	{
		return mat4.invert(mat4(), m_mvm) as mat4
	}

	const getTransformsProjection = function ()
	{
		return mat4.multiply (mat4(), getProjectionMatrix (), m_mvm)
	}

	Internal.definePublicMethods ({
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
	})
}
