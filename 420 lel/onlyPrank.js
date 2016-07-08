var backgroundImage;
var player;
var playerImage;
var car1;
var car2;
var backgroundSprites;
var backgroundSpriteImage;
var isGameOver;
var backgroundSprite

function preload() {
    backgroundImage = loadImage("background1.jpg");
    backgroundSpriteImage = loadImage("background2.png");
    playerImage = loadImage("player3.png");
    car1Image = loadImage("carroho.png")
    car2Image = loadImage("carrojo.png")
}

function setup() {
    createCanvas(600, 600);
    isGameOver = false
    backgroundSprite = createSprite(width / 2, height / 2, 900, 1200)
        // numbackgroundSprites = height + 1;
        // for (var n = 0; n < numbackgroundSprites; n++) {
        //     backgroundSprite = createSprite(width / 2, height / 2, 900, 1200);
        //     backgroundSprites.add(backgroundSprite);
        // }
    backgroundSprite.addImage(backgroundSpriteImage);
    player = createSprite(width / 2, 4 * height / 5, 0, 0);
    player.addImage(playerImage);
    car1 = createSprite(3 * width / 9, -500, 50, 50);
    car1.addImage(car1Image);
    car2 = createSprite(2 * width / 3, camera.position.y + 300, 50, 50);
    car2.addImage(car2Image);

}

function draw() {
    if (isGameOver) {
        gameOver();
    }
    else {
        // backgroundSprite.position.y = backgroundSprite.position.y +;
        if (backgroundSprite.position.y > 2 * height) {
            backgroundSprite.position.y = 0
        }
        if (keyDown(UP_ARROW)) {
            player.position.y = player.position.y - 10;
        }

        if (keyDown(DOWN_ARROW)) {
            player.position.y = player.position.y + 10;
        }
        if (keyDown(LEFT_ARROW) && player.position.x > 120) {
            player.position.x = player.position.x - 6;
        }

        if (keyDown(RIGHT_ARROW) && player.position.x < width - 120) {
            player.position.x = player.position.x + 6;
        }

        car1.position.y = car1.position.y + 15

        if (car1.position.y > camera.position.y + 600)
            car1.position.y = camera.position.y - random(1200, 1800);

        if (car1.position.y < camera.position.y - 1200) {
            car1.position.x = random(120, width/2-car1.width/2);
        }

        car2.position.y = car2.position.y - 15

        if (car2.position.y < camera.position.y - 1200)
            car2.position.y = camera.position.y + random(500, 800);

        if (car2.position.y > camera.position.y + 500) {
            car2.position.x = random(width/2, width-120);
        }


        player.position.y = player.position.y;
        camera.position.y = player.position.y - height / 5;
        // background(backgroundImage);
        drawSprites();

        if (car1.overlap(player)) {
            gameOver();
            isGameOver = true;
        }

        if (car2.overlap(player)) {
            gameOver();
            isGameOver = true;
        }
    }
}

function gameOver() {
    background(0);
    textAlign(CENTER);
    fill("white");
    text("GAME OVER", camera.position.x, camera.position.y);
    text("click anywhere to restart", camera.position.x, camera.position.y + 50);
}

function mouseClicked() {
    if (isGameOver) {
        isGameOver = false;
        player.position.x = width / 2;
        player.position.y = height - (playerImage.height / 2);
        car1.position.x = width / 3;
        car1.position.y = camera.position.y - 1200;
        car2.position.x = 2*width / 3;
        car2.position.y = camera.position.y + 500;
    }
}