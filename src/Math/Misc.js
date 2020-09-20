function randomOffset(num) {
	return -num + 2 * num * Math.random();
}

function randomTerm(ray) {
	return ray[Math.floor(Math.random()*ray.length)];
}