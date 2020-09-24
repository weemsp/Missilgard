function HomingBoss() {
	this.bulletCD = 20;
	this.homingMissiles = 2;
}
HomingBoss.prototype = Object.create(Boss.prototype);
HomingBoss.prototype.bulletRate = 15;
HomingBoss.prototype.update = function (game) {
	//console.log(game.getRandomPlayer())
	this.bulletCD--;
	if (this.bulletCD <= 0) {
		if(this.homingMissiles > 0) {
			game.addBullet(new HomingBullet(WIDTH / 4, HEIGHT / 5, 3, new VectorPolar(6.66, angleCoordToObj(WIDTH / 2, HEIGHT / 5, game.getRandomPlayer()) + randomOffset(.1))));
			game.addBullet(new HomingBullet((WIDTH / 4) * 3, HEIGHT / 5, 3, new VectorPolar(6.66, angleCoordToObj(WIDTH / 2, HEIGHT / 5, game.getRandomPlayer()) + randomOffset(.1))));
		} else {
			game.addBullet(new StraightBullet(WIDTH/2, HEIGHT/5, 5, new VectorPolar(6, angleCoordToObj(WIDTH/2, HEIGHT/5, game.getRandomPlayer()) + randomOffset(.1))));
		}
		this.bulletCD = this.bulletRate;
	}

	this.homingMissiles = 2;
	for (var i = 0; i < game.bullets.length; i++) {
		if(game.bullets[i] instanceof HomingBullet) {
			this.homingMissiles--;
		}
	}
}