let travelData = {
  destinations: ["Paris", "London", "New York", "Tokyo", "Sydney"],
  flights: [
    { flightNumber: "AA123", destination: "New York", duration: "8h 15m" },
    { flightNumber: "BA456", destination: "London", duration: "7h 30m" },
    { flightNumber: "AF789", destination: "Paris", duration: "9h 20m" },
    { flightNumber: "JL012", destination: "Tokyo", duration: "13h 45m" },
    { flightNumber: "QF345", destination: "Sydney", duration: "22h 35m" },
  ],
};



// 1

const destinationArr = ["New York", "London", "Paris"];
const newArr = [...destinationArr];
console.log(newArr);

// 2
function filterDestination(arr, dest) {
  const chosenDestination = arr.flights.filter((destination) => dest === destination.destination)
  return chosenDestination
}

console.log(filterDestination(travelData, "London")); 

// 3

const getFlightDurationInSeconds = duration => {
  const [hours, minutes] = duration.split("h ");
  return parseInt(hours) * 3600 + parseInt(minutes) * 60;
  };
 
function durationSum(arr) {
  let secondsArr = [];
  for (const destination of arr.flights) {
    const durationInSeconds = getFlightDurationInSeconds(destination.duration);
    secondsArr.push(durationInSeconds);
  }
  const sum = secondsArr.reduce((acc, cur) => acc + cur, 0)
  return sum;
}

console.log(durationSum(travelData));

// 4

function flightsNums(arr) {
  const numberAndDestinationArr = arr.flights.map((flight) => `${flight.flightNumber} - ${flight.destination}`);
  return numberAndDestinationArr;
}

console.log(flightsNums(travelData));

// 5

function updateDuration(arr, newDuration, flightNumber) {
  for (flight of arr.flights) {
    if (flight.flightNumber === flightNumber) {
      flight.duration = newDuration;
      return flight;
    }
  }
}

console.log(updateDuration(travelData, newDuration = "4h 15m", flightNumber = "AA123")); 

// 6

function minDurationFilter(arr, minDuration) {
  const adjustedDurationArr = arr.flights.filter((flight) => getFlightDurationInSeconds(flight.duration) >= minDuration)
  return adjustedDurationArr
}

console.log(minDurationFilter(travelData, 30000)); 

// 7
function flightNumbers(obj) {
  const flightNumberArr = obj.flights.map((flight) => flight.flightNumber);
  return flightNumberArr;
}

console.log(flightNumbers(travelData));

// 8

function sortByDuration(obj) {
  const sortedByDuration = obj.flights.sort((a, b) => getFlightDurationInSeconds(b.duration) - getFlightDurationInSeconds(a.duration));
  return sortedByDuration;
}

console.log(sortByDuration(travelData));

// 9

const destinationNames = travelData.flights.map((flight) => flight.destination)
console.log(destinationNames);