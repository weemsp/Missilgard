function TitleMenu() {
	this.title = "Missilgard";
	this.background = "src/Images/Backgrounds/menu_bg.png";
	this.titleImgSrc = "src/Images/TitleBar.png";
	this.buttons = [
		{
			text : "Play",
			onclick : function(){startNewGame("Rush")},
			background : 'src/Images/Buttons/PlayButton.png'
		},
		{
			text : "Boss Select",
			onclick : function(){switchToMenu(new BossSelectMenu())},
			background : 'src/Images/Buttons/BossButton.png'
		},
		{
			text : "blip",
			onclick : function(){playSFX("blip1")},
			background : 'src/Images/Buttons/OrangeButton.png'
		},
	]
}
TitleMenu.prototype = Object.create(Menu.prototype);
