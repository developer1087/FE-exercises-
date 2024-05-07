// 1

const travelPlaner = {
  locations: [
    {
      name: 'Ko phangan',
      description: 'A place in Thailand',
      bestTimeToTravel: 'Summer',
      localCuisine: 'asian food'
    }, {
      name: 'Rodus',
      destination: 'An island in greece',
      bestTimeToTravel: 'Spring',
      localCuisine: 'Greece food'
    }, {
      name: 'Paris',
      description: 'Most romantic city',
      bestTimeToTravel: 'Winter',
      localCuisine: 'French food'
    }, {
      name: 'New York',
      description: 'The big apple',
      bestTimeToTravel: 'Fall',
      localCuisine: 'Pizza'
    }
  ],
  addLocation(nameO, info) {
    let isName = false;
    // for every location in the locations arr in the object
    for (let i = 0; i < this.locations.length; i++) {
      // check if the location.name === nameO
      if (this.locations[i].name === nameO) {
        // if true - clg 'err' and stop the loop
        console.log("err");
        break
      } else {
        isName = true;
      }
    };
    // now check if isName if true of false
    if (isName) {
      // if it's true - push info the the end of locations arr
      this.locations.push(info)
    }
  },
  deleteLocation(nameA) {
    let isNameEqual = true;
    // Iterate over the locations arr, for every location in the arr
    for (let i = 0; i < this.locations.length; i++) {
      // check if location.name === name
      if (this.locations[i].name === nameA) {
        // if true - delete the specific location from the arr and stop the loop
        this.locations.splice(i, 1)
        break
      } else {
        // if false - set isNameEqual to false and keep looping
        isNameEqual = false;
        break
      }
    };
    // now check if isNameEqual is true or false
    if (!isNameEqual) {
      // if it's false - clg 'err'
      console.log('err');
    }
  },
  findLocation(locationName) {
    // initialize a boolian to determine if the location was found
    let isFound = true;
    // Iterate over the locations arr, for every location in the arr
    for (let i = 0; i < this.locations.length; i++) {
      // check if location.name === name
      if (this.locations[i].name === locationName) {
        // if true - return the location and stop looping
        return this.locations[i];
      } else {
        // if false - set isFound to false and keep looping
        isFound = false;
      }
    };
    if (!isFound) {
      console.log('Location not found');
    }
  },
  sortLocations() {
    const sorted = this.locations.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
  }
);
return sorted;
  }, 
  editLocation(name, info) {
    let isPlace = false;
    for (const place of this.locations) {
      if (name === place.name) {
        console.log("Location already exist");
        isPlace = true;
        break;
      }
    }
    if (!isPlace) {
      this.locations.push(info)
    }
  }

}

// 2

travelPlaner.addLocation('Ko phangan', {name: 'Ko hangan',
description: 'A place in Thailand',
bestTimeToTravel: 'Summer',
localCuisine: 'asian food'})

console.log(travelPlaner);

// 3

travelPlaner.deleteLocation('Ko phangan')

console.log(travelPlaner);

// 4

console.log(travelPlaner.findLocation('Rodus')); 

// 5

console.log(travelPlaner.sortLocations());

// 6

travelPlaner.editLocation('London', {
  name: 'London',
  description: 'The big ben',
  bestTimeToTravel: 'Fall',
  localCuisine: 'Fish and Chips'
});

console.log(travelPlaner);