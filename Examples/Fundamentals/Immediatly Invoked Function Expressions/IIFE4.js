// Example: Changing the closure1.js example to use an IIFE
//
// Be sure to checkout the closure examples first!
//
// In the closure1.js example we had the following code. How can we improve this with
// using an IIFE.

function make() {
	var id = 0; // local variable.

	return function(){ // inner function
		return id++ ; // using variable of the outer function
	};
}

var someUIDGenerator = make();

var uid = (function() {
	var id = 0; // local variable.

	return function(){ // inner function
		return id++ ; // using variable of the outer function
	};
}());

//now we don't need the function make() anymore.

console.log(uid());
console.log(uid());