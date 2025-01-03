let correctFPSBalls = new p5((sk) => {
    class PhysicsBall {
        constructor(framesToSkip){
            this.position = sk.createVector(0,0);
            this.velocity = sk.createVector(0,0);
            this.acceleration = sk.createVector(0,0);
            this.colour = sk.color(0,0,0);
            
            this.nFrames = framesToSkip + 1; // bad names but only I have to look at this
            this.i = 0;
            this.timeAccum = 0;
        }
        
        reset(){
            this.timeAccum = 0;
            this.i = 0;
        }
        
        checkInCanvas(){
            if(this.position.x > 400){
                this.position.x = (this.position.x % 400);
            }
        }

        drawMarker(){
            sk.stroke(this.colour);
            sk.line(this.position.x + 15, 0, this.position.x + 15, 400);
        }
        
        correctPhysics(){
            this.position.add(p5.Vector.mult(this.velocity, this.timeAccum * 0.5));
            this.velocity.add(p5.Vector.mult(this.acceleration, this.timeAccum));
            this.position.add(p5.Vector.mult(this.velocity, this.timeAccum * 0.5));
            
            this.checkInCanvas();
        }
    
        simulate(dt){
            this.i++;
            this.timeAccum += dt;
            
            if(this.i == this.nFrames){ // frames 0-(i-1) are skipped; frame i drawn
                this.correctPhysics();
                this.drawMarker();
                this.reset();
            }
        }
        
        draw(){
            sk.circle(this.position.x, this.position.y, 30);
        }
  }
  
  let b1;
  let b2;
  let running = false;
  
  function resetSimulation(){
    b1 = new PhysicsBall(0); // skipping no frames
    b2 = new PhysicsBall(5); // skipping 5 frames, for every drawn frame
    
    b1.colour = sk.color(0, 255, 0);
    b2.colour = sk.color(255, 0, 0);
    
    b1.position = sk.createVector(50, 50);
    b2.position = sk.createVector(50, 150);
    
    b1.acceleration = sk.createVector(2,0);
    b2.acceleration = sk.createVector(2,0);
  }
  
  sk.setup = () => {
    let cnv = sk.createCanvas(400, 200);
    cnv.parent("CorrectFPSBallsContainer");
    
    resetSimulation();
    
    // pre-click state 
    sk.background(220);
    b1.draw();
    b2.draw();

    sk.textSize(60);
    sk.text('Click to start', 20, 120);
    sk.textSize(30); // for the fps text
  }
  
  sk.draw = () => {
    if(running){
        sk.background(220);
        sk.text('60 FPS', 250, 50);
        sk.text('10 FPS', 250, 150);

        b1.simulate(sk.deltaTime*0.001);
        b2.simulate(sk.deltaTime*0.001);

        sk.stroke(0,0,0);
        b1.draw();
        b2.draw();
    }
  }
  
  sk.mouseClicked = () => {
    if(((0 <= sk.mouseX) && (sk.mouseX <= 400)) && ((0 <= sk.mouseY) && (sk.mouseY <= 200))){
        running = !running;
        resetSimulation();
    }
  }
});