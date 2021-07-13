"use strict";

// elements
let diceImage = document.querySelector(".dice");
let totalScore0 = document.querySelector("#score--0");
let totalScore1 = document.querySelector("#score--1");
let currentScore0 = document.getElementById("current--0");
let currentScore1 = document.getElementById("current--1");
let player0El = document.querySelector(".player--0");
let player1El = document.querySelector(".player--1");
const player0Name = document.queryCommandEnabled("#name--0");
const player1Name = document.queryCommandEnabled("#name--1");

// score starts at 0
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// btn roll on click:
document.querySelector(".btn--roll").addEventListener("click", function () {
  // generate random number 1-6
  let dice = Math.floor(Math.random() * 6) + 1;

  // remove hidden display and display the corresponding dice image
  diceImage.classList.remove("hidden");
  diceImage.src = `images/dice-${dice}.png`;

  // if dice roll is not 1, add it to current score
  if (dice !== 1) {
    currentScore += dice;
    activePlayer === 0
      ? (currentScore0.textContent = currentScore)
      : (currentScore1.textContent = currentScore);
  }
  // else if dice equal to 1, switch active player and reset current score
  else if (dice === 1) {
    currentScore = 0;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  }
});

// Hold button adds current score to current player total score
document.querySelector(".btn--hold").addEventListener("click", function () {
  // if scores are under 100, keep playing
  if (scores[activePlayer] + currentScore < 100) {
    // Adding current score to main score
    scores[activePlayer] += currentScore;
    activePlayer === 0
      ? (totalScore0.textContent = scores[0])
      : (totalScore1.textContent = scores[1]);

    // Resetting current score to 0 to switch to next player
    currentScore = 0;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;

    // If player 0 was playing, switch to player 1. Vice versa
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
    diceImage.classList.add("hidden");

    // If a score is above 100
  } else if (scores[activePlayer] + currentScore >= 100) {
    // Add current score to main score
    scores[activePlayer] += currentScore;
    activePlayer === 0
      ? (totalScore0.textContent = scores[0])
      : (totalScore1.textContent = scores[1]);

    // Reset scores to 0, for cleaner end game
    currentScore = 0;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
  }
});

// New Game button resets game
document.querySelector(".btn--new").addEventListener("click", function () {
  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  totalScore0.textContent = 0;
  totalScore1.textContent = 0;
  diceImage.classList.add("hidden");
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
});
