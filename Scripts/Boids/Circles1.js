function setup() {
    var cnv = createCanvas(400, 400);
    cnv.parent('Circles1Container');

    background(222, 222, 222);
  }
  
  var circleSize = 10;
  
  function draw() {
    circle(mouseX, mouseY, circleSize);
  }