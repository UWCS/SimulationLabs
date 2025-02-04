let randomHM = new p5((sk) => {
    const width = 150;
    const height = 150;

    function drawMap(){
        sk.background(255,255,255);
        
        for(let x = 0; x < width; x++){
            for(let y = 0; y < height; y++){
                let c = Math.random()*255;
                sk.stroke(c);
                sk.point(x,y);
            }
        }
    }

    sk.setup = () => {
        let cnv = sk.createCanvas(width, height);
        cnv.parent("RandomHeightMap");

        sk.describe("Click to generate new Random Noise heightmap!");
        
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