const fontSizeControlInput = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
fontSizeControlInput.addEventListener('input', changeFontSize);
function changeFontSize(event) {
	return text.style.fontSize = event.currentTarget.value  + 'px';
}