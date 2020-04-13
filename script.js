const languages = {
	en: "en",
	ru: "ru",
};

const classes = {
	wrapper: "wrapper",
	textarea: "textarea",
	keyboard: "keyboard",
	key: "key",
	wide: "key-wide",
	extraWide: "key-extra-wide",
	keyActive: "key-active",
};

const keys = {
	[languages.en]: [
		'`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9668', '&#9660', '&#9658', 'Ctrl'
	],
	[languages.ru]: [
		'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del', 'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9668', '&#9660', '&#9658', 'Ctrl'
	],
};

const keyCodes = [
	'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'
];

document.body.onload = init;

function init() {
	const wrapper = addWrapper();
	setLanguage();
	addTextArea(wrapper);
	const keyboard = addKeyboard(wrapper);
	addKeys(keyboard);
	setKeys();
	addNotes(wrapper);
}

function addWrapper() {
	const wrapper = document.createElement("div");

	wrapper.classList.add(classes.wrapper);
	document.body.insertBefore(wrapper, document.body.childNodes[0]);

	return wrapper;
}

function addTextArea(wrapper) {
	const textarea = document.createElement(classes.textarea);

	textarea.setAttribute("rows", "10");
	textarea.setAttribute("cols", "100");
	textarea.setAttribute("autofocus", "autofocus");
	wrapper.appendChild(textarea);
}

function addKeyboard(wrapper) {
	const keyboard = document.createElement("div");

	keyboard.classList.add(classes.keyboard);
	wrapper.appendChild(keyboard);

	return keyboard;
}

function addKeys(keyboard) {
	keyCodes.forEach((keyCode) => {
		const button = document.createElement("button");

		button.setAttribute("id", keyCode);
		button.className = classes.key;

		if (keyCode === "Backspace" ||
			keyCode === "Enter" ||
			keyCode === "CapsLock" ||
			keyCode === "ShiftLeft" ||
			keyCode === "ShiftRight") {
			button.classList.add(classes.wide);
		}
		else if (keyCode === "Space") {
			button.classList.add(classes.extraWide);
		}
	
		keyboard.appendChild(button);
	});
}

function addNotes(wrapper) {
	const notes = document.createElement("p");

	notes.innerText = `Windows OS
					Language change: Shift + Alt`;
	wrapper.appendChild(notes);
}

function getLanguage() {
	return localStorage.getItem("lang");
}

function setLanguage() {
	if (!getLanguage()) {
		localStorage.setItem("lang", languages.en);
	}
}

function toggleLanguage() {
	const currentLanguage = getLanguage();
	localStorage.setItem("lang", currentLanguage === languages.en ? languages.ru : languages.en);
}

document.addEventListener("keydown", (event) => {
	const key = document.getElementById(event.code);

	if (key) {
		key.classList.add(classes.keyActive);

		if (event.altKey && event.shiftKey) {
			toggleLanguage();
			setKeys();
		}
	}
});

document.addEventListener("keyup", (event) => {
	const key = document.getElementById(event.code);

	if (key) {
		key.classList.remove(classes.keyActive);
	}
});

function setKeys() {
	const [keyboard] = document.getElementsByClassName(classes.keyboard);

	keyboard.childNodes.forEach((button, index) => {
		button.innerHTML = keys[getLanguage()][index];
	});
}
