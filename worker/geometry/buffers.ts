/// <reference lib="es2020" />

"use strict"
    
interface IBuffer <T = BufferSource, D = number[]>
{
	readonly name         : string
	readonly ctor         : new(data: D) => T
	readonly data         : D[]
}

/* Provides a simple method of uploading data to a GPU buffer. Example usage:
*
*     var vertices = new Buffer(gl.ARRAY_BUFFER, Float32Array);
*     var indices  = new Buffer(gl.ELEMENT_ARRAY_BUFFER, Uint16Array);
*     vertices.data = [[0, 0, 0], [1, 0, 0], [0, 1, 0], [1, 1, 0]];
*     indices.data  = [[0, 1, 2], [2, 1, 3]];
*     vertices.compile();
*     indices.compile();
*/

// https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#Buffers
enum BufferTarget {
	ARRAY_BUFFER         = 0x8892, // gl.ARRAY_BUFFER,
	ELEMENT_ARRAY_BUFFER = 0x8893, // gl.ELEMENT_ARRAY_BUFFER,
}

;{	// Buffers

	//
	// "vertex buffer"	  			= 0x8892, // gl.ARRAY_BUFFER			"vertex[ ]buffer"
	// "index buffer"	  			= 0x8893, // gl.ELEMENT_ARRAY_BUFFER	"index [b]uffer"
	// /* WebGL 2 */
	// "copy read buffer" 			=       , "copy r[e]ad buffer"
	// "copy write buffer" 			=       , "copy w[r]ite buffer"
	// "transform feedback buffer" 	=       , "transf[o]rm feedback buffer"
	// "uniform buffer"" 			=       , "unifor[m] buffer""
	// "pixel pack buffer" 			=       , "pixel [p]ack buffer"
	// "pixel unpack buffer" 		=       , "pixel [u]npack buffer"

	const createVertexBuffer = function (name: string)
	{
        return createBuffer (name, 0x8892 /* gl.ARRAY_BUFFER */, Float32Array)
	}

	const createIndexBuffer = function (name: string)
	{
		return createBuffer(name, 0x8893 /* gl.ELEMENT_ARRAY_BUFFER */, Uint16Array)
	}

	const isVBO = function (buffer: IBuffer)
	{
		return (buffer as Internal.Buffer).GL_TARGET == 0x8892 // gl.ARRAY_BUFFER
	}

	const isIBO = function (buffer: IBuffer)
	{
		return (buffer as Internal.Buffer).GL_TARGET == 0x8893 // gl.ELEMENT_ARRAY_BUFFER
	}

    type TData = [number, number] | [number, number, number] | [number, number, number, number]
	const createBuffer = function <T extends BufferSource> (name: string, target: BufferTarget, ctor: new(data: number[]) => T)
	{
		var esize: number
		var gtype: number

		// https://www.khronos.org/opengl/wiki/OpenGL_Type

		const n = ctor.name
		switch (n[0])
		{
		case 'I':
			
			switch (n[3])
			{
			case '8': /* Int8Array  */ gtype = 0x1400 /* BYTE  */ ; esize = 1 ; break
			case '1': /* Int16Array */ gtype = 0x1402 /* SHORT */ ; esize = 2 ; break
			default : /* Int32Array */ gtype = 0x1404 /* INT   */ ; esize = 4 ; break
			}
			break

		case 'U':
			
			switch (n[4])
			{
			case '8': /* Uint8ClampedArray */
			          /* Uint8Array  */ gtype = 0x1401 /* UNSIGNED_BYTE  */ ; esize = 1 ; break
			case '1': /* Uint16Array */ gtype = 0x1403 /* UNSIGNED_SHORT */ ; esize = 2 ; break
			default : /* Uint32Array */ gtype = 0x1405 /* UNSIGNED_INT   */ ; esize = 4 ; break
			}
			break

		case 'F':
			
			switch (n[5])
			{
			case '3': /* Float32Array */ gtype = 0x1406 /* FLOAT */ ; esize = 4 ; break
			default : /* Float64Array */ throw "Not yet implemented"
			}
			break

		case 'B':
			
			/* BigInt64Array | BigUint64Array */
			throw "Not yet implemented"

		default :
		
			/* DataView | ArrayBuffer */
			gtype = 0x1400 /* BYTE  */ ; esize = 1
		}

		return <Internal.Buffer <T>> {
			name         : name,
			ctor         : ctor,
			GL_TYPE      : gtype,
			GL_TARGET    : target,
			GL_HANDLE    : null,
			data         : [],
			length       : 0,
			element_size : esize,
			element_count: 0
		}
	}

	/**
	 * Upload the buffer data to the GPU in preparation for rendering. The
	 * data must be a list of lists where each inner list has the same length. For
	 * example, each element of data for vertex normals would be a list of length three.
	 * This will remember the data length and element length for later use by shaders.
	 * 
	 * @param dynamic `gl.STATIC_DRAW` if `false` or `gl.DYNAMIC_DRAW` if `true` (defaults `false`).
	 */
	const uploadBuffer = function (buf: Internal.Buffer, dynamic = false)
	{
		const data    = buf.data.flat()
		const usage   = dynamic ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW
		const spacing = data.length / buf.data.length

		if(spacing != Math.round(spacing))
			throw new Error('buffer elements not of consistent size, average size is ' + spacing)

		buf.GL_HANDLE     = buf.GL_HANDLE || gl.createBuffer()
		buf.length        = data.length
		buf.element_size  = spacing
		buf.element_count = buf.data.length

		gl.bindBuffer (buf.GL_TARGET, buf.GL_HANDLE);
		gl.bufferData (buf.GL_TARGET, new buf.ctor(data), usage);
	}

	const uploadBuffers = function (buffers: { [k: string]: Internal.Buffer }, dynamic = false)
	{
		const
		DYNAMIC_DRAW = 0x88E8,
		STATIC_DRAW  = 0x88E4

		for(const bname in buffers)
		{
			const buf     = buffers[bname]
			const data    = buf.data.flat()
			const usage   = dynamic ? DYNAMIC_DRAW : STATIC_DRAW
			const spacing = data.length / buf.data.length

			if(spacing != Math.round(spacing))
				throw new Error('buffer elements not of consistent size, average size is ' + spacing)

			buf.GL_HANDLE     = buf.GL_HANDLE || gl.createBuffer()
			buf.length        = data.length
			buf.element_size  = spacing
			buf.element_count = buf.data.length

			gl.bindBuffer (buf.GL_TARGET, buf.GL_HANDLE);
			gl.bufferData (buf.GL_TARGET, new buf.ctor(data), usage);
		}
	}

	Internal.defineInternalMethods (
	{
		isVBO,
		isIBO,
		//@ts-ignore number[] & [number, number] = error
		createVertexBuffer,
		//@ts-ignore number[] & [number, number] = error
		createIndexBuffer,
		uploadBuffer,
		uploadBuffers
	})
}

declare namespace Internal
{
	interface BufferOptions
	{
		normals?  : boolean
		lines?    : boolean
		coords?   : boolean
		colors?   : boolean
		triangles?: boolean
    }
    
	type Buffer <T = BufferSource, D = number[]> =
	{ 
		-readonly [P in keyof IBuffer <T, D>]: IBuffer <T, D> [P] 
	}
	& {
		GL_TYPE      : number
		GL_TARGET    : BufferTarget
		GL_HANDLE    : WebGLBuffer
		length       : number
		element_size : number
		element_count: number
	}
	
	function isVBO (buffer: IBuffer): boolean
	function isIBO (buffer: IBuffer): boolean
	
	function createVertexBuffer (name: string)     : Buffer <Float32Array>
	function createVertexBuffer (name: "vertices") : Buffer <Float32Array, [number, number, number]>
	function createVertexBuffer (name: "normals")  : Buffer <Float32Array, [number, number, number]>
	function createVertexBuffer (name: "colors")   : Buffer <Float32Array, [number, number, number, number]>
	function createVertexBuffer (name: "coords")   : Buffer <Float32Array, [number, number]>

	function createIndexBuffer  (name: string)      : Buffer <Uint16Array>
	function createIndexBuffer  (name: "lines")     : Buffer <Uint16Array, [number, number]>
	function createIndexBuffer  (name: "triangles") : Buffer <Uint16Array, [number, number, number]>

	function uploadBuffer  (buffer: IBuffer, dynamic?: boolean)                  : void
	function uploadBuffers (buffers: { [k: string]: IBuffer }, dynamic?: boolean): void
}
