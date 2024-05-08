// 1

function createTravelPlanner() {
  let destinationsArr = [];

  function addDestination(destName) {
    destinationsArr.push(destName);
    console.log(`The destination ${destName} has been add.`);
  }

  function removeDestination(destName) {
    let notInList = true;
    for (dest of destinationsArr) {
      if (dest === destName) {
        destinationsArr.splice(destinationsArr.indexOf(dest), 1);
        notInList = false;
        console.log(`${dest} has been removed.`);
      } 
    }
    if (notInList) {
      console.log("Destination not in the list.");
    }
  }

  function getDestinations() {
    return destinationsArr;
  }

  return {addDestination, removeDestination, getDestinations}
}

const res = createTravelPlanner();

res.addDestination("Ashdod")
res.addDestination("Ashkelon")
res.addDestination("Karmiel")

res.removeDestination("Eilat")

console.log(res.getDestinations()); 

// 2, 3, 4

function createTravelPlannerWithDetails() {
  let destinationsArr = [];

  function addDestination(destName, destDetails) {
    destinationsArr.push(destDetails);
    console.log(`The destination ${destName} has been add.`);
  }

  function removeDestination(destName) {
    let notInList = true;
    for (dest of destinationsArr) {
      if (dest.name === destName) {
        destinationsArr.splice(destinationsArr.indexOf(dest), 1);
        notInList = false;
        console.log(`${destName} has been removed.`);
      } 
    }
    if (notInList) {
      console.log("Destination not in the list.");
    }
  }

  function getDestinations() {
    return destinationsArr;
  }

  function sortDestinations() {
    const sortedDestinations = destinationsArr.sort((a, b) => a.name.localeCompare(b.name))
    return sortedDestinations;
  }

  function searchDestination(destName) {
    let notFound = true;
    for (dest of destinationsArr) {
      if (dest.name === destName) {
        notFound = false;
        console.log("Destination Found!");
        return dest;
      } 
    }
    if (notFound) {
      console.log("Destination not found.");
    }
  }

  return {addDestination, removeDestination, getDestinations, sortDestinations, searchDestination}
}

const response = createTravelPlannerWithDetails();

response.addDestination("Ashdod", {name: "Ashdod", location: "South", 'family level': 2})
response.addDestination("Ashkelon", {name: "Askelon", location: "South", 'family level': 2})
response.addDestination("Karmiel", {name: "Karmiel", location: "North", 'family level': 1})
response.addDestination("Eilat", {name: "Eilat", location: "South", 'family level': 3})

response.removeDestination("Ashdod")

console.log(response.getDestinations()); 

console.log(response.sortDestinations());

response.searchDestination("Karmiel")


