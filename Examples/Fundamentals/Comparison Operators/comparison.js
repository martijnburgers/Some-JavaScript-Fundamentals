// Example: Comparison Operators
//
// The operands of the comparison operators may be of any type BUT. Comparison can only be
// performed on numbers and strings.
//
// So whenever an operand is not a number or string they are converted to a primitive value
// (if possible). For the conversion it uses the following to methods:
//
// valueOf()  : Returns the primitive value of the specified object. If an object has no 
//              primitive value, valueOf returns the object itself.
//
// toString() : Returns a string representing the object.
// 
// If an operand evaluates to an object it tries to convert it to a primitive by calling
// valueOf(). If valueOf() does not return a primitive, the toString() method is called.
//
// If after (conversion-if needed) both operands are strings, the two strings are compared
// using alphabetical order.
//
// If after (conversion-if needed) one of both operands is not a string, both operands are
// converted to numbers and compared numerically.
//
// Let's see this in practice.


var a = {
    toString: function () { return "a"; },
    valueOf: function () { return 1; }
};


var b = {
    toString: function () { return "b"; },
    valueOf: function () { return 2; }
};

//JavaScript uses the ValueOf function
console.log("a > b: " + (a > b));
console.log("a < b: " + (a < b));


var c = {
    toString: function () { return "c"; },
    valueOf: function () { return { index: 3 }; }
};	

//In case of b valueOf is used, in case of c toString is used.
//the result of toString will be converted to a number which fails and therefor NaN (Not-A-Number).
//result 2 < NaN
console.log("b < c: " + (b < c));
//result 2 > NaN
console.log("b > c: " + (b > c));

//object
var d = {
    toString: function () { return "4"; },
    valueOf: function () { return { index: 4 }; }
};

//In case of b valueOf is used, in case of d toString is used.
//the result of toString will be converted to a number which succeeds.
//result 2 < 4
console.log("b < d: " + (b < d));
//result 2 > 4
console.log("b > d: " + (b > d));

//primitive
var e = 5;

//primitive
var f = 6;

//Both operands are numbers, so JavaScript does a numerical check.
console.log("e > f: " + (e > f));
console.log("e < f: " + (e < f));

//primitive
var g = "g";

//primitive
var h = "h";

//Both operands are strings, so JavaScript does a alpabetics check.
console.log("g > h: " + (g > h));
console.log("g < h: " + (g < h));