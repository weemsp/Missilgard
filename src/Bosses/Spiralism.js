function Spiralism() {
    this.bulletCD = 0;
    this.resting= 0;
}

Spiralism.prototype = Object.create(Boss.prototype);
Spiralism.prototype.bulletRate = 10;
Spiralism.prototype.restTime = 60;
Spiralism.prototype.burstSize = 30;
Spiralism.prototype.update = function(game) {
    console.log(this.bulletsLeft);
    if (this.bulletsLeft > 0) {
        console.log("Straight Storm");
        this.bulletCD--;
        if (this.bulletCD <= 0) {
            game.addBullet(new StraightBullet(WIDTH/4, HEIGHT/2, 5, new VectorPolar(7, angleCoordToObj(WIDTH/2, HEIGHT/5, game.getRandomPlayer()) + randomOffset(1))));
            game.addBullet(new StraightBullet(WIDTH * (3/4), HEIGHT/2, 5, new VectorPolar(7, angleCoordToObj(WIDTH/2, HEIGHT/5, game.getRandomPlayer()) + randomOffset(-1))));
            game.addBullet(new StraightBullet(WIDTH/2, HEIGHT/12, 5, new VectorPolar(7, angleCoordToObj(WIDTH/2, HEIGHT/5, game.getRandomPlayer()) + randomOffset(.5))));
            this.bulletCD = this.bulletRate;
            this.bulletsLeft--;
            if (this.bulletsLeft <= 0) {
                this.resting = this.restTime;
            }
        }
    } else if (this.resting > 0) {
        console.log("Straight resting");
        console.log("time to burst Spirial");
        
        console.log("Spiral Storm");
        this.bulletCD--;
        if(this.bulletCD <= 0) {
            game.addBullet(new SpiralBullet(WIDTH/2, HEIGHT/2, 20, Math.PI, 100, 50));
            game.addBullet(new SpiralBullet(WIDTH/2, HEIGHT/2, 20, Math.PI, -100, 50));
            this.bulletCD = this.bulletRate;
        }
        console.log(this.resting);
        this.resting --;
            
    } else {
        this.bulletsLeft = this.burstSize;
    }

}
