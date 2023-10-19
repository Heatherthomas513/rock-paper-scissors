/* A game of rock, paper, scissors, playing against the computer
The function getComputerChoice will return either 'Rock', 'Paper', or 'Scissors'
getComputerChoice will work by first generating a random number between 1 and 3,
and then assigning either rock, paper, or scissors depending on the number generated.*/

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomNumber = getRandomNumber(1, 3);
let computerChoice;

function getComputerChoice() {
    if (randomNumber === 1) {
        computerChoice = "rock";
    } else if (randomNumber === 2) {
        computerChoice = "paper";
    } else if (randomNumber === 3) {
        computerChoice = "scissors";
    }
    return computerChoice;
}



/* Using prompt() users can type in rock, paper, or scissors.
The user selection will be stored in the variable playerChoice.
The function playRound will take playerChoice and computerChoice as its parameters.
playRound will compare the parameters and return a statement regarding the results*/

let playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();

getComputerChoice();

function playRound(playerChoice, computerChoice) {
    if (playerChoice === "rock" && computerChoice === "rock") {
        return "You both chose rock. It's a tie!";
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        return "Paper beats rock. You lose.";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        return "Rock beats scissors. You win!";
    } else if (playerChoice === "paper" && computerChoice === "paper") {
        return "You both chose paper. It's a tie!";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        return "Paper beats rock. You win!";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        return "Scissors beats paper. You lose.";
    } else if (playerChoice === "scissors" && computerChoice === "scissors") {
        return "You both chose scissors. It's a tie!";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        return "Scissors beats paper. You win!";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        return "Rock beats scissors. You lose.";
    }
}

console.log(playRound(playerChoice, computerChoice));