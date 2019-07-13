
Cette bibliothèque est inspirée du projet [p5.js](https://p5js.org/).
Elle spécialement dédié aux application 3d sur des navigateurs moderne ou à son intégration dans des applications bureau à l’aide d’[electron](https://electronjs.org/)

Les objectifs généraux sont:
- Dissocié l'application 3s du reste de la page web à l'aide de thread séparer (voir [OffscreenCanvas](https://developers.google.com/web/updates/2018/08/offscreen-canvas))
- Avoir un code source complétement typé à l'aide de [Typescript](https://www.typescriptlang.org/)
- Avoir une autocomplétions complète
- Exposer l'api 3d sur la portée globale (l'utilisation de thread séparé le permettant)
- Toujours utiliser l'api à l'aide de la convention de nommage « verbe / sujet » tel que « createBox » ou « drawMesh »

> !! Cette bibliothèque est en cours de développement, ne pas ce fier à son bon fonctionnement !!

Démarrage rapide
==============================================================================

Commencez par créer deux fichiers ; « `index.html` » et « `sketch.ts` »

```html
<!-- index.html -->
<!DOCTYPE html>
<html>

<head>
    <style>
        canvas {
            width: 100%;
            height: 100vw;
        }
    </style>
    <script src="./g3.js"></script>
</head>

<body>

    <!-- L'attribut « data-sketch » peut définir un fichier Javascript ou Typescript.
         Dans le cas d'un fichier Typescript le code sera automatiquement compilé -->
    <canvas data-sketch="./sketch.ts"></canvas>

</body>

</html>
```

```ts
/* sketch.ts */

// C’est trois lignes permettent l’autocomplétions dans un éditeur
// tel que Visual-Code ou Atom
/// <reference no-default-lib="true"/>
/// <reference lib="webworker" />
/// <reference path="./g3-worker.d.ts" />

// Définitions d’un cube et de son shader dans la portée globale
const cube = createBox ()
const shader = createShader (`

    // Vertex Shader

    attribute vec3 a_vertex;
    attribute vec3 a_normal;
    uniform mat4 u_mvproj;
    varying vec3 v_normal;

    void main ()
    {
        v_normal = a_normal;
        gl_Position = u_mvproj * vec4 (a_vertex, 1.);
    }
`,`
    // Fragment Shader

    precision highp float;

    varying vec3 v_normal;

    void main()
    {
        gl_FragColor = vec4(v_normal * 0.5 + 0.5, 1.0);
    }
`)

// L'événement « OnSetup » est appelé une seule fois,
// après que toutes les ressources de portée globale soit chargées
OnSetup = function ()
{
    useCullFace ()

    usePerspectiveView (45, 0.1, 1000)

    useShader (shader, {
        a_vertex: cube.buffers.vertices,
        a_normal: cube.buffers.normals
    })
}

OnDraw = function (milliseconds: number)
{
    // Nous allons faire tourner le cube de 45° par seconde
    const angle = radians (45) * (milliseconds / 1000)

    // Créer une page blanche
    clearView ()

    // Nous remettons les transformations cube a son emplacement de départ
    resetTransformations ()

    // Nous l’éloignions un peu de la camera
    translate (0, 0, -5)

    // Nous le faisons tourner
    rotateX (angle)
    rotateY (angle)

    // Puis un effet zoom
    scale (remap ([-1, 1], [0.1, 1.2], sin (angle)))

    // Nous mettons à jour le shader actif
    setShaderData ({
        u_mvproj: getTransformsProjection ()
    })

    // Et enfin nous dessinons le cube
    drawMesh (cube)
}

// Lance l'animation du cube
play ()

```
