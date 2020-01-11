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
// - Based on Laurie Spiegel's suggestion to "extract a basic "library"
// consisting of the most elemental transformations which have 
// consistently been successfully used on musical patterns, a basic 
// group of "tried-and-true" musical manipulations.", in Manipulation 
// of Musical Patterns (1981)
//==============================================================================

const Util = require('./utility.js');

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

// reverse the order of items in an Array
// 
// @param {Array}
// @return {Array}
// 
function reverse(a=[0]){
	return a.slice().reverse();
}
exports.reverse = reverse;

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

// filter duplicate items from an array
// 
// @param {Array}
// @return {Array}
// 
function unique(a=[0]){
	return [...new Set(a)];
}
exports.unique = unique;

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

/*
// add all values of two lists on the same index
// preserves length of longest list
function merge(arr1, arr2){
	var listOut = [];
	var len1 = arr1.length;
	var len2 = arr2.length;

	if (len1 < len2){
		var temp = arr2;
		arr2 = arr1;
		arr1 = temp;
	}
	for (var i = 0; i < arr1.length; i++){
		if (i < arr2.length){
			listOut[i] = arr1[i] + arr2[i];
		} else {
			listOut[i] = arr1[i];
		}
	}
	return listOut;
}

// combine arrays to one array
// can have many arrays as arguments
// looks up the array from the dict
function join(arrays){
	var outList = [];
	for (var i=0; i<arrays.length; i++){
		outList = outList.concat(arrays[i]);
	}
	return outList;
}

// reverse an array, and concatenate to the input array
// creating a palindrome of the array
function palin(arr, no_double){
	var outList = arr.slice();
	if (no_double === void(0)){ no_double = 0; } //default
	var rev = arr.slice().reverse();
	if (no_double){
		rev = rev.slice(1, rev.length-1);
	}
	return outList.concat(rev);
}

// invert a list of values by mapping the lowest value
// to the highest value, vice versa, and flipping everything
// in between. If no range, values are flipped between 
function invert(arr, range){
	if (range === void(0)){ range = 0; } //default
	var max = (range)? Math.max(...arr) : 12;
	var min = (range)? Math.min(...arr) : 0;
	return arr.slice().map(v => max - v + min);
}

// duplicate an array, but with add an offset to every value
// based on the arguments given
function clone(arr, clones){
	if (clones === void(0)){ clones = [0, 0]; }
	var outList = [];
	for (var i=0; i<clones.length; i++){
		outList = outList.concat(arr.map(v => v + clones[i]));
	}
	return outList;
}

*/