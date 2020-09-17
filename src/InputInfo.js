//TODO this shit
//@author P

const COMMAND_LIST = ["left", "right", "up", "down", "gear", "pause"];

const KEYBINDS = {
	65 : "L_left",
	68 : "L_right",
	87 : "L_up",
	83 : "L_down",
	16 : "L_gear",
	37 : "R_left",
	39 : "R_right",
	38 : "R_up",
	40 : "R_down",
	96 : "R_gear",
}

const INPUT_INFO = {
	left : {
		keyboardL : 65,
		keyboardR : 37,
		defaultGamepad : 14,
		defaultStickFunc : gp => gp.axes[0] <= -.7,
		defaultStickText : "L←",
	},
	right : {
		keyboardL : 68,
		keyboardR : 39,
		defaultGamepad : 15,
		defaultStickFunc : gp => gp.axes[0] >= .7,
		defaultStickText : "L→",
	},
	up : {
		keyboardL : 87,
		keyboardR : 38,
		defaultGamepad : 12,
		defaultStickFunc : gp => gp.axes[1] <= -.7,
		defaultStickText : "L↑",
	},
	down : {
		keyboardL : 83,
		keyboardR : 40,
		defaultGamepad : 13,
		defaultStickFunc : gp => gp.axes[1] >= .7,
		defaultStickText : "L↓",
	},
	gear : {
		keyboardL : 16,
		keyboardR : 96,
	},
	pause : {
		defaultKeyboard : 80,
		defaultGamepad : 9,
	},
}