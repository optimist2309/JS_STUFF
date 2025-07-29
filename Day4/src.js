/*

In JavaScript, the if-else statement is used to perform conditional execution of code.

Basic Syntax :-

if (condition) {
// Code to run if condition is true
} else {
// Code to run if condition is false
}


*/

let age = 20;

if (age >= 18) {
console.log("You are an adult.");
} else {
console.log("You are a minor.");
}

let marks = 75;

if (marks >= 90) {
console.log("Grade: A");
} else if (marks >= 75) {
console.log("Grade: B");
} else if (marks >= 50) {
console.log("Grade: C");
} else {
console.log("Grade: F");
}

let num = 10;

if (num > 0) {
console.log("Positive number");
} else if (num < 0) {
console.log("Negative number");
} else {
console.log("Zero");
}

// Type conversion example
// Converting a string to a number.
let strNum = "123"; 
let convertedNum = Number(strNum);
console.log(strNum,convertedNum); // Output: "123" 123

// String to number conversion.
let birthYear = "2000";
let convertedbirthYear = Number(birthYear);
console.log(birthYear, convertedbirthYear); // Output: "2000" 2000



