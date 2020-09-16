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
	window.addEventListener("resize", setBackgroundWidth);
	
	backgroundBox = document.getElementById("BackgroundBox");
	
	initSFX();
	
	engine.run();
}

function doNothing() {};