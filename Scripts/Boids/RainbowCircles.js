// remember unique names with let bindings!
let rainbowCircles = new p5( (sk) => {
    sk.setup = () => {
        let cnv = sk.createCanvas(400, 400);
        cnv.parent('CirclesRainbowContainer');
        sk.background(222, 222, 222);
    }

    const circleSize = 10;
    let redV = 134; 
    let greenV = 213;
    let blueV = 21;

    const rShift = 13;
    const gShift = 5;
    const bShift = 27;

    sk.draw = () => {
        // update rgb values 
        redV = (redV + rShift) % 256;
        greenV = (greenV + gShift) % 256;
        blueV = (blueV + bShift) % 256;
        
        // update the colours
        sk.stroke(redV, greenV, blueV);
        sk.fill(redV, greenV, blueV);
        
        // draw
        sk.circle(sk.mouseX, sk.mouseY, circleSize);
    }
})
