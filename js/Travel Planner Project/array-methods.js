// 1
const travelItinerary = ["Paris", "Tokyo", "New York City"];
const destinationToCheck = "Tokyo";
 
if (travelItinerary.includes(destinationToCheck)) {
  console.log("Destination in list.");
} else {
  console.log("Not in list");
}

// 2
const travelDates = ["2024-05-01", "2024-05-15", "2024-06-01"];
const reversedTravelDates = travelDates.reverse();
console.log(reversedTravelDates);

// 3
const travelActivities = ["Sightseeing", "Hiking", "Dining"];
const activities = travelActivities.join(", ");
console.log(activities);

// 4
const plannedActivities = ["Sightseeing", "Hiking", "Dining"];
const activitieToCheck = "Hiking";
if (plannedActivities.includes(activitieToCheck)) {
  console.log("In");
} else {
  console.log("Not");
}

// 5
// It's exactly like 1!!

// 6
const upcomingTrips = ["Greece", "Iceland", "Japan"];
const updatedUpcomingTrips = upcomingTrips.pop();
console.log(upcomingTrips);

// 7
const bucketListDestination = ["Machu  Picchu", "Great Wall of China"];
const newDestination = "Aurora Australis in Antarctica";
bucketListDestination.unshift(newDestination);
console.log(bucketListDestination);

// 8
const europeanCapitals = ["Paris", "Berlin", "Madrid"];
const removedDestination = europeanCapitals.shift();
console.log(removedDestination);

// 9
const beachDestinations = ["Maldives", "Bora Bora"];
const cityDestinations = ["New York", "Tokyo"];
const allDestinations = beachDestinations.concat(cityDestinations);
console.log(allDestinations);

// 10
console.log(allDestinations.sort());

// 11
const packingListString = "Passport,Sunscreen,Camera";
const packingListArray = packingListString.split(",");
console.log(packingListArray);

// 12
const tripItinerary = ["Visit Louvre", "Eiffel Tower", "Seine River Cruise"];
const n = 2;
const newTripItinerary = tripItinerary.slice(0, n);
console.log(newTripItinerary);

// 13
const travelWishlist = ["Northern Lights in Norway", "Safari in Kenya", "Great Barrier Reef"];
travelWishlist.length = 0;
console.log(travelWishlist);

// 14
const destinations = ["Paris", "Tokyo"];
const newCityDestination = "New York City";
destinations.push(newCityDestination);
console.log(destinations);

// 15
// const destinationsNew = destinations.splice(0, destinations.length-1)
// console.log(destinationsNew);

// 16
const destinationsString = destinations.join(", ");
console.log(destinationsString);

// 17
const destinationToFind = "Tokyo";
function checkIfTokyo(destination) {
  return destination === "Tokyo";
} 
const tokyoIndex = destinations.findIndex(checkIfTokyo);
console.log(tokyoIndex);

// 18
const sortedDestination = destinations.sort();
console.log(sortedDestination);

// 19
const distances = [500, 150, 300, 200];
const sortedDistances = distances.sort().reverse();
console.log(sortedDistances);