var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var ball;
var form, player, game;
var player1,player2,players 
var bg;
var ball_img;
var player;
var player1_score = 0;
var player2_score = 0;

function preload(){
back_img = loadImage("images/bg.jpg");
player_img = loadImage("images/player.png");
ball_img = loadImage("images/ball.png");
}


function setup(){
  canvas = createCanvas(displayWidth-100,displayHeight-100);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  edges = createEdgeSprites();
  
}


function draw(){

 if(keyIsDown(UP_ARROW){
   ball.velocityX=10;
   ball.velocityY=10;
 }


  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
