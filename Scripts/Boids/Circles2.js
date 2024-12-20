console.log("this script is run!");

function setup() {
    console.log("script is setup...");
    var cnv = createCanvas(400, 400);
    cnv.parent('Circles2Container');
  }
  
  var circleSize = 10;
  
  function draw() {
    background(222, 222, 222); // background drawn every frame!
    circle(mouseX, mouseY, circleSize);
  }