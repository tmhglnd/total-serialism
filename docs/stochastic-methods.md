<!-- Generated with jsdoc2md, do not edit the .md file, instead edit the .hbs and the jsdoc in the src -->

# Stochastic

Methods for procedurally generating number sequences based on various types of (psuedo) randomness, such as white noise (evenly distributed), rolling dice, flipping a coin and more. Also includes Markov Chain.

## Include

```js
const Rand = require('total-serialism').Stochastic;

Rand.drunk();
Rand.urn();
```

OR

```js
const { drunk, urn } = require('total-serialism').Stochastic;

drunk();
urn();
```

## Classes

* [MarkovChain](#MarkovChain)
    * [new MarkovChain(data)](#new_MarkovChain_new)
    * [.table](#MarkovChain+table) ⇒ <code>Object</code>
    * [.read(table)](#MarkovChain+read) ⇒ <code>Bool</code>
    * [.clear()](#MarkovChain+clear)
    * [.train(data)](#MarkovChain+train)
    * [.state(state)](#MarkovChain+state)
    * [.randomState()](#MarkovChain+randomState)
    * [.next()](#MarkovChain+next) ⇒ <code>\*</code>
    * [.chain(size)](#MarkovChain+chain) ⇒ <code>Array</code>
* [DeepMarkov](#DeepMarkov)
    * [new DeepMarkov(data, [order])](#new_DeepMarkov_new)
    * [.table](#DeepMarkov+table) ⇒ <code>Map</code>
    * [.read(table)](#DeepMarkov+read) ⇒ <code>Bool</code>
    * [.stringify()](#DeepMarkov+stringify)
    * [.parse(table)](#DeepMarkov+parse) ⇒ <code>Bool</code>
    * [.clear()](#DeepMarkov+clear)
    * [.train(data, [order])](#DeepMarkov+train)
    * [.state(state)](#DeepMarkov+state)
    * [.randomState()](#DeepMarkov+randomState)
    * [.next()](#DeepMarkov+next) ⇒ <code>\*</code>
    * [.chain(size)](#DeepMarkov+chain) ⇒ <code>Array</code>

## Functions

* [seed(seed)](#seed) ⇒ <code>Number</code> \| <code>String</code>
* [getSeed()](#getSeed) ⇒ <code>Number</code> \| <code>String</code>
* [randomF(size, [min], [max])](#randomF) ⇒ <code>Array.&lt;Number&gt;</code>
* [random(size, [min], [max])](#random) ⇒ <code>Array.&lt;Number&gt;</code>
* [drunkF(size, [step], [min], [max], [start], [fold])](#drunkF) ⇒ <code>Array.&lt;Number&gt;</code>
* [drunk(size, [step], [min], [max], [start], [fold])](#drunk) ⇒ <code>Array.&lt;Number&gt;</code>
* [coin(size)](#coin) ⇒ <code>Array.&lt;Number&gt;</code>
* [dice(size, sides)](#dice) ⇒ <code>Array.&lt;Number&gt;</code>
* [clave(size, maximum, minimum)](#clave) ⇒ <code>Array.&lt;Number&gt;</code>
* [shuffle(Array)](#shuffle) ⇒ <code>Array</code>
* [twelveTone()](#twelveTone) ⇒ <code>Array.&lt;Number&gt;</code>
* [urn(size, maximum, minimum)](#urn) ⇒ <code>Array.&lt;Number&gt;</code>
* [choose(size, items)](#choose) ⇒ <code>Array</code>
* [pick(size, items)](#pick) ⇒ <code>Array</code>
* [expand(array, size)](#expand) ⇒ <code>Array.&lt;Number&gt;</code>

<a name="MarkovChain"></a>

## MarkovChain
**Kind**: global class  
**Access**: public  

* [MarkovChain](#MarkovChain)
    * [new MarkovChain(data)](#new_MarkovChain_new)
    * [.table](#MarkovChain+table) ⇒ <code>Object</code>
    * [.read(table)](#MarkovChain+read) ⇒ <code>Bool</code>
    * [.clear()](#MarkovChain+clear)
    * [.train(data)](#MarkovChain+train)
    * [.state(state)](#MarkovChain+state)
    * [.randomState()](#MarkovChain+randomState)
    * [.next()](#MarkovChain+next) ⇒ <code>\*</code>
    * [.chain(size)](#MarkovChain+chain) ⇒ <code>Array</code>


* * *

<a name="new_MarkovChain_new"></a>

### new MarkovChain(data)
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>data</td><td><code>Array</code></td><td><p>training data</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
const Rand = require('total-serialism').Stochastic;

var melody = ['c', 'e', 'f', 'e', 'g', 'f', 'a', 'c'];
// make a MarkovChain instance and optionally train with array
let markov = new Rand.MarkovChain(melody);

// add more to the training
var melody2 = ['g', 'a', 'b', 'g', 'a', 'f', 'd', 'e'];
markov.train(melody2);

// view the transition table (stored as dictionary)
// can also be used to export the table to a file
console.log(markov.table);
// { c: [ 'e' ],
//   e: [ 'f', 'g' ],
//   f: [ 'e', 'a', 'd' ],
//   g: [ 'f', 'a', 'a' ],
//   a: [ 'c', 'b', 'f' ],
//   b: [ 'g' ],
//   d: [ 'e' ] }

// set the state of the model used as initial value
markov.state('c');

// random number generator is connected to global seed
Rand.seed(31415); 

// go to the next state based on the models probabilities
markov.next();
// => 'e'

// generate an array of 10 values 
markov.chain(10);
// => [ 'f', 'd', 'e', 'g', 'a', 'b', 'g', 'a', 'c', 'e' ]

// clear the model
markov.clear();

// read a model from a json/object structure
markov.read({ c: ['e'], e: ['f', 'g' ]});
```

* * *

<a name="MarkovChain+table"></a>

### markovChain.table ⇒ <code>Object</code>
output a copy of the table as an object

**Kind**: instance property of [<code>MarkovChain</code>](#MarkovChain)  

* * *

<a name="MarkovChain+read"></a>

### markovChain.read(table) ⇒ <code>Bool</code>
read a markov chain table from a json file

**Kind**: instance method of [<code>MarkovChain</code>](#MarkovChain)  
**Returns**: <code>Bool</code> - true if succesful  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>table</td><td><code>Object</code></td><td><p>pretrained Object table to read</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="MarkovChain+clear"></a>

### markovChain.clear()
empty the transition probabilities

**Kind**: instance method of [<code>MarkovChain</code>](#MarkovChain)  

* * *

<a name="MarkovChain+train"></a>

### markovChain.train(data)
build a transition table from array of values

**Kind**: instance method of [<code>MarkovChain</code>](#MarkovChain)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>data</td><td><code>Array</code></td><td><p>training data</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="MarkovChain+state"></a>

### markovChain.state(state)
set the state

**Kind**: instance method of [<code>MarkovChain</code>](#MarkovChain)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>state</td><td><code>*</code></td><td><p>the state (depends on the transition table)</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="MarkovChain+randomState"></a>

### markovChain.randomState()
generate a random state

**Kind**: instance method of [<code>MarkovChain</code>](#MarkovChain)  

* * *

<a name="MarkovChain+next"></a>

### markovChain.next() ⇒ <code>\*</code>
if the state is undefined or has no transition in table randomly choose 
from all

**Kind**: instance method of [<code>MarkovChain</code>](#MarkovChain)  
**Returns**: <code>\*</code> - next state  

* * *

<a name="MarkovChain+chain"></a>

### markovChain.chain(size) ⇒ <code>Array</code>
return an array of values generated iteratively with next()

**Kind**: instance method of [<code>MarkovChain</code>](#MarkovChain)  
**Returns**: <code>Array</code> - generated values  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>size</td><td><code>Int</code></td><td><p>size of output array (default = 2)</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="DeepMarkov"></a>

## DeepMarkov
**Kind**: global class  
**Access**: public  

* [DeepMarkov](#DeepMarkov)
    * [new DeepMarkov(data, [order])](#new_DeepMarkov_new)
    * [.table](#DeepMarkov+table) ⇒ <code>Map</code>
    * [.read(table)](#DeepMarkov+read) ⇒ <code>Bool</code>
    * [.stringify()](#DeepMarkov+stringify)
    * [.parse(table)](#DeepMarkov+parse) ⇒ <code>Bool</code>
    * [.clear()](#DeepMarkov+clear)
    * [.train(data, [order])](#DeepMarkov+train)
    * [.state(state)](#DeepMarkov+state)
    * [.randomState()](#DeepMarkov+randomState)
    * [.next()](#DeepMarkov+next) ⇒ <code>\*</code>
    * [.chain(size)](#DeepMarkov+chain) ⇒ <code>Array</code>


* * *

<a name="new_DeepMarkov_new"></a>

### new DeepMarkov(data, [order])
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>data</td><td><code>Array</code></td><td><p>training data</p>
</td>
    </tr><tr>
    <td>[order]</td><td><code>Int</code></td><td><p>markov-chain order (default = 2)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
const Rand = require('total-serialism').Stochastic;

var pattern = [1, 2, 3, 1, 2, 4, 1, 2, 5, 2, 3, 4];
// make a MarkovChain instance and optionally train with array
// an optional second argument sets the order of the markov (default=2)
let markov = new Rand.DeepMarkov(pattern, 2);

// view the transition table (stored as Map())
// Keys are stored as stringis derived via JSON.stringify()
console.log(markov.table);
// Map(7) {
//   '[1,2]' => [ 3, 4, 5 ],
//   '[2,3]' => [ 1, 4 ],
//   '[3,1]' => [ 2 ],
//   '[2,4]' => [ 1 ],
//   '[4,1]' => [ 2 ],
//   '[2,5]' => [ 2 ],
//   '[5,2]' => [ 3 ]
// }

// set the state of the model used as initial value
markov.state([1, 2]);

// random number generator is connected to global seed
Rand.seed(31415);

// go to the next state based on the model probabilities
markov.next();
// => 5

// generate an array of 10 values 
markov.chain(10);
// => [ 2, 3, 1, 2, 5, 2, 3, 4, 1, 2 ]

// clear the model
markov.clear();

// TO DO:
// read/write a model from a Map structure
let model = markov.table;
let otherMarkov = new DeepMarkov();
otherMarkov.read(model);

// for storage to file or transfer between DeepMarkov instances
// you can use the build in stringify and parse methods
// these methods utilize JSON.stringify() and .parse()
// with specific replacer and reviver methods
let modelString = markov.stringify();
let fromStringMarkov = new DeepMarkov();
fromStringMarkov.parse(modelString);
```

* * *

<a name="DeepMarkov+table"></a>

### deepMarkov.table ⇒ <code>Map</code>
output a copy of the table as a Map object

**Kind**: instance property of [<code>DeepMarkov</code>](#DeepMarkov)  

* * *

<a name="DeepMarkov+read"></a>

### deepMarkov.read(table) ⇒ <code>Bool</code>
read a markov chain table from a json file

**Kind**: instance method of [<code>DeepMarkov</code>](#DeepMarkov)  
**Returns**: <code>Bool</code> - true if succesful  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>table</td><td><code>Map</code></td><td><p>pretrained Map table to read</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="DeepMarkov+stringify"></a>

### deepMarkov.stringify()
return stringified version of the DeepMarkov table

**Kind**: instance method of [<code>DeepMarkov</code>](#DeepMarkov)  

* * *

<a name="DeepMarkov+parse"></a>

### deepMarkov.parse(table) ⇒ <code>Bool</code>
parse an incoming string to a Map() for transition table

**Kind**: instance method of [<code>DeepMarkov</code>](#DeepMarkov)  
**Returns**: <code>Bool</code> - true if succesfully parsed  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>table</td><td><code>String</code></td><td><p>transition table as a string to parse for Map</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="DeepMarkov+clear"></a>

### deepMarkov.clear()
empty the transition probabilities

**Kind**: instance method of [<code>DeepMarkov</code>](#DeepMarkov)  

* * *

<a name="DeepMarkov+train"></a>

### deepMarkov.train(data, [order])
build a transition table from array of values

**Kind**: instance method of [<code>DeepMarkov</code>](#DeepMarkov)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>data</td><td><code>Array</code></td><td><p>training data</p>
</td>
    </tr><tr>
    <td>[order]</td><td><code>Int</code></td><td><p>markov-chain order (default = 2)</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="DeepMarkov+state"></a>

### deepMarkov.state(state)
set the state

**Kind**: instance method of [<code>DeepMarkov</code>](#DeepMarkov)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>state</td><td><code>*</code></td><td><p>the state (depends on the transition table)</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="DeepMarkov+randomState"></a>

### deepMarkov.randomState()
generate a random state

**Kind**: instance method of [<code>DeepMarkov</code>](#DeepMarkov)  

* * *

<a name="DeepMarkov+next"></a>

### deepMarkov.next() ⇒ <code>\*</code>
if the state is undefined or has no transition in table randomly choose 
from all

**Kind**: instance method of [<code>DeepMarkov</code>](#DeepMarkov)  
**Returns**: <code>\*</code> - next state  

* * *

<a name="DeepMarkov+chain"></a>

### deepMarkov.chain(size) ⇒ <code>Array</code>
return an array of values generated iteratively with next()

**Kind**: instance method of [<code>DeepMarkov</code>](#DeepMarkov)  
**Returns**: <code>Array</code> - generated values  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>size</td><td><code>Int</code></td><td><p>size of output array (default = 2)</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="seed"></a>

## seed(seed) ⇒ <code>Number</code> \| <code>String</code>
Set the seed for the Random Number Generators. A value of `0` sets the seed 
to a random value between 1 and 9999. The seed can only be set **once** for 
every import of the library. However, the seed can be reset in between 
function calls. You can retrieve the current seed with `getSeed()`.

**Kind**: global function  
**Returns**: <code>Number</code> \| <code>String</code> - the seed  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>seed</td><td><code>Number</code> | <code>String</code></td><td><p>set the seed</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// set a random seed between 0-9999
Rand.seed()

// set the random number generator seed
Rand.seed(19374);
```

* * *

<a name="getSeed"></a>

## getSeed() ⇒ <code>Number</code> \| <code>String</code>
Get the seed from the Random Number Generator. Returns the value that was 
latest set with `seed()`.

**Kind**: global function  
**Returns**: <code>Number</code> \| <code>String</code> - the seed  
**Example**  
```js
// get the random number generator seed
Rand.getSeed();
// => 19374
```

* * *

<a name="randomF"></a>

## randomF(size, [min], [max]) ⇒ <code>Array.&lt;Number&gt;</code>
Generate a list of random floating points between a specified range 
(excluding high value).

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>size</td><td><code>Int</code></td><td><p>size of output array (default = 1)</p>
</td>
    </tr><tr>
    <td>[min]</td><td><code>Number</code></td><td><p>minimum range (optional, default = 0)</p>
</td>
    </tr><tr>
    <td>[max]</td><td><code>Number</code></td><td><p>maximum range (optional, default = 1)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Rand.randomFloat(3, -1, 1); 
//=> [ 0.6291111850577886, 0.15153786227276944, 0.32814801081039646 ]
```

* * *

<a name="random"></a>

## random(size, [min], [max]) ⇒ <code>Array.&lt;Number&gt;</code>
Generate a list of random integers between a specified range 
(excluding high value).

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>size</td><td><code>Int</code></td><td><p>size of output array (default = 1)</p>
</td>
    </tr><tr>
    <td>[min]</td><td><code>Number</code></td><td><p>minimum range (optional, default = 0)</p>
</td>
    </tr><tr>
    <td>[max]</td><td><code>Number</code></td><td><p>maximum range (optional, default = 12)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Rand.random(5, 0, 12); 
//=> [ 3, 3, 7, 1, 0 ]
```

* * *

<a name="drunkF"></a>

## drunkF(size, [step], [min], [max], [start], [fold]) ⇒ <code>Array.&lt;Number&gt;</code>
Generate a list of random floats, but the next random value is 
within a limited step-range of the previous value generating a random 
"drunk" walk, also referred to as brownian motion. Inspired by the `[drunk]
`-object in MaxMSP.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>size</td><td><code>Int</code></td><td><p>size of output array (default = 1)</p>
</td>
    </tr><tr>
    <td>[step]</td><td><code>Number</code></td><td><p>step range for next random value (default = 1)</p>
</td>
    </tr><tr>
    <td>[min]</td><td><code>Number</code></td><td><p>minimum range (optional, default = 0)</p>
</td>
    </tr><tr>
    <td>[max]</td><td><code>Number</code></td><td><p>maximum range (optional, default = 1)</p>
</td>
    </tr><tr>
    <td>[start]</td><td><code>Number</code></td><td><p>starting point (optional, default = (lo+hi)/2)</p>
</td>
    </tr><tr>
    <td>[fold]</td><td><code>Bool</code></td><td><p>fold between lo and hi range (optional, default = true)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js 
Rand.drunkFloat(5);
//=> [ 0.493, 0.459, 0.846, 0.963, 0.400 ] 

//  0.88 ┼╮╭╮  
//  0.76 ┤╰╯│  
//  0.63 ┤  │  
//  0.51 ┤  ╰╮ 
//  0.39 ┤   │ 
//  0.26 ┤   ╰ 
```

* * *

<a name="drunk"></a>

## drunk(size, [step], [min], [max], [start], [fold]) ⇒ <code>Array.&lt;Number&gt;</code>
Generate a list of random integers, but the next random value is 
within a limited step-range of the previous value generating a random 
"drunk" walk, also referred to as brownian motion. Inspired by the `[drunk]
`-object in MaxMSP.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>size</td><td><code>Int</code></td><td><p>size of output array (default = 1)</p>
</td>
    </tr><tr>
    <td>[step]</td><td><code>Number</code></td><td><p>step range for next random value (default = 1)</p>
</td>
    </tr><tr>
    <td>[min]</td><td><code>Number</code></td><td><p>minimum range (optional, default = 0)</p>
</td>
    </tr><tr>
    <td>[max]</td><td><code>Number</code></td><td><p>maximum range (optional, default = 12)</p>
</td>
    </tr><tr>
    <td>[start]</td><td><code>Number</code></td><td><p>starting point (optional, default = (lo+hi)/2)</p>
</td>
    </tr><tr>
    <td>[fold]</td><td><code>Bool</code></td><td><p>fold between lo and hi range (optional, default = true)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js 
Rand.drunk(10, 5, 0, 24);
//=> [ 13, 10, 14, 13, 14, 13, 15, 10, 8, 4 ] 

// 22.00 ┼       ╭╮ 
// 17.80 ┼─╮╭─╮  ││ 
// 13.60 ┤ ││ ╰╮╭╯│ 
//  9.40 ┤ ││  ╰╯ │ 
//  5.20 ┤ ╰╯     │ 
//  1.00 ┤        ╰ 

Rand.drunk(10, 4, 0, 12, 6, false);
//=> [ 2, -2, 2, 1, -3, -1, -2, -1, 3, 6 ] 

//  2.00 ┤╭╮        
// -0.20 ┤│╰╮     ╭ 
// -2.40 ┼╯ ╰╮    │ 
// -4.60 ┤   │╭╮ ╭╯ 
// -6.80 ┼   ╰╯│╭╯  
// -9.00 ┤     ╰╯  
```

* * *

<a name="coin"></a>

## coin(size) ⇒ <code>Array.&lt;Number&gt;</code>
Generate a list of random integer values 0 or 1 like a coin toss, heads/
tails.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>size</td><td><code>Int</code></td><td><p>number of coin tosses to output as array</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// generate an array of coin tosses
Rand.coin(10); 
//=> [ 0, 1, 0, 1, 0, 1, 0, 0, 1, 0 ]
```

* * *

<a name="dice"></a>

## dice(size, sides) ⇒ <code>Array.&lt;Number&gt;</code>
Generate a list of dice rolls, resulting in random integer values from 1 to 
6. Optionally use a second argument to set the amount of sides for the die.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>size</td><td><code>Int</code></td><td><p>number of tosses to output</p>
</td>
    </tr><tr>
    <td>sides</td><td><code>Int</code></td><td><p>sides of the die (optional, default = 6)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// generate an array of dice rolls
Rand.dice(4); 
//=> [ 4, 4, 2, 3 ] 

// optionally set the amount of sides for the die
Rand.dice(4, 8); 
//=> [ 8, 3, 7, 1 ]
```

* * *

<a name="clave"></a>

## clave(size, maximum, minimum) ⇒ <code>Array.&lt;Number&gt;</code>
Generate random clave patterns. The output is a binary list that represents 
a rhythm, where 1's represent onsets and 0's rests. First argument sets the 
list length output, second argument sets the maximum gap between onsets, 
third argument the minimum gap.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>size</td><td><code>Int</code></td><td><p>length of rhythm array (default = 8)</p>
</td>
    </tr><tr>
    <td>maximum</td><td><code>Int</code></td><td><p>max gap between onsets (default = 3)</p>
</td>
    </tr><tr>
    <td>minimum</td><td><code>Int</code></td><td><p>min gap between onsets (default = 2)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Rand.clave();
//=> [ 1, 0, 1, 0, 0, 1, 0, 1 ] 
//=> █ █  █ █

Rand.clave(8);
//=> [ 1, 0, 0, 1, 0, 1, 0, 1 ] 
//=> █  █ █ █

Rand.clave(16, 4);
//=> [ 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1 ] 
//=> █   █ █   █  █ █

Rand.clave(16, 3, 1);
//=> [ 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1 ] 
//=> █  █  ██  █ █  █  
```

* * *

<a name="shuffle"></a>

## shuffle(Array) ⇒ <code>Array</code>
Shuffle an array, influenced by the random seed. Based on the Fisher-Yates 
shuffle algorithm by Ronald Fisher and Frank Yates in 1938. The algorithm 
has run time complexity of O(n)

Alias: `scramble()`

**Kind**: global function  
**Returns**: <code>Array</code> - shuffled array  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>Array</td><td><code>Array</code></td><td><p>array to shuffle</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Rand.shuffle([0, 5, 7, 12]); 
//=> [ 7, 5, 0, 12 ]
```

* * *

<a name="twelveTone"></a>

## twelveTone() ⇒ <code>Array.&lt;Number&gt;</code>
Generate a list of 12 semitones (integers 0-11), then shuffle the list based 
on the random seed.

**Kind**: global function  
**Returns**: <code>Array.&lt;Number&gt;</code> - twelvetone row  
**Example**  
```js
// basically: Rand.shuffle(Gen.spread(12));
Rand.twelveTone(); 
//=> [ 11, 0, 8, 2, 4, 9, 1, 6, 3, 5, 7, 10 ]
```

* * *

<a name="urn"></a>

## urn(size, maximum, minimum) ⇒ <code>Array.&lt;Number&gt;</code>
Generate a list of unique random integer values between a certain specified 
range (excluding high val). An 'urn' is filled with values and when one is 
picked it is removed from the urn. If the outputlist is longer then the 
range, the urn refills when empty. On refill it is made sure no repeating 
value can be picked. Inspired by the `[urn]`-object in MaxMSP.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>size</td><td><code>Int</code></td><td><p>size of output array (default = 1)</p>
</td>
    </tr><tr>
    <td>maximum</td><td><code>Int</code></td><td><p>max range (optional, default = 12)</p>
</td>
    </tr><tr>
    <td>minimum</td><td><code>Int</code></td><td><p>min range (optional, defautl = 0)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// generate an array with random values picked from an urn
// with default range 0 to 12 (exclusive)
Rand.urn(5);
//=> [ 3, 6, 2, 8, 7 ] 

// set the range with a second argument to 0-7 (exclusive)
// when more values then range are requested the urn 
// refills and reshuffles
Rand.urn(10, 7);
//=> [ 6, 4, 3, 2, 0, 5, 1, 4, 2, 1 ] 

// A third argument sets a lower range replacing the default 0
Rand.urn(12, -3, 3);
//=> [ -3, 1, -1, 2, 0, -2, 2, -2, 0, -1, -3, 1 ]
```

* * *

<a name="choose"></a>

## choose(size, items) ⇒ <code>Array</code>
Choose random items from an array with uniform probability 
distribution. The default array is an array of 0 and 1.

**Kind**: global function  
**Returns**: <code>Array</code> - randomly chosen items  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>size</td><td><code>Int</code></td><td><p>size of output array (default = 1)</p>
</td>
    </tr><tr>
    <td>items</td><td><code>Array</code></td><td><p>array to choose from (optional, default=[0, 1])</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Rand.choose(5, [0, 1, 2, 3, 5, 8, 13]);
//=> [ 3, 0, 13, 3, 2 ] 

// Array can have other datatypes
Rand.choose(5, ['c', 'e', 'g']);
//=> [ 'c', 'c', 'g', 'e', 'g' ] 
```

* * *

<a name="pick"></a>

## pick(size, items) ⇒ <code>Array</code>
Pick random items from an array provided. An "urn" is filled with values and 
when one is picked it is removed from the urn. If the outputlist is longer 
then the range, the urn refills when empty. On refill it is made sure no 
repeating value can be picked.

**Kind**: global function  
**Returns**: <code>Array</code> - randomly picked items  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>size</td><td><code>Int</code></td><td><p>size of output array (default = 1)</p>
</td>
    </tr><tr>
    <td>items</td><td><code>Array</code></td><td><p>array to choose from (optional, default=[0, 1])</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Rand.pick(5, [0, 1, 2, 3, 5, 8, 13]);
//=> [ 2, 5, 8, 1, 3 ] 

// Array can have other datatypes
Rand.pick(5, ['c', 'e', ['g', 'd']]);
//=> [ 'e', [ 'g', 'd' ], 'c', [ 'g', 'd' ], 'e' ] 
```

* * *

<a name="expand"></a>

## expand(array, size) ⇒ <code>Array.&lt;Number&gt;</code>
Expand an array based on the pattern within an array. The pattern is derived 
from the rate of change between values by calculating the difference (delta) 
between every consecutive value. The newly generated values are selected 
randomly from the list of possible changes, but in such a way that every 
change occurs once in the sequence of total changes before reshuffling 
and selecting the next one (see [pick](#pick) for explanation). The 
resulting output starts with the input array followed by the expansion.

Alias: `extrapolate()`

**Kind**: global function  
**Returns**: <code>Array.&lt;Number&gt;</code> - expanded array  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>array</td><td><code>Array.&lt;Number&gt;</code></td><td><p>array of numbers to expand</p>
</td>
    </tr><tr>
    <td>size</td><td><code>Int</code></td><td><p>size of output array (including input size)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js 
Rand.seed(3141);
Rand.expand([0, 9, 7, 3, 5, 0, -1], 30);

//=>  9.00 ┤╭╮      ╭╮                    
//    6.80 ┤│╰╮     ││                    
//    4.60 ┤│ │╭╮   ││                    
//    2.40 ┤│ ╰╯│   │╰─╮             ╭─╮  
//    0.20 ┼╯   ╰─╮╭╯  │             │ │╭ 
//   -2.00 ┤      ╰╯   ╰╮   ╭─╮      │ ╰╯ 
//   -4.20 ┼            │   │ │    ╭╮│    
//   -6.40 ┤            ╰╮  │ │    │╰╯    
//   -8.60 ┤             │╭╮│ ╰─╮  │      
//  -10.80 ┤             ╰╯╰╯   │╭╮│      
//  -13.00 ┤                    ╰╯╰╯       

Rand.seed(6181);
Rand.expand([0, 9, 7, 3, 5, 0, -1], 30);

//=>  9.00 ┤╭╮                            
//    6.80 ┤│╰╮                           
//    4.60 ┤│ │╭╮                         
//    2.40 ┤│ ╰╯│        ╭╮╭╮             
//    0.20 ┼╯   ╰─╮╭╮    │╰╯╰╮        ╭── 
//   -2.00 ┤      ╰╯│  ╭╮│   ╰╮       │   
//   -4.20 ┼        ╰╮ │││    ╰╮   ╭╮ │   
//   -6.40 ┤         │ │╰╯     │╭╮ ││ │   
//   -8.60 ┤         ╰╮│       ╰╯╰╮│╰╮│   
//  -10.80 ┤          ╰╯          ││ ╰╯   
//  -13.00 ┤                      ╰╯      
```

* * *


***

&copy; 2020-2026 Timo Hoogland (@tmhglnd), www.timohoogland.com, MIT License