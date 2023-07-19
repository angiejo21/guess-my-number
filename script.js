'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const number = document.querySelector('.number');
const guessInputValue = document.querySelector('.guess');

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
function updateScore(score) {
  document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = +guessInputValue.value;
  // When there is no input
  if (!guess) {
    displayMessage('🛑 No number!');
    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    number.textContent = secretNumber;
    document.body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      updateScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      document.body.style.backgroundColor = '#BA265D';
      updateScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  number.textContent = '?';
  updateScore(score);
  guessInputValue.value = '';

  document.body.style.backgroundColor = '#222';
  number.style.width = '15rem';
});
