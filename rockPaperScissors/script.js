"use strict";

let computerSelection;
let playerSelection;
let winnerCount;

// Generates random number to calculate the computer play
function computerPlay() {
  let result;

  result = Math.random();

  if (result < 0.33) {
    console.log("Computer play was:\t rock");
    return "rock";
  }
  if (result >= 0.33 && result < 0.66) {
    console.log("Computer play was:\t paper");
    return "paper";
  }
  if (result >= 0.66) {
    console.log("Computer play was:\t scissors");
    return "scissors";
  }
  console.log(result);
}

// Captures the player play
function playerPlay() {
  let userChoice;

  userChoice = prompt(
    "Please enter your selection (rock, paper or scissors)"
  ).toLowerCase();
  console.log(`Player play was:\t ${userChoice}`);
  return userChoice;
}

// Computes who won and return the times a player wins
function playRound(playerSelection, computerSelection) {
  let count = 0;
  let draw = 0;
  playerSelection = playerPlay();
  computerSelection = computerPlay();

  if (playerSelection === computerSelection) {
    console.log("**** Draw!!");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(`**** You won!! ${playerSelection} beats ${computerSelection}`);
    count++;
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    console.log(
      `**** You lost!! ${computerSelection} beats ${playerSelection}`
    );
  }
  return count;
}

// Loops n times the rounds to play
function play(winnerCount) {
  let i;

  winnerCount = 0;
  for (i = 0; i < 5; i++) {
    winnerCount = winnerCount + playRound();
  }
  console.log(`Your score was ${winnerCount} out of ${i}`);
}

play();
