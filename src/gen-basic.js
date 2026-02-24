//==========================================================================
// gen-basic.js
// part of 'total-serialism' Package
// by Timo Hoogland (@t.mo / @tmhglnd), www.timohoogland.com
// MIT License
//
// Basic methods that generate number sequences as 
// startingpoint for composing melodies, rhythms and more
// 
// credits:
// - spread-methods inspired by Max8's MC functions spread and spreadinclusive
// - cosine/sine array generation inspired by workshop by Steven Yi at ICLC
//==========================================================================

// const Util = require('./utility.js');
const { map, flatten, toArray, size, TWO_PI } = require('./utility');

/** The counter function generates an array of ascending or descending 
 * integers, counted from a starting value up to (and including) an ending 
 * value. When one argument is provided this value acts as the ending value 
 * and the default starting value is 0. If two values are provided the first 
 * value is the starting value and the second value the end.
 * @summary Count whole numbers
 * @example
 * // count to 8 from 0
 * Gen.counter(8);
 * //=> [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ]
 * @example
 * // count to 10 from 4
 * Gen.counter(4, 10);
 * //=> [ 4, 5, 6, 7, 8, 9, 10 ]
 * @example
 * // count down from 7 to 2
 * Gen.counter(7, 2);
 * //=> [ 7, 6, 5, 4, 3, 2 ]
 * @example
 * // count down from 5 to -4
 * Gen.counter(5, -4);
 * //=> [ 5, 4, 3, 2, 1, 0, -1, -2, -3, -4 ]
 * 
 * @param {Int} count (or count from, default=12)
 * @param {Int} to (optional, default=undefined)
 * @returns {Array<Number>} 
*/
function count(from=11, to){
	// if to is undefined set to 0
	if (to === undefined){ var t=from, from=0, to=t; }
	// calculate the range
	let range = Math.abs(to - from);
	// calculate direction
	let dir = (from < to) ? 1 : -1;
	// start with the from value
	let arr = [ from ];
	// next value is the current + the direction
	for (let i=0; i<range; i++){
		arr.push( arr[i] + dir );
	}
	return arr;
}
exports.counter = count;
exports.count = count;

/** The spreadFloat function is similar to the {@link count} function, but you 
 * can decide on the length of the array output, resulting in some numbers 
 * being skipped or duplicated depending if the output size should be smaller 
 * or larger than the start and ending points. The generated array has n-length 
 * of evenly spaced values between a starting number up until (but excluding) 
 * the 3th argument. Flipping the low and high range will result descending 
 * values.
 * @summary Spread numbers between a low and high value
 * @example
 * // generate an array of 5 floats between range 0-1
 * Gen.spreadFloat(5); 
 * //=> [ 0, 0.2, 0.4, 0.6, 0.8 ]
 * 
 * @param {Int} length of output array
 * @param {Number} low value (optional, default=0)
 * @param {Number} high value (optional, default=length)
 * @return {Array<Number>}
*/
function spreadFloat(len=1, lo=1, hi){
	// if hi undefined set lo to 0 and hi=lo
	if (hi === undefined){ var t=lo, lo=0, hi=t; }
	// calculate the range
	let r = hi - lo; 
	// len is minimum of 1 or length of array
	len = size(len);
	if (len === 1){ return [lo]; }
	// stepsize
	let s = r / len;
	// generate array
	let arr = [];
	for (let i=0; i<len; i++){
		arr[i] = i * s + lo;
	}
	return arr;
}
exports.spreadFloat = spreadFloat;
exports.spreadF = spreadFloat;

/** Similar to the {@link spreadFloat} function, but the output 
 * is only with whole numbers (integers).
 * @summary Spread numbers between a low and high value 
 * @example
 * // generate an array of 5 ints between range 0-5
 * Gen.spread(5);
 * //=> [ 0, 1, 2, 3, 4 ] 
 * @example
 * // change the range with a second argument to 0-12
 * Gen.spread(5, 12);
 * //=> [ 0, 2, 4, 7, 9 ] 
 * @example
 * // add a low/high range pair with 3-12
 * Gen.spread(5, 3, 12);
 * //=> [ 3, 4, 6, 8, 10 ] 
 * @example
 * // reverse the range for descending output with 12-3
 * Gen.spread(5, 12, 3);
 * //=> [ 10, 8, 6, 4, 3 ] 
 * 
 * @param {Int} length of output array
 * @param {Int} low value (optional, default=0)
 * @param {Int} high value (optional, default=length)
 * @return {Array<Number>}
*/
function spread(len, lo=size(len), hi){
	let arr = spreadFloat(len, lo, hi);
	return arr.map(v => Math.floor(Number(v.toPrecision(15))));
}
exports.spread = spread;

/** Similar to the {@link spread} and {@link spreadFloat} functions, but with 
 * an optional exponent as 4th argument.
 * @summary Spread floats between a low and high value (with exponent)
 * @example
 * Gen.spreadExpFloat();
 * Gen.spreadExpF();
 * 
 * @param {Int} length of output array
 * @param {Number} low value (optional, default=0)
 * @param {Number} high value (exclusive, optional, default=length)
 * @param {Number} exponent (optional, default=1)
 * @returns {Array<Number>}
 */
function spreadExpFloat(len=1, lo=1, hi, exp=1){
	// if hi undefined set lo to 0 and hi=lo
	if (hi === undefined){ var t=lo, lo=0, hi=t; }
	// calculate the range
	let r = hi - lo; 
	// len is minimum of 1
	len = size(len);
	// len = Math.max(1, len);
	if (len === 1){ return [lo]; }
	// generate array
	let arr = [];
	for (let i=0; i<len; i++){
		arr[i] = Math.pow((i / len), exp) * r + lo;
	}
	return arr;
}
exports.spreadFloatExp = spreadExpFloat; // deprecated
exports.spreadExpFloat = spreadExpFloat;
exports.spreadExpF = spreadExpFloat;

/** Similar to {@link spread} and {@link spreadFloat} but with an optional 
 * exponent as 4th argument and only outputs whole numbers.
 * @summary Spread numbers between a low and high value (with exponent)
 * @example
 * Gen.spreadExp(10, 0, 10, 2);
 * //=> [ 0, 0, 0, 0, 1, 2, 3, 4, 6, 8 ] 
 * 
 * @param {Int} length of output array
 * @param {Int} low value (optional, default=0)
 * @param {Int} high value (exclusive, optional, default=length)
 * @param {Number} exponent (optional, default=1)
 * @returns {Array<Number>}
 */
function spreadExp(len, lo=size(len), hi, exp){
	let arr = spreadExpFloat(len, lo, hi, exp);
	return arr.map(v => Math.floor(Number(v.toPrecision(15))));
}
exports.spreadExp = spreadExp;

/**The spreadFloat function is similar to the {@link count} function, but you 
 * can decide on the length of the array output, resulting in some numbers 
 * being skipped or duplicated depending if the output size should be smaller 
 * or larger than the start and ending points. The generated array has n-length 
 * of evenly spaced values between a starting number up until (but excluding) 
 * the 3th argument. Flipping the low and high range will result descending 
 * values.
 * @summary Spread numbers between a low and high value (inclusive)
 * @example
 * // generate an array of 5 floats (inclusive)
 * Gen.spreadInclusiveFloat(5);
 * //=> [ 0, 0.25, 0.5, 0.75, 1 ] 
 * 
 * @param {Int} length of output array
 * @param {Number} low value (optional)
 * @param {Number} high value (inclusive, optional)
 * @returns {Array<Number>}
 */
function spreadInclusiveFloat(len=1, lo=1, hi){
	// if hi undefined set lo to 0 and hi=lo
	if (hi === undefined){ var t=lo, lo=0, hi=t; }
	// calculate the range
	let r = hi - lo; 
	// lo is actual lowest value
	lo = Math.min(lo, hi);
	// len is minimum of 1
	len = size(len);
	// len = Math.max(1, len);
	if (len === 1){ return [lo]; }
	// stepsize
	let s = Math.abs(r) / (len - 1);
	// generate array
	let arr = []
	for (let i=0; i<len; i++){
		arr[i] = i * s + lo;
	}
	return (r < 0)? arr.reverse() : arr;
}
exports.spreadInclusiveFloat = spreadInclusiveFloat;
exports.spreadIncF = spreadInclusiveFloat;

/** Similar to the {@link spreadInclusiveFloat} function, but the output 
 * is only with whole numbers (integers).
 * @summary Spread numbers between a low and high value (inclusive)
 * @example
 * // generate an array of 5 ints between range 0-5 (5 inclusive)
 * Gen.spreadInclusive(5);
 * //=> [ 0, 1, 2, 3, 5 ]
 * @example
 * // change the range with a second argument to 0-12
 * Gen.spreadInclusive(5, 12);
 * //=> [ 0, 3, 6, 9, 12 ] 
 * @example
 * // add a low/high range pair with 3-12
 * Gen.spreadInclusive(5, 3, 12);
 * //=> [ 3, 5, 7, 9, 12 ] 
 * @example
 * // reverse the range for descending output with 12-3
 * Gen.spreadInclusive(5, 12, 3);
 * //=> [ 12, 9, 7, 5, 3 ] 
 * 
 * @param {Int} length of output array
 * @param {Number} low value (optional)
 * @param {Number} high value (inclusive, optional)
 * @returns {Array<Number>}
 */
function spreadInclusive(len, lo=size(len), hi){
	var arr = spreadInclusiveFloat(len, lo, hi);
	return arr.map(v => Math.floor(Number(v.toPrecision(15))));
}
exports.spreadInclusive = spreadInclusive;
exports.spreadInc = spreadInclusive;

/** Similar to the {@link spreadInclusive} and {@link spreadInclusiveFloat}
 * functions, but with an optional exponent as 4th argument.
 * @summary Spread floats between a low and high value (with exponent)
 * @example
 * Gen.spreadInclusiveExpFloat();
 * Gen.spreadIncExpF();
 * 
 * @param {Int} length of output array
 * @param {Number} low value (optional, default=0)
 * @param {Number} high value (exclusive, optional, default=length)
 * @param {Number} exponent (optional, default=1)
 * @returns {Array<Number>}
 */
function spreadInclusiveExpFloat(len=1, lo=1, hi, exp=1){
	// if hi undefined set lo to 0 and hi=lo
	if (hi === undefined){ var t=lo, lo=0, hi=t; }
	// calculate the range
	let r = hi - lo; 
	// lo is actual lowest value
	lo = Math.min(lo, hi);
	// len is minimum of 1
	len = size(len);
	// len = Math.max(1, len);
	if (len === 1){ return [lo]; }
	// generate array
	let arr = [];
	for (let i=0; i<len; i++){
		arr[i] = Math.pow((i / (len-1)), exp) * Math.abs(r) + lo;
	}
	return (r < 0)? arr.reverse() : arr;
}
exports.spreadInclusiveFloatExp = spreadInclusiveExpFloat; //deprecated
exports.spreadInclusiveExpFloat = spreadInclusiveExpFloat;
exports.spreadIncExpF = spreadInclusiveExpFloat;

/** Similar to the {@link spreadInclusive} and {@link spreadInclusiveFloat}
 * functions, but with an optional exponent as 4th argument and only output 
 * whole numbers.
 * @summary Spread floats between a low and high value (with exponent)
 * @example
 * Gen.spreadExp(10, 0, 10, 2);
 * //=> [ 0, 0, 0, 0, 1, 2, 3, 4, 6, 8 ] 
 * 
 * @param {Int} length of output array
 * @param {Number} low value (optional, default=0)
 * @param {Number} high value (exclusive, optional, default=length)
 * @param {Number} exponent (optional, default=1)
 * @returns {Array<Number>}
 */
function spreadInclusiveExp(len, lo=size(len), hi, exp){
	var arr = spreadInclusiveExpFloat(len, lo, hi, exp);
	return arr.map(v => Math.floor(Number(v.toPrecision(15))));
}
exports.spreadInclusiveExp = spreadInclusiveExp;
exports.spreadIncExp = spreadInclusiveExp;

/** Fill an array with values. Arguments are in pairs. Every pair consists of 
 * `<value, amount>` The value is repeated n-amount of times in the array. Also 
 * accepts an array as a single argument containing the pairs.
 * @example
 * // fill an array with duplicates of a value
 * Gen.fill(10, 2, 15, 3, 20, 4); 
 * //=> [ 10, 10, 15, 15, 15, 20, 20, 20, 20 ]
 * @example
 * Gen.fill([10, 2, 15, 3, 20, 4]);
 * //=> [ 10, 10, 15, 15, 15, 20, 20, 20, 20 ]
 * @param {Anything} value to duplicate
 * @param {Int} amount of duplicates
 * @param {*} repeat n-times
 * @param {Array} array containing value/amount pairs
 * @returns {Array<Number>}
 */
function fill(...args){
	// also accepts a single array as argument containing the pairs
	if (args.length === 1){
		args = args[0];
	}
	// when arguments uneven strip last argument
	if (args.length % 2){ args.pop(); }
	// when no arguments return array of 0
	if (!args.length){ return [0]; }
	
	let len = args.length/2;
	let arr = [];
	for (let i=0; i<len; i++){
		for (let k=0; k<Math.abs(args[i*2+1]); k++){
			arr.push(args[i*2]);
		}
	}
	return arr;
}
exports.fill = fill;

// Generate an array with n-periods of a sine function
// Optional last arguments set lo and hi range and phase offset
// Only setting first range argument sets the low-range to 0
// 
// @param {Int} -> Length of output array (resolution)
// @param {NumberArray | Number} -> Periods of sine-wave 
// @param {Number} -> Low range of values (optional, default=-1) 
// @param {Number} -> High range of values (optional, default=1)
// @param {Number} -> Phase offset (optional, default=0)
// @return {Array} -> Sine function
// 
function sineFloat(len=1, periods=1, lo, hi, phase=0){
	// if no range specified
	if (lo === undefined){ lo = -1; hi = 1; }
	else if (hi === undefined){ hi = lo, lo = 0; }
	// make periods array
	periods = toArray(periods);
	
	// if (lo === undefined){ lo = -1; hi = 1; }
	// swap if lo > hi
	// if (lo > hi){ var t=lo, lo=hi, hi=t; }

	// array length minimum of 1
	len = size(len);
	// len = Math.max(1, len);
	let arr = [];

	// let twoPI = Math.PI * 2.0;
	// let a = Math.PI * 2.0 * periods / len;
	// let p = Math.PI * phase * 2.0;
	let p = TWO_PI * phase;
	for (let i=0; i<len; i++){
		// arr[i] = Math.sin(a * i + p);
		let a = TWO_PI * periods[i % periods.length] / len;
		arr[i] = Math.sin(a * i + p);
	}
	return map(arr, -1, 1, lo, hi);
}
exports.sineFloat = sineFloat;
exports.sineF = sineFloat;
exports.sinF = sineFloat;

/**
 * Generate an array with n-periods of a (co)sine function with integer values. 
 * Optional last arguments set lo and hi range and phase offset. Default range 
 * is 0 to 12. Wave can be inverted by swapping the arguments
 * @example
 * // generate 10 ints with 4 periods of a sine function
 * Gen.sine(11, 4, 0, 7);
 * //=> [ 3, 6, 0, 5, 4, 0, 6, 2, 1, 6, 0 ]
 * //        6.00 ┼╭╮   ╭╮ ╭╮ 
 * //        5.00 ┤││╭╮ ││ ││ 
 * //        4.00 ┤│││╰╮││ ││ 
 * //        3.00 ┼╯││ │││ ││ 
 * //        2.00 ┤ ││ ││╰╮││ 
 * //        1.00 ┤ ││ ││ ╰╯│ 
 * //        0.00 ┤ ╰╯ ╰╯   ╰  
 * @param {Int} length of output array
 * @param {Number} periods of (co)sine-wave (optional, default = 1)
 * @param {Number} low range of values (optional, default = 0)
 * @param {Number} high range of values (optional, default = 12)
 * @param {Number} phase offset (optional, default = 0)
 */
function sine(len=1, periods=1, lo=12, hi, phase){
	var arr = sineFloat(len, periods, lo, hi, phase);
	return arr.map(v => Math.trunc(v));
}
exports.sine = sine;

// Generate an array with n-periods of a cosine function
// Flip the low and high range to invert the function
// See sinFloat() for details
//
function cosineFloat(len=1, periods=1, lo, hi, phase=0){
	return sineFloat(len, periods, lo, hi, phase+0.25);
}
exports.cosineFloat = cosineFloat;
exports.cosineF = cosineFloat;
exports.cosF = cosineFloat;

// Generate an integer array with n-periods of a cosine function
// Flip the low and high range to invert the function
// See sin() for details
// 
function cosine(len=1, periods=1, lo=12, hi, phase=0){
	var arr = sineFloat(len, periods, lo, hi, phase+0.25);
	return arr.map(v => Math.trunc(v));
}
exports.cosine = cosine;

// Generate an array with n-periods of a saw/phasor function
// Optional last arguments set lo and hi range and phase offset
// Only setting first range argument sets the low-range to 0
// 
// @param {Int} -> Length of output array (resolution)
// @param {Number/Array} -> Periods of the wave (option, default=1)
// @param {Number} -> Low range of values (optional, default=-1) 
// @param {Number} -> High range of values (optional, default=1)
// @param {Number} -> Phase offset (optional, default=0)
// @return {Array} -> wave-function as array
//  
function sawFloat(len=1, periods=1, lo, hi, phase=0){
	if (lo === undefined){ lo = -1; hi = 1; }
	else if (hi === undefined){ hi = lo, lo = 0; }
	// make periods array
	periods = toArray(periods);

	// array length minimum of 1
	len = size(len);
	// len = Math.max(1, len);
	let arr = [];

	let a = 1 / len;
	for (let i=0; i<len; i++){
		arr[i] = ((i * a * periods[i % periods.length]) % 1.0 + 1.0) % 1.0;
	}
	return map(arr, 0, 1, lo, hi);
	// return arr;
}
exports.sawFloat = sawFloat;
exports.phasor = sawFloat;
exports.sawF = sawFloat;

function saw(len=1, periods=1, lo=12, hi, phase=0){
	var arr = sawFloat(len, periods, lo, hi, phase);
	return arr.map(v => Math.trunc(v));
}
exports.saw = saw;

// Generate an array with n-periods of a pulse/squarewave function
// Optional last arguments set lo and hi range and pulse width
// Only setting first range argument sets the low-range to 0
// 
// @param {Int} -> Length of output array (resolution)
// @param {Number/Array} -> Periods of the wave (option, default=1)
// @param {Number} -> Low range of values (optional, default=-1) 
// @param {Number} -> High range of values (optional, default=1)
// @param {Number} -> Pulse width (optional, default=0.5)
// @return {Array} -> wave-function as array
//  
function squareFloat(len=1, periods=1, lo, hi, pulse=0.5){
	if (lo === undefined){ lo = 0; hi = 1; }
	else if (hi === undefined){ hi = lo, lo = 0; }
	// make periods array
	periods = toArray(periods);

	// array length minimum of 1
	len = size(len);
	// len = Math.max(1, len);
	let arr = [];

	let a = 1 / len;
	for (let i=0; i<len; i++){
		arr[i] = ((i * a * periods[i % periods.length]) % 1 + 1) % 1;
		arr[i] = arr[i] < pulse;
	}
	return map(arr, 0, 1, lo, hi);
	// return arr;
}
exports.squareFloat = squareFloat;
exports.squareF = squareFloat;
exports.rectFloat = squareFloat;
exports.rectF = squareFloat;

function square(len=1, periods=1, lo=12, hi, pulse=0.5){
	var arr = squareFloat(len, periods, lo, hi, pulse);
	return arr.map(v => Math.trunc(v));
}
exports.square = square;
exports.rect = square;

// Generate a binary rhythm from a positive integer number or an array 
// of numbers. Returns the binary value as an array of separated 1's and 0's
// useful for representing rhythmical patterns
// 
// @param {Int+/Array} -> Array of numbers to convert to binary representation
// @return {Array} -> Array of 1's and 0's
//
function binary(...a){
	// if no arguments return else flatten array to 1 dimension
	if (!a.length) { return [0]; }
	a = flatten(a);

	let arr = [];
	for (let i=0; i<a.length; i++){
		if (isNaN(a[i])){
			arr = arr.concat(0);
		} else {
			// make the value into a whole number
			let v = Math.floor(Math.max(a[i], 0));
			// convert the number to binary string, split, convert to numbers
			arr = arr.concat(v.toString(2).split('').map((x) => Number(x)));
		}
	}
	return arr;
}
exports.binary = binary;
exports.binaryBeat = binary;

// Generate an array of 1's and 0's based on a positive integer number or array
// Every number in the array will be replaced by a 1 with a specified amount of 
// 0's appended to it. Eg. a 2 => 1 0, a 4 => 1 0 0 0, etc. This technique is
// useful to generate a rhythm based on spacing length between onsets
//
// @param {Int+/Array} -> Array of numbers to convert to spaced rhythm
// @return {Array} -> Array of 1's and 0's representing a rhythm
//
function spacing(...a){
	// if no arguments return else flatten array to 1 dimension
	if (!a.length) { return [0]; }
	a = flatten(a);

	let arr = [];
	for (let i=0; i<a.length; i++){
		if (isNaN(a[i]) || a[i] < 1){
			// if no number or less than 1 append 0
			arr = arr.concat(0);
		} else {
			// for every integer push a 1 followed by 0's
			for (let j=0; j<Math.floor(a[i]); j++){
				arr.push(!j ? 1 : 0);
			}
		}
	}
	return arr;
}
exports.space = spacing;
exports.spacing = spacing;
exports.spacingBeat = spacing;