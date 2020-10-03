function OrbitBullet(originX, originY, radius, theta, tInterval) {
    this.originX = originX;
    this.originY = originY;
    this.radius = radius; // size of bullet
    this.theta = theta; // in radians
    this.tInterval = tInterval; // in radians 
    this.x = originX;
    this.y = originY;
    this.r = 300; // actual radius of the circular motion, 250 px from the origin

}

OrbitBullet.prototype = Object.create(Bullet.prototype);
OrbitBullet.prototype.update = function(game) {
    this.theta += this.tInterval;
    //var temp = new VectorPolar(this.r, this.theta);
    //console.log(temp);
    this.x = this.originX + (this.r * Math.cos(this.theta));
    this.y = this.originY + (this.r * Math.sin(this.theta));
    console.log(this.x, " ",  this.y)
}