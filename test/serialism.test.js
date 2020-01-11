
const Serialism = require("../index");
const Gen = require("../index").Gen;

/*
	Test criteria:
	- test for no argument
	- test for single argument
	- test for multiple arguments
	- test for negative values
*/

testGen();

function testGen(){
	test("Gen.spread()");
	test("Gen.spread(-5)");
	test("Gen.spread(5, 10)");
	test("Gen.spreadFloat(5, 0, 11)");
	test("Gen.spreadFloat(4, -1, 1)");
	test("Gen.spreadInclusiveFloat(5, -1, 1)");
	test("Gen.spreadInclusiveFloatExp(5, 0, 1, 2)");
	test("Gen.fill(0, 2, 5, 3, 10, 4)");
	test("Gen.fill()");
}

function test(f){
	// print the written function to console
	console.log(f);
	// evaluate the function and print results
	console.log("=> ", eval(f), "\n");
}
