/**
 * @file gen-stochastic.js
 * @description Part of the 'total-serialism' Package. 
 * 
 * Stochastic and Probablity Theory algorithms to generate various forms of 
 * random number sequences
 * 
 * credits:
 * - Gratefully using the seedrandom package by David Bau
 * 
 * @copyright 2020-2026 Timo Hoogland (@tmhglnd), www.timohoogland.com
 * @license MIT License
 */

// require Generative methods
const { spread } = require('./gen-basic.js');
const { fold, size, toArray } = require('./utility');
const { change } = require('./statistic');

// require seedrandom package
let seedrandom = require('seedrandom');

// local pseudorandom number generator and seed storage
let rng = seedrandom();
let _seed = 0; 
seed(_seed);

/**
 * Set the seed for the Random Number Generators. A value of `0` sets the seed 
 * to a random value between 1 and 9999. The seed can only be set **once** for 
 * every import of the library. However, the seed can be reset in between 
 * function calls. You can retrieve the current seed with `getSeed()`.
 * @example
 * ```js
 * // set a random seed between 0-9999
 * Rand.seed()
 * 
 * // set the random number generator seed
 * Rand.seed(19374);
 * ```
 * @param {Number|String} seed - set the seed
 * @returns {Number|String} the seed
 */
function seed(v=0){
	if (v === 0 || v === null || v === undefined){
		// generate a random seed, which is retrievable
		_seed = Math.floor(Math.random() * 9999) + 1;
	} else {
		_seed = v;
	}
	rng = seedrandom(_seed);
	// also return the seed that has been set
	return _seed;
}
exports.seed = seed;

/**
 * Get the seed from the Random Number Generator. Returns the value that was 
 * latest set with `seed()`.
 * @example
 * ```js
 * // get the random number generator seed
 * Rand.getSeed();
 * // => 19374
 * ```
 * @returns {Number|String} the seed
 */
function getSeed(){
	return _seed;
}
exports.getSeed = getSeed;

/**
 * Generate a list of random floating points between a specified range 
 * (excluding high value).
 * @alias randomF
 * @example
 * ```js
 * Rand.randomFloat(3, -1, 1); 
 * //=> [ 0.6291111850577886, 0.15153786227276944, 0.32814801081039646 ]
 * ```
 * @param {Int} size - size of output array (default = 1)
 * @param {Number=} min - minimum range (optional, default = 0)
 * @param {Number=} max - maximum range (optional, default = 1)
 * @returns {Number[]}
 */
function randomFloat(len=1, lo=1, hi=0){
	// swap if lo > hi
	if (lo > hi){ var t=lo, lo=hi, hi=t; }
	// len is positive and minimum of 1
	len = size(len);

	var arr = [];
	for (var i=0; i<len; i++){
		arr[i] = (rng() * (hi - lo)) + lo;
	}
	return arr;
}
exports.randomFloat = randomFloat;
exports.randomF = randomFloat;

/**
 * Generate a list of random integers between a specified range 
 * (excluding high value).
 * @example
 * ```js
 * Rand.random(5, 0, 12); 
 * //=> [ 3, 3, 7, 1, 0 ]
 * ```
 * @param {Int} size - size of output array (default = 1)
 * @param {Number=} min - minimum range (optional, default = 0)
 * @param {Number=} max - maximum range (optional, default = 12)
 * @returns {Number[]}
 */
function random(len=1, lo=12, hi=0){
	var arr = randomFloat(len, lo, hi);
	return arr.map(v => Math.floor(v));
}
exports.random = random;

/**
 * Generate a list of random floats, but the next random value is 
 * within a limited step-range of the previous value generating a random 
 * "drunk" walk, also referred to as brownian motion. Inspired by the `[drunk]
 * `-object in MaxMSP.
 * @alias drunkF
 * @example
 * ```js 
 * Rand.drunkFloat(5);
 * //=> [ 0.493, 0.459, 0.846, 0.963, 0.400 ] 
 * 
 * //  0.88 ┼╮╭╮  
 * //  0.76 ┤╰╯│  
 * //  0.63 ┤  │  
 * //  0.51 ┤  ╰╮ 
 * //  0.39 ┤   │ 
 * //  0.26 ┤   ╰ 
 * ```
 * @param {Int} size - size of output array (default = 1)
 * @param {Number=} step - step range for next random value (default = 1)
 * @param {Number=} min - minimum range (optional, default = 0)
 * @param {Number=} max - maximum range (optional, default = 1)
 * @param {Number=} start - starting point (optional, default = (lo+hi)/2)
 * @param {Bool=} fold - fold between lo and hi range (optional, default = true)
 * @returns {Number[]}
 */
function drunkFloat(len=1, step=1, lo=1, hi=0, p, bound=true){
	// swap if lo > hi
	if (lo > hi){ var t=lo, lo=hi, hi=t; }
	p = (!p)? (lo+hi)/2 : p;
	// len is positive and minimum of 1
	len = size(len);

	var arr = [];
	for (var i=0; i<len; i++){
		// direction of next random number (+ / -)
		var dir = (rng() > 0.5) * 2 - 1;
		// prev + random value * step * direction
		p += rng() * step * dir;

		if (bound && (p > hi || p < lo)){
			p = fold(p, lo, hi);
		}
		arr.push(p);
	}
	return arr;
}
exports.drunkFloat = drunkFloat;
exports.drunkF = drunkFloat;
// exports.walkFloat = drunkFloat; // removed, unnecessary

/**
 * Generate a list of random integers, but the next random value is 
 * within a limited step-range of the previous value generating a random 
 * "drunk" walk, also referred to as brownian motion. Inspired by the `[drunk]
 * `-object in MaxMSP.
 * @example
 * ```js 
 * Rand.drunk(10, 5, 0, 24);
 * //=> [ 13, 10, 14, 13, 14, 13, 15, 10, 8, 4 ] 
 * 
 * // 22.00 ┼       ╭╮ 
 * // 17.80 ┼─╮╭─╮  ││ 
 * // 13.60 ┤ ││ ╰╮╭╯│ 
 * //  9.40 ┤ ││  ╰╯ │ 
 * //  5.20 ┤ ╰╯     │ 
 * //  1.00 ┤        ╰ 
 * 
 * Rand.drunk(10, 4, 0, 12, 6, false);
 * //=> [ 2, -2, 2, 1, -3, -1, -2, -1, 3, 6 ] 
 * 
 * //  2.00 ┤╭╮        
 * // -0.20 ┤│╰╮     ╭ 
 * // -2.40 ┼╯ ╰╮    │ 
 * // -4.60 ┤   │╭╮ ╭╯ 
 * // -6.80 ┼   ╰╯│╭╯  
 * // -9.00 ┤     ╰╯  
 * ```
 * @param {Int} size - size of output array (default = 1)
 * @param {Number=} step - step range for next random value (default = 1)
 * @param {Number=} min - minimum range (optional, default = 0)
 * @param {Number=} max - maximum range (optional, default = 12)
 * @param {Number=} start - starting point (optional, default = (lo+hi)/2)
 * @param {Bool=} fold - fold between lo and hi range (optional, default = true)
 * @returns {Number[]}
 */
function drunk(len=1, step=1, lo=12, hi=0, p, bound=true){
	let arr = drunkFloat(len, step, lo, hi, p, bound);
	return arr.map(v => Math.floor(v));
}
exports.drunk = drunk;
// exports.walk = drunk; // removed, unnecessary

/**
 * Generate a list of random integer values 0 or 1 like a coin toss, heads/
 * tails.
 * @example
 * ```js
 * // generate an array of coin tosses
 * Rand.coin(10); 
 * //=> [ 0, 1, 0, 1, 0, 1, 0, 0, 1, 0 ]
 * ```
 * @param {Int} size - number of coin tosses to output as array
 * @returns {Number[]}
 */
function coin(len=1){
	var arr = randomFloat(len, 0, 2);
	return arr.map(v => Math.floor(v));
}
exports.coin = coin;

/**
 * Generate a list of dice rolls, resulting in random integer values from 1 to 
 * 6. Optionally use a second argument to set the amount of sides for the die.
 * @example
 * ```js
 * // generate an array of dice rolls
 * Rand.dice(4); 
 * //=> [ 4, 4, 2, 3 ] 
 * 
 * // optionally set the amount of sides for the die
 * Rand.dice(4, 8); 
 * //=> [ 8, 3, 7, 1 ]
 * ```
 * @param {Int} size - number of tosses to output
 * @param {Int} sides - sides of the die (optional, default = 6)
 * @return {Number[]}
 */
function dice(len=1, sides=6){
	var arr = randomFloat(len, 1, sides+1);
	return arr.map(v => Math.floor(v));
}
exports.dice = dice;

/**
 * Generate random clave patterns. The output is a binary list that represents 
 * a rhythm, where 1's represent onsets and 0's rests. First argument sets the 
 * list length output, second argument sets the maximum gap between onsets, 
 * third argument the minimum gap.
 * @example
 * ```js
 * Rand.clave();
 * //=> [ 1, 0, 1, 0, 0, 1, 0, 1 ] 
 * //=> █ █  █ █
 * 
 * Rand.clave(8);
 * //=> [ 1, 0, 0, 1, 0, 1, 0, 1 ] 
 * //=> █  █ █ █
 * 
 * Rand.clave(16, 4);
 * //=> [ 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1 ] 
 * //=> █   █ █   █  █ █
 * 
 * Rand.clave(16, 3, 1);
 * //=> [ 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1 ] 
 * //=> █  █  ██  █ █  █  
 * ```
 * @param {Int} size - length of rhythm array (default = 8)
 * @param {Int} maximum - max gap between onsets (default = 3)
 * @param {Int} minimum - min gap between onsets (default = 2)
 * @returns {Number[]} 
 */
function clave(len=8, max=3, min=2){
	let arr = [];
	// set list length to minimum of 1
	len = size(len);

	// swap if lo > hi
	if (min > max){ var t=min, min=max; max=t; }
	// limit lower ranges
	min = Math.max(1, min);
	max = Math.max(min, max) + 1;

	let sum = 0;
	let rtm = [];
	// randomly generate list of gap intervals
	while (sum < len){
		let r = Math.floor(rng() * (max - min)) + min;
		rtm.push(r);
		sum += r;
	}
	// convert rhythmic "gaps" to binary pattern
	rtm.forEach((g) => {
		for (let i=0; i<g; i++){
			arr.push(!i ? 1 : 0);
		}
	});
	return arr.slice(0, len);
}
exports.clave = clave;

/**
 * Shuffle an array, influenced by the random seed. Based on the Fisher-Yates 
 * shuffle algorithm by Ronald Fisher and Frank Yates in 1938. The algorithm 
 * has run time complexity of O(n)
 * 
 * Alias: `scramble()`
 * 
 * @param {Array} Array array to shuffle
 * @returns {Array} shuffled array
 * @example
 * ```js
 * Rand.shuffle([0, 5, 7, 12]); 
 * //=> [ 7, 5, 0, 12 ]
 * ```
 */
function shuffle(a=[0]){
	// slice array to avoid changing the original array
	var arr = a.slice();
	for (var i=arr.length-1; i>0; i-=1) {
		var j = Math.floor(rng() * (i + 1));
		var t = arr[i];
		arr[i] = arr[j];
		arr[j] = t;
	}
	return arr;
}
exports.shuffle = shuffle;
exports.scramble = shuffle;

/**
 * Generate a list of 12 semitones (integers 0-11), then shuffle the list based 
 * on the random seed. 
 * @example
 * ```js
 * // basically: Rand.shuffle(Gen.spread(12));
 * Rand.twelveTone(); 
 * //=> [ 11, 0, 8, 2, 4, 9, 1, 6, 3, 5, 7, 10 ]
 * ```
 * @returns {Number[]} twelvetone row
 */
function twelveTone(){
	return shuffle(spread(12));
}
exports.twelveTone = twelveTone;
exports.toneRow = twelveTone;

/**
 * Generate a list of unique random integer values between a certain specified 
 * range (excluding high val). An 'urn' is filled with values and when one is 
 * picked it is removed from the urn. If the outputlist is longer then the 
 * range, the urn refills when empty. On refill it is made sure no repeating 
 * value can be picked. Inspired by the `[urn]`-object in MaxMSP.
 * @example
 * ```js
 * // generate an array with random values picked from an urn
 * // with default range 0 to 12 (exclusive)
 * Rand.urn(5);
 * //=> [ 3, 6, 2, 8, 7 ] 
 * 
 * // set the range with a second argument to 0-7 (exclusive)
 * // when more values then range are requested the urn 
 * // refills and reshuffles
 * Rand.urn(10, 7);
 * //=> [ 6, 4, 3, 2, 0, 5, 1, 4, 2, 1 ] 
 * 
 * // A third argument sets a lower range replacing the default 0
 * Rand.urn(12, -3, 3);
 * //=> [ -3, 1, -1, 2, 0, -2, 2, -2, 0, -1, -3, 1 ]
 * ```
 * @param {Int} size size of output array (default = 1)
 * @param {Int} maximum max range (optional, default = 12)
 * @param {Int} minimum min range (optional, defautl = 0)
 * @returns {Number[]} 
 */
function urn(len=1, hi=12, lo=0){
	// swap if lo > hi
	if (lo > hi){ var t=lo, lo=hi, hi=t; }
	// generate array with values and pick
	return pick(len, spread(hi-lo, lo, hi));
}
exports.urn = urn;

/**
 * Choose random items from an array with uniform probability 
 * distribution. The default array is an array of 0 and 1.
 * @example
 * ```js
 * Rand.choose(5, [0, 1, 2, 3, 5, 8, 13]);
 * //=> [ 3, 0, 13, 3, 2 ] 
 * 
 * // Array can have other datatypes
 * Rand.choose(5, ['c', 'e', 'g']);
 * //=> [ 'c', 'c', 'g', 'e', 'g' ] 
 * ```
 * @param {Int} size - size of output array (default = 1)
 * @param {Array} items - array to choose from (optional, default=[0, 1])
 * @returns {Array} randomly chosen items
 */
function choose(len=1, a=[0, 1]){
	// if a is no Array make it an array
	a = toArray(a);
	// set the size to minimum of 1 or based on array length
	len = size(len);

	var arr = [];
	for (var i=0; i<len; i++){
		arr.push(a[Math.floor(rng()*a.length)]);
	}
	return arr;
}
exports.choose = choose;

/**
 * Pick random items from an array provided. An "urn" is filled with values and 
 * when one is picked it is removed from the urn. If the outputlist is longer 
 * then the range, the urn refills when empty. On refill it is made sure no 
 * repeating value can be picked.
 * @example
 * ```js
 * Rand.pick(5, [0, 1, 2, 3, 5, 8, 13]);
 * //=> [ 2, 5, 8, 1, 3 ] 
 * 
 * // Array can have other datatypes
 * Rand.pick(5, ['c', 'e', ['g', 'd']]);
 * //=> [ 'e', [ 'g', 'd' ], 'c', [ 'g', 'd' ], 'e' ] 
 * ```
 * @param {Int} size - size of output array (default = 1)
 * @param {Array} items - array to choose from (optional, default=[0, 1])
 * @returns {Array} randomly picked items
 */
function pick(len=1, a=[0, 1]){
	// set the size to minimum of 1 or based on array length
	len = size(len);
	// fill the jar with the input
	// var jar = (!Array.isArray(a))? [a] : a;
	let jar = toArray(a);

	if (jar.length < 2){
		return new Array(len).fill(jar[0]);
	}
	// shuffle the jar
	let s = shuffle(jar);
	// value, previous, output-array
	let v, p, arr = [];	
	for (let i=0; i<len; i++){
		v = s.pop();
		if (v === undefined){
			s = shuffle(jar);
			v = s.pop();
			if (v === p) {
				v = s.pop();
				s.push(p);
			}
		}
		arr[i] = v;
		p = v;
	}
	return arr;
}
exports.pick = pick;

/**
 * Expand an array based on the pattern within an array. The pattern is derived 
 * from the rate of change between values by calculating the difference (delta) 
 * between every consecutive value. The newly generated values are selected 
 * randomly from the list of possible changes, but in such a way that every 
 * change occurs once in the sequence of total changes before reshuffling 
 * and selecting the next one (see {@link pick} for explanation). The 
 * resulting output starts with the input array followed by the expansion.
 * 
 * Alias: `extrapolate()`
 * 
 * @example
 * ```js 
 * Rand.seed(3141);
 * Rand.expand([0, 9, 7, 3, 5, 0, -1], 30);
 * 
 * //=>  9.00 ┤╭╮      ╭╮                    
 * //    6.80 ┤│╰╮     ││                    
 * //    4.60 ┤│ │╭╮   ││                    
 * //    2.40 ┤│ ╰╯│   │╰─╮             ╭─╮  
 * //    0.20 ┼╯   ╰─╮╭╯  │             │ │╭ 
 * //   -2.00 ┤      ╰╯   ╰╮   ╭─╮      │ ╰╯ 
 * //   -4.20 ┼            │   │ │    ╭╮│    
 * //   -6.40 ┤            ╰╮  │ │    │╰╯    
 * //   -8.60 ┤             │╭╮│ ╰─╮  │      
 * //  -10.80 ┤             ╰╯╰╯   │╭╮│      
 * //  -13.00 ┤                    ╰╯╰╯       
 * 
 * Rand.seed(6181);
 * Rand.expand([0, 9, 7, 3, 5, 0, -1], 30);
 * 
 * //=>  9.00 ┤╭╮                            
 * //    6.80 ┤│╰╮                           
 * //    4.60 ┤│ │╭╮                         
 * //    2.40 ┤│ ╰╯│        ╭╮╭╮             
 * //    0.20 ┼╯   ╰─╮╭╮    │╰╯╰╮        ╭── 
 * //   -2.00 ┤      ╰╯│  ╭╮│   ╰╮       │   
 * //   -4.20 ┼        ╰╮ │││    ╰╮   ╭╮ │   
 * //   -6.40 ┤         │ │╰╯     │╭╮ ││ │   
 * //   -8.60 ┤         ╰╮│       ╰╯╰╮│╰╮│   
 * //  -10.80 ┤          ╰╯          ││ ╰╯   
 * //  -13.00 ┤                      ╰╯      
 * ```
 * @param {Number[]} array - array of numbers to expand
 * @param {Int} size - size of output array (including input size)
 * @returns {Number[]} expanded array
 */
function expand(a=[0, 0], l=0){
	a = toArray(a);
	l = size(l);
	// return a if output length is smaller/equal then input array
	if (l <= a.length){ return a; }
	// get the differences and pick the expansion options
	let p = change(a);
	let chg = pick(l-a.length, p);
	// empty output array and axiom for output
	let arr = a.slice();
	let acc = arr[arr.length-1];
	// accumulate the change and store in array
	for (let c=0; c<chg.length; c++){
		arr.push(acc += chg[c]);
	}
	return arr;
}
exports.expand = expand;
exports.extrapolate = expand;

// generate a "cantus firmus" WIP
// 
// function cantusFirmus(){
// 	let tonic = 0;
// 	let current = tonic;
// 	let _prev;
// 	let arr = [];
// 	arr.push(current);

// 	let maxDistance = 0;
// 	let minLength = 8;
// 	let maxLength = 16;

// 	for (let i = 0; i < 20; i++){
// 		let ivl = rng() < 0.5 ? 1 : -1;
// 		current += ivl;
// 		arr.push(current);
// 		_prev = current;
// 	}
// 	console.log(arr);
// }
// exports.cantusFirmus = cantusFirmus;
// cantusFirmus();

// generate a "first species" counterpoint
// 
// function firstSpeciesCounterpoint(a=[0]){
// 	let prevInterval;
// }
// exports.firstSpeciesCounterpoint = firstSpeciesCounterpoint;
// exports.counterpoint = firstSpeciesCounterpoint;

/**
 * Build a Markov Chain (One of the simpelest forms of ML) from a set of 
 * datapoints and use it to generate new values or an array of values based on 
 * the probabilities of the transitions in the provided training dataset. A 
 * Markov Chain is a model that describes possible next events based on a 
 * current state (first order) and sometimes previous states (2nd, 3rd, ... 
 * n-order). The Markov Chain is a broadly used method in algorithmic music to 
 * generate new material (melodies, rhythms, but even words) based on a set of 
 * provided material, but can also be used in linguistics to analyze word or 
 * sentence structures.
 * @class
 * @constructor
 * @public
 * @example
 * ```js
 * const Rand = require('total-serialism').Stochastic;
 * 
 * var melody = ['c', 'e', 'f', 'e', 'g', 'f', 'a', 'c'];
 * // make a MarkovChain instance and optionally train with array
 * let markov = new Rand.MarkovChain(melody);
 * 
 * // add more to the training
 * var melody2 = ['g', 'a', 'b', 'g', 'a', 'f', 'd', 'e'];
 * markov.train(melody2);
 * 
 * // view the transition table (stored as dictionary)
 * // can also be used to export the table to a file
 * console.log(markov.table);
 * // { c: [ 'e' ],
 * //   e: [ 'f', 'g' ],
 * //   f: [ 'e', 'a', 'd' ],
 * //   g: [ 'f', 'a', 'a' ],
 * //   a: [ 'c', 'b', 'f' ],
 * //   b: [ 'g' ],
 * //   d: [ 'e' ] }
 * 
 * // set the state of the model used as initial value
 * markov.state('c');
 * 
 * // random number generator is connected to global seed
 * Rand.seed(31415); 
 * 
 * // go to the next state based on the models probabilities
 * markov.next();
 * // => 'e'
 * 
 * // generate an array of 10 values 
 * markov.chain(10);
 * // => [ 'f', 'd', 'e', 'g', 'a', 'b', 'g', 'a', 'c', 'e' ]
 * 
 * // clear the model
 * markov.clear();
 * 
 * // read a model from a json/object structure
 * markov.read({ c: ['e'], e: ['f', 'g' ]});
 * ```
 */
class MarkovChain {
	/**
	 * @param {Array} data - training data
	 */
	constructor(data){
		// transition probabilities table
		this._table = {};
		// train if dataset is provided
		if (data) { this.train(data) };
		// current state of markov chain
		this._state;
	}
	/** output a copy of the table as an object
	 * @returns {Object}
	 */ 
	get table(){
		return { ...this._table };
	}
	/** read a markov chain table from a json file
	 * @param {Object} table - pretrained Object table to read
	 * @returns {Bool} true if succesful
	 */
	read(t){
		if (Array.isArray(t) || typeof t !== 'object'){
			console.error(`Error: input is not a valid json formatted table. If your input is an array use train() instead.`);
			return false;
		}
		this._table = t;
		return true;
	}
	/** empty the transition probabilities */
	clear(){
		this._table = {};
	}
	/** build a transition table from array of values
	 * @param {Array} data - training data 
	 */
	train(a){
		if (!Array.isArray(a)){ 
			return console.error(`Error: train() expected array but received: ${typeof a}`);
		}
		for (let i=1; i<a.length; i++){
			if (!this._table[a[i-1]]) {
				this._table[a[i-1]] = [a[i]];
			} else {
				this._table[a[i-1]].push(a[i]);
			}
		}
	}
	seed(s){
		// deprecated, seed is now also set for the global rng
		seed(s);
	}
	/** set the state
	 * @param {*} state - the state (depends on the transition table)
	 */ 
	state(a){
		if (!this._table[a]){
            console.error(`Warning: ${a} is not part of transition table`);
		}
		this._state = a;
	}
	/** generate a random state */
	randomState(){
		let states = Object.keys(this._table);
		this._state = states[Math.floor(rng() * states.length)];
	}
	/** if the state is undefined or has no transition in table randomly choose 
	 * from all
	 * @returns {*} next state 
	 */
	next(){
		if (this._state === undefined || !this._table[this._state]){
			this.randomState();
		}
		// get probabilities based on state
		let probs = this._table[this._state];
		// select pseudorandomly next value
		this._state = probs[Math.floor(rng() * probs.length)];
		return this._state;
	}
	/** return an array of values generated iteratively with next()
	 * @param {Int} size - size of output array (default = 2)
	 * @returns {Array} generated values
	 */
	chain(l=2){
		let c = [];
		for (let i=0; i<l; i++){
			c.push(this.next());
		}
		return c;
	}
}
exports.MarkovChain = MarkovChain;

/**
 * This is an identical approach to the {@link MarkovChain} while also offering 
 * the possibility of training to create n-order chains. In theory, longer 
 * chains preserve the original structure of the model, but won't generate as 
 * diverse outputs.
 * @alias DeepMarkov
 * @class
 * @constructor
 * @public
 * @example
 * ```js
 * const Rand = require('total-serialism').Stochastic;
 * 
 * var pattern = [1, 2, 3, 1, 2, 4, 1, 2, 5, 2, 3, 4];
 * // make a MarkovChain instance and optionally train with array
 * // an optional second argument sets the order of the markov (default=2)
 * let markov = new Rand.DeepMarkov(pattern, 2);
 * 
 * // view the transition table (stored as Map())
 * // Keys are stored as stringis derived via JSON.stringify()
 * console.log(markov.table);
 * // Map(7) {
 * //   '[1,2]' => [ 3, 4, 5 ],
 * //   '[2,3]' => [ 1, 4 ],
 * //   '[3,1]' => [ 2 ],
 * //   '[2,4]' => [ 1 ],
 * //   '[4,1]' => [ 2 ],
 * //   '[2,5]' => [ 2 ],
 * //   '[5,2]' => [ 3 ]
 * // }
 * 
 * // set the state of the model used as initial value
 * markov.state([1, 2]);
 * 
 * // random number generator is connected to global seed
 * Rand.seed(31415);
 * 
 * // go to the next state based on the model probabilities
 * markov.next();
 * // => 5
 * 
 * // generate an array of 10 values 
 * markov.chain(10);
 * // => [ 2, 3, 1, 2, 5, 2, 3, 4, 1, 2 ]
 * 
 * // clear the model
 * markov.clear();
 * 
 * // TO DO:
 * // read/write a model from a Map structure
 * let model = markov.table;
 * let otherMarkov = new DeepMarkov();
 * otherMarkov.read(model);
 * 
 * // for storage to file or transfer between DeepMarkov instances
 * // you can use the build in stringify and parse methods
 * // these methods utilize JSON.stringify() and .parse()
 * // with specific replacer and reviver methods
 * let modelString = markov.stringify();
 * let fromStringMarkov = new DeepMarkov();
 * fromStringMarkov.parse(modelString);
 * ```
 */
class DeepMarkov {
	/**
	 * @param {Array} data - training data
	 * @param {Int=} order - markov-chain order (default = 2)
	 */
	constructor(data, order){
		// transition probabilities table
		this._table = new Map();
		// train if dataset is provided
		if (data) { this.train(data, order) };
		// current state of markov chain
		this._state = '';
	}
	/** output a copy of the table as a Map object
	 * @returns {Map}
	 */ 
	get table(){
		return new Map(JSON.parse(JSON.stringify(Array.from(this._table))));
	}
	/** read a markov chain table from a json file
	 * @param {Map} table - pretrained Map table to read
	 * @returns {Bool} true if succesful
	 */
	read(t){
		// read a markov chain table from a Map() generated with DeepMarkov
		if (Array.isArray(t) || t instanceof Map === false){
			console.error(`Error: input is not a valid Map() formatted table. If your input is an array use train() instead.`);
			return false;
		}
		this._table = t;
		return true;
	}
	/** return stringified version of the DeepMarkov table */
	stringify(){
		return JSON.stringify(this._table, replacer);
	}
	/** parse an incoming string to a Map() for transition table 
	 * @param {String} table - transition table as a string to parse for Map
	 * @return {Bool} true if succesfully parsed
	*/
	parse(p){
		try {
			let parsed = JSON.parse(p, reviver);
			if (parsed instanceof Map === false){
				console.error(`Error: input is not a valid string that can be parsed to a Map().`)
				return false;
			}
			this._table = parsed;
			return true;
		} catch (e) {
			console.error(`Error: input is not a valid string that can be parsed to a Map().`);
			return false;
		}
	}
	/** empty the transition probabilities */
	clear(){
		// empty the transition probabilities
		this._table = new Map();
	}
	/** build a transition table from array of values
	 * @param {Array} data - training data 
	 * @param {Int=} order - markov-chain order (default = 2)
	 */
	train(a, o=2){
		if (!Array.isArray(a)){ 
			return console.error(`Error: train() expected array but received: ${typeof a}`);
		}
		if (o < 1){
			return console.error(`Error: train() expected order greater then 1 but received ${o}`);
		}
		for (let i=0; i<(a.length-o); i++) {
			let slice = a.slice(i, i+o);
			let key = JSON.stringify(slice);

			let next = a[i+o];

			if (this._table.has(key)) {
				let arr = this._table.get(key);
				arr.push(next);
				this._table.set(key, arr);
			} else {
				this._table.set(key, [a[i+o]]);
			}
		}
	}
	seed(s){
		// deprecated, seed is now also be set for the global rng
		seed(s);
	}
	/** set the state
	 * @param {*} state - the state (depends on the transition table)
	 */ 
	state(a){
		// stringify the state
		let s = JSON.stringify(a);
		// set the state
		if (!this._table.has(s)) {
			console.error(`Warning: ${a} is not part of transition table`);
		}
		this._state = s;
	}
	/** generate a random state */
	randomState() {
		let keys = Array.from(this._table.keys())
		this._state = keys[Math.floor(rng() * keys.length)]
	}
	/** if the state is undefined or has no transition in table randomly choose 
	 * from all
	 * @returns {*} next state 
	 */
	next(){
        // if the state is undefined or has no transition in table
        // randomly choose from all
		if (this._state === undefined || !this._table.has(this._state)) {
			this.randomState();
		}
		// get probabilities based on state
		let probs = this._table.get(this._state);
		let newState = probs[Math.floor(rng() * probs.length)]

		// Now recreate a nice string representation
		let prefix = JSON.parse(this._state);
		prefix.shift();
		prefix.push(newState);
		this._state = JSON.stringify(prefix);

		return newState;
	}
	/** return an array of values generated iteratively with next()
	 * @param {Int} size - size of output array (default = 2)
	 * @returns {Array} generated values
	 */
	chain(l=2){
		// return an array of values generated with next()
		let c = [];
		for (let i=0; i<l; i++){
			c.push(this.next());
		}
		return c;
	}
}
exports.DeepMarkov = DeepMarkov;
exports.DeepMarkovChain = DeepMarkov;

// functions thanks to:
// https://stackoverflow.com/questions/29085197/how-do-you-json-stringify-an-es6-map
// helper function for Stringifying a Map() in DeepMarkov
function replacer(key, value) {
	if (value instanceof Map) {
		return {
			dataType: 'Map',
			value: [...value]
			// value: [Array.from(value.entries())], 
		};
	}
	return value;
}

// helper function for parsing a Map() in DeepMarkov
function reviver(key, value) {
	if (typeof value === 'object' && value !== null) {
		if (value.dataType === 'Map') {
			return new Map(value.value);
		}
	}
	return value;
}