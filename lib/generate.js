//==============================================================================
// basic-generators.js
// part of 'total-serialism' Package
// @t.mo - by Timo Hoogland, 2020
// MIT License
//
// General methods that generate number sequences
//==============================================================================

// Generate a list of n-length starting at one value
// up untill (but excluding) the 3th argument. 
// Evenly spaced values in between in floating-point
// 
// @params {array-length, low-output, high-output}
// @return {Array}
//
function spreadFloat(len, lo, hi){
	// defaults
	if (len === void(0)){ len = 1; }
	if (lo === void(0)){ lo = len; }
	if (hi === void(0)){ hi = 0; }
	// swap if lo > hi
	if (lo > hi){
		var tmp = lo;
		lo = hi;
		hi = tmp;
	}
	// len is positive and minimum of 1
	len = Math.max(1, Math.abs(len));
	// generate array
	var arr = new Array(len);
	for (var i=0; i<len; i++){
		arr[i] = (i / len) * (hi - lo) + lo;
	}
	return arr;
}

// Generate a list of n-length starting at one value
// up untill (but excluding) the 3th argument. 
// Set an exponential curve in the spacing of the values.
// 
// @params {length, low-output, high-output}
// @return {Array}
//
function spreadFloatExp(len, lo, hi, exp){
	// defaults
	if (len === void(0)){ len = 1; }
	if (lo === void(0)){ lo = len; }
	if (hi === void(0)){ hi = 0; } 
	if (exp === void(0)){ exp = 1; } 
	// swap if lo > hi
	if (lo > hi){
		var tmp = lo;
		lo = hi;
		hi = tmp;
	}
	// len is positive and minimum of 1
	len = Math.max(1, Math.abs(len));

	var arr = new Array(len);
	for (var i=0; i<len; i++){
		arr[i] = Math.pow((i / len), exp) * (hi - lo) + lo;
	}
	return arr;
}

// Spread function rounded to integers
function spread(len, lo, hi){
	var arr = spreadFloat(len, lo, hi);
	return arr.map(v => Math.floor(v));
}

// Spread function rounded to integers
function spreadExp(len, lo, hi, exp){
	var arr = spreadFloatExp(len, lo, hi, exp);
	return arr.map(v => Math.floor(v));
}

// Generate a list of n-length starting at one value
// ending at the 3th argument.
// Evenly spaced values in between in floating-point
function spreadInclusiveFloat(len, lo, hi){
	// defaults
	if (len === void(0)){ len = 1; }
	if (lo === void(0)){ lo = len; }
	if (hi === void(0)){ hi = 0; }
	// swap if lo > hi
	if (lo > hi){
		var tmp = lo;
		lo = hi;
		hi = tmp;
	}
	var listOut = new Array(len);
	var range = hi - lo;
	for (var i = 0; i < len; i++){
		listOut[i] = (i / (len-1)) * range + lo;
	}
	return listOut;
}

// Spreadinclusive function rounded to integers
function spreadInclusive(len, lo, hi){
	var arr = spreadinclusive_f(len, lo, hi);
	return arr.map(v => Math.round(v));
}

// fill an array with values. Arguments are number pairs.
// Every pair consists of <amount, value>
// The value is repeated n-amount times in the list
function fill(args){
	if (args.length % 2 == 1){
		console.log("uneven amount of arguments. Pair an amount with a value to fill the list");
		args.pop();
	}
	var outList = [];
	for (var i=0; i<args.length/2; i++){
		for (var j=0; j<Math.floor(args[i*2]); j++){
			outList.push(args[i*2+1]);
		}
	}
	return outList;
}

// generate a list of random float values 
// between a certain specified range
function random_f(len, lo, hi){
	var outList = new Array(len);
	if (len === void(0)){ len = 1; } //default length
	if (lo === void(0)){ lo = 0; } //default lo
	if (hi === void(0)){ hi = 1; } //default hi
	if (lo > hi){ //swap lo-hi
		var tmp = lo;
		lo = hi;
		hi = tmp;
	}
	range = hi - lo;
	for (var i=0; i<len; i++){
		outList[i] = (Math.random() * range) + lo;
	}
	return outList;
}

// generate a list of random integer values 
// between a certain specified range
function random(len, lo, hi){
	var arr = random_f(len, lo, hi);
	return arr.map(v => Math.round(v));
}

exports.spread = spread;
exports.spreadExp = spreadExp;
exports.spreadFloat = spreadFloat;
exports.spreadFloatExp = spreadFloatExp;
exports.spreadInclusive = spreadInclusive;
exports.spreadInclusiveFloat = spreadInclusiveFloat;

// exports.fill = fill;
// exports.random_f = random_f;
// exports.random = random;