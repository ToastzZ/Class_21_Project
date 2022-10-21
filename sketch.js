
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj, leftSide, rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 1200);	

	engine = Engine.create();
	world = engine.world;

    var ball_options={
		isStatic: false,
		restitution: 0.3,
		friciton:0,
		density : 1.2
	}

	//Create the Bodies Here.

    ball = Bodies.circle(25, 5, 30, ball_options)
	World.add(world, ball);


	groundObj = new Ground(width/2,670, width,20);
	leftSide = new Ground (1050, 600,20,120);
	rightSide = new Ground (1250, 600, 20, 120);
	Engine.run(engine);
  
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x, ball.position.y, 30, 30,)
 // drawSprites();
  groundObj.show();
  leftSide.show();
  rightSide.show();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:85,y:-85});
	}
}



