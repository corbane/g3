
"use strict"

type SphereOptions = Internal.BufferOptions & {
    detail?: number,
    radius?: number
}

declare function createSphere (options?: SphereOptions): IMesh

;{

	const pickOctant = function (i: number)
	{
		return vec3((i & 1) * 2 - 1, (i & 2) - 1, (i & 4) / 2 - 1);
	}

	const createSphere = function (opts: SphereOptions = {})
	{
		const detail  = opts.detail || 6

		const mesh = createMesh({ coords: true, normals: true, triangles: true }) as Internal.Mesh
		const vts  = mesh.buffers.vertices.data
		const uvs  = mesh.buffers.coords.data
		const nms  = mesh.buffers.normals.data
		const fcs  = mesh.buffers.triangles.data
		
		const indexer = new Internal.Indexer<{ vertex: [number, number, number], coord?: [number, number] }>();

		for(var octant = 0; octant < 8; octant++)
		{
			const scale = pickOctant(octant);
			const flip = scale[0] * scale[1] * scale[2] > 0
			const data = [] as number[];

			const tri = (a: number, b: number, c: number): [number, number, number] => flip ? [a, c, b] : [a, b, c];
			const fix = (x: number) => x + (x - x * x) / 2;
		
			for(var i = 0; i <= detail; i++)
			{
				// Generate a row of vertices on the surface of the sphere
				// using barycentric coordinates.
				for(var j = 0; i + j <= detail; j++)
				{
					const a = i / detail
					const b = j / detail
					const c = (detail - i - j) / detail

				 	const v = vec3(fix(a), fix(b), fix(c))
					vec3.multiply (v, vec3.normalize (v, v), scale)

					const idx = indexer.add({
						vertex : [ v[0], v[1], v[2] ],
						coord  : scale[1] > 0 ? [1 - a, c] : [c, 1 - a]
					})

					data.push(idx)
				}

				// Generate triangles from this row and the previous row.
				if(i > 0)
				{
					for(var j = 0; i + j <= detail; j++)
					{
						const a = (i - 1) * (detail + 1) + ((i - 1) - (i - 1) * (i - 1)) / 2 + j
						const b = i * (detail + 1) + (i - i * i) / 2 + j

						fcs.push(tri(data[a], data[a + 1], data[b]))

						if(i + j < detail)
							fcs.push(tri(data[b], data[a + 1], data[b + 1]));
					}
				}
			}
		}

		// Reconstruct the geometry from the indexer.

		for(const v of indexer.unique)
		{
			vts.push (v.vertex)
			uvs.push (v.coord)
		}

		;(mesh as Internal.Mesh).buffers.normals.data = vts

		Internal.uploadBuffers (mesh.buffers)
		return mesh as IMesh
	}

	Internal.definePublicMethods ({
		createSphere
	})
}
