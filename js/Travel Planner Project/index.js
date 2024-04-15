// 1. Budget Check
const travelBudget = 900;
if (travelBudget > 1000) {
  console.log("Luxury travel options available");
} else {
  console.log("Looking for budget travel");
};

// 2. Destination Temp Check
const destinationTemp = 24;
if (destinationTemp >= 15 && destinationTemp <= 27) {
  console.log("Ideal weather for the trip");
} else {
  console.log("Consider another destination or time");
}

// 3. Flight and Hotel Booking
const flightBooked = true;
const hotelBooked = true;
if (flightBooked) {
  if (hotelBooked) {
    console.log("Your travel plan is set");
  } else {
    console.log("You need to book a hotel");
  } 
} else {
  console.log("You need to book a flight");
}

// 4. Comparing package prices
const chosenPackagePrice = 800;
const alternativePackagePrice = 950;
if (chosenPackagePrice === alternativePackagePrice) {
  console.log("You've chosen the best priced package");
} else if (chosenPackagePrice > alternativePackagePrice) {
  console.log("Consider switching for a better price");
}

// 5. Check Traveler Age
const travelerAge = 37;
if (travelerAge >= 65) {
  console.log("Eligible for senior citizen discounts.");
} else {
  if (travelerAge <= 18) {
    console.log("Eligible for student discounts.");
  } else {
    console.log("Regular pricing applies.");
  }
}

// 6. Satisfaction Score
const satisfactionScore = 85;
console.log(satisfactionScore>80? "Highly satisfied traveler" : "Needs improvement");

// 7. Group size check
const groupSize = 5;
console.log((groupSize%2===0)? "Even number of travelers" : "Odd number of travelers");

// 8. Age group classification
let ageGroup = '';
(travelerAge <= 12? ageGroup = 'child' : (travelerAge > 12 && travelerAge < 19 )? ageGroup='teen' : ageGroup='adult')
console.log(ageGroup);

// 9. Experience level
const experienceLevel = 6;
console.log(experienceLevel > 5? "Experienced traveler" : "New traveler");

// 10. Trip Duration
const tripDuration = 10;
let tripDurationCategory = '';
if (tripDuration < 3) {
  tripDurationCategory = 'Weekend getaway';
} else if (tripDuration >= 3 && tripDuration <= 14) {
  tripDurationCategory = 'Standard vacation';
} else {
  tripDurationCategory = 'Extended tour';
}
console.log(tripDurationCategory);

// 11 Adventure Activities Age Validation
const activityAgeRequirement = 18;
if (travelerAge >= activityAgeRequirement) {
  console.log("Adventure activities permitted.");
} else {
  console.log("Not age permitted.");
}

// 12 Special offers for Weekends
const dayOfTravel = 'Sunday';
if (dayOfTravel === 'Sunday' || dayOfTravel === 'Saturday') {
  console.log("Special weekend offer available!");
} else {
  console.log("Regular pricing");
}

// 13 Check destination opening year
const destinationOpeningYear = 2005;
if (destinationOpeningYear >= 2001) {
  console.log("21st century destination.");
} else {
  console.log("20th century destination.");
}

// 14 Destination type and rating
const destinationType = "adventure";
const destinationRating = 8;
if (destinationType === "adventure") {
  if (destinationRating >= 8) {
    console.log("Must visit!");
  } else {
    console.log("Low rating.");
  }
} else {
  console.log("Check rating before booking");
}

// 15 Evaluate travel package price
const packagePrice = 800;
if (packagePrice <= 1000) {
  console.log("Discounted package");
} else {
  console.log("Regular package price");
}

// 16 Age activity restriction
const isAdultActivity = true;
if (isAdultActivity) {
  if (travelerAge >= 18) {
    console.log("Allowed to participate.");
  } else {
    console.log("Not allowed.");
  } 
} else { 
  console.log("Not an adult activity");
}

// 17 Hotspot
const destinationName = "The Famous house of Avi";
if (destinationName.toLocaleLowerCase().includes("famous") || destinationName.includes("top destination")) {
  console.log("This place is a Hotspot");
} else {
  console.log("This destination is not a Hotspot.");
}