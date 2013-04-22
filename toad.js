(function() {
    "use strict";
    var each,
        eachWithIndex,
        map,
        getFirst,
        getLast,
        removeIf,
        keepIf;

    // Functions used on muliple Data Types

    // Can be used with: 
    // Array,
    // String
    each = function(callback) {
        var i;
        for (i = 0; i < this.length; i++) {
            callback(this[i]);
        }
    };

    // Can be used with: 
    // Array,
    // String
    eachWithIndex = function (callback) {
        var i;
        for (i = 0; i < this.length; i++) {
            callback(this[i], i);
        }
    };

    // Can be used with: 
    // Array,
    // String
    map = function(callback) {
        var results, i;
        results = [];
        for (i = 0; i < this.length; i++) {
            results.push(callback(this[i]));
        }
        return results;
    };

    // Can be used with: 
    // Array,
    // String
    getFirst = function(num) {
        if (typeof num === 'number') {
            var results, len, i;
            results = [];
            len = (num > this.length) ? this.length : num;
            for (i = 0; i < len; i++) {
                results.push(this[i]);
            }
            return results;
        }
        return this[0];
    };

    // Can be used with: 
    // Array,
    // String
    getLast = function(num) {
        if (typeof num === 'number') {
            var results, len, i;
            results = [];
            len = (num > this.length) ? this.length : num;
            for (i = this.length - 1; i > (this.length - 1) - len; i--) {
                results.push(this[i]);
            }
            return results.reverse();
        }
        return this[this.length - 1];
    };

    // Can be used with: 
    // Array,
    // String
    removeIf = function(callback) {
        var results, i;
        results = [];
        for (i = 0; i < this.length; i++) {
            if (!callback(this[i])) {
                results.push(this[i]);
            }
        }
        return results;
    };

    // Can be used with: 
    // Array,
    // String
    keepIf = function(callback) {
        var results, i;
        results = [];
        for (i = 0; i < this.length; i++) {
            if (callback(this[i])) {
                results.push(this[i]);
            }
        }
        return results;
    };

    // Prototypes
    // Array

    Array.prototype.clear = function() {
        return this.filter(function() { return true; });
    };

    Array.prototype.each          = each;
    Array.prototype.eachWithIndex = eachWithIndex;
    Array.prototype.map           = map;
    Array.prototype.getFirst      = getFirst;
    Array.prototype.getLast       = getLast;
    Array.prototype.removeIf      = removeIf;
    Array.prototype.keepIf        = keepIf;

    // String

    String.prototype.reverse = function() {
        return this.split("").reverse().join("");
    };

    String.prototype.eachChar          = each;
    String.prototype.eachCharWithIndex = eachWithIndex;
    String.prototype.map               = map;
    String.prototype.getFirst          = getFirst;
    String.prototype.getLast           = getLast;
    String.prototype.removeIf          = removeIf;
    String.prototype.keepIf            = keepIf;

}());
