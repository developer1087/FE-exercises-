// Ex 1 - The trip superclass

class Trip {
  #destination;
  #duration;
  #distance;
  #activities;
  constructor(destination, duration, distance) {
    this.#destination = destination;
    this.#duration = duration;
    this.#distance = distance;
    this.#activities = [];
  } 
  get destination() {
    return this.#destination;
  }
  get duration() {
    return this.#duration;
  }
  get distance() {
    return this.#distance;
  }
  set destination(destUpdate) {
    if (destUpdate !== '') {
      this.destination = destUpdate;
    }
  }
  set duration(durUpdate) {
    if (durUpdate > 0) {
      this.duration += durUpdate;
    }
  }
  set distance(disUpdate) {
    if (disUpdate > 0) {
      this.distance += disUpdate;
    }
  }
  addActivity(activity) {
    if (activity !== '') {
      this.#activities.push(activity);
    }
  }
  #totalCost() {
    const costPerDay = 0.1;
    const costPerMile = 1.2;
    return (Math.round(this.duration * this.distance * costPerDay * costPerMile)); 
  }
  get totalCost() {
    return this.#totalCost();
  }

  get activities() {
    return this.#activities;
  }

  displayDetails() {
    const destinationStr = this.destination;
    const duration = this.duration;
    const distance = this.distance;
    const totalCost = this.totalCost;
    const activities = this.activities;
    return `You are going to ${destinationStr} for ${duration} day, the flight is ${distance} miles long and i'll cost you a total of ${totalCost}$. Your planned activities are: ${activities}`;
  }
}

const trip1 = new Trip("Paris", 5, 1200)

console.log(trip1.destination); 

trip1.addActivity("Louvre");

console.log(trip1.totalCost);
console.log(trip1.displayDetails());
console.log(trip1);

// Ex 2: The specific trip types subclasses

class AdventureTrip extends Trip {
  #difficultyLevel;
  #gearList;
  constructor(destination, duration, distance, difficultyLevel, gearList) {
    super(destination, duration, distance)
    this.#difficultyLevel = difficultyLevel;
    this.#gearList = gearList;
  }
  get difficultyLevel() {
    return this.#difficultyLevel;
  }
  get gearList() {
    return this.#gearList;
  }
  set difficultyLevel(level) {
    if (level === 'easy' || level === 'moderate' || level === 'hard') {
      this.difficultyLevel = level;
    }
  }
  set gearList(gear) {
    if (gear.every( i => typeof i === 'string')) {
      this.#gearList = gear;
    }
  }
  displayDetails() {
    const destinationStr = this.destination;
    const duration = this.duration;
    const distance = this.distance;
    const totalCost = this.totalCost;
    const activities = this.activities;
    const difficultyLevel = this.difficultyLevel;
    const gearList = this.gearList;
    return `You are going to ${destinationStr} for ${duration} day, the flight is ${distance} miles long and i'll cost you a total of ${totalCost}$. Your planned activities are: ${activities}, and the difficulty level is ${difficultyLevel}. The recommended gear for the adventure is ${gearList}`;
  }
}


const advTrip1 = new AdventureTrip("Dead sea caves", 1, 45, 'hard', ['Rope', 'Knife'])
advTrip1.addActivity('Climbing')
console.log(advTrip1.displayDetails());

console.log(advTrip1.gearList);

class CulturalTrip extends Trip {
  #language;
  #historicalSites;
  constructor(destination, duration, distance, language, historicalSites) {
    super(destination, duration, distance);
    this.#language = language;
    this.#historicalSites = historicalSites; 
  }
  get language() {
    return this.#language;
  }
  get historicalSites() {
    return this.#historicalSites;
  }
  set language(language) {
    if (language !== '') {
      this.#language = language;
    }
  }
  set historicalSites(historicalSites) {
    if (historicalSites.every( i => typeof i === 'string')) {
      this.#historicalSites = historicalSites;
    }
  }
  displayDetails() {
    const destinationStr = this.destination;
    const duration = this.duration;
    const distance = this.distance;
    const totalCost = this.totalCost;
    const activities = this.activities;
    const language = this.language;
    const historicalSites = this.historicalSites;
    return `You are going to ${destinationStr} for ${duration} day, the flight is ${distance} miles long and i'll cost you a total of ${totalCost}$. Your planned activities are: ${activities}, and the language spoken is ${language}. The recommended historical sites in this destination are ${historicalSites}`;
  }
}

const culturalTrip1 = new CulturalTrip("Rome", 3, 3000, 'Italian', ['Musoleom', 'Piza Tower'])
culturalTrip1.addActivity('Eat spagetti')
console.log(culturalTrip1.displayDetails());

// Ex 3 - The traveler class

class Traveler {
  #name;
  #plannedTrips;
  constructor(name) {
    this.#name = name;
    this.#plannedTrips = [];
  }
  get name() {
    return this.#name
  }
  set name(name) {
    if (name !== '') {
      this.#name = name;
    }
  }
  addTrip(tripObj) {
    if (tripObj instanceof Trip) {
      this.#plannedTrips.push(tripObj);
    }
  }
  planActivity(tripObj, activity) {
    if (this.#plannedTrips.includes(tripObj)) {
      tripObj.addActivity(activity);
    } else {
      return "You can only add activity for planned trips."; 
    }
  }
  displayPlannedTrips() {
    let allPlanedTrips = [];
    for (const trip of this.#plannedTrips) {
      let x = trip.displayDetails();
      allPlanedTrips.push(x);
    }
    return allPlanedTrips.join('')
  }
}

const traveler1 = new Traveler('Avi');

traveler1.addTrip(trip1);
traveler1.addTrip(advTrip1);
traveler1.addTrip(culturalTrip1);

console.log(traveler1.displayPlannedTrips());

