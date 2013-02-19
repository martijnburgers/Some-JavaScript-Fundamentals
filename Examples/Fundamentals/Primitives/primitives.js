// JavaScript primitive types:
//
// numbers (floating-point values), strings, booleans, null and undefined

var isAMammal1 = true;
var isAMammal2 = new Boolean(true); // Primitive wrapper, so no primitive anymore, just an object

var counter1 = 10;
var counter2 = new Number(10); // Primitive wrapper, so no primitive anymore, just an object

var message1 = "Hello";
var message2 = new String("Hello"); // Primitive wrapper, so no primitive anymore, just an object.

var someValue = null;
var someOtherValue = undefined;

//What's strange about this (scroll down for answer)?
var firstChar = "Hello".charAt(0);






















// Answer: 
//
// We are invoking a method on a primitive type (in this case a string)? In contexts 
// where a method is to be invoked on a primitive string or a property lookup occurs,
// JavaScript will automatically wrap the string primitive and call the method or perform
// the property lookup.