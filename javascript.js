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
        // If randomNumber = 3, return altThree
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
        return `You lose! ${computerSelection} beats ${playerSelection}.`
        // All conditions that make the player win
    } else if((playerSelection === altOne && computerSelection === altThree)
            || (playerSelection === altTwo && computerSelection === altOne)
            || (playerSelection === altThree && computerSelection === altTwo))
        return `You win! ${playerSelection} beats ${computerSelection}.`
}

function game(){
    
    let playerScore = 0;
    let computerScore = 0;
    
    for(let i = 0; i < 5; i++){
        // Prompt user for a selection and store in playerSelection
        let playerSelection = prompt(`${altOne}, ${altTwo}, ${altThree}?`,"").toLocaleLowerCase();
        // call computerPlay function and store result in computerSelection
        let computerSelection = computerPlay();
        // Store result of playRound in gameOutcome
        let gameOutcome = playRound(playerSelection, computerSelection);
        
        // If gameOutcome contains win add +1 to player
        if(gameOutcome.includes("win")){
            playerScore += 1;
        // If gameOutcome contains lose add +1 to computer
        } else if(gameOutcome.includes("lose")){
            computerScore += 1;
        }

        // Print the result for every round
        console.log(gameOutcome);
    }

    // If playerScore > ComputerScore print win, else lost
    if(playerScore > computerScore){
        console.log("You won!");
    } else {
        console.log("You lost!");
    }
}

game()