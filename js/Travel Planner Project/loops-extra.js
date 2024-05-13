// 1. Calculate Total Travel Time
const destinations1 = [
  { name: 'Paris', distance: 500, speed: 50 },
  { name: 'London', distance: 200, speed: 70 },
  {
    name: 'New York',
    distance: 3000,
    speed: 500,
  },
];

function totalTime(arr) {
  const hours = [];
  for (let i = 0; i < arr.length; i++) {
    hours.push(arr[i].distance / arr[i].speed)
  }
  let hoursSum = 0;
  for (hour of hours) {
    hoursSum += hour;
  }
  console.log(Math.floor(hoursSum));
}
// totalTime(destinations1);

// 2. Find Longest Travel Route
const destinations2 = [
  {
    name: 'Paris',
    routes: [
      { name: 'Route 1', distance: 300 },
      { name: 'Route 2', distance: 250 },
    ],
  },
  {
    name: 'London',
    routes: [
      { name: 'Route 1', distance: 200 },
      { name: 'Route 2', distance: 280 },
    ],
  },
];

function theLongestRoute(destinationsL) {
  let longRoutes = null;
  let longDistance = 0;
  for (let i = 0; i < destinationsL.length; i++) {
    for (let j = 0; j < destinationsL[i].routes.length; j++) {
      if (destinationsL[i].routes[j].distance > longDistance) {
        longRoutes = destinationsL[i].routes[j];
        longDistance = destinationsL[i].routes[j].distance;
      } 
    }
  }
  return longRoutes;
}
// console.log(theLongestRoute(destinations2)); 

// 3. Sort Destinations by Distance
const destinations3 = [
  {
    name: 'Paris',
    routes: [
      { distance: 300 },
      { distance: 250 },
    ],
  },
  {
    name: 'London',
    routes: [
      { distance: 200 },
      { distance: 280 },
    ],
  },
];

function sortByDistanceSum(destinations) {
  for (let i = 0; i < destinations.length; i++) {
    let sum = 0;
    for (let j = 0; j < destinations[i].routes.length; j++) {
      sum += destinations[i].routes[j].distance;
    }
    destinations[i].sumDistance = sum;
  }

  destinations.sort((a, b) => a.sumDistance - b.sumDistance);

  return destinations;
}

console.log(sortByDistanceSum(destinations3));

// 4. Travel Itinerary
const destinations4 = [
  { name: 'Paris', connections: ['London'] },
  { name: 'London', connections: ['New York'] },
  { name: 'New York', connections: [] },
];
const start4 = 'Paris';

function connectionsItineraryBuilder(destinationsArr, start) {
  let allDestinationsArr = [];
  for (const destination of destinationsArr) {
    allDestinationsArr.push(destination.name);
  }
  for (const destination of destinationsArr) {
    for (const connection of destination.connections) {
      allDestinationsArr.push(connection);
    }
  }
  const set1 = new Set(allDestinationsArr);
  return ([...set1])
}

console.log(connectionsItineraryBuilder(destinations4));
// 5. Least Number of Connections
const destinations5 = [
  {
    name: 'Paris',
    connections: ['London', 'New York'],
  },
  { name: 'London', connections: ['New York'] },
  { name: 'New York', connections: [] },
];

function findLeastConnections(arr) {
  let minConnectionArrLen = arr[0].connections.length;
  for (const destination of arr) {
    if (destination.connections.length < minConnectionArrLen) {
      minConnectionArrLen = destination.connections.length;
    }
  }
  for (const destination of arr) {
    if (destination.connections.length === minConnectionArrLen) {
      return destination.name
    }
  }
}

console.log(findLeastConnections(destinations5));