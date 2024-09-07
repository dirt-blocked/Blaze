var s;
var scl = 15;

var food;

function setup() {
  createCanvas(800, 800).style('display', 'block');
  s = new Snake();
  frameRate(10);
  pickLocation();
  
}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

/*
function mousePressed() {
  s.total++;
}
*/

function draw() {
  background(1, 20, 5);
  
  textStyle(BOLD)
  textAlign(CENTER,CENTER)
  textFont('Sans Serif')
  textSize(50);
  if (s.eat(food)) {
    pickLocation();
  }
  s.death();
  s.update();
  s.show();
  
  fill(17, 173, 0);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}
