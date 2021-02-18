const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world;
var ground, ball;

function setup() {
  createCanvas(1200,550);
  engine = Engine.create();
  world = engine.world;
  var dribble = {
    restitution:1
  }
  ball = Bodies.circle(300,110,29,dribble)
  World.add(world,ball)
  var still=
  {
    isStatic:true
  }
  ground = Bodies.rectangle(190,545,400,20,still);
  World.add(world,ground);
}
  ground = Bodies.rectangle()
  ball = Bodies.circle()


function draw() {
  background(0,0,0);  
  Engine.update(engine); 
  rectMode(CENTER)
  rect(100,545,2300,10);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,34,34)
  drawSprites();
}