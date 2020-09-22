function Bullet(x, y, radius) {
	
}
Bullet.prototype.isAlive = function() {
	return this.x > -this.radius && this.x < WIDTH + this.radius && this.y > -this.radius && this.y < HEIGHT + this.radius;
}
Bullet.prototype.isHittingPlayer = function(p) {
	//console.log(distanceCoordToObj(this.x, this.y, p), this.radius)
	return distanceCoordToObj(this.x, this.y, p) <= this.radius;
}