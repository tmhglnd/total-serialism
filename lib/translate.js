//==============================================================================
// translate.js
// part of 'total-serialism' Package
// by Timo Hoogland (@t.mo / @tmhglnd), www.timohoogland.com
// MIT License
//
// Methods to translate between midi, note-names, intervals and more
// 
// credits:
// - Using the amazing Tonal.js package by @danigb
//==============================================================================

// require Tonal API
const Note = require('tonal-note');
const Scl = require('tonal-scale');
const PC = require('tonal-pcset');
// const Tonal = require('tonal');
// const Interval = require('tonal-interval');
// const Chord = require('tonal-chord');
// const Key = require('tonal-key');

var scales = {
	"chromatic" :				[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
	"major" :					[0, 0, 2, 2, 4, 5, 5, 7, 7, 9, 9,  11],
	"minor" :					[0, 0, 2, 3, 3, 5, 7, 7, 8, 8, 10, 10],
	"minor_melodic" : 			[0, 0, 2, 3, 3, 5, 7, 7, 9, 9, 11, 11],
	"minor_harmonic" :			[0, 0, 2, 3, 3, 5, 7, 7, 8, 8, 11, 11],
	"dorian" : 					[0, 0, 2, 3, 3, 5, 5, 7, 7, 9, 10, 10],
	"phrygian" : 				[0, 1, 1, 3, 3, 5, 7, 7, 8, 8, 10, 10],
	"lydian" : 					[0, 0, 2, 4, 4, 6, 6, 7, 7, 9, 11, 11],
	"myxolydian" : 				[0, 0, 2, 4, 4, 5, 5, 7, 7, 9, 10, 10],
	"locrian" : 				[0, 1, 1, 3, 3, 5, 6, 6, 8, 8, 10, 10],
	"gypsy" : 					[0, 0, 2, 3, 3, 6, 6, 7, 8, 8, 11, 11],
	"gypsy_spanish" : 			[0, 1, 1, 4, 4, 5, 5, 7, 8, 8, 11, 11],
	"hexatonic" :	 			[0, 0, 2, 2, 4, 4, 6, 6, 8, 8, 10, 10],
	"hexatonic_blues" :			[0, 0, 2, 2, 4, 4, 6, 6, 7, 7, 10, 10],
	"hexatonic_prometheus" :	[0, 0, 2, 2, 4, 4, 6, 6, 9, 9, 10, 10],
	"major_pentatonic" :		[0, 0, 2, 2, 4, 4, 7, 7, 7, 9, 9,  9],
	"minor_pentatonic" :		[0, 0, 3, 3, 3, 5, 5, 7, 7, 10, 10, 10]
}

var notation = {
	"scale" : "chromatic",
	"root" : "c",
	"intervals" : Scl.intervals("chromatic"),
	"chroma" : [],
	"bpm" : 120,
	"measureInMs" : 2000
}

// Return a dictionary with all the notational preferences
// 
// @return -> Dictionary object
// 
function getSettings(){
	return { ...notation };
}
exports.getSettings = getSettings;

// Set the tempo to use for translating between values
// minimum tempo is 1
// 
// @param {Number} -> the tempo in Beats/Minute (BPM)
// @return {Void}
// 
function setTempo(t=100){
	if (Array.isArray(t)){
		t = t[0];
	}
	notation.bpm = Math.max(1, Number(t));
	notation.measureInMs = 60000.0 / notation.bpm * 4;
}
exports.setTempo = setTempo;
exports.setBPM = setTempo;

// Get the current used tempo
// 
// @return -> tempo in Beats/Minute (BPM)
function getTempo(){
	return getSettings().bpm;
}
exports.getTempo = getTempo;
exports.getBPM = getTempo;

// Set the scale to use for mapping integer sequences to
// 
// @param {String} -> scale name
// @param {Int/String} -> root of the scale (optional, default=c)
// @return {Void}
function setScale(s="chromatic", r="c"){
	if (scales[s]){
		notation.scale = s;
		notation.root = r;
		notation.intervals = scales[s];
		// notation.chroma = PC.chroma(notation.intervals);
		// console.log(Scl.props(s));
	}
}
exports.setScale = setScale;

// returns the scale and root as object
// 
// @return {Object} -> the scale and root
function getScale(){
	return { "scale" : getSettings().scale, "root" : getSettings().root };
}
exports.getScale = getScale;

// returns a list of all available scale names
// 
// @return {Array} -> scales
function scaleNames(){
	return Scl.names();
}
exports.scaleNames = scaleNames;

// search scales based on an array of intervals
// 
// @param {Array|String} -> array of intervals
// @return {Object} -> possible scales
// 
function searchScales(iv){
	iv = (Array.isArray(iv))? iv : [iv];

	let names = scaleNames();
	let scales = names.map(x => Scl.intervals(x));
	let arr = [];
	for (let n in names){
		let includes = 0;
		for (let i in iv){
			includes += scales[n].includes(iv[i]);
		}
		if (includes == iv.length){
			arr.push({ "scale" : names[n], "intervals" : scales[n]});
		}
	}
	console.log(arr);
}
exports.searchScales = searchScales;

// Convert a midi value to a note name (60 => C4)
// 
// @param {Number/Array} -> midi values to convert
// @return {String/Array} -> note name
// 
function midiToNote(a=48){
	if (!Array.isArray(a)){
		return Note.fromMidi(a);
	}
	return a.map(x => Note.fromMidi(x));
}
exports.midiToNote = midiToNote;
exports.mton = midiToNote;

// Convert a midi value to a frequency (60 => 261.63 Hz)
// With default equal temperament tuning A4 = 440 Hz
// 
// @param {Number/Array} -> midi values to convert
// @return {Number/Array} -> frequency in Hz
// 
function midiToFreq(a=48){
	if (!Array.isArray(a)){
		return Note.freq(Note.fromMidi(a));
	}
	return a.map(x => Note.freq(Note.fromMidi(x)));
}
exports.midiToFreq = midiToFreq;
exports.mtof = midiToFreq;

// Convert a pitch name to a midi value (C4 => 60)
// 
// @param {String/Array} -> pitch name to convert
// @return {Number/Array} -> midi value
// 
function noteToMidi(a='c4'){
	if (!Array.isArray(a)){
		return Note.midi(a);
	}
	return a.map(x => Note.midi(x));
}
exports.noteToMidi = noteToMidi;
exports.ntom = noteToMidi;

// Convert a pitch name to a frequency (C4 => 261.63 Hz)
// With default equal temperament tuning A4 = 440 Hz
// 
// @param {String/Array} -> pitch name to convert
// @return {Number/Array} -> frequency in Hz
// 
function noteToFreq(a='c4'){
	if (!Array.isArray(a)){
		return Note.freq(a);
	}
	return a.map(x => Note.freq(x));
}
exports.noteToFreq = noteToFreq;
exports.ntof = noteToFreq;

// Convert a list of relative semitone intervals to midi
// provide octave offset
// 
// @param {Number/Array} -> relative
// @param {Number} -> octave (optional, default=4)
// @return {Number/Array}
// 
function relativeToMidi(a=0, o=4){
	o = (typeof o === 'string')? Note.midi(o) : o * 12;
	if (!Array.isArray(a)){
		return a + o;
	}
	return a.map(x => x + o);
}
exports.relativeToMidi = relativeToMidi;
exports.rtom = relativeToMidi;

/*
// Convert a list of semitone intervals to frequency
// provide octave offset
// 
// @param {Number/Array} -> semitones
// @param {Number} -> octave (optional, default=4)
// @return {Number/Array}
// 
function semiToFreq(a=0, o=4){
	if (!Array.isArray(a)){
		return Note.freq(a + o * 12);
	}
	return a.map(x => Note.freq(x + o * 12));
}
exports.semiToFreq = semiToFreq;
exports.stof = semiToFreq;

// Convert a midi value to semitone intervals
// provide octave offset
// 
// @param {Number/Array} -> semitones
// @param {Number} -> octave (optional, default=4)
// @return {Number/Array}
// 
function midiToSemi(a=0, o=4){
	if (!Array.isArray(a)){
		return a - o * 12;
	}
	return a.map(x => x - o * 12);
}
exports.midiToSemi = midiToSemi;
exports.mtos = midiToSemi;

// Convert a division value to milliseconds based on set BPM
// eg. ['1/4', 1/8', '1/16'] => [500, 250, 125] @ BPM = 120
// 
// @param {Number/String/Array}
// @return {Number/Array}
//
function divisionToMs(a='1'){
	// console.log('divisionToMs', a);
	// var arr = [];
	// for (i in a){
	// 	// console.log(eval(a[i]));
	// 	arr.push(eval(a[i]) * notation.measureInMs);
	// }
	return a.map(x => {
		x = (typeof x === 'string')? eval(x) : x;
		return x * notation.measureInMs
	});
	// return arr;
}
exports.divisionToMs = divisionToMs;
*/

/*
let SYNC = true;
let _scale_name = 'minor';
let _scale = [];
let _tonic = 'c';

function syncToScale(note){
	var interval = _scale[parseInt(note) % 12];
	var octave = parseInt(note / 12);
	var detune = note - (parseInt(note));
	return interval + 12*octave + detune;
}//syncToScale()

function setSync(f){
	SYNC = (f != 0) ? true : false;
}//setSync()

function setScale(name){
	_scale_name = name;
	_scale = Tonal.scale(_scale_name);
	_scale = scaleStretch(relativeToSemitone(_scale));
}//set_scale()

function randomScale(){
	var a = Scale.names();
	var r = Math.floor(Math.random() * a.length);
	setScale(a[r]);
}//randomScale()

function relativeToSemitone(scl){
	return scl.map(Interval.semitones);
}//relativeToSemitone()

function scaleStretch(s){
	var n = 0;
	var scl = [];
	for (var i=0; i<12; i++){
		var index = s.indexOf(i)
		if (index > 0){
			n = s[index];
		}
		scl[i] = n;
	}
	return scl;
}//scaleStretch()

// not implemented yet
// function getChord(i){
// 	return i;
// }//getChord()
*/