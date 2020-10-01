function EvilBullet(x, y, radius, velocity) {
	this.x = x;
	this.y = y;
	this.radius = radius;
    this.velocity = velocity;
    this.srcImage = "src/Images/Bullets/Bullet.png";

}
EvilBullet.prototype = Object.create(Bullet.prototype);
EvilBullet.prototype.update = function(game) {
	this.x += this.velocity.x;
	this.y += this.velocity.y;
}
