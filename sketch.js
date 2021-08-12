var retFixo;
var retMovendo;



function setup() {
  createCanvas(800,400);

  retMovendo = createSprite(400, 200, 50, 80);
  retMovendo.shapeColor = "purple";
  retFixo = createSprite(200,200,80,50);
  retFixo.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  

 retMovendo.x = World.mouseX;
 retMovendo.y = World.mouseY;

 if (retMovendo.x - retFixo.x < retFixo.width/2 + retMovendo.width/2
  && retFixo.x - retMovendo.x < retFixo.width/2 + retMovendo.width/2
  && retMovendo.y - retFixo.y < retFixo.height/2 + retMovendo.height/2
  && retFixo.y - retMovendo.y < retFixo.height/2 + retMovendo.height/2) {
  retMovendo.shapeColor = "red";
  retFixo.shapeColor = "purple";
} 
else {
  retMovendo.shapeColor = "purple";
  retFixo.shapeColor = "red";
}


  drawSprites();

}