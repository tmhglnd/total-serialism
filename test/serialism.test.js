console.time('requires load');

const fs = require('fs');

// test with different builds
let entryPoint = "../index";
// entryPoint = "../build/ts.bundle.js";
// entryPoint = "../build/ts.es5.js";
entryPoint = "../build/ts.es5.min.js";

const Srl = require(entryPoint);
const Gen = Srl.Generative;
const Algo = Srl.Algorithmic;
const Mod = Srl.Transform;
const Rand = Srl.Stochastic;
const Stat = Srl.Statistic;
const TL = Srl.Translate;
const Util = Srl.Utility;

console.timeEnd('requires load');
console.log();

/*
	Test criteria:
	- test for no argument
	- test for single argument
	- test for multiple arguments
	- test for negative values
	- test for strings vs numbers
*/

// Util.plot(Gen.saw(20, 4), { height: 10, data: false, plot: false });
// Util.plot(Gen.saw(35, Gen.sineFloat(35, 1, 2, 4)), { height: 10 });

// console.log(Util.plot(Gen.saw(30, 1), { height: 10}));
// console.log(Util.plot(Gen.saw(30, 1), { height: 10 }));

// var markov = new Rand.MarkovChain();
// var set = [0, 1, 1, 2, 1, 3, 2, 3, 1, 3, 0];
// var set2 = [0, 7, 5, 7, 7, 9, 3, 3, 5, 0, 0, 1];

// var melody = ['c', 'e', 'f', 'e', 'g', 'f', 'a', 'c'];
// var melody2 = ['g', 'a', 'g', 'a', 'f', 'd', 'e', 'b'];

// // train with an array of values
// markov.train(melody);
// // add more to the training
// markov.train(melody2);
// console.log(markov.table);
// // var mark2 = new Rand.MarkovChain(markov.table);
// // console.log('chain 2', mark2.table);
// // markov.state(2);
// markov.state('c');
// // markov.seed(58392);
// markov.seed(31415);
// console.log(markov.next());
// console.log('result', markov.chain(10));

// markov.clear();
// console.log(markov.table);

// let arr = Algo.euclid(8, 5);
// let arr2 = Rand.clave(8);
// console.log(arr);
// console.log(arr2);
// console.log(Mod.merge(arr, arr2));
// console.log(Mod.lace(arr, arr2));

fullTest();

function fullTest(){
	console.time('Total Time');

	testSerial();
	testGen();
	testAlgo();
	testRand();
	testMod();
	testStat();
	testTranslate();
	testUtil();

	pagebreak("All Tests Passed");
	console.timeEnd('Total Time');
}

// Global vars for tests
var complexRules = {
	0: [0, 3, 7],
	3: [-1, 0],
	7: [12, 19, 0],
	12: [12, 0, 0, 5], 
	5: [0, -3, 0]
}

// Test different sections of the package
function testSerial(){
	pagebreak("Serial");

	test("Srl.Generative.spread(10)");
	test("Srl.Algorithmic.euclid(5, 3, 1)");
	test("Srl.Transform.lace([0, 1, 2], [3, 4, 5])");
}

function testGen(){
	pagebreak("Generative");

	test("Gen.spread()");
	test("Gen.spread(6)");
	test("Gen.spread(6, 12)");
	test("Gen.spread(6, -3, 12)");
	test("Gen.spread(6, -12, 3)");

	test("Gen.spreadFloat()");
	test("Gen.spreadFloat(4)");
	test("Gen.spreadFloat(4, 2)");
	test("Gen.spreadFloat(4, -1, 1)");
	
	test("Gen.spreadInc()");
	test("Gen.spreadInc(6)");
	test("Gen.spreadInc(6, 12)");
	test("Gen.spreadInc(6, -3, 12)");
	test("Gen.spreadInc(6, -12, 3)");
	
	test("Gen.spreadIncF()");
	test("Gen.spreadIncF(5)");
	test("Gen.spreadIncF(5, 2)");
	test("Gen.spreadIncF(5, -1, 1)");

	test("Gen.spreadExp(10, 0, 10, 2)");
	test("Gen.spreadIncExp(10, 0, 10, 2)");
	test("Gen.spreadExpF(12, 0, 10, 0.5)");
	test("Gen.spreadIncExpF(12, 0, 10, 0.5)");

	test("Gen.fill()");
	test("Gen.fill(10, 2, 15, 3, 20, 4)");
	test("Gen.fill([10, 20], 2, [15, [5, 3]], 3)");
	test("Gen.fill([10, 20, 2, 15, 3, 20, 4])");

	test("Util.plot(Gen.sinF(30, 1, -5, 5))");
	test("Util.plot(Gen.cosF(30, Gen.sinF(30, 2), -5, 5), {data: true})");
	
	test("Util.plot(Gen.saw(16, 8.5), {log: false})");
	test("Util.plot(Gen.sawFloat(25, 2.5), {log: false, height: 5, data: true})");
	test("Util.plot(Gen.saw(34, Gen.sinF(30, 2), 0, 12))");

	test("Util.plot(Gen.squareFloat(30, 4, 0, 1, 0.2), {log: false, height: 2})");
	test("Util.plot(Gen.square(30, 3, 0, 12, 0.8), {log: false, height: 2})");
	test("Util.plot(Gen.squareFloat(30, Gen.sinF(30, 2, 1, 5)), {log: false, height: 5, data: true})");
}

function testAlgo(){
	pagebreak("Generative Complex");
	
	pagebreak("Euclid");
	test("Algo.euclid()");
	test("Algo.euclid(10, 3)");
	test("Algo.euclid(8, 5)");
	test("Algo.euclid(16, 9, 1)");
	test("Algo.euclid(31, 17)");

	test("Algo.fastEuclid()");
	test("Algo.fastEuclid(10, 3)");
	test("Algo.fastEuclid(8, 5)");
	test("Algo.fastEuclid(16, 9, 1)");
	test("Algo.fastEuclid(31, 17)");
	
	pagebreak("HexBeat");
	test("Algo.hexBeat()");
	test("Algo.hexBeat('f898')");
	test("Algo.hexBeat('a9d2')");
	test("Algo.hexBeat(573)");
	test("Algo.hexBeat(['32fa'])");
	test("Algo.hexBeat(['-zxyt'])");
	test("Algo.hexBeat(0x89fc)");
	
	pagebreak("Lindenmayer");
	test("Algo.linden()");
	// koch curve
	test("Algo.linden('F', 2, {F: 'F+F-F-F+F'})");
	// cantor set
	test("Algo.linden('A', 3, {A: 'ABA', B: 'BBB'})");
	// cantor set as 0's and 1's in an array ruleset
	test("Algo.linden(1, 3, {1: [1, 0, 1], 0: [0, 0, 0]})");
	// Thue-Morse sequence
	test("Algo.linden('A', 4, {A: 'AB', B: 'BA'})");
	// Thue-Morse sequence as 0's and 1's
	test("Algo.linden(1, 4, {0: [0, 1], 1: [1, 0]})");
	// Sierpinski Triangle
	test("Algo.linden('F-G-G', 1, {'F': 'F−G+F+G−F', 'G' : 'GG'})");
	// usage with integers and arrays
	test("Algo.linden([1, 0, 1], 3, {0: [1], 1: [0, 1]})");
	// more complex rules for semitone melodies (see above for rules)
	test("Algo.linden(0, 3, complexRules)");

	let ca = new Algo.Automaton();
	ca.rule(122);

	Rand.seed(0);
	// ca.feed(Rand.randomFloat(40).map(x => Number(x > 0.5)));
	ca.feed(Rand.coin(40));

	caRes = [];
	for (let i=0; i<10; i++){
		caRes.push(ca.next());
	}
	Util.draw(caRes);

	pagebreak("Collatz");
	test('Algo.collatz()');
	test('Algo.collatz(43)');
	test('Algo.collatz(7)');
	test('Algo.collatz(314)');
	
	test('Algo.collatzMod()');
	test('Algo.collatzMod(43)');
	test('Algo.collatzMod(7, 12)');
	test('Algo.collatzMod(314, 5)');

	pagebreak("Fibonacci");
	test('Algo.fibonacci()');
	test("Algo.fibonacci(12)");
	test("Algo.fibonacci(2, 100, true)");
	
	test('Algo.pisano()');
	test("Algo.pisano(12)");
	test("Algo.pisano(7)");
	test("Algo.pisano(4, 10)");

	test("Algo.pell(10)");
	test("Algo.threeFibonacci(10)");
	test("Algo.lucas(10)");

	test("Algo.nbonacci(10, 1, 3, 2)");
	test("Algo.nbonacci(10, 0, 1, 1)");
}

function testRand(){
	pagebreak("Stochastic");

	test("Rand.seed(19374)");
	test("Rand.randomFloat(3, -1, 1)");
	test("Rand.randomF(3, 0.2, 0.5)");

	test("Rand.seed(4827)");
	test("Rand.random(5, 2)");
	test("Rand.random(5, 0, 12)");

	test("Rand.seed(4827)");
	test("Rand.random(5, 2)");
	test("Rand.random(5, 0, 12)");

	test("Rand.seed(1618)");
	test("Rand.drunkFloat(5)");
	console.log(Util.plot(Rand.drunkFloat(5, 1), {height: 5}));
	
	test("Rand.drunk(10, 5, 0, 24)");
	console.log(Util.plot(Rand.drunk(10, 24, 0, 24), {height: 5}));

	test("Rand.drunk(10, 4, 0, 12, 6, false)");
	console.log(Util.plot(Rand.drunk(10, 4, 0, 12, 1, false), {height: 5}));

	test("Rand.seed(0)");
	test("Rand.coin(10)");

	test("Rand.dice(4)");
	test("Rand.dice(4)");

	// var shufArr = [0, 5, 7, 12];
	// console.log(Mod.shuffle(shufArr));
	// console.log(shufArr);
	test("Rand.shuffle()");
	test("Rand.seed(1473)");
	test("Rand.shuffle([0, 5, 7, 12])");
	test("Rand.shuffle([0, 5, 7, 12])");

	test("Rand.seed(1473)");
	test("Rand.shuffle([0, 5, 7, 12])");

	test("Rand.seed(4923)");
	test("Rand.twelveTone()");
	test("Rand.twelveTone()");

	test("Rand.seed(7483)");
	test("Rand.clave()");
	test("Rand.clave(8)");
	test("Rand.clave(16, 4)");
	test("Rand.clave(16, 3, 1)");

	test("Rand.seed(4923)");
	test("Rand.twelveTone()");

	test('Rand.seed(75631)');
	test('Rand.urn(5)');
	test('Rand.urn(10, 7)');
	test('Rand.urn(12, -3, 3)');

	test("Rand.choose(5, [0, 1, 2, 3, 5, 8, 13])");
	test("Rand.choose(5, ['c', 'e', 'g'])");
	test("Rand.pick(5, [0, 1, 2, 3, 5, 8, 13])");
	test("Rand.pick(5, ['c', 'e', ['g', 'd']])");

	let arr = [0, 9, 7, 3, 5, 0, -1];
	Rand.seed(3141);
	test("Rand.expand([0, 9, 7, 3, 5, 0, -1], 30)");

	test('Rand.seed(3141)');
	Util.plot(Rand.expand([0, 9, 7, 3, 5, 0, -1], 30), { height: 10 });
	
	test("Rand.seed(6181)");
	console.log('Rand.expand(30, [0, 9, 7, 3, 5, 0, -1]')
	Util.plot(Rand.expand([0, 9, 7, 3, 5, 0, -1], 30), { height: 10 });
}

function testMod(){
	pagebreak("Transform");
	
	test("Mod.clone()");
	test("Mod.clone(3)");
	test("Mod.clone([0, 5, 7], 1)");
	test('Mod.clone([0, 5, 7], 0, 12, -12)');
	test('Mod.clone([0, [5, 9], [7, 12]], 0, 10, -10)');
	test('Mod.clone([0, 5, 7], [0, 12, -12])');
	test("Mod.clone(['kick', 'snare', 'hat'], ['_808', '_909'])");
	test("Mod.clone(['c', ['e', 'g']], ['4', '5', '#3'])");
	test("Mod.clone(['c', ['e', 'g']], '4', '5', '#3')");
	
	test("Mod.combine()");
	test("Mod.combine([0, 5], [[12, [19, 24]], 7])");
	test("Mod.combine([0, 5], 12, [7, 3])");
	test("Mod.combine([['c4', 'e4']], ['g4', 'f4'])");

	test("Mod.duplicate()");
	test("Mod.duplicate(5, 4)");
	test("Mod.duplicate([0, 7, 12], 3)");
	test("Mod.duplicate([0, [3, 7], 12], 2)");
	test("Mod.duplicate(['c', 'f', 'g'], 4)");
	
	test("Mod.every([1, 0, 1, 1, 1], 2, 8)");
	test("Mod.every([1, 1, 0, 1], 4, 5, 0, -1)");
	test("Mod.every([3, 0, 7, 9, 11], 2, 8, 12)");
	test("Mod.every([3, [0, 7, 9], 11], 1, 12)");
	test("Mod.every(['c4', 'eb4', 'g4', 'f4', 'eb4'], 2, 8, 'r')");

	test("Mod.pad([3, 7, 11, 12], 9)");
	test("Mod.pad(['c', 'f', 'g'], 11, '-', 4)");

	test("Util.flat(2)");
	test("Util.flatten([1, [2, 3, [4], 5], 6])");

	test("Mod.filter()");
	test("Mod.filter([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [3, 8, 10])");
	test("Mod.filter([0, [1, 2], 3, [4, 5, 6], 7, 8, [9, 10]], [3, 8, 10])");
	test("Mod.filter([0, 1.618, 2, 3.14, 4], 3.14)");
	test("Mod.filter([0, 1, 'foo', 'bar', 2, 3], ['1', 'foo'])");
	
	test("Mod.filterType()");
	test("Mod.filterType([0, 'foo', {bar : true}, 1, undefined])");
	test("Mod.filterType([0, 1, [1, 2], 'foo', 2, null, true, {bar: 5}, 3.14, undefined], 'number')");
	test("Mod.invert()");
	test("Mod.invert()");
	test("Mod.invert([-1, 2, 7, 9, 14])");
	test("Mod.invert([-1, 2, 7, 9, 14], 5)");
	test("Mod.invert([-1, 2, 7, 9, 14], 0, 12)");
	
	test("Mod.invert([-1, 2, [[7, 9], 14]])");

	// test("Mod.lace([0, 2, 4], [1, 3, 5], ['hello'])");
	test("Mod.lace()");
	test("Mod.lace(2, 5)");
	test("Mod.lace([0, 0, 0], [7, 7], [9, 9, 9, 9])");
	test("Mod.lace([0, [0, 0]], [[7,7]], [9, [[9, 9], 9], 9])");
	test("Mod.lace(['c', 'c', 'c', 'c'], ['g', 'g'], ['e'])");

	// test("Mod.lookup()");
	test("Mod.lookup()");
	test("Mod.lookup(10)");
	test("Mod.lookup([0, 1, 1, 2, 0, 2, 2, 1], ['c4', 'e4', 'f4', 'g4'])");
	test("Mod.lookup([0, [1, 1, [2, 3 ], 0], 2], ['c4', 'e4', 'f4', 'g4'])");
	test("Mod.lookup([-2, 5, 7, 12], ['c4', 'e4', 'f4', 'g4'])");
	test("Mod.lookup(Gen.cosine(16, 5.32, 0, 12), [0, 0, 2, 3, 3, 5, 7, 7, 8, 8, 11, 11])");
	test("Mod.lookup([0, 'foo', ['1', 'bar']], [1, 2, 3])")

	// var merArr1 = [0, 3, 7];
	// var merArr2 = [3, 12];
	// var merArr3 = [12, -1, 19, 5];
	// console.log(Mod.merge(merArr1, merArr2, merArr3));
	// console.log(merArr1, merArr2, merArr3);
	test("Mod.merge()");
	test("Mod.merge(1, 2)");
	test("Mod.merge([0, 0, 0], [5, 5], [7, 7, 7, 7])");
	test("Mod.merge(['c4', 'c4'], ['f4'], ['g4', 'g4', 'g4'])");
	test("Mod.merge([['c4', 'e4'], 'c4'], [['f4', 'a4']], ['g4', 'g4'])");
	test("Mod.merge([[['c4', 'e4']], 'c4'], [['f4', 'a4']], ['g4', 'g4'])");

	// var palArr = [0, 1, 2, 3];
	// console.log(Mod.palindrome(palArr, false));
	// console.log(palArr);
	test("Mod.palindrome()");
	test("Mod.palindrome(5)");
	test("Mod.palindrome([0, 5, 7, 12])");
	test("Mod.palindrome([0, [5, 7], 9, 12], true)");
	test("Mod.palindrome(['c4', 'f4', 'g4'], true)");
	// test("Mod.palindrome([0, 1, 2, 3], 1)");

	test("Mod.repeat(1, 4)");
	test("Mod.repeat([0, 5, 7], 3)");
	test("Mod.repeat(['c4', 'e4', 'f4', 'g4'], [1, 4, 2, 0])");
	// test("Mod.repeat(['kick', 'hat'], [1, 4])");
	test("Mod.repeat([[0, 5], [7, [9, 12]]], [2, 3])");

	// var revArr = [0, 5, 7, 12];
	// console.log(Mod.reverse(revArr));
	// console.log(revArr);	
	test("Mod.reverse()");
	test("Mod.reverse(4)");
	test("Mod.reverse([0, 5, 7, 12])");
	test("Mod.reverse(['c4', ['e4', 'f4'], 'g4'])");

	// var rotArr = [0, 1, 2, 3];
	// console.log(Mod.rotate(rotArr, -1));
	// console.log(rotArr);
	test("Mod.rotate()");
	test("Mod.rotate(4, 1)");
	test("Mod.rotate([0, 5, 7, 12], 1)");
	test("Mod.rotate(['c4', ['e4', 'f4'], 'g4', 'a4'], -1)");

	test("Mod.sort([-5, 7, 0, 3, 12, -7, 9], -1)");
	test("Mod.sort(['e4', 'g3', 'c4', 'f3', 'b5'])");
	test("Mod.sort([-5, [7, 0, 3], 12, -7, 9], -1)");

	test("Mod.sort([-1, [3, 5, -2], 5, 10])");
	test("Mod.sort(10)");

	test("Mod.slice()");
	test("Mod.slice(Gen.spread(8), [3, 2])");
	test("Mod.slice(Gen.spread(24), [3, 2, -1, 5], false)");
	test("Mod.slice([1, [2, 3], 4, [5, 6, [7, 8]]], [3, 2])");

	test("Mod.split(Gen.spread(12), 3)");
	test("Mod.split(Gen.spread(12), [3, 2, -1])");

	// var sprArr1 = [12, 19, 24];
	// var sprArr2 = [1, 0, 0, 1, 1, 0, 1, 0, 0.2];
	// console.log(Mod.spray(sprArr1, sprArr2));
	// console.log(sprArr1, sprArr2);
	test("Mod.spray()");
	test("Mod.spray(4, [0, 1, 1])");
	test("Mod.spray([7, 9, 12], [1, 0, 0, 1, 1, 0, 1, 0])");
	test("Mod.spray([[5, 7, 9], [12, 14]], [1, 0, 1, 1, 0])");
	test("Mod.spray(['c4', 'f4', 'g4'], [1, 0, 0, 1, 1, 0, 1, 0])");
	// test("Mod.spray([12, 19, 24], [1, 0, 0, 1, 1, 0, 1, 0.3, 0])");

	test("Mod.stretch()");
	test("Mod.stretch(5, 1)");
	test("Mod.stretch([0, 12, 3, 7], 24)");
	Util.plot(Mod.stretch([0, 12, 3, 7], 24), { height: 10 });
	test("Util.plot(Mod.stretch([0, 12, 3, 7], 10, 'none'), { height: 5 })");
	
	// var unArr = [5, 7, 5, 0, 12, 7, 5];
	// console.log(Mod.unique(unArr));
	// console.log(unArr);
	test("Mod.unique()");
	test("Mod.unique(4)");
	test("Mod.unique([5, 7, 5, 0, 12, 7, 5])");
}

function testStat(){
	pagebreak("Statistic");
	
	test("Stat.sort()");
	test("Stat.sort(3.14)");
	test("Stat.sort('foo')");
	test("Stat.sort([-10, 8, 6, -12, -6, -7, 2, 4, 3, 11], -1)");
	test("Stat.sort([10, 3.14, 'foo', 'bar', 5, -6, 'foobar'])");
	test("Stat.sort([-10, 8, 6, -12, -6, -7, 2, 4, 3, 11])");
	
	test("Stat.mean()");
	test("Stat.mean(3.14)");
	test("Stat.mean('foo')");
	test("Stat.mean([2, -6, 2, 0, 10, 9, -2, 5, -8, -11, 1, -3])");
	test("Stat.mean([1, 2, 3, 4, 5, 6, 7, 8, 9])");
	test("Stat.mean([2, -6, 2, 0, 10, 9, -2, 5, -8, -11, 1, -3])");
	test("Stat.mean([2, [-6, 2, 0], [10, [9, -2], 5], -8, [-11, 1], -3])");
	
	test("Stat.median()");
	test("Stat.median(3.14)");
	test("Stat.median([1, 5, 6, 9, 13])");
	test("Stat.median([2, -6, 2, 0, 10, 9, -2, 5, -8, -11, -3])");
	test("Stat.median([2, [-6, 2, 0], [10, [9, -2], 5], -8, [-11], -3])");
	test("Stat.median([1, 5, 6, 'foo', 'bar', 13,])");
	
	test("Stat.center([1, 5, 11])");
	test("Stat.center([1, 7, 4, 2, 9, 5])");
	test("Stat.center([1, 7, 4, 2, 9, 5, 'foo', 'bar', true, true])");
	
	test("Stat.mode()");
	test("Stat.common([8, 4, 3, 11, 9, 0, 11, 2, 10, 5, 11, 0])");
	test("Stat.common([8, 4, 3, 9, 9, 0, 2, 10, 5, 11, 0, 11])");
	test("Stat.common([8, [4, 3], 9, [9, 0, [2, 10], 5], 11, 0, 11])");
	test("Stat.common([8, 4, 3, 'foo', 'foo', 0, 2, 10, 5, 11, 0, 11])");
	
	test("Stat.maximum()");
	test("Stat.maximum(10)");
	test("Stat.maximum([-38, -53, -6, 33, 88, 32, -8, 73])");
	test("Stat.maximum([-38, [-53, [-6, 33], 88, 32], [-8, 73]])");
	
	test("Stat.minimum()");
	test("Stat.minimum(10)");
	test("Stat.minimum([-38, -53, -6, 33, 88, 32, -8, 73])");
	test("Stat.minimum([-38, [-53, [-6, 33], 88, 32], [-8, 73]])");
	// test("Stat.minimum([-38, -53, -6, 'foo', 33, 'bar'])");
	
	test("Stat.change()");
	test("Stat.change(4)");
	test("Stat.change([0, 3, 7, 0, 12, 9, 5, 7])");

	test("Stat.compare()");
	test("Stat.compare(2, 2)");
	test("Stat.compare([0, 5, 7], [0, '5', 7])");
	test("Stat.compare(3.1451, '3.1451')");
	test("Stat.compare(['c', ['e', 'g']], ['c', ['e', 'g']])");
	test("Stat.compare([0, [3, [7, 5]], 12], [0, [3, [7, 5]], 12])");
}

function testTranslate(){
	pagebreak("Translate");

	test("TL.midiToNote()");
	test("TL.midiToNote(60)");
	test("TL.mton([48, 55, 51, 43])");
	test("TL.mton([60, [63, 67, 69], [57, 65]])");

	test("TL.midiToFreq()");
	test("TL.midiToFreq(60)");
	test("TL.mtof([48, 55, 51, 43])");
	test("TL.mtof([60, 67, 72])");
	test("TL.mtof([60, [63, 67, 69], [57, 65]])");
	test("TL.mtof([60.3, 67.4, 72.8])");

	test("TL.ftom()");
	test("TL.ftom(261)");
	test("TL.ftom([ 261, [ 311, 391, 440 ], [ 220, 349 ] ])");
	test("TL.ftom([ 261, [ 311, 391, 440 ], [ 220, 349 ] ], true)");
	// test("TL.ftom([48, 55, 51, 43])");
	// test("TL.ftom([60, 67, 72])");
	// test("TL.ftom([60, [63, 67, 69], [57, 65]])");
	// test("TL.ftom([60.3, 67.4, 72.8])");
	
	test("TL.fton()");
	test("TL.fton(261)");
	test("TL.fton([ 261, [ 311, 391, 440 ], [ 220, 349 ] ])");
	
	test("TL.noteToMidi()");
	test("TL.noteToMidi('c3')");
	test("TL.noteToMidi(['c3', 'g3', 'eb3', 'g2'])");
	test("TL.ntom(['f3','bb3','g#2'])");
	test("TL.ntom(['c4', ['eb4', 'g4', 'a4'], ['a3', 'f4']])");
	
	test("TL.noteToFreq()");
	test("TL.noteToFreq('c3')");
	test("TL.noteToFreq(['c3', 'g3', 'eb3', 'g2'])");
	test("TL.ntof(['f3','bb3','g#2'])");
	test("TL.ntof(['c4', ['eb4', 'g4', 'a4'], ['a3', 'f4']])");
	
	test("TL.rtom()");
	test("TL.rtom([-12, 0, 7, 12])");
	test("TL.rtom([-12, 0, 7, 12], 4)");
	test("TL.rtom([[-12, -9, -5], [0, 4, 7], [2, 5, 9]], 'c4')");
	test("TL.rtom([-12, 0, 7, 12], 'c3')");
	
	test("TL.rtof()");
	test("TL.rtof([-12, 0, 7, 12])");
	test("TL.rtof([-12, 0, 7, 12], 4)");
	test("TL.rtof([[-12, -9, -5], [0, 4, 7], [2, 5, 9]], 'c4')");
	test("TL.rtof([-12, 0, 7, 12], 'c3')");

	test("TL.ctor()");
	test("TL.ctor(['f','bb','g#'])");
	test("TL.ctor(['c', ['eb', 'g', 'ab'], ['a+', 'f-']]);")
	
	Srl.setScale('minor_harmonic', 'b');
	
	test("TL.toScale([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);");
	test("TL.toScale([0, [1, 2, 3], [4, 5, [6, 7], 8], 9, 10, 11]);");
	test("TL.mton(TL.toScale(Gen.spread(12, 48, 60)));");
	test("TL.toScale(Gen.sine(8, 3.5, -7, 24))");
	test("TL.toScale([0, 4.1, 6.5, 7.1, 9.25])");
	
	test("Srl.setRoot('d')");
	test("Srl.setScale('major')");
	test("Srl.getSettings()");
	
	test("TL.toMidi([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);");
	test("TL.toMidi([0, [1, 2, 3], [4, 5, [6, 7], 8], 9, 10, 11]);");
	test("TL.mton(TL.toMidi([0, [1, 2, 3], [4, 5, [6, 7], 8], 9, 10, 11]));");
	
	// test("TL.mton(TL.toScale(Gen.spread(12, 48, 60)));");
	test("TL.toFreq([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4);");
	test("TL.toFreq([0, [1, 2, 3], [4, 5, [6, 7], 8], 9, 10, 11]);");
	test("TL.toFreq(Gen.sine(8, 1, -12, 12));");
	test("TL.fton(TL.toFreq(Gen.sine(8, 1, -12, 12)));");
	test("TL.fton(TL.toFreq([0, [1, 2, 3], [4, 5, [6, 7], 8], 9, 10, 11]));");
	
	test("TL.setTempo(120)");
	test("TL.divisionToMs()");
	test("TL.divisionToMs('1/8', 113)");
	test("TL.dtoms(['1/4', '1/8', '3/16', '1/4', '1/6', '2'])");
	test("TL.dtoms(['1/4', ['1/8', ['3/16', '1/4']], '1/6', '2'])");
	test("TL.dtoms(['1/4', ['1/8', ['3/16', '1/4']], '1/6', '2'], 100)");
	test("TL.dtoms([0.25, [0.125, [0.1875, 0.25]], 0.1667, 2], 100)");
	test("TL.rtoms([0.25, [0.125, [0.1875, 0.25]], 0.1667, 2], 100)");
	// test("TL.dtoms([0.25, 0.125, 0.1875, 0.25, 0.16667, 2])");
	
	test("TL.dtor(['1/4', '1/8', '3/16', '1/4', '1/6', '2'])");
	test("TL.dtor(['1/4', ['1/8', ['3/16', '1/4']], '1/6', '2'])");
	
	test("TL.dtotk(['1/4', ['1/8', ['3/16', '1/4']], '1/6', '2'])");
	test("TL.rtotk([0.25, [0.125, [0.1875, 0.25]], 0.16667, 2])");

	test("TL.ttor(['4n', ['8nt', ['16nd', '2nd']], '32n', '3m'])");
	test("TL.ttotk(['4n', ['8nt', ['16nd', '2nd']], '32n', '3m'])");

	test("TL.ttoms(['4n', ['8nt', ['16nd', '2nd']], '32n', '3m'])");
	test("TL.ttoms(['4n', ['8nt', ['16nd', '2nd']], '32n', '3m'], 100)");

	test("TL.rtoc()");	
	test("TL.rtoc('11/5')");	
	test("TL.rtoc(['2/1', ['3/2', ['4/3', '5/4']], '9/8'])");	

	test("TL.scaleNames()");
	test("TL.getScale()");
	test("TL.getSettings()");

	test("Srl.setRoot('db-')");
	test("Srl.getSettings()");
	test("Srl.setScale('minor_harmonic', 'a')");
	test("Srl.getSettings()");

	test("TL.setRoot('a-')");
	test("TL.setScale('harmonic_minor')");
	test("TL.toScale([0, [1, 2, 3], 4, 5, [6, 7, [8, 9], 10], 11, 12])");

	console.log("var scala = new TL.Scala()");
	var scl = new TL.Scala();

	scl.parse(fs.readFileSync('data/scl/12-TET.scl', 'utf8'));
	scl.tune(261.6255653);
	scl.center(60);

	console.log(scl.names.slice(0, 10));
	console.log('//=>', scl.data);

	console.log('scl.scalaToFreq([60, 63, 67, 69, 72, 81, 36, 48])')
	// console.log('//=>', scl.stof([60, 63, 67, 69, 72, 81, 36, 48]));
	console.log('//=>', scl.stof([60, 63, 67, 69, 72, 81, 36, 48]).map(x => x.toFixed(2)));

	console.log(scl.search({ cents: ['4/3', '5/4', '11/9'], size: 11 }));
}

function testUtil(){
	pagebreak("Utility");

	test("Util.add()");
	test("Util.add(5, 2)");
	test("Util.add([0, 3, 7], 2)");
	test("Util.add(2, [0, 3, 7])");
	test("Util.add([1, 2, 3, 4], [10, 20, 30])");
	test("Util.add([1, 2, 3], [10, 20, 30, 40])");
	test("Util.add([1, [2, 3]], [10, [20, 30, 40]])");
	test("Util.add([1, [2, 3], 4], [10, 20, 30])");
	
	test("Util.sub()");
	test("Util.sub(5, 2)");
	test("Util.sub([0, 3, 7], 2)");
	test("Util.sub(2, [0, 3, 7])");
	test("Util.sub([1, 2, 3, 4], [10, 20, 30])");
	test("Util.sub([1, 2, 3], [10, 20, 30, 40])");
	test("Util.sub([1, [2, 3]], [10, [20, 30, 40]])");
	test("Util.sub([1, [2, 3], 4], [10, 20, 30])");
	
	test("Util.mul()");
	test("Util.mul(5, 2)");
	test("Util.mul([0, 3, 7], 2)");
	test("Util.mul(2, [0, 3, 7])");
	test("Util.mul([1, 2, 3, 4], [10, 20, 30])");
	test("Util.mul([1, 2, 3], [10, 20, 30, 40])");
	test("Util.mul([1, [2, 3]], [10, [20, 30, 40]])");
	test("Util.mul([1, [2, 3], 4], [10, 20, 30])");
	
	test("Util.div()");
	test("Util.div(5, 2)");
	test("Util.div([0, 3, 7], 2)");
	test("Util.div(2, [0, 3, 7])");
	test("Util.div([1, 2, 3, 4], [10, 20, 30])");
	test("Util.div([1, 2, 3], [10, 20, 30, 40])");
	test("Util.div([1, [2, 3]], [10, [20, 30, 40]])");
	test("Util.div([1, [2, 3], 4], [10, 20, 30])");

	test("Util.pow()");
	test("Util.pow(5, 2)");
	test("Util.pow([2, 3, 4, 6], 2)");
	test("Util.pow(2, [2, 3, 4, 6])");
	test("Util.pow([1, 2, 3, 4], [2, 3, 4])");
	test("Util.pow([1, 2, 3], [2, 3, 4, 5])");
	test("Util.pow([1, [2, 3]], [10, [2, 3, 4]])");
	test("Util.pow([1, [2, 3], 4], [10, 2, 3])");

	test("Util.sqrt()");
	test("Util.sqrt(9)");
	test("Util.sqrt([2, 9, 16, 27])");
	test("Util.sqrt([2, [9, [16, 25], 144]])");
	
	test("Util.mod()");
	test("Util.mod(7, 3)");
	test("Util.mod([0, 3, 7], 2)");
	test("Util.mod(2, [0, 3, 7])");
	test("Util.mod([-2, 4, 3, 7], 5)");
	test("Util.mod([-2, [4, [3, 7]]], 5)");
	
	test("Util.sum([1, 2, 3, 4])");
	test("Util.sum([10, 'foo', 11, 'bar', 22])");
	
	test("Util.trunc()");
	test("Util.trunc([3.14, 5.12, 6.18])");
	test("Util.trunc([[3.14, 5.12], 6.18])");
	test("Util.trunc([[3.14, [5.12]], 6.18])");
	
	test("Util.normalize()");
	test("Util.normalize(5)");
	test("Util.normalize([0, 3, 9, 12, 24])");
	test("Util.normalize(Gen.spread(5, -10, 6))");
	test("Util.normalize(Gen.spread(5, 50, 100))");
	test("Util.normalize([5, [12, [4, 17]], 3, 1])");

	test("Util.map(0.5, 0, 1, 0, 2)");
	test("Util.map(Gen.spread(5), 0, 5, 0, 1)");
	Util.plot(Util.map(Gen.spreadF(30), 0, 1, 0, 1, 2), { height: 10 });
	
	test("Util.map([0, 1, 2, 3, 4], 0, 4, -1, 1)");
	test("Util.map([0, [1, [2, 3]], 4], 0, 4, -1, 1)");

	test("Util.fold([0, [1, [2, 3]], [4, 5], 6], 2, 5)");
	Util.plot(Util.fold(Gen.spreadFloat(30, -9, 13), 0, 1), {height: 5});
	test("Util.fold(Gen.spreadFloat(20, -4, 6), -2, 3)");
	Util.plot(Util.fold(Gen.sineFloat(20, 1, -5, 29), 0, 24), {height: 5});
	
	test("Util.constrain(10.34, 0, 3.14)");
	test("Util.constrain([0, [1, [2, 3]], [4, 5], 6], 2, 5)");
	test("Util.constrain(Gen.cosine(30, 1), 5, 9)");
	Util.plot(Util.constrain(Gen.cosine(30, 1), 5, 9), {height: 5});
	
	test("Util.wrap([0, [1, [2, 3]], [4, 5], 6], 2, 5)");

	Util.plot(Util.wrap(Gen.spread(30), 2, 8), {height: 5});
	test("Util.wrap(Gen.spread(30), 2, 8)");

	test("Util.arrayCalc([0, 1, [2, 3]], [[5, 7], 10], (a,b)=>{ return (a+b)/2} )");
	test("Util.arrayCalc([10, 2, 1, 5], [4, 9, 7, 3], (a,b)=>{ return Math.max(a,b) })");

	let drawing = [];
	Rand.seed(628);
	for (let i=0; i<10; i++){
		drawing.push(Rand.drunk(42, 3));
	}
	// console.log('Util.draw(drawing);');
	// Util.draw(drawing);

	let harmonics = [];
	for (let i=0; i<10; i++){
		harmonics.push(Gen.sine(42, i+1));
	}
	// console.log('Util.draw(harmonics, { extend: false });')
	// Util.draw(harmonics, { extend: false });
}

function test(f){
	// print the written function to console
	console.log(f+";");
	// evaluate the function and print results
	let r = eval(f);
	if (r === undefined){
		r = "void return";
	}
	console.log("//=>", r, "\n");
}

function benchMark(f, iterations=10000){
	console.time('benchmark time');
	console.log(f+";");

	for (var i in iterations){
		eval(f);
	}
	console.timeEnd('benchmark time');
}

function pagebreak(n){
	console.log("====================================");
	console.log("=> \t", n);
	console.log("====================================\n");
}
