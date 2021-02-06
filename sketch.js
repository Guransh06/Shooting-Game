var bgImg,bg;
var shooter,shooterImg;
var bullet,bulletImg;
var ghost,ghostImg;
var godzillaimg;
var fireImg,fire;
var warning;
var ghostGroup;
var bulletGroup;
var score=0;
var danger,dangerImg;
var count=0;
var gameState=1;

function preload(){
bgImg=loadImage("bg.png")
shooterImg=loadImage("sniper.png")
bulletImg=loadImage("bullet.png")
ghostImg=loadImage("ghost.png");
godzillaimg=loadImage("dragon.png");
fireImg=loadImage("fire.png");
dangerImg=loadImage("danger.png");
}

function setup() {
  createCanvas(1500,700);
  shooter=createSprite(300,600);
  shooter.addImage(shooterImg);
  shooter.scale=0.4;
  ghostGroup=new Group()
  bulletGroup=new Group()
  danger=createSprite(600,100);
  danger.addImage(dangerImg);
  danger.scale=0.1;
  danger.visible=false;
  
}


function draw() {


  background(bgImg);
 if(gameState===1){

 
  shooter.y=World.mouseY
  shooter.x=World.mouseX
 if(keyDown("space")){
   bullet=createSprite(500,500)
   bullet.y=shooter.y-67
   bullet.x=shooter.x
   bullet.addImage(bulletImg);
   bullet.scale=0.05;
   bullet.velocityX=10;
bulletGroup.add(bullet);
  }
  if(frameCount%50===0){
    ghost=createSprite(1700,600)
    ghost.y=Math.round(random(200,500));
    ghostGroup.add(ghost);
    var r=Math.round(random(1,3));
    if(r===1){
      ghost.addImage(ghostImg);
      ghost.scale=0.9;
      ghost.velocityX=-10
    }
    if(r===2){
      ghost.addImage(godzillaimg)
      ghost.scale=0.6
      ghost.velocityX=-10
    }
    if(r===3){
      ghost.addImage(fireImg)
      ghost.scale=0.2
      ghost.velocityX=-20
      
    }
   
    
   
  }
  if(bulletGroup.isTouching(ghostGroup)){
    ghostGroup.destroyEach();
    bulletGroup.destroyEach();
    score=score+1
    }
    if(ghostGroup.isTouching(shooter)){

count=count+1
    }
    if(ghostGroup.isTouching(shooter)&&count===200){
danger.visible=true;
      count=count+1
      gameState=0
          }
         
  drawSprites();
  textSize(30);
  fill("white")
  text("KILLS :"+score,1200,100)
  text("lives:"+count,200,100)
}
if(gameState===0){
  
    
    textSize(70);
    fill("blue");
    text("GAMEOVER ",600,300);
    count=0
    score=0
 

}
}