let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];

  return options[Math.floor(Math.random() * 3)];
}

function getHumanChoice(input) {
  return input;
}

const input = window.prompt("Enter a move: ");
console.log(getHumanChoice(input));
