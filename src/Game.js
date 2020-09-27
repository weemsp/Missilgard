
function GameEngine(boss) {
	this.players = [
		new PlayerShip()
	]
	switch(boss) {
		case 'Missilgatlr':
			this.boss = new Missilgatlr();
			break;
		case 'Homing':
			this.boss = new HomingBoss();
			break;
		case 'Evil':
			this.boss = new EvilBoss();
			break;
		case 'Spiralism':
			this.boss = new Spiralism();
			break;
		default:
			throw boss + " is NOT a BOSS!"
	}
	
	//this.boss = new Missilgatlr();
	//this.boss = new HomingBoss();
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