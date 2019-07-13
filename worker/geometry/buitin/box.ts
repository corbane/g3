
"use strict"

type BoxOptions = Internal.BufferOptions & {
	detail? : number
	detailX?: number
	detailY?: number
}

declare function createBox (options?: BoxOptions): IMesh

;{	// Buit-in Geometries

	const pickOctant = function (i: number)
	{
		return vec3((i & 1) * 2 - 1, (i & 2) - 1, (i & 4) / 2 - 1);
	}

	const cubeData = [
		[0, 4, 2, 6, -1, 0, 0], // -x
		[1, 3, 5, 7, +1, 0, 0], // +x
		[0, 1, 4, 5, 0, -1, 0], // -y
		[2, 6, 3, 7, 0, +1, 0], // +y
		[0, 2, 1, 3, 0, 0, -1], // -z
		[4, 5, 6, 7, 0, 0, +1]  // +z
	]

	const createBox = function (opts: BoxOptions = {})
	{
		const detailX = opts.detailX || opts.detail || 1
		const detailY = opts.detailY || opts.detail || 1

		const mesh = createMesh({ coords: true, normals: true, triangles: true }) as Internal.Mesh
		const vts  = mesh.buffers.vertices.data
		const uvs  = mesh.buffers.coords.data
		const nms  = mesh.buffers.normals.data
		const tri  = mesh.buffers.triangles.data

		for(var i = 0; i < cubeData.length; i++)
		{
			const data = cubeData[i]
			const v = i * 4;
			for(var j = 0; j < 4; j++)
			{
				const d = data[j]
				const o = pickOctant(d)

				vts.push ([ o[0], o[1], o[2] ])
				uvs.push ([j & 1, (j & 2) / 2])
				nms.push (data.slice(4, 7) as [number, number, number])
			}
			tri.push([v, v + 1, v + 2])
			tri.push([v + 2, v + 1, v + 3])
		}

		Internal.uploadBuffers(mesh.buffers)
		return mesh as IMesh
	}

	Internal.definePublicMethods({
		createBox
	})
}
