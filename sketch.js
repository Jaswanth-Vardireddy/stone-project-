const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var stone1,stone2;
var rope;
var backgroundImage;
var brick1;
var ground;
var level = 1;
var timing = 0;
var stone=[];
function preload() {
  backgroundImage = loadImage("sprites/background.jpg");
  stone1Image = loadImage("sprites/image2.png")
  stone2Image = loadImage("sprites/image3.png")
}

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  stone1 = new Stone(300, 500, 55, 55, "brown",stone1Image);
  stone2 = new Stone(300, 500, 55, 55, "brown",stone2Image);
  brick1 = new Brick(600, 700, 70, 90);
  brick2 = new Brick(600, 760, 70, 90);
  brick3 = new Brick(700, 700, 70, 90);
  brick4 = new Brick(700, 760, 70, 90);
  brick5 = new Brick(600, 780, 70, 90);
  brick6 = new Brick(700, 780, 70, 90);
  ground = new Ground(400, 790, width, 30, "green");
  //stone2=new Stone()
  rope = new Rope(stone1.body, { x: 200, y: 500 });
  //pushing the stone into the array
  stone.push(stone2)
  stone.push(stone1)
  
}

function draw() {
  background(backgroundImage);
  Engine.update(engine);

  
  ground.display();
  textSize(100);
  text("Level: 1", 0, 100);
  timing = timing + (frameCount % 60 === 0);
  text("Time" + timing, 300, 100);
  if(timing>0&&timing<5)
  {
    level1();
  }
  else if(timing>5&&timing<10)
  {
    level2();
  }
}

function mouseDragged() {
    Matter.Body.setPosition(stone[stone.length-1].body,{ x: mouseX, y: mouseY });
  }
  
  function mouseReleased() {
    rope.fling();
    stone.pop();
  }
  
  function keyPressed() {
    if (keyCode === 32) {
      rope.attach(stone[stone.length-1].body);
      Matter.Body.setPosition(stone[stone.length-1].body, { x: 200, y: 500 });
    }
  }

function level1() {
    stone1.display();
    brick1.display();
    brick2.display();
    brick3.display();
    brick4.display();
    brick5.display();
    brick6.display();
    rope.display();
   
}

function level2() {
stone2.display();

}
