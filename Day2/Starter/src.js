let a = 10;
console.log("The value of a is: " + a);
let  b = 20;
console.log("The value of b is: " + b); 
let sum = a + b;
console.log("The sum of a and b is: " + sum);   

b = 25; // Reassigning b
console.log("The new value of b is: " + b);
a = 15; // Reassigning a
console.log("The new value of a is: " + a); 

sum = a + b; // Recalculating sum
console.log("The new sum of a and b is: " + sum);


const pi = 3.14;
console.log("The value of pi is: " + pi);

 //pi = 3.14159; // This will throw an error because pi is a constant
 
const c = 30;
console.log("The value of c is: " + c);

var d = 40;
console.log("The value of d is: " + d);

// var can be redeclared
var d = 50; 
console.log("The new value of d is: " + d);

// var can be reassigned    
d = 60;
console.log("The reassigned value of d is: " + d);  


// Block scope example 
{
    let blockVar = "I am block-scoped";
    const blockConst = "I am block-scoped too";
}
// console.log("Outside block, blockVar: " + typeof blockVar); // ReferenceError