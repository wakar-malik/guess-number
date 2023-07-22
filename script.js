'use strict';
const body = document.body;
const number = document.querySelector('.number');
const input = document.querySelector('.guess');
const message = document.querySelector('.message');
const btn = document.querySelector('.check');
const score = document.querySelector('.score');
const high = document.querySelector('.highscore');
const again = document.querySelector('.again');

let currentScore = 20;
let randomNum = null;
let highScore = 0;
let localHighScore = window.localStorage.getItem('highscore');

score.textContent = currentScore;

const reset = () => {
  randomNum = Math.trunc(Math.random() * 20) + 1;
  body.style.backgroundColor = '#222';
  input.value = '';
  message.textContent = 'Start guessing...';
  currentScore = 20;
};

reset();

if (localHighScore) {
  high.textContent = localHighScore;
} else {
  high.textContent = highScore;
}

btn.addEventListener('click', function (e) {
  if (+input.value === randomNum) {
    message.textContent = '🌟You Won!';
    body.style.backgroundColor = '#60b347';

    if (currentScore >= +localHighScore) {
      window.localStorage.setItem('highscore', currentScore);
      localHighScore = window.localStorage.getItem('highscore');
      high.textContent = localHighScore;
      number.textContent = randomNum;
      currentScore = 20;
    }
  } else if (+input.value < randomNum) {
    message.textContent = 'Too Low!';
    currentScore -= 1;
    score.textContent = currentScore;
  } else if (+input.value > randomNum) {
    message.textContent = 'Too High!';
  }
});

again.addEventListener('click', reset);
