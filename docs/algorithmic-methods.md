<!-- Generated with jsdoc2md, do not edit the .md file, instead edit the .hbs and the jsdoc in the src -->

# Algorithmic

More generative methods, but in general more complex algorithms, such as euclidean rhythm generation, lindenmayer string expansion, fibonacci number sequence, pisano periods and more. Most functions follow the pattern: `function(<array-output-size>, ...<other-arguments>)`

## Include

```js
const Algo = require('total-serialism').Algorithmic;

Algo.euclid();
Algo.fibonacci();
```

OR 

```js
const { euclid, fibonacci } = require('total-serialism').Algorithmic;

euclid();
fibonacci();
```

## Classes

* [Automaton](#Automaton)
    * [new Automaton([population], [rule])](#new_Automaton_new)
    * [.state](#Automaton+state) ⇒ <code>Array.&lt;Number&gt;</code>
    * [.table](#Automaton+table) ⇒ <code>Object</code>
    * [.rule(rule)](#Automaton+rule)
    * [.feed(feed)](#Automaton+feed)
    * [.next()](#Automaton+next) ⇒ <code>Array.&lt;Number&gt;</code>

## Functions

* [hex([string])](#hex) ⇒ <code>Array.&lt;Number&gt;</code>
* [fastEuclid([length], [hits], [rotate])](#fastEuclid) ⇒ <code>Array.&lt;Number&gt;</code>
* [euclid([length], [hits], [rotate])](#euclid) ⇒ <code>Array.&lt;Number&gt;</code>
* [linden(axiom, iterations, rules)](#linden) ⇒ <code>Array.&lt;Number&gt;</code>
* [collatz(start)](#collatz) ⇒ <code>Array.&lt;Number&gt;</code>
* [collatzMod(start, [modulus])](#collatzMod) ⇒ <code>Array.&lt;Number&gt;</code>
* [bigCollatz(start)](#bigCollatz) ⇒ <code>Array.&lt;Number&gt;</code>
* [bigCollatzMod(start, [modulus])](#bigCollatzMod) ⇒ <code>Array.&lt;Number&gt;</code>
* [nbonacci(length, [f1], [f2], [multiplier], [string_output])](#nbonacci) ⇒ <code>Array.&lt;Number&gt;</code> \| <code>Array.&lt;String&gt;</code>
* [fibonacci(length, [offset], [string_output])](#fibonacci) ⇒ <code>Array.&lt;Number&gt;</code> \| <code>Array.&lt;String&gt;</code>
* [pisano([modulus], [output])](#pisano) ⇒ <code>Array.&lt;Number&gt;</code> \| <code>Array.&lt;String&gt;</code>
* [pell(length, [offset], [string_output])](#pell) ⇒ <code>Array.&lt;Number&gt;</code> \| <code>Array.&lt;String&gt;</code>
* [threeFibonacci(length, [offset], [string_output])](#threeFibonacci) ⇒ <code>Array.&lt;Number&gt;</code> \| <code>Array.&lt;String&gt;</code>
* [lucas(length, [offset], [string_output])](#lucas) ⇒ <code>Array.&lt;Number&gt;</code> \| <code>Array.&lt;String&gt;</code>
* [infSeries([size], [seed], [offset])](#infSeries) ⇒ <code>Array.&lt;Number&gt;</code>

<a name="Automaton"></a>

## Automaton
**Kind**: global class  
**Access**: public  

* [Automaton](#Automaton)
    * [new Automaton([population], [rule])](#new_Automaton_new)
    * [.state](#Automaton+state) ⇒ <code>Array.&lt;Number&gt;</code>
    * [.table](#Automaton+table) ⇒ <code>Object</code>
    * [.rule(rule)](#Automaton+rule)
    * [.feed(feed)](#Automaton+feed)
    * [.next()](#Automaton+next) ⇒ <code>Array.&lt;Number&gt;</code>


* * *

<a name="new_Automaton_new"></a>

### new Automaton([population], [rule])
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[population]</td><td><code>number</code></td><td><p>size of the population (default = 8)</p>
</td>
    </tr><tr>
    <td>[rule]</td><td><code>number</code></td><td><p>the rule to apply</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
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
**Example**  
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
Some interesting rules to try: 3 5 9 18 22 26 30 41 45 54 60 73 90 105 
106 110 120 122 126 146 150 154 181

* * *

<a name="Automaton+state"></a>

### automaton.state ⇒ <code>Array.&lt;Number&gt;</code>
return the current state of the Automaton

**Kind**: instance property of [<code>Automaton</code>](#Automaton)  

* * *

<a name="Automaton+table"></a>

### automaton.table ⇒ <code>Object</code>
return the object of rules

**Kind**: instance property of [<code>Automaton</code>](#Automaton)  

* * *

<a name="Automaton+rule"></a>

### automaton.rule(rule)
set the rule for the automaton

**Kind**: instance method of [<code>Automaton</code>](#Automaton)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>rule</td><td><code>Number</code> | <code>Array.&lt;Number&gt;</code> | <code>Object</code></td><td><p>the rule to apply. Can by either a number, an array or a rule Object</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="Automaton+feed"></a>

### automaton.feed(feed)
feed the automaton with an initial array

**Kind**: instance method of [<code>Automaton</code>](#Automaton)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>feed</td><td><code>Array.&lt;Number&gt;</code></td><td><p>an initial array for the state</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="Automaton+next"></a>

### automaton.next() ⇒ <code>Array.&lt;Number&gt;</code>
calculate the next generation from the rules

**Kind**: instance method of [<code>Automaton</code>](#Automaton)  

* * *

<a name="hex"></a>

## hex([string]) ⇒ <code>Array.&lt;Number&gt;</code>
Generate hexadecimal rhythms. Hexadecimal beats make use of hexadecimal 
values (0 - f) that are a base-16 number system. Because one digit in a 
base-16 number system has 16 possible values (0 - 15) these can be converted 
to 4 bits that therefore can be seen as groups of 4 16th notes. These 
hexadecimal values will then represent any permutation of 1's and 0's in a 4 
bit number, where 0 = 0 0 0 0, 7 = 0 1 1 1, b = 1 0 1 1, f = 1 1 1 1 and all 
possible values in between. This method does not work with actual 
hexadecimal notation (`0x...`), for that use `binary()` as an alternative.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[string]</td><td><code>String</code> | <code>Number</code></td><td><p>of hexadecimal characters (0-f) (default = 8)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// generate a hexadecimal rhythm based on a hexadecimal string (0-f)
// inspired by Steven Yi's implementation in CSound Live Coding
Algo.hexBeat('a9d2');
//=> [ 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0 ]

Algo.hexBeat(573);
//=> [ 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1 ] 
```
[Learn hex beats by Steven Yi](https://kunstmusik.github.io/learn-hex-beats/)

* * *

<a name="fastEuclid"></a>

## fastEuclid([length], [hits], [rotate]) ⇒ <code>Array.&lt;Number&gt;</code>
A fast euclidean rhythm generating algorithm. Uses the downsampling of a 
line drawn between two points in a 2-dimensional grid to divide the squares 
into an evenly distributed amount of steps. Generates the correct 
distribution, but the rotation/order may differ a bit from the recursive 
[euclid](#euclid) method. This algorithm is called the Bresenham Line Algorithm.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[length]</td><td><code>Int</code></td><td><p>of output array (default = 8)</p>
</td>
    </tr><tr>
    <td>[hits]</td><td><code>Int</code></td><td><p>(default = 4)</p>
</td>
    </tr><tr>
    <td>[rotate]</td><td><code>Int</code></td><td><p>(default = 0)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Algo.fastEuclid(8, 5);
//=> [ 1, 0, 1, 0, 1, 1, 0, 1 ] 

Algo.fastEuclid(16, 9, 1);
//=> [ 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0 ]  
```

* * *

<a name="euclid"></a>

## euclid([length], [hits], [rotate]) ⇒ <code>Array.&lt;Number&gt;</code>
Generate a euclidean rhythm evenly spacing n-hits amongst n-steps. Inspired 
by Godfried Toussaints famous paper "The Euclidean Algorithm Generates 
Traditional Musical Rhythms". 

**NB: Use [fastEuclid](#fastEuclid) instead, it is more efficient**

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[length]</td><td><code>Int</code></td><td><p>of array (default = 8)</p>
</td>
    </tr><tr>
    <td>[hits]</td><td><code>Int</code></td><td><p>(default = 4)</p>
</td>
    </tr><tr>
    <td>[rotate]</td><td><code>Int</code></td><td><p>(default = 0)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Algo.euclid(8, 5);
//=> [ 1, 0, 1, 1, 0, 1, 1, 0 ] 

Algo.euclid(16, 9, 1); 
//=> [ 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1 ]
```

* * *

<a name="linden"></a>

## linden(axiom, iterations, rules) ⇒ <code>Array.&lt;Number&gt;</code>
The original Lindenmayer string expansion returns a string of characters 
based on a set of rules and an axiom specified as strings. This is useful to 
generate fractal like structures and simulate natural growth. The default 
rule is 1 -> 10, 0 -> 1, where 1=A and 0=B. Rules are specified as a JS 
object consisting of strings or arrays

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>axiom</td><td><code>*</code></td><td><p>value to start with (default = 1)</p>
</td>
    </tr><tr>
    <td>iterations</td><td><code>Number</code></td><td><p>number of generations to iterate (default = 3)</p>
</td>
    </tr><tr>
    <td>rules</td><td><code>Object</code></td><td><p>object or reference to object with rules</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
The classic Lsystem string expansion
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
**Example**  
A more useful version that works nicely with the rest of the library. By 
returning an array of integers it can be quickly put to use in combination 
with other methods to generate rhythms, melodies and more based on custom 
rulesets.

```js
Algo.linden();
//=> [ 1, 0, 1, 1, 0 ] (default)

// Cantor set as 0's and 1's in an array ruleset
Algo.linden(1, 3, {1: [1, 0, 1], 0: [0, 0, 0]});
//=> [ 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1 ]
```

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

* * *

<a name="collatz"></a>

## collatz(start) ⇒ <code>Array.&lt;Number&gt;</code>
Generate an array of numbers from the Collatz Conjecture, also known as the 
`3n+1` conjecture. Start with any positive integer `n`. Each next number is 
obtained from the previous number as follows: If the previous number is even 
then the next term is the previous term divided by 2. If the previous term 
is odd then the next term is 3 times the prevous term plus 1. The 
conjecture is, that no matter what value of `n`, the sequence will always 
reach one. The length of the output is quite unpredicatable and can 
therefore be an interesting sequence for algorithmic composition.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>start</td><td><code>Number</code></td><td><p>any positive integer (default = 12)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// the collatz sequence for the number 15
Algo.collatz(7);
//=> [
//  1,  2,  4,  8, 16,  5,
//  10, 20, 40, 13, 26, 52,
//  17, 34, 11, 22
//	]
```

* * *

<a name="collatzMod"></a>

## collatzMod(start, [modulus]) ⇒ <code>Array.&lt;Number&gt;</code>
The [collatz](#collatz) conjecture sequence with a modulus operation

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>start</td><td><code>Int</code></td><td><p>positive integer starting point</p>
</td>
    </tr><tr>
    <td>[modulus]</td><td><code>Int</code></td><td><p>(optional, default = 2)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// return the collatz sequence with a modulus operation (default = 2)
Algo.collatzMod(7, 12);
//=> [
//   1,  2,  4,  8, 4, 5,
//  10,  8,  4,  1, 2, 4,
//   5, 10, 11, 10
//	] 
```

* * *

<a name="bigCollatz"></a>

## bigCollatz(start) ⇒ <code>Array.&lt;Number&gt;</code>
The [collatz](#collatz) conjecture, but implemented with the BigNumber library.
The collatz sequence can encounter quite big values so alternatively you can 
use bigCollatz and bigCollatzMod to allow for larger number calculations

**Kind**: global function  
**See**: collatz  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>start</td><td><code>Number</code></td><td><p>any positive integer (default = 12)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Algo.bigCollatz('931386509544713451').length;
// => 2283
```

* * *

<a name="bigCollatzMod"></a>

## bigCollatzMod(start, [modulus]) ⇒ <code>Array.&lt;Number&gt;</code>
The [collatzMod](#collatzMod) function, but implemented with the BigNumber library.
The collatz sequence can encounter quite big values so alternatively you can 
use bigCollatz and bigCollatzMod to allow for larger number calculations

**Kind**: global function  
**See**: collatzMod  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>start</td><td><code>Int</code></td><td><p>positive integer starting point</p>
</td>
    </tr><tr>
    <td>[modulus]</td><td><code>Int</code></td><td><p>(optional, default = 2)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Algo.bigCollatzMod('931386509544713451');
```

* * *

<a name="nbonacci"></a>

## nbonacci(length, [f1], [f2], [multiplier], [string_output]) ⇒ <code>Array.&lt;Number&gt;</code> \| <code>Array.&lt;String&gt;</code>
Generate an array of Fibonacci numbers `F[n] = F[n-1] + F[n-2]`, with the 
option to set a custom starting pair of numbers. This generates n-bonacci 
sequence according to the following method: `F[n] = t * F[n-1] + F[n-2]`

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>length</td><td><code>Int</code></td><td><p>output length of array</p>
</td>
    </tr><tr>
    <td>[f1]</td><td><code>Int</code></td><td><p>starting value F[n-1] (optional, default = 0)</p>
</td>
    </tr><tr>
    <td>[f2]</td><td><code>Int</code></td><td><p>starting value F[n-2] (optional, default = 1)</p>
</td>
    </tr><tr>
    <td>[multiplier]</td><td><code>Int</code></td><td><p>multiplication factor for t * F[n-1] (optional, default = 1)</p>
</td>
    </tr><tr>
    <td>[string_output]</td><td><code>Bool</code></td><td><p>output as strings (optional, default = false)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// start with 1, 3, then multiply [n-1] by 2 before adding with [n-2]
Algo.nbonacci(10, 1, 3, 2);
//=> [ 1, 3, 7, 17, 41, 99, 239, 577, 1393, 3363 ]

// this is the same as Algo.fibonacci(12)
Algo.nbonacci(12, 0, 1, 1);
//=> [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ]  
```

* * *

<a name="fibonacci"></a>

## fibonacci(length, [offset], [string_output]) ⇒ <code>Array.&lt;Number&gt;</code> \| <code>Array.&lt;String&gt;</code>
Generate an array of Fibonacci numbers `F[n] = F[n-1] + F[n-2]`. Numbers are 
by default represented as Strings in order to allow for bigger numbers than 
64-bit integers can represent. The calculations are done using the bignumber.
js library. A second argument sets an offset to pick a certain number from 
the sequence.

`OEIS: A000045` (Online Encyclopedia of Integer Sequences)

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>length</td><td><code>Int</code></td><td><p>output length of array</p>
</td>
    </tr><tr>
    <td>[offset]</td><td><code>Int</code></td><td><p>start the sequence at nth-fibonacci number (optional, default = 0)</p>
</td>
    </tr><tr>
    <td>[string_output]</td><td><code>Bool</code></td><td><p>output numbers as strings (optional, default = false)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// 10 fibonacci numbers, starting from 0, 1, 1 etc...
Algo.fibonacci(12);
//=> [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ] 

// 2 fibonacci numbers, starting from the 100th value
Algo.fibonacci(2, 100, true);
//=> [ '354224848179261915075', '573147844013817084101' ] 
```

* * *

<a name="pisano"></a>

## pisano([modulus], [output]) ⇒ <code>Array.&lt;Number&gt;</code> \| <code>Array.&lt;String&gt;</code>
Generate Pisano periods for the Fibonacci sequence. The pisano period is a 
result of applying a modulo operation on the Fibonacci sequence `F[n] = (F
[n-1] + F[n-2]) mod a`. The length of the period differs per modulus value, 
but the sequence will always have a repetition.

**Kind**: global function  
**See**: fibonacci  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[modulus]</td><td><code>Int</code></td><td><p>for pisano period (optional, default = 12)</p>
</td>
    </tr><tr>
    <td>[output]</td><td><code>Int</code></td><td><p>length of array (optional, defaults to period length)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// the pisano period for mod 7 has a length of 16
Algo.pisano(7);
//=> [ 0, 1, 1, 2, 3, 5, 1, 6, 0, 6, 6, 5, 4, 2, 6, 1 ]

// second argument gives a fixed length output
Algo.pisano(4, 10);
//=> [ 0, 1, 1, 2, 3, 1, 0, 1, 1, 2, 3, 1 ]
``` 

* * *

<a name="pell"></a>

## pell(length, [offset], [string_output]) ⇒ <code>Array.&lt;Number&gt;</code> \| <code>Array.&lt;String&gt;</code>
Other integer sequences based on Fibonacci are also available. For instance
generate the Pell numbers as an array according to the formula
F(n) = 2 * F(n-1) + F(n-2). The ratio between consecutive numbers 
in the pell sequence tends towards the Silver Ratio 1 + √2.

OEIS: A006190 (Online Encyclopedia of Integer Sequences)

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>length</td><td><code>Int</code></td><td><p>output length of array</p>
</td>
    </tr><tr>
    <td>[offset]</td><td><code>Int</code></td><td><p>start the sequence at nth-fibonacci number (optional, default = 0)</p>
</td>
    </tr><tr>
    <td>[string_output]</td><td><code>Bool</code></td><td><p>output numbers as strings (optional, default = false)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Algo.pell(10);
//=> [ 0, 1, 2, 5, 12, 29, 70, 169, 408, 985 ] 
```

* * *

<a name="threeFibonacci"></a>

## threeFibonacci(length, [offset], [string_output]) ⇒ <code>Array.&lt;Number&gt;</code> \| <code>Array.&lt;String&gt;</code>
Other integer sequences based on Fibonacci are also available. For instance
generate the threeBonacci numbers as an array according to the formula:
F(n) = 2 * F(n-1) + F(n-2). The ratio between consecutive numbers in 
the 3-bonacci sequence tends towards the Bronze Ratio (3 + √13) / 2.

OEIS: A000129 (Online Encyclopedia of Integer Sequences)

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>length</td><td><code>Int</code></td><td><p>output length of array</p>
</td>
    </tr><tr>
    <td>[offset]</td><td><code>Int</code></td><td><p>start the sequence at nth-fibonacci number (optional, default = 0)</p>
</td>
    </tr><tr>
    <td>[string_output]</td><td><code>Bool</code></td><td><p>output numbers as strings (optional, default = false)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Algo.threeFibonacci(10);
//=> [ 0, 1, 3, 10, 33, 109, 360, 1189, 3927, 12970 ] 
```

* * *

<a name="lucas"></a>

## lucas(length, [offset], [string_output]) ⇒ <code>Array.&lt;Number&gt;</code> \| <code>Array.&lt;String&gt;</code>
Other integer sequences based on Fibonacci are also available. For instance
Generate the Lucas numbers as an array according to the formula:
F(n) = F(n-1) + F(n-2), with F0=2 and F1=1.

OEIS: A000032 (Online Encyclopedia of Integer Sequences)

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>length</td><td><code>Int</code></td><td><p>output length of array</p>
</td>
    </tr><tr>
    <td>[offset]</td><td><code>Int</code></td><td><p>start the sequence at nth-fibonacci number (optional, default = 0)</p>
</td>
    </tr><tr>
    <td>[string_output]</td><td><code>Bool</code></td><td><p>output numbers as strings (optional, default = false)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Algo.lucas(10);
//=> [ 2, 1, 3, 4, 7, 11, 18, 29, 47, 76 ]  
```

* * *

<a name="infSeries"></a>

## infSeries([size], [seed], [offset]) ⇒ <code>Array.&lt;Number&gt;</code>
Nørgård's music often features the use of the infinity series for 
serializing melody, harmony, and rhythm in musical composition. The method 
takes its name from the endlessly self-similar nature of the resulting 
musical material, comparable to fractal geometry. Mathematically, the 
infinity series is an integer sequence. "Invented in an attempt to unify in 
a perfect way repetition and variation," the first few terms of its simplest 
form are 0, 1, −1, 2, 1, 0, −2, 3, ….

`OEIS: A004718` (Online Encyclopedia of Integer Sequences)

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[size]</td><td><code>Int</code></td><td><p>the length of the resulting Meldoy&#39;s steps (default = 16)</p>
</td>
    </tr><tr>
    <td>[seed]</td><td><code>Array.&lt;Number&gt;</code></td><td><p>the sequence&#39;s first two steps (default = [0, 1])</p>
</td>
    </tr><tr>
    <td>[offset]</td><td><code>Int</code></td><td><p>from which the sequence starts (default = 0)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
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

* * *


***

&copy; 2020-2026 Timo Hoogland (@tmhglnd), www.timohoogland.com, MIT License