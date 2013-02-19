// Example: Creating Objects
//
// There are various ways for creating objects in JavaScript.
//
// Creating an object through a object literal. This new object will inherit
// all the properties from Object.prototype.
var somePerson = {
	name: "Martijn Burgers",
	age: 28,	
};

// Creating an object through a constructor function.
// Every function can become a constructor function using the new keyword.
function Person(name, age) {
 this.name = name;
 this.age = age;
}

var p = new Person("Martijn", 28);

// Object.create (ECMAScript 5) creates a new object with the specified prototype 
// object and properties. If you don't understand prototypes learn them first before
// you use this method!
//
// === method signature ===
// Object.create(proto [, propertyDescriptors ])

// create an empty object without a prototype
var o = Object.create(null);

// create an empty object which prototype is an object with the properties x and y. 
var o1 = Object.create({x:1, y:2});

// create an object where the prototype is Object.prototype and the object has the 
// properties name and age. 
//
// The object created is exactly the same as somePerson (see above).
var o2 = Object.create(Object.prototype,
					   {
					   	name: { value: "Martijn Burgers" }, 
					    age:  { value: 28 }
					   });

// Now some more advanced usages of Object.create.

// Creating an readonly property

var config = {
				name: { writable: false, value: "Martijn Burgers" }, //the name never changes.
				age:  { writable: true, value: 28 } //age is subject to change.
			 };

var o3 = Object.create(Object.prototype, config);

o3.name = "Dick Burgers"; //this doesn't change the property because this is not allowed.
o3.age = 29; //this changes age to 29.

// before we go further I want to show you howto enumerate through the properties
// of variable o3.

for (var key in o3) {
	console.log(key);
}

// Hmmm this doesn't show anything in the console. This is because we used 
// Object.create with a property configuration. In this configuration we didn't 
// specify all the available attributes. Next to writable we also have the 
// enumerable and configurable attributes which both defaults to false when not 
// specified. Because enumerable is false we don't see anything in the console. 
// Let's change this.

var config2 = {
				name: { writable: false, enumerable:true, value: "Martijn Burgers" }, 
				age:  { writable: true, enumerable:true, value: 28 } 
			 };

var o4 = Object.create(Object.prototype, config2);

// before we go further I want to show you howto enumerate through the properties
// of variable o4.

for (var key in o4) {
	console.log(key);
}

// Also be sure to checkout the example property attributes.

// Ok the last example creates an object which contains a property getter and setter.
// This kind of properties we call accessor properties. Accessor properties don't 
// have the writable attribute. If a property has a getter and setter it's a 
// read/write property. If it has only a getter it's a read only propely, etc.

var someOtherPerson = {
	firstName: "Martijn",
	lastName: "Burgers",
	age:28,
	get fullName() {
        return this.firstName + " " + this.lastName;
    },
    set fullName(name) {
        var names = name.split(" ");
        this.firstName = names[0];
        this.lastName = names[1];
    }
};

// Now whenever we do this
console.log(someOtherPerson.fullName) // the getter method is called
someOtherPerson.fullName = "Dick Burgers" //the setter method is called.

// Accessor properties can also be created through Object.create. I will leave that
// up to you!