let DetailedDesertMap = new p5((sk) => {
    const width = 150;
    const height = 150;

    const sf = 25;

    // I love having hardcoded threshold values 
    function getColour(noiseVal){
        if (noiseVal > 0.7){
            return sk.color(209, 191, 81); // darker yellow
        } else if (noiseVal > 0.55){
            return sk.color(239, 221, 111); // sandy yellow (island)
        } else if (noiseVal > 0.4){
            return sk.color(0, 157, 196); // ocean blue
        } else{
            return sk.color(0, 127, 166); // deeper blue
        }
    }

    function drawMap(){
        sk.background(255,255,255);
        sk.noiseSeed(Math.random()*1000);
        
        for(let x = 0; x < width; x++){
            for(let y = 0; y < height; y++){
                sk.stroke(getColour(sk.noise(x/sf, y/sf)));
                sk.point(x,y);
            }
        }
    }

    sk.setup = () => {
        let cnv = sk.createCanvas(width, height);
        cnv.parent("DetailedDesertIslands");

        sk.noiseDetail(8, 0.5);
        sk.describe("Click to generate new Perlin Noise threshold map!");
        
        drawMap();
    }

    function onSim(){
        return ((sk.mouseX >= 0) && (sk.mouseX <= width) && (sk.mouseY >= 0) && (sk.mouseY <= height));
    }

    sk.mouseClicked = () => {
        if(onSim()){
            drawMap();
        }
    }
});

