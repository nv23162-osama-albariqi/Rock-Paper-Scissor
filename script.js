let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const result = determineWinner(playerChoice, computerChoice);
    
    updateScore(result);
    displayResult(playerChoice, computerChoice, result);
}

function determineWinner(player, computer) {
    if (player === computer) return 'draw';
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'player';
    }
    return 'computer';
}

function updateScore(result) {
    if (result === 'player') playerScore++;
    if (result === 'computer') computerScore++;
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
}

function displayResult(player, computer, result) {
    const resultText = {
        player: "You Win! 🎉",
        computer: "Computer Wins! 💻",
        draw: "It's a Draw! 🤝"
    };
    
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        You chose ${player.toUpperCase()} <br>
        Computer chose ${computer.toUpperCase()} <br>
        <strong>${resultText[result]}</strong>
    `;
}
