class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){

    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();

    }
   player1 = createSprite(120, displayHeight/2,10,60);
   player1.addImage(player_img);
   player1.scale = 0.05;
   player2 = createSprite(displayWidth-120,displayHeight/2,10,60);
   player2.addImage(player_img);
   player2.scale = 0.05;
   players=[player1,player2];
   
   ball = createSprite(displayWidth/2, displayHeight/2,30,30);
   ball.addImage(ball_img);
   ball.scale = 0.05;
   //edges = createEdgeSprites();
  }

  play(){
    form.hide();

    Player.getPlayerInfo();

    image(back_img, 0, 0, 1400, 800);

    var x = 100;
    var y =200;
    var index = 0;
    
   for (var plr  in allPlayers){


     index = index +1;
     x = 200;
     y = 500- allPlayers[plr].distance;
    // players[index - 1].x = displayWidth-x;
     players[index - 1].y = y;
     drawSprites();            
    if(index === player.index){
 fill("black");
textSize(25);
text(allPlayers[plr].name ,x-25,y+25);
                    
}
textSize(25);
fill("white");
text("Player 1 :" +allPlayers.player1.score,50,50);
text("Player 2 :" + allPlayers.player2.score, 50, 100);
                    }
                   
     // }
    

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=20
      player.update();
    }
if(keyIsDown(DOWN_ARROW) && player.index !== null){
      player.distance -=20
      player.update();
    }

if(ball.isTouching(player1) || ball.isTouching(player2)) {
playSound("hit.mp3", false);
}
      
if(ball.x > displayWidth - 100 || ball.x < 10){
  if(ball.x > displayWidth - 100){
  player1_score = player1_score + 1;
  }
  
  if(ball.x < 10){
  player2_score = player2_score + 1;
  }
  }
     
     ball.bounceOff(edges[2]);
     ball.bounceOff(edges[3]);
     ball.bounceOff(player1);
     ball.bounceOff(player2);
  
  }
}
