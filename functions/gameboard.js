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
        misses: []
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
           subArray.push(Math.ceil(Math.random() * (11 - ships[size].length)))
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
        if (val == null) return
        val.forEach((pair, valueIndex) => {
          if (checker(pair, attackLocation)) {
            let damage = Object.keys(ships)[coordinatesIndex];
            ships[damage].hit(valueIndex)
            flag = true;
          }
        })
        })
        if (flag == false) {
          coordinates.misses.push(attackLocation);
        }
    }


    return {
        get coordinates() {
            return coordinates
        },
        generateCoordinates,
        receiveAttack
    }
}