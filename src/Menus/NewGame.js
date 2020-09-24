function BossSelectMenu() {
	this.title = "Difficulty";
	this.buttons = [
		{
			text : "Missilgatlr",
			onclick : startNewGame
		},
		{
			text : "Homing",
			onclick : startNewGame
		},
	]
}
BossSelectMenu.prototype = Object.create(Menu.prototype);