class Ball {
    constructor(game) {
        this.game = game;
        this.radius = 7;
        this.reset();
    }
    
    reset() {
        this.position = {
            x: this.game.paddle.position.x + this.game.paddle.width / 2,
            y: this.game.paddle.position.y - this.radius
        };
        this.speed = {
            x: 2,
            y: 2
        }
    }
    
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2);
        ctx.fillStyle = '#3f6b41';
        ctx.fill();
    }
    
    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        if (this.position.x + this.radius > this.game.gameWidth || this.position.x - this.radius < 0) {
            this.speed.x = -this.speed.x;
        };
        if (this.position.y - this.radius < 0) {
            this.speed.y = -this.speed.y;
        };
        if (this.position.y + this.radius > this.game.gameHeight) {
            this.game.lives--;
            this.reset();
        };
        if (detectCollision(this, this.game.paddle) === 'horizontal') {
            this.speed.y = -this.speed.y;
            this.position.y = this.game.paddle.position.y - this.radius;
        }
    }
}