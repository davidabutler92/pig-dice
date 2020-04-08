//Business Logic 
const Player = function(name, score, playerTurn) {
  this.name = name;
  this.score = score;
  this.playerTurn = playerTurn;
}

const endTurn = () => {
  
}

let rolled = 0;
let roundTotal = 0;
const roll = () => {
  rolled = Math.floor(Math.random()*6)+1;
  if(roundTotal !== 1) {
    roundTotal = roundTotal + rolled;
  } else {
    roundTotal = 0;
  }
}

let playerOne = {};
let playerTwo = {};

//UI logic
$(document).ready(function() {
  $("#player-sign-in-form").submit(function(event) {
    event.preventDefault();
    const player1Name = $("#player1").val();
    const player2Name = $("#player2").val();
    playerOne = new Player(player1Name, 0, true);
    playerTwo = new Player(player2Name, 0, false);

    $("#sign-in").hide();
    $("#pig-dice").show();
    $("#player-one-name").text(playerOne.name);
    $("#player-one-score").text(playerOne.score);
    $("#player-two-name").text(playerTwo.name);
    $("#player-two-score").text(playerTwo.score);

    $("#roll-button").click(function() {
    
    });
    $("#hold-button").click(function() {

    }); 

  });
});