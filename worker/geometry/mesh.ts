/// <reference path="../math/vec3.ts" />
/// <reference path="./buffers.ts" />
/// <reference path="../materials/shaders.ts" />

"use strict"

interface IMesh
{
		onDraw?: () => void
        readonly buffers: IMeshBuffers
}

interface IMeshBuffers
{
		/* Vertex buffers */
		readonly vertices   : IBuffer <Float32Array, [number, number, number]>
		readonly normals?   : IBuffer <Float32Array, [number, number, number]>
		readonly colors?    : IBuffer <Float32Array, [number, number, number, number]>
		readonly coords?    : IBuffer <Float32Array, [number, number]>
		
		/* Index buffers */
		readonly triangles? : IBuffer <Uint16Array, [number, number, number]>
		readonly lines?     : IBuffer <Uint16Array, [number, number]>

		/* Custom buffers */
		readonly [key:string]: IBuffer
}

declare function fetchMesh        (path: string)                    : IMesh
declare function loadMesh         (json: object)                    : IMesh
declare function createMesh       (options?: Internal.BufferOptions): IMesh
declare function setDrawingMode   (mode: Internal.DrawingMode)      : void
declare function drawMesh         (mesh: IMesh)                     : void
declare function computeWireframe (mesh: IMesh)                     : IMesh

declare namespace Internal
{
	type Mesh =
	{ 
		onDraw?: () => void
		buffers: MeshBuffers
	}

	type MeshBuffers =
	{ 
		/* Vertex buffers */
		vertices   : Buffer <Float32Array, [number, number, number]>
		normals?   : Buffer <Float32Array, [number, number, number]>
		colors?    : Buffer <Float32Array, [number, number, number, number]>
		coords?    : Buffer <Float32Array, [number, number]>
		
		/* Index buffers */
		triangles? : Buffer <Uint16Array, [number, number, number]>
		lines?     : Buffer <Uint16Array, [number, number]>

		/* Custom buffers */
		[key:string]: Buffer
	}
	
	type DrawingMode = "points"        	// gl.POINTS
				     | "line strip"		// gl.LINE_STRIP
				     | "line loop"		// gl.LINE_LOOP
				     | "lines"			// gl.LINES
				     | "triangle strip"	// gl.TRIANGLE_STRIP
				     | "triangle fan"	// gl.TRIANGLE_FAN
					 | "triangles"		// gl.TRIANGLES
}

namespace Internal
{
	// Represents indexed triangle geometry with arbitrary additional attributes.
	// You need a shader to draw a mesh; meshes can't draw themselves.
	//
	// A mesh is a collection of `GL.Buffer` objects which are either vertex buffers
	// (holding per-vertex attributes) or index buffers (holding the order in which
	// vertices are rendered). By default, a mesh has a position vertex buffer called
	// `vertices` and a triangle index buffer called `triangles`. New buffers can be
	// added using `addVertexBuffer()` and `addIndexBuffer()`. Two strings are
	// required when adding a new vertex buffer, the name of the data array on the
	// mesh instance and the name of the GLSL attribute in the vertex shader.
	//
	// Example usage:
	//
	//     var mesh = new GL.Mesh({ coords: true, lines: true });
	//
	//     // Default attribute "vertices", available as "gl_Vertex" in
	//     // the vertex shader
	//     mesh.vertices = [[0, 0, 0], [1, 0, 0], [0, 1, 0], [1, 1, 0]];
	//
	//     // Optional attribute "coords" enabled in constructor,
	//     // available as "gl_TexCoord" in the vertex shader
	//     mesh.coords = [[0, 0], [1, 0], [0, 1], [1, 1]];
	//
	//     // Custom attribute "weights", available as "weight" in the
	//     // vertex shader
	//     mesh.addVertexBuffer('weights', 'weight');
	//     mesh.weights = [1, 0, 0, 1];
	//
	//     // Default index buffer "triangles"
	//     mesh.triangles = [[0, 1, 2], [2, 1, 3]];
	//
	//     // Optional index buffer "lines" enabled in constructor
	//     mesh.lines = [[0, 1], [0, 2], [1, 3], [2, 3]];
	//
	//     // Upload provided data to GPU memory
	//     mesh.compile();

	// Generates indices into a list of unique objects from a stream of objects
	// that may contain duplicates. This is useful for generating compact indexed
	// meshes from unindexed data.
	export class Indexer<T>
	{
		unique = [] as T[]
		indices = [] as number[]
		map = {} as { [key:string]: number };

		// Adds the object `obj` to `unique` if it hasn't already been added. Returns
		// the index of `obj` in `unique`.
		add (obj: T)
		{
			var key = JSON.stringify(obj);
			if(!(key in this.map))
			{
				this.map[key] = this.unique.length;
				this.unique.push(obj);
			}
			return this.map[key];
		}
	}
}

;{
	let m_drawmode: Internal.DrawingMode = "triangles"

    const fetchMesh = function (path: string)
    {
        var data = null as object
        const mesh = {} as IMesh

        Internal.once ("resource-loaded", () => {
            Object.assign (mesh, loadMesh (data))
        })

        loadJson (path, (json) => data = json)

        return mesh
    }

    type JsonMesh =  {
        vertices? : [number, number, number][]
        normals?  : [number, number, number][]
        lines?    : [number, number][]
        coords?   : [number, number][]
        colors?   : [number, number, number, number][]
        triangles?: [number, number, number][]
    }

	const loadMesh = function (json: JsonMesh)
	{
		const opts = <Internal.BufferOptions> {
			coords    : 'coords'    in json,
			normals   : 'normals'   in json,
			colors    : 'colors'    in json,
			triangles : 'triangles' in json,
			lines     : 'lines'     in json,
		}

		const mesh = createMesh(opts) as Internal.Mesh

		(mesh.buffers.vertices as Internal.Buffer).data = json.vertices

		if (opts.coords)    mesh.buffers.coords.data    = json.coords
		if (opts.normals)   mesh.buffers.normals.data   = json.normals
		if (opts.colors)    mesh.buffers.colors.data    = json.colors
		if (opts.triangles) mesh.buffers.triangles.data = json.triangles
		if (opts.lines)     mesh.buffers.lines.data     = json.lines

		Internal.uploadBuffers(mesh.buffers)
		return mesh as IMesh
	}

	const createMesh = function (options: Internal.BufferOptions = {})
	{
        const bufs: Internal.MeshBuffers =  {
            vertices: Internal.createVertexBuffer ("vertices")
        }

        if(options.normals)    bufs.normals   = Internal.createVertexBuffer ("normals")
        if(options.colors)     bufs.colors    = Internal.createVertexBuffer ("colors")
		if(options.coords)     bufs.coords    = Internal.createVertexBuffer ("coords")
        if(options.triangles)  bufs.triangles = Internal.createIndexBuffer  ("triangles")
        if(options.lines)      bufs.lines     = Internal.createIndexBuffer  ("lines")
        
        return <IMesh> <Internal.Mesh> {
            buffers: bufs
        }
	}

	const setDrawingMode = function (mode: Internal.DrawingMode)
	{
		m_drawmode = mode
	}

//	const uploadMesh = function (mesh: IMesh)
//	{
//		GS.uploadBuffers (mesh)
//	}

	const drawMesh = function (mesh: IMesh)
	{
		const buffers = mesh.buffers as Internal.MeshBuffers
		const onDraw  = mesh.onDraw

		if (onDraw)
			onDraw()

		const idxbuf = buffers[m_drawmode] 
		const GL_MODE = getGLDrawingType(m_drawmode)
		if (idxbuf)
		{
			gl.bindBuffer   (gl.ELEMENT_ARRAY_BUFFER, idxbuf.GL_HANDLE)
			gl.drawElements (GL_MODE, idxbuf.length, idxbuf.GL_TYPE, 0)
		}
		else
		{
			gl.drawArrays (GL_MODE, 0, buffers.vertices.element_count)
		}
	}

	const getGLDrawingType = function (mode: Internal.DrawingMode)
	{
		// "line- -stri[p]"
		// "tria-n-gle [s]trip
		// "tria-n-gle [f]an"
		// "poin[t]s"
		// "line[s]"
		// "line[ ]loop"
		// "tria[n]gles"

		if(mode.length < 10)
		{
			switch (mode[4]) {
			case 't': return gl.POINTS
			case 's': return gl.LINES
			case ' ': return gl.LINE_LOOP
			case 'n': return gl.TRIANGLES
			}
		}
		else
		{
			switch (mode[9]) {
			case 'p': return gl.LINE_STRIP
			case 's': return gl.TRIANGLE_STRIP
			case 'f': return gl.TRIANGLE_FAN;
			}
        }
        
        throw "Bad drawing mode value"
	}

    /**
     * Transform all vertices by `matrix` and all normals by the inverse transpose of `matrix`.
     */
	const transform = function (mesh: IMesh, matrix: mat4)
	{
        const vdata   = (mesh as Internal.Mesh).buffers.vertices.data
		const normals = (mesh as Internal.Mesh).buffers.normals
		
        for(var i = 0; i < vdata.length; i++)
            vec3.transformMat4(vdata[i], vdata[i], matrix)
        
		if(normals)
		{
			const ndata = normals.data
            const invTrans = mat4.invert(mat4(), matrix)

            if(invTrans == null)
                throw "Can not get inverse model-view matrix"

			mat4.transpose(invTrans, invTrans)
            
			for(var i = 0; i < ndata.length; i++)
			{
				vec3.transformMat4 (ndata[i], ndata[i], invTrans)
				vec3.normalize     (ndata[i], ndata[i])
			}
        }
        
		Internal.uploadBuffers(mesh.buffers)
		return mesh
    }
    
	/**
	 * Populate the `lines` index buffer from the `triangles` index buffer.
	 */
    const computeWireframe = function (mesh: IMesh)
	{
        const indexer    = new Internal.Indexer<[number, number]>()
        const buffers   = mesh.buffers as Internal.MeshBuffers
		const triangles = buffers.triangles

        if(triangles == undefined)
            throw "A triangles buffer is required for computeNormals"

		for(var i = 0; i < triangles.data.length; i++)
		{
			const t = triangles.data[i]
			for(var j = 0; j < t.length; j++)
			{
				const a = t[j]
				const b = t[(j + 1) % t.length]
				indexer.add([Math.min(a, b), Math.max(a, b)])
			}
		}

		if(!buffers.lines)
            buffers.lines = Internal.createIndexBuffer("lines")

        buffers.lines.data = indexer.unique
        
        Internal.uploadBuffers(mesh.buffers)
        
        return mesh
    }
    
    /**
	 * Computes a new normal for each vertex from the average normal of the
	 * neighboring triangles. This means adjacent triangles must share vertices
	 * for the resulting normals to be smooth.
     */
    const computeNormals = function (mesh: IMesh)
	{
        const buffers = (mesh as Internal.Mesh).buffers
		const vdata   = buffers.vertices.data
        
        if(buffers.triangles == undefined)
            throw "A triangles buffer is required for computeNormals"

		const tdata   = buffers.triangles.data
		const nms     = [] as vec3[]

		for(var i = 0; i < vdata.length; i++)
			nms[i] = vec3();

		for(var i = 0; i < tdata.length; i++)
		{
            const t = tdata[i]
            
			const a = vec3(vdata[t[0]])
			const b = vec3(vdata[t[1]])
            const c = vec3(vdata[t[2]])
			
			const n = vec3()
			vec3.cross(n, vec3.subtract(vec3(), b, a), vec3.subtract(vec3(), c, a))
			vec3.normalize(n, n)

			vec3.add (nms[t[0]], nms[t[0]], n)
			vec3.add (nms[t[1]], nms[t[1]], n)
			vec3.add (nms[t[2]], nms[t[2]], n)
		}

        if(!buffers.normals)
			buffers.normals = Internal.createVertexBuffer ("normals")
			
        const ndata = buffers.normals.data

		for(var i = 0; i < vdata.length; i++)
			vec3.normalize(ndata[i], nms[i])

		Internal.uploadBuffers(mesh.buffers)
		return mesh
	}

    /**
     * Computes the axis-aligned bounding box, which is an object whose `min` and
	 * `max` properties contain the minimum and maximum coordinates of all vertices.
     */
    const getAABB = function (mesh: IMesh) // TODO: rename to getBoundingBox
	{
        const vdata  = (mesh as Internal.Mesh).buffers.vertices.data

		var min = vec3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
		var max = vec3.negate(vec3(), min)

		for(var i = 0; i < vdata.length; i++)
		{
            var v = vec3(vdata[i])
            
			vec3.min(min, min, v)
			vec3.max(max, max, v)
		}

		return { min: min, max: max }
	}

    /**
     * Computes a sphere that contains all vertices (not necessarily the smallest
	 * sphere). The returned object has two properties, `center` and `radius`.
     */
	const getBoundingSphere = function (mesh: IMesh)
	{
        const vdata  = (mesh as Internal.Mesh).buffers.vertices.data
        const aabb   = getAABB(mesh)
        const center = vec3.add(vec3(), aabb.min, aabb.max)
		vec3.divide (center, center, [2, 2, 2])

		const sphere = { center: center, radius: 0 }
		
        
		for(var i = 0; i < vdata.length; i++)
		{
			//     radius =      max(       radius, vec3(vdata[i] - center).length                       )
			sphere.radius = Math.max(sphere.radius, vec3._length(vec3.subtract (vec3(), vdata[i], center)))
        }
        
		return sphere
	}
	
	Internal.definePublicMethods ({
        fetchMesh,
		loadMesh,
		createMesh,
		setDrawingMode,
		drawMesh,
		computeWireframe
	})
}
