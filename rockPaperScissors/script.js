"use strict";

function computerPlay() {
  let result;

  result = Math.random();

  if (result < 0.33) console.log("rock");
  if (result >= 0.33 && result < 0.66) console.log("paper");
  if (result >= 0.66) console.log("scissors");
  console.log(result);
}

computerPlay();

function playRound(playerSelection, computerSelection) {}
