
const Srl = require("../index");
const Gen = require("../index").Gen;
const Algo = require("../index").Algo;
const Mod = require("../index").Mod;
const Util = require("../index").Util;
const Rand = require("../index").Rand;

/*
	Test criteria:
	- test for no argument
	- test for single argument
	- test for multiple arguments
	- test for negative values
*/

// testSerial();
// testGen();
// testAlgo();
testRand();
// testMod();
// testUtil();

function testSerial(){
	pagebreak("Serial");

	test("Srl.Gen.spread(10)");
	test("Srl.Algo.euclid(5, 3, 1)");
	test("Srl.Mod.lace([0, 1, 2], [3, 4, 5])");
}

function testGen(){
	pagebreak("Generative");

	test("Gen.spread()");
	test("Gen.spreadFloat(7)");
	test("Gen.spread(5, 7, 19)");
	test("Gen.spread(4, 10, 2)");
	test("Gen.spreadFloat(5, 2, 11)");
	test("Gen.spreadFloat(4, -1, 1)");
	test("Gen.spreadInclusiveFloat(9, -1, 1)");
	test("Gen.spreadInclusiveFloatExp(5, 0, 1, 2)");
	
	test("Gen.fill()");
	test("Gen.fill(10, 2, 15, 3, 20, 4)");
}

function testAlgo(){
	pagebreak("Generative Complex");

	test("Algo.euclid()");
	test("Algo.euclid(10, 3)");
	test("Algo.euclid(8, 5)");
	test("Algo.euclid(16, 9, 1)");
}

function testRand(){
	test("Rand.seed(19374)");
	test("Rand.randomFloat(3, -1, 1)");
	test("Rand.randomFloat(3, 0.2, 0.5)");

	test("Rand.seed(4827)");
	test("Rand.random(5, 2)");
	test("Rand.random(5, 0, 12)");

	test("Rand.seed(4827)");
	test("Rand.random(5, 2)");
	test("Rand.random(5, 0, 12)");

	test("Rand.seed(0)");
	test("Rand.coin(10)");

	test("Rand.dice(4)");
	test("Rand.dice(4)");
}

function testMod(){
	pagebreak("Transform");
	
	test("Mod.clone()");
	test("Mod.clone([0, 5, 7], 0, 12, -12)");
	test("Mod.clone(['hello', 'world'], 0, 1, 2)");

	test("Mod.combine()");
	test("Mod.combine([0, 1], [[22, 33], 4])");
	test("Mod.combine([0, 5], 12, [7, 3])");
	test("Mod.combine(0, 12, 3)");

	test("Mod.duplicate()");
	test("Mod.duplicate([0, 1, 2])");
	test("Mod.duplicate([0, 1, 2], 4)");

	test("Mod.invert()");
	test("Mod.invert([0, 2, 5, 10, 13])");
	test("Mod.invert([0, 2, 5, 10, 13], 5)");
	test("Mod.invert([0, 2, 5, 10, 13], 0, 12)");

	test("Mod.lace([0, 2, 4], [1, 3, 5], ['hello'])");
	test("Mod.lace([0, 5, 9], [3, 3], [7, 12, 11, -1])");

	test("Mod.merge()");
	test("Mod.merge([0, 3, 7], [3, 12], [12, -1, 19, 5])");
	test("Mod.merge([0, 1, 2, 3], [10, 20, 30, 40])");

	test("Mod.palindrome()");
	test("Mod.palindrome([0, 1, 2, 3])");
	test("Mod.palindrome([0, 1, 2, 3], true)");
	test("Mod.palindrome([0, 1, 2, 3], 1)");

	test("Mod.rotate()");
	test("Mod.rotate([0, 1, 2, 3])");
	test("Mod.rotate([0, 1, 2, 3], 1)");
	test("Mod.rotate([0, 5, 7, 12], -1)");
	test("Mod.rotate([0, [11, 12], 2, 3], 1)");

	test("Mod.reverse()");
	test("Mod.reverse([0, 5, 7, 12])");
	test("Mod.reverse([0, [11, 12], 2, 3])");

	test("Mod.shuffle()");
	test("Mod.shuffle([0, 5, 7, 12])");
	test("Mod.shuffle([0, 5, 7, 12])");

	test("Mod.unique()");
	test("Mod.unique([5, 7, 5, 0, 12, 7, 5])");
}

function testUtil(){
	test("Util.mod(7, 3)");
	test("Util.mod([-2, 4, 3, 7], 5)");

	test("Util.bound(10.34, 0, 3.14)");
	test("Util.bound([-2, 4, 3, 7], 1, 5)");

	test("Util.map(0.5, 0, 1, 0, 2)");
	test("Util.map(0.5, 0, 1, 0, 2, 0.5)");
	test("Util.map([0, 1, 2, 3, 4], 0, 4, -1, 1)");

	test("Util.add(5, 2)");
	test("Util.add([0, 3, 7], 2)");
	test("Util.add([1, 2, 3, 4], [1, 2, 3])");

	test("Util.sub(5, 2)");
	test("Util.sub([0, 3, 7], 2)");
	test("Util.sub([1, 2, 3, 4], [1, 2, 3])");

	test("Util.mul(5, 2)");
	test("Util.mul([0, 3, 7], 2)");
	test("Util.mul([1, 2, 3, 4], [1, 2, 3])");

	test("Util.div(5, 2)");
	test("Util.div([0, 3, 7], 2)");
	test("Util.div([1, 2, 3, 4], [1, 2, 3])");
}

function test(f){
	// print the written function to console
	console.log(f);
	// evaluate the function and print results
	r = eval(f);
	if (r === undefined){
		r = "void return";
	}

	console.log("=> ", r, "\n");
}

function pagebreak(n){
	console.log("====================================");
	console.log("=> \t", n);
	console.log("====================================\n");
}