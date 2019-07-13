
"use strict"

type PlaneOptions = Internal.BufferOptions & {
	detail?: number
	detailX?: number
	detailY?: number
}

declare function createPlane  (options?: PlaneOptions) : IMesh

;{

	const createPlane = function (opts: PlaneOptions = {})
	{
		const detailX = opts.detailX || opts.detail || 1
		const detailY = opts.detailY || opts.detail || 1

		const mesh = createMesh ({ coords: true, normals: true, triangles: true }) as Internal.Mesh
		const vts  = mesh.buffers.vertices.data
		const uvs  = mesh.buffers.coords.data
		const nms  = mesh.buffers.normals.data
		const tri  = mesh.buffers.triangles.data

		for(var y = 0; y <= detailY; y++)
		{
			const v = y / detailY
			for(var x = 0; x <= detailX; x++)
			{
				const u = x / detailX
				vts.push([2 * u - 1, 2 * v - 1, 0])
				uvs.push([u, v])
				nms.push([0, 0, 1])

				if(x < detailX && y < detailY)
				{
					const i = x + y * (detailX + 1);
					tri.push([i, i + 1, i + detailX + 1]);
					tri.push([i + detailX + 1, i + 1, i + detailX + 2]);
				}
			}
		}

		Internal.uploadBuffers (mesh.buffers)
		return mesh as IMesh
	}

	Internal.definePublicMethods ({
		createPlane
	})
}
