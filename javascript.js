// update_player_position('player1', 10);
$(document).ready(function(){ 

    var update_player_position = function(player){

      var update_location = function(current){
        var future = current.next('td');
        if (future.size() == 0 )
        {
        $('body').append("<h3>You Won!</h3>");
        $('body').append("<a id='restart' href='#'>Play Again</a>");
        }
        else 
        {
          current.removeClass();
          future.addClass('active');
        }
      };


      if (player == 1)
        {
        var starting_cell = $('tr[id = "player1_strip"] .active');
        }
      else if (player == 2) 
        {
        var starting_cell = $('tr[id = "player2_strip"] .active');
        }

      update_location(starting_cell);
    };



    $(document).keyup(function(e) {
      if ($('h3').size() == 0)  
      {
        if (e.which == 80)
          {
            update_player_position(1);
          }
        else if (e.which == 81)
        {
          update_player_position(2);
        }
      };
    });


// in progress
  // $('#restart').click(function(){
  //   console.log("clicked");
  //   $("h3").remove();
  //   $("#player1_strip").removeClass();
  //   $("#player2_strip").removeClass();
  //   $("#player1_strip:first-child").addClass('active');
  //   $("#player2_strip:first-child").addClass('active');
  //   $("#restart").remove();
  // });  

});
