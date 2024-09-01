# Getting Started

This is a simple module designed to simplify the interaction with canvas, for people who do not know how to work with it.

## Installation

```sh
$ npm i @hitomihiumi/lazy-canvas@latest
```

## Basic Usage

This shows importing the main class and creating a new 600 by 200 pixel canvas.

```ts
import { LazyCanvas, saveFile } from '@hitomihiumi/lazy-canvas'; // import the module

let canvas = new LazyCanvas()
    .createNewCanvas(600, 200); // create a new canvas with width 600 and height 200
```
Importing the `saveFile` function is optional, it just makes it easier to save the buffer, what we get after rendering, to a file. `LazyCanvas` has several output options: `NodeJS.ArrayBufferView` and `SKRSContext2D`. The `NodeJS.ArrayBufferView` is used to save the buffer to a file, and the `SKRSContext2D` is used to interact with the canvas. 

```ts
(async () => {
    let buffer = await canvas.renderImage(); // render the canvas to a buffer
    await saveFile(buffer, 'png', 'test'); // save the buffer to a file
})();
```

Here is our image, it is empty because we have not added any layers, so let's add them.

![Example](https://raw.githubusercontent.com/hitomihiumi/docsholder/master/guide/getting-started/empty.png)

By default the output is in `NodeJS.ArrayBufferView`, but this can be switched by specifying `'ctx'` inside the `renderImage` function, or by importing `RenderOutput` and selecting the `Context` property.

```ts
import { LazyCanvas, RenderOutput } from '@hitomihiumi/lazy-canvas';


let canvas = new LazyCanvas()
    .createNewCanvas(600, 200);

(async () => {
    let ctx = await canvas.renderImage(RenderOutput.Context); // returns a SKRSContext2D
})();
```