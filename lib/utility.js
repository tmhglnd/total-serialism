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

// Return the remainder after division
// Works also in the negative direction
function mod(v, mod){
   return ((v % mod) + mod) % mod;
}//mod()

// Scale a value from a range to a new value
// in a different given range, float output
function scale(v, in_lo, in_hi, out_lo, out_hi, exp){
	v = (v - in_lo) / (in_hi - in_lo);
	var sign = (v >= 0) ? 1 : -1;
	v = Math.pow(Math.abs(v), exp) * sign;
	return v * (out_hi - out_lo) + out_lo;
}//scaleF()

// Wrap a values between a lo and hi range
// different then mod because exceeded value
// wraps to the boundary
function wrap(v, lo, hi){
	if (v < lo){ v = hi; }
	else if (v > hi){ v = lo; }
	return v;
}//wrap()

// Constrain a value between 2 numbers
function constrain(v, min, max){
	return Math.min(max, Math.max(min, v));
}//constrain()

// Return the index of a value from a list
function get_index(v, arr){
	for (var i = 0; i < arr.length; i++){
		if (arr[i] == v){
			return i;
		}
	}
}//getIndex()

exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
exports.scale_list_f = scale_list_f;
exports.scale_list = scale_list;

exports.mod = mod;
exports.scale = scale;
exports.wrap = wrap;
exports.constrain = constrain;
exports.get_index = get_index;