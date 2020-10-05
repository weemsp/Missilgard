function Spiralism() {
    this.bulletCD = 6;
    this.spiralCD = 6;
    this.orbitCD = 10;
    this.spiralResting= 180;
    this.bulletResting = 60;
    this.orbitResting = 0;
}

Spiralism.prototype = Object.create(Boss.prototype);
Spiralism.prototype.song = "Numina";
Spiralism.prototype.img = 'src/Images/Bosses/starbase-tex.png';
Spiralism.prototype.imgOffset = -550+"px";
Spiralism.prototype.update = function(game) {
    
    if(this.spiralCD <= 0){
        this.spiralCD = 6;
        game.addBullet(new SpiralBullet(WIDTH/2, HEIGHT/2, 5, this.theta1, 150, 20));
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
        this.spiralClip = 4;
        this.theta1 = Math.random() * 2 * Math.PI;
    }
 

    if(this.bulletCD <= 0) {
        this.bulletCD = 6;
        game.addBullet(new StraightBullet(WIDTH/2, HEIGHT/2, 5, new VectorPolar(5, angleCoordToObj(WIDTH/2, HEIGHT/2, game.getRandomPlayer()))));
        game.addBullet(new StraightBullet(WIDTH/2, HEIGHT/2, 5, new VectorPolar(5, Math.PI * 0.00 + this.aimCenter1)));
        game.addBullet(new StraightBullet(WIDTH/2, HEIGHT/2, 5, new VectorPolar(5, Math.PI * 0.75 + this.aimCenter1)));
        game.addBullet(new StraightBullet(WIDTH/2, HEIGHT/2, 5, new VectorPolar(5, Math.PI * 0.25 + this.aimCenter1)));
        game.addBullet(new StraightBullet(WIDTH/2, HEIGHT/2, 5, new VectorPolar(5, Math.PI * 1.25 + this.aimCenter1)));
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
        this.bulletClip = 4;
        this.aimCenter1 = Math.PI + randomOffset(1);
        this.aimRight1 = Math.PI + randomOffset(1);
        this.aimLeft1 = Math.PI + randomOffset(1);
    }

    if(this.orbitCD <= 0) {
        this.orbitCD = 10;
        /*
        if(this.orbitClip % 2 == 0) {
            this.offset += 50;
        }
        */
        console.log(this.offset);
        game.addBullet(new OrbitBullet(WIDTH/2, HEIGHT/2, 5, 400, Math.PI, 0.01 * Math.PI, game.timeLeft));
        this.orbitClip --;
    } else if(this.orbitClip > 0) {
        this.orbitCD --;
    } else if(this.orbitResting > 0) {
        this.orbitResting --;
    } else if(this.orbitResting == 0){
        this.orbitResting = 60 * 60;
        this.orbitClip = 18;
        //this.offset = 0;
    }
}
