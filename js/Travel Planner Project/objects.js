// Exercise 1

const destination = {
  name: 'Holly land',
  county: 'Israel',
  yearVisited: 3,
  activities: ['Western wall', 'Jerusalem', 'Machne yuda'],
  rating: [4.5, 4.6, 4.4],
  getAverageRating() {
    let sum = 0;
    for (rating of this.rating) {
      sum += rating;
    }
    let avg = sum / this.rating.length;
    console.log(avg);
  }
}

// console.log(destination.getAverageRating());

// Exercise 2

const landmarks = {landmarks: [
  {
    name: 'Israel museon',
    description: 'The biggest museion in Israel'
}, {
  name: 'Dead sea',
  description: 'The lowest place on earth'
}
]}

const allObject = Object.assign({},destination, landmarks);

// console.log(destination);
// console.log(allObject);

// console.log(destination.activities[1]);
// console.log(destination['activities'][1]);

// console.log(landmarks[1].name);
// console.log(landmarks[1]['name']);

// Exercise 3

destination.yearVisited = 2024;
// console.log(destination.yearVisited);

destination.rating.push(4.9)
destination['rating'].push(5.0)
// console.log(destination.rating);

delete destination.county;
// console.log(destination);

allObject.landmarks[0].description = "A new description";
// console.log(allObject.landmarks);
allObject['landmarks'][0]['description'] = "A newer description";
// console.log(allObject['landmarks']);

// console.log('rating' in destination);

// Exercise 4

const destinations1 = [
  { name: "Eiffel Tower", details: { visitorsPerYear: 7000000, entryFee: "25 USD"}}, { name: "Great Wall of China", details: { visitorsPerYear: 1000000, entryFee: "60 CNY"}}
];

// console.log(destinations1[0].details.entryFee);
let sumOfVisitors = 0;
destinations1.forEach((el) => sumOfVisitors += el.details.visitorsPerYear)
const avg = sumOfVisitors / destinations1.length;
// console.log(avg);

// Exercise 5

// function func(destination, destinations1) {
// for (const key in destinations1) {
//   const allDestinations = Object.assign(destination,destinations1[key]);
//   return allDestinations
// }
// }
const allDestinations = Object.assign(destination, destinations1[0])
console.log(allDestinations);

Object.seal(allDestinations);
Object.freeze(allDestinations);
console.log(Object.isFrozen(allDestinations));
console.log(Object.isSealed(allDestinations));

// Exercise 6 

const destinationDetails = {
  name: "Machu Picchu",
  country: "Peru",
  yearVisited: 2019,
  rating: [9, 8.5, 9, 9.5]
};

function logNamesAndValues(obj) {
  console.log(Object.keys(obj));
  console.log(Object.values(obj));

}
console.log(logNamesAndValues(destinationDetails));

// Exercise 7

const destinationRatings = {
  "Machu Picchu": 9,
  "Great Wall of China": 8.5,
  "Eiffel Tower": 7.5,
  "Colosseum": 6.5,
};



function moreRating(obj) {
  for (let i  of Object.entries(obj)) {
    if (i[1] < 7) {
      obj[i[0]]++ 
    }
  }
  console.log(obj);
}

moreRating(destinationRatings);

// Exercise 8
const descriptions = {
  1: { name: "Machu Picchu", yearVisited: 2019, rating: 9 },
  2: { name: "Stonehenge", yearVisited: 2010, rating: 8.5 },
  3: { name: "Great Wall of China", yearVisited: 2018, rating: 8.6 }
};

function newerDestinations(obj) {
  const newerDestinationsArr = [];
  for (let i of Object.entries(obj)) {
    if (i[1].yearVisited > 2015) {
      newerDestinationsArr.push(i[1])
      i[1].isNewer = true;
    }
  }
  console.log(newerDestinationsArr);
}

newerDestinations(descriptions)

// Exercise 9

const activityRatings = {
  hiking: [9, 8, 10, 7, 8.5],
  sightseeing: [8.5, 8, 9, 9.5, 7.5],
  snorkeling: [7, 7.5, 8, 8.5, 9]
};

function avgActivityRating(obj) {
  for ([key, value] of Object.entries(obj)) {
    console.log(key, value.reduce((acc, cur) => acc + cur) / (value.length));
  }
}

avgActivityRating(activityRatings);

// Exercise 10

const destinationAwards = {
  "Machu Picchu": "Most Visited",
  "Great Wall of China": "Most Visited",
  "Eiffel Tower": "Most Photographed",
  "Colosseum": "Most Iconic"
}

function awardsDestinations(obj) {
  const finalObj = {};
  for (const [key, value] of Object.entries(obj)) {
    if (finalObj[value]) {
      finalObj[value].push(key);
    } else {
      finalObj[value] = [key];
    }
  }
  console.log(finalObj);
}

awardsDestinations(destinationAwards)