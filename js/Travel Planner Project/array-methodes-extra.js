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

groupByDestination(trips)