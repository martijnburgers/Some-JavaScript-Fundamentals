function f() {
	var i=1;

	if (true) {

		var j = 5;
		
		for (var k = 0; k < 10; k++) {		
		}

		console.log("inside if statement: i = "  + i);
		console.log("inside if statement: k = "  + k);
	}

	console.log("inside outer block: j = "  + j);	
	console.log("inside outer block: k = "  + k);
}