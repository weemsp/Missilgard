var menuElems;
const NUM_MENU_BUTTONS = 10;

function buildMenuView() {
	menuElems = {};
	menuElems.box = document.getElementById("MenuContainer");
	menuElems.titlebox = document.getElementById("titlebox");
	menuElems.volSlider = document.getElementById("vol-control");
	menuElems.volSlider.style.top = HEIGHT-40 +"px";
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
	menuElems.titlebox.style.position = 'fixed';
	menuElems.titlebox.style.width = "300px";
	menuElems.titlebox.style.top = "75px";
	menuElems.titlebox.style.left = (WIDTH/2)-150 +"px";

	for (var i = 0; i < NUM_MENU_BUTTONS; i++) {
		if (menu.buttons[i]) {
			menuElems.buttons[i].hidden = false;
			menuElems.buttons[i].style.position = 'fixed';
			menuElems.buttons[i].style.width = '150px';
			menuElems.buttons[i].style.left = (WIDTH/2) +"px";
			// menuElems.buttons[i].style.top = Math.floor(HEIGHT*(i+1)/(menu.buttons.length+1)) +"px";
			menuElems.buttons[i].style.top = 80*i+200 +"px";
			menuElems.buttons[i].alt = menu.buttons[i].text;
			menuElems.buttons[i].src = menu.buttons[i].background;
			menuElems.buttons[i].onclick = menu.buttons[i].onclick;
			if (menu.buttons[i].text == 'Exit') {
				menuElems.buttons[i].style.width = '100px';
				menuElems.buttons[i].style.left = 70 +"px";
				menuElems.buttons[i].style.top = 40 +"px";
			}
		} else {
			menuElems.buttons[i].hidden = true;
		}
	}
}
