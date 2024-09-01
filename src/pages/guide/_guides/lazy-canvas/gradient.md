# Gradient

`Gradient` class is designed to create 3 types of gradients, they can be used for the color parameter everywhere except for shadows (does not support the canvas itself).

List of supported gradient types:
- `linear` - Linear gradient.
- `radial` - Radial gradient.
- `conic` - Conic gradient.

## Linear Gradient

The `LinearGradient` has the following parameters:
- `points` - It is an array of objects with the following properties:
    - `x` - the x-coordinate of the point
    - `y` - the y-coordinate of the point
- `colorPoints` - It is an array of objects with the following properties:
    - `color` - the color of the point
    - `position` - the offset of the point (form 0 to 1)

```ts
const { LazyCanvas, Gradient, CircleLayer } = require('@hitomihiumi/lazy-canvas');

let gradient = new Gradient()
    .setPoints({ x: 25, y: 25 }, { x: 175, y: 175 }) // set the gradient points
    .addColorPoints(  // add color points
        { color: '#FF0000', position: 0.2 },
        { color: '#00FF00', position: 0.5 },
        { color: '#0000FF', position: 0.8 }
    )
    .setType('linear') // set the gradient type

let circle = new CircleLayer()
    .setX(100) // set the x position
    .setY(100) // set the y position
    .setRadius(75) // set the radius
    .setColor(gradient) // set the color

let canvas = new LazyCanvas()
    .createNewCanvas(600, 200)
    .addLayers(circle); // load our layers

(async () => {
    let buffer = await canvas.renderImage(); // render the canvas to a buffer
    await saveFile(buffer, 'png', 'test'); // save the buffer to a file
})();
```

![Example](https://raw.githubusercontent.com/hitomihiumi/docsholder/master/guide/gradient/linear.png)

## Radial Gradient

The `RadialGradient` has the following parameters:
- `point` - It is an array of objects with the following properties:
    - `x` - the x-coordinate of the point
    - `y` - the y-coordinate of the point
- `radius` - the radius of the gradient
- `colorPoints` - It is an array of objects with the following properties:
    - `color` - the color of the point
    - `position` - the offset of the point (form 0 to 1)

```ts
const { LazyCanvas, Gradient, CircleLayer } = require('@hitomihiumi/lazy-canvas');

let gradient = new Gradient()
    .addColorPoints( // add color points
        { color: '#ff0000', position: 0 },
        { color: '#00ff00', position: 0.5 },
        { color: '#0000ff', position: 1 }
    ).setPoints( // set the points
        { x: 100, y: 100 }
    ).setType('radial') // set the type
    .setRadius(75) // set the radius

let circle = new CircleLayer()
    .setX(100) // set the x position
    .setY(100) // set the y position
    .setRadius(75) // set the radius
    .setColor(gradient) // set the color

let canvas = new LazyCanvas()
    .createNewCanvas(600, 200)
    .addLayers(circle); // load our layers

(async () => {
    let buffer = await canvas.renderImage(); // render the canvas to a buffer
    await saveFile(buffer, 'png', 'test'); // save the buffer to a file
})();
```

![Example](https://raw.githubusercontent.com/hitomihiumi/docsholder/master/guide/gradient/radial.png)

## Conic Gradient

The `ConicGradient` has the following parameters:
- `point` - It is an array of objects with the following properties:
  - `x` - the x-coordinate of the point
  - `y` - the y-coordinate of the point
- `colorPoints` - It is an array of objects with the following properties:
  - `color` - the color of the point
  - `position` - the offset of the point (form 0 to 1)
- `angle` - the angle of the point (form 0 to 360)

```ts
const { LazyCanvas, Gradient, CircleLayer } = require('@hitomihiumi/lazy-canvas');

let gradient = new Gradient()
    .addColorPoints( // add color points
        { color: '#ff0000', position: 0 },
        { color: '#00ff00', position: 0.5 },
        { color: '#0000ff', position: 1 }
    ).setPoints( // set the points
        { x: 100, y: 100 }
    ).setType('conic') // set the type

let circle = new CircleLayer()
    .setX(100) // set the x position
    .setY(100) // set the y position
    .setRadius(75) // set the radius
    .setColor(gradient) // set the color

let canvas = new LazyCanvas()
    .createNewCanvas(600, 200)
    .addLayers(circle); // load our layers

(async () => {
    let buffer = await canvas.renderImage(); // render the canvas to a buffer
    await saveFile(buffer, 'png', 'test'); // save the buffer to a file
})();
```

![Example](https://raw.githubusercontent.com/hitomihiumi/docsholder/master/guide/gradient/conic.png)