// 1

// console.log(a);
// var a = 5; // undefined

// console.log(b);
// let b = 5; // err cannot access before initialization

// console.log(c);
// const c = 5; // err cannot access before initialization

// 2

// console.log(myFuncDecl()); // What will be the output? a. The function works
// function myFuncDecl() {
//  return "Hello from function declaration!";
// }
// console.log(myFuncExpr()); // What will be the output? a. The program does not recognize the function
// var myFuncExpr = function() {
//  return "Hello from function expression!";
// }

// 3

const x = "global";
function outerFunc() {
 let y = "outer";
 function innerFunc() {
 var z = "inner";
 console.log(x); // What will be the output? - "global"
 console.log(y); // What will be the output? - "outer"
 }
 innerFunc();
 console.log(z); // What will be the output? - z is not defined
}
outerFunc();

// 4

const a = 1;
function b() {
 const a = 10;
 c();
 return;
 function c() {
 console.log(a); // What will be the output? - The output will be 10, since it's within the function
 }
}
b();
console.log(a); // What will be the output of a? - It will take the global a, 1
foo();
function foo() {
 console.log(x); // What will be the output? - I'll be undefined, because of var
 var x = "Hello, world!";
 bar();
 function bar() {
 console.log(x); // What will be the output? - I'll get an error, because of let within the function
 let x = "Hello, scope!";
 }
}

// 