// 1
let numStr = 123;
numStr = numStr.toString();
console.log(numStr);
console.log(typeof(numStr));

// 2
let strNum = '456';
strNum = Number(strNum);
console.log(strNum);
console.log(typeof(strNum));

// 3
let strFlt = '78.9';
strFlt = parseFloat(strFlt);
console.log(strFlt);
console.log(typeof(strFlt));

// 4
const res = 5 + '3';
console.log(res);

// 5
let falseNum = 0;
let trueNum = 1;
falseNum = Boolean(falseNum);
trueNum = Boolean(trueNum);
console.log(falseNum, trueNum);

// 6
let twentyFour = '24';
twentyFour = +twentyFour;
console.log(twentyFour);

// 7
let bool = true;
bool = Number(bool);
let boolean = false;
boolean = Number(boolean);
console.log(bool, boolean);

// 8
let val = null;
val = Number(val) + 5;
console.log(val);