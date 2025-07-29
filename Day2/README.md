Variable :- A variable is a container to store value.
In JS we can create varibles using let, const, var keywords.

1. var :- var is a keyword in JavaScript used to declare variables and it is Function-scoped and hoisted, allowing redeclaration but can lead to unexpected bugs.

var a = "Hello World";
var b = 10;
console.log(a);
console.log(b);

2. const :- const is a keyword in JavaScript used to declare variables and it is Block-scoped, immutable bindings that can't be reassigned, though objects can still be mutated.

const a = "Hello World";
const b = 10;
console.log(a);
console.log(b);

3. let keyword:- let is a keyword in JavaScript used to declare variables and it is Block-scoped and not hoisted to the top, suitable for mutable variables

let a = "Hello World";
let b = 10;
console.log(a);
console.log(b);

##########################################################
Scope example

let n = 10; // Global scope

function hello_world() {
let n = 20; // Shadows the global 'n' inside this function
console.log(n); // Output: 20
}

hello_world();
console.log(n); // Output: 10 (global 'n' remains unchanged)

################################################################

################################################################
Block Scope :-Variables declared with let or const inside a block (e.g., inside {}) are block-scoped, meaning they cannot be accessed outside the block. var, however, is not block-scoped and will leak outside the block.

{
let blockVar = "I am block-scoped";
const blockConst = "I am block-scoped too";
}
console.log(blockVar); // Error: not defined

##################################################################

When to Use var, let, or const. 1. Use const by default. 2. Use let only if you need to change the value later 3. Avoid var unless working in old codebases
