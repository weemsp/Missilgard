function Spiralism() {
    this.bulletCD = 6;
    this.spiralCD = 6;
    this.spiralResting= 180;
    this.bulletResting = 60;
}

Spiralism.prototype = Object.create(Boss.prototype);
Spiralism.prototype.song = "Numina";
Spiralism.prototype.img = 'src/Images/Bosses/starbase-tex.png';
Spiralism.prototype.imgOffset = -550+"px";
Spiralism.prototype.update = function(game) {

    if(this.spiralCD <= 0){
        this.spiralCD = 6;
        game.addBullet(new SpiralBullet(WIDTH/2, HEIGHT/2, 6, this.theta1, 150, 20));
        this.spiralClip --;
        //console.log(this.spiralClip);
    } else if(this.spiralClip > 0) {
        this.spiralCD --;
    } else if(this.spiralResting > 0) {
        //console.log("Spiral RESTIN");
        this.spiralResting --;
        //console.log(this.spiralResting);
    }else if(this.spiralResting == 0) {
        this.spiralResting = 180;
        this.spiralClip = 8;
        this.theta1 = Math.random() * 2 * Math.PI;
    }

    if(this.bulletCD <= 0) {
        this.bulletCD = 6;
        game.addBullet(new StraightBullet(WIDTH/2, HEIGHT/2, 5, new VectorPolar(6, angleCoordToObj(WIDTH/2, HEIGHT/2, game.getRandomPlayer()))));
        game.addBullet(new StraightBullet(WIDTH/2, HEIGHT/2, 5, new VectorPolar(6, Math.PI * 0.00 + this.aimCenter1)));
        game.addBullet(new StraightBullet(WIDTH/2, HEIGHT/2, 5, new VectorPolar(6, Math.PI * 0.75 + this.aimCenter1)));
        game.addBullet(new StraightBullet(WIDTH/2, HEIGHT/2, 5, new VectorPolar(6, Math.PI * 0.25 + this.aimCenter1)));
        game.addBullet(new StraightBullet(WIDTH/2, HEIGHT/2, 5, new VectorPolar(6, Math.PI * 1.25 + this.aimCenter1)));
        /*
        game.addBullet(new StraightBullet(WIDTH/8, HEIGHT/12, 5, new VectorPolar(6, this.aimRight1)));
        game.addBullet(new StraightBullet(WIDTH/16, HEIGHT/12, 5, new VectorPolar(6, this.aimRight1)));
        game.addBullet(new StraightBullet(WIDTH - WIDTH/8, HEIGHT/12, 5, new VectorPolar(6, this.aimLeft1)));
        game.addBullet(new StraightBullet(WIDTH - WIDTH/16, HEIGHT/12, 5, new VectorPolar(6, this.aimLeft1)));
        */
        this.bulletClip --;
        //console.log(this.bulletClip);
    } else if(this.bulletClip > 0) {
        this.bulletCD --;
    } else if(this.bulletResting > 0) {
        //console.log("Bullet Resting");
        this.bulletResting --;
        //console.log(this.bulletResting);
    } else if(this.bulletResting == 0) {
        this.bulletResting = 60;
        this.bulletClip = 5;
        this.aimCenter1 = Math.PI + randomOffset(1);
        this.aimRight1 = Math.PI + randomOffset(1);
        this.aimLeft1 = Math.PI + randomOffset(1);
    }
}
