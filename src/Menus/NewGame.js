function BossSelectMenu() {
	this.title = "Difficulty";
	this.buttons = [
		{
			text : "Missilgatlr",
			onclick : function() { startNewGame('Missilgatlr') }	//Not entirely sure why I need to wrap this in
		},															//a function, but it didn't work otherwise
		{
			text : "Homing",
			onclick : function () { startNewGame('Homing') }
		},
		{
			text : "Evil",
			onclick : function () { startNewGame('Evil') }
		},
	]
}
BossSelectMenu.prototype = Object.create(Menu.prototype);