var gameElems;
const NUM_BULLET_IMAGES = 16;

function buildGameView() {
	gameElems = {};
	gameElems.players = [];
	gameElems.players[0] = document.getElementById("player0");
	gameElems.boss = document.getElementById("boss");
	gameElems.bullets = [];
	for (var i = 0; i < NUM_BULLET_IMAGES; i++) {
		gameElems.bullets[i] = document.getElementById("bullet"+i);
	}
}

function viewGame(game) {
	//TODO someone other than me, do this -P
	moveGameElemCenter(gameElems.players[0], game.players[0].x, game.players[0].y);
	for (var i = 0; i < NUM_BULLET_IMAGES; i++) {
		if (game.bullets[i]) {
			gameElems.bullets[i].hidden = false;
			moveGameElemCenter(gameElems.bullets[i], game.bullets[i].x, game.bullets[i].y);
		} else {
			gameElems.bullets[i].hidden = true;
		}
	}
}

function moveGameElemCenter(elem, x, y) {
	//TODO account for width of images so they're centered
	elem.style.left = x+"px";
	elem.style.top = y+"px";
}