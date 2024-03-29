# Algorithmic

More generative methods, but in general more complex algorithms, such as euclidean rhythm generation, lindenmayer string expansion, fibonacci number sequence, pisano periods and more.

## Include

```js
const Algo = require('total-serialism').Algorithmic;
```

```js
const { euclid, fibonacci } = require('total-serialism').Algorithmic;
```

# Methods

- [euclidean](#euclidean)
- [fastEuclidean](#fasteuclidean)
- [hexBeat](#hexbeat)
- [linden](#linden)
- [cellular automaton](#cellular-automaton)
- [collatz](#collatz-conjecture)
- [fibonacci](#fibonacci)
- [pisano](#pisano)
- [pell](#pell)
- [threeFibonacci](#threefibonacci)
- [lucas](#lucas)
- [nbonacci](#nbonacci)
- [inifinity series](#infinityseries)

## euclidean

**I recommend using `fastEuclid()` instead**

Generate a euclidean rhythm evenly spacing n-hits amongst n-steps. Inspired by Godfried Toussaints famous paper "The Euclidean Algorithm Generates Traditional Musical Rhythms".

Alias: `euclid()`

**arguments**
- {Int+/Array} -> length of array (optional, default=8, uses length of Array if input)
- {Int+/Array} -> hits (optional, default=4, uses length of Array if input)
- {Int} -> rotate (optional, default=0)

```js
Algo.euclid(8, 5);
//=> [ 1, 0, 1, 1, 0, 1, 1, 0 ] 

Algo.euclid(16, 9, 1); 
//=> [ 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1 ]
```

<!-- <iframe src="https://editor.p5js.org/tmhglnd/embed/xS8sKejzG" width="100%" height="250px" frameBorder="0" scrolling="no"></iframe> -->

## fastEuclidean

A fast euclidean rhythm generating algorithm. Uses the downsampling of a line drawn between two points in a 2-dimensional grid to divide the squares into an evenly distributed amount of steps. Generates the correct distribution, but the rotation/order may differ a bit from the recursive `euclid()` method above.

Alias: `fastEuclid()`

**arguments**
- {Int+/Array} -> length of array (optional, default=8, uses length of Array if input)
- {Int+/Array} -> hits (optional, default=4, uses length of Array if input)
- {Int} -> rotate (optional, default=0)

```js
Algo.fastEuclid(8, 5);
//=> [ 1, 0, 1, 0, 1, 1, 0, 1 ] 

Algo.fastEuclid(16, 9, 1);
//=> [ 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0 ]  
```

## hexBeat

Generate hexadecimal rhythms. Hexadecimal beats make use of hexadecimal values (0 - f) that are a base-16 number system. Because one digit in a base-16 number system has 16 possible values (0 - 15) these can be converted to 4 bits that therefore can be seen as groups of 4 16th notes. These hexadecimal values will then represent any permutation of 1's and 0's in a 4 bit number, where 0 = 0 0 0 0, 7 = 0 1 1 1, b = 1 0 1 1, f = 1 1 1 1 and all possible values in between. This method does not work with hexadecimal notation (`0x...`), for that use the `binary()` as an alternative.

Alias: `hex()`

**arguments**
- {String | Number} -> hexadecimal characters (0-f) (optional, default=8)

```js
// generate a hexadecimal rhythm based on a hexadecimal string (0-f)
// inspired by Steven Yi's implementation in CSound Live Coding
Algo.hexBeat('a9d2');
//=> [ 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0 ]

Algo.hexBeat(573);
//=> [ 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1 ] 
```

<!-- <iframe src="https://editor.p5js.org/tmhglnd/embed/2iav0oh9K" width="100%" height="250px" frameBorder="0" scrolling="no"></iframe> -->

- [Learn hex beats by Steven Yi](https://kunstmusik.github.io/learn-hex-beats/)

## linden

The original Lindenmayer string expansion returns a string of characters based on a set of rules and an axiom specified as strings. This is useful to generate fractal like structures and simulate natural growth.

**arguments**
- {Value} -> The axiom to start with (generation 0)
- {Int+} -> The number of generations to iterate
- {Object} -> The object or reference to object with rules

```js
// Koch curve
Algo.linden('F', 2, {F: 'F+F-F-F+F'});
//=> 'F+F-F-F+F+F+F-F-F+F-F+F-F-F+F-F+F-F-F+F+F+F-F-F+F'

// Cantor set
Algo.linden('A', 3, {A: 'ABA', B: 'BBB'});
//=> 'ABABBBABABBBBBBBBBABABBBABA'

// Sierpinski Triangle
Algo.linden('F-G-G', 1, {'F': 'F−G+F+G−F', 'G' : 'GG'});
//=> 'F−G+F+G−F-GG-GG'
```

### linden returning Array of ints

A more useful version that works nicely with the rest of the library. By returning an array of integers it can be quickly put to use in combination with other methods to generate rhythms, melodies and more based on custom rulesets.

```js
Algo.linden();
//=> [ 1, 0, 1, 1, 0 ] (default)

// Cantor set as 0's and 1's in an array ruleset
Algo.linden(1, 3, {1: [1, 0, 1], 0: [0, 0, 0]});
//=> [ 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1 ]
```

<!-- <iframe src="https://editor.p5js.org/tmhglnd/embed/1jFaQ3vuG" width="100%" height="250px" frameBorder="0" scrolling="no"></iframe> -->

```js
// Set more complex rules for generating semitones for example
var complexRules = {
	0: [0, 3, 7],
	3: [-1, 0],
	7: [12, 19, 0],
	12: [12, 0, 0, 5], 
	5: [0, -3, 0]
}

Algo.linden(0, 2, complexRules);
//=> [ 0, 3, 7, -1, 0, 12, 19, 0, -1, 0, 3, 7, 12, 0, 0, 5, 19, 0, 3, 7 ]
```

<!-- <iframe src="https://editor.p5js.org/tmhglnd/embed/_X0duWOvn" width="100%" height="250px" frameBorder="0" scrolling="no"></iframe> -->

## cellular automaton

Generate an Elementary Cellular Automaton class (1D). This is a one-dimensional array (collection of cells) with states that are either dead or alive (0/1). By following a set of rules the next generation is calculated for every cell based on its neighbouring cells. Invoke the `next()` method to iterate the generations. Set the first generation with the `feed()` method (usually random values work quite well). Change the `rule()` based on a decimal number or an array of digits.

**methods**

- @constructor {length, rule} -> generate the CA
- @get state -> return the current generations as array
- @get table -> return the table of rules
- @method rule() -> set the rule based on decimal number or array
- @method feed() -> feed the initial generation with an array
- @method next() -> generate the next generation and return

```js 
let ca = new Algo.Automaton();

// feed with 40 randomly generated values 0-1
ca.feed(Rand.coin(40));

// set the rule with a decimal representation
ca.rule(122);

// generate the next generation and store in array
let gen = ca.next();

// create multiple generations in a forloop
let gens = [];
for (let i=0; i<10; i++){
	gens.push(ca.next());
}
Util.draw(gens);

//  ███ ██ █   █ ██ █ █████   ██ ████ ██   
// ██ █████ █ █ ████ ██   ██ █████  █████  
// ████   ██ █ ██  █████ █████   ████   ███
//    ██ ████ ██████   ███   ██ ██  ██ ██  
//   █████  ███    ██ ██ ██ ██████████████ 
//  ██   ████ ██  ███████████            ██
// ████ ██  ███████         ██          ███
//    ███████     ██       ████        ██  
//   ██     ██   ████     ██  ██      ████ 
//  ████   ████ ██  ██   ████████    ██  ██
```

Different rules hold different patterns:

```js 
ca.rule(120);

//  ██  ████ ████ █  ███ █    █  ██    █ ██
// ████ █  ███  ██ █ █ ██ █    █ ███    ███
//    ██ █ █ ██ ███ █ ████ █    ██ ██   █  
//    ███ █ █████ ██ ██  ██ █   ██████   █ 
//    █ ██ ██   ████████ ███ █  █    ██   █
// █   ███████  █      ███ ██ █  █   ███   
//  █  █     ██  █     █ █████ █  █  █ ██  
//   █  █    ███  █     ██   ██ █  █  ████ 
//    █  █   █ ██  █    ███  ███ █  █ █  ██
// █   █  █   ████  █   █ ██ █ ██ █  █ █ ██

ca.rule(9);

//    █            ████ █  █         █  █  
// ██   ██████████ █         ███████      █
//    █ █            ███████ █       ████ █
//  █     ██████████ █         █████ █     
//    ███ █            ███████ █       ████
//  █ █     ██████████ █         █████ █   
//      ███ █            ███████ █       ██
//  ███ █     ██████████ █         █████ █ 
//  █     ███ █            ███████ █       
//    ███ █     ██████████ █         ██████
```

## collatz conjecture

Generate an array of numbers from the Collatz Conjecture, also known as the `3n+1` conjecture. Start with any positive integer `n`. Each next number is obtained from the previous number as follows: If the previous number is even then the next term is the previous term divided by 2. If the previous term is odd tthen the next term is 3 times the prevous term plus 1. The conjecture is that no matter what value of `n`, the sequence will always reach one. The length of the output is quite unpredicatable and can therefore be an interesting sequence for algorithmic composition.

**arguments**
- {Int+} -> starting point
- {Int+} -> modulus (optional, for `collatzMod`, default=2)

```js
// the collatz sequence for the number 15
Algo.collatz(7);
//=> [
//  1,  2,  4,  8, 16,  5,
//  10, 20, 40, 13, 26, 52,
//  17, 34, 11, 22
//	]

// return the collatz sequence with a modulus operation (default = 2)
Algo.collatzMod(7, 12);
//=> [
//   1,  2,  4,  8, 4, 5,
//  10,  8,  4,  1, 2, 4,
//   5, 10, 11, 10
//	] 

// the collatz sequence can encounter quite big values
// so alternatively you can use bigCollatz and bigCollatzMod
// to allow for larger number calculations
Algo.bigCollatz('931386509544713451').length;
// => 2283

Algo.bigCollatzMod('931386509544713451');
```

## fibonacci

Generate an array of Fibonacci numbers `F[n] = F[n-1] + F[n-2]`. Numbers are by default represented as Strings in order to allow for bigger numbers than 64-bit integers can represent. The calculations are done using the bignumber.js library. A second argument sets an offset to pick a certain number from the sequence.

`OEIS: A000045` (Online Encyclopedia of Integer Sequences)

**arguments**
- {Int+} -> output length of ring
- {Int+} -> offset, start the sequence at nth-fibonacci number (optional, default=0)
- {Bool} -> numbers as strings (optional, default=false)

```js
// 10 fibonacci numbers, starting from 0, 1, 1 etc...
Algo.fibonacci(12);
//=> [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ] 

// 2 fibonacci numbers, starting from the 100th value
Algo.fibonacci(2, 100, true);
//=> [ '354224848179261915075', '573147844013817084101' ] 
```

<!-- <iframe src="https://editor.p5js.org/tmhglnd/embed/5dICbZv7b" width="100%" height="250px" frameBorder="0" scrolling="no"></iframe> -->

## pisano

Generate Pisano periods for the Fibonacci sequence. The pisano period is a result of applying a modulo operation on the Fibonacci sequence `F[n] = (F[n-1] + F[n-2]) mod a`. The length of the period differs per modulus value, but the sequence will always have a repetition. 

**arguments**
- {Int+} -> modulus for pisano period (optional, default=12)
- {Int+} -> output length of array (optional, defaults to pisano-period length)

```js
// the pisano period for mod 7 has a length of 16
Algo.pisano(7);
//=> [ 0, 1, 1, 2, 3, 5, 1, 6, 0, 6, 6, 5, 4, 2, 6, 1 ]

// second argument gives a fixed length output
Algo.pisano(4, 10);
//=> [ 0, 1, 1, 2, 3, 1, 0, 1, 1, 2, 3, 1 ]
```

<!-- <iframe src="https://editor.p5js.org/tmhglnd/embed/gputPJXWN" width="100%" height="250px" frameBorder="0" scrolling="no"></iframe> -->

## pell

Other integer sequences based on Fibonacci are also available

```js
Algo.pell(10);
//=> [ 0, 1, 2, 5, 12, 29, 70, 169, 408, 985 ] 
```

## threeFibonacci

```js
Algo.threeFibonacci(10);
//=> [ 0, 1, 3, 10, 33, 109, 360, 1189, 3927, 12970 ] 
```

## lucas

```js
Algo.lucas(10);
//=> [ 2, 1, 3, 4, 7, 11, 18, 29, 47, 76 ]  
```

## nbonacci

Set a custom starting pair of numbers to generate an n-bonacci sequence according to the following method: `F[n] = t * F[n-1] + F[n-2]`

```js
// start with 1, 3, then multiply [n-1] by 2 before adding with [n-2]
Algo.nbonacci(10, 1, 3, 2);
//=> [ 1, 3, 7, 17, 41, 99, 239, 577, 1393, 3363 ]

// this is the same as Algo.fibonacci(12)
Algo.nbonacci(12, 0, 1, 1);
//=> [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ]  
```

## infinitySeries

Nørgård's music often features the use of the infinity series for serializing melody, harmony, and rhythm in musical composition. The method takes its name from the endlessly self-similar nature of the resulting musical material, comparable to fractal geometry. Mathematically, the infinity series is an integer sequence. "Invented in an attempt to unify in a perfect way repetition and variation," the first few terms of its simplest form are 0, 1, −1, 2, 1, 0, −2, 3, ….

`OEIS: A004718` (Online Encyclopedia of Integer Sequences)

Alias: `infSeries()`

**arguments**
- {Int+/Array} -> output length of the Meldoy's steps (default=16, uses length of Array if input)
- {Array} -> seed the sequence's first two steps (defaults = [0, 1])
- {Int} -> offset from which the sequence starts

```js
Algo.infinitySeries();
//=> [
//    0,  1, -1, 2, 1, 0,
//   -2,  3, -1, 2, 0, 1,
//    2, -1, -3, 4
// ] 

Algo.infinitySeries(16, [0, 3]);
//=> [
//    0,  3, -3,  6, 3, 0,
//   -6,  9, -3,  6, 0, 3,
//    6, -3, -9, 12
// ] 

Algo.infSeries(8, [0, 1], 120);
//=> [
//   -4,  5,  3, -2,
//    5, -4, -6,  7
// ]
```