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

class Scala {
	constructor() {
		// the converted file to dictionary
		this.scl = {
			'description' : '',
			'size' : 1,
			'tune' : 440,
			'center' :  69,
			'range' : 1200,
			'cents' : [ 0 ]
		};
	}

	get tuning(){
		return { ...this.scl };
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
							line = ratioToCent(line[0]);
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
		this.scl['cents'] = scl.cents.sort((a, b) => {return a-b});
		// last value is width of "octave" (usually an octave of 1200)
		this.scl['range'] = scl.cents.pop();
		// return { ...scl };
	}
}
exports.Scala = Scala;
