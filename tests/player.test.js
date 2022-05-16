const player = require('../functions/player')
const newGame = player.newGame();
describe('player tests', () => {

    test('player and computer board generation', () => {
        newGame.human.board.generateCoordinates('small');
        //newGame.human.board.receiveAttack([1, 1])
        expect(newGame.human).not.toMatchObject({
            ifNotNot: 'shouldFail'
        })
        
    })

    test('computer attack', () => {
        newGame.human.board.generateCoordinates('small');
        newGame.human.board.coordinates.xsmall = [[1, 1], [1, 2]]
        newGame.human.board.coordinates.small = [[2, 1], [2, 2], [2, 3]]
        newGame.human.board.coordinates.medium = [[3, 1], [3, 2], [3, 3], [3, 4]]
        newGame.computerAttack();
        newGame.computerAttack();
        expect(newGame.human.board.coordinates).not.toMatchObject({
            ifNotNot: 'shouldFail'
        })
        
    })

})