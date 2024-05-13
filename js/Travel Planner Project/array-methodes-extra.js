const trips = [
  { id: 1, traveler: 'John Doe', destination: 'Paris', days: 5, cost: 1200 },
  { id: 2, traveler: 'Jane Doe', destination: 'Paris', days: 7, cost: 1400 },
  { id: 3, traveler: 'John Doe', destination: 'London', days: 3, cost: 900 }
];

function groupByDestination(tripsArr) {
  let tripsObj = {};
  for (const trip of tripsArr) {
    if (!tripsObj[trip.destination]) {
      tripsObj[trip.destination] = [];
    }
    tripsObj[trip.destination].push(trip)
  }
  console.log(tripsObj);
}

// groupByDestination(trips)

// 2

function longestTrip(tripsArr) {
  const longestTrip = tripsArr.reduce((prev, curr) => (prev && prev.days > curr.days) ? prev : curr)
  return longestTrip;
}

console.log(longestTrip(trips));

// 3

function expensiveTrip(tripsArr) {
  const expensiveTrip = tripsArr.sort((a, b) => b.cost - a.cost)[0]
  return expensiveTrip;
} 

console.log(expensiveTrip(trips));

// 4

console.log(trips);

function countTravels(tripsArr) {
  const travelsCounterObj = {};
  for (const travel of tripsArr) {
    if (!(travel.traveler in travelsCounterObj)) {
      travelsCounterObj[travel.traveler] = 1;
    } else {
      travelsCounterObj[travel.traveler]++
    }
  }
  return travelsCounterObj;
}

console.log(countTravels(trips));

// 5

// function uniqueDestinations(tripsArr) {
//   let uniqueDestinationsArr = [];
//   for (const destination of tripsArr) {
//     if (!(uniqueDestinationsArr.includes(destination.destination))) {
//       uniqueDestinationsArr.push(destination.destination);
//     }
//   }
//   return uniqueDestinationsArr;
// }

// console.log(uniqueDestinations(trips));

function uniqueDestinations(tripsArr) {
  return [...new Set(tripsArr.map(trip => trip.destination))]
}

console.log(uniqueDestinations(trips));

