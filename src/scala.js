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
			'name' : '',
			'description' : '',
			'size' : 1,
			'tune' : 440,
			'center' :  69,
			'range' : 1200,
			'cents' : [ 0 ]
		};
	}

	get scala(){
		return { ...this.scl };
	}

	get names(){
		return Object.keys(db);
	}

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

	tune(v){
		if (isNaN(Number(v))){
			error(v + ' is not a number \n');
		} else {
			this.scl['tune'] = v;
		}
	}
	
	center(v){
		if (isNaN(Number(v))){
			error(v + ' is not a number \n');
		} else {
			this.scl['center'] = v;
		}
	}

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

	chart(hi=127, lo=0){
		// swap lo and hi range if hi is smaller than lo
		if (hi < lo){ var t=hi, hi=lo, lo=t; }
		let range = hi - lo;
	
		// get cents, scale-size, "octave" range, tune and center
		let cnts = this.scl.cents;
		let nts = this.scl.size;
		let oct = this.scl.range;
		let tune = this.scl.tune;
		let cntr = this.scl.center;
		
		// empty object for frequencies
		let chart = {};
		
		// calculate frequencies for values 0 to 127
		for (var i=0; i<range+1; i++){
			let n = i - cntr + lo;
			let o = Math.floor(n / nts) * oct;
			let c = cnts[((n % nts) + nts) % nts];
	
			chart[i + lo] = Math.pow(2, (c + o) / 1200) * tune;
		}
		// console.log(freqs);
		return chart;
	}
}
exports.Scala = Scala;
