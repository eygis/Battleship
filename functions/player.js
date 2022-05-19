import { gameboardFactory } from './gameboard.js';
//const gameboardFactory = gameboard.gameboardFactory();
const checker = gameboardFactory().checker;
const ships = gameboardFactory().ships

export let newGame = () => {

    let generator = () => {
        const newBoard = gameboardFactory();
        Object.keys(ships).forEach(key => {
            newBoard.generateCoordinates(`${key}`)
        });

        return newBoard
    }

    let human = {
        ships: ships,
        board: generator()
    }

    let computerAttack = () => {
        let random = () => {
        	return Math.floor(Math.random() * 10) + 1;
        }
        let array = [random(), random()]
				
        let available = () => {
        	let flag = true
        	human.board.coordinates.shots.forEach(val => {
          	if (checker(val, array)) {
            flag = false
            }
          })
          
          return flag
          
        }
        
        while (!available()) {
        	array = [random(), random()]
        }
        human.board.receiveAttack(array, 'player')
    }

    let computer = {
        ships: ships,
        board: generator()
    }

    return  {
        human, 
        computer,
        computerAttack
    }
}