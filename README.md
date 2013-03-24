# toad.js

Augmenting JavaScript with some useful functions

## Array

### each()
Calls the code in the anonymous function for each element of the array. The element is the parameter of the anonymous function. 

```javascript
[1, 2, 3].each(function(element) { console.log(ele); } );
```
Produces: 
```
1
2
3
```
### eachWithIndex()
Calls the code in the anonymous function for each element of the array. The anonymous function's paramters are an index and the array's element. 

```javascript
[1, 2, 3].eachWithIndex(function(index, element){
	console.log("index: ", index);
	console.log("element: ", element);
});
```
Produces:
```
index: 0
element: 1
index: 1
element: 2
index: 2
element: 3
```

### map()
Produces a new array based upon the contents of the current array

```javascript
var a = [1, 2, 3].map(function(element) { return element * 2; });
console.log(a);
```
Produces:
```
[2, 4, 6]
```

### getFirst()
Returns the first element of an array.

```javascript
var a = [1, 2, 3].getFirst();
console.log(a);
```
Produces:
```
1
```

If a number is passed as a paramter, ```getFirst``` will return that many elements from the front of the array

```javascript
var a = [1, 2, 3, 4 ,5].getFirst(3);
console.log(a);
```
Produces:
```
[1, 2, 3]
```




