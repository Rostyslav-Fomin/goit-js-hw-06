const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector('#ingredients');
const ingredientsElArray = [];
ingredients.forEach((element) => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = element;
  ingredientEl.classList = 'item';
  ingredientsElArray.push(ingredientEl);
})
ingredientsEl.append(...ingredientsElArray);

