function detectCollision(ball, gameObject) {
    let bottomOfBall = ball.position.y + ball.radius;
    let topOfBall = ball.position.y - ball.radius;
    let leftSideOfBall = ball.position.x - ball.radius;
    let rightSideOfBall = ball.position.x + ball.radius;
    
    let topOfObject = gameObject.position.y;
    let bottomOfObject = gameObject.position.y + gameObject.height;
    let leftSideOfObject = gameObject.position.x;
    let rightSideOfObject = gameObject.position.x + gameObject.width;
    
    if (bottomOfBall >= topOfObject 
        && topOfBall <= bottomOfObject
        && ball.position.x - ball.radius >= leftSideOfObject 
        && ball.position.x + ball.radius <= rightSideOfObject) {
        return 'horizontal';
    } else if (leftSideOfBall <= rightSideOfObject
        && rightSideOfBall >= leftSideOfObject
        && ball.position.y - ball.radius >= topOfObject
        && ball.position.y + ball.radius <= bottomOfObject) {
        return 'vertical'
    } else {
        return false;
    }
}