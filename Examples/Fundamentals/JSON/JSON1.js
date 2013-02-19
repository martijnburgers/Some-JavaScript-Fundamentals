// Example: JSON
//
// JSON stands for JavaScript Object Notation and is a data serialization format based on 
// JavaScript literals.
//
// The primitive value undefined, the numbers NaN and Infinity, functions, Dates, RegExps
// and Errors are not supported.
//
// Dates are not supported. Yes, Dates are not supported.
// 
// There are different workarounds used by different vendors of JSON serializers. See 
// the links for more info on this subject. So if you need to serialize from and to Date 
// objects you will have to perform additonals steps which connects to the workaround.
// 
// Since ECMAScript 5 JSON is native. Prior to that you will have to use 
// https://github.com/douglascrockford/JSON-js/blob/master/json2.js. The JSON object
// provides two functions: 
//
// - JSON.stringify - which serializes an object, array or primitive value to a string.
// - JSON.parse - which deserializes a string back to an object, array or primitive value.

var somePerson = {
	name: "Martijn Burgers",
	occupation: "Developer",
	getName: function() { return this.name; }
}

var s;

s = JSON.stringify(somePerson);

// we see that the function is not serialized.
console.log(s);

//now add a date property to somePerson

somePerson.born = new Date(1984, 8, 7); //months are counted from 0. 8 is september.

s = JSON.stringify(somePerson);

// We see that the date property is converted to a string value according to the ISO 8601
// format. This is default behaviour for serialization dates.

console.log(s);

//so let's see what happens if we deserialize it.

var someOtherPerson1 = JSON.parse(s);

// The newly created object obviously doesn't have the getName function. The born property
// is available but isn't the same as the born property on somePerson. It's just the same
// string which represents the date value in ISO 8601 format. 

console.dir(someOtherPerson1);

// This can be fixed by writing a reviver function that can transform parsed values. The 
// solution for writing a revivers depends on the format being used for representing the
// date object. For example Microsoft uses the format "\/Date(1230807660000-1000)\/". For
// the example we stick to the ISO 8601 date format.

// This function uses a regular expression to convert the date string value back to an 
// Date object.

function dateReviver(key, value)
{
	if (typeof value === 'string') {
		var a = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
		if (a) {
	       value = new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], +a[6]));
	   	}
	}

	return value;
}

var someOtherPerson2 = JSON.parse(s, dateReviver);

console.dir(someOtherPerson2);

// Now the born property is a Data object, just what we wanted.

// If the serialiser encounters an object which has the method toJSON() it will call that
// method. This is also the case for the Date object.

var dateAsJSON = somePerson.born.toJSON();

console.log(dateAsJSON);

// The stringify method has two optional arguments.
//
// A filter argument, which can be a function that replaces values before they got 
// serialized or an array that contains the name of the properties that must be
// serialized.

s = JSON.stringify(somePerson, ['name', 'born']);

console.log(s);

// We can also give a function as the second argument which replaces values before they
// got serialized. RegExp objects are normally not included properly in serialized 
// strings but we can fix that.

var someObjectWithRegExp = {
	description: "Year Regex",
	yearRegex: /^(\d{4})/
}

s = JSON.stringify(someObjectWithRegExp);

console.log(s);

function regexFilter(key, value) {
	if (value.constructor === RegExp) {
		return value.toString();
	}

	return value;
}

s = JSON.stringify(someObjectWithRegExp, regexFilter);

console.log(s);

// Another way would be augmenting the RegExp prototype with a toJSON method.

// RegExp.prototype.toJSON = function() {
// 	return this.toString();
// }

// The second optional argument is indent which let's you specify an indentation string
// or the number of spaces used for identation. The output of the stringify is now more
// human-readable.

s = JSON.stringify(somePerson, null, '4');

console.log(s);

s = JSON.stringify(somePerson, null, '\t');

console.log(s);

// More info on JSON and dates:
// http://weblogs.asp.net/bleroy/archive/2008/01/18/dates-and-json.aspx
// http://markembling.info/2011/07/json-date-time
// http://www.west-wind.com/weblog/posts/2009/Apr/19/Native-JSON-Parsing-What-does-it-mean