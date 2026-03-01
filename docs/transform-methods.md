<!-- Generated with jsdoc2md, do not edit the .md file, instead edit the .hbs and the jsdoc in the src -->

# Transform

Methods that apply a transformation on the input array (sometimes in combination with more input arrays). In general return a copy of the input array. Examples of methods within this library are reverse, palindrome, duplicate, inverse, lace, rotate and more. Most functions follow the pattern: `function(<array-to-transform>, ...<other-arguments-or-array>)`

## Include

```js
const Mod = require('total-serialism').Transform;

Mod.inverse();
Mod.rotate();
```

OR

```js
const { inverse, rotate } = require('total-serialism').Transform;

inverse();
rotate();
```

## Members

* [flat](#flat) ⇒ <code>Array</code>
* [sort](#sort) ⇒ <code>Array</code>
* [stepMerge](#stepMerge) ⇒ <code>Array.&lt;Array&gt;</code>
* [unique](#unique) ⇒ <code>Array.&lt;Number&gt;</code>

## Functions

* [clone(array, ...clone)](#clone) ⇒ <code>Array.&lt;Number&gt;</code> \| <code>Array.&lt;String&gt;</code>
* [combine(...arrays)](#combine) ⇒ <code>Array</code>
* [copy(array, duplicates)](#copy)
* [every(array, [bars], [division], [padding], [shift])](#every) ⇒ <code>Array</code>
* [pad(array, [size], [pad], [shift])](#pad) ⇒ <code>Array</code>
* [filter(array, filter)](#filter) ⇒ <code>Array</code>
* [filterType(array, type)](#filterType) ⇒ <code>Array</code>
* [invert(array, center, upper)](#invert) ⇒ <code>Array.&lt;Number&gt;</code>
* [lace(...arrays)](#lace) ⇒ <code>Array</code>
* [lookup(indeces, values)](#lookup) ⇒ <code>Array</code>
* [merge(...arrays)](#merge) ⇒ <code>Array</code>
* [palin(array, no_doubles)](#palin) ⇒ <code>Array</code>
* [pinky(input)](#pinky) ⇒ <code>Array.&lt;Number&gt;</code>
* [pinkyDown(input)](#pinkyDown) ⇒ <code>Array.&lt;Number&gt;</code>
* [pinkyUpDown(input)](#pinkyUpDown) ⇒ <code>Array.&lt;Number&gt;</code>
* [thumb(input)](#thumb) ⇒ <code>Array.&lt;Number&gt;</code>
* [thumbDown(input)](#thumbDown) ⇒ <code>Array.&lt;Number&gt;</code>
* [thumbUpDown(input)](#thumbUpDown) ⇒ <code>Array.&lt;Number&gt;</code>
* [repeat(input, repetitions)](#repeat) ⇒ <code>Array</code>
* [reverse(input)](#reverse) ⇒ <code>Array</code>
* [rotate(input, direction)](#rotate) ⇒ <code>Array</code>
* [slice(input, slice_size, [rest])](#slice) ⇒ <code>Array.&lt;Array&gt;</code>
* [split(input, split_size)](#split) ⇒ <code>Array.&lt;Array&gt;</code>
* [spray(sprayer, sprayee)](#spray) ⇒ <code>Array</code>
* [step(...arrays)](#step) ⇒ <code>Array</code>
* [stretch(input, size, [interp])](#stretch) ⇒ <code>Array</code>

<a name="flat"></a>

## flat ⇒ <code>Array</code>
Flatten a multidimensional array. Optionally set the depth for the 
flattening with the second argument.

**Kind**: global variable  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>array</td><td><code>Array</code></td><td><p>array to flatten</p>
</td>
    </tr><tr>
    <td>depth</td><td><code>Number</code></td><td><p>depth of flatten (default=Infinity)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Mod.flatten([1, [2, 3, [ 4 ], 5], 6]);
//=> [ 1, 2, 3, 4, 5, 6 ] 
```

* * *

<a name="sort"></a>

## sort ⇒ <code>Array</code>
Sort an array in ascending or descending order. When strings are included 
they are sorted in alphabetical order with all numbers in the beginning.

**Kind**: global variable  
**Returns**: <code>Array</code> - sorted array  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>array</td><td><code>Array</code></td><td><p>array to sort</p>
</td>
    </tr><tr>
    <td>[direction]</td><td><code>Number</code></td><td><p>postive/negative value indicates sorting direction (optional, default = 1)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// Sort an array of numbers ascending 
Stat.sort([-10, 8, 6, -12, -6, -7, 2, 4, 3, 11]);
//=> [ -12, -10, -7, -6, 2, 3, 4, 6, 8, 11 ] 

// Sort an array of numbers descending with negative second argument
Stat.sort([-10, 8, 6, -12, -6, -7, 2, 4, 3, 11], -1);
//=> [ 11, 8, 6, 4, 3, 2, -6, -7, -10, -12 ]

// Sort a mixed array of strings and numbers
Stat.sort([10, 3.14, 'snare', 'kick', 5, -6, 'hat']);
//=> [ -6, 10, 3.14, 5, 'hat', 'kick', 'snare' ] 
```

* * *

<a name="stepMerge"></a>

## stepMerge ⇒ <code>Array.&lt;Array&gt;</code>
Merge 2 or multiple lists by alternating over them. This gives a similar 
result as [merge](#merge), except that the output length is the lowest common 
multiple of the input lists, so that every combination of consecutive values 
is included until they all appeared an integer multiple of times. This 
function is mainly used to allow arrays as input for Generators and for the 
step function for algorithmic composition. Returns a multi-dimensional array.

**Kind**: global variable  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>...arrays</td><td><code>Array</code></td><td><blockquote>
<p>arrays to stepwise merge</p>
</blockquote>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// total steps is 2 so output is 4
Mod.step([0, 3], [7, 12]);
//=> [[0, 7], [3, 12]]

// total steps is now 6 before repetition, so output is 12
Mod.step([0, 3, 5], [7, 12]);
//=> [[0, 7], [3, 12], [5, 7], [0, 12], [3, 7], [5, 12]]

// works with 2D and multiple arrays
Mod.step([0, 3], [7, 12], [[19, 24]]);
//=> [[0, 7, [19, 24]], [3, 12, [19, 24]]]
```

* * *

<a name="unique"></a>

## unique ⇒ <code>Array.&lt;Number&gt;</code>
Remove duplicate items from an array. Does not account for 2-dimensional 
arrays within the array. Preserves the order of items.

Alias: `thin()`

**Kind**: global variable  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td><td><code>Array.&lt;Number&gt;</code></td><td><p>array to filter</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Mod.unique([5, 7, 5, 0, 12, 7, 5]); 
//=> [ 5, 7, 0, 12 ] 
```

* * *

<a name="clone"></a>

## clone(array, ...clone) ⇒ <code>Array.&lt;Number&gt;</code> \| <code>Array.&lt;String&gt;</code>
Duplicate an array multiple times, optionaly add an offset to every value 
when duplicating. Also works with 2-dimensonal arrays. When using strings 
the values will be concatenated instead of added.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>array</td><td><code>Array.&lt;Number&gt;</code> | <code>Array.&lt;String&gt;</code></td><td><p>array to clone</p>
</td>
    </tr><tr>
    <td>...clone</td><td><code>Number</code></td><td><p>clone with integers, offset or string concatenation</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Mod.clone([0, 5, 7], 0, 12, -12); 
//=> [ 0, 5, 7, 12, 17, 19, -12, -7, -5 ] 

// works with multidimensional arrays
Mod.clone([0, 5, [7, 12]], 0, 12, -12);
//=> [ 0, 5, [ 7, 12 ], 12, 17, [ 19, 24 ], -12, -7, [ -5, 0 ] ]

// works with strings
Mod.clone(['c', ['e', 'g']], ['4', '5', '#3']);
//=> [ 'c4', [ 'e4', 'g4' ], 'c5', [ 'e5', 'g5' ], 'c#3', [ 'e#3', 'g#3' ] ]
```

* * *

<a name="combine"></a>

## combine(...arrays) ⇒ <code>Array</code>
Join arrays into one array. More than 2 arrays as arguments is possible.

Alias: `combine()`

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>...arrays</td><td><code>Array</code></td><td><p>Multiple arrays to combine</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Mod.join([0, 5], 12, [7, 3]); 
//=> [ 0, 5, 12, 7, 3 ] 

// works with 2D-arrays
Mod.join([0, 5], [[12, 19], 7]);
//=> [ 0, 5, [ 12, 19 ], 7 ] 

// works with strings
Mod.join(['c4', 'e4'], ['g4', 'f4']);
//=> [ 'c4', 'e4', 'g4', 'f4' ]
```

* * *

<a name="copy"></a>

## copy(array, duplicates)
Duplicate an array a certain amount of times.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>array</td><td><code>Array</code></td><td><p>array to duplicate</p>
</td>
    </tr><tr>
    <td>duplicates</td><td><code>Int</code></td><td><p>amount of duplicates (optional, default = 2)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Mod.copy([0, 7, 12], 3);
//=> [ 0, 7, 12, 0, 7, 12, 0, 7, 12 ] 

// works with 2D-arrays
Mod.copy([0, [3, 7], 12], 2);
//=> [ 0, [ 3, 7 ], 12, 0, [ 3, 7 ], 12 ] 

// works with strings
Mod.copy(['c', 'f', 'g'], 3);
//=> [ 'c', 'f', 'g', 'c', 'f', 'g', 'c', 'f', 'g' ] 
```

* * *

<a name="every"></a>

## every(array, [bars], [division], [padding], [shift]) ⇒ <code>Array</code>
Add zeroes to an array with a number sequence. The division determines the 
amount of values per bar. The total length equals the bars times division. 
This method is very useful for rhythms that must occur once in a while, but 
can also be use for melodic phrases. Also works with strings.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>array</td><td><code>Array</code></td><td><p>array to use every n-bars</p>
</td>
    </tr><tr>
    <td>[bars]</td><td><code>Int</code></td><td><p>amount of bars (optional, default=1)</p>
</td>
    </tr><tr>
    <td>[division]</td><td><code>Int</code></td><td><p>amount of values per bar (optional, defaul=16)</p>
</td>
    </tr><tr>
    <td>[padding]</td><td><code>Value</code></td><td><p>pad value for the added items (optional, default=0)</p>
</td>
    </tr><tr>
    <td>[shift]</td><td><code>Number</code></td><td><p>optional shift in n-bars (optional, default=0)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// add zeroes to a rhythm to make it play once over a certain amount of bars
Mod.every([1, 0, 1, 1, 1], 2, 8);
//=> [ 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
 
// change the padding value with an optional 3rd argument
Mod.every([3, 0, 7, 9, 11], 2, 8, 12);
//=> [ 3, 0, 7, 9, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12 ]

// change the shift (rotation) with an optional 4th argument
Mod.every([1, 0, 0, 1, 1], 2, 8, 0, 1);
//=> [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0 ]

// works with 2D-array
Mod.every([3, [0, 7, 9], 11], 1, 12);
//=> [ 3, [ 0, 7, 9 ], 11, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] 

// Works with strings
Mod.every(['c4', 'eb4', 'g4', 'f4', 'eb4'], 2, 8, 'r');
//=> [ 'c4',  'eb4', 'g4', 'f4',
//     'eb4', 'r',   'r',  'r',
//     'r',   'r',   'r',  'r',
//     'r',   'r',   'r',  'r' ] 
```

* * *

<a name="pad"></a>

## pad(array, [size], [pad], [shift]) ⇒ <code>Array</code>
Pad an array with zeroes (or any other value) up to the length specified. 
The padding value can optionally be changed and the shift argument rotates 
the list n-steps left or right (negative). This method is similar to `every()
` except arguments are not specified in musical bars/divisions but in array 
length. A shorter length than input list will slice the output list.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>array</td><td><code>Array</code></td><td><p>Array to pad</p>
</td>
    </tr><tr>
    <td>[size]</td><td><code>Int</code></td><td><p>output length of array (optional, default=16)</p>
</td>
    </tr><tr>
    <td>[pad]</td><td><code>Value</code></td><td><p>padding value for the added items (optional, default=0)</p>
</td>
    </tr><tr>
    <td>[shift]</td><td><code>Number</code></td><td><p>shift in steps (optional, default=0)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Mod.pad([3, 7, 11, 12], 9);
//=> [ 3, 7, 11, 12, 0, 0, 0, 0, 0 ] 

Mod.pad(['c', 'f', 'g'], 11, '-', 4);
//=> [ '-', '-', '-', '-', 'c', 'f', 'g', '-', '-', '-', '-' ] 
```

* * *

<a name="filter"></a>

## filter(array, filter) ⇒ <code>Array</code>
Filter one or multiple values from an array

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>array</td><td><code>Array</code></td><td><p>array to filter</p>
</td>
    </tr><tr>
    <td>filter</td><td><code>Number</code> | <code>String</code> | <code>Array</code></td><td><p>values to filter</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Mod.filter([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [3, 8, 10]);
//=> [ 0, 1, 2, 4, 5, 6, 7, 9 ] 
```

* * *

<a name="filterType"></a>

## filterType(array, type) ⇒ <code>Array</code>
Filter one or multiple values from an array based on their type

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>array</td><td><code>Array</code></td><td><p>array to filter</p>
</td>
    </tr><tr>
    <td>type</td><td><code>String</code></td><td><p>datatype to filter (optional, default=number)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// default filter is set as number
Mod.filterType([0, 'foo', {bar : true}, 1, undefined]);
//=> [ 0, 1 ] 

// return only a specific datatype (in this case you specify the type to return)
Mod.filterType([0, 1, [1, 2], 'foo', 2, null, true, {bar: 5}, 3.14, undefined], 'number');
//=> [ 0, 1, 2, 3.14 ] 
```

* * *

<a name="invert"></a>

## invert(array, center, upper) ⇒ <code>Array.&lt;Number&gt;</code>
Invert an array of values by mapping the lowest value to the highest value 
and vice versa, flipping everything in between. Second optional argument 
sets the center to flip values against. Third optional argument sets a range 
to flip values against.

**Kind**: global function  
**Todo**

- Make work with note-values like 'c' or 'c4', etc.

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>array</td><td><code>Array.&lt;Number&gt;</code></td><td><p>Array to invert</p>
</td>
    </tr><tr>
    <td>center</td><td><code>Int</code></td><td><p>invert center / low range (optional, default=array-minimum)</p>
</td>
    </tr><tr>
    <td>upper</td><td><code>Int</code></td><td><p>high range (optional, default=array-maximum)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// invert an array between the highest and lowest values
Mod.invert([-1, 2, 7, 9, 14]);
//=> [ 14, 11, 6, 4, -1 ] 

// invert an array around a specified center point
Mod.invert([-1, 2, 7, 9, 14], 5);
//=> [ 11, 8, 3, 1, -4 ] 

// invert an array around specified low and high points
Mod.invert([-1, 2, 7, 9, 14], 0, 12);
//=> [ 13, 10, 5, 3, -2 ] 

// works with multidimensional arrays
Mod.invert([-1, 2, [[7, 9], 14]]);
//=> [ 14, 11, [ [ 6, 4 ], -1 ] ] 
```

* * *

<a name="lace"></a>

## lace(...arrays) ⇒ <code>Array</code>
Interleave two or more arrays. Works with every length of an array. Works 
with 2D-arrays and string arrays as well.

Alias: `zip()`

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>...arrays</td><td><code>Array</code></td><td><p>two or more arrays to interleave</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// lace multiple arrays of different lengths
Mod.lace([0, 0, 0], [7, 7], [9, 9, 9, 9]);
//=> [ 0, 7, 9, 0, 7, 9, 0, 9, 9 ] 

// works with multidimensional arrays
Mod.lace([0, [0, 0]], [[7,7]], [9, [9, 9], 9]);
//=> [ 0, [ 7, 7 ], 9, [ 0, 0 ], [ 9, 9 ], 9 ] 

// works with strings
Mod.lace(['c', 'c', 'c', 'c'], ['g', 'g'], ['e']);
//=> [ 'c', 'g', 'e', 'c', 'g', 'c', 'c' ] 
```

* * *

<a name="lookup"></a>

## lookup(indeces, values) ⇒ <code>Array</code>
Build an array of items based on an array of indeces looking up values from 
an input array. The values are wrapped within the length of the lookup 
array. Works with n-dimensional arrays.

**Kind**: global function  
**Returns**: <code>Array</code> - Looked up values  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>indeces</td><td><code>Array</code></td><td><p>Array with indeces to lookup</p>
</td>
    </tr><tr>
    <td>values</td><td><code>Array</code></td><td><p>Array with values returned from lookup</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// first array is the index, second array are the items to lookup
Mod.lookup([0, 1, 1, 2, 0, 2, 2, 1], ['c4', 'e4', 'f4', 'g4']);
//=> [ 'c4', 'e4', 'e4', 'f4', 'c4', 'f4', 'f4', 'e4' ] 

// works with multidimensional arrays and leaves nesting intact
Mod.lookup([0, [1, 1, [2, 3], 0], 2], ['c4', 'e4', 'f4', 'g4']);
//=> [ 'c4', [ 'e4', 'e4', [ 'f4', 'g4' ], 'c4' ], 'f4' ] 

// indices are wrapped between listlength
Mod.lookup([-2, 5, 7, 12], ['c4', 'e4', 'f4', 'g4']);
//=> [ 'f4', 'e4', 'g4', 'c4' ] 

// indices are floored if floating point values
Mod.lookup([0.999, 2.78, 3.14, 1.54], ['c4', 'e4', 'f4', 'g4']);
//=> [ 'c4', 'f4', 'g4', 'e4' ] 

// ignores non-numeric values
Mod.lookup([0, 'foo', ['1', 'bar']], [1, 2, 3]);
//=> [ 1, [ 2 ] ] 
```

* * *

<a name="merge"></a>

## merge(...arrays) ⇒ <code>Array</code>
Merge all values of multiple arrays on the same index into a 2D array. 
Preserves length of longest list.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>...arrays</td><td><code>Array</code></td><td><blockquote>
<p>two or more arrays to be merged</p>
</blockquote>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// merge multiple arrays into a 2D-array
Mod.merge([0, 0, 0], [5, 5], [7, 7, 7, 7]);
//=> [ [ 0, 5, 7 ], [ 0, 5, 7 ], [ 0, 7 ], [ 7 ] ] 

// works with strings
Mod.merge(['c4', 'c4'], ['f4'], ['g4', 'g4', 'g4']);
//=> [ [ 'c4', 'f4', 'g4' ], [ 'c4', 'g4' ], [ 'g4' ] ] 

// 2D-arrays are concatenated to the other arrays
Mod.merge([['c4', 'e4'], 'c4'], [['f4', 'a4']], ['g4', 'g4']);
//=> [ [ 'c4', 'e4', 'f4', 'a4', 'g4' ], [ 'c4', 'g4' ] ] 
```

* * *

<a name="palin"></a>

## palin(array, no_doubles) ⇒ <code>Array</code>
Reverse an array and concatenate to the input creating a palindrome of the 
array. Add an optional true flag to remove the double on the reverse and end 
points.

Alias: `mirror()`

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>array</td><td><code>Array</code></td><td><p>input array to transform to palindrome</p>
</td>
    </tr><tr>
    <td>no_doubles</td><td><code>Bool</code></td><td><p>no-double flag (optional, default = false)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// reverse and concatenate to the original array
Mod.palin([0, 5, 7, 12]);
//=> [ 0, 5, 7, 12, 12, 7, 5, 0] 

// works with 2D-array, removes doubles in center and end
Mod.palin([0, [5, 7], 9, 12], true);
//=> [ 0, [ 5, 7 ], 9, 12, 9, [ 5, 7 ] ] 

// works with strings
Mod.palin(['c4', 'f4', 'g4'], true);
//=> [ 'c4', 'f4', 'g4', 'f4' ] 
```

* * *

<a name="pinky"></a>

## pinky(input) ⇒ <code>Array.&lt;Number&gt;</code>
The pinky/pinkyUp technique takes an array and outputs a transformed array 
where the last value alternates between every other previous value in a left 
to right order. This function is inspired by the Ableton arpeggiator 
algorithms. For example a list of `[0 3 7 12 19]` results in `[0 19 3 19 7 
19 12 19]`.

Alias: `pinkyUp`

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td><td><code>Array.&lt;Number&gt;</code></td><td><p>array to transform</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Mod.pinky([0, 3, 7, 12, 19])
//=> [ 0, 19, 3, 19, 7, 19, 12, 19 ]
```

* * *

<a name="pinkyDown"></a>

## pinkyDown(input) ⇒ <code>Array.&lt;Number&gt;</code>
PinkyDown is similar to [pinky](#pinky), but in reverse order. For instance `
[0 3 7 12 19]` results in `[12 19 7 19 3 19 0 19]`.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td><td><code>Array.&lt;Number&gt;</code></td><td><p>array to transform</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Mod.pinkyDown([0, 3, 7, 12, 19])
//=> [12, 19, 7, 19, 3, 19, 0, 19]
```

* * *

<a name="pinkyUpDown"></a>

## pinkyUpDown(input) ⇒ <code>Array.&lt;Number&gt;</code>
PinkyUpDown is similar to [pinky](#pinky) and [pinkyDown](#pinkyDown) and is 
basically a combination of both. For instance `[0 3 7 12 19]` results in `[0 
19 3 19 7 19 12 19 7 19 3 19]`.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td><td><code>Array.&lt;Number&gt;</code></td><td><p>array to transform</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Mod.pinkyUpDown([0, 3, 7, 12, 19])
//=> [0, 19, 3, 19, 7, 19, 12, 19, 7, 19, 3, 19]
```

* * *

<a name="thumb"></a>

## thumb(input) ⇒ <code>Array.&lt;Number&gt;</code>
The thumb/thumbUp technique takes an array and outputs a transformed array 
where the first value alternates between every other value of the array in a 
left to right order. This is inspiredy by the Ableton arpeggiator 
algorithms. For example `[0 3 7 12 19]` results in `[0 3 0 7 0 12 0 19]`.

Alias: `thumbUp()`

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td><td><code>Array.&lt;Number&gt;</code></td><td><p>array to transform</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Mod.thumbUp([0, 3, 7, 12, 19])
//=> [0, 3, 0, 7, 0, 12, 0, 19]
```

* * *

<a name="thumbDown"></a>

## thumbDown(input) ⇒ <code>Array.&lt;Number&gt;</code>
Similar to [thumb](#thumb), but in reverse order. For instance `[0 3 7 12 19]` 
results in `[0 19 0 12 0 7 0 3]`.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td><td><code>Array.&lt;Number&gt;</code></td><td><p>array to transform</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Mod.thumbDown([0, 3, 7, 12, 19])
//=> [0, 19, 0, 12, 0, 7, 0, 3]
```

* * *

<a name="thumbUpDown"></a>

## thumbUpDown(input) ⇒ <code>Array.&lt;Number&gt;</code>
Similar to [thumb](#thumb) and [thumbDown](#thumbDown), basically a combination of 
both. Creates a palindrome of the notes. For instance `[0 3 7 12 19]` 
results in `[0 3 0 7 0 12 0 19 0 12 0 7]`.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td><td><code>Array.&lt;Number&gt;</code></td><td><p>array to transform</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Mod.thumbUpDown([0, 3, 7, 12, 19])
//=> [0, 3, 0, 7, 0, 12, 0, 19, 0, 12, 0, 7]
```

* * *

<a name="repeat"></a>

## repeat(input, repetitions) ⇒ <code>Array</code>
Repeat the values of an array n-times. Using an array as second argument for 
repeat times will iterate over that array alternating repetitions.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td><td><code>Array</code></td><td><p>array with values to repeat</p>
</td>
    </tr><tr>
    <td>repetitions</td><td><code>Number</code> | <code>Array.&lt;Number&gt;</code></td><td><p>array or number of repetitions per value</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Mod.repeat([0, 5, 7], 3);
//=> [ 0, 0, 0, 5, 5, 5, 7, 7, 7 ] 

// us an array for repetitions per index
Mod.repeat(['c4', 'e4', 'f4', 'g4'], [1, 4, 2, 0]);
//=> [ 'c4', 'e4', 'e4', 'e4', 'e4', 'f4', 'f4' ] 

// works with multidimensional arrays
Mod.repeat([[0, 5], [7, 9, 12]], [2, 3]);
//=> [ 
// 	 [ 0, 5 ], 
//   [ 0, 5 ], 
//   [ 7, 9, 12 ], 
//   [ 7, 9, 12 ], 
//   [ 7, 9, 12 ] ]
```

* * *

<a name="reverse"></a>

## reverse(input) ⇒ <code>Array</code>
Reverse the order of items in an array. Similar to JavaScripts `Array.reverse
()` but doesn't change the original array and instead returns a copy.

Alias: `rev()`

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td><td><code>Array</code></td><td><blockquote>
<p>array to reverse</p>
</blockquote>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Mod.reverse([0, 5, 7, 12]);
//=> [ 12, 7, 5, 0 ] 

// works with strings and 2D-arrays
Mod.reverse(['c4', ['e4', 'f4'], 'g4']);
//=> [ 'g4', [ 'e4', 'f4' ], 'c4' ] 
```

* * *

<a name="rotate"></a>

## rotate(input, direction) ⇒ <code>Array</code>
Rotate an array to the left or right for n-steps. Works with 2D-arrays and 
string arrays.

Alias: `rot()`

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td><td><code>Array</code></td><td><p>array to rotate</p>
</td>
    </tr><tr>
    <td>direction</td><td><code>Int</code></td><td><p>direction and steps to rotate</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Mod.rotate([0, 5, 7, 12], 1);
//=> [ 12, 0, 5, 7 ] 

Mod.rotate(['c4', ['e4', 'f4'], 'g4', 'a4'], -1);
//=> [ [ 'e4', 'f4' ], 'g4', 'a4', 'c4' ] 
```

* * *

<a name="slice"></a>

## slice(input, slice_size, [rest]) ⇒ <code>Array.&lt;Array&gt;</code>
Slice an array in one or multiple parts. Slice lengths are determined by the 
second argument array. Outputs an array of arrays of the result. Not to be 
confused with JavaScripts `Array.slice()` function!

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td><td><code>Array</code></td><td><p>array to slice in parts</p>
</td>
    </tr><tr>
    <td>slice_size</td><td><code>Number</code> | <code>Array.&lt;Number&gt;</code></td><td><p>slice lengths to slice array into</p>
</td>
    </tr><tr>
    <td>[rest]</td><td><code>Bool</code></td><td><p>output rest flag (optional, default=false)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Mod.slice(Gen.spread(8), [3, 2]);
//=> [ [ 0, 1, 2 ], [ 3, 4 ], [ 5, 6, 7 ] ] 

// set rest-flag to false removes last slice 
Mod.slice(Gen.spread(24), [3, 2, -1, 5], false);
//=> [ [ 0, 1, 2 ], [ 3, 4 ], [ 5, 6, 7, 8, 9 ] ] 
```

* * *

<a name="split"></a>

## split(input, split_size) ⇒ <code>Array.&lt;Array&gt;</code>
Similar to [slice](#slice) in that it also splits an array, except that split 
recursively slices until the array is completely empty. If an array is 
provided as split sizes it will iterate the lengths.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td><td><code>Array</code></td><td><p>array to split in parts</p>
</td>
    </tr><tr>
    <td>split_size</td><td><code>Number</code> | <code>Array.&lt;Number&gt;</code></td><td><p>split lengths to split array into</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Mod.split(Gen.spread(12), 3);
//=> [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ], [ 9, 10, 11 ] ] 

Mod.split(Gen.spread(12), [3, 2, -1]);
//=> [ [ 0, 1, 2 ], [ 3, 4 ], [ 5, 6, 7 ], [ 8, 9 ], [ 10, 11 ] ] 
```

* * *

<a name="spray"></a>

## spray(sprayer, sprayee) ⇒ <code>Array</code>
"Spray" the values of one array on the places of values of another array if 
the value is greater than 0, resulting in a new array where all non-zere 
values are replaced by values from the first array. If you have to ask "why?
" you may not find this useful... otherwise: 🤘

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>sprayer</td><td><code>Array</code></td><td><blockquote>
<p>Array to &quot;spray&quot; out over second array</p>
</blockquote>
</td>
    </tr><tr>
    <td>sprayee</td><td><code>Array</code></td><td><blockquote>
<p>Array containing non-zero positions to be sprayed</p>
</blockquote>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Mod.spray([7, 9, 12], [1, 0, 0, 1, 1, 0, 1, 0]);
//=> [ 7, 0, 0, 9, 12, 0, 7, 0 ] 

// works with 2D-arrays
Mod.spray([[5, 7, 9], [12, 14]], [1, 0, 1, 1, 0]);
//=> [ [ 5, 7, 9 ], 0, [ 12, 14 ], [ 5, 7, 9 ], 0 ]

// works with strings
Mod.spray(['c4', 'f4', 'g4'], [1, 0, 0, 1, 1, 0, 1, 0]);
//=> [ 'c4', 0, 0, 'f4', 'g4', 0, 'c4', 0 ] 
```

* * *

<a name="step"></a>

## step(...arrays) ⇒ <code>Array</code>
Combine 2 or multiple lists by alternating over them. This gives a similar 
result as [lace](#lace) except the output length is the lowest common 
multiple of the input lists so that every combination of consecutive values 
is included. A higher dimension in the array is preserved.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>...arrays</td><td><code>Array</code></td><td><p>arrays to step through</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// total steps is 2 so output is 4
Mod.step([0, 3], [7, 12]);
//=> [0, 7, 3, 12]

// total steps is now 6 before repetition, so output is 12
Mod.step([0, 3, 5], [7, 12]);
//=> [0, 7, 3, 12, 5, 7, 0, 12, 3, 7, 5, 12]

// works with 2D and multiple arrays
Mod.step([0, 3], [7, 12], [[19, 24]]);
//=> [0, 7, [19, 24], 3, 12, [19, 24]]
```

* * *

<a name="stretch"></a>

## stretch(input, size, [interp]) ⇒ <code>Array</code>
Stretch (or shrink) an array to a specific length, linearly interpolating 
between all values within the array. The minimum output length is 2 (which 
will be the outmost values from the array). Third optional argument sets the 
interpolation mode. Available modes are `none` (or `null`, `false`) and 
`linear`.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td><td><code>Array</code></td><td><p>array to stretch</p>
</td>
    </tr><tr>
    <td>size</td><td><code>Array</code></td><td><p>outputlength of array</p>
</td>
    </tr><tr>
    <td>[interp]</td><td><code>Bool</code></td><td><p>interpolation on/off (optional, default=true)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Mod.stretch([0, 12, 3, 7], 24);
//=> [ 0, 1.56, 3.13,  4.69, 6.26, 7.82, 9.39, 10.95, 
//    11.60, 10.43, 9.26, 8.08, 6.91, 5.73, 4.56, 3.39, 
//    3.34, 3.86, 4.391, 4.91, 5.43, 5.95, 6.478, 7 ] 

//   11.61 ┼       ╭╮               
//   10.45 ┤      ╭╯╰╮              
//    9.29 ┤     ╭╯  ╰╮             
//    8.13 ┤    ╭╯    ╰╮            
//    6.97 ┤    │      ╰╮        ╭─ 
//    5.80 ┤   ╭╯       ╰╮     ╭─╯  
//    4.64 ┤  ╭╯         ╰╮  ╭─╯    
//    3.48 ┤ ╭╯           ╰──╯      
//    2.32 ┤ │                      
//    1.16 ┤╭╯                      
//    0.00 ┼╯

// set interpolation to 'none'
Mod.stretch([0, 12, 3, 7], 10, 'none');
//=> 12.00 ┼  ╭──╮    
//    9.60 ┤  │  │    
//    7.20 ┤  │  │  ╭ 
//    4.80 ┤  │  │  │ 
//    2.40 ┤  │  ╰──╯ 
//    0.00 ┼──╯ 
```

* * *


***

&copy; 2020-2026 Timo Hoogland (@tmhglnd), www.timohoogland.com, MIT License