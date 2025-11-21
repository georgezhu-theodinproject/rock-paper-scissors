/*
player pick rps
computer pick rps
compare player against computer

winner gets a point
display move
display result
check winner
*/

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const gameStatus = document.querySelector(".status");
const resultsDiv = document.querySelector(".results");
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
    return "tie";
  } else if (
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

function updateUI(outcome) {
  switch (outcome) {
    case "win":
      humanScore++;
      humanScoreDiv.textContent = humanScore;
      resultsDiv.textContent = "You win!";
      break;
    case "lose":
      computerScore++;
      computerScoreDiv.textContent = computerScore;
      resultsDiv.textContent = "You lose!";
      break;
    default:
      resultsDiv.textContent = "It's a tie!";
      break;
  }
}

function checkWinner() {
  if (humanScore === 5 || computerScore === 5) {
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }
  if (humanScore === 5) {
    resultsDiv.textContent = "Congratulations! You are the winner!";
    resultsDiv.style.color = "green";
    return;
  }

  if (computerScore === 5) {
    resultsDiv.textContent = "Game over!";
    resultsDiv.style.color = "red";
    return;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = button.id;
    const computerChoice = getComputerChoice();

    gameStatus.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}.`;
    const results = playRound(humanChoice, computerChoice);
    updateUI(results);
    checkWinner();
  });
});
