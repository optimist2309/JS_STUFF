In JavaScript, the if-else statement is used to perform conditional execution of code.

Basic Syntax :-

if (condition) {
// Code to run if condition is true
} else {
// Code to run if condition is false
}

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

Equality operators(==, ===):- There are two type of equality operator.
1.== (Loose Equality)==>>
1.Compares values, but performs type conversion if needed.
2.Converts operands to the same type before comparing.

'5' == 5 // true (string converted to number)
null == undefined // true
0 == false // true

2. === (Strict Equality)
   1.Compares both value and type.
   2.No type conversion happens

'5' === 5 // false (different types)
0 === false // false (number vs boolean)
5 === 5 // true
