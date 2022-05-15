const gameboard = require('../functions/gameboard');
const gameboardFactory = gameboard.gameboardFactory();
const ships = gameboard.ships

describe('gameboard tests', () => {

    test('provides coordinates', () => {
        const newGame = gameboardFactory;
        Object.keys(gameboard.ships).forEach(key => {
            newGame.generateCoordinates(`${key}`)
        });
        expect(newGame.coordinates).not.toMatchObject({
            xsmall: null,
            small: null,
            medium: null,
            misses: []
        })
    })

    test('coordinates are accessible', () => {
        const newGame = gameboardFactory;
        Object.keys(gameboard.ships).forEach(key => {
            newGame.generateCoordinates(`${key}`)
        });
        expect(typeof newGame.coordinates.small[0][0]).toBe('number');
    })

    test('receiveAttack functions correctly', () => {
        const newGame = gameboardFactory;
        Object.keys(gameboard.ships).forEach(key => {
            newGame.generateCoordinates(`${key}`)
        });
        newGame.coordinates.medium = [[1, 1], [1, 2], [1, 3], [1, 4]];
        newGame.receiveAttack([1, 3]);
        expect(ships.medium.hits).toBe([false, false, false, false]);
    })
})