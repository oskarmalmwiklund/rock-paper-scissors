// Create a function called computerPlay
function computerPlay(){
// Randomly generate a number between 1-3 and store in variable randomNumber
let randomNumber = Math.floor(Math.random()*3+1);

if (randomNumber === 1){
    // If randomNumber = 1, console.log("Rock")
    console.log("Rock");
    } else if(randomNumber === 2){
        // If randomNumber = 2, console.log("Paper")
        console.log("Paper")
    } else {
    // If randomNumber = 1, console.log("Scissors")
        console.log("Scissors")
    }
}

computerPlay();

// Create function playRound with two parameters, playerSelection and computerSelection
function playRound(playerSelection, computerSelection){

}