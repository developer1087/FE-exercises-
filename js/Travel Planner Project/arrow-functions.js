// 1. Simple Arrow Function Conversion
function getDestinationName(destination) {
  return destination.name;
}

const destinationName = destination => destination.name;


// 2. Control Flow in Arrow Functions
// function getTravelStatus(status) {
//   if (status === "Visited") {
//     return "You have visited this place";
//   } else if (status === "Upcoming") {
//     return "You are planning to visit this place";
//   } else {
//     return "This place is in your wishlist";
//   }
// }

const statusMessage = (status) => (status === "Visited" ? "You have visited this place" : status === "Upcoming" ? "You are planning to visit" : "This place is on your wishlist.");



// 3. Arrow Functions with Multiple Operations
function getTotalBudget(destinations) {
  let totalBudget = 0;
  for (let i = 0; i < destinations.length; i++) {
    totalBudget += destinations[i].budget;
  }
  return 'Total travel budget is ' + totalBudget;
}

const totalBudget = (destinations) => {
  let total = 0;
  destinations.map(destination => total += destination.budget);
  return 'Total travel budget is ' + total;
}

// 4. Arrow Functions as Callbacks
const sortedDestinations = destinations.sort(function(a, b) {
  return b.budget - a.budget;
});

const sortedDestinations = destinations.sort((a,b) => b.budget = a.budget);


// 5. Implicit Return with Arrow Functions
function getDestinationNames(destinations) {
  return destinations.map(function(destination) {
    return destination.name;
  });
}

const destinationsName = (destinations) => destinations.map(destination => destination.name);