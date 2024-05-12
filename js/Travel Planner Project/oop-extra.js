// 1 Abstraction: The Destination Class

class Destination {
  #name;
  #country;
  #description;
  #visitorRating;
  constructor(name, country, description) {
    this.#name = name;
    this.#country = country;
    if (description) {
      this.#description = description;
    }
    this.#visitorRating = [];
  }
  get name() {
    return this.#name;
  }
  get country() {
    return this.#country;
  }
  get description() {
    return this.#description;
  }
  set name(name) {
    if (typeof name === 'string' && name.length > 1) {
      this.#name = name;
    } else {
      console.log("Error: Invalid value.");
    }
  }
  set country(country) {
    if (typeof country === 'string' && country.length > 1) {
      this.#country = country;
    } else {
      console.log("Error: Invalid value.");
    }
  }
  set description(description) {
    if (description.length <= 500) {
      this.#description = description;
    }
  }
  displayDetails() {
    const name = this.#name;
    const country = this.#country;
    const description = this.#description;
    return (`${name}, ${country}, ${description}`);
  }
  addRating(rating) {
    if (rating <= 10) {
      this.#visitorRating.push(rating);
    }
  }
  getAverageRating() {
    let sum = 0;
    for (const rating of this.#visitorRating) {
      sum += rating;
    }
    const avg = sum / this.#visitorRating.length;
    return avg;
  }
  typeOfDestination() {
    return "General Destination";
  }
}

const destination1 = new Destination('Paris', 'France', 'Most romantic');

destination1.name = 'Moscow';
// console.log(destination1.name);
for (const key in destination1) {
  console.log(key);
}
// console.log(destination1.description);

console.log(destination1.displayDetails());

destination1.addRating(9);
destination1.addRating(7);
console.log(destination1.getAverageRating());

// 2 Inheritance: Specializing Destination

class CulturalDestination extends Destination {
  #culturalSignificance;
  constructor(name, country, description, culturalSignificance) {
    super(name, country, description);
    this.#culturalSignificance = culturalSignificance;
  }
  get culturalSignificance() {
    if (this.#culturalSignificance !== '') {
      return this.#culturalSignificance;
    } else {
      console.log('Error: Invalid value.');
    }
  }
  set culturalSignificance(str) {
    if (typeof str === 'string' && str !== '') {
      this.#culturalSignificance = str;
    }
  }
  displayDetails() {
    const name = this.name;
    const country = this.country;
    const description = this.description;
    const culturalSignificance = this.culturalSignificance;
    return (`${name}, ${country}, ${description}, ${culturalSignificance}`);
  }
  typeOfDestination() {
    return "Cultural Destination";
  }
}

const culturalDestination1 = new CulturalDestination('TLV', 'Israel', 'Non stop city', 'Business capital of Israel');

// console.log(culturalDestination1.displayDetails());

class AdventureDestination extends Destination {
  #adventureType;
  constructor(name, country, description, adventureType) {
    super(name, country, description);
    this.#adventureType = adventureType;
  }
  get adventureType() {
    if (this.#adventureType !== '') {
      return this.#adventureType;
    } else {
      console.log('Error: Invalid value.');
    }
  }
  set adventureType(str) {
    if (typeof str === 'string' && str !== '') {
      this.#adventureType = str;
    }
  }
  displayDetails() {
    const name = this.name;
    const country = this.country;
    const description = this.description;
    const adventureType = this.adventureType;
    return (`${name}, ${country}, ${description}, ${adventureType}`);
  }
  typeOfDestination() {
    return "Adventure Destination";
  }
}

const adventureDestination1 = new AdventureDestination('Dead sea caves', 'Israel', 'Cave exploration and rock climbing', 'Exploration');

console.log(adventureDestination1.displayDetails());


// Bonus: TravelAgency Class

class TravelAgency {
  destinations;
  constructor() {
    this.destinations = [];
  }
  addDestination(destination) {
    if (destination instanceof Destination) {
      this.destinations.push(destination);
    }
  }
  findDestinationByName(name) {
    for (const destination of this.destinations) {
      if (destination.name === name) {
        return destination;
      }
    }
  }
  overallAverageRating() {
    let sumOfRatings = 0;
    for (const destination of this.destinations) {
      sumOfRatings += destination.getAverageRating();
      return sumOfRatings;
    }
  }
}

const travelAgency1 = new TravelAgency();

travelAgency1.addDestination(destination1)
travelAgency1.addDestination(culturalDestination1)

console.log(travelAgency1.destinations);


console.log(travelAgency1.findDestinationByName('Dead sea caves')); 

console.log(travelAgency1.overallAverageRating());