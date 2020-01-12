//==============================================================================
// gen-complex.js
// part of 'total-serialism' Package
// by Timo Hoogland (@t.mo / @tmhglnd), www.timohoogland.com
// MIT License
//
// Complex Algorithms and methods that generate number sequences as 
// startingpoint for composing melodies, rhythms and more
// 
// credits:
// - euclid() function based on paper by Godfried Toussaint  
// http://cgm.cs.mcgill.ca/~godfried/publications/banff.pdf 
// and code from https://github.com/brianhouse/bjorklund
//==============================================================================

const Transform = require('./transform.js');

// A euclidean rhythm generator. Generates values of 0 and 1
// distributed based on the common denominator after division
//
// @param {Int} steps
// @param {Int} beats
// @param {Int} rotate
// @return {Array}
// 
var pattern, counts, remainders;

function euclid(steps=8, beats=4, rot=0){
	pattern = [];
	counts = [];
	remainders = [];
	var level = 0;
	var divisor = steps - beats;

	remainders.push(beats);

	while (remainders[level] > 1){
		counts.push(Math.floor(divisor / remainders[level]));
		remainders.push(divisor % remainders[level]);
		
		divisor = remainders[level];
        level++;
	}
    counts.push(divisor);
    build(level);

	return Transform.rotate(pattern, rot + pattern.indexOf(1));
}
exports.euclid = euclid;

function build(l){
	var level = l;

	if (level == -1){
			pattern.push(0);
	} else if (level == -2){
			pattern.push(1);
	} else {
		for (var i = 0; i < counts[level]; i++){
			build(level-1);
		}
		if (remainders[level] != 0){
			build(level-2);
		}
	}
}