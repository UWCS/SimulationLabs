let rainbowTrails = new p5((sk) => {
    sk.setup = () => {
        let cnv = sk.createCanvas(400, 400);
        cnv.parent("RainbowTrailsContainer");
    }

    const circleSize = 10;
    let redV = 134; 
    let greenV = 213;
    let blueV = 21;

    const rShift = 13;
    const gShift = 5;
    const bShift = 27;

    const trails = [];
    const trailLength = 10;

    class trailObject {
        constructor(colour, position){
            this.colour = colour
            this.position = position
        }
    }

    function updateTrail(){
        if(trails.length == trailLength){ // should remove one
            trails.shift(); // god these method names 
        }  

        // create trail object to insert
        trailObj = new trailObject(sk.color(redV, greenV, blueV), sk.createVector(sk.mouseX, sk.mouseY));
        trails.push(trailObj);
    }

    function drawTrail(){
        for(let i = 0; i < trails.length; i++){
            let trailObj = trails[i];
            
            // update pen 
            sk.stroke(trailObj.colour);
            sk.fill(trailObj.colour);
            
            // draw 
            sk.circle(trailObj.position.x, trailObj.position.y, circleSize);
        }
    }

    sk.draw = () => {
        // update rgb values 
        redV = (redV + rShift) % 256;
        greenV = (greenV + gShift) % 256;
        blueV = (blueV + bShift) % 256;

        // update the colours
        sk.stroke(redV, greenV, blueV);
        sk.fill(redV, greenV, blueV);


        sk.background(222, 222, 222); // background drawn every frame!
        sk.circle(sk.mouseX, sk.mouseY, circleSize);

        // trail stuff
        drawTrail();
        updateTrail();
    }
});

