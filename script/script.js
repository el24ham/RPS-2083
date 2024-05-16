let player1Choice = null;
let player2Choice = null;
let player1Score = 0;
let player2Score = 0;

document.addEventListener('keydown', function(event) {
    if (player1Choice && player2Choice) {
        return;  
    }
    
    switch(event.key) {
        case 'a': 
            player1Choice = 'rock';
            break;
        case 's':
            player1Choice = 'paper';
            break;
        case 'd': 
            player1Choice = 'scissors';
            break;
        case 'ArrowLeft': 
            player2Choice = 'rock';
            break;
        case 'ArrowUp': 
            player2Choice = 'paper';
            break;
        case 'ArrowRight': 
            player2Choice = 'scissors';
            break;
    }
    revealChoicesIfReady();
});

function revealChoicesIfReady() {
    if (player1Choice && player2Choice) {
        document.getElementById('playerChoices').style.display = 'block';
        document.getElementById('player1Choice').textContent = player1Choice;
        document.getElementById('player2Choice').textContent = player2Choice;
        displayResult();
    }
}

function displayResult() {
    const result = determineWinner(player1Choice, player2Choice);
    document.getElementById('multiplayerResult').textContent = `Result: ${result}`;
    updateScores(result);
}

function determineWinner(p1, p2) {
    if (p1 === p2) return "It's a draw!";
    if ((p1 === 'rock' && p2 === 'scissors') || 
        (p1 === 'paper' && p2 === 'rock') || 
        (p1 === 'scissors' && p2 === 'paper')) {
        return 'Player 1 wins!';
    }
    return 'Player 2 wins!';
}

function updateScores(result) {
    if (result === 'Player 1 wins!') {
        player1Score++;
    } else if (result === 'Player 2 wins!') {
        player2Score++;
    }
    document.getElementById('player1Score').textContent = player1Score;
    document.getElementById('player2Score').textContent = player2Score;
}

document.getElementById('resetButton').addEventListener('click', resetGame);
document.getElementById('fullResetButton').addEventListener('click', fullReset);

function resetGame() {
    player1Choice = null;
    player2Choice = null;
    document.getElementById('playerChoices').style.display = 'none';
    document.getElementById('multiplayerResult').textContent = '';
}

function fullReset() {
    resetGame();
    player1Score = 0;
    player2Score = 0;
    document.getElementById('player1Score').textContent = player1Score;
    document.getElementById('player2Score').textContent = player2Score;
}
