const WIDTH = 800;
const HEIGHT = 600;

class GameEngine extends Screen {
	constructor(args) {
		super();
		this.controller = args.controller;
		this.player = new PlayerShip();
		this.player.controller = this.controller;
		this.enemies = [];
		this.bullets = [];
		this.episode = args.episode;
		this.getWaveEnemies();
	}
	update() {
		this.player.update(this);
		this.enemies.forEach(e=>e.update(this));
		this.bullets.forEach(b=>b.update(this));
		this.episode.update(this);
		this.bullets = this.bullets.filter(bul=>bul.isAlive());
	}
	draw() {
		clearWorld();
		this.player.draw();
		this.enemies.forEach(e=>e.draw());
		this.bullets.forEach(b=>b.draw());
		mainCtx.drawImage(worldCanvas, 0, 0, Math.min(mainCanvas.width, mainCanvas.height), Math.min(mainCanvas.width, mainCanvas.height));
	}
	addBullet(bul) {
		this.bullets.push(bul);
	}
	waveEnd() {
		this.getWaveEnemies();
	}
	getWaveEnemies() {
		this.enemies = this.episode.getNextWave();
	}
}