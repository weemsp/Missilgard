function Stratoblaster() {
	this.bulletCD = 20;
    this.homingMissiles = 2;
    this.flurryCD = 20;
    this.waveCD = 75;
    this.waveCount = 4;
    this.bulletCount = 10;
    this.cascadeOffset = 0;
    this.cascadeOffsetBy = 75;
    this.cascadeCount = 0;
    
}


Stratoblaster.prototype = Object.create(Boss.prototype);
Stratoblaster.prototype.bulletRate = 4;
Stratoblaster.prototype.update = function (game) {

    //console.log(game.getRandomPlayer())
    
    if(this.waveCount <= 0) {
        this.bulletCD--;
        this.bulletRate = 13;
        console.log(this.bulletCD);
        if (this.bulletCD <= 0) {
            if(this.cascadeOffset > WIDTH/2)  {
                this.cascadeOffset = WIDTH/2;
                this.cascadeOffsetBy *= -1;
                this.cascadeCount++;
            } else if (this.cascadeOffset < -1 * WIDTH/2) {
                this.cascadeOffset = -1 * WIDTH/2;
                this.cascadeOffsetBy *= -1;
                this.cascadeCount++;
            }
            game.addBullet(new StraightBullet(WIDTH/2 + this.cascadeOffset, HEIGHT/5, 5, new VectorPolar(6, angleCoordToObj(WIDTH/2 + this.cascadeOffset, HEIGHT/5, {x: WIDTH/2 + this.cascadeOffset, y: HEIGHT}))));
            game.addBullet(new StraightBullet(WIDTH/2 - this.cascadeOffset, HEIGHT/5, 5, new VectorPolar(6, angleCoordToObj(WIDTH/2 - this.cascadeOffset, HEIGHT/5, {x: WIDTH/2 - this.cascadeOffset, y: HEIGHT}))));
            this.cascadeOffset += this.cascadeOffsetBy;

            this.bulletCD = this.bulletRate;
        }
        if(this.cascadeCount > 3) {
            this.waveCount = 4;
            this.bulletRate = 4;
            this.cascadeOffset = 0;
            this.cascadeOffsetBy *= -1;
            this.cascadeCount = 0;
            this.waveCD = 50;
            this.bulletCD = 40;
        }
    }
    

    if(this.homingMissiles > 0) {
        game.addBullet(new HomingBullet(WIDTH / 4, HEIGHT / 5, 3, new VectorPolar(6.66, angleCoordToObj(WIDTH / 2, HEIGHT / 5, game.getRandomPlayer()))));
        game.addBullet(new HomingBullet((WIDTH / 4) * 3, HEIGHT / 5, 3, new VectorPolar(6.66, angleCoordToObj(WIDTH / 2, HEIGHT / 5, game.getRandomPlayer()))));
    }
	this.homingMissiles = 2;
	for (var i = 0; i < game.bullets.length; i++) {
		if(game.bullets[i] instanceof HomingBullet) {
			this.homingMissiles--;
		}
    }

    this.waveCD--;
    if(this.waveCD <= 0 && this.waveCount > 0) {
        this.flurryCD--;
        if(this.flurryCD <= 0) {
            game.addBullet(new StraightBullet(WIDTH/2, HEIGHT/5, 5, new VectorPolar(6, angleCoordToObj(WIDTH/2, HEIGHT/5, game.getRandomPlayer()) + randomOffset(.2))));
            this.flurryCD = this.bulletRate;
            this.bulletCount--;
        }
        if(this.bulletCount <= 0) {
            this.waveCD = 48;
            this.bulletCount = 16;
            this.waveCount--;
        }
    }



}