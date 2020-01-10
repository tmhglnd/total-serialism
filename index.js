const Gen = require('./lib/generate.js');
// const Algo = require('./lib/algorithmic.js');
// const Util = require('./lib/utilities.js');
// const Trans = require('./lib/transformational.js');
// const Dict = require('./lib/dict.js');

// require seedrandom package
// const seedrandom = require('seedrandom');

exports.Gen = Gen;
// exports.Trans = Trans;
// exports.Algo = Algo;
// exports.Util = Util;
// exports.Dict = Dict;

/*
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
*/