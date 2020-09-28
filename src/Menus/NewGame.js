function BossSelectMenu() {
	this.title = "Difficulty";
	this.background = "src/Images/Backgrounds/menu_bg.png";
	this.titleImgSrc = "src/Images/boss_select_title.png";
	this.buttons = [
		{
			text : "Missilgatlr",
			onclick : function() { startNewGame('Missilgatlr') }
			//Not entirely sure why I need to wrap this in
		},															//a function, but it didn't work otherwise
		{
			text : "Homing",
			onclick : function () { startNewGame('Homing') }
		},
		{
			text : "Evil",
			onclick : function () { startNewGame('Evil') }
		},
		{
			text : "Spiralism",
			onclick : function () { startNewGame('Spiralism') }
		},
		{
			text : "Flurry",
			onclick : function () { startNewGame('Flurry') }
		}
	]
}
BossSelectMenu.prototype = Object.create(Menu.prototype);
