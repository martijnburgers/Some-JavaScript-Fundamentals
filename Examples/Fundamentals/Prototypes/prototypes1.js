// Create a constructor function called Mammal
function Mammal(name) { 
   this.name = name;
}

// Add two functions to the prototype of Mammal

Mammal.prototype.says = function () {
   return this.saying || '';
};

Mammal.prototype.getName = function () {
   return this.name;
};

//Create an new object m which is a Mammal called Martijn.

var m = new Mammal("Martijn");