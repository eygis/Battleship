const gameboard = require('../functions/gameboard');
const gameboardFactory = gameboard.gameboardFactory();

describe('gameboard tests', () => {

    test('provides coordinates', () => {
        const newGame = gameboardFactory;
        Object.keys(gameboard.ships).forEach(key => {
            newGame.generateCoordinates(`${key}`)
        });
        expect(newGame.coordinates).not.toMatchObject({
            xsmall: null,
            small: null,
            medium: null
        })
    })

    test('coordinates are accessible', () => {
        const newGame = gameboardFactory;
        Object.keys(gameboard.ships).forEach(key => {
            newGame.generateCoordinates(`${key}`)
        });
        expect(typeof newGame.coordinates.small[0][0]).toBe('number');
    })
})