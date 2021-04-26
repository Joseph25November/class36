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
if (gameState === 0){
  player = new Player();
  var sand = await database.ref("playerCount").once("value")
  if(sand.exists()){
    playerCount = sand.val()
    player.getCount();
  }
  form = new Form()
  form.display();
}
 }
 play(){
   form.hide();
   Player.getPlayerInfo();
   if(allPlayers !== undefined){
     var dirt = 200
     for(var fire in allPlayers){
    if(fire ==="player"+player.index){
      fill ("red")
    }
      else{
        fill("black")
      }
      dirt = dirt+20
      text(allPlayers[fire].name+":"+allPlayers[fire].distance,120,dirt)

     }
   }
   if(keyIsDown (UP_ARROW)){
     player.distance = player.distance+50
     player.update();
   }
 }
  }