function TitleMenu() {
	this.title = "Missilgard";
	this.background = "src/Images/Backgrounds/menu_bg.png";
	this.titleImgSrc = "src/Images/menu_title.png";
	this.buttons = [
		{
			text : "Play",
			onclick : startNewGame,
			background : 'src/Images/Buttons/PlayButton.png'
		},
		{
			text : "Boss Select",
			onclick : ()=>switchToMenu(new BossSelectMenu()),
			background : 'src/Images/Buttons/BossButton.png'
		},
		{
			text : "blip",
			onclick : ()=>playSFX("blip1"),
			background : 'src/Images/Buttons/OrangeButton.png'
		},
	]
}
TitleMenu.prototype = Object.create(Menu.prototype);
