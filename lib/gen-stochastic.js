//==============================================================================
// gen-stochastic.js
// part of 'total-serialism' Package
// by Timo Hoogland (@t.mo / @tmhglnd), www.timohoogland.com
// MIT License
//
// Stochastic algorithms to generate various forms of random 
// number sequences
// 
// credits:
//==============================================================================

// generate a list of random float values 
// between a certain specified range
function randomFloat(len=1, lo=0, hi=1){
	var arr = new Array(len);
	//swap lo-hi
	if (lo > hi){ var t=lo, lo=hi, hi=t; }
	range = hi - lo;
	for (var i=0; i<len; i++){
		arr[i] = (Math.random() * range) + lo;
	}
	return arr;
}
exports.random_f = random_f;

// generate a list of random integer values 
// between a certain specified range
function random(len, lo, hi){
	var arr = randomFloat(len, lo, hi);
	return arr.map(v => Math.round(v));
}
exports.random = random;