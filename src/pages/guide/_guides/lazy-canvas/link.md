# Link

The `Link` class is intended for copying parameters of other layers and applying them on the current layer. In order for the class to understand which layer it should copy, you need to add a unique ID to the layer you want to copy.

The `Link` class provides the ability to copy the following:
- `size` - The size of the layer.
  - `radius` - For `CircleLayer`, `ArcLayer`, `ArcToLayer` and `NgonLayer`.
  - `width` - For `RectangleLayer`, `EllipseLayer`, `ImageLayer`, `SquareLayer`, and `EllipseImageLayer`.
  - `height` - For `RectangleLayer`, `EllipseLayer`, `ImageLayer`, and `EllipseImageLayer`.
  - `controlPoints` - For `BezierLayer`.
  - `controlPoint` - For `QuadraticLayer`.
  - `angles` - For `ArcLayer`.
  - `clockwise` - For `ArcLayer`.
  - `sides` - For `NgonLayer`.
- `position` - The position of the layer.
    - `x` - The x position of the layer.
    - `y` - The y position of the layer.
- `style` - The style of the layer.
    - `color` - The color of the layer.
    - `fill` - The fill of the layer.
    - `stroke` - The line width of the layer.
    - `lineDash` - The line dash of the layer.
    - `globalAlpha` - The transparency of the layer.
- `shadow` - The shadow of the layer.
    - `color` - The color of the shadow.
    - `blur` - The blur of the shadow.
    - `offsetX` - The x offset of the shadow.
    - `offsetY` - The y offset of the shadow.
- `globalCompositeOperation` - The composite operation of the layer.
- `rotation` - The rotation of the layer.
- `outline` - The outline of the layer.
- `text` - The text of the layer.
- `font` - The font of the text.
- `filter` - The filter of the layer.

## Usage

```ts
import { LazyCanvas, saveFile, CircleLayer, Link } from '@hitomihiumi/lazy-canvas';

let circle = new CircleLayer()
    .setX(100) // set the x position of the circle
    .setY(100) // set the y position of the circle
    .setID('circle') // set the unique ID
    .setRadius(50) // set the radius of the circle
    .setColor('#fff') // set the color of the circle
    .setOutline(
        new Outline() // set the outline of the circle
            .setType('center') // set the type of the outline
            .setColor('#ff8a8a') // set the color of the outline
            .setStroke(2) // set the line width of the outline
    )

let copy = new CircleLayer()
    .setX(400) // set the x position of the circle
    .setY(100) // set the y position of the circle
    .setLink(
        new Link() // set the link of the circle
            .setID('circle')  // set the unique ID
            .copySize(true) // copy the size of the circle
            .copyStyle(true) // copy the style of the circle
            .copyOutline(true) // copy the outline of the circle
    )

let canvas = new LazyCanvas()
    .createNewCanvas(600, 200)
    .addLayers(circle, copy); // load our layers

(async () => {
    let buffer = await canvas.renderImage(); // render the canvas to a buffer
    await saveFile(buffer, 'png', 'test'); // save the buffer to a file
})();
```

![Example](https://raw.githubusercontent.com/hitomihiumi/docsholder/master/guide/link/link.png)
