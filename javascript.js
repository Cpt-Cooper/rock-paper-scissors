function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3)
    switch (randomInt) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}
function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection){
        return "Draw"
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        return "You Lose! Paper beats Rock"
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        return "You Win! Rock beats Scissors"
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        return "You Lose! Scissors beats Paper"
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        return "You Win! Paper beats Rock"
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        return "You Lose! Rock beats scissors"
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        return "You Win! Scissors beats Paper"
    }
}
function game(){
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("What's your choice?: (rock, paper, scissors)")
        playerSelection.toLowerCase()
        let computerSelection = getComputerChoice()
        console.log(playRound(computerSelection, playerSelection))
    }
}
game()
