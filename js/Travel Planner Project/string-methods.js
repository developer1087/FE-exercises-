// 1. City Name Capitalization
const input1 = "new york";
const output1 = input1.split(" ");
for (let i = 0; i < output1.length; i++) {
      output1[i] = output1[i][0].toUpperCase() + output1[i].slice(1);
}

console.log(output1.join(' '));

// // 2. Flight Search
const input2 = ["New York", "Tokyo", "Paris", "London"];
const query = "yo";
const lowerCased = input2.map(item => item.toLowerCase());
let res = [];
for (let i = 0; i < lowerCased.length; i++) {
  if (lowerCased[i].includes(query)) {
    res.push(lowerCased[i])
  }
}
console.log(res);

// // 3. Flight Code Format
const input3 = "JFK-123";
let inputArray = input3.split("-");
inputArray = inputArray[1] + "-" + inputArray[0];
console.log(inputArray);

// // 4. Flight Duration
const input4 = "3h 45min";
const arrayInput4 = input4.split(" ");
let theHour = '';
let theMinutes = '';
for (let i = 0; i < arrayInput4.length; i++) {
  if (arrayInput4[i].includes("h")) {
    theHour = arrayInput4[i].slice(0, 1);
  } else {
    theMinutes = arrayInput4[i].slice(0, 2);
  }
}

console.log(`${theHour} hours and ${theMinutes} minutes`);

// // 5. Travel Agency Acronym
const input5 = "Global Travel Agency";
const arrayInput5 = input5.split(" ")
let acronym = [];
for (let i = 0; i < arrayInput5.length; i++) {
  acronym.push(arrayInput5[i][0]);
}
console.log(acronym.join(''));

// // 6. Location Slug
const input6 = "San Francisco";
const arrayInput6 = input6.split(' ')
const lcInput6 = arrayInput6.map(item => item.toLowerCase());

console.log(lcInput6.join('-'));

// // 7. Itinerary Trimming
const input7 = "Visit the Golden Gate Bridge, take a walk in the Golden Gate Park, see Alcatraz Island";
const maxChars = 50;
let maxSpaceIndex = 0;
for (let i = 0; i < input7.length; i++) {
  if (input7[i] === ' ' && i <= 50) {
    if (maxSpaceIndex < i) {
      maxSpaceIndex = i;
    }
  }
}
console.log(maxSpaceIndex);
const arrayInput7 = input7.split('');
let newArray = [];
for (let i = 0; i < maxSpaceIndex; i++) {
  newArray.push(arrayInput7[i]);
}
console.log(newArray.join(''));

// // 8. Travel Wishlist
const input8 = "Paris, Tokyo, New York"
const arrayInput8 = input8.split(',');
console.log(arrayInput8);