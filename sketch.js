
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var engine,world;
var ground;

var ball, ball2;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  
  
  var ballOptions={
    restitution: 1.0
  }

  ball=Bodies.circle(400,100,10,ballOptions);
  World.add(world,ball);
  //console.log(ball);

  ball2=Bodies.circle(200,100,8,ballOptions);
  World.add(world,ball2);
  console.log(ball2);

  var groundOptions={
    isStatic: true
  }
  ground=Bodies.rectangle(400,390,100,10,groundOptions);
  World.add(world,ground);
}

function draw() {
  background("gold");
  Engine.update(engine);
  fill("green");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10);
  fill("red");
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,50,50);
  ellipse(ball2.position.x,ball2.position.y,30,30);
  
}