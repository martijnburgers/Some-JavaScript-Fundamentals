// Example: jQuery Deferreds and Promises

// jQuery Deferred and Promises provide a way to write cleaner asynchronous code. 
// Usually, the way we are used to deal with asynchronous code in Javascript is 
// passing callbacks as an argument.

// jQuery Deferreds and Promises changes this by:

// - providing a standard interface for asynchronous code (http://wiki.commonjs.org/wiki/Promises/A).
// - allowing multiple callbacks.
// - running callbacks in a user defined sequence.

// So what are Deferred and Promises.
// 
// Let's start by writing the traditional AJAX request through jQuery AJAX. Here we 
// are passing two callbacks (success and error) to the jQuery AJAX method.

$.ajax({
    url: "jquerydeferredsandpromises.html",    
    type: "GET",
    success: function(){ 
        console.log("success from AJAX request without promises!");
    },
    error: function(){ 
        console.log("error from AJAX request without promises!");
    },
    complete: function(){ 
        console.log("always from AJAX request without promises!");
    } 
});

// Now rewrite it using jQuery Deferreds and Promises. The ajax() method returns
// a XMLHttpRequest object which also implements the CommonJS Promises/A interface.
// On this object we can register multiple callbacks for different completion 
// states.

var getHTML1 = $.ajax({
    	url: "jquerydeferredsandpromises.html",    
    	type: "GET"
});

getHTML1.done(function(responseText, state, jqXHR){
    console.log("success from AJAX request with promises : getHTML1!");
});

getHTML1.fail(function(){
    console.log("error from AJAX request with promises : getHTML1!");
});

getHTML1.always(function(responseText, state, jqXHR){
    console.log("always from AJAX request with promises : getHTML1!");
});

// Or use the then() method, which is shorter and behaves differently. The callback
// functions passed to then() are acting as filters. So when you have mutiple 
// callbacks registered the return value of the first callback is passed to the
// second and so on. When you return nothing, undefined is passed to the next 
// handler.

var getHTML2 = 
$.ajax({
    	url: "somenonexistingpage.html",    
    	type: "GET"
})
.then(
	function(){
	    console.log("success from AJAX request with promises : getHTML2!");
	}
, 
	function(jqXHR, state){
	    console.log("error from AJAX request with promises : getHTML2!");
	}
);

// Hmmm now why is this working? We clearly see that the ajax request is invoked 
// before the done or fail handlers are registered.
// This is because is saves state. It doesn't mind when the event handlers are 
// registered. As soon as you register one it will imediatly be invoked if it should
// according to state.
//
// The ajax method returns a promise object. This object can be in one of three 
// states: pending, resolved and rejected. In the course of its life, a 
// promise goes from a pending state, when it’s called, to a resolved or rejected 
// state, when it’s been completed, or it could also stay pending forever and is 
// never resolved.
//
// In case of the ajax method a promise is first pending and then immediatly 
// resolved.

console.log("the state of the promise getHTML2 is: " + getHTML2.state());
console.dir(getHTML2);

// Combining promises. This can be helpful when you want to perform some action
// when for example multiple AJAX calls are succesfull completed.

$.when($.ajax("jquerydeferredsandpromises.html"), $.ajax("jquerydeferredsandpromises.html"))
 .then(
	function(response1, response2) {
		// both arguments are arrays with[responseText, "success", jqXHR ] 
		console.log("Both promises are resolved");
		console.dir(response1);
		console.dir(response2);
	},
	function(jqXHR, status) {	
		console.log("One of both promises is rejected!");		
		console.log(jqXHR);
		console.log(status);		
	}	
);

// When there are multiple promises passed to when(), a master promise is created and
// tracks the aggregate state of all the promisses it has been passed. When one of 
// the pased promisses is rejected, the failure callback is fired. Otherwise the 
// done callback is fired.

// Chaining promises sequentially.

var getHTML3 = $.ajax("jquerydeferredsandpromises.html");

function getSecondStuff() {
    return $.ajax("jquerydeferredsandpromises.html");
}

getHTML3.then(getSecondStuff).then(function(responseText, state, jqXHR){
  // Both promises are resolved - the arguments passed to this function are
  // the results from the second promise.
  console.log("both promises are resolved but sequentially");
});

// Ok we talked enough about promises but what are those deferreds? Well they are
// the basically the same but with four more functions: reject(), rejectWith(), 
// resolve() and resolveWith(). Promises don't allow to change the state, deferreds
// do.
// 
// You use them when you want to have control over when the promise is resolved or
// rejected. You can do this with the mentioned methods. So for example when you are
// writing asynchronous code you are creating a deferred object and returns the
// promise of that deferred object with the promise() method.
//
// Let's write a simple example

function createAPromise() {
  var deferred = $.Deferred();
 
  setTimeout(function() {
    deferred.resolve("bla bla");
    //the resolveWith allows you to provide the this context used for the callbacks.
  }, 2000);
 
  return deferred.promise();
}

var somePromise = createAPromise();

somePromise.done(function(data) {    
    console.log("somePromise is resolved with data: " + data);
});