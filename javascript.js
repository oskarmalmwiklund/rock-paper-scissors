const altOne = "rock";
const altTwo = "paper";
const altThree = "scissors";

// Create a function called computerPlay
function computerPlay(){
// Randomly generate a number between 1-3 and store in variable randomNumber
let randomNumber = Math.floor(Math.random()*3+1);

if (randomNumber === 1){
        // If randomNumber = 1, return altOne
        return altOne;
    } else if(randomNumber === 2){
        // If randomNumber = 2, return altTwo
        return altTwo;
    } else {
        // If randomNumber = 1, return altThree
        return altThree;
    }
}

// Create function playRound with two parameters, playerSelection and computerSelection
function playRound(playerSelection, computerSelection){
    // If computer and players picks the same alternative, draw and play again
    if(playerSelection === computerSelection){
        return "Draw! Play again."
        // All conditions that make the player lose
    } else if((playerSelection === altOne && computerSelection === altTwo)
            || (playerSelection === altThree && computerSelection === altOne)
            || (playerSelection === altTwo && computerSelection === altThree)) {
        return `You Lose! ${computerSelection} beats ${playerSelection}.`
        // All conditions that make the player win
    } else if((playerSelection === altOne && computerSelection === altThree)
            || (playerSelection === altTwo && computerSelection === altOne)
            || (playerSelection === altThree && computerSelection === altTwo))
        return `You Win! ${playerSelection} beats ${computerSelection}.`
}

// Create a function that calls the playRound function 5 times
function game(){
    for(let i = 0; i < 5; i++){
        playRound();
    }
}

// Prompt user for a selection and store in playerSelection
const playerSelection = prompt("Rock, paper, scissors?","").toLocaleLowerCase();

// call computerPlay function and store result in computerSelection
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));