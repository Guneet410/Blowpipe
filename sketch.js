const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
 // btn = loadImage("btn.png");
  bg_img = loadImage("bbb.png")
}

function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(800,650);
 ball = new Ball(350,200) 
 
  

 button = createImg("btn.png");
 button.position(600,200);
 button.size(200,100);
 button.mouseClicked(force);






 ground = new Base(0,640,1000,20)
 b1 = new Base (200,450,200,10)
 b2 = new Base(350,450,150,60)
}

function draw() {

  background(51);
  image(bg_img,0,0,490,690);

 
 
  Engine.update(engine);

  background(255,255,255);  
ball.display();
ground.display();
b1.display();
b2.display();
}


function force(){

  Matter.Body.applyForce(ball.body, {x:0,y:0} , {x:0,y:-0.08} )
}
















