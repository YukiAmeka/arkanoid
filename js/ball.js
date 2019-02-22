class Ball {
    constructor(game) {
        this.game = game;
        this.radius = 5;
        this.position = {
            x: 5 + this.radius,
            y: 5 + this.radius
        };
        this.speed = {
            x: 2,
            y: 2
        }
    }
    
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2);
        ctx.closePath();
        ctx.fillStyle = '#f00';
        ctx.fill();
    }
    
    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        if (this.position.x + this.radius > this.game.gameWidth || this.position.x - this.radius < 0) {
            this.speed.x = -this.speed.x;
        };
         if (this.position.y + this.radius > this.game.gameHeight || this.position.y - this.radius < 0) {
            this.speed.y = -this.speed.y;
        };
        let topOfPaddle = this.game.paddle.position.y;
        let leftSideOfPaddle = this.game.paddle.position.x;
        let rightSideOfPaddle = this.game.paddle.position.x + this.game.paddle.width;
        if (this.position.y + this.radius > topOfPaddle 
            && this.position.x - this.radius >= leftSideOfPaddle 
            && this.position.x + this.radius <= rightSideOfPaddle) {
            this.speed.y = -this.speed.y;
        }
    }
}