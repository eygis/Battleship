const gameboard = require('../functions/gameboard');
const gameboardFactory = gameboard.gameboardFactory();

describe('gameboard tests', () => {

    test('provides coordinates', () => {
        const testGame = gameboardFactory.generateCoordinates('small', 3)
        const getter = gameboardFactory.getter;
        expect(getter).toMatchObject({
            xsmall: null,
            small: [1,2],
            medium: null
        })
    })
})