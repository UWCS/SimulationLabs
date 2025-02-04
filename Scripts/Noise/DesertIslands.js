let desertIslands = new p5((sk) => {
    const width = 150;
    const height = 150;

    const threshold = 0.55;
    const sf = 25;

    function getColour(noiseVal){
        if(noiseVal > threshold){
            return sk.color(239, 221, 111); // sandy yellow (island)
        }else{
            return sk.color(0, 157, 196); // ocean blue
        }
    }

    function drawMap(){
        sk.background(255,255,255);
        sk.noiseSeed(Math.random()*1000);
        
        for(let x = 0; x < width; x++){
            for(let y = 0; y < height; y++){
                let c = getColour(sk.noise(x/sf, y/sf));
                sk.stroke(c);
                sk.point(x,y);
            }
        }
    }

    sk.setup = () => {
        let cnv = sk.createCanvas(width, height);
        cnv.parent("DesertIslands");

        sk.describe("Click to generate desert islands!");
        
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