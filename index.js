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
const Stochastic = require('./lib/gen-stochastic.js');
const Modification = require('./lib/transform.js');
const Utility = require('./lib/utility.js');
// const Dict = require('./lib/dict.js');

// export the various libraries
exports.Gen = Generative;
exports.Algo = Algorithmic;
exports.Rand = Stochastic;
exports.Mod = Modification;
exports.Util = Utility;
// exports.Dict = Dict;