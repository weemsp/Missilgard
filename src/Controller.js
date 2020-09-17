const WIDTH = 800;
const HEIGHT = 600;

var runnee;
const FPS = 60;

const ENGINE_INT = {
    frameDelay : 1000 / FPS,
	start : function() {
		this.run();
	},
	run : function() {
		var desiredTime = Date.now() + this.frameDelay;
		musicLoopCheck();
		updateInputsBefore();
		if (this.active && runnee) {
			runnee.update();
			viewGame(runnee);
		}
		updateInputsAfter();
		var until = desiredTime - Date.now();
		if (until > 0) {
			this.interval = setTimeout(()=>this.run(), until);
		} else {
			console.log("lagging by " + (-until));
			this.run();
		}
	},
	interval : null,
	active : true,
}

function startNewGame() {
	runnee = new GameEngine();
}