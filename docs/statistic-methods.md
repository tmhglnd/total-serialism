
# Statistic

A set of methods from Statistics and Probability Theory that allow for analysis of number sequences for statistical purposes. For example getting the average value or the most common value from an array. 

## Include

```js
const Stat = require('total-serialism').Statistic;
```

# Methods

- [sort](#sort)
- [average](#average) (mean)
- [center](#center) (median)
- [common](#common) (mode)
- [maximum](#maximum)
- [minimum](#minimum)
- [change](#change)
- [compare](#compare)

## sort

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

Measures of central tendencies (Mean, Median, Mode)

## average

Get the average (the artihmetic mean) value from an array

**arguments**
- {Array} -> the array to take the average of
- {Bool} -> enable/disable the deep flag for n-dim arrays (default=true)

```js
Stat.average([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//=> 5

Stat.average([2, -6, 2, 0, 10, 9, -2, 5, -8, -11, 1, -3]);
//=> -0.0833

// Alternative: Stat.mean()
```

## center

Return the center value (the median) from an array

**arguments**
- {Array} -> the array to get the median from
- {Bool} -> enable/disable the deep flag for n-dim arrays (default=true)

```js
Stat.center([1, 5, 6, 9, 13]);
//=> 6 

// Returns average of 2 middle values for even listlengths
// works with "official" statistics terminology
Stat.center([1, 7, 4, 2, 9, 5]);
//=> 4.5

// Alternative: Stat.median()
```

## common

Returns the most common value (the mode) from an array as an array

**arguments**
- {Array} -> the array to get the mode from
- {Bool} -> enable/disable the deep flag for n-dim arrays (default=true)

```js
Stat.common([8, 4, 3, 11, 9, 0, 11, 2, 10, 5, 11, 0]);
//=> [ 11 ] 

Stat.common([8, [4, 3], 9, [9, 0, [2, 10], 5], 11, 0, 11]);
//=> [ 11 ] 

// In the case of a multi-modal system the array contains all common values
Stat.common([8, 4, 3, 9, 9, 0, 2, 10, 5, 11, 0, 11]);
//=> [ 0, 9, 11 ] 

// Alternative: Stat.mode()
```

## minimum

Return the minimum value from an array (Also part of `.Statistic`)

```js
Util.minimum([-38, -53, -6, 33, 88, 32, -8, 73]);
//=> -53 

// Also works with n-dimensional arrays
Stat.minimum([-38, [-53, [-6, 33], 88, 32], [-8, 73]]);
//=> -53 

// Alternative: Util.min()
```

## maximum

Return the maximum value from an array (Also part of `.Statistic`)

```js
Util.maximum([-38, -53, -6, 33, 88, 32, -8, 73]);
//=> 88 

// Also works with n-dimensional arrays
Stat.maximum([-38, [-53, [-6, 33], 88, 32], [-8, 73]]);
//=> 88 

// Alternative: Util.max()
```

## change

Return the difference between consecutive numbers in an array

```js 
Util.change([0, 3, 7, 0, 12, 9, 5, 7]);
//=> [ 3, 4, -7, 12, -3, -4, 2 ] 
```

## compare

Compare two arrays recursively and if all values of the array and subarrays are equal to eachother return a `true` boolean, else returns `false`. 

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