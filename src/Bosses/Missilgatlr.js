function Missilgatlr() {
	this.bulletCD = 0;
	this.resting = 10;
}
Missilgatlr.prototype = Object.create(Boss.prototype);
Missilgatlr.prototype.bulletRate = 4;
Missilgatlr.prototype.restTime = 48;
Missilgatlr.prototype.burstSize = 16;
Missilgatlr.prototype.song = "Flap 2";
Missilgatlr.prototype.update = function(game) {
	//console.log(game.getRandomPlayer())
	if (this.bulletsLeft > 0) {
		console.log("bursting");
		this.bulletCD--;
		if (this.bulletCD <= 0) {
			game.addBullet(new StraightBullet(WIDTH/2, HEIGHT/5, 5, new VectorPolar(6, angleCoordToObj(WIDTH/2, HEIGHT/5, game.getRandomPlayer()) + randomOffset(.1))));
			this.bulletCD = this.bulletRate;
			this.bulletsLeft--;
			if (this.bulletsLeft <= 0) {
				this.resting = this.restTime;
			}
		}
	} else if (this.resting > 0) {
		console.log("resting");
		this.resting --;
	} else {
		console.log("time to burst");
		this.bulletsLeft = this.burstSize;
	}
}