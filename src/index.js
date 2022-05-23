import { newGame as _newGame } from '../functions/player.js';
const newGame = _newGame();

let drawGrid = () => {
    let playerGrid = document.querySelector('#playerContainer');
    let computerGrid = document.querySelector('#computerContainer');
    for (let i = 1; i <= 10; i++) {
        let playerRow = document.createElement('div')
        let computerRow = document.createElement('div')
        playerRow.classList.add('row',  'player');
        computerRow.classList.add('row', 'computer');
        for (let j = 1; j <= 10; j++) {
            let playerTile = document.createElement('div')
            playerTile.classList.add('tile', 'player')
            playerTile.textContent = ''
            playerTile.dataset.coordinate = [j, i];
            playerRow.appendChild(playerTile)
            let computerTile = document.createElement('div')
            computerTile.classList.add('tile', 'computer')
            computerTile.textContent = ''
            computerTile.dataset.coordinate = [j, i];
            computerTile.addEventListener('click', (e) => {
                let split = e.target.dataset.coordinate.split(',')
                let array = []
                split.forEach(string => array.push(parseInt(string)))
                if (newGame.computer.board.shotsChecker(array)) {
                    newGame.computer.board.receiveAttack(array, 'computer');
                marker();
                if (newGame.computer.board.allSunk()) {
                    window.alert('You win!')
                }
                newGame.computerAttack();
                marker();
                if (newGame.human.board.allSunk()) {
                    window.alert('Computer wins :(')
                }
                }
            })
            computerRow.appendChild(computerTile)
        }
        playerGrid.appendChild(playerRow)
        computerGrid.appendChild(computerRow)
    }

    let playerXsmallCoordinates = newGame.human.board.coordinates.xsmall;
    let playerSmallCoordinates = newGame.human.board.coordinates.small;
    let playerMediumCoordinates = newGame.human.board.coordinates.medium;
    let computerXsmallCoordinates = newGame.computer.board.coordinates.xsmall;
    let computerSmallCoordinates = newGame.computer.board.coordinates.small;
    let computerMediumCoordinates = newGame.computer.board.coordinates.medium;
    
    for (let i = 0; i < 2; i++) {
        document.querySelectorAll(`[data-coordinate="${playerXsmallCoordinates[i]}"]`)[0].style.backgroundColor = 'green';
        //document.querySelectorAll(`[data-coordinate="${computerXsmallCoordinates[i]}"]`)[1].style.backgroundColor = 'green';
    }
    for (let i = 0; i < 3; i++) {
        document.querySelectorAll(`[data-coordinate="${playerSmallCoordinates[i]}"]`)[0].style.backgroundColor = 'blue';
        //document.querySelectorAll(`[data-coordinate="${computerSmallCoordinates[i]}"]`)[1].style.backgroundColor = 'blue';
    }
    for (let i = 0; i < 4; i++) {
        document.querySelectorAll(`[data-coordinate="${playerMediumCoordinates[i]}"]`)[0].style.backgroundColor = 'yellow';
        //document.querySelectorAll(`[data-coordinate="${computerMediumCoordinates[i]}"]`)[1].style.backgroundColor = 'yellow';
    }
    
}

let marker =  () => {
    let playerMisses = newGame.human.board.coordinates.misses;
    let computerMisses = newGame.computer.board.coordinates.misses;
    for (let i = 0; i < playerMisses.length; i++) {
        document.querySelectorAll(`[data-coordinate="${playerMisses[i]}"]`)[0].style.backgroundColor = 'grey'
    }
    for (let i = 0; i < computerMisses.length; i++) {
        document.querySelectorAll(`[data-coordinate="${computerMisses[i]}"]`)[1].style.backgroundColor = 'grey'
    }
}


drawGrid();
marker();
