let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const status = document.querySelector(".status");
const results = document.querySelector(".results");
const humanScoreDiv = document.querySelector(".human-score");
const computerScoreDiv = document.querySelector(".computer-score");

function getComputerChoice() {
  switch (getRandomInt(3)) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function playRound(human, computer) {
  if (human === computer) {
    results.textContent = "It's a tie!";
  } else if (
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper")
  ) {
    results.textContent = `You win!`;
    humanScore++;
  } else {
    results.textContent = `You lose!`;
    computerScore++;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = button.id;
    const computerChoice = getComputerChoice();

    status.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}.`;
    playRound(humanChoice, computerChoice);

    humanScoreDiv.textContent = humanScore;
    computerScoreDiv.textContent = computerScore;
  });
});
