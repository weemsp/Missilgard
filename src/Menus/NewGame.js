function BossSelectMenu() {
	this.title = "Difficulty";
	this.background = "src/Images/Backgrounds/menu_bg.png";
	this.titleImgSrc = "src/Images/BossSelectBar.png";
	this.buttons = [
		{
			text : "Missilgatlr",
			onclick : function() { startNewGame('Missilgatlr') },	//Not entirely sure why I need to wrap this in
			background : 'src/Images/Buttons/OrangeBtn.png'	//a function, but it didn't work otherwise
		},
		{
			text : "Homing",
			onclick : function () { startNewGame('Homing') },
			background : 'src/Images/Buttons/OrangeBtn.png'
		},
		{
			text : "Evil",
			onclick : function () { startNewGame('Evil') },
			background : 'src/Images/Buttons/OrangeBtn.png'
		},
		{
			text : "Spiralism",
			onclick : function () { startNewGame('Spiralism') },
			background : 'src/Images/Buttons/OrangeBtn.png'
		},
		{
			text : "Flurry",
			onclick : function () { startNewGame('Flurry') },
			background : 'src/Images/Buttons/OrangeBtn.png'
		},
		{
			text : "Exit",
			onclick : function () { switchToMenu(new TitleMenu()) },
			background : 'src/Images/Buttons/RedBtn.png'
		}
	]
}
BossSelectMenu.prototype = Object.create(Menu.prototype);
