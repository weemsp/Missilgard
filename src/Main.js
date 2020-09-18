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
	
	initSFX();
	
	ENGINE_INT.start();
	
	startNewGame();
}

function doNothing() {};