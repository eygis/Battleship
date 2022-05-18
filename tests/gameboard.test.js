import { gameboardFactory as _gameboardFactory, ships as _ships } from '../functions/gameboard.js';
const gameboardFactory = _gameboardFactory();
const ships = _ships

describe('gameboard tests', () => {

    test('provides coordinates', () => {
        const newGame = gameboardFactory;
        Object.keys(_ships).forEach(key => {
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
        Object.keys(_ships).forEach(key => {
            newGame.generateCoordinates(`${key}`)
        });
        expect(typeof newGame.coordinates.small[0][0]).toBe('number');
    })

    test('receiveAttack functions correctly', () => {
        const newGame = gameboardFactory;
        Object.keys(_ships).forEach(key => {
            newGame.generateCoordinates(`${key}`)
        });
        newGame.coordinates.medium = [[1, 1], [1, 2], [1, 3], [1, 4]];
        newGame.receiveAttack([1, 3]);
        expect(ships.medium.hits).toMatchObject([false, false, true, false]);
    })

    test('all Sunk', () => {
        const newGame = gameboardFactory;
        Object.keys(_ships).forEach(key => {
            newGame.generateCoordinates(`${key}`)
        });
        newGame.coordinates.xsmall = [[2, 1], [2, 2]];
        newGame.coordinates.small = [[1, 1], [1, 2], [1, 3]];
        newGame.coordinates.medium = [[3, 1], [3, 2], [3, 3], [3, 4]]
        newGame.receiveAttack([4, 1]);
        expect(newGame.coordinates.misses).not.toBe([]);
    })

    test('isSunk', () => {
        const newGame = gameboardFactory;
        Object.keys(_ships).forEach(key => {
            newGame.generateCoordinates(`${key}`)
        });
        newGame.coordinates.small = [[1, 1], [1, 2], [1, 3]];
        newGame.receiveAttack([1, 1]);
        newGame.receiveAttack([1, 2]);
        newGame.receiveAttack([1, 3]);
        expect(ships.small.isSunk).toBe(true);
    })

    test('all Sunk', () => {
        const newGame = gameboardFactory;
        Object.keys(_ships).forEach(key => {
            newGame.generateCoordinates(`${key}`)
        });
        newGame.coordinates.xsmall = [[2, 1], [2, 2]];
        newGame.coordinates.small = [[1, 1], [1, 2], [1, 3]];
        newGame.coordinates.medium = [[3, 1], [3, 2], [3, 3], [3, 4]];
        newGame.receiveAttack([1, 1]);
        newGame.receiveAttack([1, 2]);
        newGame.receiveAttack([1, 3]);
        newGame.receiveAttack([2, 1]);
        newGame.receiveAttack([2, 2]);
        newGame.receiveAttack([3, 1]);
        newGame.receiveAttack([3, 2]);
        newGame.receiveAttack([3, 3]);
        newGame.receiveAttack([3, 4]);
        expect(newGame.allSunk()).toBe(true);
    })
})