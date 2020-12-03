var gameState = 0; 
var playerCount = 0; 
var database; 

var form, player, game; 
var roleDecider; 

var allPlayers; 
var bg; 

var p1, p2, p3, p4, p5; 
var p1Img, p2Img, p3Img, p4Img, p5Img, infectorImg; 
var pArray; 

function preload()
{
  bg = loadImage("images/BACKGROUND.png"); 

  p1Image = loadImage("images/RED.png"); 
  p2Image = loadImage("images/BLUE.png"); 
  p3Image = loadImage("images/PURPLE.png"); 
  p4Image = loadImage("images/ORANGE.png"); 
  p5Image = loadImage("images/GREEN.png"); 
  infectorImage = loadImage("images/INFECTER.png"); 


}

function setup() {
  createCanvas(800, 700);

  database = firebase.database(); 
  game = new Game(); 
  game.getState(); 
  game.start(); 

  

}


function draw() {   

  if(playerCount == 5) {
    game.updateState(1); 
  }

  if(gameState == 1) {
    clear(); 
    game.play(); 
  }

}



