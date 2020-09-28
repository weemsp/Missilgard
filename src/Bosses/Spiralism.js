function Spiralism() {
    this.bulletCD = 20;
    this.burstCD = 5;
}

Spiralism.prototype = Object.create(Boss.prototype);
Spiralism.prototype.bulletRate = 30;
Spiralism.prototype.update = function(game) {
    if(this.burstCD <= 0){
        if(this.bulletCD <= 0){
            
        }else{
            this.bulletCD--;
        }
    }else{
        this.burstCD--;
    }
}
