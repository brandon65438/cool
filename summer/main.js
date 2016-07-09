var palmTree;
var coconut;
var man1;
var man1Image;
var many1 = [];
var frontleg1;
var frontleg1Image;
var backleg1;
var backleg1Image;
var coconut;
var coconutImage;
var coconuts = [];
var palmTreeImage;
var backgroundImage;

function preload() {
    palmTreeImage = loadImage("tree.png");
    man1Image = loadImage("man1full.png")
        // frontleg1Image = loadImage("man1fleg.png")
        // backleg1Image = loadImage("back")
    backgroundImage = loadImage("environment.png");
    coconutImage = loadImage("coconut.png")
}

function setup() {
    createCanvas(600, 600);
    coconut = createSprite(width / 2 + 85, 1 * height / 4 + 40, 50, 50);
    coconut.addImage(coconutImage)
    palmTree = createSprite(width / 2, height / 2, 50, 50);
    palmTree.addImage(palmTreeImage);
    // man1.addImage(man1Image);

}

function draw() {
    background(backgroundImage);
    // for (var i = 0; i < coconuts.length; i++) {
    //     coconuts[i].position.y += 2
    // }
    var height = 600
    if (coconut.position.y > 650) {
        coconut.position.y = 1 * height / 4 + 40;
        coconut.velocity.y = 0
    }

    for (var i = 0; i < many1.length; i++) {
        if (many1[i].currentstate == 0) {
            many1[i].position.x += 2
        }
        coconut.overlap(many1[i], function(e) {
            if (many1[i].currrentstate = 1) {
                many1[i].rotationSpeed = 1;

            }
            // many1[i].currentstate = 1
            setTimeout(function(f) { many1[i].currentstate = 0}
            , 500)
        })

    }
    drawSprites();
}

function mouseClicked() {
    coconut.velocity.y = 5
}

// function dropcoconut() {
//         coconut = createSprite(width / 2 + 70, 1*height / 4, 50, 50);
//         coconut.addImage(coconutImage)
//         coconuts.push(coconut)
// }

function manny1() {
    man1 = createSprite(-50, height - 150, 50, 50);
    man1.currentstate = 0
    man1.addImage(man1Image);
    // frontleg1 = createSprite(-40, height - 50, 50, 50);
    // frontleg1.currentstate = 0
    // frontleg1.addImage(frontleg1Image);
    // frontleg1.position.x = man1.position.x
    many1.push(man1)
}


setInterval(manny1, 9000)
