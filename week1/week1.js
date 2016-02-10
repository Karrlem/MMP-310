/* javascript goes here */
//draw a plane with width 200 and height 200
function setup(){
  createCanvas(1200, 960);
   
}

function draw(){
    background('black');
    
    
    //pink circle
    fill('red');
    stroke('red');
    ellipse(width/2,height/2,900,900);
    
    //orange circle
    fill('orange');
    stroke('orange');
    ellipse(width/2,height/2,800,800);
    
    //yellow circle
     fill('yellow');
    stroke('yellow');
    ellipse(width/2,height/2,700,700);
    
    //green circle
      fill('green');
    stroke('green');
    ellipse(width/2,height/2,600,600);
    
    //blue circle
      fill('blue');
    stroke('blue');
    ellipse(width/2,height/2,500,500);
    
    //purple circle
     fill('purple');
    stroke('purple');
    ellipse(width/2,height/2,400,400);
    
     image(img, 450,350);
    
    
   
}

var img;
function preload(){
 img = loadImage("images/porky.png")   
}