var wall;
var thickness;
var bullet;
var weight;
var speed;
var bulletRightEdge;
var wallLeftEdge;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83)
  speed=random(123,231);
  weight=random(30,52);
 
  bullet = createSprite(50,200,50,20);
  wall = createSprite(1200,200,thickness,800);
 
  bullet.velocityX=speed;
  
  
  
 
  wall.debug=true;
  bullet.debug=true;
  
}

function draw() {
  background(0);
  
 if (hasCollided(wall,bullet)){
   bullet.velocityX=0;
   
   var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness) 
  
   if(damage>10){
     wall.shapeColor=("green")
     
   }

   if(damage<10){
     wall.shapeColor=("red")
     
   }

  }
   

    drawSprites();
} 
 


function hasCollided(wall,bullet) {
  bulletRightEdge=bullet.width + bullet.x;
  wallLeftEdge=wall.x
  if(bulletRightEdge>=wallLeftEdge){
      return true;
  }else{
    return false;
  }
    
}