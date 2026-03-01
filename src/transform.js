/**
 * @file transform.js
 * @description Part of the 'total-serialism' Package. 
 * 
 * Methods that transform number sequences.
 * These are called the "transformers"
 * - A transformer always takes an input array as the first argument
 * - A transformer never destructively changes the input array
 * The output of the transformer is the modified input array(s)
 * 
 * TODO:
 * - make invert() work with note-values 'c' etc.
 * 
 * credits:
 * - Many functions are based on Laurie Spiegel's suggestion to 
 * "extract a basic "library" consisting of the most elemental 
 * transformations which have consistently been successfully used on 
 * musical patterns, a basic group of "tried-and-true" musical 
 * manipulations.", in Manipulation of Musical Patterns (1981)
 * 
 * @copyright 2020-2026 Timo Hoogland (@tmhglnd), www.timohoogland.com
 * @license MIT License
 */

// require the Utility methods
// const Rand = require('./gen-stochastic');
const { sort } = require('./statistic');
const { flat, add, max, min, lerp, toArray, size, unique, arrayCombinations } = require('./utility');

/**
 * Duplicate an array multiple times, optionaly add an offset to every value 
 * when duplicating. Also works with 2-dimensonal arrays. When using strings 
 * the values will be concatenated instead of added.
 * @param {Number[]|String[]} array - array to clone
 * @param {...Number} clone - clone with integers, offset or string concatenation
 * @returns {Number[]|String[]}
 * @example
 * Mod.clone([0, 5, 7], 0, 12, -12); 
 * //=> [ 0, 5, 7, 12, 17, 19, -12, -7, -5 ] 
 * 
 * // works with multidimensional arrays
 * Mod.clone([0, 5, [7, 12]], 0, 12, -12);
 * //=> [ 0, 5, [ 7, 12 ], 12, 17, [ 19, 24 ], -12, -7, [ -5, 0 ] ]
 * 
 * // works with strings
 * Mod.clone(['c', ['e', 'g']], ['4', '5', '#3']);
 * //=> [ 'c4', [ 'e4', 'g4' ], 'c5', [ 'e5', 'g5' ], 'c#3', [ 'e#3', 'g#3' ] ]
 */ 
function clone(a=[0], ...c){
	a = toArray(a);
	if (!c.length) { 
		// return input if no clone arguments
		return a;
	} else { 
		// flatten clone array if multi-dimensional
		c = flat(c); 
	}
	let arr = [];
	for (let i=0; i<c.length; i++){
		arr = arr.concat(a.map(v => add(v, c[i])));
	}
	return arr;
}
exports.clone = clone;

/**
 * Join arrays into one array. More than 2 arrays as arguments is possible.
 * 
 * Alias: `combine()`
 * 
 * @param {...Array} arrays - Multiple arrays to combine
 * @returns {Array}
 * @example
 * Mod.join([0, 5], 12, [7, 3]); 
 * //=> [ 0, 5, 12, 7, 3 ] 
 * 
 * // works with 2D-arrays
 * Mod.join([0, 5], [[12, 19], 7]);
 * //=> [ 0, 5, [ 12, 19 ], 7 ] 
 * 
 * // works with strings
 * Mod.join(['c4', 'e4'], ['g4', 'f4']);
 * //=> [ 'c4', 'e4', 'g4', 'f4' ]
 */
function combine(...arrs){
	if (!arrs.length){ return [0]; }
	let arr = [];
	for (let i=0; i<arrs.length; i++){
		arr = arr.concat(arrs[i]);
	}
	return arr;
}
exports.combine = combine;
exports.join = combine;
 
/**
 * Duplicate an array a certain amount of times.
 *
 * @alias copy
 * @param {Array} array - array to duplicate
 * @param {Int} duplicates - amount of duplicates (optional, default = 2)
 * @example
 * Mod.copy([0, 7, 12], 3);
 * //=> [ 0, 7, 12, 0, 7, 12, 0, 7, 12 ] 
 * 
 * // works with 2D-arrays
 * Mod.copy([0, [3, 7], 12], 2);
 * //=> [ 0, [ 3, 7 ], 12, 0, [ 3, 7 ], 12 ] 
 * 
 * // works with strings
 * Mod.copy(['c', 'f', 'g'], 3);
 * //=> [ 'c', 'f', 'g', 'c', 'f', 'g', 'c', 'f', 'g' ] 
 */
function duplicate(a=[0], d=2){
	let arr = [];
	for (let i=0; i<Math.max(1,d); i++){
		arr = arr.concat(a);
	}
	return arr;
}
exports.duplicate = duplicate;
exports.copy = duplicate;
exports.dup = duplicate;

/**
 * Add zeroes to an array with a number sequence. The division determines the 
 * amount of values per bar. The total length equals the bars times division. 
 * This method is very useful for rhythms that must occur once in a while, but 
 * can also be use for melodic phrases. Also works with strings.
 * 
 * @param {Array} array - array to use every n-bars
 * @param {Int=} bars - amount of bars (optional, default=1)
 * @param {Int=} division - amount of values per bar (optional, defaul=16)
 * @param {Value=} padding - pad value for the added items (optional, default=0)
 * @param {Number=} shift - optional shift in n-bars (optional, default=0)
 * @returns {Array}
 * @example
 * // add zeroes to a rhythm to make it play once over a certain amount of bars
 * Mod.every([1, 0, 1, 1, 1], 2, 8);
 * //=> [ 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
 *  
 * // change the padding value with an optional 3rd argument
 * Mod.every([3, 0, 7, 9, 11], 2, 8, 12);
 * //=> [ 3, 0, 7, 9, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12 ]
 * 
 * // change the shift (rotation) with an optional 4th argument
 * Mod.every([1, 0, 0, 1, 1], 2, 8, 0, 1);
 * //=> [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0 ]
 * 
 * // works with 2D-array
 * Mod.every([3, [0, 7, 9], 11], 1, 12);
 * //=> [ 3, [ 0, 7, 9 ], 11, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] 
 * 
 * // Works with strings
 * Mod.every(['c4', 'eb4', 'g4', 'f4', 'eb4'], 2, 8, 'r');
 * //=> [ 'c4',  'eb4', 'g4', 'f4',
 * //     'eb4', 'r',   'r',  'r',
 * //     'r',   'r',   'r',  'r',
 * //     'r',   'r',   'r',  'r' ] 
 */
function every(a=[0], bars=1, div=16, pad=0, shift=0){
	let len = Math.floor(bars * div);
	let sft = Math.floor(shift * div);
	return padding(a, len, pad, sft);
}
exports.every = every;

/**
 * Pad an array with zeroes (or any other value) up to the length specified. 
 * The padding value can optionally be changed and the shift argument rotates 
 * the list n-steps left or right (negative). This method is similar to `every()
 * ` except arguments are not specified in musical bars/divisions but in array 
 * length. A shorter length than input list will slice the output list.
 * @alias pad
 * @param {Array} array - Array to pad
 * @param {Int=} size - output length of array (optional, default=16)
 * @param {Value=} pad - padding value for the added items (optional, default=0)
 * @param {Number=} shift - shift in steps (optional, default=0)
 * @returns {Array}
 * @example
 * Mod.pad([3, 7, 11, 12], 9);
 * //=> [ 3, 7, 11, 12, 0, 0, 0, 0, 0 ] 
 * 
 * Mod.pad(['c', 'f', 'g'], 11, '-', 4);
 * //=> [ '-', '-', '-', '-', 'c', 'f', 'g', '-', '-', '-', '-' ] 
 */
function padding(a=[0], length=16, pad=0, shift=0){
	a = toArray(a);	
	length = size(length);
	
	let len = length - a.length;
	if (len < 1) {
		return a.slice(0, length);
	}
	let arr = new Array(len).fill(pad);
	return rotate(a.concat(arr), shift);
}
exports.padding = padding;
exports.pad = padding;

/**
 * Flatten a multidimensional array. Optionally set the depth for the 
 * flattening with the second argument.
 * @alias flat
 * @param {Array} array - array to flatten
 * @param {Number} depth - depth of flatten (default=Infinity)
 * @returns {Array}
 * @example
 * Mod.flatten([1, [2, 3, [ 4 ], 5], 6]);
 * //=> [ 1, 2, 3, 4, 5, 6 ] 
 */
exports.flatten = flat;
exports.flat = flat;

/**
 * Filter one or multiple values from an array
 * @param {Array} array - array to filter
 * @param {Number|String|Array} filter - values to filter
 * @returns {Array}
 * @example
 * Mod.filter([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [3, 8, 10]);
 * //=> [ 0, 1, 2, 4, 5, 6, 7, 9 ] 
 */
function filter(a=[0], f){
	let arr = (Array.isArray(a))? a.slice() : [a];
	f = toArray(f);

	for (var i=0; i<f.length; i++){
		let index = arr.indexOf(f[i]);
		while (index >= 0){
			arr.splice(index, 1);
			index = arr.indexOf(f[i]);
		}
	}
	return arr;
}
exports.filter = filter;
 
/**
 * Filter one or multiple values from an array based on their type
 * @param {Array} array - array to filter
 * @param {String} type - datatype to filter (optional, default=number)
 * @returns {Array}
 * @example
 * // default filter is set as number
 * Mod.filterType([0, 'foo', {bar : true}, 1, undefined]);
 * //=> [ 0, 1 ] 
 * 
 * // return only a specific datatype (in this case you specify the type to return)
 * Mod.filterType([0, 1, [1, 2], 'foo', 2, null, true, {bar: 5}, 3.14, undefined], 'number');
 * //=> [ 0, 1, 2, 3.14 ] 
 */
function filterType(a=[0], t='number'){
	a = (Array.isArray(a))? a.slice() : [a];
	t = toArray(t);

	let types = a.map(x => typeof x);	
	let arr = [];
	for (let i in t){
		let index = types.indexOf(t[i]);
		while (index >= 0){
			arr.push(a[index]);
			a.splice(index, 1);
			types.splice(index, 1);
			index = types.indexOf(t[i]);
		}
	}
	return arr;
}
exports.filterType = filterType;
exports.typeFilter = filterType;
// exports.tFilter = filterType; // removed, because confusing

/**
 * Invert an array of values by mapping the lowest value to the highest value 
 * and vice versa, flipping everything in between. Second optional argument 
 * sets the center to flip values against. Third optional argument sets a range 
 * to flip values against.
 * @param {Number[]} array - Array to invert
 * @param {Int} center - invert center / low range (optional, default=array-minimum)
 * @param {Int} upper - high range (optional, default=array-maximum)
 * @returns {Number[]}
 * @example
 * // invert an array between the highest and lowest values
 * Mod.invert([-1, 2, 7, 9, 14]);
 * //=> [ 14, 11, 6, 4, -1 ] 
 * 
 * // invert an array around a specified center point
 * Mod.invert([-1, 2, 7, 9, 14], 5);
 * //=> [ 11, 8, 3, 1, -4 ] 
 * 
 * // invert an array around specified low and high points
 * Mod.invert([-1, 2, 7, 9, 14], 0, 12);
 * //=> [ 13, 10, 5, 3, -2 ] 
 * 
 * // works with multidimensional arrays
 * Mod.invert([-1, 2, [[7, 9], 14]]);
 * //=> [ 14, 11, [ [ 6, 4 ], -1 ] ] 
 * @todo Make work with note-values like 'c' or 'c4', etc.
 */
function invert(a=[0], lo, hi){
	a = toArray(a);

	if (lo === undefined){
		// if no center value set lo/hi based on min/max
		hi = max(a);
		lo = min(a);
	} else if (hi === undefined){
		// if no hi defined set hi to be same as lo
		hi = lo;
	}
	return a.slice().map(v => {
		// apply the algorithm recursively for all items
		if (Array.isArray(v)){
			return invert(v, lo, hi);
		}
		return hi - v + lo;
	});
}
exports.invert = invert;

/**
 * Interleave two or more arrays. Works with every length of an array. Works 
 * with 2D-arrays and string arrays as well.
 * 
 * Alias: `zip()`
 * 
 * @param {...Array} arrays - two or more arrays to interleave
 * @returns {Array}
 * @example
 * // lace multiple arrays of different lengths
 * Mod.lace([0, 0, 0], [7, 7], [9, 9, 9, 9]);
 * //=> [ 0, 7, 9, 0, 7, 9, 0, 9, 9 ] 
 * 
 * // works with multidimensional arrays
 * Mod.lace([0, [0, 0]], [[7,7]], [9, [9, 9], 9]);
 * //=> [ 0, [ 7, 7 ], 9, [ 0, 0 ], [ 9, 9 ], 9 ] 
 * 
 * // works with strings
 * Mod.lace(['c', 'c', 'c', 'c'], ['g', 'g'], ['e']);
 * //=> [ 'c', 'g', 'e', 'c', 'g', 'c', 'c' ] 
 */
function lace(...arrs){
	if (!arrs.length){ return [0]; }
	// get the length of longest list
	var l = 0;
	for (let i=0; i<arrs.length; i++){
		arrs[i] = toArray(arrs[i]);
		l = Math.max(arrs[i].length, l);
	}
	// for the max length push all values of the various lists
	var arr = [];
	for (var i=0; i<l; i++){
		for (var k=0; k<arrs.length; k++){
			let v = arrs[k][i];
			if (v !== undefined){ arr.push(v); }
		}
	}
	return arr;
}
exports.lace = lace;
exports.zip = lace;
 
/**
 * Build an array of items based on an array of indeces looking up values from 
 * an input array. The values are wrapped within the length of the lookup 
 * array. Works with n-dimensional arrays.
 * 
 * @param {Array} indeces - Array with indeces to lookup
 * @param {Array} values - Array with values returned from lookup
 * @returns {Array} Looked up values
 * @example
 * // first array is the index, second array are the items to lookup
 * Mod.lookup([0, 1, 1, 2, 0, 2, 2, 1], ['c4', 'e4', 'f4', 'g4']);
 * //=> [ 'c4', 'e4', 'e4', 'f4', 'c4', 'f4', 'f4', 'e4' ] 
 * 
 * // works with multidimensional arrays and leaves nesting intact
 * Mod.lookup([0, [1, 1, [2, 3], 0], 2], ['c4', 'e4', 'f4', 'g4']);
 * //=> [ 'c4', [ 'e4', 'e4', [ 'f4', 'g4' ], 'c4' ], 'f4' ] 
 * 
 * // indices are wrapped between listlength
 * Mod.lookup([-2, 5, 7, 12], ['c4', 'e4', 'f4', 'g4']);
 * //=> [ 'f4', 'e4', 'g4', 'c4' ] 
 * 
 * // indices are floored if floating point values
 * Mod.lookup([0.999, 2.78, 3.14, 1.54], ['c4', 'e4', 'f4', 'g4']);
 * //=> [ 'c4', 'f4', 'g4', 'e4' ] 
 * 
 * // ignores non-numeric values
 * Mod.lookup([0, 'foo', ['1', 'bar']], [1, 2, 3]);
 * //=> [ 1, [ 2 ] ] 
 */
function lookup(idx=[0], arr=[0]){
	idx = toArray(idx);
	arr = toArray(arr);
	let a = [];
	let len = arr.length;
	for (let i=0; i<idx.length; i++){
		// recursively lookup values for multidimensional arrays
		if (Array.isArray(idx[i])){
			a.push(lookup(idx[i], arr));
		} else {
			if (!isNaN(idx[i])){
				let look = (Math.floor(idx[i]) % len + len) % len;
				a.push(arr[look]);
			}
		}
	}
	return a;
}
exports.lookup = lookup;

/**
 * Merge all values of multiple arrays on the same index into a 2D array. 
 * Preserves length of longest list.
 * 
 * @param {...Array} arrays -> two or more arrays to be merged
 * @returns {Array}
 * @example
 * // merge multiple arrays into a 2D-array
 * Mod.merge([0, 0, 0], [5, 5], [7, 7, 7, 7]);
 * //=> [ [ 0, 5, 7 ], [ 0, 5, 7 ], [ 0, 7 ], [ 7 ] ] 
 * 
 * // works with strings
 * Mod.merge(['c4', 'c4'], ['f4'], ['g4', 'g4', 'g4']);
 * //=> [ [ 'c4', 'f4', 'g4' ], [ 'c4', 'g4' ], [ 'g4' ] ] 
 * 
 * // 2D-arrays are concatenated to the other arrays
 * Mod.merge([['c4', 'e4'], 'c4'], [['f4', 'a4']], ['g4', 'g4']);
 * //=> [ [ 'c4', 'e4', 'f4', 'a4', 'g4' ], [ 'c4', 'g4' ] ] 
 */
function merge(...arrs){
	if (!arrs.length){ return [0]; }
	let l = 0;
	for (let i=0; i<arrs.length; i++){
		arrs[i] = toArray(arrs[i]);
		l = Math.max(arrs[i].length, l);
	}
	let arr = [];
	for (let i=0; i<l; i++){
		let a = [];
		for (let k=0; k<arrs.length; k++){
			let v = arrs[k][i];
			if (v !== undefined){ 
				if (Array.isArray(v)) a.push(...v);
				else a.push(v);
			}
		}
		arr[i] = a;
	}
	return arr;
}
exports.merge = merge;

/**
 * Reverse an array and concatenate to the input creating a palindrome of the 
 * array. Add an optional true flag to remove the double on the reverse and end 
 * points.
 * 
 * Alias: `mirror()`
 * 
 * @alias palin
 * @param {Array} array - input array to transform to palindrome
 * @param {Bool} no_doubles - no-double flag (optional, default = false)
 * @returns {Array}
 * @example
 * // reverse and concatenate to the original array
 * Mod.palin([0, 5, 7, 12]);
 * //=> [ 0, 5, 7, 12, 12, 7, 5, 0] 
 * 
 * // works with 2D-array, removes doubles in center and end
 * Mod.palin([0, [5, 7], 9, 12], true);
 * //=> [ 0, [ 5, 7 ], 9, 12, 9, [ 5, 7 ] ] 
 * 
 * // works with strings
 * Mod.palin(['c4', 'f4', 'g4'], true);
 * //=> [ 'c4', 'f4', 'g4', 'f4' ] 
 */
function palindrome(arr, noDouble=false){
	if (arr === undefined){ return [0] };
	if (!Array.isArray(arr)){ return [arr] };
	
	let rev = arr.slice().reverse();
	if (noDouble){
		rev = rev.slice(1, rev.length-1);
	}
	return arr.concat(rev);
}
exports.palindrome = palindrome;
exports.palin = palindrome;
exports.mirror = palindrome;

/**
 * The pinky/pinkyUp technique takes an array and outputs a transformed array 
 * where the last value alternates between every other previous value in a left 
 * to right order. This function is inspired by the Ableton arpeggiator 
 * algorithms. For example a list of `[0 3 7 12 19]` results in `[0 19 3 19 7 
 * 19 12 19]`.
 * 
 * Alias: `pinkyUp`
 * @alias pinky
 * @param {Number[]} input - array to transform
 * @returns {Number[]}
 * @example
 * Mod.pinky([0, 3, 7, 12, 19])
 * //=> [ 0, 19, 3, 19, 7, 19, 12, 19 ]
 */
function pinkyUp(arr=[0]){
	if (arr === undefined){ return [0] };
	arr = toArray(arr);

	let pinky = arr.pop();
	if (arr.length < 1){ return [pinky] };

	let out = [];
	for (let i=0; i<arr.length; i++){
		out.push(arr[i]);
		out.push(pinky);
	}
	return out;
}
exports.pinkyUp = pinkyUp;
exports.pinky = pinkyUp;

/**
 * PinkyDown is similar to {@link pinky}, but in reverse order. For instance `
 * [0 3 7 12 19]` results in `[12 19 7 19 3 19 0 19]`.
 * @param {Number[]} input - array to transform
 * @returns {Number[]}
 * @example
 * Mod.pinkyDown([0, 3, 7, 12, 19])
 * //=> [12, 19, 7, 19, 3, 19, 0, 19]
 */
function pinkyDown(arr=[0]){
	if (arr === undefined){ return [0] };
	arr = toArray(arr);

	let pinky = arr.pop();
	return pinkyUp(combine(reverse(arr), pinky));
}
exports.pinkyDown = pinkyDown;

/**
 * PinkyUpDown is similar to {@link pinky} and {@link pinkyDown} and is 
 * basically a combination of both. For instance `[0 3 7 12 19]` results in `[0 
 * 19 3 19 7 19 12 19 7 19 3 19]`.
 * @param {Number[]} input - array to transform
 * @returns {Number[]}
 * @example
 * Mod.pinkyUpDown([0, 3, 7, 12, 19])
 * //=> [0, 19, 3, 19, 7, 19, 12, 19, 7, 19, 3, 19]
 */
function pinkyUpDown(arr=[0]){
	if (arr === undefined){ return [0] };
	arr = toArray(arr);

	let pinky = arr.pop();
	return pinkyUp(combine(palindrome(arr, true), pinky));
}
exports.pinkyUpDown = pinkyUpDown;

/**
 * The thumb/thumbUp technique takes an array and outputs a transformed array 
 * where the first value alternates between every other value of the array in a 
 * left to right order. This is inspiredy by the Ableton arpeggiator 
 * algorithms. For example `[0 3 7 12 19]` results in `[0 3 0 7 0 12 0 19]`.
 * 
 * Alias: `thumbUp()`
 * @alias thumb
 * @param {Number[]} input - array to transform
 * @returns {Number[]}
 * @example
 * Mod.thumbUp([0, 3, 7, 12, 19])
 * //=> [0, 3, 0, 7, 0, 12, 0, 19]
 */
function thumbUp(arr=[0]){
	if (arr === undefined){ return [0] };
	arr = toArray(arr);

	let thumb = arr.shift();
	if (arr.length < 1){ return [thumb] };

	let out = [];
	for (let i=0; i<arr.length; i++){
		out.push(thumb);
		out.push(arr[i]);
	}
	return out;
}
exports.thumbUp = thumbUp;
exports.thumb = thumbUp;

/**
 * Similar to {@link thumb}, but in reverse order. For instance `[0 3 7 12 19]` 
 * results in `[0 19 0 12 0 7 0 3]`.
 * @param {Number[]} input - array to transform
 * @returns {Number[]}
 * @example
 * Mod.thumbDown([0, 3, 7, 12, 19])
 * //=> [0, 19, 0, 12, 0, 7, 0, 3]
 */
function thumbDown(arr=[0]){
	if (arr === undefined){ return [0] };
	arr = toArray(arr);

	return thumbUp(combine(arr.shift(), reverse(arr)));
}
exports.thumbDown = thumbDown;

/**
 * Similar to {@link thumb} and {@link thumbDown}, basically a combination of 
 * both. Creates a palindrome of the notes. For instance `[0 3 7 12 19]` 
 * results in `[0 3 0 7 0 12 0 19 0 12 0 7]`.
 * @param {Number[]} input - array to transform
 * @returns {Number[]}
 * @example
 * Mod.thumbUpDown([0, 3, 7, 12, 19])
 * //=> [0, 3, 0, 7, 0, 12, 0, 19, 0, 12, 0, 7]
 */
function thumbUpDown(arr=[0]){
	if (arr === undefined){ return [0] };
	arr = toArray(arr);

	return thumbUp(combine(arr.shift(), palindrome(arr, true)));
}
exports.thumbUpDown = thumbUpDown;

/**
 * Repeat the values of an array n-times. Using an array as second argument for 
 * repeat times will iterate over that array alternating repetitions.
 * @param {Array} input - array with values to repeat
 * @param {Number|Number[]} repetitions - array or number of repetitions per value
 * @returns {Array}
 * @example
 * Mod.repeat([0, 5, 7], 3);
 * //=> [ 0, 0, 0, 5, 5, 5, 7, 7, 7 ] 
 * 
 * // us an array for repetitions per index
 * Mod.repeat(['c4', 'e4', 'f4', 'g4'], [1, 4, 2, 0]);
 * //=> [ 'c4', 'e4', 'e4', 'e4', 'e4', 'f4', 'f4' ] 
 * 
 * // works with multidimensional arrays
 * Mod.repeat([[0, 5], [7, 9, 12]], [2, 3]);
 * //=> [ 
 * // 	 [ 0, 5 ], 
 * //   [ 0, 5 ], 
 * //   [ 7, 9, 12 ], 
 * //   [ 7, 9, 12 ], 
 * //   [ 7, 9, 12 ] ]
 */
function repeat(arr=[0], rep=1){
	arr = toArray(arr);
	rep = toArray(rep);
	
	let a = [];
	for (let i=0; i<arr.length; i++){
		let r = rep[i % rep.length];
		r = (isNaN(r) || r < 0)? 0 : r;
		for (let k=0; k<r; k++){
			a.push(arr[i]);
		}
	}
	return a;
}
exports.repeat = repeat;

/**
 * Reverse the order of items in an array. Similar to JavaScripts `Array.reverse
 * ()` but doesn't change the original array and instead returns a copy.
 * 
 * Alias: `rev()`
 * @param {Array} input -> array to reverse
 * @returns {Array}
 * @example
 * Mod.reverse([0, 5, 7, 12]);
 * //=> [ 12, 7, 5, 0 ] 
 * 
 * // works with strings and 2D-arrays
 * Mod.reverse(['c4', ['e4', 'f4'], 'g4']);
 * //=> [ 'g4', [ 'e4', 'f4' ], 'c4' ] 
 */
function reverse(a=[0]){
	if (!Array.isArray(a)){ return [a]; }
	return a.slice().reverse();
}
exports.reverse = reverse;
exports.rev = reverse;

/**
 * Rotate an array to the left or right for n-steps. Works with 2D-arrays and 
 * string arrays.
 * 
 * Alias: `rot()`
 * @param {Array} input - array to rotate
 * @param {Int} direction - direction and steps to rotate
 * @returns {Array}
 * @example
 * Mod.rotate([0, 5, 7, 12], 1);
 * //=> [ 12, 0, 5, 7 ] 
 * 
 * Mod.rotate(['c4', ['e4', 'f4'], 'g4', 'a4'], -1);
 * //=> [ [ 'e4', 'f4' ], 'g4', 'a4', 'c4' ] 
 */
function rotate(a=[0], r=0){
	if (!Array.isArray(a)){ return [a]; }
	var l = a.length;
	var arr = [];
	for (var i=0; i<l; i++){
		// arr[i] = a[Util.mod((i - r), l)];
		arr[i] = a[((i - r) % l + l) % l];
	}
	return arr;
}
exports.rotate = rotate;
exports.rot = rotate;

// placeholder for the sort() method found in statistic.js
/**
 * Sort an array in ascending or descending order. When strings are included 
 * they are sorted in alphabetical order with all numbers in the beginning.
 * @param {Array} array - array to sort
 * @param {Number=} direction - postive/negative value indicates sorting direction (optional, default = 1)
 * @returns {Array} sorted array
 * @example
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
 */ 
exports.sort = sort;

/**
 * Slice an array in one or multiple parts. Slice lengths are determined by the 
 * second argument array. Outputs an array of arrays of the result. Not to be 
 * confused with JavaScripts `Array.slice()` function!
 * 
 * @param {Array} input -array to slice in parts
 * @param {Number|Number[]} slice_size - slice lengths to slice array into
 * @param {Bool=} rest - output rest flag (optional, default=false)
 * @returns {Array[]}
 * @example
 * Mod.slice(Gen.spread(8), [3, 2]);
 * //=> [ [ 0, 1, 2 ], [ 3, 4 ], [ 5, 6, 7 ] ] 
 * 
 * // set rest-flag to false removes last slice 
 * Mod.slice(Gen.spread(24), [3, 2, -1, 5], false);
 * //=> [ [ 0, 1, 2 ], [ 3, 4 ], [ 5, 6, 7, 8, 9 ] ] 
 */
function slice(a=[0], s=[0], r=true){
	a = toArray(a);
	s = toArray(s);

	let arr = [];
	let _s = 0;
	for (let i=0; i<s.length; i++){
		if (s[i] > 0){
			let _t = _s + s[i];
			arr.push(a.slice(_s, _t));
			_s = _t;
		}
	}
	if (r){
		let rest = a.slice(_s, a.length);
		// attach the rest if not an empty array and r=true
		if (rest.length > 0){ arr.push(rest); }
	}
	return arr;
}
exports.slice = slice;

/**
 * Similar to {@link slice} in that it also splits an array, except that split 
 * recursively slices until the array is completely empty. If an array is 
 * provided as split sizes it will iterate the lengths.
 * 
 * @param {Array} input - array to split in parts
 * @param {Number|Number[]} split_size - split lengths to split array into
 * @returns {Array[]}
 * @example
 * Mod.split(Gen.spread(12), 3);
 * //=> [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ], [ 9, 10, 11 ] ] 
 * 
 * Mod.split(Gen.spread(12), [3, 2, -1]);
 * //=> [ [ 0, 1, 2 ], [ 3, 4 ], [ 5, 6, 7 ], [ 8, 9 ], [ 10, 11 ] ] 
 */
function split(a=[0], s=[1]){
	a = toArray(a);
	s = toArray(s);

	return _split(a, s);
}
exports.split = split;

function _split(a, s){
	if (s[0] > 0){
		let arr = a.slice(0, s[0]);
		let res = a.slice(s[0], a.length);

		if (res.length < 1){ return [arr]; }
		return [arr, ...split(res, rotate(s, -1))];
	}
	return [...split(a, rotate(s, -1))];
}

/**
 * "Spray" the values of one array on the places of values of another array if 
 * the value is greater than 0, resulting in a new array where all non-zere 
 * values are replaced by values from the first array. If you have to ask "why?
 * " you may not find this useful... otherwise: 🤘
 * 
 * @param {Array} sprayer -> Array to "spray" out over second array
 * @param {Array} sprayee -> Array containing non-zero positions to be sprayed
 * @returns {Array}
 * @example
 * Mod.spray([7, 9, 12], [1, 0, 0, 1, 1, 0, 1, 0]);
 * //=> [ 7, 0, 0, 9, 12, 0, 7, 0 ] 
 * 
 * // works with 2D-arrays
 * Mod.spray([[5, 7, 9], [12, 14]], [1, 0, 1, 1, 0]);
 * //=> [ [ 5, 7, 9 ], 0, [ 12, 14 ], [ 5, 7, 9 ], 0 ]
 * 
 * // works with strings
 * Mod.spray(['c4', 'f4', 'g4'], [1, 0, 0, 1, 1, 0, 1, 0]);
 * //=> [ 'c4', 0, 0, 'f4', 'g4', 0, 'c4', 0 ] 
 */
function spray(values=[0], beats=[0]){
	values = toArray(values);
	beats = toArray(beats);

	var arr = beats.slice();
	var c = 0;
	for (let i in beats){
		if (beats[i] > 0){
			arr[i] = values[c++ % values.length];
		}
	}
	return arr;
}
exports.spray = spray;

/**
 * Merge 2 or multiple lists by alternating over them. This gives a similar 
 * result as {@link merge}, except that the output length is the lowest common 
 * multiple of the input lists, so that every combination of consecutive values 
 * is included until they all appeared an integer multiple of times. This 
 * function is mainly used to allow arrays as input for Generators and for the 
 * step function for algorithmic composition. Returns a multi-dimensional array.
 * @alias stepMerge
 * @param {...Array} arrays -> arrays to stepwise merge
 * @returns {Array[]}
 * @example
 * // total steps is 2 so output is 4
 * Mod.step([0, 3], [7, 12]);
 * //=> [[0, 7], [3, 12]]
 * 
 * // total steps is now 6 before repetition, so output is 12
 * Mod.step([0, 3, 5], [7, 12]);
 * //=> [[0, 7], [3, 12], [5, 7], [0, 12], [3, 7], [5, 12]]
 * 
 * // works with 2D and multiple arrays
 * Mod.step([0, 3], [7, 12], [[19, 24]]);
 * //=> [[0, 7, [19, 24]], [3, 12, [19, 24]]]
 */
exports.stepMerge = arrayCombinations;

/**
 * Combine 2 or multiple lists by alternating over them. This gives a similar 
 * result as {@link lace} except the output length is the lowest common 
 * multiple of the input lists so that every combination of consecutive values 
 * is included. A higher dimension in the array is preserved.
 * @alias step
 * 
 * @param {...Array} arrays - arrays to step through
 * @returns {Array} 
 * @example
 * // total steps is 2 so output is 4
 * Mod.step([0, 3], [7, 12]);
 * //=> [0, 7, 3, 12]
 * 
 * // total steps is now 6 before repetition, so output is 12
 * Mod.step([0, 3, 5], [7, 12]);
 * //=> [0, 7, 3, 12, 5, 7, 0, 12, 3, 7, 5, 12]
 * 
 * // works with 2D and multiple arrays
 * Mod.step([0, 3], [7, 12], [[19, 24]]);
 * //=> [0, 7, [19, 24], 3, 12, [19, 24]]
 */
function stepCombine(...arrs){
	if (!arrs.length){ return [ 0 ] }
	return flat(arrayCombinations(...arrs), 1);
}
exports.stepCombine = stepCombine;
exports.step = stepCombine;

/**
 * Stretch (or shrink) an array to a specific length, linearly interpolating 
 * between all values within the array. The minimum output length is 2 (which 
 * will be the outmost values from the array). Third optional argument sets the 
 * interpolation mode. Available modes are `none` (or `null`, `false`) and 
 * `linear`.
 * 
 * @param {Array} input - array to stretch
 * @param {Array} size - outputlength of array
 * @param {Bool=} interp - interpolation on/off (optional, default=true)
 * @returns {Array}
 * @example
 * Mod.stretch([0, 12, 3, 7], 24);
 * //=> [ 0, 1.56, 3.13,  4.69, 6.26, 7.82, 9.39, 10.95, 
 * //    11.60, 10.43, 9.26, 8.08, 6.91, 5.73, 4.56, 3.39, 
 * //    3.34, 3.86, 4.391, 4.91, 5.43, 5.95, 6.478, 7 ] 
 * 
 * //   11.61 ┼       ╭╮               
 * //   10.45 ┤      ╭╯╰╮              
 * //    9.29 ┤     ╭╯  ╰╮             
 * //    8.13 ┤    ╭╯    ╰╮            
 * //    6.97 ┤    │      ╰╮        ╭─ 
 * //    5.80 ┤   ╭╯       ╰╮     ╭─╯  
 * //    4.64 ┤  ╭╯         ╰╮  ╭─╯    
 * //    3.48 ┤ ╭╯           ╰──╯      
 * //    2.32 ┤ │                      
 * //    1.16 ┤╭╯                      
 * //    0.00 ┼╯
 * 
 * // set interpolation to 'none'
 * Mod.stretch([0, 12, 3, 7], 10, 'none');
 * //=> 12.00 ┼  ╭──╮    
 * //    9.60 ┤  │  │    
 * //    7.20 ┤  │  │  ╭ 
 * //    4.80 ┤  │  │  │ 
 * //    2.40 ┤  │  ╰──╯ 
 * //    0.00 ┼──╯ 
 */ 
function stretch(a=[0], len=1, mode='linear'){
	a = toArray(a);
	if (len < 2){ return a; }
	len = size(len);
	
	let arr = [];
	let l = a.length;
	for (let i=0; i<len; i++){
		// construct a lookup interpolation position for new array
		let val = i / (len - 1) * (l - 1);
		// lookup nearest neighbour left/right
		let a0 = a[Math.max(Math.trunc(val), 0)];
		let a1 = a[Math.min(Math.trunc(val)+1, l-1) % a.length];

		if (mode === 'none' || mode === null || mode === false){
			arr.push(a0);
		} else {
			// interpolate between the values according to decimal place
			arr.push(lerp(a0, a1, val % 1));
		}
	}
	return arr;
}
exports.stretch = stretch;

// placeholder for unique from Utils.js
/**
 * Remove duplicate items from an array. Does not account for 2-dimensional 
 * arrays within the array. Preserves the order of items.
 * 
 * Alias: `thin()`
 * @param {Number[]} input - array to filter
 * @returns {Number[]}
 * @example
 * Mod.unique([5, 7, 5, 0, 12, 7, 5]); 
 * //=> [ 5, 7, 0, 12 ] 
 */
exports.unique = unique;
exports.thin = unique;
