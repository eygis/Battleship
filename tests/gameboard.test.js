const gameboard = require('../functions/gameboard');
const gameboardFactory = gameboard.gameboardFactory();

describe('gameboard tests', () => {

    test('provides coordinates', () => {
        const testGame = gameboardFactory;
        testGame.generateCoordinates('small', 3);
        expect(testGame.coordinates).toMatchObject({
            xsmall: null,
            small: null,
            medium: null
        })
    })
})