var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,place1,place2,place3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
	place1 = createSprite(400,20,100,20);
	place2 = createSprite(420,20,20,100);
	place3 = createSprite(520,20,100,20);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

Matter.Body.setStatic(place1,false);
Matter.Body.setStatic(place2,false);
Matter.Body.setStatic(place3,false);

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	packageSprite.velocityY = 10;
  }

  packageSprite.x = packageSprite.position.x;
  packageSprite.y = packageSprite.position.y;
}



