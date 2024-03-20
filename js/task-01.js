const categoriesEl = document.querySelectorAll('.item')
console.log('Number of categories:', categoriesEl.length)
const functionOfCategories = categoriesEl.forEach((element) => {
	console.log('Category:', element.querySelector('h2').textContent);
	console.log('Elements:', element.querySelector('ul').children.length);
})