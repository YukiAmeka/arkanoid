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
        ctx.fillStyle = '#0f0';
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
        if (detectCollision(this, this.game.paddle)) {
            this.speed.y = -this.speed.y;
            this.position.y = this.game.paddle.position.y - this.radius;
        }
    }
}