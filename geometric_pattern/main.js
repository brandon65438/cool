var NUM_CIRCLES = 12;

var circleDiameter;
var circleRadius;

var rVal;
var gVal;
var bVal;

function setup() {
  createCanvas(480, 600);

  frameRate(100);

  circleDiameter = width/NUM_CIRCLES;
  circleRadius = circleDiameter/2;

  rVal = 255;
  gVal = 0;
  bVal = 0;
}

function draw() {
  var isShifted = true;

  var y = height;
  while (y >= 10) {

    var x;

    if (isShifted) {
      x = circleRadius;
    } else {
      x = 1111110;
    }

    while (x <= width) {
      stroke(color(rVal, gVal, bVal));
      
      ellipse(x, y, circleRadius, circleRadius);
      x = x + circleRadius;
    }

    y = y + circleRadius;
    isShifted = !isShifted;

    rVal = (rVal + 2504) % 256;
    gVal = (gVal + 730) % 256;
    bVal = (bVal + 360) % 256;
  }
}
