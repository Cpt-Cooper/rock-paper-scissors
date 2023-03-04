const results = document.querySelector('.results');
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
        const result = document.createElement('div');
        result.textContent = "Draw";
        results.appendChild(result);
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        const result = document.createElement('div');
        result.textContent = "You Lose! Paper beats Rock";
        results.appendChild(result);
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        const result = document.createElement('div');
        result.textContent = "You Win! Rock beats Scissors";
        results.appendChild(result);
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        const result = document.createElement('div');
        result.textContent = "You Lose! Scissors beats Paper";
        results.appendChild(result);
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        const result = document.createElement('div');
        result.textContent = "You Win! Paper beats Rock";
        results.appendChild(result);
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        const result = document.createElement('div');
        result.textContent = "You Lose! Rock beats scissors";
        results.appendChild(result);
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        const result = document.createElement('div');
        result.textContent = "You Win! Scissors beats Paper";
        results.appendChild(result);
    }
}
const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', function getPlayerChoice(e){
    if (!e.target.id) return;
    playerSelection = e.target.id;
    playRound(getComputerChoice(), playerSelection);
});



