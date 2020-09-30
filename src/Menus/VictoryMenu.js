function VictoryMenu(victory) {
	this.title = "Victory Screen";
    this.background = "src/Images/Backgrounds/MediumBackground.png";

    if(victory) {
    this.titleImgSrc = "src/Images/VictoryBar.png";
    }
    else {
        this.titleImgSrc = "src/Images/DefeatBar.png";
    }

	this.buttons = [
		{
			text : "Play again",
			onclick: function(){startNewGame("Rush")},
			background : 'src/Images/Buttons/GreenBtn.png'
		},
		{
			text : "Return to menu",
			onclick : function(){switchToMenu(new TitleMenu())},
			background : 'src/Images/Buttons/OrangeBtn.png'
		}
	]
}




VictoryMenu.prototype = Object.create(Menu.prototype);
