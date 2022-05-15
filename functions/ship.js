export let shipFactory = (length) => {
    
    let hits = new Array(length).fill(false)

    let sunk = () => {
        return hits.every(value => (value))
    }

    let hit = (location) => {
        hits.splice(location, 1, true);
    }

    return {
        length,
        hits,
        get isSunk() {
            return sunk()
        },
        hit
    }
}
