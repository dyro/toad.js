(function(){

	// Functions used on muliple Data Types

	// Can be used with: 
	// Array,
	// String
	var _each = function(callback){
		for (var i = 0; i < this.length; i++) {
	  		callback(this[i]);
	  	};
	};

	// Can be used with: 
	// Array,
	// String
	var _eachWithIndex = function (callback) {
	  	for (var i = 0; i < this.length; i++) {
	  		callback(i, this[i]);
	  	};
	};

	// Can be used with: 
	// Array,
	// String
	var _map = function(callback) {
	  	var results = [];
	  	for (var i = 0; i < this.length; i++) {
	  		results.push(callback(this[i]));
  	  	};
  	  	return results;
	};

	// Can be used with: 
	// Array,
	// String
	var _getFirst = function() {
		if(typeof(arguments[0]) === 'number') {
			var results = [];
            var len = (arguments[0] > this.length) ? this.length : arguments[0];
			for(var i = 0; i < len; i++) {
				results.push(this[i]);
			}
			return results;

		} else {
			return this[0];
		};
	};

    // Can be used with: 
    // Array,
    // String
    var _getLast = function() {
        if(typeof(arguments[0]) === 'number') {
            var results = [];
            var len = (arguments[0] > this.length) ? this.length : arguments[0];
            for (var i = this.length - 1; i > (this.length-1) - len; i--) {
                results.push(this[i]);
            }
            return results.reverse();
        } else {
            return this[this.length - 1];
        };
    };

	// Can be used with: 
	// Array,
	// String
	var _removeIf = function(callback) {
		var results = [];
		for (var i = 0; i < this.length; i++) {
			if (!callback(this[i])) {
				results.push(this[i]);
			};
		};
		return results;
	};

	// Can be used with: 
	// Array,
	// String
	var _keepIf = function(callback) {
		var results = [];
	 	for (var i = 0; i < this.length; i++) {
	 		if (callback(this[i])) {
	 			results.push(this[i]);
	 		};
	 	};
	 	return results;
     }

	// Prototypes
	// Array

    Array.prototype.clear = function() {
        return this.filter(function() { return true; });
    };

	Array.prototype.each 		  = _each;
	Array.prototype.eachWithIndex = _eachWithIndex;
	Array.prototype.map 		  = _map;
	Array.prototype.getFirst 	  = _getFirst;
    Array.prototype.getLast       = _getLast;
	Array.prototype.removeIf 	  = _removeIf;
	Array.prototype.keepIf        = _keepIf;

	// String

	String.prototype.reverse = function(){
		return this.split("").reverse().join("");
	};

	String.prototype.eachChar          = _each;
	String.prototype.eachCharWithIndex = _eachWithIndex;
	String.prototype.map               = _map;
	String.prototype.getFirst          = _getFirst;
    String.prototype.getLast           = _getLast;
	String.prototype.removeIf          = _removeIf;
	String.prototype.keepIf            = _keepIf;

}).call(this);

console.log([1, 2, 3].getLast(2));

