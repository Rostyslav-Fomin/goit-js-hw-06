const fontSizeControlInput = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
fontSizeControlInput.addEventListener('input', changeFontSize);
function changeFontSize(event) {
	console.log(event.currentTarget.value);
	return text.style.fontSize = event.currentTarget.value  + 'px';
}