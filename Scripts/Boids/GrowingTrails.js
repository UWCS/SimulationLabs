let growingTrails = new p5((sk) => {
    sk.setup = () => {
        let cnv = sk.createCanvas(400, 400);
        cnv.parent("GrowingTrailsContainer");
    }

    const maxCircleSize = 15;
    const minCircleSize = 5;
    let circleSize = 5;

    // trail variables
    const trails = [];
    const trailLength = 20;

    class trailObject {
        constructor(position, size){
            this.position = position;
            this.size = size;
        }

        draw(){
            sk.circle(this.position.x, this.position.y, this.size);
        }
    }

    // call this to update the trail
    function updateTrail(){
        if(trails.length == trailLength){ // should remove one
            trails.shift(); 
        }  

        // create trail object to insert
        let trailObj = new trailObject(sk.createVector(sk.mouseX, sk.mouseY), circleSize);
        trails.push(trailObj);
    }

    function drawTrail(){
        for(let i = 0; i < trails.length; i++){
            let trailObj = trails[i];
            
            // draw 
            trailObj.draw();
        }
    }

    sk.draw = () => {
        sk.background(222, 222, 222); // background drawn every frame!
        
        // update circleSize
        circleSize++;
        
        if(circleSize > maxCircleSize){
            circleSize = minCircleSize;
        }
        
        // draw circle 
        sk.circle(sk.mouseX, sk.mouseY, circleSize);
        
        // trail stuff
        drawTrail();
        updateTrail();
    }
});