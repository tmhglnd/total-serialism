/**
 * @file statistic.js
 * @description Part of the 'total-serialism' Package. 
 * 
 * Statistical related methods and algorithms that can be helpful in
 * analysis of number sequences, melodies, rhythms and more
 * 
 * @copyright 2020-2026 Timo Hoogland (@tmhglnd), www.timohoogland.com
 * @license MIT License
 */

const Mod = require('./transform');

const { maximum, minimum, flatten, toArray, lcm, gcd } = require('./utility');

/**
 * Sort an array in ascending or descending order. When strings are included 
 * they are sorted in alphabetical order with all numbers in the beginning.
 * @example
 * ```js
 * // Sort an array of numbers ascending 
 * Stat.sort([-10, 8, 6, -12, -6, -7, 2, 4, 3, 11]);
 * //=> [ -12, -10, -7, -6, 2, 3, 4, 6, 8, 11 ] 
 * 
 * // Sort an array of numbers descending with negative second argument
 * Stat.sort([-10, 8, 6, -12, -6, -7, 2, 4, 3, 11], -1);
 * //=> [ 11, 8, 6, 4, 3, 2, -6, -7, -10, -12 ]
 * 
 * // Sort a mixed array of strings and numbers
 * Stat.sort([10, 3.14, 'snare', 'kick', 5, -6, 'hat']);
 * //=> [ -6, 10, 3.14, 5, 'hat', 'kick', 'snare' ] 
 * ```
 * 
 * @param {Array} array - array to sort
 * @param {Number=} direction - postive/negative value indicates sorting direction (optional, default = 1)
 * @returns {Array} sorted array
 */ 
function sort(a=[0], d=1){
	a = toArray(a);
	let arr;
	if (a.map(x => typeof x).includes('string')){
		arr = a.slice().sort();
	} else {
		arr = a.slice().sort((a,b) => { return a-b; })
	}
	if (d < 0){
		return arr.reverse();
	}
	return arr;
}
exports.sort = sort;

// Return the biggest value from an array
// 
// @param {NumberArray} -> input array
// @return {Number} -> biggest value
// 
exports.maximum = maximum;
exports.max = maximum;

// Return the lowest value from an array
// 
// @param {NumberArray} -> input array
// @return {Number} -> lowest value
// 
exports.minimum = minimum;
exports.min = minimum;
 
/**
 * Get the average (the arithmetic mean) value from an array. This is one 
 * method of the three measures of central tendencies (Mean, Median, Mode).
 * 
 * Alias: `average()`
 * @example
 * ```js
 * Stat.mean([1, 2, 3, 4, 5, 6, 7, 8, 9]);
 * //=> 5
 * 
 * Stat.average([2, -6, 2, 0, 10, 9, -2, 5, -8, -11, 1, -3]);
 * //=> -0.0833
 * ```
 * @param {Array} array - array to take the average of
 * @param {Bool=} deep - enable/disable the deep flag for n-dim arrays (default = true)
 * @returns {Number} the mean
 */
function mean(a=[0], d=true){
	if (!Array.isArray(a)) { return a; }
	if (d) { a = flatten(a); }

	let s = 0;
	for (let i in a){
		s += isNaN(a[i])? 0 : a[i];
	}
	return s / a.length;
}
exports.mean = mean;
exports.average = mean;

/**
 * Return the center value (the median) from an array. This is one method of 
 * the three measures of central tendencies (Mean, Median, Mode). If array is 
 * even number of values the median is the average of the two center values. 
 * Ignores other datatypes then Number and Boolean
 * 
 * Alias: `center()`
 * @example
 * ```js
 * Stat.median([1, 5, 6, 9, 13]);
 * //=> 6 
 * 
 * // Returns average of 2 middle values for even listlengths
 * // works with "official" statistics terminology
 * Stat.center([1, 7, 4, 2, 9, 5]);
 * //=> 4.5
 * ```
 * @param {Array} array - array to get the median from
 * @param {Bool=} deep - enable/disable the deep flag for n-dim arrays (default = true)
 * @returns {Number} the mean
 */
function median(a=[0], d=true){
	if (!Array.isArray(a)) { return a; }
	if (d) { a = flatten(a); }

	let arr = a.slice();
	if (arr.map(x => typeof x).includes('string')) { 
		arr = Mod.filterType(arr, ['number', 'boolean']);
	}
	arr = arr.sort((a,b) => { return a-b; });
	let c = Math.floor(arr.length/2);

	if (!(arr.length % 2)){
		return (arr[c] + arr[c-1]) / 2;
	}
	return arr[c];
}
exports.median = median;
exports.center = median;

/**
 * Returns the most common value (the mode) from an array as an array. This is 
 * one method of the three measures of central tendencies (Mean, Median, Mode). 
 * Returns an array in the case of a multi-modal system.
 * 
 * Alias: `common()`
 * 
 * @example
 * ```js
 * Stat.mode([8, 4, 3, 11, 9, 0, 11, 2, 10, 5, 11, 0]);
 * //=> [ 11 ] 
 * 
 * Stat.mode([8, [4, 3], 9, [9, 0, [2, 10], 5], 11, 0, 11]);
 * //=> [ 11 ] 
 * 
 * // In the case of a multi-modal system the array contains all common values
 * Stat.common([8, 4, 3, 9, 9, 0, 2, 10, 5, 11, 0, 11]);
 * //=> [ 0, 9, 11 ]
 * ```
 * 
 * @param {Array} array - array to get the mode from
 * @param {Bool=} deep - enable/disable the deep flag for n-dim arrays (default = true)
 * @returns {Number|Number[]} the mode or modes
 */
function mode(a=[0], d=true){
	if (!Array.isArray(a)) { return a; }
	if (d) { a = flatten(a); }
	
	// get all the unique occurances and the amount of times they occur
	let occurances = {};
	a.forEach((o) => {
		if (!occurances[o]){
			occurances[o] = 0;
		}
		occurances[o]++;
	});
	// for all the items save the best streak (or streaks)
	let modes = [];
	let streak = 0;
	Object.keys(occurances).forEach((o) => {
		if (occurances[o] > streak){
			streak = occurances[o];
			modes = [o];
		} else if (occurances[o] === streak){
			modes.push(o);
		}
	});
	// remap strings to numbers if possible
	return modes.map(m => isNaN(m) ? m : Number(m));
}
exports.mode = mode;
exports.common = mode;
 
/**
 * Compare two arrays recursively and if all values of the array and subarrays 
 * are equal to eachother return `true`, else return `false`. 
 * @example
 * ```js
 * // works with multidimensional arrays
 * Stat.compare([0, [3, [7, 5]], 12], [0, [3, [7, 5]], 12]);
 * //=> true 
 * 
 * // works with strings as well
 * Stat.compare(['c', ['e', 'g']], ['c', ['e', 'g']]);
 * //=> true 
 * 
 * // type has to match too
 * Stat.compare([0, 5, 7], [0, '5', 7]);
 * //=> false 
 * ```
 * @param {Array} left - the first array to compare
 * @param {Array} right - the second array to compare
 * @returns {Bool}
 */
function compare(a1=[0], a2){
	a1 = toArray(a1);
	a2 = toArray(a2);
	if (a1.length !== a2.length){
		return false;
	}
	for (let i in a1){
		if (Array.isArray(a1[i])){
			return compare(a1[i], a2[i]);
		} else if (a1[i] !== a2[i]){
			return false;
		}
	}
	return true;
}
exports.compare = compare;
// exports.equal = compare; (deprecated for equal in utility operator)

/**
 * Return the difference between consecutive numbers in an array. With an 
 * optional flag set to true as second argument the function also returns the 
 * difference between the first and last value in the array. With melodic 
 * content from a chromatic scale this can be seen as a list of intervals that, 
 * when followed from the same note, results in the same melody.
 * 
 * Alias: `delta()`, `diff()`
 * @example
 * ```js 
 * Stat.change([0, 3, 7, 0, 12, 9, 5, 7]);
 * //=> [ 3, 4, -7, 12, -3, -4, 2 ] 
 * 
 * // also returns difference between last and first value in array
 * Stat.change([0, 3, 7, 0, 12, 9, 5, 7], true);
 * //=> [ 3, 4, -7, 12, -3, -4, 2, -7 ] 
 * ```
 * @param {Array} array - array to get the difference between each value from
 * @param {Bool=} first_last_diff - also include the difference between first and last elements of array (optional, default = false)
 * @returns {Array}
 */
function change(a=[0, 0], l=false){
	if (a.length < 2 || !Array.isArray(a)){
		return [0];
	}
	let len = a.length;
	let arr = [];
	for (let i=1; i<len; i++){
		arr.push(a[i] - a[i-1]);
	}
	// optionally also return diff from first and last value
	if (l){ arr.push(a[0] - a[a.length-1]); }
	return arr;
}
exports.change = change;
exports.delta = change;
exports.difference = change;
exports.diff = change;

// Calculate the Greatest Common Divisor from an array
// The function uses the algorithm described in _gcd() above
// 
// @param {Array} -> array to calculate on
// @return {Int} -> greatest common divisor
// 
exports.greatestCommonDivisor = gcd;
exports.gcd = gcd;

// Calculate the Least Common Multiple from an array
// the function uses the algorithm described in _lcd() above
//
// @param {Array} -> array to calculate on
// @return {Int} -> least common multiple
// 
exports.leastCommonMultiple = lcm;
exports.lcm = lcm;
