// Example : IIFE step by step
//
// We know we have different kind of function definitions:
//
// - function declarations
// - function expressions (named and unnamed aka anonymous)
// - function constructors
// 
// In JavaScript we have also have expressions and statements. Expresions resolve to a 
// value and statements perform an action (conditional flows i.e if-else, variable 
// declaration, function declaration, loops, etc).
//
// A function expression produces a value, the function. It does not create a variable.
// The function declaration does, it creates a variable whose value is the created
// function.
//
// Function declarations cannot be invoked immediatly, function expressions do.

// The following code is a function expression and consist of three parts:  the 
// var statement, assignment expression and a function expression.

var getName = function () {
	return "Martijn Burgers";
};

// We know function expressions can be invoked imediatly. So we can do this as well:

var name = function () {
	return "Martijn Burgers";
}();

// The above is an example of an IIFE. The result of the IIFE is assigned to a variable
// name. It's not advised to write IIFE's this way because you could easily fail noticing 
// the last parentheses especially when your function contains more lines of code.
// Secondly your IIFE doesn't have to return a value which drops this definition of an
// IIFE.

// Now if we remove the var statement and assignment expression we get the following:

// function () {
// 	return "Martijn Burgers";
// }();

// This evaluates in a syntax error: Uncaught SyntaxError: Unexpected token ( 
// This is because the parser expects it to be a function declaration and a 
// function declarations must have a name. Let's give it a name and try to fix
// the error.

// function getName() {
// 	return "Martijn Burgers";
// }();

// This evaluates in the same syntax error: Uncaught SyntaxError: Unexpected token ( 
// but on a different place. Now it falls over the last ( character. We should already
// know this, because function declaration can't be immediatly invoked. But this is not
// where the parser is complaining about. The parser is complaining that it sees an empty
// grouping operator () which is not allowed. The grouping operator provides a means of 
// controlling precedence of evaluation in expressions. So even if it looks like the last
// parenthesis () belongs to the function declaration, it's not. It's a useless unrelated 
// grouping operator. The grouping operator can only be placed around expressions, 
// statements are not allowed.

// The following code is perfectly valid although it looks a bit strange.

function getName1() {
	return "Martijn Burgers";
}(true);

function getName2() {
	return "Martijn Burgers";
}(1);

function getName3() {
	return "Martijn Burgers";
}

(1);

// Ok let's recap a little bit. In order to imediatly invoke a function is must be an
// function expression and it can't be a function declaration.
//
// So we have to define the function in the way the parsers sees it as function 
// expression. In other words we have to place the function in the expression position.
// The easiest and most used way to do that is to use surround the function with the 
// grouping operator.

(function () {
	console.log("some message");
});

// The grouping operator returns the function object, nothing more. It doesn't invoke
// the function. That's one step more we have to do.

(function () {
	console.log("My first IIFE");
}());

// also possible is (but I prefer the first one):

(function () {
	console.log("My second IIFE");
})();

// You could also use unary operators to force the function into the expression position.
// In contrast to the grouping operator, these operators change the result of the expression. 
// Which is OK, if you don’t need the result.

// The unary plus operator. This operator tries to convert his operand to a number or 
// to NaN (not-a-number). If it's already a number it does nothing.

+function () {
	console.log("My fourth IIFE");
}()

// The logical not operator. This operator inverts the boolean value.

!function () {
	console.log("My fife IIFE");
}()

// Using the void operator. This unary operator is not frequently used but I find it a 
// elegant solution of defining an IIFE without a return value. It expresses much better 
// that the return value of an IIFE is not used. The void operator takes any expression 
// and returns undefined.

void function () {
	console.log("My third IIFE");
}()


// More info:
//
// http://www.2ality.com/2012/09/expressions-vs-statements.html
// http://www.ssicom.org/js/x33620.htm
// http://kangax.github.com/nfe/
// http://dmitrysoshnikov.com/ecmascript/chapter-5-functions/#types-of-functions