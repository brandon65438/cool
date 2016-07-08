var net;
var netImage;
var bunnies;
var bunnyImage;
var bunnyJump = 5;
var numBunny;
var egg;
var sun;
var sunImage;
var bunnyGround;
var bunnyGravity;

function preload() {
    netImage = loadImage("nett.png");
    bunnyImage = loadImage("bunny.png");
    bunnyGroundImage = loadImage("grass.png");
    sunImage = loadImage("kekekek.png");

}

function setup() {
    createCanvas(800, 600);
    sun = createSprite(width/2,height/2,50,50);
    sun.addImage(sunImage);
    egg = createSprite
    net = createSprite(width / 2, height / 2, 50, 50);
    net.addImage(netImage);
    bunny = createSprite(width, height - 75, 50, 50);
    bunny.addImage(bunnyImage);
    bunnyGround = createSprite(width / 2, height - 50, 800, 50);
    bunnyGround.addImage(bunnyGroundImage);
    // bunnyGravity = bunnyGravity + 2
    // for (var n = 0; n < 3; n++) {
    //     var bunny = createSprite(100 + (n * 100), height - 25, 50, 50);
    // }
}

function draw() {
    background(255);

    bunny.velocity.y += 1
    bunny.position.x -= 5
    if (bunny.position.y >= height - 50) {
        bunny.velocity.y = -15
    }

    // if (bunny.position.y < height - 25) {
    //     bunnyJumping();
    // }
    // if (bunny.position.y >= height-74) {
    //     bunny.position.y = bunny.position.y - 100;
    //     bunny.position.x = bunny.position.x - 3;
    // } else {
    //     bunny.position.y = bunny.position.y + 3;
    //     bunny.position.x = bunny.position.x - 3;
    // }
    // else {
    //     bunny.position.y = bunny.position.y
    // }

    net.position.x = mouseX;
    net.position.y = mouseY;
    if (bunny.overlap(net)) {
        bunny.position.x = width + random(100, 200)
    }

    if (bunny.position.x < 0) {
        bunny.position.x = width + random(100, 200)
    }
    // net.rotate(45);
    document.body.style.cursor = 'none';
    drawSprites();
    ethernet();
}

function ethernet() {
    fill(0);
    textAlign(CENTER);
    textSize(36);
    text("THE LETTER E", width / 2, 1 * height / 4);
}

// function bunnyJumping() {
//     bunny.position.y = bunny.position.y - 3
//     bunny.position.x = bunny.position.x - 3
// }