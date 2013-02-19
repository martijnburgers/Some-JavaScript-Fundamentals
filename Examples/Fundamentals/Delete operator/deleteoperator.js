// Example: The delete Operator
//
// The delete operator is a unary operator which attempts to delete the object property 
// or array element specified as its operand. 
// 
// delete expects it's operand to be a property reference. If it's not the operator takes
// no action and returns TRUE. If it is, it attempts to delete the specified property and
// when it succeeds it returns true as well, otherwise it returns false.
// 
// Functions defined with the function statement cannot be deleted.
//
// Deleting a array element leaves a "hole" in the array and does not change the array's 
// length. 

function sayHello() {
	alert("Hello");
}

var person = { name: "Martijn Burgers", age: 28, getName: function() { return this.name; } };

console.log("delete person.name: " + delete person.name);
console.log("delete person.getName: " + delete person.getName);
console.log("delete person.someNonExistentProperty: " + delete person.someNonExistentProperty);
console.log("delete person: " + delete person);
console.log("delete sayHello: " + delete sayHello);
console.log("delete Math.PI: " + delete Math.PI); //returns false.

// If the object inherits a property from a prototype, and doesn't have the property itself,
// the property can't be deleted via the referencing object. You can, however, delete it 
// directly on the prototype of the object.

// Constructor function
function Person(){}
// Augment prototype
Person.prototype.age = 28;
// Create new Person
var somePerson = new Person();

console.log("delete somePerson.age: " + delete somePerson.age); // it returns true BUT does nothing because the age property is not defined in somePerson. It is on the prototype.
console.log("delete Person.prototype.age: " + delete Person.prototype.age); // returns true and deletes the property.

//Deleting array items
var numbers  = [4, 9, 10, 20, 40];

console.log("delete numbers[10]: " + delete numbers[10]); // delete non-existing index, returns true as well.
console.log("numbers.length: " + numbers.length);
console.log("1 in numbers: " + (1 in numbers));
console.log("delete numbers[1]: " + delete numbers[1]);
console.log("1 in numbers: " + (1 in numbers));
console.log("numbers.length: " + numbers.length);