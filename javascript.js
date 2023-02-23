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
var computerSelection = getComputerChoice()
var playerSelection = "paper"
function playRound(computerSelection, playerSelection) {
    if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win! Papers beats Rock"
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You Lose! Scissors beats Paper"
    } else {
        return "Draw"
    }
}
console.log(playRound(computerSelection, playerSelection))
