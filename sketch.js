var fixedRect, movingRect;

var rect1,rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

rect1 = createSprite(100,100,80,50);
rect1.shapeColor = "green";
rect1.debug = true;
rect1.velocityY = 1;

rect2 = createSprite(100,800,80,50);
rect2.shapeColor = "green";
rect2.debug = true;
rect2.velocityY = -1;

}

function draw() {
  background(0,0,0);  

  bounceoff(movingRect,fixedRect);
  bounceoff(rect1,rect2);
  
  drawSprites();
}


