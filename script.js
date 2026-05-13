function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];

  return options[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  const input = window.prompt("Enter a move: ");
  return input.toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return "It's a tie!";
    }

    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
      computerScore++;
      return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
  }

  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
  }

  console.log(`Your Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);
}

playGame();
