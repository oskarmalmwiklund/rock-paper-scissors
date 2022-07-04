// Create a function called computerPlay
function computerPlay(){
// Randomly generate a number between 1-3 and store in variable randomNumber
let randomNumber = Math.floor(Math.random()*3+1);

if (randomNumber === 1){
        // If randomNumber = 1, return "Rock"
        return "Rock";
    } else if(randomNumber === 2){
        // If randomNumber = 2, return "Paper"
        return "Paper";
    } else {
        // If randomNumber = 1, return "Scissors"
        return "Scissors";
    }
}

// Create function playRound with two parameters, playerSelection and computerSelection
function playRound(playerSelection, computerSelection){
    return computerSelection + " " + playerSelection;
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));