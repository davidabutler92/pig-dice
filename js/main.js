//Business Logic 
const Player = function(name, score, playerTurn) {
  this.name = name;
  this.score = score;
  this.playerTurn = playerTurn;
}

Player.prototype.addScore = function() {
  this.score += roundTotal;
  console.log('inside add score!');
}

let playerOne = {};
let playerTwo = {};

let rolled = 0;
let roundTotal = 0;
const roll = () => {
  rolled = Math.floor(Math.random()*6) + 1;
  console.log("dice #", rolled);
  $("#alert").hide();
  if(rolled !== 1) {
    roundTotal = roundTotal + rolled;
    console.log(roundTotal);
  } else {
    roundTotal = 0;
    $("#alert").show();
    endTurn();
  }
}

const endTurn = () => {
  if(playerOne.playerTurn === true) {
    playerOne.playerTurn = false;
    playerTwo.playerTurn = true;
    $("#player-one-checkmark-image").hide();
    $("#player-two-checkmark-image").show();
  } else if(playerTwo.playerTurn === true) {
    playerTwo.playerTurn = false;
    playerOne.playerTurn = true;
    $("#player-two-checkmark-image").hide();
    $("#player-one-checkmark-image").show();
  }
}

const winner = () => {
  if(playerOne.score >= 20) {
    // alert(playerOne.name + " " + "is the winner!");
    $("#hold-button").prop("disabled", true);
    $("#roll-button").prop("disabled", true);
    $("#play-again-button").show();
    $("#win-alert").text("Congrats! " + playerOne.name + ", you won!")
    $("#winning-alert-div").show();
  } else if(playerTwo.score >= 20) {
    // alert(playerTwo.name + " " + "is the winner!");
    $("#hold-button").prop("disabled", true);
    $("#roll-button").prop("disabled", true);
    $("#play-again-button").show();
    $("#win-alert").text("Congrats! " + playerTwo.name + ", you won!")
    $("#winning-alert-div").show();
  }
}

const reload = () => {
  location.reload();
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
    $("#play-again-button").hide();
    $("#jumbotron1").hide();
    $("#roll-button").click(function() {
      roll();
      $("#total-score").text(roundTotal);
    });

    $("#hold-button").click(function() {
      if(playerOne.playerTurn === true) {
        playerOne.addScore();
        $("#player-one-score").text(playerOne.score);
        winner();
        endTurn();
      } else if(playerTwo.playerTurn === true) {
        playerTwo.addScore();
        $("#player-two-score").text(playerTwo.score);
        winner();
        endTurn();
      }
      roundTotal = 0;
      $("#total-score").text(roundTotal);
    }); 

    $("#play-again-button").click(function() {
      reload();
    });
  });
});
