// create a function that randomly selects one of rock, paper, scissors

function getComputerChoice() {
    let num1 = Math.random();
    if (num1 <= 0.33) {
        return "rock"; }
    if (num1 > 0.33 && num1 >= 0.66) {
        return "paper"; }
    else {
        return "scissors";
    }
}


// allow the user to input one of rock, paper, scissors

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?");
    return choice;
}


// create a function that checks the winner and states the result

let humanScore = 0;
let computerScore = 0;


function playGame() {
    

    function playRound(humanChoice, computerChoice) {
        console.log("The computer selected " + computerSelection);
        if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lose, paper beats rock");
            computerScore++; 
        }
        if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You win, paper beats rock");
            humanScore++;
        }
        if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("You lose, rock beats scissors");
            computerScore++;
        }
        if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You win, rock beats scissors")
            humanScore++;
        }    
        if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("you lose, scissors beats paper");
            computerScore++;
        }
        if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("you win, scissors beats paper");
            humanScore++;
        }
        if (humanChoice === computerChoice) {
            console.log("this round is a draw");
        }
    }

    const humanSelection = getHumanChoice().toLowerCase();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log("you: " + humanScore + " computer: " + computerScore);

}

function winner() {
    if (humanScore > computerScore) {
        console.log("You are the winner");
    } if (humanScore < computerScore) {
        console.log("The computer is the winner");
    } if (humanScore == computerScore) {
        console.log("the game is a tie");
    }
}
    
playGame();
playGame();
playGame();
playGame();
playGame();
winner();