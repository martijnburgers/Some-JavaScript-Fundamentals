// Example with custom jQuery Events on non-DOM objects.
//
// Usage: exclude customobjectjqueryevents1.js in customobjectjqueryevents.html.
//
// Custom events are useful for writing modular code and implementing pub/sub 
// and observer patterns.
//
// Let's say we still have the Page object which contains controls which are created by 
// the page itself. The controls are created with an id but not the page object. The 
// control can validate itself and when it does it raises an event that an error has
// occured. Everyone who wants to know can then take appropriate action. The 
// createContols method creates three controls but only for the first two created 
// controls a event handler is created.
//
// This examples binds event handlers and raises events on non-DOM objects. Of course this
// is also possible on DOM objects.

function Page(id) {
	this.id = id;
	this.createControls();	
}

Page.prototype.createControls = function() {
	
	if (!this.controls) {
		this.controls = [];

		for (var i = 1; i <= 3; i++) {

			var control = new Control("control_" + i);

			// only add error handler on the first two controls.
			if (i < 3) {			    
			    // Adding a event handler is done with the jQuery on() method.			   
				$(control).on("error", $.proxy(this.handleError, this)); 
				// the $.proxy() method ensures that the this context of the to be called
				// handleError method is the one we want (the page object). This feature has been
				// standardized into ECMAScript 5 which now includes the bind method for this.
			};
			
			this.controls.push(control);
		}
	}
}

Page.prototype.handleError = function(event, data) {	
	console.log("error handled: " + data);

	this.setError(data);

	return true;
};

Page.prototype.getError = function() {
	return this.error || "";
};

Page.prototype.setError = function(error) {
	this.error = error;
};

function Control(id) {
	this.id = id;	
};

Control.prototype.validate = function() {
	// do some validation ...
	// let's assume something went wrong

	// You have two options in jQuery to raise (create) an event. trigger() and 
	// triggerHandler().

	// Events created with .triggerHandler() do not bubble up the DOM hierarchy. This
	// means will invoke any registerd event handlers without performing the default 
	// action. If they are not handled by the target element directly, they do nothing!
	// It returns whatever value was returned by the last handler it caused to be 
	// executed. If no handlers are triggered, it returns undefined.

	// Events created with trigger() do bubble up the DOM hierarchy (assuming that any
	// of the event handlers didn't aborted this - this is possible by calling 
	// preventDefault() on the event object). 
	// It returns the jQuery object in case of the example: $(this).

	var handlerResult = 
	// $(this).trigger("error", "User input on " + this.id + " is invalid!"); //gives you back the wrapped object $(this)
	$(this).triggerHandler("error", "User input on " + this.id + " is invalid!"); //gives you back true
	
	console.log("result from handler: " + handlerResult);
};

var p = new Page("somePage");

	p.controls[0].validate();