var bullets;
var symbols;
var player;
var playerImage, bulletImage;
var enemies;
var enemyImages;
var shoot;
var hitEnemy;
var die;

function setup(){
createCanvas(800,600);
bg = loadImage("images/MMP310FinalBackground.png");
playerImage = loadImage("images/MMP310finalplayer.png");
bulletImage = loadImage("images/bullet.png");
//enemyImages = ;
soundFormats('mp3');
shoot = loadSound('sounds/shoot.mp3');
die = loadSound('sounds/playerexplosion.mp3');
hit = loadSound('sounds/hit.mp3');

player = createSprite(width/2, height/2);

player.addImage("normal",playerImage);
player.maxSpeed = 10;
player.friction = .98;
player.setCollider("circle",0,0,32);
player.debug = true;

//enemies = new group();
bullets = new Group();
}

function draw(){
background(bg);

fill('red');
textAlign(CENTER);
textSize(20);
text("Controls: Arrow Keys to move + space to shoot", width/2, 30);
fill(0);
text("Karrlem Lewis",153, 80);
text("MMP310 Final",153,106);
text("Mastroids", 133, 132);


if(keyDown(LEFT_ARROW))
	player.rotation -= 4;
if(keyDown(RIGHT_ARROW))
	player.rotation += 4;
if(keyDown(UP_ARROW)){
	player.addSpeed(.2,player.rotation);
}

if(keyWentDown("space")){
	var bullet = createSprite(player.position.x,player.position.y);
	bullet.addImage("normal", bulletImage);
	bullet.setSpeed(10+player.getSpeed(), player.rotation);
	bullet.life = 30;
	bullets.add(bullet);
	shoot.play();
//	bullet.debug = true;

	}
	drawSprites();
}

function createEnemies(type, x, y){
	var e = createSprite(x,y);
	var img = loadImage("images/enemy"+ floor(random(0,4))+"png");
	e.addImage(img);
	e.setSpeed(2.5-(type/2),random(360));
	e.debug = true;
	e.type = type;

	if(type == 2)
		e.scale = .6;
	if(type == 1)
		e.scale = .3;

	e.mass = 2+e.scale;
	e.setCollider("circle", 0 , 0, 50);
	enemies.add(e);
	return e;
}
