
function GameEngine(args) {
	this.players = [
		new PlayerShip()
	]
	this.enemies = [];
	this.bullets = [];
}
GameEngine.prototype.update = function() {
	this.players.forEach(e=>e.update(this));
	this.enemies.forEach(e=>e.update(this));
	this.bullets.forEach(b=>b.update(this));
	this.bullets = this.bullets.filter(bul=>bul.isAlive());
}
GameEngine.prototype.addBullet = function(bul) {
	this.bullets.push(bul);
}