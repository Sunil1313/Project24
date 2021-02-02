
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var hammer;
var plane;
var stone;
var rubber;
var sand1,sand2,sand3,sand4,sand5,sand6;
var iron;

function setup() {  
	createCanvas(800, 700);
     

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    hammer = new Hammer(100,100);
    plane = new Plane(400,680,800,20);
    stone = new Stone(720,160,70,70);
	  rubber = new Rubber(300,150);
    sand1 = new Sand(100,400);
    sand2 = new Sand(120,420);
    sand3 = new Sand(160,460);
    sand4 = new Sand(410,160);
    sand5 = new Sand(450,180);
    sand6 = new Sand(500,200);
    iron = new Iron(600,200,70,20);
 
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  hammer.display(); 
  plane.display();
  stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  iron.display();
  drawSprites();
}


