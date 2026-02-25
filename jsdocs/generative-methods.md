## Functions

<dl>
<dt><a href="#count">count(count, to)</a> ⇒ <code>Array.&lt;Number&gt;</code></dt>
<dd><p>The counter function generates an array of ascending or descending 
integers, counted from a starting value up to (and including) an ending 
value. When one argument is provided this value acts as the ending value 
and the default starting value is 0. If two values are provided the first 
value is the starting value and the second value the end.</p>
</dd>
<dt><a href="#spreadF">spreadF(length, low, high)</a> ⇒ <code>Array.&lt;Number&gt;</code></dt>
<dd><p>The spreadFloat function is similar to the <a href="#count">count</a> function, but you 
can decide on the length of the array output, resulting in some numbers 
being skipped or duplicated depending if the output size should be smaller 
or larger than the start and ending points. The generated array has n-length 
of evenly spaced values between a starting number up until (but excluding) 
the 3th argument. Flipping the low and high range will result in descending 
values.</p>
</dd>
<dt><a href="#spread">spread(length, low, high)</a> ⇒ <code>Array.&lt;Number&gt;</code></dt>
<dd><p>Similar to the <a href="#spreadF">spreadF</a> function, but the output 
is only with whole numbers (integers).</p>
</dd>
<dt><a href="#spreadExpF">spreadExpF(length, low, high, exponent)</a> ⇒ <code>Array.&lt;Number&gt;</code></dt>
<dd><p>Similar to the <a href="#spread">spread</a> and <a href="#spreadF">spreadF</a> functions, but with 
an optional exponent as 4th argument to apply a curve.</p>
</dd>
<dt><a href="#spreadExp">spreadExp(length, low, high, exponent)</a> ⇒ <code>Array.&lt;Number&gt;</code></dt>
<dd><p>Similar to <a href="#spread">spread</a> and <a href="#spreadF">spreadF</a> but with an optional 
exponent as 4th argument and only outputs whole numbers.</p>
</dd>
<dt><a href="#spreadIncF">spreadIncF(length, low, high)</a> ⇒ <code>Array.&lt;Number&gt;</code></dt>
<dd><p>The spreadIncF function is similar to the <a href="#spreadF">spreadF</a> and <a href="#spreadExpF">spreadExpF</a> function. The generated array has n-length of evenly spaced 
values between a starting number up until (and including) the 3th argument. 
Flipping the low and high range will result descending values.</p>
</dd>
<dt><a href="#spreadInc">spreadInc(length, low, high)</a> ⇒ <code>Array.&lt;Number&gt;</code></dt>
<dd><p>Similar to the <a href="#spreadIncF">spreadIncF</a> function, but the output 
is only with whole numbers (integers).</p>
</dd>
<dt><a href="#spreadIncExpF">spreadIncExpF(length, low, high, exponent)</a> ⇒ <code>Array.&lt;Number&gt;</code></dt>
<dd><p>Similar to the <a href="#spreadInc">spreadInc</a> and <a href="#spreadIncF">spreadIncF</a> functions, but with 
an optional exponent as 4th argument to apply a curve.</p>
</dd>
<dt><a href="#spreadIncExp">spreadIncExp(length, low, high, exponent)</a> ⇒ <code>Array.&lt;Number&gt;</code></dt>
<dd><p>Similar to the <a href="#spreadIncF">spreadIncF</a> and <a href="#spreadIncExpF">spreadIncExpF</a>
functions, but with an optional exponent as 4th argument and only outputs 
whole numbers.</p>
</dd>
<dt><a href="#fill">fill(value, amount, repeat, array)</a> ⇒ <code>Array.&lt;Number&gt;</code></dt>
<dd><p>Fill an array with values. Arguments are in pairs. Every pair consists of 
<code>&lt;value, amount&gt;</code> The value is repeated n-amount of times in the array. Also 
accepts an array as a single argument containing the pairs.</p>
</dd>
<dt><a href="#sineF">sineF(length, periods, low, high, phase)</a> ⇒ <code>Array.&lt;Number&gt;</code></dt>
<dd><p>Generate an array with n-periods of a sine function as floats.
Optional last arguments set lo and hi range and phase offset
Only setting first range argument sets the low-range to 0. 
The wave can be inverted by swapping the arguments.</p>
</dd>
<dt><a href="#sine">sine(length, periods, low, high, phase)</a> ⇒ <code>Array.&lt;Number&gt;</code></dt>
<dd><p>Similar to <a href="#sineF">sineF</a> but only outputs whole numbers.</p>
</dd>
<dt><a href="#cosineF">cosineF(length, periods, low, high, phase)</a> ⇒ <code>Array.&lt;Number&gt;</code></dt>
<dd><p>Similar to <a href="#sineF">sineF</a> and <a href="#sine">sine</a> but outputs a cosine wave</p>
</dd>
<dt><a href="#cosine">cosine(length, periods, low, high, phase)</a> ⇒ <code>Array.&lt;Number&gt;</code></dt>
<dd><p>Similar to <a href="#cosineF">cosineF</a> but outputs only whole numbers.</p>
</dd>
<dt><a href="#sawF">sawF(length, periods, low, high, phase)</a> ⇒ <code>Array.&lt;Number&gt;</code></dt>
<dd><p>Generate an array with n-periods of a saw/phasor function. Optional last 
arguments set lo and hi range and phase offset. Only setting first range 
argument sets the low-range to 0</p>
</dd>
<dt><a href="#saw">saw(length, periods, low, high, phase)</a> ⇒ <code>Array.&lt;Number&gt;</code></dt>
<dd><p>Similar to <a href="#sawF">sawF</a> but only outputs whole numbers</p>
</dd>
<dt><a href="#squareF">squareF(length, periods, low, high, pulse)</a> ⇒ <code>Array.&lt;Number&gt;</code></dt>
<dd><p>Generate an array with n-periods of a square/pulse wave function. Optional 
last arguments set lo and hi range and pulse width. Only setting first range 
argument sets the low-range to 0.</p>
</dd>
<dt><a href="#square">square(length, periods, low, high, pulse)</a> ⇒ <code>Array.&lt;Number&gt;</code></dt>
<dd><p>Similar to <a href="#squareF">squareF</a> but only outputs whole numbers</p>
</dd>
<dt><a href="#binary">binary(array)</a> ⇒ <code>Array.&lt;Number&gt;</code></dt>
<dd><p>Generate a binary rhythm from a positive integer number or an array of 
numbers. Returns the binary value as an array of separated 1&#39;s and 0&#39;s 
useful for representing rhythmical patterns.</p>
</dd>
<dt><a href="#spacing">spacing(array)</a> ⇒ <code>Array.&lt;Number&gt;</code></dt>
<dd><p>Generate an array of 1&#39;s and 0&#39;s based on a positive integer number or 
array. Every number in the array will be replaced by a 1 with a specified 
amount of 0&#39;s appended to it. Eg. a 2 =&gt; 1 0, a 4 =&gt; 1 0 0 0, etc. This 
technique is useful to generate a rhythm based on spacing length between 
onsets</p>
</dd>
</dl>

<a name="count"></a>

## count(count, to) ⇒ <code>Array.&lt;Number&gt;</code>
The counter function generates an array of ascending or descending 
integers, counted from a starting value up to (and including) an ending 
value. When one argument is provided this value acts as the ending value 
and the default starting value is 0. If two values are provided the first 
value is the starting value and the second value the end.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| count | <code>IntP</code> | (or count from, default = 12) |
| to | <code>Int</code> | (optional, default = undefined) |

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
<a name="spreadF"></a>

## spreadF(length, low, high) ⇒ <code>Array.&lt;Number&gt;</code>
The spreadFloat function is similar to the [count](#count) function, but you 
can decide on the length of the array output, resulting in some numbers 
being skipped or duplicated depending if the output size should be smaller 
or larger than the start and ending points. The generated array has n-length 
of evenly spaced values between a starting number up until (but excluding) 
the 3th argument. Flipping the low and high range will result in descending 
values.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| length | <code>Int</code> | of output array |
| low | <code>Number</code> | value (optional, default = 0) |
| high | <code>Number</code> | value (optional, default = length) |

**Example**  
```js
// generate an array of 5 floats between range 0-1
Gen.spreadFloat(5); 
//=> [ 0, 0.2, 0.4, 0.6, 0.8 ]

Gen.spreadF(5);
```
<a name="spread"></a>

## spread(length, low, high) ⇒ <code>Array.&lt;Number&gt;</code>
Similar to the [spreadF](#spreadF) function, but the output 
is only with whole numbers (integers).

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| length | <code>Int</code> | of output array |
| low | <code>Int</code> | value (optional, default = 0) |
| high | <code>Int</code> | value (optional, default = length) |

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
<a name="spreadExpF"></a>

## spreadExpF(length, low, high, exponent) ⇒ <code>Array.&lt;Number&gt;</code>
Similar to the [spread](#spread) and [spreadF](#spreadF) functions, but with 
an optional exponent as 4th argument to apply a curve.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| length | <code>Int</code> | of output array |
| low | <code>Number</code> | value (optional, default = 0) |
| high | <code>Number</code> | value (exclusive, optional, default = length) |
| exponent | <code>Number</code> | (optional, default = 1) |

**Example**  
```js
Gen.spreadExpFloat();
Gen.spreadExpF();
```
<a name="spreadExp"></a>

## spreadExp(length, low, high, exponent) ⇒ <code>Array.&lt;Number&gt;</code>
Similar to [spread](#spread) and [spreadF](#spreadF) but with an optional 
exponent as 4th argument and only outputs whole numbers.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| length | <code>Int</code> | of output array |
| low | <code>Int</code> | value (optional, default = 0) |
| high | <code>Int</code> | value (exclusive, optional, default = length) |
| exponent | <code>Number</code> | (optional, default = 1) |

**Example**  
```js
Gen.spreadExp(10, 0, 10, 2);
//=> [ 0, 0, 0, 0, 1, 2, 3, 4, 6, 8 ] 
```
<a name="spreadIncF"></a>

## spreadIncF(length, low, high) ⇒ <code>Array.&lt;Number&gt;</code>
The spreadIncF function is similar to the [spreadF](#spreadF) and [spreadExpF](#spreadExpF) function. The generated array has n-length of evenly spaced 
values between a starting number up until (and including) the 3th argument. 
Flipping the low and high range will result descending values.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| length | <code>Int</code> | of output array |
| low | <code>Number</code> | value (optional) |
| high | <code>Number</code> | value (inclusive, optional) |

**Example**  
```js
// generate an array of 5 floats (inclusive)
Gen.spreadInclusiveFloat(5);
//=> [ 0, 0.25, 0.5, 0.75, 1 ] 

Gen.spreadIncF(5);
```
<a name="spreadInc"></a>

## spreadInc(length, low, high) ⇒ <code>Array.&lt;Number&gt;</code>
Similar to the [spreadIncF](#spreadIncF) function, but the output 
is only with whole numbers (integers).

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| length | <code>Int</code> | of output array |
| low | <code>Number</code> | value (optional) |
| high | <code>Number</code> | value (inclusive, optional) |

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
<a name="spreadIncExpF"></a>

## spreadIncExpF(length, low, high, exponent) ⇒ <code>Array.&lt;Number&gt;</code>
Similar to the [spreadInc](#spreadInc) and [spreadIncF](#spreadIncF) functions, but with 
an optional exponent as 4th argument to apply a curve.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| length | <code>Int</code> | of output array |
| low | <code>Number</code> | value (optional, default = 0) |
| high | <code>Number</code> | value (exclusive, optional, default = length) |
| exponent | <code>Number</code> | (optional, default = 1) |

**Example**  
```js
Gen.spreadInclusiveExpFloat();
Gen.spreadIncExpF();
```
<a name="spreadIncExp"></a>

## spreadIncExp(length, low, high, exponent) ⇒ <code>Array.&lt;Number&gt;</code>
Similar to the [spreadIncF](#spreadIncF) and [spreadIncExpF](#spreadIncExpF)
functions, but with an optional exponent as 4th argument and only outputs 
whole numbers.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| length | <code>Int</code> | of output array |
| low | <code>Number</code> | value (optional, default = 0) |
| high | <code>Number</code> | value (exclusive, optional, default = length) |
| exponent | <code>Number</code> | (optional, default = 1) |

**Example**  
```js
Gen.spreadInclusiveExp(10, 0, 10, 2);
//=> [ 0, 0, 0, 1, 1, 3, 4, 6, 7, 10 ] 

Gen.spreadIncExp(10, 0, 10, 2);
```
<a name="fill"></a>

## fill(value, amount, repeat, array) ⇒ <code>Array.&lt;Number&gt;</code>
Fill an array with values. Arguments are in pairs. Every pair consists of 
`<value, amount>` The value is repeated n-amount of times in the array. Also 
accepts an array as a single argument containing the pairs.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Anything</code> | to duplicate |
| amount | <code>Int</code> | of duplicates |
| repeat | <code>\*</code> | n-times |
| array | <code>Array</code> | containing value/amount pairs |

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
<a name="sineF"></a>

## sineF(length, periods, low, high, phase) ⇒ <code>Array.&lt;Number&gt;</code>
Generate an array with n-periods of a sine function as floats.
Optional last arguments set lo and hi range and phase offset
Only setting first range argument sets the low-range to 0. 
The wave can be inverted by swapping the arguments.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| length | <code>Int</code> | of output array |
| periods | <code>Number</code> \| <code>Array.&lt;Number&gt;</code> | of sine-wave |
| low | <code>Number</code> | range of values (optional, default = -1) |
| high | <code>Number</code> | range of values (optional, default = 1) |
| phase | <code>Number</code> | offset (optional, default = 0) |

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
<a name="sine"></a>

## sine(length, periods, low, high, phase) ⇒ <code>Array.&lt;Number&gt;</code>
Similar to [sineF](#sineF) but only outputs whole numbers.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| length | <code>Int</code> | of output array |
| periods | <code>Number</code> \| <code>Array.&lt;Number&gt;</code> | of wave (optional, default = 1) |
| low | <code>Number</code> | range of values (optional, default = 0) |
| high | <code>Number</code> | range of values (optional, default = 12) |
| phase | <code>Number</code> | offset (optional, default = 0) |

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
<a name="cosineF"></a>

## cosineF(length, periods, low, high, phase) ⇒ <code>Array.&lt;Number&gt;</code>
Similar to [sineF](#sineF) and [sine](#sine) but outputs a cosine wave

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| length | <code>Int</code> | of output array |
| periods | <code>Number</code> \| <code>Array.&lt;Number&gt;</code> | of wave |
| low | <code>Number</code> | range of values (optional, default = -1) |
| high | <code>Number</code> | range of values (optional, default = 1) |
| phase | <code>Number</code> | offset (optional, default = 0) |

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
<a name="cosine"></a>

## cosine(length, periods, low, high, phase) ⇒ <code>Array.&lt;Number&gt;</code>
Similar to [cosineF](#cosineF) but outputs only whole numbers.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| length | <code>Int</code> | of output array |
| periods | <code>Number</code> \| <code>Array.&lt;Number&gt;</code> | of wave |
| low | <code>Number</code> | range of values (optional, default = 0) |
| high | <code>Number</code> | range of values (optional, default = 12) |
| phase | <code>Number</code> | offset (optional, default = 0) |

**Example**  
```js
// generate 10 ints with 4 periods of a cosine function
Gen.cosine(11, 4, 0, 7); 
```
<a name="sawF"></a>

## sawF(length, periods, low, high, phase) ⇒ <code>Array.&lt;Number&gt;</code>
Generate an array with n-periods of a saw/phasor function. Optional last 
arguments set lo and hi range and phase offset. Only setting first range 
argument sets the low-range to 0

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| length | <code>Int</code> \| <code>Array.&lt;Number&gt;</code> | of output array (uses length of Array if input) |
| periods | <code>Number</code> \| <code>Array.&lt;Number&gt;</code> | of the wave (option, default = 1) |
| low | <code>Number</code> | range of values (optional, default = -1) |
| high | <code>Number</code> | range of values (optional, default = 1) |
| phase | <code>Number</code> | offset (optional, default = 0) |

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
<a name="saw"></a>

## saw(length, periods, low, high, phase) ⇒ <code>Array.&lt;Number&gt;</code>
Similar to [sawF](#sawF) but only outputs whole numbers

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| length | <code>Int</code> | of output array |
| periods | <code>Number</code> \| <code>Array.&lt;Number&gt;</code> | of the wave (option, default = 1) |
| low | <code>Number</code> | range of values (optional, default = -1) |
| high | <code>Number</code> | range of values (optional, default = 1) |
| phase | <code>Number</code> | offset (optional, default = 0) |

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
<a name="squareF"></a>

## squareF(length, periods, low, high, pulse) ⇒ <code>Array.&lt;Number&gt;</code>
Generate an array with n-periods of a square/pulse wave function. Optional 
last arguments set lo and hi range and pulse width. Only setting first range 
argument sets the low-range to 0.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| length | <code>Number</code> | of output array |
| periods | <code>Number</code> \| <code>Array.&lt;Number&gt;</code> | of the wave (option, default = 1) |
| low | <code>Number</code> | range of values (optional, default = 0) |
| high | <code>Number</code> | range of values (optional, default = 1) |
| pulse | <code>Number</code> | width (optional, default = 0.5) |

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
<a name="square"></a>

## square(length, periods, low, high, pulse) ⇒ <code>Array.&lt;Number&gt;</code>
Similar to [squareF](#squareF) but only outputs whole numbers

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| length | <code>Number</code> | of output array |
| periods | <code>Number</code> \| <code>Array.&lt;Number&gt;</code> | of the wave (option, default = 1) |
| low | <code>Number</code> | range of values (optional, default = 0) |
| high | <code>Number</code> | range of values (optional, default = 1) |
| pulse | <code>Number</code> | width (optional, default = 0.5) |

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
<a name="binary"></a>

## binary(array) ⇒ <code>Array.&lt;Number&gt;</code>
Generate a binary rhythm from a positive integer number or an array of 
numbers. Returns the binary value as an array of separated 1's and 0's 
useful for representing rhythmical patterns.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Int</code> \| <code>Array.&lt;Number&gt;</code> | numbers to convert to binary representation |

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
<a name="spacing"></a>

## spacing(array) ⇒ <code>Array.&lt;Number&gt;</code>
Generate an array of 1's and 0's based on a positive integer number or 
array. Every number in the array will be replaced by a 1 with a specified 
amount of 0's appended to it. Eg. a 2 => 1 0, a 4 => 1 0 0 0, etc. This 
technique is useful to generate a rhythm based on spacing length between 
onsets

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Int</code> \| <code>Array.&lt;Number&gt;</code> | numbers to convert to spaced rhythm |

**Example**  
```js
// generate a rhythm based on numbered spacings
Gen.spacingBeat(2, 3, 2)
//=> [1, 0, 1, 0, 0, 1, 0]

// also works with an array as input
Gen.spacingBeat([4, 2, 0])
//=> [1, 0, 0, 0, 1, 0, 0]
```
