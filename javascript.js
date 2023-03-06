const results = document.querySelector('.results');
const playRoundResult = document.querySelector('.playRoundResult');
const showComputerChoice = document.querySelector('.showComputerChoice');
let round = 1;
let playerPoints = 0;
let computerPoints = 0;
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
    if (round <= 5) {
        if (computerSelection === playerSelection) {
            const result = document.createTextNode("⊜ ");
            playRoundResult.textContent = "Draw"
            showComputerChoice.textContent = `Computer choice: ${computerSelection}`;
            results.appendChild(result);
            playerPoints++;
            computerPoints++;
        } else if (playerSelection == "rock" && computerSelection == "paper") {
            const result = document.createTextNode("✖ ");
            playRoundResult.textContent = "You Lose! Paper beats Rock";
            showComputerChoice.textContent = `Computer choice: ${computerSelection}`;
            results.appendChild(result);
            computerPoints++;
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            const result = document.createTextNode("✔ ");
            playRoundResult.textContent = "You Win! Rock beats Scissors";
            showComputerChoice.textContent = `Computer choice: ${computerSelection}`;
            results.appendChild(result);
            playerPoints++;
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            const result = document.createTextNode("✖ ");
            playRoundResult.textContent = "You Lose! Scissors beats Paper";
            showComputerChoice.textContent = `Computer choice: ${computerSelection}`;
            results.appendChild(result);
            computerPoints++;
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            const result = document.createTextNode("✔ ");
            playRoundResult.textContent = "You Win! Paper beats Rock";
            showComputerChoice.textContent = `Computer choice: ${computerSelection}`;
            playerPoints++;
            results.appendChild(result);
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            const result = document.createTextNode("✖ ");
            playRoundResult.textContent = "You Lose! Rock beats Scissors";
            showComputerChoice.textContent = `Computer choice: ${computerSelection}`;
            computerPoints++;
            results.appendChild(result);
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            const result = document.createTextNode("✔ ");
            showComputerChoice.textContent = `Computer choice: ${computerSelection}`;
            playRoundResult.textContent = "You Win! Scissors beats Paper"
            results.appendChild(result);
            playerPoints++;
        }
    }
    if (round == 5){
        if (computerPoints > playerPoints){
             const finalResult = document.createElement('h1');
             finalResult.style.color = "red";
             finalResult.style.fontWeight = "bold";
             finalResult.style.fontSize = "30px";
             finalResult.textContent = "Computer Wins!"
             results.appendChild(finalResult);

        } else if (playerPoints > computerPoints){
            const finalResult = document.createElement('h1');
            finalResult.style.color = "green";
            finalResult.style.fontWeight = "bold";
            finalResult.style.fontSize = "30px";
            finalResult.textContent = "You Win!";
            results.appendChild(finalResult);
        } else {
            const finalResult = document.createElement('h1');
            finalResult.style.color = "white";
            finalResult.style.fontWeight = "bold";
            finalResult.style.fontSize = "30px";
            finalResult.textContent = "Draw!";
            results.appendChild(finalResult);
        }
    }
}

const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', function getPlayerChoice(e) {
    if (!e.target.id) return;
    playerSelection = e.target.id;
    playRound(getComputerChoice(), playerSelection);
    round++;
});



