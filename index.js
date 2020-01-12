//==============================================================================
// index.js
// main of 'total-serialism' Package
// by Timo Hoogland (@t.mo / @tmhglnd), www.timohoogland.com
// MIT License
//
// total-serialism is a set of methods for the generation and 
// transformation of number sequences designed with algorithmic 
// composition for music in mind.
//==============================================================================

// require the various libraries
const Generative = require('./lib/gen-basic.js');
const Algorithmic = require('./lib/gen-complex.js');
const Modification = require('./lib/transform.js');
// const Util = require('./lib/utilities.js');
// const Dict = require('./lib/dict.js');

// require seedrandom package
// const seedrandom = require('seedrandom');

// export the various libraries
exports.Gen = Generative;
exports.Mod = Modification;
exports.Algo = Algorithmic;
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