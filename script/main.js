let playerScore = 0;
let aiScore = 0;

document.querySelectorAll('.choice input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function() {
        document.querySelectorAll('.choice').forEach(btn => btn.classList.remove('active'));
        this.closest('.choice').classList.add('active');
    });
});

document.getElementById('startButton').addEventListener('click', function() {
    const playerChoice = document.querySelector('input[name="playerChoice"]:checked')?.value;
    if (!playerChoice) {
        alert('Please select Rock, Paper, or Scissors!');
        return;
    }

    const choices = ['rock', 'paper', 'scissors'];
    const aiChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = determineWinner(playerChoice, aiChoice);
    updateStatus(playerChoice, aiChoice, result);
    updateScoreboard(result);
    document.getElementById('startButton').textContent = 'Play Again';
});

function determineWinner(player, ai) {
    if (player === ai) {
        return 'draw';
    }
    if ((player === 'rock' && ai === 'scissors') ||
        (player === 'paper' && ai === 'rock') ||
        (player === 'scissors' && ai === 'paper')) {
        return 'win';
    }
    return 'lose';
}

function updateStatus(player, ai, result) {
    const status = document.getElementById('status');
    switch (result) {
        case 'win':
            status.textContent = `You win!`;
            status.style.color = 'var(--win-color)';
            break;
        case 'draw':
            status.textContent = `It's a draw.`;
            status.style.color = 'var(--draw-color)';
            break;
        case 'lose':
            status.textContent = `You lose!`;
            status.style.color = 'var(--lose-color)';
            break;
    }
    status.textContent += ` Computer chose: ${ai}.`;
}

function updateScoreboard(result) {
    if (result === 'win') {
        playerScore++;
    } else if (result === 'lose') {
        aiScore++;
    }
    document.getElementById('scoreboard').textContent = `You ${playerScore} : ${aiScore} AI`;
}
