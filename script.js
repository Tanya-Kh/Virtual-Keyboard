const wrapper = document.createElement("div");
const keyboard = document.createElement("div");
const textarea = document.createElement("textarea");
let langEn = true;
let keysPressed = [];

const keys = [
	'`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9668', '&#9660', '&#9658', 'Ctrl'
];

const keyCodes = [
	'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'
];

const russianKeys = [
	'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del', 'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9668', '&#9660', '&#9658', 'Ctrl'
];

document.body.onload = init();

function init() {
	addWrapper();
	addTextArea();
	addKeyboard();
	addKeys();
	addNotes();
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
	for (let i = 0; i < keys.length; i++) {
		let button = document.createElement("button");
		button.innerHTML = keys[i];
		button.setAttribute("id", keyCodes[i]);
		button.className = "key";

		if (keys[i] == "Backspace" ||
			keys[i] == "Enter" ||
			keys[i] == "Caps Lock") {
			button.classList.add("key-wide");
		}
		else if (keys[i] == " ") {
			button.classList.add("key-extra-wide");
		}
		else if (keys[i] == "Shift") {
			button.classList.add("key-shift");
		}
		keyboard.appendChild(button);
	}
}

function addNotes() {
	let notes = document.createElement("p");
	notes.innerHTML = "Windows OS<br>Language change: Shift + Alt";
	wrapper.appendChild(notes);
}

document.addEventListener("keydown", function (event) {

	if (document.getElementById(event.code)) {
		document.getElementById(event.code).classList.add("key-active");
		keysPressed.push(event.code);
		if ((keysPressed[0] == "ShiftLeft" && event.code == "AltLeft") ||
			(keysPressed[0] == "AltLeft" && event.code == "ShiftLeft")) {
			changeLang();
		}
	}
});

document.addEventListener("keyup", function (event) {

	if (document.getElementById(event.code)) {
		document.getElementById(event.code).classList.remove("key-active");
		keysPressed.length = 0;
	}
});

function changeLang() {
	langEn == true ? langEn = false : langEn = true;
	changeKeys();
}

function changeKeys() {
	let alphabet;
	let keyboardKeys = document.getElementsByClassName("keyboard")[0];

	if (langEn) {
		alphabet = keys;
	} else {
		alphabet = russianKeys;
	}

	for (let i = 0; i < alphabet.length; i++) {
		let button = keyboardKeys.childNodes[i];
		button.innerHTML = alphabet[i];
	}

}


