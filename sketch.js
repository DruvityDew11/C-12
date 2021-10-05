var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;







function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");

  cloudsImg = loadImage("cloud.png");
  
 
  
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
 
var dhruv = Math.round(random(1,6));
console.log(dhruv);
}

function draw() {
  //set background color
  background("#EABFAA");
  
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 120) {
    trex.velocityY = -6;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);

  cloudSpawner();
  drawSprites();

  
  
}

function cloudSpawner(){
  if(frameCount % 50 === 0){
   var clouds =createSprite( 600,15);

   
  clouds.addImage(cloudsImg);
  clouds.velocityX= -5;
  console.log(frameCount);
   
  clouds.y = Math.round(random(0,100));
 trex.depth = clouds .depth ;
trex.depth = trex.depth +1;
  }
}

