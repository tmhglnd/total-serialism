
const Generative = require('./lib/gen-basic.js');
const Algorithmic = require('./lib/gen-complex.js');
const Transform = require('./lib/transform.js');
// const Util = require('./lib/utilities.js');
// const Dict = require('./lib/dict.js');

// require seedrandom package
// const seedrandom = require('seedrandom');

exports.Generative = Generative;
exports.Transform = Transform;
exports.Algorithmic = Algorithmic;
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