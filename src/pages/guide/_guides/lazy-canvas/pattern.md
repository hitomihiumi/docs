# Pattern

The `Pattern` class is designed to create patterns based on images or canvases.

The `Pattern` has the following parameters:
- `pattern` - The image or canvas to create the pattern.
- `type` - The repetition type of the pattern.

## Image Pattern

```ts
import { LazyCanvas, saveFile, CircleLayer, Pattern } from '@hitomihiumi/lazy-canvas';

let pattern = new Pattern()
    .setPattern('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg') // set the pattern
    .setType('repeat') // set the type of the pattern

let circle = new CircleLayer()
    .setX(100) // set the x position
    .setY(100) // set the y position
    .setRadius(75) // set the radius
    .setColor(pattern) // set the color

let canvas = new LazyCanvas()
    .createNewCanvas(600, 200)
    .addLayers(circle); // load our layers

(async () => {
    let buffer = await canvas.renderImage(); // render the canvas to a buffer
    await saveFile(buffer, 'png', 'test'); // save the buffer to a file
})();
```

![Example](https://raw.githubusercontent.com/hitomihiumi/docsholder/master/guide/pattern/image.png)

## Canvas Pattern

```ts
import { LazyCanvas, saveFile, RectangleLayer, TextLayer, Font, LazyCanvas, Pattern } from '@hitomihiumi/lazy-canvas';

let patternCanvas = new LazyCanvas()
    .createNewCanvas(130, 90)
    .loadFonts(
        new Font()
            .setPath('./fonts/JoeKubert-Regular.ttf')
            .setFamily('JoeKubert')
            .setWeight('regular')
    )
    .addLayers(
        new RectangleLayer()
            .setX(0)
            .setY(0)
            .setWidth(130)
            .setHeight(90)
            .setColor('#ff8a8a')
            .setCentering('legacy'),
        new TextLayer()
            .setX(65)
            .setY(45)
            .setText('Hello, World!')
            .setFont('JoeKubert')
            .setWeight('regular')
            .setFontSize(20)
            .setColor('#fff')
            .setAlign('center')
            .setBaseline('middle')
            .setRotation(45)
    )

let pattern = new Pattern()
    .setPattern(patternCanvas) // set the pattern
    .setType('repeat') // set the type of the pattern

let ellipse = new EllipseLayer()
    .setX(300) // set the x position
    .setY(100) // set the y position
    .setWidth(400) // set the width
    .setHeight(150) // set the height
    .setRadius(30) // set the radius
    .setColor(pattern) // set the color

let canvas = new LazyCanvas()
    .createNewCanvas(600, 200)
    .addLayers(ellipse); // load our layers

(async () => {
    let buffer = await canvas.renderImage(); // render the canvas to a buffer
    await saveFile(buffer, 'png', 'test'); // save the buffer to a file
})();
```

![Example](https://raw.githubusercontent.com/hitomihiumi/docsholder/master/guide/pattern/canvas.png)