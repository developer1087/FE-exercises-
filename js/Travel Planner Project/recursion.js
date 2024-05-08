// 1

function sumOfNums(n) {
  
  if (n > 0) {
    return n + sumOfNums(n - 1);
  } else {
    return n
  }
}

console.log(sumOfNums(5));

// 2

function reverse(str) {
  if (str === "") {
    return "";
  } else {
    return reverse(str.substring(1)) + str.charAt(0);
  }
}

console.log(reverse("Hello"));

// 3

function countDown(n) {
  if (n > 0) {
    n--;
    console.log(n);
    return countDown(n);
  }
}
console.log(countDown(5));

// 4



function count(arr) {
  if (arr.length > 0) {
    let num = arr.shift()
    console.log(num);
    return count(arr)
  }
}

console.log(count([1,2,3,4,5,6]));