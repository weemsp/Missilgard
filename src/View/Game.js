var gameElems;
const NUM_BULLET_IMAGES = 16;

function buildGameView() {
	gameElems = {};
	gameElems.box = document.getElementById("GameContainer");
	gameElems.players = [];
	gameElems.players[0] = document.getElementById("player0");
	gameElems.boss = document.getElementById("boss");
	gameElems.bullets = [];
	for (var i = 0; i < NUM_BULLET_IMAGES; i++) {
		gameElems.bullets[i] = document.getElementById("bullet" + i);
	}
}

function viewGame(game) {
	if (!game.isGame)
		return; //this might be dumb but I don't currently care -P
	gameElems.box.hidden = false;
	menuElems.box.hidden = true;
	moveGameElemCenter(gameElems.players[0], game.players[0].x, game.players[0].y);
	for (var i = 0; i < NUM_BULLET_IMAGES; i++) {
		if (game.bullets[i]) {
			gameElems.bullets[i].hidden = false;
			gameElems.bullets[i].src = game.bullets[i].srcImage;
			moveGameElemCenter(gameElems.bullets[i], game.bullets[i].x, game.bullets[i].y);
			rotateGameElement(gameElems.bullets[i], game.bullets[i].deg);
		} else {
			gameElems.bullets[i].hidden = true;
		}
	}
}

function moveGameElemCenter(elem, x, y) {
	elem.style.left = x + "px";
	elem.style.top = y + "px";
}

function rotateGameElement(elem, deg) {
	elem.style.transform = `rotate(${deg}deg)`;
}