function BossSelectMenu() {
	this.title = "Difficulty";
	this.background = "src/Images/Backgrounds/menu_bg.png";
	this.titleImgSrc = "src/Images/boss_select_title.png";
	this.buttons = [
		{
			text : "Missilgatlr",
			onclick : function() { startNewGame('Missilgatlr') },
			background : 'src/Images/Buttons/MissilgatlrButton.png'
		},
		{
			text : "Stratoblaster",
			onclick : function () { startNewGame('Stratoblaster') },
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
			text : "Exit",
			onclick : function () { switchToMenu(new TitleMenu()) },
			background : 'src/Images/Buttons/ExitButton.png'
		}
	]
}
BossSelectMenu.prototype = Object.create(Menu.prototype);
