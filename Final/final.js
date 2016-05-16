var bullets;
var symbols;
var player;
var playerImage, bulletImage;
var enemies;
var enemyImages;
var shoot;
var hitEnemy;
var die;
var MARGIN = 40;
var submit = document.getElementById("submit");
var score;

//var randomSprite;
function preload(){
	stage = loadSound('sounds/stage.mp3');
	stage.play();

}
function setup(){
createCanvas(800,600);
bg = loadImage("images/MMP310FinalBackground.png");
playerImage = loadImage("images/MMP310finalplayer.png");
bulletImage = loadImage("images/bullet.png");
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

enemies = new Group();
bullets = new Group();

for(var i = 0; i<4; i++) {
	enemySpawn();
}

//	randomSprite = createSprite(500, 500, 20, 20);
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

for(var i=0; i< allSprites.length; i++){
  var s = allSprites[i];
  if(s.position.x<-MARGIN) s.position.x = width+MARGIN;
  if(s.position.x>width+MARGIN) s.position.x = -MARGIN;
  if(s.position.y<-MARGIN) s.position.y = height+MARGIN;
  if(s.position.y>height+MARGIN) s.position.y = -MARGIN;
}

enemies.overlap(bullets,enemyHit);
enemies.forEach( function(enemy)  {
	enemy.move();
});
player.overlap(enemies,playerHit);

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
	bullet.debug = true;

	}
	drawSprites();
}

function createEnemy(type, x, y){
	var e = createSprite(x,y);
	var img = loadImage("images/enemy"+ floor(random(0,4))+".png");
	e.addImage(img);
	//e.setSpeed(2.5-(type/2),random(360));
	e.move = function() {
		if (e.position.x > player.position.x)
		e.velocity.x = -1;
		else e.velocity.x = 1;
		if (e.position.y > player.position.y)
		e.velocity.y = -1;
		else e.velocity.y = 1;

		enemies.forEach( function(en) {
			if (en != e) {
				e.bounce(en);
			}

		});
	}
	e.debug = true;
	e.type = type;

	if(type == 2)
		e.scale = .6;
	if(type == 1)
		e.scale = .3;

	e.mass = 2+e.scale;
	e.setCollider("circle", 0 , 0, 20);
	enemies.add(e);
	return e;
}
function enemyHit(enemy, bullet){
bullet.remove();
enemy.remove();
enemySpawn();
score +10;

}


function playerHit(){
player.remove();
hit.play();
}

function enemySpawn(){
  var ang = random(360);
  var px = width/2 + 1000 * cos(radians(ang));
  var py = height/2+ 1000 * sin(radians(ang));
  createEnemy(3, px, py);
}
setInterval(enemySpawn, 10000);
