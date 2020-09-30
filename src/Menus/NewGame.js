function BossSelectMenu() {
	this.title = "Difficulty";
	this.background = "src/Images/Backgrounds/menu_bg.png";
	this.titleImgSrc = "src/Images/BossSelectBar.png";
	this.buttons = [
		{
			text : "Missilgatlr",
			onclick : function() { startNewGame('Missilgatlr') },
			background : 'src/Images/Buttons/OrangeBtn.png'
		},
		{
			text : "Stratoblaster",
			onclick : function () { startNewGame('Stratoblaster') },
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
			text : "Exit",
			onclick : function () { switchToMenu(new TitleMenu()) },
			background : 'src/Images/Buttons/RedBtn.png'
		}
	]
}
BossSelectMenu.prototype = Object.create(Menu.prototype);
