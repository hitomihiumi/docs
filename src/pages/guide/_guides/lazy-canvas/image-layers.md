# Image Layers

In this guide, we will learn how to add images to the canvas and manipulate them.

LazyCanvas has 2 different layers for images:
- `ImageLayer` - This is a simple layer that can be used to add images to the canvas.
- `EllipseImageLayer` - This is a layer that can be used to add images to the canvas in the shape of an ellipse.

## ImageLayer

The `ImageLayer` class is used to add images to the canvas. It has the following parameters:
- `x` - The x position of the image.
- `y` - The y position of the image.
- `width` - The width of the image.
- `height` - The height of the image.
- `image` - The image to be added to the canvas.

## EllipseImageLayer

The `EllipseImageLayer` class is used to add images to the canvas in the shape of an ellipse. It has the following parameters:
- `x` - The x position of the image.
- `y` - The y position of the image.
- `width` - The width of the image.
- `height` - The height of the image.
- `radius` - The radius of the ellipse.
- `image` - The image to be added to the canvas.

## Adding Images

To add an image to the canvas, we need to create a new `ImageLayer` and add it to the canvas. You can also use `EllipseImageLayer` to add a rounded image.

```ts
import { LazyCanvas, saveFile, ImageLayer, EllipseImageLayer } from '@hitomihiumi/lazy-canvas';

let image = new ImageLayer()
    .setX(100) // set the x position
    .setY(100) // set the y position
    .setWidth(175) // set the width
    .setHeight(175) // set the height
    .setImage('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg'); // set the image

let ellipseimage = new EllipseImageLayer()
    .setX(400) // set the x position
    .setY(100) // set the y position
    .setWidth(175) // set the width
    .setHeight(175) // set the height
    .setRadius(30) // set the radius
    .setImage('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg'); // set the image

let canvas = new LazyCanvas()
    .createNewCanvas(600, 200)
    .addLayers(image, ellipseimage); // load our layers

(async () => {
    let buffer = await canvas.renderImage(); // render the canvas to a buffer
    await saveFile(buffer, 'png', 'test'); // save the buffer to a file
})();
```

![Example](https://raw.githubusercontent.com/hitomihiumi/docsholder/master/guide/image-layers/image.png)

## Filters

LazyCanvas has a built-in filter system that can be used to apply filters to images. The following filters are available:
- `grayscale` - Converts the image to grayscale.
- `sepia` - Applies a sepia filter to the image.
- `invert` - Inverts the colors of the image.
- `brightness` - Adjusts the brightness of the image.
- `contrast` - Adjusts the contrast of the image.
- `blur` - Applies a blur filter to the image (fast, but worse).
- `gaussian` - Applies a gaussian blur filter to the image (slow, but good).
- `dither565` - Applies a dither565 filter to the image.
- `normalize` - Normalizes the image.

For some of the above filters it is necessary to specify the force parameter:
- `blur` - The force parameter is the blur radius.
- `gaussian` - The force parameter is the blur radius.
- `brightness` - The force parameter is the brightness value.
- `contrast` - The force parameter is the contrast value.

To apply a filter to an image, we need to call the `setFilter` method on the `ImageLayer` or `EllipseImageLayer` object.

```ts
import { LazyCanvas, saveFile, ImageLayer, EllipseImageLayer, Filter } from '@hitomihiumi/lazy-canvas';

let grayscale = new Filter()
    .setType('grayscale'); // set the filter type

let gaussian = new Filter()
    .setType('gaussian')
    .setOption(1); // set the filter type and option

let image = new ImageLayer()
    .setX(100) // set the x position
    .setY(100) // set the y position
    .setWidth(175) // set the width
    .setHeight(175) // set the height
    .setFilter(grayscale) // set the filter
    .setImage('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg'); // set the image

let ellipseimage = new EllipseImageLayer()
    .setX(400) // set the x position
    .setY(100) // set the y position
    .setWidth(175) // set the width
    .setHeight(175) // set the height
    .setRadius(30) // set the radius
    .setFilter(gaussian) // set the filter
    .setImage('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg'); // set the image

let canvas = new LazyCanvas()
    .createNewCanvas(600, 200)
    .addLayers(image, ellipseimage); // load our layers

(async () => {
    let buffer = await canvas.renderImage(); // render the canvas to a buffer
    await saveFile(buffer, 'png', 'test'); // save the buffer to a file
})();
```

![Example](https://raw.githubusercontent.com/hitomihiumi/docsholder/master/guide/image-layers/filter.png)