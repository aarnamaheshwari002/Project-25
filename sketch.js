
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(800, 700);

    engine = Engine.create();
	world = engine.world;
	Engine.run(engine);


	block1 = new block(400, 590, 200, 200);

	ball1 = new BALL(100, 745, 70);

	ground = new Ground(600,height,1200,20);
	
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
ground.display();

  block1.display();
  
  ball1.display();

  keyPressed();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){

    	Matter.Body.applyForce(ball1.body, ball1.body.position, {x:85, y:-85});
	
	}

}

