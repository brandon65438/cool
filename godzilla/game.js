var godzilla;
var gozillaImage;
var building;
var buildingImage;
var ground;
var frontLeg;
var backLeg;
var GRAVITY = 0.3;
var JUMP = -5;
var gameScore;
var score = 0;
var explosions
var gameStart

function preload() {
    godzillaImage = loadImage("dinosaurbody.png");
    frontLegImage = loadImage("frontleg.png");
    backLegImage = loadImage("backleg.png");
    buildingImage = loadImage("building.png");
    explosionImage = loadImage("explosion.gif")
}

function setup() {
    createCanvas(800, 600)
    gameStart = true
    godzilla = createSprite(width / 4, height - 170, 50, 50);
    godzilla.addImage(godzillaImage);
    ground = createSprite(0, height, 4800, 100);
    building = createSprite(3 * width / 4, height - 100, 50, 50);
    building.addImage(buildingImage);
    backLeg = createSprite((width / 4) + 400, height - 100, 50, 50);
    backLeg.addImage(backLegImage);
    frontLeg = createSprite((width / 4) + 400, height - 100, 50, 50);
    frontLeg.addImage(frontLegImage);
    // building = new Group();

    // numGroundSprites = width / GROUND_SPRITE_WIDTH + 1;
    // for (var n = 0; n < numGroundSprites; n++) {
    //     var groundSprite = createSprite(n * 50, height - 25, GROUND_SPRITE_WIDTH, GROUND_SPRITE_HEIGHT);
    //     groundSprites.add(groundSprite);
    // }
}

function draw() {
    if (gameStart) {
        gameStarted();
    } else {
        background(0, 53, 84);

        if (keyDown(RIGHT_ARROW)) {
            godzilla.position.x = godzilla.position.x + 50;
            frontLeg.rotationSpeed = 50.0;
            backLeg.rotationSpeed = 50.0;
        }
        else {
            frontLeg.rotationSpeed = 0.0;
            backLeg.rotationSpeed = 0.0;
        }

        if (keyDown(LEFT_ARROW)) {
            godzilla.position.x = godzilla.position.x - 5;
        }

        if (keyDown(UP_ARROW)) {
            var jumping = true
        }

        if (ground.position.x < camera.position.x - 1000) {
            ground.position.x = camera.position.x;
        }
        camera.position.x = godzilla.position.x + 230;
        // godzilla.position.x = godzilla.position.x + 5;
        frontLeg.position.x = godzilla.position.x + 60;
        frontLeg.position.y = godzilla.position.y + 90;
        backLeg.position.x = godzilla.position.x + 40;
        backLeg.position.y = godzilla.position.y + 90;
        if (frontLeg.overlap(building)) {
            building.position.x = camera.position.x + 700;
            explosion();
            score = score + 1;
        }

        // if (building.remove()) {
        //     building.position.x = camera.position.x
        // }
        drawSprites();
        gameScore();
    }
}

function gameScore() {
    fill("white")
    textFont("Comic Sans MS")
    textSize(24)
    text("Score : " + score, camera.position.x + 100, (25));
}

function explosion() {
    explosions = createSprite(3 * width / 4, height - 100, 50, 50);
    explosions.addImage(explosionImage);
    explosions.position.x = building.position.x - 800
        // setTimeout(noexplosion, 2000)
}

function noexplosion() {

    explosions.remove();
}

function gameStarted() {
    background(0)
    fill("white")
    textAlign(CENTER);
    textFont("Comic Sans MS")
    text("GOOODZIRRRRRRA NUUUUU", width/2,height/2)
    text("Click anywhere to start", width/2, 5*height/8)
}

function mouseClicked() { 
    score = 0
    
    if (gameStart) {
        gameStart = false;
        godzilla.position.x = width/4;
        godzilla.position.y = height - 170;
        building.position.x = 3*width/4;
        building.position.y = height - 100;
    }
}