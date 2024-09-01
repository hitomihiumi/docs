# Outline

The `Outline` class is designed to add a stroke to a specific list of layers:
- `CircleLayer`
- `EllipseLayer`
- `RectangleLayer`
- `SquareLayer`
- `NgonLayer`
- `TextLayer`
- `ImageLayer`
- `EllipseImageLayer`

The `Outline` has the following parameters:
- `type` - The type of the outline.
- `color` - The color of the outline.
- `stroke` - The line width of the outline.
- `alpha` - The transparency of the outline.

## Usage

```ts
import { LazyCanvas, saveFile, CircleLayer, ImageLayer, Outline } from '@hitomihiumi/lazy-canvas';

let image = new ImageLayer()
    .setX(100) // set the x position of the image
    .setY(100) // set the y position of the image
    .setWidth(175) // set the width of the image
    .setHeight(175) // set the height of the image
    .setImage('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg') // set the image
    .setOutline(
        new Outline() // set the outline of the image
            .setType('center') // set the type of the outline
            .setColor('#ff8a8a') // set the color of the outline
            .setStroke(3) // set the stroke of the outline
    )

let circle = new CircleLayer()
        .setX(400) // set the x position of the circle
        .setY(100) // set the y position of the circle
        .setRadius(75) // set the radius of the circle
        .setColor('#fff') // set the color of the circle
        .setOutline( // set the outline of the circle
            new Outline()
                .setType('center') // set the type of the outline
                .setColor('#ff8a8a') // set the color of the outline
                .setStroke(3) // set the stroke of the outline
        )

let canvas = new LazyCanvas()
    .createNewCanvas(600, 200)
    .addLayers(image, circle); // load our layers

(async () => {
    let buffer = await canvas.renderImage(); // render the canvas to a buffer
    await saveFile(buffer, 'png', 'test'); // save the buffer to a file
})();
```

![Example](https://raw.githubusercontent.com/hitomihiumi/docsholder/master/guide/outline/outline.png)