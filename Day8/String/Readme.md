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
