// Generate a list of n-length starting at one value
// up till (excluding) the 3th argument. 
// Evenly spaced values in between in floating-point
function spread_f(len, lo, hi){
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
		listOut[i] = (i / len) * range + lo;
	}
	return listOut;
}//spreadF()

// Spread function rounded to integers
function spread(len, lo, hi){
	var arr = spread_f(len, lo, hi);
	return arr.map(v => Math.round(v));
}//spread()

// Generate a list of n-length starting at one value
// ending at the 3th argument.
// Evenly spaced values in between in floating-point
function spreadinclusive_f(len, lo, hi){
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
}//spreadinclusive()

// Spreadinclusive function rounded to integers
function spreadinclusive(len, lo, hi){
	var arr = spreadinclusive_f(len, lo, hi);
	return arr.map(v => Math.round(v));
}//spreadinclusive()

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
}//fill()

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
}//random()

// generate a list of random integer values 
// between a certain specified range
function random(len, lo, hi){
	var arr = random_f(len, lo, hi);
	return arr.map(v => Math.round(v));
}//random()

exports.spread_f = spread_f;
exports.spread = spread;
exports.spreadinclusive_f = spreadinclusive_f;
exports.spreadinclusive = spreadinclusive;
exports.fill = fill;
exports.random_f = random_f;
exports.random = random;