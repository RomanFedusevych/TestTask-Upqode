'use strict';

const background = document.querySelector('.header');
const arrowRight = document.querySelector('.arrow--right');
const arrowLeft = document.querySelector('.arrow--left');

function toTurnPicture() {
  let numberOfPicture = 1;

  function toChangeLocationOfPicture(number) {
    const newClass = background.className.replace(/[0-9]/, number);

    background.className = newClass;
  }

  arrowRight.addEventListener('click', (e) => {
    numberOfPicture++;

    if (numberOfPicture === 3) {
      numberOfPicture = 1;
    }

    toChangeLocationOfPicture(numberOfPicture);
  });

  arrowLeft.addEventListener('click', (e) => {
    numberOfPicture--;

    if (numberOfPicture === 0) {
      numberOfPicture = 2;
    }

    toChangeLocationOfPicture(numberOfPicture);
  });
}

toTurnPicture();
