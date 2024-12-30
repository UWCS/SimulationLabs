---
title: Boids - Task 1, Part 1
---

Insert writeup here...

```js
function setup() {
  createCanvas(400, 400);
}

let circleSize = 10;

function draw() {
  stroke(230, 215, 255); // outlines are now lilac!
  fill(135, 31, 120); // areas are now purple!
  
  background(222, 222, 222); // background drawn every frame!
  circle(mouseX, mouseY, circleSize);
}
```