// User interface
$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var name = $("input#player1").val();
    $("#titles").append(name);
    $("form#form").hide();
  });
