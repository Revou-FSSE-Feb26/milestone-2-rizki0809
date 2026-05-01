const input = document.querySelector("#input");
const guessBtn = document.querySelector("#guessBtn");
const message = document.querySelector("#message");
const attemptsText = document.querySelector("#attempts");
const restartBtn = document.querySelector("#restartBtn");

// object for game state
let game = {
  number: Math.floor(Math.random() * 100) + 1,
  attempts: 5
};

guessBtn.addEventListener("click", checkGuess);
restartBtn.addEventListener("click", restartGame);

function checkGuess() {
  let value = Number(input.value);

  if (!value) {
    message.textContent = "Enter a number!";
    return;
  }

  game.attempts--;

  if (value === game.number) {
    endGame(true);
  } else if (value > game.number) {
    message.textContent = `Too high!`;
  } else {
    message.textContent = `Too low!`;
  }

  attemptsText.textContent = `Attempts left: ${game.attempts}`;

  if (game.attempts <= 0 && value !== game.number) {
    endGame(false);
  }
}

function endGame(win) {
  guessBtn.disabled = true;
  restartBtn.classList.remove("hidden");

  message.innerHTML = win
    ? `<span class="win">You Win!</span>`
    : `<span class="lose">You Lose! Number was ${game.number}</span>`;
}

function restartGame() {
  game = {
    number: Math.floor(Math.random() * 100) + 1,
    attempts: 5
  };

  input.value = "";
  message.textContent = "";
  attemptsText.textContent = "";
  guessBtn.disabled = false;
  restartBtn.classList.add("hidden");
}