# Advanced Manipulation

In the previous section, we learned how to create a simple canvas and draw on it. In this section, we will learn how to manipulate the layers in more advanced ways.

## Layer Manipulation

All layers have the following parameters for more fine-tuning:
- `shadow` - The shadow of the layer.
  - `color` - The color of the shadow.
  - `blur` - The blur of the shadow.
  - `offsetX` - The x offset of the shadow.
  - `offsetY` - The y offset of the shadow.
- `globalAlpha` - The transparency of the layer.
- `globalCompositeOperation` - The composite operation of the layer.
- `rotation` - The rotation of the layer.

### Shadow

```ts
import { LazyCanvas, saveFile, CircleLayer } from '@hitomihiumi/lazy-canvas';

let circle = new CircleLayer()
    .setX(100) // set the x position of the circle
    .setY(100) // set the y position of the circle
    .setRadius(50) // set the radius of the circle
    .setColor('#ff0000') // set the color of the circle
    .setShadowColor('#000000') // set the shadow color of the circle
    .setShadowBlur(10) // set the shadow blur of the circle
    .setShadowOffsetX(5) // set the shadow offset x of the circle
    .setShadowOffsetY(5); // set the shadow offset y of the circle

let bg = new CircleLayer()
    .setX(100)
    .setY(100)
    .setRadius(90)
    .setColor('#fff')

let canvas = new LazyCanvas()
    .createNewCanvas(600, 200)
    .addLayers(bg, circle);

(async () => {
    let buffer = await canvas.renderImage(); // render the canvas to a buffer
    await saveFile(buffer, 'png', 'test'); // save the buffer to a file
})();
```

![Example](https://raw.githubusercontent.com/hitomihiumi/docsholder/master/guide/advanced-manipulation/shadow.png)

### Global Alpha

```ts
import { LazyCanvas, saveFile, CircleLayer } from '@hitomihiumi/lazy-canvas';

let circle = new CircleLayer()
    .setX(100) // set the x position of the circle
    .setY(100) // set the y position of the circle
    .setRadius(50) // set the radius of the circle
    .setColor('#ff8a8a') // set the color of the circle
    .setAlpha(0.4) // set the transparency of the circle

let canvas = new LazyCanvas()
    .createNewCanvas(600, 200)
    .addLayers(circle);

(async () => {
    let buffer = await canvas.renderImage(); // render the canvas to a buffer
    await saveFile(buffer, 'png', 'test'); // save the buffer to a file
})();
```

![Example](https://raw.githubusercontent.com/hitomihiumi/docsholder/master/guide/advanced-manipulation/alpha.png)

### Global Composite Operation

```ts
import { LazyCanvas, saveFile, CircleLayer } from '@hitomihiumi/lazy-canvas'; 

let circle = new CircleLayer()
    .setX(100) // set the x position of the circle
    .setY(100) // set the y position of the circle
    .setRadius(50) // set the radius of the circle
    .setColor('#ff8a8a') // set the color of the circle
    .setCompositeOperation('xor'); // set the composite operation of the circle

let bg = new CircleLayer()
    .setX(100)
    .setY(100)
    .setRadius(90)
    .setColor('#fff')

let canvas = new LazyCanvas()
    .createNewCanvas(600, 200)
    .addLayers(bg, circle);

(async () => {
    let buffer = await canvas.renderImage(); // render the canvas to a buffer
    await saveFile(buffer, 'png', 'test'); // save the buffer to a file
})();
```

![Example](https://raw.githubusercontent.com/hitomihiumi/docsholder/master/guide/advanced-manipulation/composite-operation.png)

### Rotation

```ts
import { LazyCanvas, saveFile, SquareLayer } from '@hitomihiumi/lazy-canvas';

let square = new SquareLayer()
    .setX(100) // set the x position of the square
    .setY(100) // set the y position of the square
    .setColor('#ff8a8a') // set the color of the square
    .setWidth(100) // set the width of the square
    .setRotation(45) // set the rotation of the square

let canvas = new LazyCanvas()
    .createNewCanvas(600, 200)
    .addLayers(square);

(async () => {
    let buffer = await canvas.renderImage(); // render the canvas to a buffer
    await saveFile(buffer, 'png', 'test'); // save the buffer to a file
})();
```

![Example](https://raw.githubusercontent.com/hitomihiumi/docsholder/master/guide/advanced-manipulation/rotation.png)