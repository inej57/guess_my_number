'use strict';

let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
const check = function () {
  // document.querySelector('.number').textContent = randomNumber;
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'only number ';

    //correct answer
  } else if (guess === randomNumber) {
    document.querySelector('.message').textContent = '🥇 correct answer....';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      console.log('1');
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('.number').textContent = randomNumber;
    // wrong guess
  } else if (guess !== randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > randomNumber ? 'guess lower ⬇' : 'guess higher ⬆';

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'u lost the game! 😔';
      document.querySelector('.score').textContent = 0;
    }
  }
};
document.querySelector('.check').addEventListener('click', check);

//again function
const again = function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.message').textContent = 'start again....';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
};
//agin button
document.querySelector('.again').addEventListener('click', again);
