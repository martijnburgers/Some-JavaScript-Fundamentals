// Example: Closures
//
// In short: A closure is any function which closes over the environment in which it was 
// defined. This means that it can access variables not in its parameter list. In other
// word functions create scope when they are defined, not when they are executed.
// 
// One example that makes this clear is the inner function. Let's create a function 
// that returns a (inner) function.

function make() {
	var id = 0; // local variable.

	return function(){ // inner function
		return id++ ; // using variable of the outer function
	};
}

var someUIDGenerator = make();

// So now someUIDGenerator contains (is) a function that is returned by make(). 
// Obviously we can call this function.

console.log(someUIDGenerator()) // this should return 0;

// So what do we have inside someUIDGenerator. We have a function that returns the value of id,
// which is variable of the outer function (make).

// if we run it again it should be 1.

console.log(someUIDGenerator()) // this should return 1;

// so what does happen if we run make again!

var someOtherUIDGenerator = make();

console.log(someOtherUIDGenerator()); 

// this returns 0; Both someUIDGenerator and someOtherUIDGenerator contains a different 
// scoped id variable.
//
// This mechanism is very powerfull and used a lot.