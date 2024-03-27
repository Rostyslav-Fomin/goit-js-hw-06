function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const imputNumberOfColection = document.querySelector('input');
const boxesContainer = document.querySelector('#boxes');
boxesContainer.style.display = 'flex';
boxesContainer.style.justifyContent = 'center';
boxesContainer.style.flexWrap = 'wrap';
boxesContainer.style.gap = '10px';
boxesContainer.style.margin = '50px';

imputNumberOfColection.addEventListener('input', amount)
buttonCreate.addEventListener('click', onButtonCreate)
buttonDestroy.addEventListener('click', onButtonDestroy)

function amount(event) {
  return amount = event.currentTarget.value;
}
function onButtonCreate(event) {
  createBoxes(amount)
}
function createBoxes(amount){
  let value = 30;
  const box = document.createElement("div");
      box.style.width = `${value}px`;
      box.style.height = `${value}px`;
      box.style.backgroundColor = getRandomHexColor();
  const ARRAY = [];
  ARRAY.push(box);
  for (let i = 1; i < amount; i += 1) {
    value += 10;
    const box = document.createElement("div");
      box.style.width = `${value}px`;
      box.style.height = `${value}px`;
      box.style.backgroundColor = getRandomHexColor();
      ARRAY.push(box);
  }
  boxesContainer.append(...ARRAY);
}
function onButtonDestroy(event) {
  destroyBoxes()
}
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}