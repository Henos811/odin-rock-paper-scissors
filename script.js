const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];

  return options[Math.floor(Math.random() * 3)];
}

let humanScore = 0;
let computerScore = 0;

const results = document.querySelector("#results");
const score = document.querySelector("#score");
const buttons = document.querySelectorAll("button");

function playRound(humanChoice, computerChoice) {
  if (humanScore >= 5 || computerScore >= 5) {
    return;
  }
  if (humanChoice === computerChoice) {
    results.textContent = "It's a tie!";
    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    results.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    results.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  score.textContent = `Player: ${humanScore} Computer: ${computerScore}`;

  if (humanScore === 5) {
    results.textContent = "You won the game!";
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }

  if (computerScore === 5) {
    results.textContent = "Computer wins!";
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }
}
