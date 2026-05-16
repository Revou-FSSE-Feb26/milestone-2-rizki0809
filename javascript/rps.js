const buttons = document.querySelectorAll(".choice");
const result = document.querySelector("#result");
const scoreText = document.querySelector("#score");
const restartBtn = document.querySelector("#restartBtn");

const choices = ["rock", "paper", "scissors"];

let score = {
  player: 0,
  computer: 0
};

buttons.forEach(btn => {
  btn.addEventListener("click", () => play(btn.dataset.choice));
});

// reset score
restartBtn.addEventListener("click", () => {
  score.player = 0;
  score.computer = 0;
  updateScore();
  result.textContent = "";
});

// comp choice dan scoring
function play(player) {
  const computer = choices[Math.floor(Math.random() * 3)];

  let outcome;

  switch (true) {
    case player === computer:
      outcome = "Draw";
      break;
    case (player === "rock" && computer === "scissors") ||
         (player === "paper" && computer === "rock") ||
         (player === "scissors" && computer === "paper"):
      outcome = "Win";
      score.player++;
      break;
    default:
      outcome = "Lose";
      score.computer++;
  }

  result.innerHTML = `You: ${player} | Computer: ${computer} → <b>${outcome}</b>`;
  updateScore();
}

// update score
function updateScore() {
  scoreText.textContent = `Player: ${score.player} | Computer: ${score.computer}`;
}