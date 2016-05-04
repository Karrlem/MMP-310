var bullets;
var symbols;
var player;
var playerImage, bulletImage;

function setup(){
createCanvas(800,600);
bg = loadImage("images/MMP310FinalBackground.png");
playerImage = loadImage("images/MMP310finalplayer.png");

player = createSprite(width/2, height/2);

player.addImage("normal",playerImage);
player.maxSpeed = 6;
player.friction = .98;
player.setCollider("circle",0,0,20);
player.debug = true;
}

function draw(){
background(bg);

if(keyDown(LEFT_ARROW))
	player.rotation -= 4;
if(keyDown(RIGHT_ARROW))
	player.rotation += 4;
if(keyDown(UP_ARROW)){
	player.addSpeed(.2,player.rotation);
}
//	player.rotation -= 4;
	drawSprites();
}
