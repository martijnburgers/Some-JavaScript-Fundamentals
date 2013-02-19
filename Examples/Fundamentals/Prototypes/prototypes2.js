function Mammal(name) { 
   this.name = name;
}

Mammal.prototype.says = function () {
   return this.saying || '';
};

Mammal.prototype.getName = function () {
   return this.name;
};

function Cat(name) {
   this.name = name;
   this.saying = "meow";
}

// The prototype of Cat is a Mammal.
Cat.prototype = new Mammal();

// Add more behaviour to the prototy
Cat.prototype.purr = function() {
   return "rrrrrrr";
};

var c = new Cat("Sylvester");