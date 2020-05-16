//=======================================================================
// statistic.js
// part of 'total-serialism' Package
// by Timo Hoogland (@t.mo / @tmhglnd), www.timohoogland.com
// MIT License
//
// Statistical related methods and algorithms that can be helpful in
// analysis of number sequences, melodies, rhythms and more
// 
//=======================================================================

// sort an array of numbers or strings. sorts ascending
// or descending in numerical and alphabetical order
// 
// @param {Array} -> array to sort
// @param {Int} -> sort direction (positive value is ascending)
// @return {Array} -> sorted array, object includes order-indeces
// 
function sort(a=[0], d=1){
	if (!Array.isArray(a)) { return a; }
	let arr;
	if (a.map(x => typeof x).includes('string')){
		arr = a.slice().sort();
	} else {
		arr = a.slice().sort((a,b) => { return a-b; })
	}
	if (d < 0){
		return arr.reverse();
	}
	return arr;
}
exports.sort = sort;

// Return the average (artihmetic mean) value in an array
// The mean is a measure of central tendency
// 
// @param {NumberArray} -> input array of n-numbers
// @return {Number} -> mean
// 
function mean(a=[0]){
	if (!Array.isArray(a)) { return a; }
	let s = 0;
	for (let i in a){
		s += a[i];
	}
	return s / a.length;
}
exports.mean = mean;
exports.average = mean;

// Return the median (center) value from an array
// The median is a measure of central tendency
// If array is even number of values the median is the
// average of the two center values
// 
// @param {NumberArray} -> input array of n-numbers
// @return {Number} -> median
// 
function median(a=[0]){
	if (!Array.isArray(a)) { return a; }
	if (a.map(x => typeof x).includes('string')) { 
		console.error('Expected array of numbers but got also strings');
		return 0; 
	}
	let arr = a.slice().sort((a,b) => { return a-b; });
	let c = Math.floor(arr.length/2);

	if (!(arr.length % 2)){
		return (arr[c] + arr[c-1]) / 2;
	}
	return arr[c];
}
exports.median = median;
exports.center = median;

// exports.mode = mode;
// exports.common = mode;