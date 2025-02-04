let smoothNoiseHM = new p5((sk) => {
    const width = 150;
    const height = 150;
    const sf = 30;

    function drawMap(){
        sk.background(255,255,255);
        sk.noiseSeed(Math.random()*1000);
        
        for(let x = 0; x < width; x++){
            for(let y = 0; y < height; y++){
                let c = sk.noise(x/sf, y/sf)*255;
                sk.stroke(c);
                sk.point(x,y);
            }
        }
    }

    sk.setup = () => {
        let cnv = sk.createCanvas(width, height);
        cnv.parent("SmoothNoiseHeightMap");

        sk.describe("Click to generate new Perlin Noise heightmap!");
        
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