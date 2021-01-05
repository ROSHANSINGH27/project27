
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


var ground



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground1=new Ground(400,200,40,20)
  ground2=new Ground(360,200,40,20)
  ground3=new Ground(320,200,40,20)
	ground4=new Ground(440,200,40,20)
	ground5=new Ground(480,200,40,20)



	bob1=new Bob (400,350,20)
	bob2=new Bob (360,350,20)
	bob3=new Bob (320,350,20)
	bob4=new Bob (440,350,20)
	bob5=new Bob (480,350,20)

	
    chain1=new Chain(bob1.body,ground1.body)
    chain2=new Chain(bob2.body,ground2.body)
    chain3=new Chain(bob3.body,ground3.body)
    chain4=new Chain(bob4.body,ground4.body)
    chain5=new Chain(bob5.body,ground5.body)




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(150);

  ground1.display()
  ground2.display()
  ground3.display()
  ground4.display()
  ground5.display()

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

chain1.display()
chain2.display()
chain3.display()
chain4.display()
chain5.display()


  drawSprites();
 
}



