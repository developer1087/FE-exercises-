// 1
const isSunny = true;
const isWeekend = false;
console.log(isSunny, isWeekend);

//2
const age = 19;
const license = false;
if (age >= 18 && license === true) {
  console.log("You are over 18 and have a license.")
} else if (age >= 18 && license !== true){
  console.log("You are over 18 but don't have a license.")
} else if (age < 18 && license === true){
  console.log("You are under 18 but have a license.")
} else {
  console.log("You're neither 18 nor you have a license.")
}

// 3
const knowsJavaScript = false;
const knowsPython = true;
if (knowsJavaScript || knowsPython) {
  console.log("You know either JS or you know Python")
}

// 4
const isRaining = true;
console.log(!isRaining);

// 5
const likesMusic = true;
const playsGuitar = false;
const hasTime = false;
if (likesMusic && !playsGuitar) {
  if (hasTime) {
    console.log("You have time, learn to play!");
  } else {
    console.log("Make time.")
  }
}

// 6
const personAge = 24;
if (personAge > 18) {
  console.log("You are older than 18");
}

// 7
const currentTemperature = 35;
let rel = '';
let temp = 0;
if (currentTemperature < 20 ) {
  rel = "lower";
  temp = 20;
} else if (currentTemperature > 30) {
  rel = "greater"
  temp = 30;
}
console.log(`The temperature is ${rel} than ${temp}`)

// 8
const firstNum = 10;
const secondNum = '10';
if (firstNum == secondNum) {
  console.log("Equals");
} else {
  console.log("Not equals");
};

if (firstNum === secondNum) {
  console.log("Equals");
} else {
  console.log("Not equals");
};

// 9
const budget = 750;
const expense = 800;
let budgetCheck = '';
if (expense <= budget) {
  budgetCheck = 'within'
} else {
  budgetCheck = 'not within'
}
console.log(`Expenses are ${budgetCheck} budget.`);

// 10
const person1Height = 167;
const person2Height = 170;
console.log(person1Height < person2Height || person1Height === person2Height);