// Impure Functions
// 1+2. Initialize Travel Destination

let travelDestinations = [];

function addDestination(destinationName, destinationDate) {
  travelDestinations.push([destinationName, destinationDate]);
  return travelDestinations;
}

addDestination("Tokyo", "2024");
addDestination("New York", "2023")

console.log(travelDestinations);

// 3. Find Travel Date

function findTravelDate(destinationName) {
  let destinationDate;
  let flag = false;
  for (let i = 0; i < travelDestinations.length; i++) {
    if (destinationName === travelDestinations[i][0]) {
      flag = true;
      destinationDate = travelDestinations[i][1];
      break;
    } 
  }
  console.log(flag? destinationDate : "Destination not found.");
}

findTravelDate("Tokyo");

// 4. Update Travel Date

function updateTravelDate(destinationName, newTravelDate) {
  flag = false;
  for (let i = 0; i < travelDestinations.length; i++) {
    if (destinationName === travelDestinations[i][0]) {
      flag = true;
      travelDestinations[i][1] = newTravelDate;
      break;
    } 
  }
  console.log(flag? newTravelDate : "Destination not found.");
}

updateTravelDate("Tokyo", "2024");

// 5. Remove Travel Destination
// function removeDestination(destinationName) {
//   flag = false;
//   for (let i = 0; i < travelDestinations.length; i++) {
//     if (destinationName === travelDestinations[i][0]) {
//       flag = true;
//       travelDestinations.splice(i, i+1);
//       break;
//     } 
//   }
//   console.log(flag? travelDestinations : "Destination not found.");
// }

// removeDestination("Tokyo");

// 6. List all destinations and dates

function listDestinations() {
  for (let i=0; i<travelDestinations.length; i++) {
    console.log(`${travelDestinations[i][0]} - ${travelDestinations[i][1]}`);
  }
}
listDestinations();

// 7. Find Next Destination
function findNextDestination() {
  curYear = new Date().getFullYear().toString();
  let destinationName;
  flag = false;
  for (let i = 0; i < travelDestinations.length; i++) {
    if (curYear === travelDestinations[i][1]) {
      flag = true;
      destinationName = travelDestinations[i][0];
      break;
    } 
  }
  console.log(flag? destinationName : "No upcoming destinations.");
}

findNextDestination();


// Pure Functions

// 1. Determine the Average Rating of Trips

function calculateAverageRating(ratingsArr) {
  let ratingSum = 0;
  let avg = 0;
  for (let i = 0; i < ratingsArr.length; i++) {
    ratingSum = ratingSum + ratingsArr[i];
  }
  avg = ratingSum / ratingsArr.length;
  const rounded = Math.round(avg * 10) / 10;
  console.log(rounded.toFixed(1));
}

calculateAverageRating([8.5, 7.9, 6.3, 9.2, 8.1]);

// 2. Extract Organizer Names from Trip Names
let organizerArr = ['Europe Exploration (2020) - Organized by Wanderlust Travel', 'Asian Adventure (2019) - Organized by Globe Trotters', 'Caribbean Cruise (2022) - Organized by Cruise Experts']

function extractOrganizerNames(organizerArr) {
  let itemArr = [];
  let namesOfOrganizers = [];
  for (let i = 0; i < organizerArr.length; i++) {
    itemArr.push(organizerArr[i].split(" "));
  }
  for (let i = 0; i < itemArr.length; i++) {
    namesOfOrganizers.push(itemArr[i][itemArr[i].length-2] + ' ' + itemArr[i][itemArr[i].length-1])
  }
  console.log(namesOfOrganizers);
}

extractOrganizerNames(organizerArr)


// 3. Check if a Trip Title Contains a Specific Word

// function containsWordInTitle(title, word) {
//   if (title.includes(word)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(containsWordInTitle('European Adventure', 'Europe')); 

// 4. Check if All Trip Titles Start with the Same Letter

tripTitlesArr = ['Paris Getaway', 'Prairie Expedition', 'Portugal Experience']

function allTitlesStartWithSameLetter(tripTitlesArr) {
  let firstLetterArr = [];
  for (let i = 0; i < tripTitlesArr.length; i++) {
    firstLetterArr.push(tripTitlesArr[i][0])
  }
  let check = false;
  for (let i = 0; i < firstLetterArr.length - 1; i++) {
    if (firstLetterArr[i] !== firstLetterArr[i + 1]) {
      check = false;
      break;
    } else {
      check = true;
    }
  }
  return check;
}
console.log(allTitlesStartWithSameLetter(tripTitlesArr));


// 5. Concatenate All Trip Types into a Single String

function concatenateTypes(tripTypes) {
  typesAsStr = tripTypes.join(', ');
  return typesAsStr;
}
const tripTypesArr = ['City', 'Beach', 'Mountain', 'Cruise'];
console.log(concatenateTypes(tripTypesArr));

// 6. Check if Any Trip Title is Longer Than 15 Characters

function anyTitleLongerThanFifteenChars(tripTitleArr) {
  let checkLength = false;
  for (let i = 0; i < tripTitleArr.length; i++) {
    if (tripTitleArr[i].length <= 15) {
      checkLength = false;
    } else {
      checkLength = true;
      break;
    }
  }
  return checkLength;
}

const tripTitles = ['Exploring Asia', 'African Safari', 'European Adventure'];

console.log(anyTitleLongerThanFifteenChars(tripTitles));

// 7. Find Trips Organized by a Specific Organizer

function findTripByOrganizer(tripTitlesArr, tripOrganizersArr, specificOrganizer) {
  let specificOrganizerTitle;
  for (let i = 0; i < tripTitlesArr.length; i++) {
    if (specificOrganizer === tripOrganizersArr[i]) {
      specificOrganizerTitle = tripTitlesArr[i];
      return specificOrganizerTitle;
    }
  }
}

console.log(findTripByOrganizer(['European Adventure', 'Asian Expedition', 'Caribbean Cruise'], ['Wanderlust Travel', 'Globe Trotters', 'Cruise Experts'], 'Wanderlust Travel'));


// 8. Capitalize the First Letter of Each Trip Title

function capitalizeFirsLetter(tripTitleArr) {
  let capitalizedArr = [];
  let wordsArr = [];
  for (let i = 0; i < tripTitleArr.length; i++) {
    wordsArr.push(tripTitleArr[i].split(" "));
  }
  for (let i = 0; i < wordsArr.length; i++) {
    capitalizedArr.push(wordsArr[i][0][0].toUpperCase() + wordsArr[i][0].slice(1) + " " + wordsArr[i][1][0].toUpperCase() + wordsArr[i][1].slice(1));
  }
  return capitalizedArr;
}

console.log(
  capitalizeFirsLetter(['european adventure', 'asian expedition', 'caribbean cruise'])
); 


// Bonus Exercises

// 1. Sort Destination Ratings
ratingsArrUnsorted = [4, 2, 5, 3, 1];

// function sortDestinationRating(unsortedArr) {
//   let sortedRatingArr = [];
//   for (let i = 0; i < unsortedArr.length; i++) {
//     for (let j = i+1; j < unsortedArr.length; j++) {
//       console.log(i, unsortedArr[i],unsortedArr[j]);
//       if (unsortedArr[i] > unsortedArr[j]) {
//         [unsortedArr[i], unsortedArr[j]] = [unsortedArr[j], unsortedArr[i]]
//       }
//     }
//   }
//   console.log(unsortedArr);
//   return sortedRatingArr;
// }

//  console.log(sortDestinationRating(ratingsArrUnsorted)); 

// 2. Average Rating of Top N Destinations
// Input: ([2, 3, 5, 4, 1], 3)

function avgRatingOfTopN(arr, n) {
  let sortedArr = sortDestinationRating(arr);
  let topN = sortedArr.slice(-n);
  let sum = 0;
  for (let i = 0; i < topN.length; i++) {
    sum += topN[i];
  }
  let avg = sum / n;
   return avg;
}

console.log(avgRatingOfTopN([2, 3, 5, 4, 1], 3)); 

function sortDestinationRating(unsortedArr) {
  for (let i = 0; i < unsortedArr.length; i++) {
    for (let j = i+1; j < unsortedArr.length; j++) {
      // console.log(i, unsortedArr[i],unsortedArr[j]);
      if (unsortedArr[i] > unsortedArr[j]) {
        [unsortedArr[i], unsortedArr[j]] = [unsortedArr[j], unsortedArr[i]]
      }
    }
  }
  // console.log(unsortedArr);
  return unsortedArr;
}


// 3. Create Rating Frequency Map for Destinations
// Input: [3, 4, 3, 5, 4, 5, 5]

function destinationRatingFrequency(destinationRatingArr) {
  let uniqueArr = [];
  for (const num of destinationRatingArr) {
    if (!uniqueArr.includes(num)) {
      uniqueArr.push(num);
    }
  }
  let numsArr = [];
  for (const num of uniqueArr) {
    numsArr.push([num]);
  }
  for (let i = 0; i < destinationRatingArr.length; i++) {
    for (let j = 0; j < numsArr.length; j++) {
      if (destinationRatingArr[i] === numsArr[j][0]) {
        numsArr[j].push(destinationRatingArr[i]);
      }
    }
  }
  let countArr = [];
  for (const arr of numsArr) {
    countArr.push([arr[0], arr.length-1])
  }
  console.log(countArr);
}

destinationRatingFrequency([3, 4, 3, 5, 4, 5, 5])

// 4. Normalize Destination Ratings

function normalizeDestinationRatings(arr, norStart, norEnd) {
  let ratio = norEnd / (arr.length-1);
  let normalizedArr = [];
  for (let i = 0; i < arr.length; i++) {
    normalizedArr.push(i * ratio)
  }
  console.log(normalizedArr);
}


normalizeDestinationRatings([1, 2, 3, 4, 5], 0, 100)
// Input: ([1, 2, 3, 4, 5], 0, 100)