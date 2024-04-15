// 1
const currDate = new Date();
console.log(currDate);
// 2
const currYear = new Date().getFullYear();
console.log(currYear);
// 3
const currMonth = new Date().getMonth();
console.log(currMonth);
// 4
const currDayOfMonth = new Date().getDate();
console.log(currDayOfMonth);
// 5
const currDayOfWeek = new Date().getDay();
console.log(currDayOfWeek);
// 6
const hours = new Date().getHours();
const min = new Date().getMinutes();
const sec = new Date().getSeconds();
console.log(`Hours: ${hours}, Minutes: ${min}, Seconds: ${sec}`);
// 7
const daysInMonth = (year, month) => new Date(year, month, 0).getDate();
console.log(daysInMonth(2024, 4));
// 8
const dateObj = new Date();
const month   = dateObj.getUTCMonth() + 1;
const day     = dateObj.getUTCDate() + 1;
const year    = dateObj.getUTCFullYear();

const tomorrowsDate = year + "-" + month + "-" + day;

console.log(tomorrowsDate);

// 9
const totalMinutes = 93;
const hour = Math.floor(totalMinutes/60);
const minutes = totalMinutes%60;


console.log(`${totalMinutes} minutes is equivalent to: ${hour} hour.s and ${minutes} minutes.`);
