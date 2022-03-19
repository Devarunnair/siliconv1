var bg,bg2,form,system,code,security;
var score=0;


function preload() {
  bg = loadImage("bgfruit.jpg");
  
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("black");
  text("Score: " + score, 850, 50);

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
  textFont("Castellar")
  textSize(40)
  text("Healthify", 440, 50) 
  
  
  
}