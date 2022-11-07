const fs = require('fs');

// test with different builds
let entryPoint = "../index";
// entryPoint = "../build/ts.bundle.js";
// entryPoint = "../build/ts.es5.js";
let es5build = "../build/ts.es5.min.js";

// load library from index.js;
let TS = require(entryPoint);

// run full test with ./index.js
fullTest(TS);

// reload library with es5.min.js build
TS = require(es5build);

// and run full test with es5.min.js build;
fullTest(TS);

function fullTest(Srl) {
	const Rand = Srl.Stochastic;

	test("markov init properly", () => {
		let markov = new Rand.DeepMarkovChain()
		expect(markov).toBeDefined();
	})

	test("training works", () => {
		let markov = new Rand.DeepMarkovChain()
		markov.train([1, 2, 3, 4, 5, 6, 1, 2, 4], 2)
		expect(markov._table.get(JSON.stringify([1, 2])))
			.toStrictEqual([3, 4])
		expect(markov._table.get(JSON.stringify([2, 3])))
			.toStrictEqual([4])
		expect(markov._table.get(JSON.stringify([3, 4])))
			.toStrictEqual([5])
		expect(markov._table.get(JSON.stringify([4, 5])))
			.toStrictEqual([6])
	})

	test("iterating works", () => {
		let markov = new Rand.DeepMarkovChain();
		markov.train([1, 2, 3, 4], 2);
		markov.state([1, 2])
		expect(markov._state).toBe(
			JSON.stringify(
				[1, 2]
			)
		)
		markov.next()
		expect(markov._state).toBe(
			JSON.stringify(
				[2, 3]
			)
		)
	})

	test("unfound state can be handled", () => {
		let markov = new Rand.DeepMarkovChain()
		markov.train([1, 2, 3, 4], 2);
		markov.next()
		expect(markov._state).toBeDefined()
	})

	test("random state", () => {
		let markov = new Rand.DeepMarkovChain()
		markov.train([1, 2, 3, 4], 3)
		markov.randomState();
		const possible = [
			JSON.stringify([1, 2, 3]),
			JSON.stringify([2, 3, 4])
		]
		expect(possible).toContain(markov._state)
	})
}