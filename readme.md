
Cette bibliothèque est inspirée du projet [p5.js](https://p5js.org/).
Elle est spécialement dédié aux application 3d sur des navigateurs moderne ou à son intégration dans des applications de bureau à l’aide d’[electron](https://electronjs.org/)

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
const cube   = createBox ()
const shader = buitinShader ("uvColor")

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

OnResize = function ()
{
    usePerspectiveView (45, 0.1, 1000)
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
    useShader(shader, {
        u_mvp     : getTransformsProjection (),
        brightness: 1
    })

    // Ici nous dessinons les faces du cube
    setDrawingMode ("triangles")
    drawMesh       (cube)

    // Nous re-mettons à jour le shader actif
    setShaderUniforms({
        brightness: 0
    })

    // Et ici nous dessinons les arrêtes du cube
    setDrawingMode ("lines")
    drawMesh       (cube)
}

// Lance l'animation du cube
play ()

```
