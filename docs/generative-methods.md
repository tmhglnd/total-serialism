# Generative

Basic functions that generate arrays consisting of number sequences. For instance functions that generate an ascending array of numbers evenly spread between a low and high value. Most functions follow the pattern: `function(<array-output-length>, <other-arguments>)`

## Include

To use all the function in the Generative namespace:

```js
const Gen = require('total-serialism').Generative;

Gen.spread();
Gen.fill();
```

To select specific functions from the Generative namespace:

```js
const { spread, fill } = require('total-serialism').Generative;

spread();
fill();
```

## Functions

* [count(count, [to])](#count) ⇒ <code>Array.&lt;Number&gt;</code>
* [spreadF(length, [low], [high])](#spreadF) ⇒ <code>Array.&lt;Number&gt;</code>
* [spread(length, [low], [high])](#spread) ⇒ <code>Array.&lt;Number&gt;</code>
* [spreadExpF(length, [low], [high], [exponent])](#spreadExpF) ⇒ <code>Array.&lt;Number&gt;</code>
* [spreadExp(length, [low], [high], [exponent])](#spreadExp) ⇒ <code>Array.&lt;Number&gt;</code>
* [spreadIncF(length, [low], [high])](#spreadIncF) ⇒ <code>Array.&lt;Number&gt;</code>
* [spreadInc(length, [low], [high])](#spreadInc) ⇒ <code>Array.&lt;Number&gt;</code>
* [spreadIncExpF(length, [low], [high], [exponent])](#spreadIncExpF) ⇒ <code>Array.&lt;Number&gt;</code>
* [spreadIncExp(length, [low], [high], [exponent])](#spreadIncExp) ⇒ <code>Array.&lt;Number&gt;</code>
* [fill(value, amount, [...repeat], array)](#fill) ⇒ <code>Array.&lt;Number&gt;</code>
* [sineF(length, [periods], [low], [high], [phase])](#sineF) ⇒ <code>Array.&lt;Number&gt;</code>
* [sine(length, [periods], [low], [high], [phase])](#sine) ⇒ <code>Array.&lt;Number&gt;</code>
* [cosineF(length, [periods], [low], [high], [phase])](#cosineF) ⇒ <code>Array.&lt;Number&gt;</code>
* [cosine(length, [periods], [low], [high], [phase])](#cosine) ⇒ <code>Array.&lt;Number&gt;</code>
* [sawF(length, [periods], [low], [high], [phase])](#sawF) ⇒ <code>Array.&lt;Number&gt;</code>
* [saw(length, [periods], [low], [high], [phase])](#saw) ⇒ <code>Array.&lt;Number&gt;</code>
* [squareF(length, [periods], [low], [high], [pulse])](#squareF) ⇒ <code>Array.&lt;Number&gt;</code>
* [square(length, [periods], [low], [high], [pulse])](#square) ⇒ <code>Array.&lt;Number&gt;</code>
* [binary(array)](#binary) ⇒ <code>Array.&lt;Number&gt;</code>
* [spacing(array)](#spacing) ⇒ <code>Array.&lt;Number&gt;</code>

<a name="count"></a>

## count(count, [to]) ⇒ <code>Array.&lt;Number&gt;</code>
The counter function generates an array of ascending or descending 
integers, counted from a starting value up to (and including) an ending 
value. When one argument is provided this value acts as the ending value 
and the default starting value is 0. If two values are provided the first 
value is the starting value and the second value the end.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>count</td><td><code>IntP</code></td><td><p>(or count from, default = 12)</p>
</td>
    </tr><tr>
    <td>[to]</td><td><code>Int</code></td><td><p>(optional, default = undefined)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// count to 8 from 0
Gen.counter(8);
//=> [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ]

// count to 10 from 4
Gen.counter(4, 10);
//=> [ 4, 5, 6, 7, 8, 9, 10 ]

// count down from 7 to 2
Gen.counter(7, 2);
//=> [ 7, 6, 5, 4, 3, 2 ]

// count down from 5 to -4
Gen.counter(5, -4);
//=> [ 5, 4, 3, 2, 1, 0, -1, -2, -3, -4 ]
```

* * *

<a name="spreadF"></a>

## spreadF(length, [low], [high]) ⇒ <code>Array.&lt;Number&gt;</code>
The spreadFloat function is similar to the [count](#count) function, but you 
can decide on the length of the array output, resulting in some numbers 
being skipped or duplicated depending if the output size should be smaller 
or larger than the start and ending points. The generated array has n-length 
of evenly spaced values between a starting number up until (but excluding) 
the 3th argument. Flipping the low and high range will result in descending 
values.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>length</td><td><code>Int</code></td><td><p>of output array</p>
</td>
    </tr><tr>
    <td>[low]</td><td><code>Number</code></td><td><p>value (optional, default = 0)</p>
</td>
    </tr><tr>
    <td>[high]</td><td><code>Number</code></td><td><p>value (optional, default = length)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// generate an array of 5 floats between range 0-1
Gen.spreadFloat(5); 
//=> [ 0, 0.2, 0.4, 0.6, 0.8 ]

Gen.spreadF(5);
```

* * *

<a name="spread"></a>

## spread(length, [low], [high]) ⇒ <code>Array.&lt;Number&gt;</code>
Similar to the [spreadF](#spreadF) function, but the output 
is only with whole numbers (integers).

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>length</td><td><code>Int</code></td><td><p>of output array</p>
</td>
    </tr><tr>
    <td>[low]</td><td><code>Int</code></td><td><p>value (optional, default = 0)</p>
</td>
    </tr><tr>
    <td>[high]</td><td><code>Int</code></td><td><p>value (optional, default = length)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// generate an array of 5 ints between range 0-5
Gen.spread(5);
//=> [ 0, 1, 2, 3, 4 ] 

// change the range with a second argument to 0-12
Gen.spread(5, 12);
//=> [ 0, 2, 4, 7, 9 ] 

// add a low/high range pair with 3-12
Gen.spread(5, 3, 12);
//=> [ 3, 4, 6, 8, 10 ] 

// reverse the range for descending output with 12-3
Gen.spread(5, 12, 3);
//=> [ 10, 8, 6, 4, 3 ] 
```

* * *

<a name="spreadExpF"></a>

## spreadExpF(length, [low], [high], [exponent]) ⇒ <code>Array.&lt;Number&gt;</code>
Similar to the [spread](#spread) and [spreadF](#spreadF) functions, but with 
an optional exponent as 4th argument to apply a curve.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>length</td><td><code>Int</code></td><td><p>of output array</p>
</td>
    </tr><tr>
    <td>[low]</td><td><code>Number</code></td><td><p>value (optional, default = 0)</p>
</td>
    </tr><tr>
    <td>[high]</td><td><code>Number</code></td><td><p>value (exclusive, optional, default = length)</p>
</td>
    </tr><tr>
    <td>[exponent]</td><td><code>Number</code></td><td><p>(optional, default = 1)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Gen.spreadExpFloat();
Gen.spreadExpF();
```

* * *

<a name="spreadExp"></a>

## spreadExp(length, [low], [high], [exponent]) ⇒ <code>Array.&lt;Number&gt;</code>
Similar to [spread](#spread) and [spreadF](#spreadF) but with an optional 
exponent as 4th argument and only outputs whole numbers.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>length</td><td><code>Int</code></td><td><p>of output array</p>
</td>
    </tr><tr>
    <td>[low]</td><td><code>Int</code></td><td><p>value (optional, default = 0)</p>
</td>
    </tr><tr>
    <td>[high]</td><td><code>Int</code></td><td><p>value (exclusive, optional, default = length)</p>
</td>
    </tr><tr>
    <td>[exponent]</td><td><code>Number</code></td><td><p>(optional, default = 1)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Gen.spreadExp(10, 0, 10, 2);
//=> [ 0, 0, 0, 0, 1, 2, 3, 4, 6, 8 ] 
```

* * *

<a name="spreadIncF"></a>

## spreadIncF(length, [low], [high]) ⇒ <code>Array.&lt;Number&gt;</code>
The spreadIncF function is similar to the [spreadF](#spreadF) and [spreadExpF](#spreadExpF) function. The generated array has n-length of evenly spaced 
values between a starting number up until (and including) the 3th argument. 
Flipping the low and high range will result descending values.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>length</td><td><code>Int</code></td><td><p>of output array</p>
</td>
    </tr><tr>
    <td>[low]</td><td><code>Number</code></td><td><p>value (optional)</p>
</td>
    </tr><tr>
    <td>[high]</td><td><code>Number</code></td><td><p>value (inclusive, optional)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// generate an array of 5 floats (inclusive)
Gen.spreadInclusiveFloat(5);
//=> [ 0, 0.25, 0.5, 0.75, 1 ] 

Gen.spreadIncF(5);
```

* * *

<a name="spreadInc"></a>

## spreadInc(length, [low], [high]) ⇒ <code>Array.&lt;Number&gt;</code>
Similar to the [spreadIncF](#spreadIncF) function, but the output 
is only with whole numbers (integers).

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>length</td><td><code>Int</code></td><td><p>of output array</p>
</td>
    </tr><tr>
    <td>[low]</td><td><code>Number</code></td><td><p>value (optional)</p>
</td>
    </tr><tr>
    <td>[high]</td><td><code>Number</code></td><td><p>value (inclusive, optional)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// generate an array of 5 ints between range 0-5 (5 inclusive)
Gen.spreadInclusive(5);
//=> [ 0, 1, 2, 3, 5 ]

// change the range with a second argument to 0-12
Gen.spreadInclusive(5, 12);
//=> [ 0, 3, 6, 9, 12 ] 

// add a low/high range pair with 3-12
Gen.spreadInclusive(5, 3, 12);
//=> [ 3, 5, 7, 9, 12 ] 

// reverse the range for descending output with 12-3
Gen.spreadInclusive(5, 12, 3);
//=> [ 12, 9, 7, 5, 3 ] 
```

* * *

<a name="spreadIncExpF"></a>

## spreadIncExpF(length, [low], [high], [exponent]) ⇒ <code>Array.&lt;Number&gt;</code>
Similar to the [spreadInc](#spreadInc) and [spreadIncF](#spreadIncF) functions, but with 
an optional exponent as 4th argument to apply a curve.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>length</td><td><code>Int</code></td><td><p>of output array</p>
</td>
    </tr><tr>
    <td>[low]</td><td><code>Number</code></td><td><p>value (optional, default = 0)</p>
</td>
    </tr><tr>
    <td>[high]</td><td><code>Number</code></td><td><p>value (exclusive, optional, default = length)</p>
</td>
    </tr><tr>
    <td>[exponent]</td><td><code>Number</code></td><td><p>(optional, default = 1)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Gen.spreadInclusiveExpFloat();
Gen.spreadIncExpF();
```

* * *

<a name="spreadIncExp"></a>

## spreadIncExp(length, [low], [high], [exponent]) ⇒ <code>Array.&lt;Number&gt;</code>
Similar to the [spreadIncF](#spreadIncF) and [spreadIncExpF](#spreadIncExpF)
functions, but with an optional exponent as 4th argument and only outputs 
whole numbers.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>length</td><td><code>Int</code></td><td><p>of output array</p>
</td>
    </tr><tr>
    <td>[low]</td><td><code>Number</code></td><td><p>value (optional, default = 0)</p>
</td>
    </tr><tr>
    <td>[high]</td><td><code>Number</code></td><td><p>value (exclusive, optional, default = length)</p>
</td>
    </tr><tr>
    <td>[exponent]</td><td><code>Number</code></td><td><p>(optional, default = 1)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Gen.spreadInclusiveExp(10, 0, 10, 2);
//=> [ 0, 0, 0, 1, 1, 3, 4, 6, 7, 10 ] 

Gen.spreadIncExp(10, 0, 10, 2);
```

* * *

<a name="fill"></a>

## fill(value, amount, [...repeat], array) ⇒ <code>Array.&lt;Number&gt;</code>
Fill an array with values. Arguments are in pairs. Every pair consists of 
`<value, amount>` The value is repeated n-amount of times in the array. Also 
accepts an array as a single argument containing the pairs.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>value</td><td><code>Anything</code></td><td><p>to duplicate</p>
</td>
    </tr><tr>
    <td>amount</td><td><code>Int</code></td><td><p>of duplicates</p>
</td>
    </tr><tr>
    <td>[...repeat]</td><td><code>*</code></td><td><p>n-times</p>
</td>
    </tr><tr>
    <td>array</td><td><code>Array</code></td><td><p>containing value/amount pairs</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// fill an array with duplicates of a value
Gen.fill(10, 2, 15, 3, 20, 4); 
//=> [ 10, 10, 15, 15, 15, 20, 20, 20, 20 ]
```
**Example**  
```js
Gen.fill([10, 2, 15, 3, 20, 4]);
//=> [ 10, 10, 15, 15, 15, 20, 20, 20, 20 ]
```

* * *

<a name="sineF"></a>

## sineF(length, [periods], [low], [high], [phase]) ⇒ <code>Array.&lt;Number&gt;</code>
Generate an array with n-periods of a sine function as floats.
Optional last arguments set lo and hi range and phase offset
Only setting first range argument sets the low-range to 0. 
The wave can be inverted by swapping the arguments.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>length</td><td><code>Int</code></td><td><p>of output array</p>
</td>
    </tr><tr>
    <td>[periods]</td><td><code>Number</code> | <code>Array.&lt;Number&gt;</code></td><td><p>of sine-wave</p>
</td>
    </tr><tr>
    <td>[low]</td><td><code>Number</code></td><td><p>range of values (optional, default = -1)</p>
</td>
    </tr><tr>
    <td>[high]</td><td><code>Number</code></td><td><p>range of values (optional, default = 1)</p>
</td>
    </tr><tr>
    <td>[phase]</td><td><code>Number</code></td><td><p>offset (optional, default = 0)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// generate 16 floats with 1 period of a sine function
Gen.sineFloat(16);
//=> [ 0.00, 0.38, 0.71, 0.92, 1.00, 0.92, 0.71, 0.38, 
// 0.00, -0.38, -0.71, -0.92, -1.00, -0.92, -0.71, -0.38 ]

//  1.00 ┤   ╭╮           
//  0.60 ┤ ╭─╯╰─╮         
//  0.20 ┼╭╯    ╰╮        
// -0.20 ┼╯      ╰╮       
// -0.60 ┤        ╰╮    ╭ 
// -1.00 ┤         ╰────╯  

Gen.sineF();
```
**Example**  
```js
// frequency modulation of the period argument with another array
Gen.sineFloat(40, Gen.sineFloat(40, 4, 1, 5));
//=>  1.00 ┤ ╭╮  ╭──╮           ╭╮   ╭╮  ╭─╮        
//    0.80 ┤ │╰╮╭╯  │ ╭╮  ╭╮    ││   ││ ╭╯ │        
//    0.60 ┤╭╯ ││   ╰╮││  ││    ││   ││ │  │        
//    0.40 ┤│  ╰╯    │││  ││    ││   ││ │  │        
//    0.20 ┤│        ││╰╮╭╯│╭╮  ││   ││ │  │╭╮   ╭╮ 
//    0.00 ┼╯        ││ ││ ││╰╮╭╯│ ╭╮││ │  │││  ╭╯│ 
//   -0.20 ┤         ││ ││ ││ ││ │ ││││ │  │││  │ │ 
//   -0.40 ┤         ││ ││ ││ ││ │ ││││ │  ╰╯╰╮ │ │ 
//   -0.60 ┤         ││ ╰╯ ││ ││ │ ││││ │     │ │ │ 
//   -0.80 ┤         ││    ││ ╰╯ │ │╰╯│ │     ╰─╯ │ 
//   -1.00 ┤         ╰╯    ╰╯    ╰─╯  ╰─╯         ╰ 
 
```

* * *

<a name="sine"></a>

## sine(length, [periods], [low], [high], [phase]) ⇒ <code>Array.&lt;Number&gt;</code>
Similar to [sineF](#sineF) but only outputs whole numbers.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>length</td><td><code>Int</code></td><td><p>of output array</p>
</td>
    </tr><tr>
    <td>[periods]</td><td><code>Number</code> | <code>Array.&lt;Number&gt;</code></td><td><p>of wave (optional, default = 1)</p>
</td>
    </tr><tr>
    <td>[low]</td><td><code>Number</code></td><td><p>range of values (optional, default = 0)</p>
</td>
    </tr><tr>
    <td>[high]</td><td><code>Number</code></td><td><p>range of values (optional, default = 12)</p>
</td>
    </tr><tr>
    <td>[phase]</td><td><code>Number</code></td><td><p>offset (optional, default = 0)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// generate 10 ints with 4 periods of a sine function
Gen.sine(11, 4, 0, 7);
//=> [ 3, 6, 0, 5, 4, 0, 6, 2, 1, 6, 0 ]
//        6.00 ┼╭╮   ╭╮ ╭╮ 
//        5.00 ┤││╭╮ ││ ││ 
//        4.00 ┤│││╰╮││ ││ 
//        3.00 ┼╯││ │││ ││ 
//        2.00 ┤ ││ ││╰╮││ 
//        1.00 ┤ ││ ││ ╰╯│ 
//        0.00 ┤ ╰╯ ╰╯   ╰  
```

* * *

<a name="cosineF"></a>

## cosineF(length, [periods], [low], [high], [phase]) ⇒ <code>Array.&lt;Number&gt;</code>
Similar to [sineF](#sineF) and [sine](#sine) but outputs a cosine wave

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>length</td><td><code>Int</code></td><td><p>of output array</p>
</td>
    </tr><tr>
    <td>[periods]</td><td><code>Number</code> | <code>Array.&lt;Number&gt;</code></td><td><p>of wave</p>
</td>
    </tr><tr>
    <td>[low]</td><td><code>Number</code></td><td><p>range of values (optional, default = -1)</p>
</td>
    </tr><tr>
    <td>[high]</td><td><code>Number</code></td><td><p>range of values (optional, default = 1)</p>
</td>
    </tr><tr>
    <td>[phase]</td><td><code>Number</code></td><td><p>offset (optional, default = 0)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// generate 16 floats with 1 period of a cosine function
Gen.cosineFloat(8);
//=> [ 1.00, 0.92, 0.71, 0.38, 0.00, -0.38, -0.71, -0.92, -1.00, 
//     -0.92, -0.71, -0.38, -0.00, 0.38, 0.71, 0.92 ]

//  1.00 ┼╮               
//  0.60 ┤╰─╮          ╭─ 
//  0.20 ┼  ╰╮        ╭╯  
// -0.20 ┤   ╰╮      ╭╯   
// -0.60 ┤    ╰╮    ╭╯    
// -1.00 ┤     ╰────╯      
```

* * *

<a name="cosine"></a>

## cosine(length, [periods], [low], [high], [phase]) ⇒ <code>Array.&lt;Number&gt;</code>
Similar to [cosineF](#cosineF) but outputs only whole numbers.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>length</td><td><code>Int</code></td><td><p>of output array</p>
</td>
    </tr><tr>
    <td>[periods]</td><td><code>Number</code> | <code>Array.&lt;Number&gt;</code></td><td><p>of wave</p>
</td>
    </tr><tr>
    <td>[low]</td><td><code>Number</code></td><td><p>range of values (optional, default = 0)</p>
</td>
    </tr><tr>
    <td>[high]</td><td><code>Number</code></td><td><p>range of values (optional, default = 12)</p>
</td>
    </tr><tr>
    <td>[phase]</td><td><code>Number</code></td><td><p>offset (optional, default = 0)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// generate 10 ints with 4 periods of a cosine function
Gen.cosine(11, 4, 0, 7); 
```

* * *

<a name="sawF"></a>

## sawF(length, [periods], [low], [high], [phase]) ⇒ <code>Array.&lt;Number&gt;</code>
Generate an array with n-periods of a saw/phasor function. Optional last 
arguments set lo and hi range and phase offset. Only setting first range 
argument sets the low-range to 0

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>length</td><td><code>Int</code> | <code>Array.&lt;Number&gt;</code></td><td><p>of output array (uses length of Array if input)</p>
</td>
    </tr><tr>
    <td>[periods]</td><td><code>Number</code> | <code>Array.&lt;Number&gt;</code></td><td><p>of the wave (optional, default = 1)</p>
</td>
    </tr><tr>
    <td>[low]</td><td><code>Number</code></td><td><p>range of values (optional, default = -1)</p>
</td>
    </tr><tr>
    <td>[high]</td><td><code>Number</code></td><td><p>range of values (optional, default = 1)</p>
</td>
    </tr><tr>
    <td>[phase]</td><td><code>Number</code></td><td><p>offset (optional, default = 0)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Gen.sawFloat(25, 2.5);
//=>  0.80 ┤       ╭─╮       ╭─╮     
//    0.44 ┤     ╭─╯ │     ╭─╯ │     
//    0.08 ┤    ╭╯   │    ╭╯   │     
//   -0.28 ┼  ╭─╯    │  ╭─╯    │  ╭─ 
//   -0.64 ┤╭─╯      │╭─╯      │╭─╯  
//   -1.00 ┼╯        ╰╯        ╰╯    
```

* * *

<a name="saw"></a>

## saw(length, [periods], [low], [high], [phase]) ⇒ <code>Array.&lt;Number&gt;</code>
Similar to [sawF](#sawF) but only outputs whole numbers

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>length</td><td><code>Int</code></td><td><p>of output array</p>
</td>
    </tr><tr>
    <td>[periods]</td><td><code>Number</code> | <code>Array.&lt;Number&gt;</code></td><td><p>of the wave (optional, default = 1)</p>
</td>
    </tr><tr>
    <td>[low]</td><td><code>Number</code></td><td><p>range of values (optional, default = -1)</p>
</td>
    </tr><tr>
    <td>[high]</td><td><code>Number</code></td><td><p>range of values (optional, default = 1)</p>
</td>
    </tr><tr>
    <td>[phase]</td><td><code>Number</code></td><td><p>offset (optional, default = 0)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Gen.saw(16, 8.5);
//=> 11.00 ┼              ╭ 
//   10.00 ┤          ╭╮╭╮│ 
//    9.00 ┤        ╭╮│││││ 
//    8.00 ┤      ╭╮│││││││ 
//    7.00 ┤  ╭╮╭╮│││││││││ 
//    6.00 ┤╭╮│││││││││││││ 
//    5.00 ┤│││││││││││││╰╯ 
//    4.00 ┤│││││││││││╰╯   
//    3.00 ┤│││││││╰╯╰╯     
//    2.00 ┤│││││╰╯         
//    1.00 ┤│││╰╯           
//    0.00 ┼╯╰╯ 
```
**Example**  
```js
// Modulation on frequency
Gen.saw(34, Gen.sinF(30, 2, 0, 100), 0, 12);
//=> 11.00 ┼         ╭╮             ╭╮╭╮      
//   10.00 ┤         ││╭─╮     ╭╮   ││││      
//    9.00 ┤         │││ │     ││ ╭╮││││      
//    8.00 ┤   ╭─╮   │││ │    ╭╯│ ││││││    ╭ 
//    7.00 ┤  ╭╯ │   │││ │   ╭╯ │ ││││││    │ 
//    6.00 ┤  │  │   │││ │  ╭╯  │ │╰╯││╰╮   │ 
//    5.00 ┤  │  │╭╮╭╯││ │  │   │ │  ││ │   │ 
//    4.00 ┤  │  ││││ ││ │  │   │ │  ││ │   │ 
//    3.00 ┤  │  ││╰╯ ││ │  │   │ │  ││ ╰╮  │ 
//    2.00 ┤  │  ││   ││ ╰╮ │   │ │  ╰╯  │  │ 
//    1.00 ┤ ╭╯  ││   ╰╯  │╭╯   │ │      ╰─╮│ 
//    0.00 ┼─╯   ╰╯       ╰╯    ╰─╯        ╰╯ 
 
```

* * *

<a name="squareF"></a>

## squareF(length, [periods], [low], [high], [pulse]) ⇒ <code>Array.&lt;Number&gt;</code>
Generate an array with n-periods of a square/pulse wave function. Optional 
last arguments set lo and hi range and pulse width. Only setting first range 
argument sets the low-range to 0.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>length</td><td><code>Number</code></td><td><p>of output array</p>
</td>
    </tr><tr>
    <td>[periods]</td><td><code>Number</code> | <code>Array.&lt;Number&gt;</code></td><td><p>of the wave (optional, default = 1)</p>
</td>
    </tr><tr>
    <td>[low]</td><td><code>Number</code></td><td><p>range of values (optional, default = 0)</p>
</td>
    </tr><tr>
    <td>[high]</td><td><code>Number</code></td><td><p>range of values (optional, default = 1)</p>
</td>
    </tr><tr>
    <td>[pulse]</td><td><code>Number</code></td><td><p>width (optional, default = 0.5)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// Frequency Modulation with Gen.sin
Gen.squareFloat(30, Gen.sinF(30, 2, 1, 5));
//=>  1.00 ┼───╮     ╭──╮╭──╮ ╭─╮  ╭─╮ ╭─ 
//    0.80 ┤   │     │  ││  │ │ │  │ │ │  
//    0.60 ┤   │     │  ││  │ │ │  │ │ │  
//    0.40 ┤   │     │  ││  │ │ │  │ │ │  
//    0.20 ┤   │     │  ││  │ │ │  │ │ │  
//    0.00 ┤   ╰─────╯  ╰╯  ╰─╯ ╰──╯ ╰─╯ 
Gen.squareF()
 
```

* * *

<a name="square"></a>

## square(length, [periods], [low], [high], [pulse]) ⇒ <code>Array.&lt;Number&gt;</code>
Similar to [squareF](#squareF) but only outputs whole numbers

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>length</td><td><code>Number</code></td><td><p>of output array</p>
</td>
    </tr><tr>
    <td>[periods]</td><td><code>Number</code> | <code>Array.&lt;Number&gt;</code></td><td><p>of the wave (optional, default = 1)</p>
</td>
    </tr><tr>
    <td>[low]</td><td><code>Number</code></td><td><p>range of values (optional, default = 0)</p>
</td>
    </tr><tr>
    <td>[high]</td><td><code>Number</code></td><td><p>range of values (optional, default = 1)</p>
</td>
    </tr><tr>
    <td>[pulse]</td><td><code>Number</code></td><td><p>width (optional, default = 0.5)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Gen.square(30, 3, -2, 5, 0.8);
//=>  5.00 ┼───────╮ ╭────────╮╭────────╮ 
//    1.50 ┼       │ │        ││        │ 
//   -2.00 ┤       ╰─╯        ╰╯        ╰  

Gen.square(30, 4, 0, 1, 0.2);
//=>  1.00 ┼─╮     ╭─╮    ╭─╮     ╭╮           
//    0.00 ┤ ╰─────╯ ╰────╯ ╰─────╯╰─────  
```

* * *

<a name="binary"></a>

## binary(array) ⇒ <code>Array.&lt;Number&gt;</code>
Generate a binary rhythm from a positive integer number or an array of 
numbers. Returns the binary value as an array of separated 1's and 0's 
useful for representing rhythmical patterns.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>array</td><td><code>Int</code> | <code>Array.&lt;Number&gt;</code></td><td><p>numbers to convert to binary representation</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// generate a binary array from a single number
Gen.binaryBeat(358);
//=> [1, 0, 0, 0, 0, 1, 1, 0, 1, 0]

// use an array of numbers and concatenate binary representations
Gen.binaryBeat([4, 3, 5]);
//=> [1, 0, 0, 1, 1, 1, 0, 1]

// negative values are clipped to 0
Gen.binaryBeat([-4, 4]);
//=> [0, 1, 0, 0]
```

* * *

<a name="spacing"></a>

## spacing(array) ⇒ <code>Array.&lt;Number&gt;</code>
Generate an array of 1's and 0's based on a positive integer number or 
array. Every number in the array will be replaced by a 1 with a specified 
amount of 0's appended to it. Eg. a 2 => 1 0, a 4 => 1 0 0 0, etc. This 
technique is useful to generate a rhythm based on spacing length between 
onsets

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>array</td><td><code>Int</code> | <code>Array.&lt;Number&gt;</code></td><td><p>numbers to convert to spaced rhythm</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// generate a rhythm based on numbered spacings
Gen.spacingBeat(2, 3, 2)
//=> [1, 0, 1, 0, 0, 1, 0]

// also works with an array as input
Gen.spacingBeat([4, 2, 0])
//=> [1, 0, 0, 0, 1, 0, 0]
```

* * *


***

&copy; Timo Hoogland (@tmhglnd), www.timohoogland.com, MIT License