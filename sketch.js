function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB)
}

let r = 100;
let n = 0;
var xhis = [];
var yhis = [];

function mousePressed(){
  r = random(0,255);
  n++;
}

function draw() {
  background(r,255,255);

  // Crosshair
  color(0);
  stroke(0);
  line(0,mouseY,windowWidth,mouseY)
  line(mouseX,0,mouseX,windowHeight)

  // Mousepress
  if(mouseIsPressed){
    fill(255);
    noStroke()
    ellipse(mouseX, mouseY, 20);
  }

  // GRAPH
  // graph limits
  let start = [0,windowHeight-150];
  let end =  [windowWidth,windowHeight];
  fill(0);
  stroke(0)
  rect(start[0],start[1],end[0],end[1]);

  // Xgraph
  xhis.push(mouseX);
  stroke(0, 100, 100);
  noFill();
  strokeWeight(2)
  beginShape();
  for(let i=0; i<xhis.length;i++){
    x = start[0]+i
    y = map(xhis[i],0,windowWidth, start[1],end[1]);
    vertex(x,y);
  }
  if(xhis.length > end[0] - start[0]){
    xhis.splice(0,1);
  }
  endShape();

  // Ygraph
  yhis.push(mouseY);
  stroke(120, 100, 100);
  strokeWeight(2)
  beginShape();
  for(let i=0; i<yhis.length;i++){
    x = start[0]+i
    y = map(yhis[i],0,windowHeight, start[1],end[1]);
    vertex(x,y);
  }
  if(yhis.length > end[0] - start[0]){
    yhis.splice(0,1);
  }
  endShape();

  // graph text
  noStroke()
  fill(255)
  size = 20
  textSize(size)
  text("x = " + mouseX + ", y = " + mouseY, start[0],end[1]-size/2)

  // Clicktesst
  textSize(50);
  fill(0);
  stroke(0);
  text(n, width/2, start[1]/2);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
