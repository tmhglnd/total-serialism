//=======================================================================
// scala.js
// part of 'total-serialism' Package
// by Timo Hoogland (@t.mo / @tmhglnd), www.timohoogland.com
// MIT License
//
// Import a .scl file and convert to a JSON object. Use methods to 
// translate numbers into frequencies according to the settings of
// tune, center and the scala cents
//=======================================================================

const fs = require('fs');
const path = require('path');
const TL = require('./translate.js');
// scala database from json
const db = require('../data/scldb-min.json');

class Scala {
	constructor() {
		// the converted file to dictionary
		this.scl = {
			'name' : '12-TET',
			'description' : '12-TET or Tone Equal Temperatement divides an octave into 12 equal steps',
			'size' : 1,
			'tune' : 440,
			'center' :  69,
			'range' : 1200,
			'cents' : [ 0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100 ]
		};
	}

	get scala(){
		return { ...this.scl };
	}

	get names(){
		return Object.keys(db);
	}

	// set the tuning for the center value
	tune(v){
		if (isNaN(Number(v))){
			error(v + ' is not a number \n');
		} else {
			this.scl['tune'] = v;
		}
	}
	
	// set the center value corresponding with cent 0 and tuning frequency
	center(v){
		if (isNaN(Number(v))){
			error(v + ' is not a number \n');
		} else {
			this.scl['center'] = v;
		}
	}

	// return the frequency from the scala corresponding to the input number
	scalaToFreq(a=48){
		let isArr = !Array.isArray(a);
		let arr = (isArr)? [a] : a;

		arr = arr.map((x) => {
			let s = this.scl.size;
			let n = x - this.scl.center;
			let o = Math.floor(n / s) * this.scl.range;
			let c = this.scl.cents[((n % s) + s) % s];

			return Math.pow(2, (c + o) / 1200) * this.scl.tune;
		});
		return (isArr)? arr[0] : arr;
	}

	// shorthand for scalaToFreq()
	stof(a=48){
		return this.scalaToFreq(a);
	}

	// search the scala scale database with filter options
	search(f){
		f = (typeof f !== 'undefined') ? f : {};
		f.size = (typeof f.size !== 'undefined') ? f.size : null;
		f.range = (typeof f.range !== 'undefined') ? f.range : null;
		f.cents = (typeof f.cents !== 'undefined') ? f.cents : null;
		f.name = (typeof f.name !== 'undefined') ? f.name : null;
		f.description = (typeof f.description !== 'undefined') ? f.description : null;
		
		let result = { ...db };
		Object.keys(f).forEach((k) => {
			let tmpRes = {};
			// only search the key if filter is added
			if (f[k] !== null){
				// allow arrays for multiple searches
				let s = (!Array.isArray(f[k]))? [f[k]] : f[k];
				// serach size with number match
				if (k === 'size'){
					Object.keys(result).forEach((scl) => {
						s.forEach((v) => {
							if (result[scl][k] === Number(v)){
								tmpRes[scl] = result[scl];
							}
						});
					});
					result = tmpRes;
				}
				// search description with regular expression
				if (k === 'description'){
					Object.keys(result).forEach((scl) => {
						s.forEach((v) => {
							if (result[scl][k].match(String(v), 'i')){
								tmpRes[scl] = result[scl];
							}
						});
					});
					result = tmpRes;
				}
				// search cents for number or ratio
				if (k === 'cents'){
					Object.keys(result).forEach((scl) => {
						s.forEach((v) => {
							let c = TL.ratioToCent(v);

							if (result[scl]['range'] === c){
								tmpRes[scl] = result[scl];
							} else {
								result[scl][k].forEach((cent) => {
									if (cent === c){
										tmpRes[scl] = result[scl];
									}
								});
							}
						});
					});
					result = tmpRes;
				}
			}
		});
		return result;
	}

	// read and parse the .scl file to use in the scale
	parse(f){
		// read the file text in variable
		let file = fs.readFileSync(f, 'utf8');
		this.scl.name = path.parse(f).name;
		// remove linebreaks and split into array of lines
		file = file.replace(/(\r\n|\n\r|\r|\n)/g, '\n').split('\n');
		// empty cents array in dictionary
		this.scl.cents = [ 0 ];
		// init line number and note count
		let l = 0, n = 0;
		// iterate through lines
		for (var i=0; i<file.length; i++){
			let line = file[i];
	
			if (line.match(/^!(.+)?/)) {
				// ignore if comment
			} else {
				// console.log(line, l);
				if (l === 0){
					// first non-comment line is description
					this.scl['description'] = line;
				} else if (l === 1){
					// second non-comment line is number of notes in scale
					this.scl['size'] = Number(line);
				} else {
					// remove leading, trailing and multiple whitespace
					// split line in array
					line = line.trim().replace(/\s+/g, ' ').split(' ');
	
					if (n < this.scl.size){
						// if line is not a number then it's a ratio
						if (isNaN(Number(line[0]))) {
							line = TL.ratioToCent(line[0]);
						} else {
							// if line is negative then make absolute
							line = (Number(line[0]) < 0)? Math.abs(Number(line[0])) : Number(line[0]);
						}
						// push notes to object and increment notecount
						this.scl.cents.push(line);
						n++;
					}
				}
				// increment linecount
				l++;
			}
		}
		// sort the cent values
		this.scl['cents'] = this.scl.cents.sort((a, b) => {return a-b});
		// last value is width of "octave" (usually an octave of 1200)
		this.scl['range'] = this.scl.cents.pop();
		// return { ...scl };
	}

	// return an array with frequencies derived from the loaded scala
	chart(hi=127, lo=0){
		// swap lo and hi range if hi is smaller than lo
		if (hi < lo){ var t=hi, hi=lo, lo=t; }
		let range = hi - lo;

		// empty object for frequencies
		let chart = {};
		// calculate frequencies for values 0 to 127
		for (var i=0; i<range+1; i++){
			chart[i + lo] = this.scalaToFreq(i + lo);
		}
		return chart;
	}
}
module.exports = Scala;