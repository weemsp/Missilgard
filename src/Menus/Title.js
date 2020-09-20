function TitleMenu() {
	this.title = "Missilgard";
	this.buttons = [
		{
			text : "Play",
			onclick : startNewGame
		},
		{
			text : "blip",
			onclick : ()=>playSFX("blip1")
		},
	]
}
TitleMenu.prototype = Object.create(Menu.prototype);