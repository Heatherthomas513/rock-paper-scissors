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
        computerChoice = "Rock";
    } else if (randomNumber === 2) {
        computerChoice = "Paper";
    } else if (randomNumber === 3) {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

console.log(getComputerChoice());