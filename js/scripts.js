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
 
