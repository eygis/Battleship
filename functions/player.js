const gameboard = require('./gameboard');
const gameboardFactory = gameboard.gameboardFactory();
const checker = gameboardFactory.checker;
export let newGame = () => {

    let generator = () => {
        const newBoard = gameboardFactory;
        Object.keys(gameboard.ships).forEach(key => {
            newBoard.generateCoordinates(`${key}`)
        });

        return newBoard
    }

    let human = {
        ships: gameboard.ships,
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
          	if (checker(array, val)) {
            flag = false
            return false
            }
          })
          if (flag == true) {
          return true
          }
        }
        
        if (available()) {
        	human.board.receiveAttack(array)
        }
    }

    let computer = {
        ships: gameboard.ships,
        board: generator()
    }

    return  {
        human, 
        computer,
        computerAttack
    }
}