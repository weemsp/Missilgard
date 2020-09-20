
function GameEngine(args) {
	this.players = [
		new PlayerShip()
	]
	this.boss = new Missilgatlr();
	this.bullets = [];
}
GameEngine.prototype.update = function() {
	var thisser = this;
	this.players.forEach(function(p){p.update(thisser)});
	this.boss.update(this);
	this.bullets.forEach(function(b){b.update(thisser)});
	this.bullets = this.bullets.filter(bul=>bul.isAlive());
}
GameEngine.prototype.addBullet = function(bul) {
	this.bullets.push(bul);
}
GameEngine.prototype.getRandomPlayer = function() {
	return randomTerm(this.players);
}
GameEngine.prototype.isGame = true;