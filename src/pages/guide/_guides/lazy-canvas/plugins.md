# Plugins

In this guide you can check out an example plugin for LazyCanvas.

To get started, you should realize that we can only extend the functionality of the `LazyCanvas` class and no more. To create your own layers with methods of their drawing, you should use `BaseLayer` class to create a layer class and `BaseMethod` to create a drawing method.

## How To

The first thing you must do is import the appropriate classes:

```ts
import { LazyCanvasPlugin as Plugin, LazyCanvas } from "@hitomihiumi/lazy-canvas";
```

Then you can create a new plugin:

```ts
export class LazyCanvasPlugin extends Plugin {
    private lazycanvas: LazyCanvas | null;

    constructor() {
        super();

        this.lazycanvas = null;
    }

    public onload(lazycanvas: LazyCanvas): void {
        this.lazycanvas = lazycanvas;
        Object.assign(lazycanvas, {
            getCanvas: this.getCanvas.bind(this)
        });
    }

    public unload(lazycanvas: LazyCanvas): void {
        this.lazycanvas = null;

        console.log("Plugin unloaded!");
    }

    private getCanvas(): LazyCanvas | null {
        return this.lazycanvas;
    }
}
``` 

The `onload` and `unload` functions must necessarily be present in the class, otherwise you will not have access to the class itself. In the example we added the `getCanvas` function, which returns the `LazyCanvas` class or `null`.

Now for the plugin functions to be displayed correctly in the LazyCanvas class you need to make declaration merging. We will do it using our `index.ts` file:
```ts
import { LazyCanvasPlugin } from "./Plugin";
import { LazyCanvas } from "@hitomihiumi/lazy-canvas";

export { LazyCanvasPlugin as Plugin };

declare module "@hitomihiumi/lazy-canvas" {
    interface LazyCanvas {
        getCanvas(): LazyCanvas | null;
    }
}
```

Yes, you definitely need to import the `LazyCanvas` class although we don't use it.

Now we have a working plugin with new functionality, let's try to use it:

```ts
import { LazyCanvas } from "@hitomihiumi/lazy-canvas";
import { Plugin } from "some-plugin-name";

let canvas = new LazyCanvas({ plugins: [new Plugin()] }) as LazyCanvas;

console.log(canvas.getCanvas());
```

And now a bit of explanation why declare the `canvas` variable as `LazyCanvas` if it is one anyway. The subtlety is that without such an action the IDE will not prompt us for added functions.

[I'll leave you a link to a repository with an example plugin.](https://github.com/hitomihiumi/plugin-example)