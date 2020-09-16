//TODO this shit
//@author P
var controllers = [];

class Input {
	constructor() {
		COMMAND_LIST.forEach(nom =>	{
			this[nom] = false;
			this[nom+"Clicked"] = false;
		});
	}
	updateAfter() {
		this.unClick();
	}
	unClick() {
		COMMAND_LIST.forEach(nom =>	this[nom+"Clicked"] = false);
	}
	setBinds(newbinds) {
		if (newbinds)
			this.binds = newbinds;
		this.rbinds = [];
		for (var b in this.binds) {
			if (!this.rbinds[this.binds[b]])
				this.rbinds[this.binds[b]] = [b];
			else
				this.rbinds[this.binds[b]].push(b);
		}
	}
	setCommand(name, pressed) {
		if (pressed && !this[name])
			this[name+"Clicked"] = true;
		this[name] = pressed;
	}
	getMoveVector() {
		var x = this.right - this.left;
		var y = this.down - this.up;
		//console.log(x, y);
		return new VectorRect(x, y).capR(1);
	}
}

class KeyboardInput extends Input {
	constructor(binds) {
		super();
		this.setBinds(binds);
	}
	updateBefore() {
		
	}
	keyDown(keycode) {
		this.setKey(keycode, true);
	}
	keyUp(keycode) {
		this.setKey(keycode, false);
	}
	setKey(index, pressed) {
		let r = this.rbinds[index];
		//console.log(r)
		if (r) {
			r.forEach(b => this.setCommand(b, pressed));
		}
	}
	getBindText(command) {
		return "[" + KEY_NAMES[this.binds[command]] + "]"; 
	}
	getMoveVector() {
		var x = this.right - this.left;
		var y = this.down - this.up;
		//console.log(x, y);
		var sp = this.gear ? 0.3 : 1;
		//console.log(this.gear)
		return new VectorRect(x, y).capR(sp);
	}
}
//KeyboardInput.prototype.binds = DEFAULT_BINDS_KEYBOARD;

class NormalKeyboardInput extends KeyboardInput {
	
}

class GamepadInput extends Input {
	constructor(gpindex, binds, stickbinds, stickbindNames) {
		super();
		this.gpindex = gpindex;
		this.setBinds(binds, stickbinds, stickbindNames);
	}
	updateBefore() {
		var gamepad = getGamepad(this.gpindex);
		//console.log(gamepad)
		//usingGamepad = !!gamepad;
		if (!gamepad)
			return;
		COMMAND_LIST.forEach(com => {
			//console.log(com);
			this[com+"Last"] = this[com];
			this[com] = (this.binds[com] >= 0 && gamepad.buttons[this.binds[com]].pressed) || (this.stickbinds[com] && this.stickbinds[com](gamepad));
			this[com+"Clicked"] = this[com] && !this[com+"Last"];
		});
		/*gamepad.buttons.forEach((p, d) => {
			this.setButton(d, p.pressed)
		});*/
	}
	setBinds(binds, stickbinds, stickbindNames) {
		super.setBinds(binds);
		if (stickbinds) {
			this.stickbinds = stickbinds;
			this.stickbindNames = stickbindNames;
		}
	}
	getBindText(command) {
		var butt = GAMEPAD_BUTTON_NAMES[this.binds[command]]; 
		var stick = this.stickbindNames[command];
		if (butt && stick)
			return "(" + butt + ")/(" + stick + ")";
		else if (stick)
			return "(" + stick + ")";
		else
			return "(" + butt + ")";
	}
}
GamepadInput.prototype.stickbinds = {};
GamepadInput.prototype.stickbindNames = {};
COMMAND_LIST.forEach(com => {
	if (CONTROLS_INFO[com].defaultStickFunc) {
		GamepadInput.prototype.stickbinds[com] = CONTROLS_INFO[com].defaultStickFunc;
		GamepadInput.prototype.stickbindNames[com] = CONTROLS_INFO[com].defaultStickText;
	}
});

function getGamepad(gpindex) {
	return navigator.getGamepads()[gpindex];
}
//GamepadInput.prototype.binds = DEFAULT_BINDS_GAMEPAD;

var globalInput = {
	updateBefore : function() {
		COMMAND_LIST.forEach(comm => {
			this[comm] = controllers.reduce((acc, cont) => acc || cont[comm], false);
			this[comm+"Clicked"] = controllers.reduce((acc, cont) => acc || cont[comm+"Clicked"], false);
		});
	},
	updateAfter : Input.prototype.unClick,
	getBindText(command) {
		return controllers.map(con => con.getBindText(command)).join("/");
	}
}

function updateInputsBefore() {
	controllers.forEach(co=>co.updateBefore());
	globalInput.updateBefore();
}

function updateInputsAfter() {
	//if (controllers.length <= 0)
	//	controllers.push(new KeyboardInput(controlSettings.keyboard));
	controllers.forEach(co=>co.updateAfter());
	globalInput.updateAfter();
}

function getInput(type) {
	var found = controllers.find(c => c instanceof type);
	if (found) {
		return found;
	} else {
		var newc = new (type)();
		controllers.push(newc);
		return newc;
	}
}

/*COMMAND_LIST.forEach(function(nom) {
	controller[nom] = false;
});*/

var extraKeyListener = null;

document.addEventListener("keydown", function(e) {
	e.preventDefault();
	if (extraKeyListener)
		extraKeyListener(e);
	var keh = false;
	controllers.forEach(co => {
		if (co instanceof KeyboardInput) {
			co.keyDown(e.keyCode);
			keh = true;
		}
	});
	if (!keh) {
		var newcon = new NormalKeyboardInput(controlSettings.keyboard);
		controllers.push(newcon);
		newcon.keyDown(e.keyCode);
	}
});

document.addEventListener("keyup", function(e) {
	controllers.forEach(co => {
		if (co instanceof KeyboardInput)
			co.keyUp(e.keyCode);
	});
});

window.addEventListener("gamepadconnected", function(e) {
	gp = e.gamepad;
	if (gp.buttons.length >= 4 && !controllers.find(co => co.gpindex == gp.index))
		controllers.push(new GamepadInput(gp.index, controlSettings.gamepad));
});