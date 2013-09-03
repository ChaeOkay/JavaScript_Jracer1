//game to have prototype
//state - game.over? = t/f

var game_over = false

function gameOver(){
  $('.show_winner').append('<h1>We have a winner!</h1>');
}

function winner(){
  return $('#player1_strip td').last().hasClass('active') || $('#player2_strip td').last().hasClass('active') ;
}

function playerIsWinner(player) {
  return player.find('td').last().hasClass('active');
}

function advance(player) {
  var position = player.find('td.active');
  position.removeClass('active');
  position.next().addClass('active');
}

function detectKey(pressed) {
  switch(pressed) {
  case 81:
    return $('#player1_strip');
    break;
  case 80:
    return $('#player2_strip');
    break;
  }
}


$(document).ready(function() {
  $(document).on('keyup', function(event) {
    event.preventDefault();
    var player = detectKey(event.which);

    if (!winner()){
      advance(player);
    } else {
      if (!game_over) {
        gameOver();
        game_over = true ;
      }
    }
  });
});

