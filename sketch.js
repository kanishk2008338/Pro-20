var car,wall;
var speed,weight;
var deformation;

function setup() {
  car = createSprite(50, 200, 30, 30);
  wall = createSprite(380, 200, 50, height/2);
speed=Math.round(random(55,90))
weight=Math.round(random(400,1500))
deformation=0.5*weight*speed*speed/22500;
car.collide(wall);
}

function draw() {
  console.log(Math.round(deformation))
  if(car.x-wall.x<wall.width/2+car.width/2
    && wall.x-car.x<wall.width/2+car.width/2
     && wall.y-car.y<wall.height/2+car.height/2
     && car.y-wall.y<wall.height/2+car.height/2 && deformation>180){
      wall.depth = car.depth;
      car.depth = car.depth + 1;
      car.shapeColor = "red";
 }else if(car.x-wall.x<wall.width/2+car.width/2
  && wall.x-car.x<wall.width/2+car.width/2
   && wall.y-car.y<wall.height/2+car.height/2
   && car.y-wall.y<wall.height/2+car.height/2 && deformation<80){
    wall.depth = car.depth;
    car.depth = car.depth + 1;
    car.shapeColor = "green";
}else  if(car.x-wall.x<wall.width/2+car.width/2
  && wall.x-car.x<wall.width/2+car.width/2
   && wall.y-car.y<wall.height/2+car.height/2
   && car.y-wall.y<wall.height/2+car.height/2){
    wall.depth = car.depth;
    car.depth = car.depth + 1;
    car.shapeColor = "yellow";
}
  car.velocityX = 8;
  background(255,255,255);  
  drawSprites()}