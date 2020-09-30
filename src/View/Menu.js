var menuElems;
const NUM_MENU_BUTTONS = 10;

function buildMenuView() {
	menuElems = {};
	menuElems.box = document.getElementById("MenuContainer");
	menuElems.titlebox = document.getElementById("titlebox");
	menuElems.buttons = [];
	for (var i = 0; i < NUM_MENU_BUTTONS; i++) {
		menuElems.buttons[i] = document.getElementById("button"+i);
	}
}

function setMenuView(menu) {
	gameElems.box.hidden = true;
	menuElems.box.hidden = false;
	menuElems.titlebox.hidden = false;
	menuElems.box.style.backgroundImage = "url('"+ menu.background +"')";
	menuElems.titlebox.src = menu.titleImgSrc;
	menuElems.titlebox.alt = menu.title;

	for (var i = 0; i < NUM_MENU_BUTTONS; i++) {
		if (menu.buttons[i]) {
			menuElems.buttons[i].hidden = false;
			menuElems.buttons[i].style.left = (WIDTH/2)-150 +"px";
			menuElems.buttons[i].style.top = 80*i+80 +"px";
			menuElems.buttons[i].innerHTML = menu.buttons[i].text;
			menuElems.buttons[i].style.backgroundImage = "url('" + menu.buttons[i].background + "')";
			menuElems.buttons[i].onclick = menu.buttons[i].onclick;
			if (menu.buttons[i].text == 'Exit') {
				menuElems.buttons[i].style.left = 40 +"px";
				menuElems.buttons[i].style.top = 40 +"px";
			}
		} else {
			menuElems.buttons[i].hidden = true;
		}
	}
}
