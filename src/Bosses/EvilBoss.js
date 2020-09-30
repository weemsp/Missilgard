function EvilBoss() {
	
    this.bulletCD = 20 ;
}
EvilBoss.prototype = Object.create(Boss.prototype);
EvilBoss.prototype.bulletRate = 60;
EvilBoss.prototype.update = function (game) {
    
    this.bulletCD--;

	if (this.bulletCD <= 0) {
        
        game.addBullet(new StraightBullet(WIDTH/2,HEIGHT/8,5,new VectorPolar(4,angleCoordToObj(WIDTH/2,HEIGHT/6,game.getRandomPlayer()))));
        game.addBullet(new StraightBullet(WIDTH/3,HEIGHT/8,5,new VectorPolar(4,angleCoordToObj(WIDTH/6,HEIGHT/6,game.getRandomPlayer()))));
        game.addBullet(new StraightBullet(WIDTH*2/3,HEIGHT/8,5,new VectorPolar(4,angleCoordToObj(WIDTH*5/6,HEIGHT/6,game.getRandomPlayer()))));
        game.addBullet(new StraightBullet(WIDTH*5/6, HEIGHT*5/6,5,new VectorPolar(4,angleCoordToObj(WIDTH*5/6,HEIGHT*5/6,game.getRandomPlayer()))));
        game.addBullet(new StraightBullet(WIDTH/6, HEIGHT*5/6,5,new VectorPolar(4,angleCoordToObj(WIDTH/6,HEIGHT*5/6,game.getRandomPlayer()))));

        
        this.bulletCD = this.bulletRate;
    }

   
    
}
