class Brick {
    constructor(game, position) {
        this.game = game;
        this.position = position;
        this.width = 80;
        this.height = 24;
        this.markedForDeletion = false;
    }
    
    draw(ctx) {
        ctx.fillStyle = "#800";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height); 
        ctx.beginPath();
        ctx.strokeStyle = "#f00";
        ctx.lineWidth = 2;
        ctx.strokeRect(this.position.x, this.position.y, this.width, this.height);
        ctx.moveTo(this.position.x, this.position.y + this.height / 2);
        ctx.lineTo(this.position.x + this.width, this.position.y + this.height / 2);
        ctx.moveTo(this.position.x + this.width / 3, this.position.y);
        ctx.lineTo(this.position.x + this.width / 3, this.position.y + this.height / 2);
        ctx.moveTo(this.position.x + this.width * 2 / 3, this.position.y);
        ctx.lineTo(this.position.x + this.width * 2 / 3, this.position.y + this.height / 2);
        ctx.moveTo(this.position.x + this.width / 2, this.position.y + this.height / 2);
        ctx.lineTo(this.position.x + this.width / 2, this.position.y + this.height);
        ctx.closePath();
        ctx.stroke();
    }
    
    update() {
        if (detectCollision(this.game.ball, this) === 'horizontal') {
            this.game.ball.speed.y = -this.game.ball.speed.y;
            this.markedForDeletion = true;
        } else if (detectCollision(this.game.ball, this) === 'vertical') {
            this.game.ball.speed.x = -this.game.ball.speed.x;
            this.markedForDeletion = true;
        }
    }
}