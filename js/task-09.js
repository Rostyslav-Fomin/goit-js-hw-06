function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const buttonChangeBodyBackgroundColor = document.querySelector('.change-color');
const nameColor = document.querySelector('.color');
buttonChangeBodyBackgroundColor.addEventListener('click', changeBodyColor);
function changeBodyColor(event) {
  const RANDOM_COLOR = getRandomHexColor();
  body.style.backgroundColor = RANDOM_COLOR;
  nameColor.textContent = RANDOM_COLOR;
}