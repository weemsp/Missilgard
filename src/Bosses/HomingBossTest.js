function HomingBossTest() {
	this.bulletCD = 20;
}
HomingBossTest.prototype = Object.create(Boss.prototype);
HomingBossTest.prototype.bulletRate = 12;
HomingBossTest.prototype.update = function (game) {
	//console.log(game.getRandomPlayer())
	this.bulletCD--;
	if (this.bulletCD <= 0) {
		game.addBullet(new HomingBullet(WIDTH / 2, HEIGHT / 5, 3, new VectorPolar(6.66, angleCoordToObj(WIDTH / 2, HEIGHT / 5, game.getRandomPlayer()) + randomOffset(.1))));
		this.bulletCD = this.bulletRate;
	}
}