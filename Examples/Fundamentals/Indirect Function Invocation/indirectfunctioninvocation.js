// Example: Indirect Function Invocation
//
// The invocation context (the value bound to this) of a function or method is
// determined by the syntax of it's caller.

// It is sometimes necessary to call a function with a custom invocation context.

// Because functions are just objects we have two methods (call() and apply()) that 
// make it possible to set the invocation context with the one we want.

// The call and apply methods allow you to indirectly invoke a function as it
// where a method of some other object. This feature makes it possible to borrow
// methods from other objects.
//
// The first argument to be passed is the invocation context.

function f() {
	// borrowing the slice method from the Array type.
	var args = Array.prototype.slice.call(arguments, 1, 3);
	return args;
}

var result = f("a", "b", "c", "d");
console.dir(result);

// The apply method is like the call method except that the arguments to be passed
// to the function are specified as an array.

var numbers = [5, 6, 2, 3, 7]; 
var max = Math.max.apply(null, numbers);
// This is about equal to Math.max(numbers[0], numbers[1], ...) or Math.max(5, 6, ..)