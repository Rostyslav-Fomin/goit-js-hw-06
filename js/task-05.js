const inputName = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
inputName.addEventListener('input', enterName);
function enterName(event) {
	if (event.currentTarget.value === '') {
		nameOutput.textContent = 'Anonymous';
	} else {
		nameOutput.textContent = event.currentTarget.value;
	}
}
