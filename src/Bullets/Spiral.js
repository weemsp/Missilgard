function SpiralBullet(centerX, centerY, radius, startTheta, rInterval, speed){
    this.centerX = centerX;
    this.centerY = centerY;
    this.x = centerX;
    this.y = centerY;
    this.radius = radius;
    this.startTheta = startTheta;
    this.theta = startTheta;
    this.rInterval = rInterval;
    this.speed = speed;
    this.r = 0;
}

SpiralBullet.prototype = Object.create(Bullet.prototype);
SpiralBullet.prototype.update = function(game) {
    this.r += Math.min(this.speed / this.r * 2 * Math.PI, 3);
    this.theta = this.r / this.rInterval * 2 * Math.PI - this.startTheta;
    //Converting Polar coordinates to Rectangular coordinates
    var temp = new VectorPolar(this.r, this.theta);
    this.x = this.centerX + temp.x;
    this.y = this.centerY + temp.y;
}