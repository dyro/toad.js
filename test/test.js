var assert = require('assert');
var toad   = require('../toad.js');

describe ('Array', function() {
	describe ('#each()', function() {

	  	it('should iterate over each element in the array', function(){
	  		var results = [];
			[1, 2, 3].each(function(ele) {
			  	results.push(ele);
			});
			// assert.equal(results, [1, 2, 3]);
	  	});

	  	it('should return undefined', function(){
  			var a = [1, 2, 3].each(function(ele) { /* Nothing */ });
  			assert.equal(typeof(a), "undefined");
	  	});

	  	it('should not break when array is empty', function(){
	  		[].each(function(ele) { /* Nothing */ });
	  	});

	});

	describe('#map', function() {
	  	
	  	it('should iterate over each element in the array', function(){
	  		
	  	});
	});
});	

