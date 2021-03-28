const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options ={
    isStatic: true
  }
  ground = Bodies.rectangle(200,400,400,20, ground_options);
  World.add(world,ground);

  var ball_options ={
    restitution: 1.0
  }
  ball = Bodies.circle(100,100,10,ball_options);
  World.add(world,ball);
}

function draw() {
  background("lightgreen"); 
  Engine.update(engine);
  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x, ground.position.y,400,20);

  ellipseMode(RADIUS);
  fill("green")
  ellipse(ball.position.x, ball.position.y,10);
}