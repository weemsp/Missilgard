function TitleMenu() {
	this.title = "Missilgard";
	this.buttons = [
		{
			text : "Run",
			onclick : startNewGame
		},
		{
			text : "Boss Select",
			onclick : ()=>switchToMenu(new BossSelectMenu())
		},
		{
			text : "blip",
			onclick : ()=>playSFX("blip1")
		},
	]
}
TitleMenu.prototype = Object.create(Menu.prototype);