export let shipFactory = (length) => {
    
    let hits = new Array(length).fill(false)

    let isSunk = () => {
        return hits.every(value => (value))
    }

    let hit = (location) => {
        hits.splice(location, 1, true);
    }

    return {
        length,
        hits,
        isSunk: isSunk(),
        hit
    }
}