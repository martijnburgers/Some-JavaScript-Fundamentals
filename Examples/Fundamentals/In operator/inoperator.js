// Example: The in Operator
//
// The in operator is a binary operator which expects a left-side operand that is or can be 
// converted to a string. It expects the right-side operand to be an object. The operator
// evaluates to true if the left-side value is the name of a property of the right-side object.
//
// In case of arrays the left-side operand may also be representing a array index.
//

var person = { name: "Martijn Burgers", age: 28 };

console.log("name" in person);
console.log("age" in person);
console.log("toString" in person);
console.log("Name" in person);
console.log({} in person); //JavaScript will call toString on the empty object. This will result in [object Object] which is not a property on person.

var numbers  = [6,10, 15, 20];

console.log("0" in numbers);
console.log("4" in numbers);
console.log(0 in numbers);
console.log(4 in numbers);

//script execution stops at the first error.
console.log({ toString: function() { return {}; }} in person); //let's overwrite toString and see what happens.
// console.log("toString" in "someString");