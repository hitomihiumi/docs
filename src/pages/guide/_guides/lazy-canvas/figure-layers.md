# Figure Layers

LazyCanvas has many different layers with shapes:
- Arc
- ArcTo
- BezierCurve
- Circle
- Ellipse
- Line
- Ngon
- QuadraticCurve
- Rectangle
- Square

Each of the figures has both common and unique parameters. Examples of common parameters are `x` and `y`. Below we will look at all these figures and how the parameters are set in them.

## Arc

The `Arc` figure is a part of a circle. It has the following parameters:
- `x` - the x-coordinate of the center of the circle
- `y` - the y-coordinate of the center of the circle
- `radius` - the radius of the circle
- `angles` - the angles of the circle in radians
- `clockwise` - the direction of the circle
- `color` - the color of the circle

```ts
import { LazyCanvas, saveFile, ArcLayer } from '@hitomihiumi/lazy-canvas'; // import the module

let arc = new ArcLayer()
    .setX(100) // set the x position of the arc
    .setY(100) // set the y position of the arc
    .setRadius(50) // set the radius of the arc
    .setAngles([0, Math.PI]) // set the angles of the arc
    .setClockwise(false) // set the direction of the arc
    .setColor('#ff8a8a'); // set the color of the arc

let canvas = new LazyCanvas()
    .createNewCanvas(600, 200)
    .addLayers(arc); // load our layer

(async () => {
    let buffer = await canvas.renderImage(); // render the canvas to a buffer
    await saveFile(buffer, 'png', 'test'); // save the buffer to a file
})();
```

![Example](https://raw.githubusercontent.com/hitomihiumi/docsholder/master/guide/figure-layers/arc.png)

## ArcTo

The `ArcTo` figure is a part of a circle. It has the following parameters:

- `points` - It is an array of objects with the following properties:
  - `x` - the x-coordinate of the point
  - `y` - the y-coordinate of the point
- `radius` - the radius of the circle
- `color` - the color of the circle
- `stroke` - line width of stroke

```ts
import { LazyCanvas, saveFile, ArcToLayer } from '@hitomihiumi/lazy-canvas'; // import the module

let arcto = new ArcToLayer()
    .setX(100) // set the x position of the arcto
    .setY(100) // set the y position of the arcto
    .setRadius(50) // set the radius of the arcto
    .setPoints({ x: 100, y: 50 }, { x: 200, y: 100 }, { x: 100, y: 150 }) // set the points of the arcto
    .setStroke(5) // set the stroke of the arcto
    .setColor('#ff8a8a'); // set the color of the arcto

let canvas = new LazyCanvas()
    .createNewCanvas(600, 200)
    .addLayers(arcto); // load our layer

(async () => {
    let buffer = await canvas.renderImage(); // render the canvas to a buffer
    await saveFile(buffer, 'png', 'test'); // save the buffer to a file
})();
```

![Example](https://raw.githubusercontent.com/hitomihiumi/docsholder/master/guide/figure-layers/arcto.png)

## BezierCurve

The `BezierCurve` figure is a curve that is defined by four points. It has the following parameters:
- `points` - the points of the curve. It is an array of objects with the following properties:
  - `x` - the x-coordinate of the point
  - `y` - the y-coordinate of the point
- `controlPoints` - the control points of the curve. It is an array of objects with the following properties:
  - `x` - the x-coordinate of the control point
  - `y` - the y-coordinate of the control point
- `color` - the color of the curve
- `stroke` - line width of stroke

```ts
import { LazyCanvas, saveFile, BezierLayer, CircleLayer } from '@hitomihiumi/lazy-canvas'; // import the module

let bezier = new BezierLayer()
        .setX(100) // set the x position of the bezier
        .setY(100) // set the y position of the bezier
        .setPoints({ x: 100, y: 50 }, { x: 200, y: 100 }) // set the points of the bezier
        .setControlPoints({ x: 150, y: 10 }, { x: 150, y: 150 }) // set the control points of the bezier
        .setStroke(5) // set the stroke of the bezier
        .setColor('#ff8a8a'); // set the color of the bezier

let pointOne = new CircleLayer()
        .setX(100)
        .setY(50)
        .setColor('red')
        .setRadius(5);

let pointTwo = new CircleLayer()
        .setX(200)
        .setY(100)
        .setColor('red')
        .setRadius(5);

let controlPointOne = new CircleLayer()
        .setX(150)
        .setY(10)
        .setColor('blue')
        .setRadius(5);

let controlPointTwo = new CircleLayer()
        .setX(150)
        .setY(150)
        .setColor('blue')
        .setRadius(5);

let canvas = new LazyCanvas()
        .createNewCanvas(600, 200)
        .addLayers(pointOne, pointTwo, controlPointOne, controlPointTwo, bezier); // load our layers

(async () => {
    let buffer = await canvas.renderImage(); // render the canvas to a buffer
    await saveFile(buffer, 'png', 'test'); // save the buffer to a file
})();
```

![Example](https://raw.githubusercontent.com/hitomihiumi/docsholder/master/guide/figure-layers/bezier.png)

## Circle

The `Circle` figure is a circle. It has the following parameters:
- `x` - the x-coordinate of the center of the circle
- `y` - the y-coordinate of the center of the circle
- `radius` - the radius of the circle
- `color` - the color of the circle
- `filled` - whether the circle is filled or not
- `stroke` - line width of stroke

```ts
import { LazyCanvas, saveFile, CircleLayer } from '@hitomihiumi/lazy-canvas'; // import the module

let circlefilled = new CircleLayer()
    .setX(100) // set the x position of the circle
    .setY(100) // set the y position of the circle
    .setRadius(50) // set the radius of the circle
    .setColor('#ff8a8a'); // set the color of the circle

let circlestroked = new CircleLayer()
    .setX(400) // set the x position of the circle
    .setY(100) // set the y position of the circle
    .setRadius(50) // set the radius of the circle
    .setColor('#ff8a8a') // set the color of the circle
    .setFilled(false) // set the circle to not be filled
    .setStroke(5); // set the stroke of the circle

let canvas = new LazyCanvas()
    .createNewCanvas(600, 200)
    .addLayers(circlefilled, circlestroked); // load our layers

(async () => {
    let buffer = await canvas.renderImage(); // render the canvas to a buffer
    await saveFile(buffer, 'png', 'test'); // save the buffer to a file
})();
```

![Example](https://raw.githubusercontent.com/hitomihiumi/docsholder/master/guide/figure-layers/circle.png)

## Ellipse

The `Ellipse` figure is an ellipse. It has the following parameters:

- `x` - the x-coordinate of the center of the ellipse
- `y` - the y-coordinate of the center of the ellipse
- `width` - the width of the ellipse
- `height` - the height of the ellipse
- `color` - the color of the ellipse
- `filled` - whether the ellipse is filled or not
- `stroke` - line width of stroke

```ts
import { LazyCanvas, saveFile, EllipseLayer } from '@hitomihiumi/lazy-canvas'; // import the module

let ellipsefilled = new EllipseLayer()
    .setX(100) // set the x position of the ellipse
    .setY(100) // set the y position of the ellipse
    .setWidth(200) // set the width of the ellipse
    .setHeight(100) // set the height of the ellipse
    .setRadius(50) // set the radius of the ellipse
    .setColor('#ff8a8a'); // set the color of the ellipse

let ellipsestroked = new EllipseLayer()
    .setX(400) // set the x position of the ellipse
    .setY(100) // set the y position of the ellipse
    .setWidth(200) // set the width of the ellipse
    .setHeight(100) // set the height of the ellipse
    .setRadius(50) // set the radius of the ellipse
    .setColor('#ff8a8a') // set the color of the ellipse
    .setFilled(false) // set the ellipse to not be filled
    .setStroke(5); // set the stroke of the ellipse

let canvas = new LazyCanvas()
    .createNewCanvas(600, 200)
    .addLayers(ellipsefilled, ellipsestroked); // load our layers

(async () => {
    let buffer = await canvas.renderImage(); // render the canvas to a buffer
    await saveFile(buffer, 'png', 'test'); // save the buffer to a file
})();
```

![Example](https://raw.githubusercontent.com/hitomihiumi/docsholder/master/guide/figure-layers/ellipse.png)

## Line

The `Line` figure is a line. It has the following parameters:
- `points` - the points of the line. It is an array of objects with the following properties:
  - `x` - the x-coordinate of the point
  - `y` - the y-coordinate of the point
- `color` - the color of the line
- `stroke` - line width of stroke
- `lineDash` - the line dash pattern
```ts
import { LazyCanvas, saveFile, LineLayer } from '@hitomihiumi/lazy-canvas'; // import the module

let line = new LineLayer()
    .setPoints({ x: 50, y: 50 }, { x: 550, y: 50 }) // set the points of the line
    .setStroke(5) // set the stroke of the line
    .setColor('#ff8a8a'); // set the color of the line

let dashline = new LineLayer()
    .setPoints({ x: 50, y: 100 }, { x: 550, y: 100 }) // set the points of the line
    .setStroke(5) // set the stroke of the line
    .setColor('#ff8a8a') // set the color of the line
    .setLineDash([10, 5]); // set the lineDash of the line

let canvas = new LazyCanvas()
    .createNewCanvas(600, 200)
    .addLayers(line, dashline); // load our layers

(async () => {
    let buffer = await canvas.renderImage(); // render the canvas to a buffer
    await saveFile(buffer, 'png', 'test'); // save the buffer to a file
})();
```

![Example](https://raw.githubusercontent.com/hitomihiumi/docsholder/master/guide/figure-layers/line.png)

## Ngon

The `Ngon` figure is a polygon with `n` sides. It has the following parameters:
- `x` - the x-coordinate of the center of the polygon
- `y` - the y-coordinate of the center of the polygon
- `radius` - the radius of the polygon
- `sides` - the number of sides of the polygon
- `color` - the color of the polygon
- `filled` - whether the polygon is filled or not
- `stroke` - line width of stroke

```ts
import { LazyCanvas, saveFile, NgonLayer } from '@hitomihiumi/lazy-canvas'; // import the module

let ngonfilled = new NgonLayer()
    .setX(100) // set the x position of the ngon
    .setY(100) // set the y position of the ngon
    .setRadius(50) // set the radius of the ngon
    .setSides(6) // set the number of sides of the ngon
    .setColor('#ff8a8a'); // set the color of the ngon

let ngonstroked = new NgonLayer()
    .setX(400) // set the x position of the ngon
    .setY(100) // set the y position of the ngon
    .setRadius(50) // set the radius of the ngon
    .setSides(6) // set the number of sides of the ngon
    .setColor('#ff8a8a') // set the color of the ngon
    .setFilled(false) // set the ngon to not be filled
    .setStroke(5); // set the stroke of the ngon

let canvas = new LazyCanvas()
    .createNewCanvas(600, 200)
    .addLayers(ngonfilled, ngonstroked); // load our layers

(async () => {
    let buffer = await canvas.renderImage(); // render the canvas to a buffer
    await saveFile(buffer, 'png', 'test'); // save the buffer to a file
})();
```

![Example](https://raw.githubusercontent.com/hitomihiumi/docsholder/master/guide/figure-layers/ngon.png)

## QuadraticCurve

The `QuadraticCurve` figure is a curve that is defined by three points. It has the following parameters:
- `points` - the points of the curve. It is an array of objects with the following properties:
  - `x` - the x-coordinate of the point
  - `y` - the y-coordinate of the point
- `controlPoint` - the control point of the curve. It is an object with the following properties:
  - `x` - the x-coordinate of the control point
  - `y` - the y-coordinate of the control point
- `color` - the color of the curve
- `stroke` - line width of stroke

```ts
import { LazyCanvas, saveFile, QuadraticLayer, CircleLayer } from '@hitomihiumi/lazy-canvas'; // import the module

let quadratic = new QuadraticLayer()
    .setColor('#ff8a8a') // set the color of the quadratic curve
    .setStroke(5) // set the stroke of the quadratic curve
    .setPoints({ x: 10, y: 10 }, { x: 300, y: 150 }) // set the points of the quadratic curve
    .setControlPoint({ x: 300, y: 100 }); // set the control point of the quadratic curve

let pointOne = new CircleLayer()
    .setX(10)
    .setY(10)
    .setColor('red')
    .setRadius(5);

let pointTwo = new CircleLayer()
    .setX(300)
    .setY(150)
    .setColor('red')
    .setRadius(5);

let controlPoint = new CircleLayer()
    .setX(300)
    .setY(100)
    .setColor('blue')
    .setRadius(5);

let canvas = new LazyCanvas()
    .createNewCanvas(600, 200)
    .addLayers(pointOne, pointTwo, controlPoint, quadratic); // load our layers

(async () => {
    let buffer = await canvas.renderImage(); // render the canvas to a buffer
    await saveFile(buffer, 'png', 'test'); // save the buffer to a file
})();
```

![Example](https://raw.githubusercontent.com/hitomihiumi/docsholder/master/guide/figure-layers/quadratic.png)

## Rectangle

The `Rectangle` figure is a rectangle. It has the following parameters:
- `x` - the x-coordinate of the top-left corner of the rectangle
- `y` - the y-coordinate of the top-left corner of the rectangle
- `width` - the width of the rectangle
- `height` - the height of the rectangle
- `color` - the color of the rectangle
- `filled` - whether the rectangle is filled or not
- `stroke` - line width of stroke

```ts
import { LazyCanvas, saveFile, RectangleLayer } from '@hitomihiumi/lazy-canvas'; // import the module

let rectanglefilled = new RectangleLayer()
    .setX(100) // set the x position
    .setY(100) // set the y position
    .setWidth(200) // set the width
    .setHeight(100) // set the height
    .setColor('#ff8a8a'); // set the color

let rectanglestroked = new RectangleLayer()
    .setX(400) // set the x position
    .setY(100) // set the y position
    .setWidth(200) // set the width
    .setHeight(100) // set the height
    .setColor('#ff8a8a') // set the color
    .setFilled(false) // set the fill to false
    .setStroke(5); // set the stroke

let canvas = new LazyCanvas()
    .createNewCanvas(600, 200)
    .addLayers(rectanglefilled, rectanglestroked); // load our layers

(async () => {
    let buffer = await canvas.renderImage(); // render the canvas to a buffer
    await saveFile(buffer, 'png', 'test'); // save the buffer to a file
})();
```

![Example](https://raw.githubusercontent.com/hitomihiumi/docsholder/master/guide/figure-layers/rectangle.png)

## Square

The `Square` figure is a square. It has the following parameters:
- `x` - the x-coordinate of the top-left corner of the square
- `y` - the y-coordinate of the top-left corner of the square
- `width` - the width of the square
- `color` - the color of the square
- `filled` - whether the square is filled or not
- `stroke` - line width of stroke

```ts
import { LazyCanvas, saveFile, SquareLayer } from '@hitomihiumi/lazy-canvas'; // import the module

let squarefilled = new SquareLayer()
    .setX(100) // set the x position
    .setY(100) // set the y position
    .setWidth(100) // set the width
    .setColor('#ff8a8a'); // set the color

let squarestroked = new SquareLayer()
    .setX(400) // set the x position
    .setY(100) // set the y position
    .setWidth(100) // set the width
    .setColor('#ff8a8a') // set the color
    .setFilled(false) // set the fill to false
    .setStroke(5); // set the stroke

let canvas = new LazyCanvas()
    .createNewCanvas(600, 200)
    .addLayers(squarefilled, squarestroked); // load our layers

(async () => {
    let buffer = await canvas.renderImage(); // render the canvas to a buffer
    await saveFile(buffer, 'png', 'test'); // save the buffer to a file
})();
```

![Example](https://raw.githubusercontent.com/hitomihiumi/docsholder/master/guide/figure-layers/square.png)
