// Example: Function Definition & Terminology
//
// There are lot's of different ways and terminologies used for defining functions. It's 
// important to know what these are because it simplifies explaining and talking about 
// code.
// 
// Before we go further we first have to explain the meaning of statements and 
// expressions. Expresions resolve to a single value and statements perform an action.
//
// Examples of expressions are:
// 5 + 5
// 5
// true
// "abc"
// a = 7
// 5 * (5+5)
//
// Examples of statements are:
// conditional flows (if statement, switch statement)
// variable declaration (var statement)
// function declaration (function(){} statement)
//
// So now let's start with the first type of a function.

// named function expression

var multiply1 = function multiply(a, b) {
	return a*b;
}

// Let's chop this example in parts so we can explain why they are function expressions.
//
// var <= statement
// multiply1 = <= assignment expression
// function multiply(a, b) { return a*b; } <= named function expression. This resolves to
// a function, but does not create a variable.

// unamed function expression (aka anonymous function or just function expression, in 
// C# also known as a lambda expression).

var multiply2 = function (a, b) {
	return a*b;
}

// function declaration
// This wil define a function multiply in the current scope, which is currently the 
// global scope. The function declaration does create a variable, whose value is the 
// function.
function multiply3(a, b) {
   return a*b;
}

// The difference between a named function expression and a unamed function expression 
// (anonymous function) is that the named function expression binds its name as a local
// variable within the function. This can be used for writing recursive functions.

var f1 = function fibonacci(n) {
   if (n > 2) {
   	return fibonacci(n-2) + fibonacci(n-1);
   } else {
   	return 1;    
   }
}

// But you could also use the assigned variable name to make it recursive.

var f2 = function (n) {
   if (n > 2) {
   	return f2(n-2) + f2(n-1);
   } else {
   	return 1;    
   }
}

// Or just use a function declaration.

function fibonacci(n) {
   if (n > 2) {
   	return fibonacci(n-2) + fibonacci(n-1);
   } else {
   	return 1;    
   }
}

console.log("Number 7 in the Fibonacci series is " + fibonacci(7));

// There is no real benefit for using named function expressions other than debugging
// purposes. Some debuggers show the name of the functions in the callstack (or stacktrace) 
// which is obviously much easier than a callstack with only anonymous functions. But it's
// advised to NOT USE named function expressions because of some problematic side efects.
// These where a mistake in the ECMAScript specfication and existed through ECMAScript 3.
//
// The problem was that JavaScript engines where required to represent the scope of a named
// function expression as an object. This scope object constains only a single property, 
// the function name, but it also inherits properties from Object.prototype. So by naming
// the function expression you automatically bring al the properties of Object.prototype
// into scope. This could lead to surprising problems.
//
//
//
// It's also possible to define a function through the function constructor. This is not
// used a lot and is far less efficient then the others. I just show it for the sake of
// completeness.

// Function constructor
var multiply4 = new Function("a", "b", "return a*b;");

console.log(multiply4(10, 2));