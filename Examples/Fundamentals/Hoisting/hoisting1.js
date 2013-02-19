var scope = "global"

function f() {	
	console.log(scope);
	var scope = "local";
	console.log(scope);
}

// don't for get to check the function below (scroll down)
























//this is the same a f.
function g() {
	var scope;
	console.log(scope);
	scope = "local";
	console.log(scope);
}