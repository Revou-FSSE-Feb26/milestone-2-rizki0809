const startBtn = document.querySelector("#startBtn");
const clickBtn = document.querySelector("#clickBtn");
const scoreText = document.querySelector("#score");
const timeText = document.querySelector("#time");
const restartBtn = document.querySelector("#restartBtn");

let game = {
  score: 0,
  time: 10,
  active: false
};

startBtn.addEventListener("click", startGame);
clickBtn.addEventListener("click", addScore);
restartBtn.addEventListener("click", resetGame);

function startGame() {
  game.active = true;
  game.score = 0;
  game.time = 10;

  clickBtn.disabled = false;
  restartBtn.classList.add("hidden");

  let interval = setInterval(() => {
    game.time--;
    timeText.textContent = `Time: ${game.time}`;

    if (game.time <= 0) {
      clearInterval(interval);
      endGame();
    }
  }, 1000);
}

function addScore() {
  if (game.active) {
    game.score++;
    scoreText.textContent = `Score: ${game.score}`;
  }
}

function endGame() {
  game.active = false;
  clickBtn.disabled = true;
  restartBtn.classList.remove("hidden");

  timeText.innerHTML = `<span class="lose">Game Over! Final Score: ${game.score}</span>`;
}

function resetGame() {
  scoreText.textContent = "";
  timeText.textContent = "";
}