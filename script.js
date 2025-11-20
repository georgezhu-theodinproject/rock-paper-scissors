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

function getHumanChoice() {
  return prompt("Rock, paper, or scissors?").toLowerCase();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function playRound(human, computer) {
  if (human == computer) {
    console.log("You draw!");
    return;
  } else if (
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper")
  ) {
    console.log(`You win! ${human} beats ${computer}`);
    humanScore++;
  } else {
    console.log(`You lose! ${computer} beats ${human}`);
    computerScore++;
  }
}

function playGame() {
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.id);
    const humanChoice = button.id;
    playRound(button.id, getComputerChoice());
  });
});

let humanScore = 0;
let computerScore = 0;

// playGame();

// console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
