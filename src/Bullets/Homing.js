function HomingBullet(x, y, radius, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.velocity = velocity;
}
HomingBullet.prototype = Object.create(Bullet.prototype);
HomingBullet.prototype.update = function (game) {
    //console.log(this.x, this.y);
    this.velocity = new VectorPolar(6.66, angleCoordToObj(this.x, this.y, game.getRandomPlayer()) + randomOffset(.1))
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.deg = radToDeg(angleCoordToObj(this.x, this.y, game.getRandomPlayer()));
    
    //console.log(this.deg);
}