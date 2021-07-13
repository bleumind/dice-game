"use strict";

// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// // document.querySelector('.guess').value = 23;

// Creates random number to guess
function randomNum() {
  return Math.floor(Math.random() * 50 + 1);
}
let computerNumber = randomNum();

// Scores
let score = 10;
let highScore = 0;

// Repeated functions
function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}
function displayScore(score) {
  document.querySelector(".score").textContent = score;
}

// Test number input against created number upon click on "check"
document.querySelector(".check").addEventListener("click", function () {
  let guess = document.querySelector(".guess").value;
  guess = Number(guess);

  if (!guess) {
    displayMessage("No Number!");
  } else if (guess === computerNumber) {
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    document.querySelector(".number").style.width = "30rem";
    document.querySelector("body").style.backgroundColor = "#60B347";
    document.querySelector(".number").textContent = computerNumber;
    displayScore(score);
    displayMessage("Win!");
  } else if (guess !== computerNumber) {
    if (score > 1) {
      score--;
      displayScore(score);
      displayMessage(guess > computerNumber ? "Lower!" : "Higher!");
    } else {
      displayScore(0);
      displayMessage("You Lose. Try Again!");
      document.querySelector("body").style.backgroundColor = "rgb(204, 49, 49)";
    }
  }
});

// Again button
document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  computerNumber = randomNum();
  document.querySelector(".highscore").textContent = highScore;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  displayScore(score);
});
