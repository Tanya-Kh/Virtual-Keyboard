const wrapper = document.createElement("div");
const keyboard = document.createElement("div");
const textarea = document.createElement("textarea");

document.body.onload = init();

function init() {
	addWrapper();
	addTextArea();
	addKeyboard();
	addKeys();
}

function addWrapper() {
	wrapper.classList.add("wrapper");
	document.body.insertBefore(wrapper, document.body.childNodes[0]);
}

function addTextArea() {
	textarea.setAttribute("rows", "10");
	textarea.setAttribute("cols", "100");
	textarea.setAttribute("autofocus", "autofocus");
	wrapper.appendChild(textarea);
}

function addKeyboard() {
	keyboard.classList.add("keyboard");
	wrapper.appendChild(keyboard);
}

function addKeys() {

	const keys = [
		'`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y',
		'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'',
		'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650', 'Shift', 'Ctrl', 'Win', 'Alt',
		' ', 'Alt', 'Ctrl', '&#9668', '&#9660', '&#9658'
	];

	for (let i = 0; i < keys.length; i++) {
		let button = document.createElement("button");
		button.innerHTML = keys[i];
		button.className = "key";
		if (keys[i] == "Backspace" ||
			keys[i] == "Enter" ||
			keys[i] == "Caps Lock") {
			button.classList.add("key-wide");
		}
		if (keys[i] == " ") {
			button.classList.add("key-extra-wide");
		}
		if (keys[i] == "Shift") {
			button.classList.add("key-shift");
		}
		keyboard.appendChild(button);
	}
}
