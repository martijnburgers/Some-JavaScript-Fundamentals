// Example: Immediatly Invoked Function Expressions (IIFE)
//
// Be sure to checkout the examples in the "Function Definition and Terminology" folder 
// before you start on this one.
//
// Immediatly Invoked Function Expressions (IIFE) enables you to execute a function as 
// soon as it's defined. It creates a local scope (sandbox) for your code. This pattern is 
// usefull when you have some initialization/setup code but can be used for all kind of
// interesting patterns.
//
// For example, if you need to do things once and only once, there is no need to create
// reusable code like a function declaration.
//
// A IIFE can return values. See IIFE3.js for an example.
//
// A IIFE can also be used to save state. See IIFE5.js for an example.
//
// How and why it works is much more difficult to explain but I have given it a try
// in IIFE2.js
//
// It's not always important (unless you're a real nerd) to know how and why it works as
// it works. Sometimes it's enough to know it's behaviours and work with that. Let's start
// with two simple examples.

// IIFE which doesn't do much but logging something to the console.
(function() {	
	console.log("Hallo");
}());

// IIFE which creates some local variables and finally logs the current day.
(function() {	 
	 var messages = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
	 var currentDay = new Date().getDay();

	 console.log((messages[currentDay-1]));
}());

// This two small examples doesn't do much and doesn't shows the true power of IIFE's. 
// You now know the behaviours so let's continue to learn why it works this way. Go to
// IIFE2.js