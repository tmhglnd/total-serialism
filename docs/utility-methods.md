<!-- Generated with jsdoc2md, do not edit the .md file, instead edit the .hbs and the jsdoc in the src -->

# Utility

Basic arithmetic and other methods necessary to run functions in the libraries above. But can also be very useful in your own algorithmic processes. This section also includes a few graphic functions such as the `plot` and `draw` method which generates an asciichart or ascii-image of the array in the console.

## Include

```js
const Util = require('total-serialism').Utility;

Util.lerp();
Util.wrap();
```
OR

```js
const { lerp, wrap } = require('total-serialism').Utility;

lerp();
wrap();
```

## Functions

* [wrap(input, minimum, maximum)](#wrap) ⇒ <code>Number</code> \| <code>Array.&lt;Number&gt;</code>
* [constrain(input, minimum, maximum)](#constrain) ⇒ <code>Number</code> \| <code>Array.&lt;Number&gt;</code>
* [fold(input, minimum, maximum)](#fold) ⇒ <code>Number</code> \| <code>Array.&lt;Number&gt;</code>
* [map(input, low_in, high_in, low_out, high_out, exponent)](#map) ⇒ <code>Number</code> \| <code>Array.&lt;Number&gt;</code>
* [lerp(input_1, input_2, [-&gt;])](#lerp) ⇒ <code>Number</code> \| <code>Array.&lt;Number&gt;</code>
* [mod(input, modulus)](#mod) ⇒ <code>Number</code> \| <code>Array.&lt;Number&gt;</code>

<a name="wrap"></a>

## wrap(input, minimum, maximum) ⇒ <code>Number</code> \| <code>Array.&lt;Number&gt;</code>
Wrap values from a list within a specified low and high range. Similar to 
[mod](#mod), expect the low range is also adjustable.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td><td><code>Number</code> | <code>Array.&lt;Number&gt;</code></td><td><p>Array to wrap</p>
</td>
    </tr><tr>
    <td>minimum</td><td><code>Number</code></td><td><p>Low value (optional, default=12)</p>
</td>
    </tr><tr>
    <td>maximum</td><td><code>Number</code></td><td><p>High value (optional, default=0)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Util.wrap([0, [1, [2, 3]], [4, 5], 6], 2, 5);
//=> [ 3, [ 4, [ 2, 3 ] ], [ 4, 2 ], 3 ] 

Util.wrap(Gen.spread(30), 2, 8);
//=>  7.00 ┤╭╮    ╭╮    ╭╮    ╭╮    ╭╮    
//    6.00 ┼╯│   ╭╯│   ╭╯│   ╭╯│   ╭╯│    
//    5.00 ┤ │  ╭╯ │  ╭╯ │  ╭╯ │  ╭╯ │  ╭ 
//    4.00 ┤ │ ╭╯  │ ╭╯  │ ╭╯  │ ╭╯  │ ╭╯ 
//    3.00 ┤ │╭╯   │╭╯   │╭╯   │╭╯   │╭╯  
//    2.00 ┤ ╰╯    ╰╯    ╰╯    ╰╯    ╰╯    
```

* * *

<a name="constrain"></a>

## constrain(input, minimum, maximum) ⇒ <code>Number</code> \| <code>Array.&lt;Number&gt;</code>
Constrain values from a list within a specified low and high range.

Alias: clip(), clamp(), bound()

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td><td><code>Number</code> | <code>Array.&lt;Number&gt;</code></td><td><p>Array to wrap</p>
</td>
    </tr><tr>
    <td>minimum</td><td><code>Number</code></td><td><p>Low value (optional, default=12)</p>
</td>
    </tr><tr>
    <td>maximum</td><td><code>Number</code></td><td><p>High value (optional, default=0)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Util.constrain([0, [1, [2, 3]], [4, 5], 6], 2, 5);
//=> [ 2, [ 2, [ 2, 3 ] ], [ 4, 5 ], 5 ] 

Util.constrain(Gen.cosine(30, 1), 5, 9);
//=>  9.00 ┼─────╮                   ╭─── 
//    8.20 ┤     │                  ╭╯    
//    7.40 ┤     ╰╮                ╭╯     
//    6.60 ┤      ╰╮              ╭╯      
//    5.80 ┤       │              │       
//    5.00 ┤       ╰──────────────╯ 
```

* * *

<a name="fold"></a>

## fold(input, minimum, maximum) ⇒ <code>Number</code> \| <code>Array.&lt;Number&gt;</code>
Fold values from a list within a specified low and high range. When the 
value exceeds the range it is folded inwards. Has the effect of "bouncing" 
against the boundaries.

Alias: bounce()

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td><td><code>Number</code> | <code>Array.&lt;Number&gt;</code></td><td><p>Array to wrap</p>
</td>
    </tr><tr>
    <td>minimum</td><td><code>Number</code></td><td><p>Low value (optional, default=12)</p>
</td>
    </tr><tr>
    <td>maximum</td><td><code>Number</code></td><td><p>High value (optional, default=0)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Util.fold([0, [1, [2, 3]], [4, 5], 6], 2, 5);
//=> [ 4, [ 3, [ 2, 3 ] ], [ 4, 5 ], 4 ]

Util.fold(Gen.spreadFloat(30, -9, 13), 0, 1);
//=>  1.00 ┼╮         ╭╮      ╭╮          
//    0.80 ┤│ ╭╮   ╭╮ ││ ╭╮╭╮ ││ ╭╮   ╭╮  
//    0.60 ┤│ ││╭─╮││ ││╭╯││╰╮││ ││╭─╮││  
//    0.40 ┤│╭╯││ ││╰─╯││ ││ ││╰─╯││ ││╰╮ 
//    0.20 ┤╰╯ ││ ╰╯   ╰╯ ││ ╰╯   ╰╯ ││ ╰ 
//    0.00 ┤   ╰╯         ╰╯         ╰╯    
```

* * *

<a name="map"></a>

## map(input, low_in, high_in, low_out, high_out, exponent) ⇒ <code>Number</code> \| <code>Array.&lt;Number&gt;</code>
Rescale values from a list from a specified input range to a specified low 
and high output range. Apply an optional exponent to the mapping.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td><td><code>Number</code> | <code>Array.&lt;Number&gt;</code></td><td><p>Array to wrap</p>
</td>
    </tr><tr>
    <td>low_in</td><td><code>Number</code></td><td><p>Low input range (optional, default=0)</p>
</td>
    </tr><tr>
    <td>high_in</td><td><code>Number</code></td><td><p>High input range (optional, default=1)</p>
</td>
    </tr><tr>
    <td>low_out</td><td><code>Number</code></td><td><p>Low output range (optional, default=0)</p>
</td>
    </tr><tr>
    <td>high_out</td><td><code>Number</code></td><td><p>High output range (optional, default=1)</p>
</td>
    </tr><tr>
    <td>exponent</td><td><code>Number</code></td><td><p>Exponent value (optional, default=1)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Util.scale([0, [1, [2, 3]], 4], 0, 4, -1, 1);
//=> [ -1, [ -0.5, [ 0, 0.5 ] ], 1 ] 
```

* * *

<a name="lerp"></a>

## lerp(input_1, input_2, [-&gt;]) ⇒ <code>Number</code> \| <code>Array.&lt;Number&gt;</code>
Lerp (linear interpolation) two values or arrays. Both sides can be a single 
value or an array. Set the interpolation factor as third argument.

Alias: `mix()`

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input_1</td><td><code>Number</code> | <code>Array.&lt;Number&gt;</code></td><td><p>input 1 to be mixed with input 2</p>
</td>
    </tr><tr>
    <td>input_2</td><td><code>Number</code> | <code>Array.&lt;Number&gt;</code></td><td><p>input 2 to be mixed with input 1</p>
</td>
    </tr><tr>
    <td>[->]</td><td><code>Number</code></td><td><p>interpolation factor (optional, default = 0.5)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Util.lerp(2, 10, 0.5)
//=> 6

Util.lerp([-2, 4, 6], [10, 20, 30], 0.5)
//=> [4, 12, 18]
```

* * *

<a name="mod"></a>

## mod(input, modulus) ⇒ <code>Number</code> \| <code>Array.&lt;Number&gt;</code>
Return the remainder after division. Also works in the negative direction, so wrap starts at 0

**Kind**: global function  
**Returns**: <code>Number</code> \| <code>Array.&lt;Number&gt;</code> - - remainder after division  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td><td><code>Number</code> | <code>Array.&lt;Number&gt;</code></td><td><p>input value or array</p>
</td>
    </tr><tr>
    <td>modulus</td><td><code>Number</code> | <code>Array.&lt;Number&gt;</code></td><td><p>modulus/divisor (optional, default=12)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
Util.mod([-2, [4, [3, 7]]], 5);
//=> [ 3, [ 4, [ 3, 2 ] ] ]
```

* * *


***

&copy; 2020-2026 Timo Hoogland (@tmhglnd), www.timohoogland.com, MIT License