//Business Logic 
const Player = function(name, score, playerTurn) {
  this.name = name;
  this.score = score;
  this.playerTurn = playerTurn;
}

const playerOne = {};
const playerTwo = {};

//UI logic
$(document).ready(function() {
  $("#player-sign-in-form").submit(function(event) {
    event.preventDefault();
    const player1Name = $("#player1").val();
    const player2Name = $("#player2").val();

    $("#sign-in").hide();
    $("#pig-dice").show();
  });
});