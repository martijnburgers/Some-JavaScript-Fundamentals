// Example: Saving state with IIFE's.
//
// Beware of subtle bugs when using closures, like in the example below

function wrapElements(a) {
	var result = [], i, n;

	for(i = 0, n = a.length; i < n; i++) {
		result[i] = function() { return a[i]; };
	}

	return result;
}

var wrapped = wrapElements([10,20,30,40,50]);

wrapped[0](); // ?

// scroll down for the fixed version.



















// By the time the function is called, the i variable points to 5, which is a non-existing
// array item.

// Closures store their outer variables by reference, not by value.
// The solution is to force the creation of a local scope by creating a IIFE.

function correctWrapElements(a) {
	var result = [], i, n;

	for(i = 0, n = a.length; i < n; i++) {
		(function() {
			var j = i;
			result[i] = function() { return a[j]; };	
		}())	
	}

	return result;
}

var correctWrapped = correctWrapElements([10,20,30,40,50]);

correctWrapped[0](); // 10