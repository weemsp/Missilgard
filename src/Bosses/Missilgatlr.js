function Missilgatlr() {
	this.bulletCD = 0;
	this.resting = 10;
	this.scatterCD = 9.5*FPS;
}
Missilgatlr.prototype = Object.create(Boss.prototype);
Missilgatlr.prototype.bulletRate = 5;
Missilgatlr.prototype.restTime = 48;
Missilgatlr.prototype.burstSize = 15;
Missilgatlr.prototype.scatterCD = FPS;
Missilgatlr.prototype.scatterTheta = 0;
Missilgatlr.prototype.scatterSide = 0;
Missilgatlr.prototype.song = "Flap 2";
Missilgatlr.prototype.update = function(game) {
	//console.log(game.getRandomPlayer())
	if (this.bulletsLeft > 0) {
		this.bulletCD--;
		if (this.bulletCD <= 0) {
			game.addBullet(new StraightBullet(WIDTH/2, HEIGHT/6, 5, new VectorPolar(6, angleCoordToObj(WIDTH/2, HEIGHT/6, game.getRandomPlayer()) + randomOffset((this.burstSize-this.bulletsLeft)*.01))));
			this.bulletCD = this.bulletRate;
			this.bulletsLeft--;
			if (this.bulletsLeft <= 0) {
				this.resting = this.restTime;
			}
		}
	} else if (this.resting > 0) {
		this.resting --;
	} else {
		//console.log("time to burst");
		this.bulletsLeft = this.burstSize;
	}

	this.scatterCD--;
	this.scatterTheta += .015;
	if (this.scatterCD <= 0) {
		switch (this.scatterSide) {
			case 0: game.addBullet(new StraightBullet(WIDTH*1/4, HEIGHT/6, 12, new VectorPolar(3, this.scatterTheta))); break;
			case 1: game.addBullet(new StraightBullet(WIDTH*1/4, HEIGHT/6, 12, new VectorPolar(3, this.scatterTheta + Math.PI))); break;
			case 2: game.addBullet(new StraightBullet(WIDTH*3/4, HEIGHT/6, 12, new VectorPolar(3, -this.scatterTheta + Math.PI/2))); break;
			case 3: game.addBullet(new StraightBullet(WIDTH*3/4, HEIGHT/6, 12, new VectorPolar(3, -this.scatterTheta + Math.PI*3/2))); break;
		}
		this.scatterSide = (this.scatterSide+1) % 4;
		this.scatterCD = Math.floor(5 + 8 * game.timePortion);
	}
}