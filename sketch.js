
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var ground,boy,tree,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,r1,s1;
function preload()
{
	mang = loadImage("mango.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,650,800,100)
	boy = new Boy(300,500,100,200)
	tree = new Tree(600,270,500,700)
	s1 = new stone(250,500,20);
	r1 = new Rope(s1.body,{x:250,y:450})
	mango1 = new Mango(580,270,30)
	mango2 = new Mango(480,200,40)
	mango3 = new Mango(500,290,40)
	mango4 = new Mango(680,230,50)
	mango5 = new Mango(660,300,50)
	mango6 = new Mango(550,350,50)
	mango7 = new Mango(700,400,50)
	mango8 = new Mango(600,150,50)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  boy.display();
  tree.display();
  s1.display();
  r1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display(); 
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  ground.display();
  detectCollision(s1,mango1)
   detectCollision(s1,mango2)
	detectCollision(s1,mango3)
	detectCollision(s1,mango4)
	detectCollision(s1,mango5)
	detectCollision(s1,mango6)
	detectCollision(s1,mango7)
	detectCollision(s1,mango8)
	
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(s1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    r1.fly()
}

function detectCollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

}

