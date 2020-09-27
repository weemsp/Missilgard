function FlurryBoss() {
    this.bulletCD = 20;
    this.waveCD = 75;
    this.bulletCount = 15
}

FlurryBoss.prototype = Object.create(Boss.prototype);
FlurryBoss.prototype.bulletRate = 4;
FlurryBoss.prototype.update = function (game) {

    this.waveCD--;
    if(this.waveCD <= 0) {
        this.bulletCD--;
        if(this.bulletCD <= 0) {
            game.addBullet(new StraightBullet(WIDTH/2, HEIGHT/5, 5, new VectorPolar(6, angleCoordToObj(WIDTH/2, HEIGHT/5, game.getRandomPlayer()) + randomOffset(.5))));
            this.bulletCD = this.bulletRate;
            this.bulletCount--;
        }
        if(this.bulletCount <= 0) {
            this.waveCD = 75;
            this.bulletCount = 15;
        }
    }
    
}
            