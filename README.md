# toad.js

Augmenting JavaScript with some useful functions

## Array

### each
Calls the code in the anonymous function for each element of the array. The element is the parameter of the anonymous function. 

```javascript
[1, 2, 3].each(function(element) { console.log(ele); } );
```
Produces: 
    1
    2
    3

### eachWithIndex
Calls the code in the anonymous function for each element of the array. The anonymous function's paramters are an index and the array's element. 

```javascript
[1, 2, 3].eachWithIndex(function(index, element){
	console.log("index: ", index);
	console.log("element: ", element);
});
```
Produces:
    index: 0
    element: 1
    index: 1
    element: 2
    index: 2
    element: 3
