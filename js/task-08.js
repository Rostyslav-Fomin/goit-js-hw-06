const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', onSubmit);
function onSubmit(event) {
	event.preventDefault();

	const { email, password } = event.currentTarget.elements;
	if (email.value === '' || password.value === '') {
		alert('Всі поля повинні бути заповнені');
	} else {
		const userData = {
		email: email.value,
		password: password.value
	}
		console.log(userData);
		loginForm.reset();
	}
};
