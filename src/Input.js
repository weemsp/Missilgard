//TODO this shit
//@author P
var inputVector = new VectorRect(0, 0);

var inputButtons = {
	
};

for (b in KEYBINDS) {
	inputButtons[KEYBINDS[b]] = false;
}

/*class GamepadInput extends Input {
	constructor(gpindex, binds, stickbinds, stickbindNames) {
		super();
		this.gpindex = gpindex;
		this.setBinds(binds, stickbinds, stickbindNames);
	}
	updateBefore() {
		
	}
	getMoveVector() {
		var gp = getGamepad(this.gpindex);
		return new VectorRect(gp.axes[0], gp.axes[1]).capR(1);
	}
}*/

function getGamepad(gpindex) {
	return navigator.getGamepads()[gpindex];
}

function updateInputsBefore() {
	var x = inputButtons.L_right + inputButtons.R_right - inputButtons.L_left - inputButtons.R_left;
	var y = inputButtons.L_down + inputButtons.R_down - inputButtons.L_up - inputButtons.R_up;
	var slow = inputButtons.L_gear + inputButtons.R_gear;
	
	inputVector = new VectorRect(x, y).capR(slow ? .4 : 1);
}

function updateInputsAfter() {
	//controllers.forEach(co=>co.updateAfter());
	//globalInput.updateAfter();
}

document.addEventListener("keydown", function(e) {
	e.preventDefault();
	inputButtons[KEYBINDS[e.keyCode]] = true;
});

document.addEventListener("keyup", function(e) {
	inputButtons[KEYBINDS[e.keyCode]] = false;
});

/*window.addEventListener("gamepadconnected", function(e) {
	gp = e.gamepad;
	if (gp.buttons.length >= 4 && !controllers.find(co => co.gpindex == gp.index))
		controllers.push(new GamepadInput(gp.index, controlSettings.gamepad));
});*/