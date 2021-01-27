
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var ball;
var bin1,bin2,bin3;
function preload()
{
	
}



function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	ground=new Ground(600,690,1200,20);
	ball=new Ball(100,100,20);
	bin1=new Bin(1100,630,20,200);
	bin2=new Bin(900,630,20,200);
	bin3=new Bin(1000,600,180,20);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  background(255);
  bin3.display();

  ground.display();
  ball.display();
  
 
  if(keyWentDown("up")){
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:100,y:-100});
  }

 
}



