// Classical inheritance simulating using the Class library.

var Mammal = Class.extend({
	init: function (name) {
		this.name = name;
	},
	says: function () {
   		return this.saying || '';
	},
	getName: function() {
		return this.name;
	}
});

var m = new Mammal("Martijn"); // This will invoke the init method of Mammal.

// Be sure to inspect the m object.  You will see that the init(), says() and getName()
// are on the prototype of m and NOT m itself.

// Don't forget to check code below.





















var Cat = Mammal.extend({
	init: function (name) { 
		// Before a method is invoked, the property base is set to the
		// same method but on the super(base)-class.

		// In this case it will call the init of Mammal.		
		this.base(name);

		this.saying = "meow";
	},
	getName: function() {
		return this.base() + " (Cat)";

	purr: function() {
   		return "rrrrrrr";
	}
});

var c = new Cat("Sylvester");