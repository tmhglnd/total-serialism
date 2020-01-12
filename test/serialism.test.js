
const Serial = require("../index");
const Gen = require("../index").Gen;
const Trans = require("../index").Transform;

/*
	Test criteria:
	- test for no argument
	- test for single argument
	- test for multiple arguments
	- test for negative values
*/

// testGen();
// testTransform();

function testGen(){
	test("Gen.spread()");
	test("Gen.spread(-5)");
	test("Gen.spread(5, 10)");
	test("Gen.spreadFloat(5, 0, 11)");
	test("Gen.spreadFloat(4, -1, 1)");
	test("Gen.spreadInclusiveFloat(5, -1, 1)");
	test("Gen.spreadInclusiveFloatExp(5, 0, 1, 2)");
	
	test("Gen.fill()");
	test("Gen.fill(10, 2, 15, 3, 20, 4)");
}

function testTransform(){
	test("Trans.clone()");
	test("Trans.clone([0, 10, 20], 0, 5, 100)");
	test("Trans.clone(['hello', 'world'], 0, 1, 2)");

	test("Trans.duplicate()");
	test("Trans.duplicate([0, 1, 2])");
	test("Trans.duplicate([0, 1, 2], 4)");

	test("Trans.invert()");
	test("Trans.invert([0, 2, 5, 10, 13])");
	test("Trans.invert([0, 2, 5, 10, 13], 8)");
	test("Trans.invert([0, 2, 5, 10, 13], 0, 12)");

	test("Trans.join()");
	test("Trans.join([0, 1], [[22, 33], 4])");
	test("Trans.join([1, 2], 3, [4, 5])");

	test("Trans.lace([0, 2, 4], [1, 3, 5], ['hello'])");
	test("Trans.lace([1, 2, 3], [10, 20], [100, 200, 300, 400])");

	test("Trans.merge()");
	test("Trans.merge([0, 1, 2], [3, 4], [5, 6, 7, 8])");
	test("Trans.merge([0, 1, 2, 3], [10, 20, 30, 40])");

	test("Trans.palindrome()");
	test("Trans.palindrome([0, 1, 2, 3])");
	test("Trans.palindrome([0, 1, 2, 3], true)");
	test("Trans.palindrome([0, 1, 2, 3], 1)");

	test("Trans.rotate()");
	test("Trans.rotate([0, 1, 2, 3])");
	test("Trans.rotate([0, 1, 2, 3], 1)");
	test("Trans.rotate([0, 1, 2, 3], -1)");
	test("Trans.rotate([0, [11, 12], 2, 3], 1)");

	test("Trans.reverse()");
	test("Trans.reverse([0, 1, 2, 3])");
	test("Trans.reverse([0, [11, 12], 2, 3])");

	test("Trans.shuffle()");
	test("Trans.shuffle([0, 1, 2, 3])");
	test("Trans.shuffle([0, 1, 2, 3])");

	test("Trans.unique()");
	test("Trans.unique([0, 1, 2, 2, 1])");
}

function test(f){
	// print the written function to console
	console.log(f);
	// evaluate the function and print results
	console.log("=> ", eval(f), "\n");
}
