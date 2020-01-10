const Util = require('./utilities.js');

// rotate an array in a certain direction
// 1 = rotate right, -1 = rotate left
function rotate(arr, rot){
	var outList = new Array(arr.length);
	if (rot === void(0)){ rot = 0; } //default
	for (var i = 0; i < arr.length; i++){
		outList[i] = arr[Util.mod((i - rot), arr.length)]
	}
	return outList;
}//rotate()

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
}//merge()

// combine arrays to one array
// can have many arrays as arguments
// looks up the array from the dict
function join(arrays){
	var outList = [];
	for (var i=0; i<arrays.length; i++){
		outList = outList.concat(arrays[i]);
	}
	return outList;
}//combine()

// reverse an input array putting last item in the front etc.
function reverse(arr){
	return arr.slice().reverse();
}//reverse()

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
}//palin()

// invert a list of values by mapping the lowest value
// to the highest value, vice versa, and flipping everything
// in between. If no range, values are flipped between 
function invert(arr, range){
	if (range === void(0)){ range = 0; } //default
	var max = (range)? Math.max(...arr) : 12;
	var min = (range)? Math.min(...arr) : 0;
	return arr.slice().map(v => max - v + min);
}//invert()

// duplicate an array a certain amount of times
function duplicate(arr, dups){
	if (dups === void(0)){ dups = 1; }
	var outList = [];
	for (var i=0; i<dups; i++){
		outList = outList.concat(arr);
	}
	return outList;
}//duplicate()

// duplicate an array, but with add an offset to every value
// based on the arguments given
function clone(arr, clones){
	if (clones === void(0)){ clones = [0, 0]; }
	var outList = [];
	for (var i=0; i<clones.length; i++){
		outList = outList.concat(arr.map(v => v + clones[i]));
	}
	return outList;
}//clone()

// filter duplicates from an array output only
function unique(arr){
	return [...new Set(arr)];
}//unique()

// shuffle a list with seedable randomness
// Fisher-Yates shuffle algorithm
// by Ronald Fisher and Frank Yates in 1938
// algorithm has run time complexity of O(n)
function shuffle(arr){
	var outList = arr.slice();
	for (var i=outList.length-1; i>0; i-=1) {
		var j = Math.floor(Math.random() * (i + 1));
		var t = outList[i];
		outList[i] = outList[j];
		outList[j] = t;
	}
	return outList;
}//shuffle()

exports.rotate = rotate;
exports.merge = merge;
exports.join = join;
exports.reverse = reverse;
exports.palin = palin;
exports.invert = invert;
exports.duplicate = duplicate;
exports.clone = clone;
exports.unique = unique;
exports.shuffle = shuffle;