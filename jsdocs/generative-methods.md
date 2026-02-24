## Functions

<dl>
<dt><a href="#count">count(count, to)</a> ⇒ <code>Array.&lt;Number&gt;</code></dt>
<dd><p>The counter function generates an array of ascending or descending 
integers, counted from a starting value up to (and including) an ending 
value. When one argument is provided this value acts as the ending value 
and the default starting value is 0. If two values are provided the first 
value is the starting value and the second value the end.</p>
</dd>
<dt><a href="#spreadFloat">spreadFloat(length, low, high)</a> ⇒ <code>Array.&lt;Number&gt;</code></dt>
<dd><p>The spread function is similar to the count function, but you can decide on 
the length of the array output resulting in some numbers being skipped or 
duplicated depending of the output size should be smaller or larger than the 
start and ending points. The generated array has n-length of evenly spaced 
values between a starting number up until (but excluding) the 3th argument. 
Flipping the low and high range will result in the same values but 
descending.</p>
</dd>
<dt><a href="#spread">spread(length, low, high)</a> ⇒ <code>Array.&lt;Number&gt;</code></dt>
<dd><p>The spread function is similar to the count function, but you can decide on 
the length of the array output resulting in some numbers being skipped or 
duplicated depending of the output size should be smaller or larger than the 
start and ending points. The generated array has n-length of evenly spaced 
values between a starting number up until (but excluding) the 3th argument. 
Flipping the low and high range will result in the same values but 
descending.</p>
</dd>
<dt><a href="#spreadExpFloat">spreadExpFloat(Length, lo, hi, exp)</a> ⇒ <code>Array.&lt;Number&gt;</code></dt>
<dd><p>Generate an array of n-length of evenly spaced values between a starting 
number up to (and including) the 3th argument. Flipping the low and high 
range will result in the same values but descending.</p>
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
**Summary**: Count whole numbers  

| Param | Type | Description |
| --- | --- | --- |
| count | <code>Int</code> | (or count from, default=12) |
| to | <code>Int</code> | (optional, default=undefined) |

**Example**  
```js
// count to 8 from 0
Gen.counter(8);
//=> [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ]
```
**Example**  
```js
// count to 10 from 4
Gen.counter(4, 10);
//=> [ 4, 5, 6, 7, 8, 9, 10 ]
```
**Example**  
```js
// count down from 7 to 2
Gen.counter(7, 2);
//=> [ 7, 6, 5, 4, 3, 2 ]
```
**Example**  
```js
// count down from 5 to -4
Gen.counter(5, -4);
//=> [ 5, 4, 3, 2, 1, 0, -1, -2, -3, -4 ]
```
<a name="spreadFloat"></a>

## spreadFloat(length, low, high) ⇒ <code>Array.&lt;Number&gt;</code>
The spread function is similar to the count function, but you can decide on 
the length of the array output resulting in some numbers being skipped or 
duplicated depending of the output size should be smaller or larger than the 
start and ending points. The generated array has n-length of evenly spaced 
values between a starting number up until (but excluding) the 3th argument. 
Flipping the low and high range will result in the same values but 
descending.

**Kind**: global function  
**Summary**: Spread numbers between a low and high value  

| Param | Type | Description |
| --- | --- | --- |
| length | <code>Int</code> | of the output array |
| low | <code>Number</code> | value (optional, default=0) |
| high | <code>Number</code> | value (optional, default=length) |

**Example**  
```js
// generate an array of 5 floats between range 0-1
Gen.spreadFloat(5); 
//=> [ 0, 0.2, 0.4, 0.6, 0.8 ]
```
<a name="spread"></a>

## spread(length, low, high) ⇒ <code>Array.&lt;Number&gt;</code>
The spread function is similar to the count function, but you can decide on 
the length of the array output resulting in some numbers being skipped or 
duplicated depending of the output size should be smaller or larger than the 
start and ending points. The generated array has n-length of evenly spaced 
values between a starting number up until (but excluding) the 3th argument. 
Flipping the low and high range will result in the same values but 
descending.

**Kind**: global function  
**Summary**: Spread numbers between a low and high value  
**Extends**: [<code>spreadFloat</code>](#spreadFloat)  

| Param | Type | Description |
| --- | --- | --- |
| length | <code>Int</code> | of the output array |
| low | <code>Int</code> | value (optional, default=0) |
| high | <code>Int</code> | value (optional, default=length) |

**Example**  
```js
// generate an array of 5 ints between range 0-5
Gen.spread(5);
//=> [ 0, 1, 2, 3, 4 ] 
```
**Example**  
```js
// change the range with a second argument to 0-12
Gen.spread(5, 12);
//=> [ 0, 2, 4, 7, 9 ] 
```
**Example**  
```js
// add a low/high range pair with 3-12
Gen.spread(5, 3, 12);
//=> [ 3, 4, 6, 8, 10 ] 
```
**Example**  
```js
// reverse the range for descending output with 12-3
Gen.spread(5, 12, 3);
//=> [ 10, 8, 6, 4, 3 ] 
```
<a name="spreadExpFloat"></a>

## spreadExpFloat(Length, lo, hi, exp) ⇒ <code>Array.&lt;Number&gt;</code>
Generate an array of n-length of evenly spaced values between a starting 
number up to (and including) the 3th argument. Flipping the low and high 
range will result in the same values but descending.

**Kind**: global function  
**Summary**: Spread numbers between a low and high value (inclusive)  

| Param | Type | Description |
| --- | --- | --- |
| Length | <code>\*</code> | of output array |
| lo | <code>\*</code> |  |
| hi | <code>\*</code> |  |
| exp | <code>\*</code> |  |

