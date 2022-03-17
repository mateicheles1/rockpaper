'use strict';
let numberComputerPick = 0;
let computerPick = 0;
let pick = 0;
let computerScore = 0;
let score = 0;
let roundsWon = 0;
let highscore = 0;
const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
const computer = ['rock', 'paper', 'scissors'];

document.querySelector('.btn--reset').addEventListener('click', () => {
    numberComputerPick = Math.floor(Math.random() * computer.length);
    computerPick = computer[numberComputerPick];
    document.querySelector('.start--paragraph').textContent = 'Press Start button to begin! 🔰';
    score = 0;
    roundsWon = 0;
    computerScore = 0;
    pick = 0;
    document.querySelector('.computer--score').textContent = 'Ai Score: 0';
    document.querySelector('.player--score').textContent = 'Player Score: 0';
})

document.querySelector('.btn').addEventListener('click', () => {
    document.querySelector('.start--paragraph').textContent = ' ';
    score = 0;
    computerScore = 0;
    pick = 0;

    numberComputerPick = Math.floor(Math.random() * computer.length);
    computerPick = computer[numberComputerPick];

    if (score === 2) {
        document.querySelector('.start--paragraph').textContent = 'You won the 2 out of 3 🎉!';
    } else if (computerScore === 2) {
        document.querySelector('.start--paragraph').textContent = 'Ai won the 2 out of 3 😞!';
    }
    

    document.querySelector('.emoji1').addEventListener('click', () => {
        pick = rock;
        
        
        if (computerPick === pick) {
            document.querySelector('.start--paragraph').textContent = 'You both picked the same thing 😂';
        } else if (computerPick === paper) {
            computerScore++;
            document.querySelector('.start--paragraph').textContent = 'Ai won the round';
            document.querySelector('.computer--score').textContent = `Ai Score: ${computerScore}`;
        } else if (computerPick === scissors) {
            score++;
            document.querySelector('.start--paragraph').textContent = 'You won the round';
            document.querySelector('.player--score').textContent = `Player Score: ${score}`;
        }
    });

    document.querySelector('.emoji2').addEventListener('click', () => {
        pick = paper;

        if (computerPick === pick) {
            document.querySelector('.start--paragraph').textContent = 'You both picked the same thing 😂';
        } else if (computerPick === scissors) {
            computerScore++;
            document.querySelector('.start--paragraph').textContent = 'Ai won the round';
            document.querySelector('.computer--score').textContent = `Ai Score: ${computerScore}`;
        } else if (computerPick === rock) {
            score++;
            document.querySelector('.start--paragraph').textContent = 'You won the round';
            document.querySelector('.player--score').textContent = `Player Score: ${score}`;
        }
    });

    document.querySelector('.emoji3').addEventListener('click', () => {
        pick = scissors;

        if (computerPick === pick) {
            document.querySelector('.start--paragraph').textContent = 'You both picked the same thing 😂';
        } else if (computerPick === rock) {
            computerScore++;
            document.querySelector('.start--paragraph').textContent = 'Ai won the round';
            document.querySelector('.computer--score').textContent = `Ai Score: ${computerScore}`;
        } else if (computerPick === paper) {
            score++;
            document.querySelector('.start--paragraph').textContent = 'You won the round';
            document.querySelector('.player--score').textContent = `Player Score: ${score}`;
        }
    });


});
