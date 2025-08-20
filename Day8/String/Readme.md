<h3>JavaScript String:-</h3> A JavaScript String is a sequence of characters, typically used to represent text.
<br>
<ul> In JavaScript, there is no character type (Similar to Python and different from C, C++ and Java), so a single character string is used when we need a character. </ul>
<ul> Like Java and Python, strings in JavaScript are immutable. </ul>

<br>
<h3> Create using Literals - Recommended :-</h3>
We can either use a single quote or a double quote to create a string. We can use either of the two, but it is recommended to be consistent with your choice throughout your code.

// Using Single Quote
let s1 = 'abcd';
console.log(s1);

// Using Double Quote
let s2 = "abcd";
console.log(s2);

<br>
<h3> Create using Constructor :-</h3> The new String() constructor creates a string object instead of a primitive string. It is generally not recommended because it can cause unexpected behavior in comparisons.

// New keyword example.
let s = new String('abcd');
console.log(s);

You can create an empty string by assigning either single or double quotes with no characters in between.

let s1 = '';
let s2 = "";

console.log(s1);
console.log(s2);

Since the strings are empty, console.log will print two blank lines.

<h3> Basic Operations on JavaScript Strings :-</h3> 
Finding the length of a String :-You can find the length of a string using the length property.

// Example
let s = 'JavaScript';
let len = s.length;
​console.log("String Length: " + len); ==> 10

String Concatenation :- You can combine two or more strings using + Operator.

// Example
let s1 = 'Java';
let s2 = 'Script';
let res = s1 + s2;

console.log("Concatenated String: " + res); ==> JavaScript

Convert String to Uppercase and Lowercase :- Convert a string to uppercase and lowercase using toUpperCase() and toLowerCase() methods.

// Example
let s = 'JavaScript';
let uCase = s.toUpperCase();
let lCase = s.toLowerCase();

console.log(uCase);==>> JAVASCRIPT
console.log(lCase);===>> javascript

Find Substring of a String:-
We can extract a portion of a string using the substring() method.

let s1 = 'JavaScript Tutorial';
let s2 = s1.substring(0, 10);
​
console.log(s2); ==>>

Trimming Whitespace from String :-
Remove leading and trailing whitespaces using trim() method.
let s1 = ' Learn JavaScript ';
let s2 = s1.trim();
​
console.log(s2);
