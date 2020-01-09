const Gen = require('algocomp/lib/generative.js');
const Algo = require('algocomp/lib/algorithmic.js');
const Util = require('algocomp/lib/utilities.js');
const Trans = require('algocomp/lib/transformational.js');
const Dict = require('algocomp/lib/dict.js');

// require seedrandom package
const seedrandom = require('seedrandom');

exports.Gen = Gen;
exports.Trans = Trans;
exports.Algo = Algo;
exports.Util = Util;
exports.Dict = Dict;

// Set the seed for all the Random Number Generators. 
// If seed is 0 set to unpredictable seeding
function seed(v){
	if (v == 0){
		seedrandom();
	} else {
		seedrandom(v, {global: true});
	}
}//seed()

exports.seed = seed;