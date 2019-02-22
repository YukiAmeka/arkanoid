class Paddle {
    constructor(game) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.width = 100;
        this.height = 10;
        this.maxSpeed = 7;
        this.speed = 0;
        this.position = {
            x: this.gameWidth / 2 - this.width / 2,
            y: this.gameHeight - this.height - 10
        }
    }
    
    moveLeft() {
        this.speed = -this.maxSpeed;
    }
    
    moveRight() {
        this.speed = this.maxSpeed;
    }
    
    stopMove() {
        this.speed = 0;
    }
    
    draw(ctx) {
        ctx.fillStyle = '#00f';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    
    update(deltaTime) {
        this.position.x += this.speed;
        if (this.position.x < 0) {
            this.position.x = 0;
        }
        if (this.position.x + this.width > this.gameWidth) {
            this.position.x = this.gameWidth - this.width;
        }
    }
    
    
    
}