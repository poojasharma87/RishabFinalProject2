
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var platforms=[];
function preload()
{
	Manjumping = loadAnimation(
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump00.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump01.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump02.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump03.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump04.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump05.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump06.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump07.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump08.png',     
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump09.png'    
	  );
	  Manrunning = loadAnimation( 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/run01.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/run02.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/run03.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/Run04.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/run05.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/run06.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/run07.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/run08.png',     
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/run09.png'    
	  );
	  
	 gunImg=loadImage("Delta blasters.png");
	 //monsterImg=loadImage("Mirloc.png");
	 swordImg=loadImage("Samuraisword.png");
							

	  gameBackground = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/environments/industrialBackground.png');
platformBackground = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/environments/industrialPlatform.png');
gameFont = loadFont('https://la-wit.github.io/build-an-infinite-runner/build/fonts/ARCADE_R.TTF');
gameMusic = loadSound('https://la-wit.github.io/build-an-infinite-runner/build/sounds/generic-game-loop-4.mp3');
gameOverMusic = loadSound('https://la-wit.github.io/build-an-infinite-runner/build/sounds/over.mp3');
jumpSound = loadSound('https://la-wit.github.io/build-an-infinite-runner/build/sounds/jump07.mp3');
                      
}

function setup() {
	createCanvas(800,400);
	backgr=createSprite(400,200,1600,400);
	backgr.addImage(gameBackground);
	backgr.scale=1.0;
	backgr.velocityX=-2;
	backgr.x=backgr.width/2;

	player=createSprite(50,370,100,100);	;
	player.addAnimation("running",Manrunning);
	player.scale=2.0;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 
    
  
    if (backgr.x < 350){
      backgr.x = backgr.width/2;
    }
   if (keyDown("space")) {
	   player.velocityY=-10;
   }
   player.velocityY=player.velocityY+0.5;
    spawnPlatforms();
  for( var i=0;i<platforms.length;i++ ){
	
    player.collide(platforms[i]);
  }
  
  drawSprites();
}

function spawnPlatforms() {
  //write code here to spawn the platforms
  if (frameCount % 80 === 0) {
	platbg=createSprite(random(50,700),350,random(10,30),30);
	platbg.addImage(platformBackground);
	platbg.velocityX=-2;
	platbg.scale=0.25;
    platbg.debug=true;
    
     //assign lifetime to the variable
    platbg.lifetime = 200;
    
    //adjust the depth
    
    
    //add each cloud to the group
	platforms.push(platbg);
	console.log(platbg.x);
  }
  
}




