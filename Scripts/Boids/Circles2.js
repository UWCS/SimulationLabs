let circles2 = new p5( (sketch) => {
    sketch.setup = () => {
        let cnv = sketch.createCanvas(400, 400);
        cnv.parent('Circles2Container');
    }

    var circleSize = 10;
    
    sketch.draw = () => {
        sketch.background(222, 222, 222);
        sketch.circle(sketch.mouseX, sketch.mouseY, circleSize);
    }
})
