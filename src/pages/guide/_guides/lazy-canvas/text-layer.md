# Text

In the current guide, we will look at the `TextLayer` class. This is a layer that allows you to create both single-line and multi-line text.

## TextLayer

The `TextLayer` class is used to add text to the canvas. It has the following parameters:
- `x` - The x position of the text.
- `y` - The y position of the text.
- `text` - The text to be added to the canvas.
- `font` - The font of the text.
- `fontSize` - The font size of the text.
- `color` - The color of the text.
- `maxWidth` - The maximum width of the text.
- `maxHeight` - The line height of the text.
- `textAlign` - The text alignment of the text.
- `textBaseline` - The text baseline of the text.
- `direction` - The direction of the text.

### Single-Line Text

```ts
import { LazyCanvas, saveFile, TextLayer } from '@hitomihiumi/lazy-canvas'; // import the module

let text = new TextLayer() // create a new text layer
    .setText('Hello, World!') // set the text
    .setAlign('center') // set the text alignment
    .setX(300) // set the x position
    .setY(100) // set the y position
    .setColor('#ff8a8a') // set the color
    .setFont('Arial') // set the font
    .setFontSize(40) // set the font size

let canvas = new LazyCanvas()
    .createNewCanvas(600, 200)
    .addLayers(text); // load our layer

(async () => {
    let buffer = await canvas.renderImage(); // render the canvas to a buffer
    await saveFile(buffer, 'png', 'test'); // save the buffer to a file
})();
```

![Example](https://raw.githubusercontent.com/hitomihiumi/docsholder/master/guide/text-layer/single-line.png)

### Multi-Line Text

```ts
import { LazyCanvas, saveFile, TextLayer } from '../dist'; // import the module

let text = new TextLayer() // create a new text layer
    .setText(`Hello, World! Hello, User!`) // set the text
    .setMultiline(true) // set the text to be multiline
    .setWidth(300) // set the max width
    .setHeight(200) // set the max height
    .setAlign('center') // set the text alignment
    .setX(300) // set the x position
    .setY(100) // set the y position
    .setColor('#ff8a8a') // set the color
    .setFont('Arial') // set the font
    .setFontSize(40) // set the font size
    .setBaseline('middle'); // set the baseline

let canvas = new LazyCanvas()
    .createNewCanvas(600, 200)
    .addLayers(text); // load our layer

(async () => {
    let buffer = await canvas.renderImage(); // render the canvas to a buffer
    await saveFile(buffer, 'png', 'test'); // save the buffer to a file
})();
```

![Example](https://raw.githubusercontent.com/hitomihiumi/docsholder/master/guide/text-layer/multi-line.png)

## Fonts

LazyCanvas supports loading custom fonts from TTF files. To load a custom font, you need to use the `loadFonts` function.

The `Font` has the following parameters:
- `name` - The name of the font.
- `path` - The path to the font file.
- `weight` - The weight of the font.

```ts
import { LazyCanvas, saveFile, TextLayer, Font } from '@hitomihiumi/lazy-canvas'; // import the module

let font = new Font()
    .setFamily("JoeKubert")
    .setWeight("regular")
    .setPath("./fonts/v_CCJoeKubert-Doubled_v1.3.ttf")

let text = new TextLayer() // create a new text layer
    .setText(`Hello, World!`) // set the text
    .setAlign('center') // set the text alignment
    .setX(300) // set the x position
    .setY(100) // set the y position
    .setColor('#ff8a8a') // set the color
    .setFont('JoeKubert') // set the font
    .setWeight('regular') // set the weight
    .setFontSize(40) // set the font size
    .setBaseline('middle'); // set the baseline

let canvas = new LazyCanvas()
    .createNewCanvas(600, 200)
    .addLayers(text) // load our layer
    .loadFonts(font); // load our font

(async () => {
    let buffer = await canvas.renderImage(); // render the canvas to a buffer
    await saveFile(buffer, 'png', 'test'); // save the buffer to a file
})();
```

![Example](https://raw.githubusercontent.com/hitomihiumi/docsholder/master/guide/text-layer/font.png)