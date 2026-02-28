# Statistic

A set of methods from Statistics and Probability Theory that allow for analysis of number sequences for statistical purposes. For example getting the average value or the most common value from an array. 

## Include

```js
const Stat = require('total-serialism').Statistic;

Stat.sort();
Stat.average();
```

OR

```js
const { sort, average } = require('total-serialism').Statistic;

sort();
average();
```

## Functions

* [sort(array, [direction])](#sort) ⇒ <code>Array</code>
* [mean(array, [deep])](#mean) ⇒ <code>Number</code>
* [median(array, [deep])](#median) ⇒ <code>Number</code>
* [mode(array, [deep])](#mode) ⇒ <code>Number</code> \| <code>Array.&lt;Number&gt;</code>
* [compare(left, right)](#compare) ⇒ <code>Bool</code>
* [change(array, [first_last_diff])](#change) ⇒ <code>Array</code>

<a name="sort"></a>

## sort(array, [direction]) ⇒ <code>Array</code>
Sort an array in ascending or descending order. When strings are included 
they are sorted in alphabetical order with all numbers in the beginning.

**Kind**: global function  
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

<a name="mean"></a>

## mean(array, [deep]) ⇒ <code>Number</code>
Get the average (the arithmetic mean) value from an array. This is one 
method of the three measures of central tendencies (Mean, Median, Mode).

Alias: `average()`

**Kind**: global function  
**Returns**: <code>Number</code> - the mean  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>array</td><td><code>Array</code></td><td><p>array to take the average of</p>
</td>
    </tr><tr>
    <td>[deep]</td><td><code>Bool</code></td><td><p>enable/disable the deep flag for n-dim arrays (default = true)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Stat.mean([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//=> 5

Stat.average([2, -6, 2, 0, 10, 9, -2, 5, -8, -11, 1, -3]);
//=> -0.0833
```

* * *

<a name="median"></a>

## median(array, [deep]) ⇒ <code>Number</code>
Return the center value (the median) from an array. This is one method of 
the three measures of central tendencies (Mean, Median, Mode). If array is 
even number of values the median is the average of the two center values. 
Ignores other datatypes then Number and Boolean

Alias: `center()`

**Kind**: global function  
**Returns**: <code>Number</code> - the mean  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>array</td><td><code>Array</code></td><td><p>array to get the median from</p>
</td>
    </tr><tr>
    <td>[deep]</td><td><code>Bool</code></td><td><p>enable/disable the deep flag for n-dim arrays (default = true)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Stat.median([1, 5, 6, 9, 13]);
//=> 6 

// Returns average of 2 middle values for even listlengths
// works with "official" statistics terminology
Stat.center([1, 7, 4, 2, 9, 5]);
//=> 4.5
```

* * *

<a name="mode"></a>

## mode(array, [deep]) ⇒ <code>Number</code> \| <code>Array.&lt;Number&gt;</code>
Returns the most common value (the mode) from an array as an array. This is 
one method of the three measures of central tendencies (Mean, Median, Mode). 
Returns an array in the case of a multi-modal system.

Alias: `common()`

**Kind**: global function  
**Returns**: <code>Number</code> \| <code>Array.&lt;Number&gt;</code> - the mode or modes  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>array</td><td><code>Array</code></td><td><p>array to get the mode from</p>
</td>
    </tr><tr>
    <td>[deep]</td><td><code>Bool</code></td><td><p>enable/disable the deep flag for n-dim arrays (default = true)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Stat.mode([8, 4, 3, 11, 9, 0, 11, 2, 10, 5, 11, 0]);
//=> [ 11 ] 

Stat.mode([8, [4, 3], 9, [9, 0, [2, 10], 5], 11, 0, 11]);
//=> [ 11 ] 

// In the case of a multi-modal system the array contains all common values
Stat.common([8, 4, 3, 9, 9, 0, 2, 10, 5, 11, 0, 11]);
//=> [ 0, 9, 11 ]
```

* * *

<a name="compare"></a>

## compare(left, right) ⇒ <code>Bool</code>
Compare two arrays recursively and if all values of the array and subarrays 
are equal to eachother return `true`, else return `false`.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>left</td><td><code>Array</code></td><td><p>the first array to compare</p>
</td>
    </tr><tr>
    <td>right</td><td><code>Array</code></td><td><p>the second array to compare</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// works with multidimensional arrays
Stat.compare([0, [3, [7, 5]], 12], [0, [3, [7, 5]], 12]);
//=> true 

// works with strings as well
Stat.compare(['c', ['e', 'g']], ['c', ['e', 'g']]);
//=> true 

// type has to match too
Stat.compare([0, 5, 7], [0, '5', 7]);
//=> false 
```

* * *

<a name="change"></a>

## change(array, [first_last_diff]) ⇒ <code>Array</code>
Return the difference between consecutive numbers in an array. With an 
optional flag set to true as second argument the function also returns the 
difference between the first and last value in the array. With melodic 
content from a chromatic scale this can be seen as a list of intervals that, 
when followed from the same note, results in the same melody.

Alias: `delta()`, `diff()`

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>array</td><td><code>Array</code></td><td><p>array to get the difference between each value from</p>
</td>
    </tr><tr>
    <td>[first_last_diff]</td><td><code>Bool</code></td><td><p>also include the difference between first and last elements of array (optional, default = false)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js 
Stat.change([0, 3, 7, 0, 12, 9, 5, 7]);
//=> [ 3, 4, -7, 12, -3, -4, 2 ] 

// also returns difference between last and first value in array
Stat.change([0, 3, 7, 0, 12, 9, 5, 7], true);
//=> [ 3, 4, -7, 12, -3, -4, 2, -7 ] 
```

* * *


***

&copy; 2020-2026 Timo Hoogland (@tmhglnd), www.timohoogland.com, MIT License