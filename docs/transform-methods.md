# Transform Methods

Methods that transform the array in some fashion. Think of methods such as reversing, palindrome, duplicating, inversing, interleaving and more.

## Include

```js
const Mod = require('total-serialism').Transform;
```

## Usage

```js
// duplicate an array with an offset added to every value
Mod.clone([0, 5, 7], 0, 12, -12); 
//=> [ 0, 5, 7, 12, 17, 19, -12, -7, -5 ] 

// combine multiple numbers/arrays into one
Mod.join([0, 5], 12, [7, 3]); 
//=> [ 0, 5, 12, 7, 3 ] 
// Alternative: Mod.combine()

// duplicate an array certain amount of times
Mod.copy([0, 5, 7], 3); 
//=> [ 0, 5, 7, 0, 5, 7, 0, 5, 7 ]
// Alternative: Mod.duplicate()

// add zeroes to a rhythm to make it play once over a certain amount of bars
Mod.every([1, 0, 1, 0, 1, 1, 0, 1], 2, 8)); 
//=> [ 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0 ]

// remove values from an array
Mod.filter([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [3, 8, 10]);
//=> [ 0, 1, 2, 4, 5, 6, 7, 9 ] 

// return only a specific datatype (in this case you specify the type to return)
Mod.filterType([0, 1, [1, 2], 'foo', 2, null, true, {bar: 5}, 3.14, undefined], 'number');
//=> [ 0, 1, 2, 3.14 ] 

// invert an array around a center point
Mod.invert([0, 2, 5, 10, 13], 5); 
//=> [ 10, 8, 5, 0, -3 ]

// interleave multiple arrays into one
Mod.lace([0, 5, 9], [3, 3], [7, 12, 11, -1]); 
//=> [ 0, 3, 7, 5, 3, 12, 9, 11, -1 ]

// merge arrays into a 2D-array
Mod.merge([0, 3, 7], [3, 12], [12, -1, 19, 5]); 
//=> [ [0, 3, 12], [3, 12, -1], [7, 19], [5] ]

// generate a palindrome of an array
Mod.mirror([0, 3, 5, 7]); 
//=> [ 0, 3, 5, 7, 7, 5, 3, 0 ]
// Alternative Mod.palindrome()

// rotate an array in positive or negative direction
Mod.rotate([0, 5, 7, 12], -1); 
//=> [ 5, 7, 12, 0 ] 

// reverse an array
Mod.reverse([0, 5, 7, 12]); 
//=> [ 12, 7, 5, 0 ]

// spray values from one array on the non-zero places of another array
Mod.spray([12, 19, 24], [1, 0, 0, 1, 1, 0, 1, 0.3, 0]);
//=> [ 12, 0, 0, 19, 24, 0, 12, 19, 0 ]

// remove duplicates from an array, leave order of appearance intact
Mod.unique([5, 7, 5, 0, 12, 7, 5]); 
//=> [ 5, 7, 0, 12 ] 
```
