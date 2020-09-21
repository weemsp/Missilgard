var backgroundBox;
var mainCanvas;
var mainCtx;
var fcanvas;
var fctx;
var worldCanvas;
var worldCtx;
//var stage;
var emergencyStuff;
//var usingPizz = settings.sfxSystem;

//var stageBackground;

function begin() {
	backgroundBox = document.getElementById("BackgroundBox");
	
	buildGameView();
	buildMenuView()
	
	initSFX();
	
	ENGINE_INT.start();
	
	switchToMenu(new TitleMenu());
	//startNewGame();
}

function doNothing() {};