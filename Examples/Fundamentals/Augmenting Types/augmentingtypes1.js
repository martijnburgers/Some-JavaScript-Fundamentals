// Example: Augmenting Types
// JavaScript allows us to augment the basic types of the language.

console.log("'" + " a ".trim() + "'");

String.prototype.trim = function(){
	return this.replace(/^\s+|\s+$/g, '');
};    

console.log("'" + " b ".trim() + "'");

// Because of the dynamic nature of JavaScript's prototypal inheritance, all 
// objects/values are imediatly endowed with the new methods, even objects/values
// that where created before the new methods where created.