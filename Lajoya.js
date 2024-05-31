let Cubin;
let CuboSi;
let CubiNo;
let Tocado;
function setup() {
  createCanvas(windowWidth, windowHeight);
  Tocado = createSprite(
    width-300, height-600, 120, 120);
   Tocado.shapeColor = color(0);
  CuboSi = createSprite(
    width/2, height/2, 100, 100);
  CuboSi.shapeColor = color(250,219,216);
  CuboNo = createSprite(
    width/4, height/3, 100, 100);
  CuboNo.shapeColor = color(200,100,216);
  Cubin = createSprite(0, 0, 50, 50);
  Cubin.shapeColor = color(128);
}
function draw() {
  background(50);
  Cubin.velocity.x = (mouseX-Cubin.position.x)*0.2;
  Cubin.velocity.y = (mouseY-Cubin.position.y)*0.2;
  Cubin.displace(CuboSi);
  Cubin.displace(CuboNo);
  CuboSi.displace(CuboNo);
  drawSprites();

  if (CuboSi.overlap(Tocado)) {
    Tocado.shapeColor = color(255);
  }
  else {
    Tocado.shapeColor = color(0);
  }

  if (CuboNo.overlap(Tocado)) {
    Tocado.shapeColor = color(255, 0, 0);
  }
  else {
    Tocado.shapeColor = color(0);
  }
}