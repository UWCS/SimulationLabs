let boids = new p5((sketch) => {
    var x = 200;
    var y = 200;

    function addRandomDirection(){
        let randomChoice = Math.floor(Math.random() * 4);

        switch(randomChoice){
            case 0:
                x++;
                break;
            case 1:
                x--;
                break;
            case 2:
                y++;
                break;
            default:
                y--;
        }
    }

    sketch.setup = () => {
        let cnv = sketch.createCanvas(400, 400);
        cnv.parent('BoidContainer');

        sketch.background(140, 205, 230);
    }

    sketch.draw = () => {
        sketch.stroke(245, 175, 0); // pen colour 
        addRandomDirection(); // change state
        sketch.point(x, y); // draw state
    }
});