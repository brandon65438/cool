var backgroundImage;
var player;
var playerImage;
var enemy;
var backgroundSprite;
var backgroundSpriteImage;
var isGameOver;

function preload() {
    backgroundImage = loadImage("background1.jpg");
    backgroundSpriteImage = loadImage("background1.jpg");
    playerImage = loadImage("player3.png");
    enemyImage = loadImage("carro.png")
}

function setup() {
    createCanvas(600, 600);
    isGameOver = false
    backgroundSprite = createSprite(width / 2, height / 2, 900, 1200)
    backgroundSprite.addImage(backgroundSpriteImage);
    player = createSprite(width / 2, 4 * height / 5, 0, 0);
    player.addImage(playerImage);
    enemy = createSprite(width / 4, 0, 50, 50);
    enemy.addImage(enemyImage);

}

function draw() {
    if (isGameOver) {
        gameOver();
    }
    else {
        // backgroundSprite.position.y = backgroundSprite.position.y +;
        if (backgroundSprite.position.y > height ) {
            backgroundSprite.position.y = 0
        }
        if (keyDown(UP_ARROW)) {
            player.position.y = player.position.y - 6;
        }

        if (keyDown(DOWN_ARROW)) {
             player.position.y = player.position.y + 6;
        }
        if (keyDown(LEFT_ARROW) && player.position.x > 120) {
            player.position.x = player.position.x - 3;
        }
        
        if (keyDown(RIGHT_ARROW) && player.position.x < height - 120) {
            player.position.x = player.position.x + 3;
        }

        enemy.position.y = enemy.position.y + 7

        if (enemy.position.y > height && enemy.position.x > 30 && enemy.position.x < 30)
            enemy.position.y = 0;

        if (enemy.position.y = 0) {
            enemy.position.x = random(width);
        }


        player.position.y = player.position.y;
        camera.position.y = player.position.y - height / 5;
        // background(backgroundImage);
        drawSprites();

        if (enemy.overlap(player)) {
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
        enemy.position.x = width / 2;
        enemy.position.y = 0;
    }
}