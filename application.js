function Player(name, key) {
  this.name = name,
  this.key = key,
  this.position = 0
};

function Game(player1, player2) {
  this.player1 = player1,
  this.player2 = player2,
  this.over = false
};


Game.prototype.onKeyUp = function(key){
  switch(key)
  {
    case this.player1.key:
      this.player1.position += 1
      break;
    case this.player2.key:
      this.player2.position += 1
      break;
  }
};

Game.prototype.render = function(){
  var player1 = this.player1.position
  $('#player1_strip td').eq(player1-1).removeClass('active');
  $('#player1_strip td').eq(player1).addClass('active');

  var player2 = this.player2.position
  $('#player2_strip td').eq(player2-1).removeClass('active');
  $('#player2_strip td').eq(player2).addClass('active');

  this.hasWinner();
}

Game.prototype.hasWinner = function(){
  if ( $('#player1_strip td').last().hasClass('active') == true ) {
    this.over = true;
    this.showWinner(this.player1.name);
  } else if ( $('#player2_strip td').last().hasClass('active') == true ) {
    this.over = true;
    this.showWinner(this.player1.name);
  } else {
    console.log('no player has won');
  }
}

Game.prototype.showWinner = function(playerName){
  $('#winner').append('<h1>' + playerName + ' is the winner! </h1>');
}


$(document).ready(function() {
  var player1 = new Player("Player1", 80);
  var player2 = new Player("Player2", 81);
  var game = new Game(player1, player2);

  $(document).on('keyup', function(event) {
    event.preventDefault();

    if (game.over == false) {
      game.onKeyUp(event.which);
      game.render();
    }
  });

});
