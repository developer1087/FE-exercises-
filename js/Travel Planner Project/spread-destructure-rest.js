// 1

const destination = {
  name: "Paris",
  country: "France",
  rating: 5,
  continent: "Europe"
}

const {name, country, rating} = destination;
console.log(`${name} is in ${country} and is rated ${rating}`);

// 2

let topDestinations = ["Paris", "Tokyo", "New York", "London"];

[topDestinations[0], topDestinations[1]] = [topDestinations[1], topDestinations[0]]

console.log(topDestinations);

// 3

const destinationRating = {"Paris": 5, "Tokyo": 4};

const updates = {"Paris": 4, "Tokyo": 5};

function updateValues(obj, updates) {
  const updatedObj = {...obj, ...updates}
  return updatedObj;
}

console.log(updateValues(destinationRating, updates));

// 4
const itinerary1 = ["Visit Louvre", "Eiffel Tower", "Seine River Crouse"];
const itinerary2 = ["Eiffel Tower", "Visit Louvre", "Montmartre"];
const combined = [...itinerary1, ...itinerary2];
let unique = [];
for (place of combined) {
  if (!unique.includes(place)) {
    unique.push(place)
  }
}
console.log(unique);

// 5
const travelerDetails = {
  name: "John",
  accommodations: {
    first: "Hilton Paris Opera",
    second: "Mercure Paris Center Tour Eiffel",
    third: "Ibis Paris Montmartre"
  }
};

const {first, second} = travelerDetails.accommodations;
console.log(first, second);

// 6

const baseProfile = {
  name: "Jane",
  nationality: "American"
}
const preferences = {
  food: "Vegetarian",
  interests: ["Museums", "Art"]
}

const allInfo = {
  ...baseProfile,
  ...preferences
}
console.log(allInfo);

// 7

const travelerDetails2 = {
  name: "Dave",
  nationality: "Canadian",
  interests: ["Hiking", "Photography", "Food"]
}

function addInterests(travelerDetailsObj, interestsToAdd) {
  for (interest of interestsToAdd) {
    if (!travelerDetailsObj.interests.includes(interest)) {
      travelerDetailsObj.interests = [
        ...travelerDetailsObj.interests,
        ...interestsToAdd
      ]
    }
  }
  return travelerDetailsObj
}

console.log(addInterests(travelerDetails2, ["Movies", "Concerts"])); 

// 8

const travelItineraries = [
  ["Paris", "Lyon"],
  ["Lyon", "Nice"],
  ["Nice", "Paris"]
]

function flattenItinerary(arr) {
  flattenedArr = [];
  for (nestedArr of arr) {
    for (place of nestedArr) {
      if (!flattenedArr.includes(place)) {
        flattenedArr.push(place);
      }
    }
  }
  return flattenedArr;
}

console.log(flattenItinerary(travelItineraries));

// 9

const travelers = [
  {name: "Alice", destinations: ["Berlin", "Amsterdam"]},
  {name: "Bob", destinations: ["Tokyo", "Kyoto"]},
  {name: "Cara", destinations: ["New York", "Boston"]},
]

function firstDest(arr) {
  const dest = arr.map(({name, destinations}) => ({name, destination: destinations[0]}))
  console.log(dest);
}

firstDest(travelers)

// 10

const itineraries = [
  {name: "Explore the Alps", difficulty: 7},
  {name: "Paris in a Day", difficulty: 4}
]

function difficultyUpdater(arr, amount) {
  arr = arr.map(({name, difficulty}) => name === "Explore the Alps" ? ({name, difficulty: difficulty + amount}): ({name, difficulty: difficulty}))
  console.log(arr);
}

difficultyUpdater(itineraries, 3)