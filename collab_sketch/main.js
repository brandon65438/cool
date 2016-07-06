  var config = {
    apiKey: "AIzaSyA2BGjYtjCDTV5wukdvEFHkSFn36LYH2_E",
    authDomain: "collab-sketch-fafe8.firebaseapp.com",
    databaseURL: "https://collab-sketch-fafe8.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);

  var pointsData = firebase.database().ref();

  var points = [];



  function setup() {
    var canvas = createCanvas(400, 400)
    background(225);
    fill(0);
    pointsData.on("child_added", function(point) {
      points.push(point.val());
    });
    canvas.mousePressed(drawPoint);
    canvas.mouseMoved(drawPoint);
  }

  function draw() {
    for (var i = 0; i < points.length; i++) {
      var point = points[i];
      ellipse(point.x, point.y, 5, 5);
    }
  }

  function drawPoint() {
    pointsData.push({
      x: mouseX,
      y: mouseY
    })
  }

  function drawPointIfMousePressed() {
    if (mouseIsPressed) {
      drawpoint();
    }
  }

  $("#saveDrawing").on("click", saveDrawing);

  function saveDrawing() {
    saveCanvas();
  }

  $("#clearDrawing").on("click", clearDrawing);

  function clearDrawing() {
    pointsData.remove();
    points = [];
  }