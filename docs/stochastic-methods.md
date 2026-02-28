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

## Functions

* [seed(seed)](#seed) ⇒ <code>Number</code> \| <code>String</code>
* [getSeed()](#getSeed) ⇒ <code>Number</code> \| <code>String</code>
* [randomF(size, [min], [max])](#randomF) ⇒ <code>Array.&lt;Number&gt;</code>
* [random(size, [min], [max])](#random) ⇒ <code>Array.&lt;Number&gt;</code>
* [drunkF(size, [step], [min], [max], [start], [fold])](#drunkF) ⇒ <code>Array.&lt;Number&gt;</code>
* [drunk(size, [step], [min], [max], [start], [fold])](#drunk) ⇒ <code>Array.&lt;Number&gt;</code>
* [coin(size)](#coin) ⇒ <code>Array.&lt;Number&gt;</code>
* [dice(size, sides)](#dice) ⇒ <code>Array.&lt;Number&gt;</code>

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


***

&copy; 2020-2026 Timo Hoogland (@tmhglnd), www.timohoogland.com, MIT License