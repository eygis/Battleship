import { shipFactory as _shipFactory } from '../functions/ship.js';
const shipFactory = _shipFactory;

describe('ship tests', () => {

    test('returns expected object format', () => {
        expect(shipFactory(3)).toMatchObject({
            length: 3,
            hits: [false, false, false],
            isSunk: false
        })
    });

    test('ship takes damage', () => {
        const newShip = shipFactory(4);
        newShip.hit(1);
        expect(newShip).toMatchObject({
            length: 4,
            hits: [false, true, false, false],
            isSunk: false
        })
    })
});