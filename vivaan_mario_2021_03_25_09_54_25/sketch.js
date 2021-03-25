var mario,mariorunning;
function preload(){
mariorunning=loadAnimation("mario00.png","mario01.png","mario02.png","mario03.png")

groundimg=loadImage("ground2.png")
obstacleimg=loadAnimation("obstacle1.png","obstacle2.png","obstacle3.png","obstacle4.png")

bg=loadImage("bg.png")

}

function setup(){
createCanvas(400,400);
mario=createSprite(40,310,30,30);
mario.scale=2
mario.addAnimation("running",mariorunning)

ground=createSprite(200,380,400,20)
ground.addImage(groundimg)

}
function draw(){
background(bg)

  if(keyDown("space")){
    mario.velocityY = -10 ;
  }
  
  //add gravity
  mario.velocityY = mario.velocityY + 0.8;

mario.collide(ground)

spawnObstacles()
drawSprites();
}

function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    obstacle = createSprite(400,315,10,40);
    obstacle.velocityX = -6;

obstacle.addAnimation("obstacles",obstacleimg)
  }
}