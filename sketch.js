
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  treeObj=loadImage("images/treeObj.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,25);
	mango2=new mango(1120,200,30);
	mango3=new mango(900,260,40);
	mango4=new mango(990,100,30);
	mango5=new mango(1050,170,50);
	mango6=new mango(1150,100,30);
	mango7=new mango(1075,50,45);
	mango8=new mango(970,200,30);
	mango9=new mango(1170,240,30);
    mango10=new mango(1025,260,30);
	mango11=new mango(930,180,30);
	mango12=new mango(1220,180,40);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj=new Object(20,20,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  groundObject.display();
  stoneObj.display();
  
}
