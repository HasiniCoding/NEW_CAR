class Game {
  constructor() {}

  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount = player.getCount()
  }

  getState() {
    var gameStateref = database.ref("gameState")
    gameStateref.on("value",function(data){
      gameState = data.val()
    })
    
  }
  update(state){
    database.ref("/").update({
      gameState:state
    })
  }
}
