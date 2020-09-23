
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
	for (var i = 0; i < this.players.length; i++) {
		for (var j = 0; j < this.bullets.length; j++) {
			if (this.bullets[j].isHittingPlayer(this.players[i])) {
				this.players[i].getHit(this.bullets[j]);
			}
		}
	}
	this.bullets = this.bullets.filter(bul=>bul.isAlive());
}
GameEngine.prototype.addBullet = function(bul) {
	this.bullets.push(bul);
}
GameEngine.prototype.getRandomPlayer = function() {
	return randomTerm(this.players);
}
GameEngine.prototype.isGame = true;