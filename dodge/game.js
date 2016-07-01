var isGameOver;
var player;
var playerImage;
var enemy;
var enemyImage;
var backgroundImage;

function preload() {
  playerImage = loadImage("dogo.png")
  enemyImage = loadImage("more dogo.png")
  backgroundImage = loadImage("park.jpg")
}

function setup() {
    createCanvas(600, 600);
    isGameOver = false;
    player = createSprite(0+playerImage.width/2, height-(playerImage.height/2), 0, 0);
    player.addImage(playerImage);
    enemy = createSprite(width, height/2, 0, 0);
    enemy.addImage(enemyImage);
    enemy.rotationSpeed = 4.0;
}

function draw() {
    if (isGameOver){
      gameOver();
    } else {
        
        background(backgroundImage);
    
        if(keyDown(UP_ARROW) && player.position.y > (playerImage.height/2)) {
        player.position.y -= 6;
        }
    
        if(keyDown(DOWN_ARROW) && player.position.y < 600 - playerImage.height/2) {
        player.position.y += 6;
        }
    
        enemy.position.x = enemy.position.x - 6;
    
        if (enemy.position.x < 0){
        enemy.position.x = width;
        enemy.position.y = random(height)
        }
    
        if (enemy.overlap(player)) {
        gameOver();
        isGameOver = false;
        }
       drawSprites();
    }
}
    
function gameOver() {
      background(0);
      textAlign(CENTER);
      fill("white");
      text("GOOD JOB", width/2, height/2);
      text("KEEP GOING", width/2, 3*height/4);
    }
    
    
function mouseClicked() {
      if (isGameOver) {
        isGameOver = false; 
        player.position.x =0+playerImage.width/2;
        player.position.y = height-(playerImage.height/2);
        enemy.position.x = width/2;
        enemy.position.y = 0;
    } 
}
 