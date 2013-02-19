/* 
* Simple JavaScript Inheritance
* By John Resig http://ejohn.org/
* MIT Licensed.
* Inspired by base2 and Prototype
* 
* changed _super to base to make it more c# like
*/
(function () {
    var initializing = false, fnTest = /xyz/.test(function () { xyz; }) ? /\bbase\b/ : /.*/;
    
    // The base Class implementation (does nothing). this is the global (window) object.
    this.Class = function () { };

    // Create a new Class that inherits from this class
    Class.extend = function (prop) {
        var base = this.prototype;

        // Instantiate a base class (but only create the instance,
        // don't run the init constructor)
        initializing = true;
        var prototype = new this();
        initializing = false;

        // Copy the properties over onto the new prototype
        for (var name in prop) {
            // Check if we're overwriting an existing function
            prototype[name] = typeof prop[name] == "function" &&
        typeof base[name] == "function" && fnTest.test(prop[name]) ?
        (function (name, fn) {
            return function () {
                //maybe base is already defined on this, store it temporarily
                //so we can put if back after the function is invoked.
                var tmp = this.base;

                // Add a new .base() method that is the same method
                // but on the super-class
                this.base = base[name];

                // The method only need to be bound temporarily, so we
                // remove it when we're done executing
                var ret = fn.apply(this, arguments);
                this.base = tmp;

                return ret;
            };
        })(name, prop[name]) :
        prop[name];
        }

        // The dummy class constructor
        function Class() {
            // All construction is actually done in the init method
            if (!initializing && this.init)
                this.init.apply(this, arguments);
        }

        // Populate our constructed prototype object
        Class.prototype = prototype;

        // Enforce the constructor to be what we expect
        Class.prototype.constructor = Class;

        // And make this class extendable
        Class.extend = arguments.callee;

        return Class;
    };
} ());