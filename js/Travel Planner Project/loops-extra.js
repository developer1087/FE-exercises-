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
totalTime(destinations1);

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
console.log(theLongestRoute(destinations2)); 

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

function sortByDistance(arr) {

  let sumOfDistance = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].routes.length; j+=2) {
      sumOfDistance.push(arr[i].routes[j].distance + arr[i].routes[j+1].distance)
    }
  }
  arr.function (sumOfDistance[i], sumOfDistance[i+1]) => a - b;
  return sumOfDistance;
}

console.log(sortByDistance(destinations3));

// 4. Travel Itinerary
const destinations4 = [
  { name: 'Paris', connections: ['London'] },
  { name: 'London', connections: ['New York'] },
  { name: 'New York', connections: [] },
];
const start4 = 'Paris';

// 5. Least Number of Connections
const destinations5 = [
  {
    name: 'Paris',
    connections: ['London', 'New York'],
  },
  { name: 'London', connections: ['New York'] },
  { name: 'New York', connections: [] },
];
