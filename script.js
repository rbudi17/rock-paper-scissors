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
  let humanChoice = prompt('Hint: "rock", "paper", "scissors"').toLowerCase();
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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  let result = "";

  if (humanChoice === computerChoice) {
    result = "The game is tie";
  }

  if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      result = "You lose! Paper beats Rock";
      computerScore++;
    } else if (computerChoice === "scissors") {
      result = "You win! Rock beats Scissors";
      humanScore++;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      result = "You win! Paper beats Rock";
      humanScore++;
    } else if (computerChoice === "scissors") {
      result = "You lose! Scissors beats Paper";
      computerScore++;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      result = "You lose! Rock beats Scissors";
      computerScore++;
    } else if (computerChoice === "paper") {
      result = "You win! Rock beats Paper";
      humanScore++;
    }
  }

  return result;
}

