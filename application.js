function Player(player_name, key) {
  this.player_name = player_name,
  this.key = key,
  this.position = 0
};

function Game(player1, player2) {
  this.player1 = player1,
  this.player2 = player2
};

Game.prototype.onKeyUp = function(key){
  console.log(key);
};

$(document).ready(function() {
  var player1 = new Player("Player1", 80);
  var player2 = new Player("Player2", 81);

  var game = new Game(player1, player2);

  $(document).on('keyup', function(event) {
    event.preventDefault();
    game.onKeyUp(event.which);
  });
});
