const decrement = document.querySelector('[data-action="decrement"]')
const increment = document.querySelector('[data-action="increment"]')
const value = document.querySelector('#value')
let counterValue = 0;
decrement.addEventListener('click', onButton)
increment.addEventListener('click', onButton)
function onButton(event) {
	if (event.currentTarget === decrement) {
		counterValue -= 1;
		return value.textContent = counterValue;
	} if (event.currentTarget === increment) {
		counterValue += 1;
		return value.textContent = counterValue;
}
}