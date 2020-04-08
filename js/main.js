//Business Logic 
const Player = function(name, score, playerTurn) {
  this.name = name;
  this.score = score;
  this.playerTurn = playerTurn;
}

Player.prototype.addScore = () => {
  this.score += roundTotal;
  console.log('inside add score!');
  console.log(roundTotal);
  console.log("player's score", this.score);
}

let playerOne = {};
let playerTwo = {};

let rolled = 0;
let roundTotal = 0;
const roll = () => {
  rolled = Math.floor(Math.random()*6) + 1;
  console.log("dice #", rolled);
  if(rolled !== 1) {
    roundTotal = roundTotal + rolled;
    console.log(roundTotal);
  } else {
    roundTotal = 0;
    endTurn();
    console.log(roundTotal);
  }
}

const endTurn = () => {
  if(playerOne.playerTurn === true) {
    playerOne.playerTurn = false;
    playerTwo.playerTurn = true;
  } else if(playerTwo.playerTurn === true) {
    playerTwo.playerTurn = false;
    playerOne.playerTurn = true;
  }
}

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
      roll();
      $("#total-score").text(roundTotal);
    });

    $("#hold-button").click(function() {
      if(playerOne.playerTurn === true) {
        playerOne.addScore();
        $("player-one-score").text(playerOne.score);
        endTurn();
      } else if(playerTwo.playerTurn === true) {
        playerTwo.addScore();
        $("#player-two-score").text(playerTwo.score);
        endTurn();
      }
      roundTotal = 0;
    
    }); 
  });
});