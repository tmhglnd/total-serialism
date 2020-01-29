//==============================================================================
// translate.js
// part of 'total-serialism' Package
// by Timo Hoogland (@t.mo / @tmhglnd), www.timohoogland.com
// MIT License
//
// Methods to translate midi pitch material to note-names, intervals and more
// 
// credits:
// - Using the amazing Tonal.js package by @danigb
//==============================================================================

// require Tonal API
// const Tonal = require('tonal');
// const Interval = require('tonal-interval');
// const Scale = require('tonal-scale');
// const Chord = require('tonal-chord');
// const Key = require('tonal-key');
const Note = require('tonal-note');

function midiToTone(m){
	return Note.fromMidi(m);
}
exports.midiToTone = midiToTone;

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