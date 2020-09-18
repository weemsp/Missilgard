function Missilgatlr() {
	this.bulletCD = 20;
}
Missilgatlr.prototype = Object.create(Boss.prototype);
Missilgatlr.prototype.bulletRate = 12;
Missilgatlr.prototype.update = function(game) {
	//console.log(game.getRandomPlayer())
	this.bulletCD--;
	if (this.bulletCD <= 0) {
		game.addBullet(new StraightBullet(WIDTH/2, HEIGHT/5, 3, new VectorPolar(6.66, angleCoordToObj(WIDTH/2, HEIGHT/5, game.getRandomPlayer()) + randomOffset(.1))));
		this.bulletCD = this.bulletRate;
	}
}