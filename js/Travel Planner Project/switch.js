// 1 Travel day activity
const dayOfWeek = new Date().getDay() + 1;

switch (dayOfWeek) {
  case 1:
    activity="hiking";
    break;
  case 2:
    activity="luver";
    break;
  case 3:
    activity="hotel";
    break;
  case 4:
    activity="pool";
    break;
  case 5:
    activity="poker";
    break;
  case 6:
    activity="train";
    break;
  case 7:
    activity="return";
}
console.log(activity);

// 2 Travel theme color
const themeColor = "sea";
switch (themeColor) {
  case "sea":
    color="sea";
    break;
  case "dark":
    color="dark";
    break;
  case "light":
    color="light";
    break;
  default:
    color="unsupported";
}

// 3 Travel notification status
const notificationStatus = "read";
switch (notificationStatus) {
  case "new":
    notification="new";
    break;
  case "unread":
    notification="unread";
    break;
  case "unopened":
    notification="unopened";
    break;
  default:
    notification="read";
}
console.log(notification==="read"?"You've read all massages" : `You have an ${notification} massage.`);

// 4 Travel package rating
const packageRating = "luxury";
switch (packageRating) {
  case "standard":
    rating = "standard";
    break;
  case "basic":
    rating = "basic";
    break;
  case "premium":
    rating = "premium";
    break;
  case "luxury":
    rating = "luxury";
}
console.log(`Your package is a ${rating} package`);

// 5 Meal selection
const mealPlan = "lunch";
switch (mealPlan) {
  case "breakfast":
    meal = "breakfast";
  case "lunch":
    meal = "lunch";
  case "dinner":
    meal = "dinner";
}
console.log(`You chose a ${meal} for a meal.`);

// 6 Satisfaction score
const satisfactionScore = 100;
switch (true) {
  case satisfactionScore >= 90:
    score = "highly satisfied";
    break;
  case satisfactionScore >= 70:
    score = "satisfied";
    break;
  case satisfactionScore >= 50:
    score = "neutral";
    break;
  default:
    score = "dissatisfied";
}
console.log(`You rated your experience as ${score}`);

// 7 Season planning
const travelMonth = 1;
switch (true) {
  case travelMonth >= 10:
    season = "winter";
    break;
  case travelMonth >= 7:
    season = "fall";
    break;
  case travelMonth >= 4:
    season = "summer";
    break;
  default:
    season = "spring";
}
console.log(`You chosen a trip in the ${season}`);

//8  Season advisor
switch (true) {
  case travelMonth >= 10:
    seasonAdvisor = "winter advisor";
    break;
  case travelMonth >= 7:
    seasonAdvisor = "fall advisor";
    break;
  case travelMonth >= 4:
    seasonAdvisor = "summer advisor";
    break;
  default:
    seasonAdvisor = "spring advisor";
}
console.log(`You will be assigned a ${seasonAdvisor}`);

