const ship = require('./ship');
const shipFactory = ship.shipFactory;

/*export const ships = {
    xsmall: shipFactory(2),
    small: shipFactory(3),
    medium: shipFactory(4)
}*/

export let gameboardFactory = () => {

    let coordinates = {
        xsmall: null,
        small: null,
        medium: null,
        get info() {
            return {xsmall: this.xsmall, 
                    small: this.small, 
                    medium: this.medium
                }
        }
    }

    let checker = (arr, target) => {
        return target.every(value => arr.includes(value));
    }
    
    let generateCoordinates = (size, length) => {
      while (coordinates[size] == null) {
      let array = [];
      let flag = true;
      let subArray = [];
      for (let i = 0; i < 2; i++) {
           subArray.push(Math.ceil(Math.random() * (11 - length)))
          }
      array.push(subArray);
      for (let j = 0, value2 = (subArray[1] + 1); j < (length -1); j++, value2++) {
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

    
    let getter = coordinates.info;


    return {
        coordinates,
        getter,
        generateCoordinates
    }
}