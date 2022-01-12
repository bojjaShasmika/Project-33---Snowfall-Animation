var backgr_img;
var snowfall, snowfall_webp, snowGroup;


function preload(){
backgr_img = loadImage("Snow_down.jpg");
snowfall_webp = loadImage("snow5.webp");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  snowGroup = createGroup();

  
}

function draw() {
  background(backgr_img);  
  spawnSnow();
  drawSprites();
}

function spawnSnow(){
  if (frameCount % 60 === 0) {
    snowfall = createSprite(600,100,40,10);
   snowfall.x = random(10,width-10);
   snowfall.addImage(snowfall_webp);
   snowfall.scale = 0.1;
   snowfall.velocityY = 10;
   
    //assign lifetime to the variable
   snowfall.lifetime = 134;

   
   
   //adding cloud to the group
  snowGroup.add(snowfall)
  }
}