// User interface
$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var name = $("input#player1").val();
    $("#title").append(name);
    $("form#form").hide();
  });
  $("form#form2").submit(function(event) {
   event.preventDefault();
   var name = $("input#player2").val();
   $("#title").append(name);
   $("form#form2").hide();
 });
 $('button#roll').click(function() {
    scoreBoard(player1, player2);
    answer = $(".answer1").text(score);
  });
  $('button#roll2').click(function() {
    scoreBoard(player1, player2);
    answer = $(".answer2").text(score);
  });
});

// Business Logic
var answer
var player = function(name, score) {
  this.name = name;
  this.score = 0;
}
