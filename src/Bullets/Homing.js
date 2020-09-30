function HomingBullet(x, y, radius, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.velocity = velocity;
    this.homingCD = 200;
    this.srcImage = "src/Images/Bullets/HomingMissile.png";
}
HomingBullet.prototype = Object.create(Bullet.prototype);
HomingBullet.prototype.update = function (game) {
    //console.log(this.x, this.y);
    if( this.homingCD >= 0) {
        this.velocity = new VectorPolar(6.66, angleCoordToObj(this.x, this.y, game.getRandomPlayer()) + randomOffset(.1))
        this.deg = radToDeg(this.velocity.theta);
        this.homingCD--;
     }
    this.x += this.velocity.x / 2;
    this.y += this.velocity.y / 2;

}
