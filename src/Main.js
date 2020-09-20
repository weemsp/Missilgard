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


function menu() {
	var doc = document;
	var iframe = document.querySelector('iframe');
	iframe.contentDocument.body.addEventListener('mouseup', function() {
		doc.querySelector('iframe').src='game.html';
		begin();
	});
}

function doNothing() {};