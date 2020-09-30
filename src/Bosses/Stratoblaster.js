function Stratoblaster() {
	this.bulletCD = 20;
    this.homingMissiles = 2;
    this.flurryCD = 20;
    this.waveCD = 75;
    this.bulletCount = 15
}


Stratoblaster.prototype = Object.create(Boss.prototype);
Stratoblaster.prototype.bulletRate = 5;
Stratoblaster.prototype.update = function (game) {

	//console.log(game.getRandomPlayer())
	this.bulletCD--;
	if (this.bulletCD <= 0) {
		if(this.homingMissiles > 0) {
			game.addBullet(new HomingBullet(WIDTH / 4, HEIGHT / 5, 3, new VectorPolar(6.66, angleCoordToObj(WIDTH / 2, HEIGHT / 5, game.getRandomPlayer()))));
			game.addBullet(new HomingBullet((WIDTH / 4) * 3, HEIGHT / 5, 3, new VectorPolar(6.66, angleCoordToObj(WIDTH / 2, HEIGHT / 5, game.getRandomPlayer()))));
		}
		this.bulletCD = this.bulletRate;
	}

	this.homingMissiles = 2;
	for (var i = 0; i < game.bullets.length; i++) {
		if(game.bullets[i] instanceof HomingBullet) {
			this.homingMissiles--;
		}
    }

    this.waveCD--;
    if(this.waveCD <= 0) {
        this.flurryCD--;
        if(this.flurryCD <= 0) {
            game.addBullet(new StraightBullet(WIDTH/2, HEIGHT/5, 5, new VectorPolar(6, angleCoordToObj(WIDTH/2, HEIGHT/5, game.getRandomPlayer()) + randomOffset(.5))));
            this.flurryCD = this.bulletRate;
            this.bulletCount--;
        }
        if(this.bulletCount <= 0) {
            this.waveCD = 75;
            this.bulletCount = 15;
        }
    }

}