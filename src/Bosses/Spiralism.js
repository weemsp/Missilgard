function Spiralism() {
    this.bulletCD = 0;
    this.resting= 0;
}

Spiralism.prototype = Object.create(Boss.prototype);
Spiralism.prototype.bulletRate = 10;
Spiralism.prototype.restTime = 60;
Spiralism.prototype.burstSize = 25;
Spiralism.prototype.update = function(game) {
    var alternate;
    alternate = Math.floor(Math.random() * 2);
    switch(alternate){
        case 0 :
            if (this.bulletsLeft > 0) {
                console.log("Spiral Burst");
                this.bulletCD--;
                if (this.bulletCD <= 0) {
                    game.addBullet(new SpiralBullet(WIDTH/2, HEIGHT/2, 20, 2*Math.PI, 75, 10));
                    this.bulletCD = this.bulletRate;
                    this.bulletsLeft--;
                    if (this.bulletsLeft <= 0) {
                        this.resting = this.restTime * 10;
                        alternate = 1;
                    }
                }
            } else if (this.resting > 0) {
                console.log("Spiral resting");
                this.resting --;
            } else {
                console.log("time to burst Straight");
                this.bulletsLeft = this.burstSize;
            }
            break;
        case 1:
            console.log(this.bulletsLeft);
            if (this.bulletsLeft > 0) {
                console.log("Straight Burst");
                this.bulletCD--;
                if (this.bulletCD <= 0) {
                    game.addBullet(new StraightBullet(WIDTH/2, HEIGHT/5, 5, new VectorPolar(8, angleCoordToObj(WIDTH/2, HEIGHT/5, game.getRandomPlayer()) + randomOffset(-.3))));
                    game.addBullet(new StraightBullet(WIDTH/2, HEIGHT/5, 5, new VectorPolar(8, angleCoordToObj(WIDTH/2, HEIGHT/5, game.getRandomPlayer()) + randomOffset(-1))));
                    game.addBullet(new StraightBullet(WIDTH/2, HEIGHT/5, 5, new VectorPolar(8, angleCoordToObj(WIDTH/2, HEIGHT/5, game.getRandomPlayer()) + randomOffset(.7))));
                    this.bulletCD = this.bulletRate;
                    this.bulletsLeft--;
                    if (this.bulletsLeft <= 0) {
                        this.resting = this.restTime * 5;
                        alternate = 0;
                    }
                }
            } else if (this.resting > 0) {
                console.log("Straight resting");
                this.resting --;
            } else {
                console.log("time to burst Spirial");
                this.bulletsLeft = this.burstSize * 3;
            }
            break;
    }
}
