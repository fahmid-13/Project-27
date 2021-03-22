const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject_1, bobObject_2, bobObject_3, bobObject_4, bobObject_5;
var roof;
var rope_1, rope_2, rope_3, rope_4, rope_5;

//function preload(){
	
//}

function setup() {
	createCanvas(800, 700);

	var engine = Engine.create();
	var world = engine.world;

	//Create the Bodies Here.
	bobObject_1 = new Bob(100, 650, 50, 50, PI/2);

	bobObject_2 = new Bob(150, 650, 50, 50, PI/2);

	bobObject_3 = new Bob(200, 650, 50, 50, PI/2);

	bobObject_4 = new Bob(250, 650, 50, 50, PI/2);

	bobObject_5 = new Bob(300, 650, 50, 50, PI/2);

	roof = new Roof(400, 100);

	rope_1 = new Rope(bobObject_1.body, roof.body, -bobDiameter*2, 0);
	
	rope_2 = new Rope(bobObject_2.body, roof.body, -bobDiameter*2, 0);

	rope_3 = new Rope(bobObject_3.body, roof.body, -bobDiameter*2, 0);

	rope_4 = new Rope(bobObject_4.body, roof.body, -bobDiameter*2, 0);

	rope_5 = new Rope(bobObject_5.body, roof.body, -bobDiameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();
 
  bobObject_1.display();
  bobObject_2.display();
  bobObject_3.display();
  bobObject_4.display();
  bobObject_5.display();

  roof.display();

  rope_1.display();
  rope_2.display();
  rope_3.display();
  rope_4.display();
  rope_5.display();
}



