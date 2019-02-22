class InputHandler {
    constructor(paddle) {
        document.addEventListener("keydown", event => {
            switch (event.code) {
                case 'ArrowLeft':
                    paddle.moveLeft();
                    break;
                case 'ArrowRight':
                    paddle.moveRight();
                    break;
            }
        });
        document.addEventListener("keyup", event => {
            switch (event.code) {
                case 'ArrowLeft':
                    if (paddle.speed < 0) {
                        paddle.stopMove();
                    }
                    break;
                case 'ArrowRight':
                    if (paddle.speed > 0) {
                        paddle.stopMove();
                    }
                    break;
            }
        });
    }




}