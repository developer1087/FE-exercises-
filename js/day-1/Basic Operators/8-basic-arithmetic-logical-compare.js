// 1
const num1 = 8;
const num2 = 15;
const sum = num1 + num2;
console.log(sum);
// 2
const a = 30;
const b = 12;
console.log(a - b);
// 3
const x = 7;
const y = 3;
console.log(x * y);
// 4
const dividend = 20;
const divisor = 4;
console.log(dividend/divisor);
console.log(dividend%divisor);
// 5
const number1 = 15;
const number2 = 25;
const number3 = 10;
const sumAll = number1 + number2 + number3;
console.log(sumAll/3);
// 6
//The Modulo is the remainder of a division. Example:
// if x=7, if we divide x by 3 we'll get 2 and the remainder of 1.
const divisionRes = x % 3;
console.log(divisionRes);

// 7
const userInput = 6;
const remainder = userInput % 2;
function evenOddDetector() {
  if (remainder == 0) {
    console.log("This is an even number.");
  } else {
    console.log("This is an odd number");
  }
}
evenOddDetector();
// 8
let counter = 0;
function countFours() {
   while (counter <= 20) {
    if (counter%4==0) {
      console.log(counter)
    } counter++;
    }
}
countFours();
// 9
const userNum = 1;
function checkNum() {
  if (userNum > 10 && userNum < 20) {
    console.log(`${userNum} is both larger than 10 and smaller than 20`);
  } else {
    console.log(`${userNum} is not between 10 and 20`)
  }
}
checkNum();
// 10
const userNumber = -4;
function checkNumber() {
  if (userNumber < -5 || userNumber > 10) {
    console.log(`${userNumber} is either smaller than -5 or it is larger than 10`);
  } else {
    console.log(`${userNumber} is not smaller than -5, neither it is larger than 10`)
  }
}
checkNumber();
// 11
const boolVal = true;

function opposite() {
  console.log(`${!boolVal}`)
}
opposite();
// 12
const usersNumber = 7;
function checksNumber() {
  if ((usersNumber > 5 && usersNumber < 10)  || (usersNumber > 20 && usersNumber < 30)) {
    console.log(`${usersNumber} is either larger than 5 and smaller than 10, or it is larger than 20 and smaller than 30`);
  } else {
    console.log(`${usersNumber} is not between 5 and 10, neither it is between 20 and 30`)
  }
}
checksNumber();
