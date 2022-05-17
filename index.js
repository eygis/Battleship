let drawGrid = () => {
    let playerGrid = document.querySelector('#playerContainer')
    let computerGrid = document.querySelector('#computerContainer')
    for (let i = 0; i < 10; i++) {
        let playerRow = document.createElement('div')
        let computerRow = document.createElement('div')
        playerRow.classList.add('row',  'player');
        computerRow.classList.add('row', 'computer');
        for (let j = 0; j < 10; j++) {
            let playerTile = document.createElement('div')
            playerTile.classList.add('tile', 'player')
            playerTile.textContent = 'x'
            playerRow.appendChild(playerTile)
            let computerTile = document.createElement('div')
            computerTile.classList.add('tile', 'computer')
            computerTile.textContent = 'o'
            computerRow.appendChild(computerTile)
        }
        playerGrid.appendChild(playerRow)
        computerGrid.appendChild(computerRow)
    }
}
drawGrid();