//==============================================================================
// transform.js
// part of 'total-serialism' Package
// by Timo Hoogland (@t.mo / @tmhglnd), www.timohoogland.com
// MIT License
//
// Basic methods that can transform number sequences
// 
// 
// credits:
// - Many functions are based on Laurie Spiegel's suggestion to 
// "extract a basic "library" consisting of the most elemental 
// transformations which have consistently been successfully used on 
// musical patterns, a basic group of "tried-and-true" musical 
// manipulations.", in Manipulation of Musical Patterns (1981)
//==============================================================================

// require the Utility methods
const Util = require('./utility.js');

// duplicate an array, but add an offset to every value
// based on the arguments given
// 
// @param {Array}
// @param {duplicate1, duplicate2, ... duplicate-n}
// 
function clone(a=[0], ...c){
	if (!c.length) { c = [0, 0]; }
	var arr = [];
	for (var i=0; i<c.length; i++){
		arr = arr.concat(a.map(v => v + c[i]));
	}
	return arr;
}
exports.clone = clone;

// duplicate an array a certain amount of times
// 
// @param {Array}
// @param {amount of dupicates} default=2
// @return {Array}
// 
function duplicate(a=[0], d=2){
	var arr = [];
	for (var i=0; i<d; i++){
		arr = arr.concat(a);
	}
	return arr;
}
exports.duplicate = duplicate;

// invert a list of values by mapping the lowest value
// to the highest value and vice versa, flipping everything
// in between. 
// Second optional argument sets the center to flip values against. 
// Third optional argument sets a range to flip values against.
// 
// @param {Array}
// @param {invert center / lo range} = optional
// @param {hi range} = optional
// @return {Array}
// 
function invert(arr=[0], lo, hi){
	if (lo === undefined){
		hi = Math.max(...arr);
		lo = Math.min(...arr);
	} else if (hi === undefined){
		hi = lo;
	}
	return arr.slice().map(v => hi - v + lo);
}
exports.invert = invert;

// combine arrays into one
// multiple arrays as arguments possible
// 
// @params {Array0, Array1 ... Array-n}
// @return {Array}
// 
function join(...args){
	if (!args.length){ return [0]; }
	var arr = [];
	for (var i=0; i<args.length; i++){
		arr = arr.concat(args[i]);
	}
	return arr;
}
exports.join = join;

// merge all values of two arrays on the same index
// into a 2D array. preserves length of longest list
// 
// @param {Array1, Array2}
// @return {Array}
// 
function merge(...args){
	if (!args.length){ return [0]; }

	var l = 0;
	for (i in args){
		l = Math.max(args[i].length, l);
	}

	var arr = new Array(l);
	for (var i=0; i<l; i++){
		var a = [];
		for (var k in args){
			v = args[k][i];
			if (v != undefined){ a.push(v); }
		}
		arr[i] = a;
	}
	return arr;
}
exports.merge = merge;

// reverse an array and concatenate to the input
// creating a palindrome of the array
// 
// @param {Array}
// @param {noDouble-flag}
// 
function palindrome(a=[0], noDouble=false){
	var arr = a.slice();
	var rev = a.reverse();

	if (noDouble){
		rev = rev.slice(1, rev.length-1);
	}
	return arr.concat(rev);
}
exports.palindrome = palindrome;

// reverse the order of items in an Array
// 
// @param {Array}
// @return {Array}
// 
function reverse(a=[0]){
	return a.slice().reverse();
}
exports.reverse = reverse;

// rotate the position of items in an array 
// 1 = rotate right, -1 = rotate left
// 
// @param {Array}
// @param {steps to rotate} default=0
// @return {Array}
// 
function rotate(a=[0], r=0){
	var l = a.length;
	var arr = new Array(l);

	for (var i=0; i<l; i++){
		arr[i] = a[Util.mod((i - r), l)]
	}
	return arr;
}
exports.rotate = rotate;

// shuffle a list, based on the
// Fisher-Yates shuffle algorithm
// by Ronald Fisher and Frank Yates in 1938
// algorithm has run time complexity of O(n)
// 
// @param {Array}
// @return {Array}
// 
function shuffle(a=[0]){
	var arr = a.slice();

	for (var i=arr.length-1; i>0; i-=1) {
		var j = Math.floor(Math.random() * (i + 1));
		var t = arr[i];
		arr[i] = arr[j];
		arr[j] = t;
	}
	return arr;
}
exports.shuffle = shuffle;

// filter duplicate items from an array
// 
// @param {Array}
// @return {Array}
// 
function unique(a=[0]){
	return [...new Set(a)];
}
exports.unique = unique;