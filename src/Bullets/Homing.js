function HomingBullet(x, y, radius, velocity, theta) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.velocity = velocity;
    this.theta = theta
}
HomingBullet.prototype = Object.create(Bullet.prototype);
HomingBullet.prototype.update = function (game) {
    //console.log(this.x, this.y);
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.deg = radToDeg(angleCoordToObj(this.x, this.y, game.getRandomPlayer()));
    //console.log(this.deg);
}