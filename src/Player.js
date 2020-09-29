const PLAYER_MAX_SPEED = 10;

function PlayerShip() {
	this.x = WIDTH/2;
	this.y = HEIGHT*4/5;
	this.deg = 0;
}
PlayerShip.prototype.update = function() {
	//console.log(inputVector.x, inputVector.y);
	this.x = Math.max(0, Math.min(WIDTH, this.x + PLAYER_MAX_SPEED * inputVector.x));
	this.y = Math.max(0, Math.min(WIDTH, this.y + PLAYER_MAX_SPEED * inputVector.y));
	this.deg = radToDeg(inputVector.theta);
	if (this.iframes > 0) {
		this.iframes--;
	}
}
PlayerShip.prototype.getHit = function() {
	if (this.iframes <= 0) {
		//console.log("h")
		playSFX("damage");
		this.iframes = 60;
	}
}
PlayerShip.prototype.iframes = 0;
