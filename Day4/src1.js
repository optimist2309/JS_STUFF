let massMark = 78; // kg
let heightMark = 1.69; // m 
let massJohn = 92; // kg
let heightJohn = 1.95; // m


let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

console.log("Mark's BMI:", BMIMark);
console.log("John's BMI:", BMIJohn);

if (BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than John's! ");
} else {
    console.log("John's BMI is higher than Mark's! ");
}

massMark = 95; // kg
 heightMark = 1.88; // m 
 massJohn = 85; // kg
 heightJohn = 1.76; // m


 BMIMark = massMark / (heightMark * heightMark);
 BMIJohn = massJohn / (heightJohn * heightJohn);

console.log("Mark's BMI:", BMIMark);
console.log("John's BMI:", BMIJohn);

if (BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than John's! ");
} else {
    console.log("John's BMI is higher than Mark's!");
}
