var Engine = Matter.Engine,
 World = Matter.World,
 Bodies = Matter.Bodies



var engine, world, ball, ground;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    restitution : 1
  }

  ball = Bodies.circle(200,200,50,options)
  World.add(world, ball)

  var ground_options = {
    isStatic : true
  }

ground = Bodies.rectangle(400,350,800,40,ground_options)
  World.add(world, ground)
 
}

function draw() {
  background(0,0,0);
  Engine.update(engine) 
  fill("RED")
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 50,50)
  fill("GRAY")
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,40)
}