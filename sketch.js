const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground,paper1,box1,box2,box3


function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

  ground=new Ground(600,650,1200,5)
	//Create the Bodies Here.
  paper1=new Paper(60,600,40,40)
  box1=new Box(780,590,140,120);
 
  //box2=new Box(600,620,20,100);
  //box3=new Box(700,620,20,100);

  Engine.run(engine)
	
}


function draw() {
 
  
  rectMode(CENTER);
  background("grey");

  Engine.update(engine);
  paper1.display();
  ground.display();
  box1.display();
  drawSprites();
 
}

function keyPressed(){
    if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:15,y:-15})
    
    }
    
}

