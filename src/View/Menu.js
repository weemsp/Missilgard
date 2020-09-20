var menuElems;
const NUM_MENU_BUTTONS = 4;

function buildMenuView() {
	menuElems = {};
	menuElems.box = document.getElementById("MenuContainer");
	menuElems.buttons = [];
	for (var i = 0; i < NUM_MENU_BUTTONS; i++) {
		menuElems.buttons[i] = document.getElementById("button"+i);
	}
}

function setMenuView(menu) {
	gameElems.box.hidden = true;
	menuElems.box.hidden = false;
	for (var i = 0; i < NUM_MENU_BUTTONS; i++) {
		if (menu.buttons[i]) {
			menuElems.buttons[i].hidden = false;
			menuElems.buttons[i].style.top = Math.floor(HEIGHT*(i+1)/(menu.buttons.length+1)) +"px";
			menuElems.buttons[i].innerHTML = menu.buttons[i].text;
			menuElems.buttons[i].onclick = menu.buttons[i].onclick;
		} else {
			menuElems.buttons[i].hidden = true;
		}
	}
}

