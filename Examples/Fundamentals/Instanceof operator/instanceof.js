// Example: the instanceof operator
//
// The instanceof operator tests whether an object has in its prototype chain 
// the prototype property of a constructor. So in order to understand how the instanceof
// operator works, you must understand the prototype chain first.
//
// So when you want to evaluate a instanceof B, JavaScript checks B.prototype and then looks
// for that value in the prototype chain of a.
//
// It expects it left-side operand to be an object and right-side operand to be a constructor.
//
// If the left-side operand is not a object, instanceof returns false. If the right-side operand 
// is not a function, it throws a TypeError.

// constructor
function B() {}

// create new object with the B constructor function.
var a = new B();

// now when we do a instanceof B, Javascript checks if B.prototype (where B is the constructor)
// is part of the prototype chain of the object a. In case of the example this is true.

console.log("a instanceof B: " + (a instanceof B));

var d = new Date();

console.log("d instanceof Date: " + (d instanceof Date));
console.log("d instanceof Object: " + (d instanceof Object));
console.log("d instanceof Function: " + (d instanceof Function)); //False

console.log("1 instanceof Object: " + (1 instanceof Object));
console.log("1 instanceof Object: " + ("1" instanceof Object));

console.log("d instanceof Object: " + (d instanceof 1)); // Type Error