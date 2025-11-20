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
    results.textContent = "You draw!";
    console.log("You draw!");
    results.style.color = "black";
    return;
  } else if (
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper")
  ) {
    results.textContent = `You win! ${human} beats ${computer}`;
    results.style.color = "green";

    humanScore++;
  } else {
    results.textContent = `You lose! ${computer} beats ${human}`;
    results.style.color = "red";

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
const results = document.querySelector(".results");
const humanScoreDiv = document.querySelector(".player-score");
const computerScoreDiv = document.querySelector(".computer-score");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.id);
    const humanChoice = button.id;
    playRound(button.id, getComputerChoice());
    humanScoreDiv.textContent = humanScore;
    computerScoreDiv.textContent = computerScore;
  });
});

let humanScore = 0;
let computerScore = 0;

// playGame();

// console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
