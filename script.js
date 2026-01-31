function getComputerChoice() {
  let randomNumber = Math.random();
  let computerChoice = "";

  if (randomNumber <= 0.33) {
    computerChoice = "rock";
  } else if (randomNumber > 0.33 && randomNumber < 0.67) {
    computerChoice = "paper";
  } else if (randomNumber >= 0.67) {
    computerChoice = "scissors";
  }

  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt('Hint: "rock", "paper", "scissors"');
  let result = "";

  if (humanChoice === "rock") {
    result = "rock";
  } else if (humanChoice === "paper") {
    result = "paper";
  } else if (humanChoice === "scissors") {
    result = "scissors";
  } else {
    result = "Wrong keyword ❌ \br Hint: 'rock', 'paper', 'scissors'";
  }

  return result;
}
