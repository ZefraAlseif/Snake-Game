const playBoard = document.querySelector(".play-board");

let foodX, foodY;
let snakeX = 5,
    snakeY = 10;
let velocityX = 0,
    velocityY = 0;

const changeFoodPosition = () => {
    // Passing a random 0 - 30 value as food position
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
};

const changeDirection = (e) => {
    // Changing velocity value based on key press
    console.log(e);
    if (e.key === "ArrowUp" || e.key === "w") {
        velocityX = 0;
        velocityY = -1;
    } else if (e.key === "ArrowDown" || e.key === "s") {
        velocityX = 0;
        velocityY = 1;
    } else if (e.key == "ArrowRight" || e.key == "d") {
        velocityX = 1;
        velocityY = 0;
    } else if (e.key == "ArrowLeft" || e.key == "a") {
        velocityX = -1;
        velocityY = 0;
    }
    initGame();
}

const initGame = () => {
    let htmlMarkup = `<div class = "food" style="grid-area: ${foodY} /  ${foodX}"></div>`;

    // Updating the snake's head position based on the current velocity
    snakeX += velocityX;
    snakeY += velocityY;

    htmlMarkup += `<div class = "head" style="grid-area: ${snakeY} /  ${snakeX}"></div>`;
    playBoard.innerHTML = htmlMarkup;
}
changeFoodPosition();
initGame();
document.addEventListener("keydown", changeDirection);
