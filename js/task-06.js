const validationInput = document.querySelector('#validation-input');
validationInput.addEventListener('blur', checkingEntered);
function checkingEntered(event) {
	console.log(event.currentTarget.value.length)
	if (event.currentTarget.value.length > 6
		|| event.currentTarget.value.length < 6) {
		return validationInput.classList = 'invalid';
	} else { return validationInput.classList = 'valid'; }
}
