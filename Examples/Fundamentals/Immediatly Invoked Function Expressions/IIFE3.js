// Returning values from an immediate function

var person = (function () {
	
	var name = "Martijn Burgers";

	var getName = function() { return name; };
	var setName = function(newName) {name=newName};

	return {
		getName: getName,
		setName: setName
	};
	
})();

// Now the name variable is private. It can only be accessed by getName and setName.