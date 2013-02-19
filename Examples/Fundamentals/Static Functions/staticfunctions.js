// Create a constructor function
function Calculator()
{
}

// Because a (constructor) function is a object we can add properties to it.
Calculator.multiply = function(a, b)
{	
	return (a*b);
}

// We can call the static method on Calculator without creating a new Calculator object. 
// The this context of the static function is the constructor function.

var total = Calculator.multiply(2, 10);

console.log(total);