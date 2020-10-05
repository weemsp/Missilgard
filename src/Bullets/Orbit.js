function OrbitBullet(originX, originY, radius, orbitRadius, theta, tInterval, timeLeft) {
    this.originX = originX;
    this.originY = originY;
    this.radius = radius; // size of bullet
    this.orbitRadius = orbitRadius; // actual radius of the circular motion
    this.theta = theta; // in radians
    this.tInterval = tInterval; // in radians 
    this.x = originX;
    this.y = originY;
    this.timeLeft = timeLeft;

}

OrbitBullet.prototype = Object.create(Bullet.prototype);
OrbitBullet.prototype.isAlive = function() {
    return this.timeLeft > 0;
}
OrbitBullet.prototype.update = function(game) {
    this.theta += this.tInterval;
    var temp = new VectorPolar(this.orbitRadius, this.theta);
    //console.log(temp);
    this.x = this.originX + temp.x;
    this.y = this.originY + temp.y;
}