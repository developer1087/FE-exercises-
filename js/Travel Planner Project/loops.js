const activities1 = [
  { name: "Activity 1", duration: 2 },
  { name: "Activity 2", duration: 3 },
  { name: "Activity 3", duration: 1 },
];

// 1

let sum = 0;
for (let i=0; i<activities1.length; i++) {
  let activity = activities1[i];
  sum += activity.duration;
}
console.log(sum);

// 2

let maxDur = 0;
for (let i=0; i<activities1.length; i++) {
  let activity = activities1[i];
  if (activity.duration > maxDur)
  maxDur = activity.duration;
}

console.log(maxDur);

// 3
const activityName = ["Sightseeing", "Hiking", "Sightseeing", "Dining", "Hiking", "Sightseeing", "Hiking", "Hiking"];

activityName.sort((a, b) => a - b); 
//console.log(activityName) 
let count = 1, 
    max = 0, 
    el; 
  
for (let i = 1; i < activityName.length; ++i) { 
    if (activityName[i] === activityName[i - 1]) { 
        count++; 
    } else { 
        count = 1; 
    } 
    if (count > max) { 
        max = count; 
        el = activityName[i]; 
    } 
} 
console.log("The most frequent element is: " + el);

// 4 
const activityDuration = [2, 3, 1];
let minDur = activityDuration[0]
for (let i = 0; i < activityDuration.length; ++i) {
  if (minDur > activityDuration[i]) {
    minDur = activityDuration[i];
  }
}
console.log(minDur);

// 5
const transportationTypes = ["car", "train", "car", "flight"];
transportationTypes.sort();
let typeList = [];
let countList = [];
let counter = 0;
for (let i = 0; i < transportationTypes.length; ++i) {
  if (i!==0 && transportationTypes[i] !== transportationTypes[i - 1]) {
    typeList.push(transportationTypes[i]);
    counter = 1;
    countList.push(counter);
  } else {
    if (transportationTypes[i] === transportationTypes[i + 1]) {
    counter++;
  } else {
    typeList.push(transportationTypes[i]);
    counter++;
    countList.push(counter);
  }
}
}
for (let i = 0; i < typeList.length; i++) {
  console.log(typeList[i], countList[i]);
}

// 6
const travelExpenses = [50, 100, 75, 125, 200];
let sumOfExpenses = 0;
for (let i = 0; i < travelExpenses.length; i++) {
  sumOfExpenses = sumOfExpenses + travelExpenses[i];
}
console.log(sumOfExpenses);

// 7
let maxExpense = travelExpenses[0];
for (let i = 0; i < travelExpenses.length; i++) {
  if (travelExpenses[i] > maxExpense) {
    maxExpense = travelExpenses[i];
  }
}
console.log(maxExpense);

// 8
let expenseCounter = 0;
for (let i = 0; i < travelExpenses.length; i++) {
  if (travelExpenses[i] < 150) {
    expenseCounter++;
  }
}
console.log(expenseCounter);

// 9
const categoryExpenses = [[100, 200], [150, 175], [120, 250]];
let sumOfCategory = [];
// for (let i = 0; i < categoryExpenses.length; i++) {
//   sumOfCategory.push(categoryExpenses[i][0] + categoryExpenses[i][1]);
// }
for (let i = 0; i < categoryExpenses.length; i++) {
  for (let j = 0; j < categoryExpenses[i].length -1; j++) {
    sumOfCategory.push(categoryExpenses[i][j] + categoryExpenses[i][j+1])
  }
}
console.log(sumOfCategory);

// 10
let shortestDistances = [];
const routeDistances = [[120, 300], [150, 175], [100, 250]];
for (let i = 0; i < routeDistances.length; i++) {
  for (let j = 0; j < [i].length; j++) {
    if (routeDistances[i][j] > routeDistances[i][j+1]) {
      shortestDistances.push(routeDistances[i][j])
    } else {
      shortestDistances.push(routeDistances[i][j+1])
    }
  }
}
console.log(shortestDistances);

// 11 
let activityDurationSums = [];
const activityDurationMatrix = [[2, 3], [1, 4], [3, 2]];
for (let i = 0; i < activityDurationMatrix.length; i++) {
  for (let j = 0; j < [i].length; j++) {
    activityDurationSums.push((activityDurationMatrix[i][j] + activityDurationMatrix[i][j+1]) / activityDurationMatrix[i].length)
  }
}
console.log(activityDurationSums);

// 12
const destinationRatingMatrix = [[4.5, 4.7], [4.8, 4.6], [4.9, 5.0]];
let highRatings = [];
for (let i = 0; i < destinationRatingMatrix.length; i++) {
  for (let j = 0; j < [i].length; j++) {
    if (destinationRatingMatrix[i][j] > destinationRatingMatrix[i][j+1]) {
      highRatings.push(destinationRatingMatrix[i][j])
    } else {
      highRatings.push(destinationRatingMatrix[i][j+1])
    }
  }
}
console.log(highRatings);



var twoSum = function(nums, target) {
  let output = [];
  for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
          if (i !== j && nums[i] + nums[j] === target) {
              output.push(i, j);
              return output;
          }
      }
  }
};

console.log(twoSum([3, 2, 4], 6));

var addTwoNumbers = function(l1, l2) {
  l1 = l1.reverse();
  l1 = l1.join('');
  l2 = l2.reverse();
  l2 = l2.join('');
  l1 = l1.toString();
  l2 = l2.toString();
  l1 = Number.parseInt(l1);
  l2 = Number.parseInt(l2);
  let newNum = l1 + l2;
  let newL = [];
  newL = newNum.split(',');
  return newL;
};

console.log(addTwoNumbers([1,2,3], [2,3,4])); 