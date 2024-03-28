const validationInput = document.querySelector('#validation-input');
validationInput.addEventListener('blur', checkingEntered);
function checkingEntered(event) {
	if (event.currentTarget.value.length > validationInput.getAttribute('data-length')
		|| event.currentTarget.value.length < validationInput.getAttribute('data-length')) {
		return validationInput.classList = 'invalid';
	} else { return validationInput.classList = 'valid'; }
}
