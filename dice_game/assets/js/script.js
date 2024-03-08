// Definire le variabili
const playerResult = document.getElementById('playerDieResult')
const npcResult = document.getElementById('npcDieResult')

const playerField = document.getElementById('playerField')
const npcField = document.getElementById('npcField')

const rollDiceBtn = document.getElementById('roleDiceBtn')
const cancel = document.getElementById('reset')

// Tiro casuale
function randomRoll( min, max ) {
    return Math.floor(Math.random() * ( max - min + 1 ) + min )
}

// Tiro del dado
function rollDice() {

    playerField.classList.remove('winner', 'loser', 'tie')
    npcField.classList.remove('winner', 'loser', 'tie')

    let playerRoll = playerResult.innerHTML = randomRoll(1, 6)
    let npcRoll = npcResult.innerHTML = randomRoll(1, 6)

    if (playerRoll > npcRoll) {
        playerField.classList.add('winner')
        npcField.classList.add('loser')
    } else if ( npcRoll > playerRoll) {
        npcField.classList.add('winner')
        playerField.classList.add('loser')
    } else {
        npcField.classList.add('tie')
        playerField.classList.add('tie')
    }
}

rollDiceBtn.addEventListener('click', rollDice);

// Reset del Gioco
function refreshPage() {
    window.location.reload();
}

reset.addEventListener('click', refreshPage);