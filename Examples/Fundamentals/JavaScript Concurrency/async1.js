// Example Asynchronous pitfalls
//
// Usage: exclude async2.js in async.html.
//
// JavaScript has no syntatic way of dealing with asynchronous code. JavaScript has
// callbacks for this. The callback method is called whenever the asynchronous code
// completes.
//
// JavaScript itself provides a number of asynchronous APIs such as the commonly used
// XHR (XMLHttpRequest better know aw 'AJAX') APIs, as well as IndexedDB, SQLite and
// HTML5 Web workers.
//
// When writing code you have to be aware that certain code runs asynchronously. If you
// do not, you will encounter problems like timing issues.
//
// The following example shows this problem by calling a (simulated) asynchronously
// method.
// 
// Another difficult aspect of asynchronous programming is error handling. See async2.js
// for this.

var someObject = {
	initialize: function () {
		console.log("inside initialize");

		this.getData();

		this.doThingsWithData();
	},
	getData: function() {
		console.log("inside getData");

		// It turns out that the data is retrieved asynchronously.
		
		// store this context, so that callback is invoked with the proper invocation context.
		var that = this; 
		// simulating an asynchronous call - you can ignore this function.
		var asyncFn = function(callback) {
		  var timeout = Math.ceil(Math.random() * 3500);
		  
		  console.log("Simulating async method with " + timeout + "ms")
		  
		  // run callback after timeout miliseconds
		  setTimeout(function() { callback.call(that, [10,20,30,40,50]); }, timeout);
		};

		// calling async method, and give a callback as it parameters. This will be called
		// after async method completes.
		asyncFn(this.getDataDone);
	},
	getDataDone: function(data) {
		console.log("inside getDataDone");
		this.data = data;
	},
	doThingsWithData: function() {
		console.log("inside doThingsWithData");

		if (this.data) {
			console.log("yes we have data!");
		} else {
			console.log("huh where is our data");
		}
	}
};

someObject.initialize();

//see fixed code below



























var somefixedObject = {
	initialize: function () {
		console.log("inside initialize");

		this.getDataAsync();	
	},
	getDataAsync: function() {
		console.log("inside getDataAsync");

		// store this context, so that callback is invoked with the proper invocation context.				
		var that = this;
		// simulating an asynchronous call - you can ignore this function.
		var asyncFn = function(callback) {
		  var timeout = Math.ceil(Math.random() * 3500);
		  
		  console.log("Simulating async method with " + timeout + "ms")
		  
		  // run callback after timeout miliseconds
		  setTimeout(function() { callback.call(that, [10,20,30,40,50]); }, timeout);
		};

		//calling async method, and give a callback as it parameters. This will be called
		//after async method completes.
		asyncFn(this.getDataAsyncDone);
	},
	getDataAsyncDone: function(data) {
		console.log("inside getDataAsyncDone");
		this.data = data;
		this.doThingsWithData();

		// keep the callback handlers simple - don't do to much logic here. If you need
		// more complex handling try using a event system such as custom jQuery events.
	},
	doThingsWithData: function() {
		console.log("inside doThingsWithData");

		if (this.data) {
			console.log("yes we have data!");
		} else {
			console.log("huh where is our data");
		}
	}
};

// someFixedObject.initialize();