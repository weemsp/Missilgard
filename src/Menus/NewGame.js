function BossSelectMenu() {
	this.title = "Difficulty";
	this.background = "src/Images/Backgrounds/menu_bg.png";
	this.titleImgSrc = "src/Images/boss_select_title.png";
	this.buttons = [
		{
			text : "Missilgatlr",
			onclick : function() { startNewGame('Missilgatlr') },	//Not entirely sure why I need to wrap this in
			background : 'src/Images/Buttons/MissilgatlrButton.png'	//a function, but it didn't work otherwise
		},
		{
			text : "Homing",
			onclick : function () { startNewGame('Homing') },
			background : 'src/Images/Buttons/HomingButton.png'
		},
		{
			text : "Evil",
			onclick : function () { startNewGame('Evil') },
			background : 'src/Images/Buttons/EvilButton.png'
		},
		{
			text : "Spiralism",
			onclick : function () { startNewGame('Spiralism') },
			background : 'src/Images/Buttons/SpiralismButton.png'
		},
		{
			text : "Flurry",
			onclick : function () { startNewGame('Flurry') },
			background : 'src/Images/Buttons/FlurryButton.png'
		},
		{
			text : "Exit",
			onclick : function () { switchToMenu(new TitleMenu()) },
			background : 'src/Images/Buttons/ExitButton.png'
		}
	]
}
BossSelectMenu.prototype = Object.create(Menu.prototype);
