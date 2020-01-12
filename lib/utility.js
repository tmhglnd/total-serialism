//==============================================================================
// utility.js
// part of 'total-serialism' Package
// by Timo Hoogland (@t.mo / @tmhglnd), www.timohoogland.com
// MIT License
//
// Utility functions
//==============================================================================

// Return the remainder after division
// works also in the negative direction
// 
// @param {Int/Array} -> input value
// @param {Int} -> divisor
// @return {Int/Array} -> remainder after division
// 
function mod(v, mod){
	if (!Array.isArray(v)){
		return ((v % mod) + mod) % mod;
	}
	return v.map(v => ((v % mod) + mod) % mod);
}
exports.mod = mod;

// Constrain a value between a low
// and high range
// 
// @param {Number} -> number to constrain
// @param {Number} -> minimum value
// @param {Number} -> maximum value
// @return {Number} -> constrained value
// 
function constrain(v, min, max){
	if (!Array.isArray(v)){
		return Math.min(max, Math.max(min, v));
	}
	return v.map(v => Math.min(max, Math.max(min, v)));
}
exports.constrain = constrain;

// Map a value or array from one input-range 
// to a given output-range
// 
// @param {Number/Array} -> value to be scaled
// @param {Number} -> input low
// @param {Number} -> input high
// @param {Number} -> output low
// @param {Number} -> output high
// @param {Number} -> exponent (optional, default=1)
// @return {Number/Array}
// 
function map(v, ...params){
	if (!Array.isArray(v)){
		return _map(v, ...params);
	}
	return v.map(v => _map(v, ...params));
}
exports.map = map;

function _map(v, inLo=0, inHi=1, outLo=0, outHi=1, exp=1){
	v = (v - inLo) / (inHi - inLo);
	if (exp != 1){
		var sign = (v >= 0.0) ? 1 : -1;
		v = Math.pow(Math.abs(v), exp) * sign;
	}
	return v * (outHi - outLo) + outLo;
}

/*
// add 1 or more values to an array
// retains input listlength
// arguments are added sequentially
function add(arr, args){
	var outList = new Array(arr.length);
	if (args === void(0)){ args = [0]; } //default
	for (var i=0; i<arr.length; i++){
		outList[i] = arr[i] + args[i % args.length];
	}
	return outList;
}//add()

// subtract 1 or more values to an array
// retains input listlength
// arguments are added sequentially
function subtract(arr, args){
	var outList = new Array(arr.length);
	if (args === void(0)){ args = [0]; } //default
	for (var i=0; i<arr.length; i++){
		outList[i] = arr[i] - args[i % args.length];
	}
	return outList;
}//add()

// multiply 1 or more values to an array
// retains input listlength
// arguments are added sequentially
function multiply(arr, args){
	var outList = new Array(arr.length);
	if (args === void(0)){ args = [0]; } //default
	for (var i=0; i<arr.length; i++){
		outList[i] = arr[i] * args[i % args.length];
	}
	return outList;
}//add()

// divide 1 or more values to an array
// retains input listlength
// arguments are added sequentially
function divide(arr, args){
	var outList = new Array(arr.length);
	if (args === void(0)){ args = [0]; } //default
	for (var i=0; i<arr.length; i++){
		outList[i] = arr[i] / args[i % args.length];
	}
	return outList;
}//add()

// Scale an entire list from one range to another
// Output values as floating point
function scale_list_f(arr, args){
	var defaults = [0, 12, 0, 12, 1];
	if (args.length < 4){
		console.log("scale(): not enough arguments. Arguments <array, in_lo, in_hi, out_lo, out_hi, exp>.");
	}
	for (var i=0; i<args.length; i++){
		defaults[i] = args[i];
	}
	return arr.map(x => scale(x, ...defaults));
}//scale_list_f()

// Scale an entire list from one range to another
// Output values as integer
function scale_list(arr, args){
	var arr = scale_list_f(arr, args);
	return arr.map(x => Math.floor(x));
}//scale_list()

// Wrap a values between a lo and hi range
// different then mod because exceeded value
// wraps to the boundary
function wrap(v, lo, hi){
	if (v < lo){ v = hi; }
	else if (v > hi){ v = lo; }
	return v;
}//wrap()

// Return the index of a value from a list
function get_index(v, arr){
	for (var i = 0; i < arr.length; i++){
		if (arr[i] == v){
			return i;
		}
	}
}//getIndex()
*/