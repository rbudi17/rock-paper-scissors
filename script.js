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
