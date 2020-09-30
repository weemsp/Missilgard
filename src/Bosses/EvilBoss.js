function EvilBoss() {
	
    this.bulletCD = 20 ;
}
EvilBoss.prototype = Object.create(Boss.prototype);
EvilBoss.prototype.bulletRate = 50;
EvilBoss.prototype.update = function (game) {
    
    this.bulletCD--;

	if (this.bulletCD <= 0) {
        
        game.addBullet(new StraightBullet(WIDTH/2,HEIGHT/6,5,new VectorPolar(5,angleCoordToObj(WIDTH/2,HEIGHT/6,game.getRandomPlayer()))));
        game.addBullet(new StraightBullet(WIDTH/3,HEIGHT/6,5,new VectorPolar(5,angleCoordToObj(WIDTH/6,HEIGHT/6,game.getRandomPlayer()))));
        game.addBullet(new StraightBullet(WIDTH*2/3,HEIGHT/6,5,new VectorPolar(5,angleCoordToObj(WIDTH*5/6,HEIGHT/6,game.getRandomPlayer()))));
        game.addBullet(new EvilBullet(WIDTH*3/4,HEIGHT*.9,5,new VectorPolar(5,6.3)));
        game.addBullet(new EvilBullet(WIDTH/4,HEIGHT*.9,5,new VectorPolar(5,6.3)));
        
        this.bulletCD = this.bulletRate;
    }

   
    
}
