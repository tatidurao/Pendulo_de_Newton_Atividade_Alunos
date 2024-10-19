
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

var bola1,bola2,bola3, bola4,bola5
var corda1,corda2,corda3, corda4,corda5;
var teto
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	var optionsTeto={
		isStatic:true			
	}
	var optionsBola={
		inertia: Infinity, 
		restitution: 1, 
		friction: 0, 
		frictionAir: 0, 
		slop: 20 * 0.02,
		density: 0.1,
		
	}
	
	teto = Bodies.rectangle(400,250,230,20, optionsTeto)
	World.add(world, teto)

	bola1 = Bodies.circle(320,575,20,optionsBola)
	World.add(world, bola1)

	bola2 = Bodies.circle(360,575,20, optionsBola)
	World.add(world, bola2);


	optionsCorda1={
		bodyA: bola1,//bola
		bodyB: teto, //teto
		pointB:{x:-80, y:0}
	}

	optionsCorda2={
		bodyA: bola2,//bola
		bodyB: teto, //teto
		pointB:{x:-40, y:0}
	}


	corda1 = Constraint.create(optionsCorda1)
	World.add(world, corda1)

	corda2 = Constraint.create(optionsCorda2)
	World.add(world, corda2)
	
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  //teto
  fill(128,128,128)
  rect(teto.position.x, teto.position.y,230,20)
  //bola
  fill(255,0,255)
  ellipse(bola1.position.x,bola1.position.y,40)
  ellipse(bola2.position.x,bola2.position.y,40)

  //corda
  //x1 y1 x2 y2
  line(corda1.bodyA.position.x, corda1.bodyA.position.y, corda1.bodyB.position.x -80,corda1.bodyB.position.y)
  line(corda2.bodyA.position.x, corda2.bodyA.position.y, corda2.bodyB.position.x -40,corda2.bodyB.position.y)

  
  
 
  textSize(30);
  text (mouseX + "," + mouseY, mouseX, mouseY)

  
  }

  function keyPressed() {
	if (keyCode === LEFT_ARROW) {
		Matter.Body.applyForce(bola1, bola1.position, {x:-2 ,y:0})

	}	  
}		


