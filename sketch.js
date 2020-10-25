var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var ground;

function preload(){
  
  
  monkeyRunning =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(800,400);
  
  monkey=createSprite(44,320,20,20);
  monkey.addAnimation("running",monkeyRunning);
  monkey.scale=0.18;
  
  ground=createSprite(400,390,800,34)
  
  score=0;
}


function draw() {
background("lightgreen");
  text("survival time:"+score,40,780);
  
  if (ground.x < 0){
    ground.velocityX=-4;
      ground.x = ground.width/2;
    }
  
   if(keyDown("space")&& monkey.y >=400) {
        monkey.velocityY = -13;
    }
  
  if(monkey.isTouching(foodGroup)){
    score=score+1;
    foodGroup.destroyEach();
    
  }
  
  monkey.velocityY = monkey.velocityY+0.2 ;
  
  monkey.collide(ground);
  
  spawnBanana()
  drawSprites()
}

function spawnBanana(){
  if(frameCount % 120 === 0){
    banana1=createSprite(740,140,20,20);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-4;
    banana.lifetime=210;
   foodGroup.add(banana);
  }
}

