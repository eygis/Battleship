const ship = require('./ship');
const shipFactory = ship.shipFactory;

export const ships = {
    xsmall: shipFactory(2),
    small: shipFactory(3),
    medium: shipFactory(4)
}

export let gameboardFactory = () => {

    let coordinates = {
        xsmall: null,
        small: null,
        medium: null,
        misses: [],
        shots: []
    }

    let checker = (arr, target) => {
      return	arr.length === target.length &&
        arr.every((c, i) => c === target[i]);
          }
    
    let generateCoordinates = (size) => {
      while (coordinates[size] == null) {
      let array = [];
      let flag = true;
      let subArray = [];
      for (let i = 0; i < 2; i++) {
           subArray.push(Math.floor(Math.random() * (11 - ships[size].length)) + 1)
          }
      array.push(subArray);
      for (let j = 0, value2 = (subArray[1] + 1); j < (ships[size].length -1); j++, value2++) {
          let subsub = [subArray[0]]; 
        subsub.push(value2)
        array.push(subsub)
      }
      for (let k = 0; k < array.length; k++) {
        for (let l = 0; l < Object.values(coordinates).length; l++) {		if (Object.values(coordinates)[l] == null) continue;
        for (let m = 0; m < Object.values(coordinates)[l].length; m++) {
          if (checker(Object.values(coordinates)[l][m], array[k])) {
            flag = false;
          }
          }
       }
    }
        if (flag == true) {coordinates[size] = array;}
      }
    }

    let receiveAttack = (attackLocation) => {
      let flag = false
      Object.values(coordinates).forEach((val, coordinatesIndex) => {
        if (val == null || coordinatesIndex == (Object.keys(coordinates).length - 1)) return
        val.forEach((pair, valueIndex) => {
          if (checker(pair, attackLocation)) {
            let damagedShip = Object.keys(ships)[coordinatesIndex];
            ships[damagedShip].hit(valueIndex);
            flag = true;
          }
        })
        })
        if (flag == false) {
          coordinates.misses.push(attackLocation);
        }
      coordinates.shots.push(attackLocation)
    }

    let allSunk = () => {
      for (let key in ships) {
        if (ships[key].isSunk == false) {
          return false;
        }
      }
      return true;
    }


    return {
        get coordinates() {
            return coordinates
        },
        generateCoordinates,
        receiveAttack,
        allSunk,
        checker
    }
}