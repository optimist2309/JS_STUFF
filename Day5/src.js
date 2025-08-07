/*
Javascript Functions :- Functions are reusable blocks of code that perform a specific task.</h3>
They can take inputs (parameters) and return outputs (results).     
Example of a Function
function greet(name) {
    return "Hello, " + name + "!";
}
Calling the Function :-
const hello = greet("Harish");
    console.log(hello);
*/

// Declaration of a Function
// Functions are reusable blocks of code that perform a specific task.  

function greet(name) {
    return "Hello, " + name + "!";
}
// Calling the Function

const hello = greet("Harish");
    console.log(hello);


// Function with Parameters
function add(a, b) {
    return a + b;
}
// Calling the Function with arguments
const sum = add(5, 10);
console.log("Sum:", sum);

// Function with Default Parameters
function multiply(a, b = 1) {
    return a * b;
}   
// Calling the Function with one argument
const product = multiply(5);
console.log("Product:", product);

// Function with Return Value
function square(x) {
    return x * x;
}   

// Calling the Function and storing the result
const result = square(4);   
console.log("Square:", result);

// Function with Multiple Parameters
function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}       

// Calling the Function with two arguments
const quotient = divide(10, 2);
console.log("Quotient:", quotient);

// Function expression
const subtract = function(a, b) {
    return a - b;
};  

// Calling the Function expression
const difference = subtract(10, 5); 
console.log("Difference:", difference);

// Arrow Function
const power = (base, exponent) => {
    return base ** exponent;
};
// Calling the Arrow Function
const resultPower = power(2, 3);
console.log("Power:", resultPower);

// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("This is an IIFE");
})();   



