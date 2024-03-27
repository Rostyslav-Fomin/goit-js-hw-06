const inputName = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
inputName.addEventListener('input', enterName);
function enterName(event) {
	nameOutput.textContent = event.currentTarget.value;
}
