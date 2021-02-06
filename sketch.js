var car, wall
var speed, weight
function setup() {
  createCanvas(800,400);
  car= createSprite(50,200,50,50)
  wall=createSprite(800,200,50,height/2)
  
  speed = random(55,90)
  weight=random(100,1500)
}

function draw() {
  background(255,255,255);
 
  car.velocityX=speed  
  
  if (car.x - wall.x < car.width/2 + wall.width/2
    && wall.x - car.x < car.width/2 + wall.width/2 &&
    wall.y - car.y < wall.height/2 + car.height/2 &&
    car.y - wall.y < car.height/2 + wall.height/2){
    car.velocityX=0
    var deformation=0.5 * weight * speed* speed/22509
    
    if (deformation <180){
      car.shapeColor = "red"
      car.x=780
    }
    if (deformation <180 && deformation>100){
      car.shapeColor = "yellow"
    }
    if (deformation < 100){
      car.shapeColor = "green"
    }
  else{
    wall.shapeColor = "green"
    car.shapeColor = "blue"
  }
}
  drawSprites();

}