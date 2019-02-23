class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }
    
    start() {
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        this.brick = new Brick(this);
        let bricks = buildLevel(game, level1);
        this.gameObjects = [this.paddle, this.ball, ...bricks];
        new InputHandler(this.paddle);
    }
    
    update(deltaTime) {
        this.gameObjects.forEach(object => object.update(deltaTime));
    }
    
    draw(ctx) {
        this.gameObjects.forEach(object => object.draw(ctx));
    }
}