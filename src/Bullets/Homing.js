function HomingBullet(x, y, radius, velocity, theta) {
	this.x = x;
	this.y = y;
	this.radius = radius;
    this.velocity = velocity;
    this.theta = theta
    this.pi = Math.PI;
    this.deg = 0;
}
HomingBullet.prototype = Object.create(Bullet.prototype);
HomingBullet.prototype.update = function(game) {
	//console.log(this.x, this.y);
	this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.deg = angleCoordToObj(WIDTH/2, HEIGHT/5, game.getRandomPlayer()) * (180/this.pi);
    //console.log(this.deg);
}