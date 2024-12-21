let circles1 = new p5( (sketch) => {
    sketch.setup = () => {
        let cnv = sketch.createCanvas(400, 400);
        cnv.parent('Circles1Container');

        sketch.background(222, 222, 222);
    }

    var circleSize = 10;
    
    sketch.draw = () => {
        sketch.circle(sketch.mouseX, sketch.mouseY, circleSize);
    }
})
