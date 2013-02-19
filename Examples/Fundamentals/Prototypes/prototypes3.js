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
   Mammal.call(this, name);   
   this.saying = "meowwwww";
}

Cat.prototype = Object.create(Mammal.prototype);

Cat.prototype.purr = function() {
   return "rr rr rr rr";
};

var c = new Cat("Garfield");