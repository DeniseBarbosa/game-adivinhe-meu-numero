'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //Quando não ha entrada..
  if (!guess) {
    displayMessage('Espaço esta vazio!');
    //Quando o jogador vence..
  } else if (guess === secretNumber) {
    displayMessage('Vc acertou');
    document.querySelector('.number').textContent = secretNumber;

    // A cor muda quando o jogador ganha e caixa que fica o numero aumenta too
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Quando a estimativa esta errada
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? '(muito quente) MUITO ALTO'
          : '(muito frio) MUITO BAIXO'
      );
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Fim de jogo para você!!!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Comece a adivinhar...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  ducument.querySelector('.number').style.width = '15rem';
});
