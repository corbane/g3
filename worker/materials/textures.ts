/// <reference path="../io/ressource.ts" />

type TextureSource = ITexture2D | ITextureCude // | IResource<ITextureCude>  | IResource<ITexture2D>

interface TextureOptions
{
    format?   : number
    type?     : number
    filter?   : number
    magFilter?: number
    minFilter?: number
    wrap?     : number
    wrapS?    : number
    wrapT?    : number
    data?     : ArrayBufferView
}

interface ITextureCudeImages
{
    xneg: any,
    xpos: any,
    yneg: any,
    ypos: any,
    zneg: any,
    zpos: any
}

interface ITexture2D
{
    readonly width: number
    readonly height: number
    readonly imageElement?: TexImageSource
}

interface ITextureCude
{
    images: ITextureCudeImages
}


declare function fetchTexture      (url: string, options?: TextureOptions)                   : ITexture2D
declare function fetchTextureCube  (imgs: ITextureCudeImages)                                : ITextureCude
declare function createTexture     (width: number, height: number, options?: TextureOptions) : ITexture2D
declare function createTextureCude (imgs: ITextureCudeImages)                                : ITextureCude
declare function useTexture        (texture: TextureSource, position?: number)               : TextureSource
declare function swapTextures      (texA: ITexture2D, texB: ITexture2D)                      : void

declare namespace Internal
{
    interface BindableTexture
    {
        GL_HANDLE: WebGLTexture
        GL_TARGET: number
        isBinded: boolean
        bindIndex: number
    }

    type LSampler = Sampler2D | SamplerCube

    type Sampler2D  = { -readonly [K in keyof ITexture2D]: ITexture2D[K] }
                    & BindableTexture & { GL_TARGET: 0x0DE1 /*TEXTURE_2D*/ }
                    & {
                        GL_FORMAT: number
                        GL_TYPE  : number
                    }

    type SamplerCube = { -readonly [K in keyof ITextureCude]: ITextureCude[K] }
                     & BindableTexture & { GL_TARGET: 0x8513 /*TEXTURE_CUBE_MAP*/ }
}

;{  // Texture

    const fetchTexture = function (url: string, opts?: TextureOptions)
    {
        const tex = {} as ITexture2D
        var img = null as ImageBitmap

        Internal.once ("resource-loaded", () => {
            Object.assign (tex, _initTexture (img, opts))
        })

        loadImage (url, (image) => { img = image })

        return tex
    }

    const fetchTextureCube = function (imgs: ITextureCudeImages)
    {
        return createTextureCude ({
            xneg: fetchTexture (imgs.xneg),
            xpos: fetchTexture (imgs.xpos),
            yneg: fetchTexture (imgs.yneg),
            ypos: fetchTexture (imgs.ypos),
            zneg: fetchTexture (imgs.zneg),
            zpos: fetchTexture (imgs.zpos),
        })
    }

    const _initTexture = function (img: TexImageSource, opts: TextureOptions = {})
    {
        const tex = createTexture(img.width, img.height, opts) as Internal.Sampler2D
        
        try
        {
            gl.texImage2D(gl.TEXTURE_2D, 0, tex.GL_FORMAT, tex.GL_FORMAT, tex.GL_TYPE, img)
            tex.imageElement = img
        }
        catch(e)
        {
            if(location.protocol == 'file:')
                throw new Error('image not loaded for security reasons (serve this page over "http://" instead)')
            
            else
                throw new Error('image not loaded for security reasons (image must originate from the same ' +
                    'domain as this page or use Cross-Origin Resource Sharing)')
        }

        if(opts.minFilter && opts.minFilter != gl.NEAREST && opts.minFilter != gl.LINEAR)
            gl.generateMipmap(gl.TEXTURE_2D);

        return tex as ITexture2D
    }

    const createTexture = function (w: number, h: number, opts: TextureOptions = {}): ITexture2D
    {
        const 
        NEAREST             = 0x2600,
        HALF_FLOAT_OES      = 0x8D61,
        FLOAT               = 0x1406,
        TEXTURE_MAG_FILTER  = 0x2800,
        TEXTURE_MIN_FILTER  = 0x2801,
        TEXTURE_WRAP_S      = 0x2802,
        TEXTURE_WRAP_T      = 0x2803,
        TEXTURE_2D          = 0x0DE1,
        UNPACK_FLIP_Y_WEBGL = 0x9240

        const magFilter = opts.filter || opts.magFilter || gl.LINEAR //  0x2601 
        const minFilter = opts.filter || opts.minFilter || gl.LINEAR //  0x2601 
        const wrapS     = opts.wrap   || opts.wrapS     || gl.CLAMP_TO_EDGE //  0x812F 
        const wrapT     = opts.wrap   || opts.wrapT     || gl.CLAMP_TO_EDGE //  0x812F 

        const t = <Internal.Sampler2D> {
            GL_HANDLE : gl.createTexture(),
            GL_TARGET : gl.TEXTURE_2D,
            width     : w,
            height    : h,
            GL_FORMAT : opts.format || 0x1908, // RGBA
            GL_TYPE   : opts.type   || 0x1401  // UNSIGNED_BYTE
        }

        if(t.GL_TYPE === gl.FLOAT)
        {
            if (!useGLExtention("OES_texture_float"))
                throw new Error('OES_texture_float is required but not supported');
            
            if ((minFilter !==  gl.NEAREST || magFilter !== gl.NEAREST) && !useGLExtention("OES_texture_float_linear"))
                throw new Error('OES_texture_float_linear is required but not supported');
        }
        else if (t.GL_TYPE === HALF_FLOAT_OES)
        {
            if (!useGLExtention("OES_texture_half_float"))
                throw new Error('OES_texture_half_float is required but not supported');
            
            if((minFilter !== gl.NEAREST || magFilter !== gl.NEAREST) && !useGLExtention("OES_texture_half_float_linear"))
                throw new Error('OES_texture_half_float_linear is required but not supported');
        }

        gl.bindTexture   (gl.TEXTURE_2D, t.GL_HANDLE)
        gl.pixelStorei   (gl.UNPACK_FLIP_Y_WEBGL, 1)
        gl.texParameteri (gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, magFilter)
        gl.texParameteri (gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter)
        gl.texParameteri (gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrapS)
        gl.texParameteri (gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrapT)
        gl.texImage2D    (gl.TEXTURE_2D, 0, t.GL_FORMAT, w, h, 0, t.GL_FORMAT, t.GL_TYPE, opts.data || null)
    
        return t
    }

    const createTextureCude = function (imgs: ITextureCudeImages)
    {
        const tex = <Internal.SamplerCube> {
            GL_HANDLE    : gl.createTexture(),
            images: imgs
        }

        const _create = function ()
        {
            gl.bindTexture   (TEXTURE_CUBE_MAP, tex.GL_HANDLE)

            gl.pixelStorei   (UNPACK_FLIP_Y_WEBGL, 1)

            gl.texParameteri (TEXTURE_CUBE_MAP, TEXTURE_MAG_FILTER, LINEAR)
            gl.texParameteri (TEXTURE_CUBE_MAP, TEXTURE_MIN_FILTER, LINEAR)

            gl.texParameteri (TEXTURE_CUBE_MAP, TEXTURE_WRAP_S, CLAMP_TO_EDGE)
            gl.texParameteri (TEXTURE_CUBE_MAP, TEXTURE_WRAP_T, CLAMP_TO_EDGE)

            gl.texImage2D    (TEXTURE_CUBE_MAP_NEGATIVE_X, 0, RGB, RGB, UNSIGNED_BYTE, imgs.xneg)
            gl.texImage2D    (TEXTURE_CUBE_MAP_POSITIVE_X, 0, RGB, RGB, UNSIGNED_BYTE, imgs.xpos)
            gl.texImage2D    (TEXTURE_CUBE_MAP_NEGATIVE_Y, 0, RGB, RGB, UNSIGNED_BYTE, imgs.yneg)
            gl.texImage2D    (TEXTURE_CUBE_MAP_POSITIVE_Y, 0, RGB, RGB, UNSIGNED_BYTE, imgs.ypos)
            gl.texImage2D    (TEXTURE_CUBE_MAP_NEGATIVE_Z, 0, RGB, RGB, UNSIGNED_BYTE, imgs.zneg)
            gl.texImage2D    (TEXTURE_CUBE_MAP_POSITIVE_Z, 0, RGB, RGB, UNSIGNED_BYTE, imgs.zpos)
        }

        if (Internal.isLoading ())
            Internal.once ("resource-loaded", _create)
        else
            _create ()

        return tex as ITextureCude
    }

    /**
     * Switch the [texA] texture with [texB], useful for the ping-pong rendering
     * technique used in multi-stage rendering.
     */
    const swapTextures = function (texA: ITexture2D, texB: ITexture2D)
    {
        var tmpA;
        const A = texA as Internal.Sampler2D
        const B = texB as Internal.Sampler2D

        tmpA = A.GL_HANDLE;
        A.GL_HANDLE = B.GL_HANDLE;
        B.GL_HANDLE = tmpA;

        tmpA    = A.width;
        A.width = B.width;
        B.width = tmpA;

        tmpA     = A.height;
        A.height = B.height;
        B.height = tmpA;
    }

    // Bind this texture to the given texture unit (0-7, defaults to 0).
    const useTexture = function (texture: TextureSource, pos: number = 0)
    {
        //const tex = (texture as Internal.Resource)[IS_RESOURCE]
        //          ? (texture as IResource<any>).data as Internal.LSampler
        //          :  texture as any                  as Internal.LSampler
        const tex = texture as Internal.LSampler

        if(pos > -1)
        {
            gl.activeTexture (gl.TEXTURE0 + pos)
            gl.bindTexture   (tex.GL_TARGET, tex.GL_HANDLE)
            tex.isBinded  = true
            tex.bindIndex = pos
        }
        else if(tex.isBinded)
        {
            gl.activeTexture (gl.TEXTURE0 + tex.bindIndex)
            gl.bindTexture   (tex.GL_TARGET, null)
            tex.isBinded = false
        }

        return tex as TextureSource
    }

    Internal.definePublicMethods ({
        fetchTexture,
        fetchTextureCube,
        createTexture,
        createTextureCude,
        useTexture,
        swapTextures,
    })

}