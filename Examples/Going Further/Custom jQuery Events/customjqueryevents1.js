// Example without custom jQuery Events
//
// Usage: exclude customobjectjqueryevents2.js in customjqueryevents.html.
//
// Let's say we have some Page object which contains controls which are created by the
// page itself. The controls are created with an id and the page object which created
// the control. The control can validate itself and when it does it want's to set any
// error on the page object. It does this trhough the page object which is passed to the
// constructor.
//

//Page constructor function
function Page(id) {
	this.id = id;
	this.createControls();	
}

//Page Prototype members
Page.prototype.createControls = function() {
	
	if (!this.controls) {
		this.controls = [];

		for (var i = 1; i <= 3; i++) {
			var control = new Control("control_" + i, this);

			this.controls.push(control);
		}
	}
}

Page.prototype.getError = function() {
	return this.error || "";
};

Page.prototype.setError = function(error) {
	this.error = error;
};

//Control constructor function
function Control(id, page) {
	this.id = id;
	this.page = page;
};

//Control Prototype members
Control.prototype.validate = function() {
	// do some validation

	// let's assume something went wrong	
	this.page.setError("User input on " + this.id + " is invalid!");
};

var p = new Page("somePage");
	
	//validate the first control.
	p.controls[0].validate();

//Of course this is a simple example and works perfectly fine but it's not a good solution
//because the Control en Page object are to tightly coupled. The control object must know
//about the Page object and his methods. The Control could never be re-used in different
//contexts.

//Now go to customobjectjqueryevents2.js to see a solution with jQuery custom events on
//non-DOM objects which solves this problem.