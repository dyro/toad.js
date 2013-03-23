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
			for(var i = 0; i < arguments[0]; i++) {
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
	var _removeIf = function(callback) {
		var results = [];
		for (var i = 0; i < this.length; i++) {
			if (callback(this[i])) {
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
	 		if (!callback(this[i])) {
	 			results.push(this[i]);
	 		};
	 	};
	 	return results;
	};

	// Prototypes

	// Array

	Array.prototype.clear = function() {
		return this.filter(function() { return true; });
	};

	Array.prototype.each = _each;
	Array.prototype.eachWithIndex = _eachWithIndex;
	Array.prototype.map = _map;
	Array.prototype.getFirst = _getFirst;
	Array.prototype.removeIf = _removeIf;
	Array.prototype.keepIf = _keepIf;

	// String

	String.prototype.reverse = function(){
		return this.split("").reverse().join("");
	};

	String.prototype.each = _each;
	String.prototype.eachWithIndex = _eachWithIndex;
	String.prototype.map = _map;
	String.prototype.getFirst = _getFirst;
	String.prototype.removeIf = _removeIf;
	String.prototype.keepIf = _keepIf;


}).call(this);















