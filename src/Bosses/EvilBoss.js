function EvilBoss() {
	//this.bulletCD = 20;
    this.homingMissiles = 2;
    this.evilBullet = 20 ;
}
EvilBoss.prototype = Object.create(Boss.prototype);
EvilBoss.prototype.bulletRate = 20;
EvilBoss.prototype.update = function (game) {
    
    this.evilBullet--;
	
	if (this.evilBullet <= 0) {
        game.addBullet(new StraightBullet(WIDTH/2, HEIGHT/9, 5, new VectorPolar(6, angleCoordToObj(WIDTH/2, HEIGHT/5, game.getRandomPlayer()) + randomOffset(.1))));
        game.addBullet(new StraightBullet(WIDTH/3, HEIGHT/9, 5, new VectorPolar(6, angleCoordToObj(WIDTH/2, HEIGHT/5, game.getRandomPlayer()) + randomOffset(.1))));
        game.addBullet(new StraightBullet(WIDTH*.7, HEIGHT/9, 5, new VectorPolar(6, angleCoordToObj(WIDTH/2, HEIGHT/5, game.getRandomPlayer()) + randomOffset(.1))));
        game.addBullet(new EvilBullet(WIDTH/5, HEIGHT*.9, 5, new VectorPolar(6, angleCoordToObj(WIDTH/2, HEIGHT/5, game.getRandomPlayer()) + randomOffset(.1))));
        game.addBullet(new EvilBullet(WIDTH*.8, HEIGHT*.9, 5, new VectorPolar(6, angleCoordToObj(WIDTH/2, HEIGHT/5, game.getRandomPlayer()) + randomOffset(.1))));
        this.evilBullet = this.bulletRate;
    }

   
    
}
