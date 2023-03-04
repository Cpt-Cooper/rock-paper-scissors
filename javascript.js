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
        console.log( "Draw")
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        console.log( "You Lose! Paper beats Rock")
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        console.log( "You Win! Rock beats Scissors")
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        console.log( "You Lose! Scissors beats Paper")
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        console.log( "You Win! Paper beats Rock")
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        console.log( "You Lose! Rock beats scissors")
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        console.log( "You Win! Scissors beats Paper")
    } else {
        console.log( "Invalid option!")
    }
}
const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', function getPlayerChoice(e){
    if (!e.target.id) return;
    playerSelection = e.target.id;
    playRound(getComputerChoice(), playerSelection);
});



