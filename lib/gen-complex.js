const Transform = require('./transformational.js');

// A euclidean rhythm generator. Generates values of 0 and 1
// Distributed based on the common denominator after division
//
var pattern, counts, remainders;

function euclid(args){
	var steps = Math.max(1, Math.floor(args[0]));
	var beats = Math.min(steps, Math.max(1, Math.floor(args[1])));
	var rot = Math.floor((args[2]==null) ? 0 : args[2]);

	if (args.length > 3){
		console.log("euclid(): more then 3 arguments given. Arguments <length, beats, rotate>");
	}
	pattern = [];
	counts = [];
	remainders = [];
	var level = 0;
	var divisor = steps - beats;

	remainders.push(beats);

	while (remainders[level] > 1){
		counts.push(Math.floor(divisor / remainders[level]));
		remainders.push(divisor % remainders[level]);
		
		divisor = remainders[level];
        level++;
	}
    counts.push(divisor);
    build(level);

	return Transform.rotate(pattern, rot + pattern.indexOf(1));
}//euclid()

function build(l){
	var level = l;

	if (level == -1){
			pattern.push(0);
	} else if (level == -2){
			pattern.push(1);
	} else {
		for (var i = 0; i < counts[level]; i++){
			build(level-1);
		}
		if (remainders[level] != 0){
			build(level-2);
		}
	}
}//build()

exports.euclid = euclid;