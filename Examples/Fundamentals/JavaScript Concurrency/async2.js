// Usage: exclude async1.js in async.html.
//
// In synchronous code, it's easy to handle errors of different method calls in one step
// by wrapping the method calls with a try block.

function a() {
	console.log("inside a()");
}

function b() {
	console.log("inside b()");
	throw new Error("b() oops something went wrong");
}

function c() {
	console.log("inside c()");
	throw new Error("c() oops something went wrong");
}

try {
	a();
	b(); // will throw error
	c();
}
catch(e)  {
	console.log("An error occured!");
	//handle the error
	console.dir(e);
}

// In asynchronous code this is not possible because of the way the event queue works. By
// the time an asynchronous error occurs, there is no obvious execution context to throw
// the exception to. 
//
// Let's see this in practice.

function d() {
	console.log("inside d()");

	throw new Error("d() oops something went wrong");
}

// function which simulates an asynchronous call 
function asyncFn (callback) {
  var timeout = Math.ceil(Math.random() * 4000);
  
  console.log("Simulating async method with " + timeout + "ms")
  
  // run callback after timeout miliseconds
  setTimeout(function() { 
  	console.log("async method completed, now running callback!");
  	callback(); }
  	, timeout);

};

try {	
	asyncFn(d);
}
catch(e)  {
	console.log("An error occured!");
	//handle the error
	console.dir(e);
}

//As you will see in the console of your browser, when you run this code there is a 
//uncaught error (Uncaught Error: d() oops something went wrong). Not what you expected
//right?

//Errors must me manually passed back to callers via callback functions.

function asyncFnWithErrors (callback) {
  var timeout = Math.ceil(Math.random() * 5000);
  
  console.log("Simulating async method with " + timeout + "ms")
  
  // run callback after timeout miliseconds
  setTimeout(function() { 
  	console.log("async method completed, now running callback!");
  	callback({ error: "some Error occured!"}); 
  }
  , timeout);
};

function e(errors) {
	console.log("inside e()");

	if (errors) {
		console.log("We have errors!");
		console.dir(errors);
	}
}

asyncFnWithErrors(e);

// Now the error is handled like we intended. 

// Working with asynchronous code (which means the use of callbacks) could quickly
// end up in spagetthi code.
//
// Working with libraries like jQuery AJAX or jQuery promises really helps in making
// this cleaner.