function StraightBullet(x, y, radius, velocity) {
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.velocity = velocity;
}
StraightBullet.prototype = Object.create(Bullet.prototype);
StraightBullet.prototype.update = function(game) {
	//console.log(this.x, this.y);
	this.x += this.velocity.x;
	this.y += this.velocity.y;
}