const BOSS_RUSH_ORDER = [
	Missilgatlr,
	Stratoblaster,
	EvilBoss,
	Spiralism,
]

function GameEngine(boss) {
	this.players = [
		new PlayerShip()
	]
	this.timeMax = 60*FPS;
	switch(boss) {
		case "Rush":
			this.boss = new Missilgatlr();
			this.bossRushIndex = 0;
			this.doingBossRush = true;
			this.timeMax = 30*FPS;
			this.players.forEach(function(p){p.hp = 5});
			break;
		case 'Missilgatlr':
			this.boss = new Missilgatlr();
			break;
		case 'Stratoblaster':
			this.boss = new Stratoblaster();
			break;
		case 'Evil':
			this.boss = new EvilBoss();
			break;
		case 'Spiralism':
			this.boss = new Spiralism();
			break;
		default:
			throw boss + " is NOT a BOSS!";
	}
	playMusic(this.boss.song);
	this.timeLeft = this.timeMax;
	//this.boss = new Missilgatlr();
	//this.boss = new HomingBoss();
	this.bullets = [];
}
GameEngine.prototype.update = function() {
	this.timeLeft--;
	this.timePortion = this.timeLeft / this.timeMax;
	if (this.timeLeft <= 0) {
		this.win();
	}
	var thisser = this;
	this.players.forEach(function(p){p.update(thisser)});
	this.boss.update(this);
	this.bullets.forEach(function(b){b.update(thisser)});
	for (var i = 0; i < this.players.length; i++) {
		for (var j = 0; j < this.bullets.length; j++) {
			if (this.bullets[j].isHittingPlayer(this.players[i])) {
				this.players[i].getHit(this.bullets[j]);
			}
		}
	}
	if (!this.players.find(function(p){return p.hp>0})) {
		this.lose();
	}
	this.bullets = this.bullets.filter(bul=>bul.isAlive());
}
GameEngine.prototype.addBullet = function(bul) {
	this.bullets.push(bul);
}
GameEngine.prototype.getRandomPlayer = function() {
	return randomTerm(this.players);
}
GameEngine.prototype.win = function() {
	if (this.doingBossRush && this.bossRushIndex < BOSS_RUSH_ORDER.length-1) {
		this.bossRushIndex++;
		this.boss = new (BOSS_RUSH_ORDER[this.bossRushIndex])();
		playMusic(this.boss.song);
		this.players.forEach(function(p){p.hp++});
		this.timeLeft = this.timeMax;
	} else {
		switchToMenu(new VictoryMenu(true));
	}
}
GameEngine.prototype.lose = function() {
	switchToMenu(new VictoryMenu(false));
}
GameEngine.prototype.isGame = true;
