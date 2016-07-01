var CorCircle;
var IncorCircle;
var gameStart;
var gameOver;
var lvlChange;

function setup() {
    createCanvas(600, 600);

}

function draw() {
    background("black");
    
    coreCircle();
    
    for (var x = 0; x < 3; x++) {

        for (var y = 0; y < 3; y++) {
            coreCircle(x * 80 + 220,y*80 + 220);
        }
    }
    IncoreCircle();
}

function coreCircle(x,y) {
    fill("red");
    stroke("white");
    ellipse(x,y, 50, 50);
}

function IncoreCircle() {
    fill("blue");
    stroke("white");
    ellipse(220, 220, 50, 50);
}

function lvlChange() {

}
