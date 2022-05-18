import { newGame as _newGame } from '../functions/player.js';
const newGame = _newGame();

let drawGrid = () => {
    let playerGrid = document.querySelector('#playerContainer')
    let computerGrid = document.querySelector('#computerContainer')
    for (let i = 1; i <= 10; i++) {
        let playerRow = document.createElement('div')
        let computerRow = document.createElement('div')
        playerRow.classList.add('row',  'player');
        computerRow.classList.add('row', 'computer');
        for (let j = 1; j <= 10; j++) {
            let playerTile = document.createElement('div')
            playerTile.classList.add('tile', 'player')
            playerTile.textContent = 'x'
            playerTile.dataset.coordinate = [j, i];
            playerRow.appendChild(playerTile)
            let computerTile = document.createElement('div')
            computerTile.classList.add('tile', 'computer')
            computerTile.textContent = 'o'
            computerTile.dataset.coordinate = [j, i];
            computerRow.appendChild(computerTile)
        }
        playerGrid.appendChild(playerRow)
        computerGrid.appendChild(computerRow)
    }
}


drawGrid();
