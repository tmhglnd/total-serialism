(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.TotalSerialism = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
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
    "hungarian" : 				[0, 0, 2, 3, 3, 6, 6, 7, 8, 8, 11, 11],
    "gypsy" :		 			[0, 1, 1, 4, 4, 5, 5, 7, 8, 8, 11, 11],
    "major_neapolitan" :		[0, 1, 1, 3, 3, 5, 7, 7, 8, 8, 11, 11],
    "minor_neapolitan" :		[0, 1, 1, 3, 3, 5, 7, 7, 9, 9, 11, 11],
    "hexatonic" :	 			[0, 0, 2, 2, 4, 4, 6, 6, 8, 8, 10, 10],
    "hexatonic_blues" :			[0, 0, 2, 2, 4, 4, 6, 6, 7, 7, 10, 10],
    "hexatonic_prometheus" :	[0, 0, 2, 2, 4, 4, 6, 6, 9, 9, 10, 10],
    "major_pentatonic" :		[0, 0, 2, 2, 4, 4, 7, 7, 7, 9, 9,  9],
    "minor_pentatonic" :		[0, 0, 3, 3, 3, 5, 5, 7, 7, 10, 10, 10]
}
},{}],2:[function(require,module,exports){
module.exports={"05-19":{"description":"data/scl/05-19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"05-22":{"description":"data/scl/05-22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"05-24":{"description":"data/scl/05-24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"06-41":{"description":"data/scl/06-41.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"07-19":{"description":"data/scl/07-19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"07-31":{"description":"data/scl/07-31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"07-37":{"description":"data/scl/07-37.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"08-11":{"description":"data/scl/08-11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"08-13":{"description":"data/scl/08-13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"08-19":{"description":"data/scl/08-19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"08-37":{"description":"data/scl/08-37.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"09-15":{"description":"data/scl/09-15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"09-19":{"description":"data/scl/09-19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"09-19a":{"description":"data/scl/09-19a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"09-22":{"description":"data/scl/09-22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"09-23":{"description":"data/scl/09-23.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"09-29":{"description":"data/scl/09-29.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"09-31":{"description":"data/scl/09-31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"10-13-58":{"description":"data/scl/10-13-58.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"10-13":{"description":"data/scl/10-13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"10-19":{"description":"data/scl/10-19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"10-29":{"description":"data/scl/10-29.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"11-18":{"description":"data/scl/11-18.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"11-19-gould":{"description":"data/scl/11-19-gould.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"11-19-krantz":{"description":"data/scl/11-19-krantz.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"11-19-mclaren":{"description":"data/scl/11-19-mclaren.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"11-23":{"description":"data/scl/11-23.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"11-31":{"description":"data/scl/11-31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"11-34":{"description":"data/scl/11-34.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"11-37":{"description":"data/scl/11-37.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"11-limit-only":{"description":"data/scl/11-limit-only.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"12-17":{"description":"data/scl/12-17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"12-19":{"description":"data/scl/12-19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"12-22":{"description":"data/scl/12-22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"12-22h":{"description":"data/scl/12-22h.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"12-27":{"description":"data/scl/12-27.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"12-31":{"description":"data/scl/12-31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"12-31_11":{"description":"data/scl/12-31_11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"12-43":{"description":"data/scl/12-43.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"12-46":{"description":"data/scl/12-46.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"12-46p":{"description":"data/scl/12-46p.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"12-50":{"description":"data/scl/12-50.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"12-79mos159et":{"description":"data/scl/12-79mos159et.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"12-TET":{"description":"data/scl/12-TET.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"12-yarman24a":{"description":"data/scl/12-yarman24a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"12-yarman24b":{"description":"data/scl/12-yarman24b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"12-yarman24c":{"description":"data/scl/12-yarman24c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"12-yarman24d":{"description":"data/scl/12-yarman24d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"13-19":{"description":"data/scl/13-19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"13-22":{"description":"data/scl/13-22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"13-30t":{"description":"data/scl/13-30t.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"13-31":{"description":"data/scl/13-31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"14-19":{"description":"data/scl/14-19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"14-26":{"description":"data/scl/14-26.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"14-26a":{"description":"data/scl/14-26a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"15-37":{"description":"data/scl/15-37.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"15-46":{"description":"data/scl/15-46.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"16-139":{"description":"data/scl/16-139.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"16-145":{"description":"data/scl/16-145.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"16-31":{"description":"data/scl/16-31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"17-31":{"description":"data/scl/17-31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"17-53":{"description":"data/scl/17-53.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"19-31":{"description":"data/scl/19-31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"19-31ji":{"description":"data/scl/19-31ji.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"19-36":{"description":"data/scl/19-36.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"19-50":{"description":"data/scl/19-50.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"19-53":{"description":"data/scl/19-53.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"19-55":{"description":"data/scl/19-55.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"19-any":{"description":"data/scl/19-any.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"20-31":{"description":"data/scl/20-31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"20-55":{"description":"data/scl/20-55.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"21-any":{"description":"data/scl/21-any.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"22-100":{"description":"data/scl/22-100.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"22-100a":{"description":"data/scl/22-100a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"22-41":{"description":"data/scl/22-41.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"22-46":{"description":"data/scl/22-46.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"22-53":{"description":"data/scl/22-53.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"24-60":{"description":"data/scl/24-60.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"24-80":{"description":"data/scl/24-80.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"24-94":{"description":"data/scl/24-94.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"28-any":{"description":"data/scl/28-any.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"30-29-min3":{"description":"data/scl/30-29-min3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"31-171":{"description":"data/scl/31-171.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"46_72":{"description":"data/scl/46_72.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"53-commas":{"description":"data/scl/53-commas.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"56-any":{"description":"data/scl/56-any.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"67-135":{"description":"data/scl/67-135.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"70-any":{"description":"data/scl/70-any.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"79-159":{"description":"data/scl/79-159.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"79-159_arel-ezgi-uzdilek":{"description":"data/scl/79-159_arel-ezgi-uzdilek.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"79-159_equidistant5ths":{"description":"data/scl/79-159_equidistant5ths.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"79-159_splendidbeating":{"description":"data/scl/79-159_splendidbeating.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"79-159beats":{"description":"data/scl/79-159beats.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"79-159first":{"description":"data/scl/79-159first.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"79-159ji":{"description":"data/scl/79-159ji.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"80-159":{"description":"data/scl/80-159.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"80-159_splendidbeating":{"description":"data/scl/80-159_splendidbeating.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"80-159beats":{"description":"data/scl/80-159beats.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"abell1":{"description":"data/scl/abell1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"abell2":{"description":"data/scl/abell2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"abell3":{"description":"data/scl/abell3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"abell4":{"description":"data/scl/abell4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"abell5":{"description":"data/scl/abell5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"abell6":{"description":"data/scl/abell6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"abell7":{"description":"data/scl/abell7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"abell8":{"description":"data/scl/abell8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"abell9":{"description":"data/scl/abell9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ad-dik":{"description":"data/scl/ad-dik.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"aeolic":{"description":"data/scl/aeolic.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"aeu-41 ratios":{"description":"data/scl/aeu-41 ratios.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"aeu-41":{"description":"data/scl/aeu-41.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"agricola":{"description":"data/scl/agricola.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"agricola_p":{"description":"data/scl/agricola_p.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"akea46_13":{"description":"data/scl/akea46_13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"al-din":{"description":"data/scl/al-din.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"al-din_19":{"description":"data/scl/al-din_19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"al-farabi":{"description":"data/scl/al-farabi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"al-farabi_19":{"description":"data/scl/al-farabi_19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"al-farabi_22":{"description":"data/scl/al-farabi_22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"al-farabi_9":{"description":"data/scl/al-farabi_9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"al-farabi_blue":{"description":"data/scl/al-farabi_blue.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"al-farabi_chrom":{"description":"data/scl/al-farabi_chrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"al-farabi_chrom2":{"description":"data/scl/al-farabi_chrom2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"al-farabi_diat":{"description":"data/scl/al-farabi_diat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"al-farabi_diat2":{"description":"data/scl/al-farabi_diat2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"al-farabi_div":{"description":"data/scl/al-farabi_div.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"al-farabi_div2":{"description":"data/scl/al-farabi_div2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"al-farabi_divo":{"description":"data/scl/al-farabi_divo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"al-farabi_dor":{"description":"data/scl/al-farabi_dor.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"al-farabi_dor2":{"description":"data/scl/al-farabi_dor2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"al-farabi_g1":{"description":"data/scl/al-farabi_g1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"al-farabi_g10":{"description":"data/scl/al-farabi_g10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"al-farabi_g11":{"description":"data/scl/al-farabi_g11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"al-farabi_g12":{"description":"data/scl/al-farabi_g12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"al-farabi_g3":{"description":"data/scl/al-farabi_g3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"al-farabi_g4":{"description":"data/scl/al-farabi_g4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"al-farabi_g5":{"description":"data/scl/al-farabi_g5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"al-farabi_g6":{"description":"data/scl/al-farabi_g6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"al-farabi_g7":{"description":"data/scl/al-farabi_g7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"al-farabi_g8":{"description":"data/scl/al-farabi_g8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"al-farabi_g9":{"description":"data/scl/al-farabi_g9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"al-hwarizmi":{"description":"data/scl/al-hwarizmi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"al-kindi":{"description":"data/scl/al-kindi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"al-kindi2":{"description":"data/scl/al-kindi2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"al-mausili":{"description":"data/scl/al-mausili.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"alembert-rousseau":{"description":"data/scl/alembert-rousseau.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"alembert-rousseau2":{"description":"data/scl/alembert-rousseau2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"alembert":{"description":"data/scl/alembert.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"alves":{"description":"data/scl/alves.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"alves_12":{"description":"data/scl/alves_12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"alves_22":{"description":"data/scl/alves_22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"alves_pelog":{"description":"data/scl/alves_pelog.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"alves_slendro":{"description":"data/scl/alves_slendro.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"amity":{"description":"data/scl/amity.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"amity53pure":{"description":"data/scl/amity53pure.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ammerbach":{"description":"data/scl/ammerbach.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ammerbach1":{"description":"data/scl/ammerbach1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ammerbach2":{"description":"data/scl/ammerbach2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"angklung":{"description":"data/scl/angklung.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ankara":{"description":"data/scl/ankara.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"appunn":{"description":"data/scl/appunn.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arabic_bastanikar_on_b":{"description":"data/scl/arabic_bastanikar_on_b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arabic_bayati_and_bayati-shuri_on_d":{"description":"data/scl/arabic_bayati_and_bayati-shuri_on_d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arabic_bayati_and_ushshaq-misri_on_d":{"description":"data/scl/arabic_bayati_and_ushshaq-misri_on_d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arabic_huzam_on_e":{"description":"data/scl/arabic_huzam_on_e.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arabic_rast_on_c":{"description":"data/scl/arabic_rast_on_c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arabic_saba-zamzama_on_d":{"description":"data/scl/arabic_saba-zamzama_on_d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arabic_saba_on_d":{"description":"data/scl/arabic_saba_on_d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arabic_segah-mustaar_on_e":{"description":"data/scl/arabic_segah-mustaar_on_e.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arabic_zanjaran_on_c":{"description":"data/scl/arabic_zanjaran_on_c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arch_chrom":{"description":"data/scl/arch_chrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arch_chromc2":{"description":"data/scl/arch_chromc2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arch_dor":{"description":"data/scl/arch_dor.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arch_enh":{"description":"data/scl/arch_enh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arch_enh2":{"description":"data/scl/arch_enh2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arch_enh3":{"description":"data/scl/arch_enh3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arch_enhp":{"description":"data/scl/arch_enhp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arch_enht":{"description":"data/scl/arch_enht.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arch_enht2":{"description":"data/scl/arch_enht2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arch_enht3":{"description":"data/scl/arch_enht3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arch_enht4":{"description":"data/scl/arch_enht4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arch_enht5":{"description":"data/scl/arch_enht5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arch_enht6":{"description":"data/scl/arch_enht6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arch_enht7":{"description":"data/scl/arch_enht7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arch_mult":{"description":"data/scl/arch_mult.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arch_ptol":{"description":"data/scl/arch_ptol.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arch_ptol2":{"description":"data/scl/arch_ptol2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arch_sept":{"description":"data/scl/arch_sept.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"archchro":{"description":"data/scl/archchro.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"archytas12":{"description":"data/scl/archytas12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"archytas12sync":{"description":"data/scl/archytas12sync.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"archytas7":{"description":"data/scl/archytas7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ares12":{"description":"data/scl/ares12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ares12opt":{"description":"data/scl/ares12opt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ariel1":{"description":"data/scl/ariel1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ariel2":{"description":"data/scl/ariel2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ariel3":{"description":"data/scl/ariel3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ariel_19":{"description":"data/scl/ariel_19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ariel_31":{"description":"data/scl/ariel_31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_archenh":{"description":"data/scl/arist_archenh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_chrom":{"description":"data/scl/arist_chrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_chrom2":{"description":"data/scl/arist_chrom2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_chrom3":{"description":"data/scl/arist_chrom3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_chrom4":{"description":"data/scl/arist_chrom4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_chromenh":{"description":"data/scl/arist_chromenh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_chrominv":{"description":"data/scl/arist_chrominv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_chromrej":{"description":"data/scl/arist_chromrej.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_chromunm":{"description":"data/scl/arist_chromunm.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_diat":{"description":"data/scl/arist_diat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_diat2":{"description":"data/scl/arist_diat2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_diat3":{"description":"data/scl/arist_diat3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_diat4":{"description":"data/scl/arist_diat4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_diatdor":{"description":"data/scl/arist_diatdor.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_diatinv":{"description":"data/scl/arist_diatinv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_diatred":{"description":"data/scl/arist_diatred.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_diatred2":{"description":"data/scl/arist_diatred2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_diatred3":{"description":"data/scl/arist_diatred3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_enh":{"description":"data/scl/arist_enh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_enh2":{"description":"data/scl/arist_enh2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_enh3":{"description":"data/scl/arist_enh3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_hemchrom":{"description":"data/scl/arist_hemchrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_hemchrom2":{"description":"data/scl/arist_hemchrom2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_hemchrom3":{"description":"data/scl/arist_hemchrom3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_hypenh2":{"description":"data/scl/arist_hypenh2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_hypenh3":{"description":"data/scl/arist_hypenh3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_hypenh4":{"description":"data/scl/arist_hypenh4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_hypenh5":{"description":"data/scl/arist_hypenh5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_intdiat":{"description":"data/scl/arist_intdiat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_penh2":{"description":"data/scl/arist_penh2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_penh3":{"description":"data/scl/arist_penh3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_pschrom2":{"description":"data/scl/arist_pschrom2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_softchrom":{"description":"data/scl/arist_softchrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_softchrom2":{"description":"data/scl/arist_softchrom2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_softchrom3":{"description":"data/scl/arist_softchrom3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_softchrom4":{"description":"data/scl/arist_softchrom4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_softchrom5":{"description":"data/scl/arist_softchrom5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_softdiat":{"description":"data/scl/arist_softdiat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_softdiat2":{"description":"data/scl/arist_softdiat2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_softdiat3":{"description":"data/scl/arist_softdiat3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_softdiat4":{"description":"data/scl/arist_softdiat4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_softdiat5":{"description":"data/scl/arist_softdiat5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_softdiat6":{"description":"data/scl/arist_softdiat6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_softdiat7":{"description":"data/scl/arist_softdiat7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_synchrom":{"description":"data/scl/arist_synchrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_syndiat":{"description":"data/scl/arist_syndiat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_unchrom":{"description":"data/scl/arist_unchrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_unchrom2":{"description":"data/scl/arist_unchrom2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_unchrom3":{"description":"data/scl/arist_unchrom3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arist_unchrom4":{"description":"data/scl/arist_unchrom4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"arnautoff_21":{"description":"data/scl/arnautoff_21.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"aron-neidhardt":{"description":"data/scl/aron-neidhardt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"art_nam":{"description":"data/scl/art_nam.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"artusi":{"description":"data/scl/artusi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"artusi2":{"description":"data/scl/artusi2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"artusi3":{"description":"data/scl/artusi3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"athan_chrom":{"description":"data/scl/athan_chrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"atomschis":{"description":"data/scl/atomschis.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"augdimhextrug":{"description":"data/scl/augdimhextrug.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"augdommean":{"description":"data/scl/augdommean.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"augment15br1":{"description":"data/scl/augment15br1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"augteta":{"description":"data/scl/augteta.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"augteta2":{"description":"data/scl/augteta2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"augtetb":{"description":"data/scl/augtetb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"augtetc":{"description":"data/scl/augtetc.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"augtetd":{"description":"data/scl/augtetd.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"augtete":{"description":"data/scl/augtete.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"augtetf":{"description":"data/scl/augtetf.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"augtetg":{"description":"data/scl/augtetg.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"augteth":{"description":"data/scl/augteth.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"augtetj":{"description":"data/scl/augtetj.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"augtetk":{"description":"data/scl/augtetk.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"augtetl":{"description":"data/scl/augtetl.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"avg_bac":{"description":"data/scl/avg_bac.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"avicenna_17":{"description":"data/scl/avicenna_17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"avicenna_19":{"description":"data/scl/avicenna_19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"avicenna_chrom":{"description":"data/scl/avicenna_chrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"avicenna_chrom2":{"description":"data/scl/avicenna_chrom2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"avicenna_chrom3":{"description":"data/scl/avicenna_chrom3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"avicenna_diat":{"description":"data/scl/avicenna_diat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"avicenna_diat2":{"description":"data/scl/avicenna_diat2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"avicenna_diff":{"description":"data/scl/avicenna_diff.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"avicenna_enh":{"description":"data/scl/avicenna_enh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"awad":{"description":"data/scl/awad.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"awraamoff":{"description":"data/scl/awraamoff.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ayers_19":{"description":"data/scl/ayers_19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ayers_37":{"description":"data/scl/ayers_37.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ayers_me":{"description":"data/scl/ayers_me.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"b10_13":{"description":"data/scl/b10_13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"b12_17":{"description":"data/scl/b12_17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"b14_19":{"description":"data/scl/b14_19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"b15_21":{"description":"data/scl/b15_21.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"b8_11":{"description":"data/scl/b8_11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"badings1":{"description":"data/scl/badings1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"badings2":{"description":"data/scl/badings2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bagpipe1":{"description":"data/scl/bagpipe1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bagpipe2":{"description":"data/scl/bagpipe2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bagpipe3":{"description":"data/scl/bagpipe3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bagpipe4":{"description":"data/scl/bagpipe4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bailey_well":{"description":"data/scl/bailey_well.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bailey_well2":{"description":"data/scl/bailey_well2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bailey_well3":{"description":"data/scl/bailey_well3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"balafon":{"description":"data/scl/balafon.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"balafon2":{"description":"data/scl/balafon2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"balafon3":{"description":"data/scl/balafon3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"balafon4":{"description":"data/scl/balafon4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"balafon5":{"description":"data/scl/balafon5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"balafon6":{"description":"data/scl/balafon6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"balafon7":{"description":"data/scl/balafon7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"baldy17":{"description":"data/scl/baldy17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bamboo":{"description":"data/scl/bamboo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"banchieri":{"description":"data/scl/banchieri.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bapere":{"description":"data/scl/bapere.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"barbour_chrom1":{"description":"data/scl/barbour_chrom1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"barbour_chrom2":{"description":"data/scl/barbour_chrom2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"barbour_chrom3":{"description":"data/scl/barbour_chrom3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"barbour_chrom3p":{"description":"data/scl/barbour_chrom3p.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"barbour_chrom3p2":{"description":"data/scl/barbour_chrom3p2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"barbour_chrom4":{"description":"data/scl/barbour_chrom4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"barbour_chrom4p":{"description":"data/scl/barbour_chrom4p.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"barbour_chrom4p2":{"description":"data/scl/barbour_chrom4p2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"barca":{"description":"data/scl/barca.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"barca_a":{"description":"data/scl/barca_a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"barkechli":{"description":"data/scl/barkechli.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"barlow_13":{"description":"data/scl/barlow_13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"barlow_17":{"description":"data/scl/barlow_17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"barnes":{"description":"data/scl/barnes.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"barnes2":{"description":"data/scl/barnes2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"barton":{"description":"data/scl/barton.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"barton2":{"description":"data/scl/barton2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"battaglia_16":{"description":"data/scl/battaglia_16.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"baumeister":{"description":"data/scl/baumeister.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"beardsley_8":{"description":"data/scl/beardsley_8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bedos":{"description":"data/scl/bedos.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"belet":{"description":"data/scl/belet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bell_mt_partials":{"description":"data/scl/bell_mt_partials.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bellingwolde":{"description":"data/scl/bellingwolde.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bellingwolde_org":{"description":"data/scl/bellingwolde_org.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"belobog31":{"description":"data/scl/belobog31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bemetzrieder2":{"description":"data/scl/bemetzrieder2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bendeler-b":{"description":"data/scl/bendeler-b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bendeler":{"description":"data/scl/bendeler.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bendeler1":{"description":"data/scl/bendeler1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bendeler2":{"description":"data/scl/bendeler2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bendeler3":{"description":"data/scl/bendeler3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bermudo-v":{"description":"data/scl/bermudo-v.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bermudo":{"description":"data/scl/bermudo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bermudo2":{"description":"data/scl/bermudo2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"betacub":{"description":"data/scl/betacub.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bethisy":{"description":"data/scl/bethisy.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"biezen":{"description":"data/scl/biezen.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"biezen2":{"description":"data/scl/biezen2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"biezen3":{"description":"data/scl/biezen3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"biezen_chaumont":{"description":"data/scl/biezen_chaumont.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"biggulp-bunya":{"description":"data/scl/biggulp-bunya.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"biggulp":{"description":"data/scl/biggulp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bigler12":{"description":"data/scl/bigler12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bihex-top":{"description":"data/scl/bihex-top.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bihex540":{"description":"data/scl/bihex540.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bihexany-octoid":{"description":"data/scl/bihexany-octoid.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bihexany":{"description":"data/scl/bihexany.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bihexanymyna":{"description":"data/scl/bihexanymyna.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"billeter":{"description":"data/scl/billeter.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"billeter2":{"description":"data/scl/billeter2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bimarveldenewoo":{"description":"data/scl/bimarveldenewoo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"blackbeat15":{"description":"data/scl/blackbeat15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"blackchrome2":{"description":"data/scl/blackchrome2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"blackj_gws":{"description":"data/scl/blackj_gws.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"blackjack":{"description":"data/scl/blackjack.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"blackjack_r":{"description":"data/scl/blackjack_r.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"blackjack_r2":{"description":"data/scl/blackjack_r2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"blackjack_r3":{"description":"data/scl/blackjack_r3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"blackjackg":{"description":"data/scl/blackjackg.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"blackjb":{"description":"data/scl/blackjb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"blackopkeegil1":{"description":"data/scl/blackopkeegil1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"blackopkeegil2":{"description":"data/scl/blackopkeegil2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"blackwoo":{"description":"data/scl/blackwoo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"blackwood":{"description":"data/scl/blackwood.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"blackwood_6":{"description":"data/scl/blackwood_6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"blackwood_9":{"description":"data/scl/blackwood_9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"blasquinten":{"description":"data/scl/blasquinten.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"blueji-cataclysmic":{"description":"data/scl/blueji-cataclysmic.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bluesmarvwoo":{"description":"data/scl/bluesmarvwoo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bluesrag":{"description":"data/scl/bluesrag.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bobro_phi":{"description":"data/scl/bobro_phi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bobro_phi2":{"description":"data/scl/bobro_phi2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bobrova":{"description":"data/scl/bobrova.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bockhorn":{"description":"data/scl/bockhorn.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"boeth_chrom":{"description":"data/scl/boeth_chrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"boeth_enh":{"description":"data/scl/boeth_enh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen-eg":{"description":"data/scl/bohlen-eg.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen-p":{"description":"data/scl/bohlen-p.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen-p_9":{"description":"data/scl/bohlen-p_9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen-p_9a":{"description":"data/scl/bohlen-p_9a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen-p_eb":{"description":"data/scl/bohlen-p_eb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen-p_ebt":{"description":"data/scl/bohlen-p_ebt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen-p_ebt2":{"description":"data/scl/bohlen-p_ebt2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen-p_et":{"description":"data/scl/bohlen-p_et.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen-p_ring":{"description":"data/scl/bohlen-p_ring.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen-p_sup":{"description":"data/scl/bohlen-p_sup.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen47":{"description":"data/scl/bohlen47.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen47r":{"description":"data/scl/bohlen47r.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen5":{"description":"data/scl/bohlen5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen_11":{"description":"data/scl/bohlen_11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen_12":{"description":"data/scl/bohlen_12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen_8":{"description":"data/scl/bohlen_8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen_arcturus":{"description":"data/scl/bohlen_arcturus.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen_canopus":{"description":"data/scl/bohlen_canopus.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen_coh":{"description":"data/scl/bohlen_coh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen_coh2":{"description":"data/scl/bohlen_coh2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen_coh3":{"description":"data/scl/bohlen_coh3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen_d_ji":{"description":"data/scl/bohlen_d_ji.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen_delta":{"description":"data/scl/bohlen_delta.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen_diat_top":{"description":"data/scl/bohlen_diat_top.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen_enh":{"description":"data/scl/bohlen_enh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen_eq":{"description":"data/scl/bohlen_eq.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen_g_ji":{"description":"data/scl/bohlen_g_ji.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen_gamma":{"description":"data/scl/bohlen_gamma.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen_h_ji":{"description":"data/scl/bohlen_h_ji.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen_harm":{"description":"data/scl/bohlen_harm.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen_l_ji":{"description":"data/scl/bohlen_l_ji.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen_lambda":{"description":"data/scl/bohlen_lambda.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen_lambda_pyth":{"description":"data/scl/bohlen_lambda_pyth.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen_mean":{"description":"data/scl/bohlen_mean.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen_pent_top":{"description":"data/scl/bohlen_pent_top.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen_pyth":{"description":"data/scl/bohlen_pyth.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen_quintuple_j":{"description":"data/scl/bohlen_quintuple_j.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen_quintuple_t":{"description":"data/scl/bohlen_quintuple_t.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen_sirius":{"description":"data/scl/bohlen_sirius.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen_t":{"description":"data/scl/bohlen_t.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bohlen_t_ji":{"description":"data/scl/bohlen_t_ji.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bolivia":{"description":"data/scl/bolivia.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"boomsliter":{"description":"data/scl/boomsliter.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"boop19":{"description":"data/scl/boop19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bossart-muri":{"description":"data/scl/bossart-muri.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bossart1":{"description":"data/scl/bossart1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bossart2":{"description":"data/scl/bossart2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bossart3":{"description":"data/scl/bossart3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bossier11":{"description":"data/scl/bossier11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"boulliau":{"description":"data/scl/boulliau.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bourdelle1":{"description":"data/scl/bourdelle1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bozuji":{"description":"data/scl/bozuji.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bpg55557777":{"description":"data/scl/bpg55557777.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bps_temp17":{"description":"data/scl/bps_temp17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"brac":{"description":"data/scl/brac.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"breed-blues1":{"description":"data/scl/breed-blues1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"breed-blues2":{"description":"data/scl/breed-blues2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"breed-bluesji":{"description":"data/scl/breed-bluesji.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"breed-dias13":{"description":"data/scl/breed-dias13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"breed-ht":{"description":"data/scl/breed-ht.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"breed-kleismic":{"description":"data/scl/breed-kleismic.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"breed-magic":{"description":"data/scl/breed-magic.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"breed-magic5":{"description":"data/scl/breed-magic5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"breed-mystery":{"description":"data/scl/breed-mystery.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"breed":{"description":"data/scl/breed.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"breed11":{"description":"data/scl/breed11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"breed7-3":{"description":"data/scl/breed7-3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"breedball3":{"description":"data/scl/breedball3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"breedball4":{"description":"data/scl/breedball4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"breedpump":{"description":"data/scl/breedpump.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"breedt2":{"description":"data/scl/breedt2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"breedt3":{"description":"data/scl/breedt3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"breetet2":{"description":"data/scl/breetet2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"breetet3":{"description":"data/scl/breetet3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"breeza":{"description":"data/scl/breeza.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"breezb":{"description":"data/scl/breezb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bremmer":{"description":"data/scl/bremmer.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bremmer_ebvt1":{"description":"data/scl/bremmer_ebvt1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bremmer_ebvt2":{"description":"data/scl/bremmer_ebvt2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bremmer_ebvt3":{"description":"data/scl/bremmer_ebvt3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"broadwood":{"description":"data/scl/broadwood.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"broadwood2":{"description":"data/scl/broadwood2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"broadwood3":{"description":"data/scl/broadwood3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"broeckaert-pbp":{"description":"data/scl/broeckaert-pbp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"brown":{"description":"data/scl/brown.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bruder-vier":{"description":"data/scl/bruder-vier.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bruder":{"description":"data/scl/bruder.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bug-pelog":{"description":"data/scl/bug-pelog.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bugblock19":{"description":"data/scl/bugblock19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"burma3":{"description":"data/scl/burma3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"burt1":{"description":"data/scl/burt1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"burt10":{"description":"data/scl/burt10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"burt11":{"description":"data/scl/burt11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"burt12":{"description":"data/scl/burt12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"burt13":{"description":"data/scl/burt13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"burt14":{"description":"data/scl/burt14.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"burt15":{"description":"data/scl/burt15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"burt16":{"description":"data/scl/burt16.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"burt17":{"description":"data/scl/burt17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"burt18":{"description":"data/scl/burt18.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"burt19":{"description":"data/scl/burt19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"burt2":{"description":"data/scl/burt2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"burt20":{"description":"data/scl/burt20.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"burt3":{"description":"data/scl/burt3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"burt4":{"description":"data/scl/burt4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"burt5":{"description":"data/scl/burt5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"burt6":{"description":"data/scl/burt6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"burt7":{"description":"data/scl/burt7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"burt8":{"description":"data/scl/burt8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"burt9":{"description":"data/scl/burt9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"burt_fibo":{"description":"data/scl/burt_fibo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"burt_fibo23":{"description":"data/scl/burt_fibo23.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"burt_forks":{"description":"data/scl/burt_forks.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"burt_primes":{"description":"data/scl/burt_primes.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"buselik pentachord 13-limit":{"description":"data/scl/buselik pentachord 13-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"buselik pentachord 19-limit":{"description":"data/scl/buselik pentachord 19-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"buselik tetrachord 13-limit":{"description":"data/scl/buselik tetrachord 13-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"buselik tetrachord 19-limit":{"description":"data/scl/buselik tetrachord 19-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"bushmen":{"description":"data/scl/bushmen.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"buurman":{"description":"data/scl/buurman.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"buzurg10decoid":{"description":"data/scl/buzurg10decoid.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"buzurg_al-erin10":{"description":"data/scl/buzurg_al-erin10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"c1029cp":{"description":"data/scl/c1029cp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"c10976cp":{"description":"data/scl/c10976cp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"c126cp":{"description":"data/scl/c126cp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"c1728cp":{"description":"data/scl/c1728cp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"c225cp":{"description":"data/scl/c225cp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"c3136cp":{"description":"data/scl/c3136cp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"c385cp":{"description":"data/scl/c385cp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"c5120cp":{"description":"data/scl/c5120cp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"c6144cp":{"description":"data/scl/c6144cp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"c64827cp":{"description":"data/scl/c64827cp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cairo":{"description":"data/scl/cairo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cal46":{"description":"data/scl/cal46.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"canright":{"description":"data/scl/canright.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cantonpenta":{"description":"data/scl/cantonpenta.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"capurso":{"description":"data/scl/capurso.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"carlos_alpha":{"description":"data/scl/carlos_alpha.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"carlos_alpha2":{"description":"data/scl/carlos_alpha2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"carlos_beta":{"description":"data/scl/carlos_beta.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"carlos_beta2":{"description":"data/scl/carlos_beta2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"carlos_gamma":{"description":"data/scl/carlos_gamma.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"carlos_harm":{"description":"data/scl/carlos_harm.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"carlos_super":{"description":"data/scl/carlos_super.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"carlson":{"description":"data/scl/carlson.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cartwheel":{"description":"data/scl/cartwheel.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cassandra1":{"description":"data/scl/cassandra1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cassandra2":{"description":"data/scl/cassandra2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cassmagmirrod":{"description":"data/scl/cassmagmirrod.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cassmagmonkrod":{"description":"data/scl/cassmagmonkrod.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cassmagoctrod":{"description":"data/scl/cassmagoctrod.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cassmagsuprod":{"description":"data/scl/cassmagsuprod.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cat22":{"description":"data/scl/cat22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"catakleismic34":{"description":"data/scl/catakleismic34.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"catakleismic34fok":{"description":"data/scl/catakleismic34fok.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"catakleismic34semitransversal":{"description":"data/scl/catakleismic34semitransversal.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"catakleismic34trans":{"description":"data/scl/catakleismic34trans.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"catler":{"description":"data/scl/catler.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cauldron":{"description":"data/scl/cauldron.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cbrat19":{"description":"data/scl/cbrat19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cdia22":{"description":"data/scl/cdia22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ceb88f":{"description":"data/scl/ceb88f.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ceb88s":{"description":"data/scl/ceb88s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ceb88t":{"description":"data/scl/ceb88t.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet10":{"description":"data/scl/cet10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet100":{"description":"data/scl/cet100.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet100a":{"description":"data/scl/cet100a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet100b":{"description":"data/scl/cet100b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet100c":{"description":"data/scl/cet100c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet104":{"description":"data/scl/cet104.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet104a":{"description":"data/scl/cet104a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet105":{"description":"data/scl/cet105.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet105a":{"description":"data/scl/cet105a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet108":{"description":"data/scl/cet108.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet109":{"description":"data/scl/cet109.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet11":{"description":"data/scl/cet11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet111":{"description":"data/scl/cet111.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet111a":{"description":"data/scl/cet111a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet112":{"description":"data/scl/cet112.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet112a":{"description":"data/scl/cet112a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet114":{"description":"data/scl/cet114.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet115":{"description":"data/scl/cet115.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet116":{"description":"data/scl/cet116.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet117":{"description":"data/scl/cet117.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet117a":{"description":"data/scl/cet117a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet118":{"description":"data/scl/cet118.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet119":{"description":"data/scl/cet119.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet125":{"description":"data/scl/cet125.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet126":{"description":"data/scl/cet126.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet126a":{"description":"data/scl/cet126a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet126b":{"description":"data/scl/cet126b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet133":{"description":"data/scl/cet133.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet135":{"description":"data/scl/cet135.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet139":{"description":"data/scl/cet139.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet14":{"description":"data/scl/cet14.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet140":{"description":"data/scl/cet140.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet141":{"description":"data/scl/cet141.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet148":{"description":"data/scl/cet148.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet152":{"description":"data/scl/cet152.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet156":{"description":"data/scl/cet156.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet158":{"description":"data/scl/cet158.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet159":{"description":"data/scl/cet159.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet16":{"description":"data/scl/cet16.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet160":{"description":"data/scl/cet160.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet160a":{"description":"data/scl/cet160a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet163":{"description":"data/scl/cet163.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet163a":{"description":"data/scl/cet163a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet166":{"description":"data/scl/cet166.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet167":{"description":"data/scl/cet167.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet168":{"description":"data/scl/cet168.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet173":{"description":"data/scl/cet173.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet175":{"description":"data/scl/cet175.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet175a":{"description":"data/scl/cet175a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet175b":{"description":"data/scl/cet175b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet178":{"description":"data/scl/cet178.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet181":{"description":"data/scl/cet181.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet182":{"description":"data/scl/cet182.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet182a":{"description":"data/scl/cet182a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet185":{"description":"data/scl/cet185.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet195":{"description":"data/scl/cet195.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet198":{"description":"data/scl/cet198.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet203":{"description":"data/scl/cet203.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet21":{"description":"data/scl/cet21.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet214":{"description":"data/scl/cet214.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet21k":{"description":"data/scl/cet21k.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet22":{"description":"data/scl/cet22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet222":{"description":"data/scl/cet222.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet227":{"description":"data/scl/cet227.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet22a":{"description":"data/scl/cet22a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet22b":{"description":"data/scl/cet22b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet231":{"description":"data/scl/cet231.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet233":{"description":"data/scl/cet233.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet258":{"description":"data/scl/cet258.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet29":{"description":"data/scl/cet29.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet33":{"description":"data/scl/cet33.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet33a":{"description":"data/scl/cet33a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet34":{"description":"data/scl/cet34.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet35":{"description":"data/scl/cet35.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet38":{"description":"data/scl/cet38.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet39":{"description":"data/scl/cet39.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet39a":{"description":"data/scl/cet39a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet39b":{"description":"data/scl/cet39b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet39c":{"description":"data/scl/cet39c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet39d":{"description":"data/scl/cet39d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet39e":{"description":"data/scl/cet39e.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet39f":{"description":"data/scl/cet39f.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet39g":{"description":"data/scl/cet39g.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet43":{"description":"data/scl/cet43.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet44":{"description":"data/scl/cet44.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet44a":{"description":"data/scl/cet44a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet44b":{"description":"data/scl/cet44b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet45":{"description":"data/scl/cet45.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet45a":{"description":"data/scl/cet45a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet46":{"description":"data/scl/cet46.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet48":{"description":"data/scl/cet48.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet49":{"description":"data/scl/cet49.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet50":{"description":"data/scl/cet50.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet51":{"description":"data/scl/cet51.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet53":{"description":"data/scl/cet53.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet54":{"description":"data/scl/cet54.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet54a":{"description":"data/scl/cet54a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet54b":{"description":"data/scl/cet54b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet54c":{"description":"data/scl/cet54c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet54d":{"description":"data/scl/cet54d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet55":{"description":"data/scl/cet55.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet55a":{"description":"data/scl/cet55a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet55b":{"description":"data/scl/cet55b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet55c":{"description":"data/scl/cet55c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet59":{"description":"data/scl/cet59.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet59a":{"description":"data/scl/cet59a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet63":{"description":"data/scl/cet63.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet63a":{"description":"data/scl/cet63a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet63b":{"description":"data/scl/cet63b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet63c":{"description":"data/scl/cet63c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet63d":{"description":"data/scl/cet63d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet63e":{"description":"data/scl/cet63e.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet63f":{"description":"data/scl/cet63f.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet63g":{"description":"data/scl/cet63g.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet63h":{"description":"data/scl/cet63h.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet63i":{"description":"data/scl/cet63i.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet65":{"description":"data/scl/cet65.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet65a":{"description":"data/scl/cet65a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet67":{"description":"data/scl/cet67.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet67a":{"description":"data/scl/cet67a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet68":{"description":"data/scl/cet68.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet68a":{"description":"data/scl/cet68a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet69":{"description":"data/scl/cet69.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet7":{"description":"data/scl/cet7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet70":{"description":"data/scl/cet70.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet70a":{"description":"data/scl/cet70a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet71":{"description":"data/scl/cet71.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet72":{"description":"data/scl/cet72.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet73":{"description":"data/scl/cet73.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet75":{"description":"data/scl/cet75.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet75a":{"description":"data/scl/cet75a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet76":{"description":"data/scl/cet76.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet77":{"description":"data/scl/cet77.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet78":{"description":"data/scl/cet78.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet78a":{"description":"data/scl/cet78a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet79":{"description":"data/scl/cet79.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet80":{"description":"data/scl/cet80.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet83":{"description":"data/scl/cet83.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet83a":{"description":"data/scl/cet83a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet84":{"description":"data/scl/cet84.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet86":{"description":"data/scl/cet86.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet87":{"description":"data/scl/cet87.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet88":{"description":"data/scl/cet88.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet88_snake":{"description":"data/scl/cet88_snake.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet88b":{"description":"data/scl/cet88b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet88b2":{"description":"data/scl/cet88b2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet88b3":{"description":"data/scl/cet88b3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet88b4":{"description":"data/scl/cet88b4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet88c":{"description":"data/scl/cet88c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet88d":{"description":"data/scl/cet88d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet88e":{"description":"data/scl/cet88e.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet88f":{"description":"data/scl/cet88f.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet88g":{"description":"data/scl/cet88g.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet89":{"description":"data/scl/cet89.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet90":{"description":"data/scl/cet90.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet93":{"description":"data/scl/cet93.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet95":{"description":"data/scl/cet95.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet96":{"description":"data/scl/cet96.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet97":{"description":"data/scl/cet97.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet97a":{"description":"data/scl/cet97a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet98":{"description":"data/scl/cet98.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet98phi":{"description":"data/scl/cet98phi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cet99":{"description":"data/scl/cet99.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chahargah":{"description":"data/scl/chahargah.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chahargah2":{"description":"data/scl/chahargah2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chahargah3":{"description":"data/scl/chahargah3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chalmers":{"description":"data/scl/chalmers.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chalmers_17":{"description":"data/scl/chalmers_17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chalmers_17marvwoo":{"description":"data/scl/chalmers_17marvwoo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chalmers_19":{"description":"data/scl/chalmers_19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chalmers_csurd":{"description":"data/scl/chalmers_csurd.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chalmers_isurd":{"description":"data/scl/chalmers_isurd.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chalmers_ji1":{"description":"data/scl/chalmers_ji1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chalmers_ji2":{"description":"data/scl/chalmers_ji2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chalmers_ji3":{"description":"data/scl/chalmers_ji3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chalmers_ji4":{"description":"data/scl/chalmers_ji4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chalmers_surd":{"description":"data/scl/chalmers_surd.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chalmers_surd2":{"description":"data/scl/chalmers_surd2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chalung":{"description":"data/scl/chalung.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chan34":{"description":"data/scl/chan34.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chargah pentachord 7-limit":{"description":"data/scl/chargah pentachord 7-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chargah tetrachord 7-limit":{"description":"data/scl/chargah tetrachord 7-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chaumont":{"description":"data/scl/chaumont.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chaumont2":{"description":"data/scl/chaumont2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chimes":{"description":"data/scl/chimes.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chimes_peck":{"description":"data/scl/chimes_peck.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chin_12":{"description":"data/scl/chin_12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chin_5":{"description":"data/scl/chin_5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chin_60":{"description":"data/scl/chin_60.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chin_7":{"description":"data/scl/chin_7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chin_bianzhong":{"description":"data/scl/chin_bianzhong.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chin_bianzhong2a":{"description":"data/scl/chin_bianzhong2a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chin_bianzhong2b":{"description":"data/scl/chin_bianzhong2b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chin_bianzhong3":{"description":"data/scl/chin_bianzhong3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chin_bronze":{"description":"data/scl/chin_bronze.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chin_chime":{"description":"data/scl/chin_chime.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chin_ching":{"description":"data/scl/chin_ching.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chin_di":{"description":"data/scl/chin_di.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chin_di2":{"description":"data/scl/chin_di2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chin_huang":{"description":"data/scl/chin_huang.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chin_liu-an":{"description":"data/scl/chin_liu-an.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chin_lu":{"description":"data/scl/chin_lu.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chin_lu2":{"description":"data/scl/chin_lu2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chin_lu3":{"description":"data/scl/chin_lu3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chin_lu3a":{"description":"data/scl/chin_lu3a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chin_lu4":{"description":"data/scl/chin_lu4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chin_lu5":{"description":"data/scl/chin_lu5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chin_lusheng":{"description":"data/scl/chin_lusheng.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chin_mannen":{"description":"data/scl/chin_mannen.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chin_pan":{"description":"data/scl/chin_pan.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chin_pipa":{"description":"data/scl/chin_pipa.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chin_sheng":{"description":"data/scl/chin_sheng.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chin_shierlu":{"description":"data/scl/chin_shierlu.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chin_sientsu":{"description":"data/scl/chin_sientsu.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chin_sona":{"description":"data/scl/chin_sona.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chin_wang-po":{"description":"data/scl/chin_wang-po.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chin_yangqin":{"description":"data/scl/chin_yangqin.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chin_yunlo":{"description":"data/scl/chin_yunlo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chopsticks":{"description":"data/scl/chopsticks.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"choquel":{"description":"data/scl/choquel.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chordal":{"description":"data/scl/chordal.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chrom15":{"description":"data/scl/chrom15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chrom15_inv":{"description":"data/scl/chrom15_inv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chrom15_inv2":{"description":"data/scl/chrom15_inv2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chrom17":{"description":"data/scl/chrom17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chrom17_con":{"description":"data/scl/chrom17_con.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chrom19":{"description":"data/scl/chrom19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chrom19_con":{"description":"data/scl/chrom19_con.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chrom21":{"description":"data/scl/chrom21.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chrom21_inv":{"description":"data/scl/chrom21_inv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chrom21_inv2":{"description":"data/scl/chrom21_inv2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chrom23":{"description":"data/scl/chrom23.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chrom23_con":{"description":"data/scl/chrom23_con.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chrom25":{"description":"data/scl/chrom25.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chrom25_con":{"description":"data/scl/chrom25_con.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chrom27":{"description":"data/scl/chrom27.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chrom27_inv":{"description":"data/scl/chrom27_inv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chrom27_inv2":{"description":"data/scl/chrom27_inv2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chrom29":{"description":"data/scl/chrom29.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chrom29_con":{"description":"data/scl/chrom29_con.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chrom31":{"description":"data/scl/chrom31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chrom31_con":{"description":"data/scl/chrom31_con.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chrom33":{"description":"data/scl/chrom33.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chrom33_con":{"description":"data/scl/chrom33_con.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chrom_new":{"description":"data/scl/chrom_new.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chrom_new2":{"description":"data/scl/chrom_new2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chrom_soft":{"description":"data/scl/chrom_soft.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chrom_soft2":{"description":"data/scl/chrom_soft2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chrom_soft3":{"description":"data/scl/chrom_soft3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chrys_diat-1st-ji":{"description":"data/scl/chrys_diat-1st-ji.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chrys_diatenh-var-ji":{"description":"data/scl/chrys_diatenh-var-ji.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"chrys_enhdiat-var-ji":{"description":"data/scl/chrys_enhdiat-var-ji.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cifariello":{"description":"data/scl/cifariello.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"circ5120":{"description":"data/scl/circ5120.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"circb22":{"description":"data/scl/circb22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"circle31":{"description":"data/scl/circle31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"circls12":{"description":"data/scl/circls12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"circos":{"description":"data/scl/circos.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ckring9":{"description":"data/scl/ckring9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"clampitt_phi":{"description":"data/scl/clampitt_phi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"classr":{"description":"data/scl/classr.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"claudi-enigma":{"description":"data/scl/claudi-enigma.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"clipper100":{"description":"data/scl/clipper100.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"clipper1029":{"description":"data/scl/clipper1029.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"clipper105":{"description":"data/scl/clipper105.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"clipper121":{"description":"data/scl/clipper121.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"clipper126":{"description":"data/scl/clipper126.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"clipper144":{"description":"data/scl/clipper144.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"clipper169":{"description":"data/scl/clipper169.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"clipper176":{"description":"data/scl/clipper176.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"clipper2048":{"description":"data/scl/clipper2048.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"clipper225":{"description":"data/scl/clipper225.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"clipper243":{"description":"data/scl/clipper243.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"clipper245":{"description":"data/scl/clipper245.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"clipper245242":{"description":"data/scl/clipper245242.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"clipper3125":{"description":"data/scl/clipper3125.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"clipper3136":{"description":"data/scl/clipper3136.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"clipper385":{"description":"data/scl/clipper385.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"clipper4000":{"description":"data/scl/clipper4000.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"clipper5120":{"description":"data/scl/clipper5120.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"clipper6144":{"description":"data/scl/clipper6144.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"clipper625":{"description":"data/scl/clipper625.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"clipper640":{"description":"data/scl/clipper640.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"clipper65536":{"description":"data/scl/clipper65536.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"clipper65625":{"description":"data/scl/clipper65625.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"clipper81":{"description":"data/scl/clipper81.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"clipper896":{"description":"data/scl/clipper896.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"clipper99":{"description":"data/scl/clipper99.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cluster":{"description":"data/scl/cluster.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cluster6c":{"description":"data/scl/cluster6c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cluster6d":{"description":"data/scl/cluster6d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cluster6e":{"description":"data/scl/cluster6e.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cluster6f":{"description":"data/scl/cluster6f.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cluster6g":{"description":"data/scl/cluster6g.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cluster6i":{"description":"data/scl/cluster6i.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cluster6j":{"description":"data/scl/cluster6j.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cluster8b":{"description":"data/scl/cluster8b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cluster8c":{"description":"data/scl/cluster8c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cluster8d":{"description":"data/scl/cluster8d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cluster8e":{"description":"data/scl/cluster8e.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cluster8f":{"description":"data/scl/cluster8f.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cluster8h":{"description":"data/scl/cluster8h.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cluster8i":{"description":"data/scl/cluster8i.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cluster8j":{"description":"data/scl/cluster8j.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cohenf_11":{"description":"data/scl/cohenf_11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"coherent49":{"description":"data/scl/coherent49.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"coleman10":{"description":"data/scl/coleman10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"coleman11":{"description":"data/scl/coleman11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"coleman16":{"description":"data/scl/coleman16.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"coleman4":{"description":"data/scl/coleman4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"coll7":{"description":"data/scl/coll7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"collangettes":{"description":"data/scl/collangettes.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"collapsar":{"description":"data/scl/collapsar.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"colonna1":{"description":"data/scl/colonna1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"colonna2":{"description":"data/scl/colonna2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"compton48":{"description":"data/scl/compton48.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"concertina":{"description":"data/scl/concertina.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cons11":{"description":"data/scl/cons11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cons12":{"description":"data/scl/cons12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cons13":{"description":"data/scl/cons13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cons14":{"description":"data/scl/cons14.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cons15":{"description":"data/scl/cons15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cons16":{"description":"data/scl/cons16.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cons17":{"description":"data/scl/cons17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cons18":{"description":"data/scl/cons18.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cons19":{"description":"data/scl/cons19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cons20":{"description":"data/scl/cons20.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cons21":{"description":"data/scl/cons21.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cons8":{"description":"data/scl/cons8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cons9":{"description":"data/scl/cons9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cons_5":{"description":"data/scl/cons_5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cons_7":{"description":"data/scl/cons_7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cons_7a":{"description":"data/scl/cons_7a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cont_frac1":{"description":"data/scl/cont_frac1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cont_frac2":{"description":"data/scl/cont_frac2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"corner11":{"description":"data/scl/corner11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"corner13":{"description":"data/scl/corner13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"corner17":{"description":"data/scl/corner17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"corner17a":{"description":"data/scl/corner17a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"corner7":{"description":"data/scl/corner7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"corner9":{"description":"data/scl/corner9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"corners11":{"description":"data/scl/corners11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"corners13":{"description":"data/scl/corners13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"corners7":{"description":"data/scl/corners7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"corrette":{"description":"data/scl/corrette.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"corrette2":{"description":"data/scl/corrette2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"corrette3":{"description":"data/scl/corrette3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"coul_12":{"description":"data/scl/coul_12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"coul_12a":{"description":"data/scl/coul_12a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"coul_12sup":{"description":"data/scl/coul_12sup.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"coul_13":{"description":"data/scl/coul_13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"coul_17sup":{"description":"data/scl/coul_17sup.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"coul_20":{"description":"data/scl/coul_20.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"coul_27":{"description":"data/scl/coul_27.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"counterschismic":{"description":"data/scl/counterschismic.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"couperin":{"description":"data/scl/couperin.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"couperin_org":{"description":"data/scl/couperin_org.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cpak19a":{"description":"data/scl/cpak19a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cpak19b":{"description":"data/scl/cpak19b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cross13":{"description":"data/scl/cross13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cross2":{"description":"data/scl/cross2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cross2_5":{"description":"data/scl/cross2_5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cross2_7":{"description":"data/scl/cross2_7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cross3":{"description":"data/scl/cross3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cross_7":{"description":"data/scl/cross_7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cross_72":{"description":"data/scl/cross_72.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cross_7a":{"description":"data/scl/cross_7a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"crossbone1":{"description":"data/scl/crossbone1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cruciform":{"description":"data/scl/cruciform.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cube3":{"description":"data/scl/cube3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cube3enn":{"description":"data/scl/cube3enn.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cube4":{"description":"data/scl/cube4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cube4enn":{"description":"data/scl/cube4enn.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cv1":{"description":"data/scl/cv1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cv11":{"description":"data/scl/cv11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cv13":{"description":"data/scl/cv13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cv5":{"description":"data/scl/cv5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cv7":{"description":"data/scl/cv7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cv9":{"description":"data/scl/cv9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cw12_11":{"description":"data/scl/cw12_11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cw19_11":{"description":"data/scl/cw19_11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cw19_5":{"description":"data/scl/cw19_5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cw19_7":{"description":"data/scl/cw19_7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cx4":{"description":"data/scl/cx4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cxi1":{"description":"data/scl/cxi1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cxi3":{"description":"data/scl/cxi3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"cycle19":{"description":"data/scl/cycle19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dakota-sun19":{"description":"data/scl/dakota-sun19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dakota-sun24":{"description":"data/scl/dakota-sun24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dan_seman":{"description":"data/scl/dan_seman.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dan_semantic":{"description":"data/scl/dan_semantic.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dan_semantix":{"description":"data/scl/dan_semantix.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"danielou5_53":{"description":"data/scl/danielou5_53.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"danielou_53":{"description":"data/scl/danielou_53.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"darreg":{"description":"data/scl/darreg.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"darreg_ennea":{"description":"data/scl/darreg_ennea.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"darreg_genus":{"description":"data/scl/darreg_genus.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"darreg_genus2":{"description":"data/scl/darreg_genus2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"david11":{"description":"data/scl/david11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"david7":{"description":"data/scl/david7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dcon9marvwoo":{"description":"data/scl/dcon9marvwoo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dconv11marv":{"description":"data/scl/dconv11marv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dconv9gam":{"description":"data/scl/dconv9gam.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dconv9marv":{"description":"data/scl/dconv9marv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ddimlim1":{"description":"data/scl/ddimlim1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"de_caus":{"description":"data/scl/de_caus.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dean_81primes":{"description":"data/scl/dean_81primes.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dean_91primes":{"description":"data/scl/dean_91primes.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"degung-sejati":{"description":"data/scl/degung-sejati.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"degung1":{"description":"data/scl/degung1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"degung2":{"description":"data/scl/degung2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"degung3":{"description":"data/scl/degung3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"degung4":{"description":"data/scl/degung4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"degung5":{"description":"data/scl/degung5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"degung6":{"description":"data/scl/degung6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"deka1029":{"description":"data/scl/deka1029.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"deka126":{"description":"data/scl/deka126.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"deka1728":{"description":"data/scl/deka1728.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"deka225":{"description":"data/scl/deka225.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"deka2401":{"description":"data/scl/deka2401.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"deka245":{"description":"data/scl/deka245.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"deka3136":{"description":"data/scl/deka3136.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"deka4375":{"description":"data/scl/deka4375.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"deka5120":{"description":"data/scl/deka5120.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"deka6144":{"description":"data/scl/deka6144.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"deka65625":{"description":"data/scl/deka65625.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"deka875":{"description":"data/scl/deka875.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dekany-cs-marv":{"description":"data/scl/dekany-cs-marv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dekany-cs":{"description":"data/scl/dekany-cs.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dekany":{"description":"data/scl/dekany.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dekany2":{"description":"data/scl/dekany2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dekany3":{"description":"data/scl/dekany3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dekany4":{"description":"data/scl/dekany4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dekany_agni":{"description":"data/scl/dekany_agni.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dekany_apollo":{"description":"data/scl/dekany_apollo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dekany_guanyin":{"description":"data/scl/dekany_guanyin.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dekany_indra":{"description":"data/scl/dekany_indra.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dekany_jove":{"description":"data/scl/dekany_jove.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dekany_laka":{"description":"data/scl/dekany_laka.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dekany_laka205":{"description":"data/scl/dekany_laka205.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dekany_marvel":{"description":"data/scl/dekany_marvel.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dekany_minerva":{"description":"data/scl/dekany_minerva.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dekany_pele":{"description":"data/scl/dekany_pele.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dekany_portent":{"description":"data/scl/dekany_portent.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dekany_prodigy":{"description":"data/scl/dekany_prodigy.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dekany_sensamagic":{"description":"data/scl/dekany_sensamagic.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dekany_spectacle":{"description":"data/scl/dekany_spectacle.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dekany_thrush":{"description":"data/scl/dekany_thrush.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dekany_union":{"description":"data/scl/dekany_union.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dekany_zeus":{"description":"data/scl/dekany_zeus.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dekanymarvwoo":{"description":"data/scl/dekanymarvwoo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dent-yn-rwt":{"description":"data/scl/dent-yn-rwt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dent":{"description":"data/scl/dent.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dent2":{"description":"data/scl/dent2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dent3":{"description":"data/scl/dent3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dent4":{"description":"data/scl/dent4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dent_19otti":{"description":"data/scl/dent_19otti.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dent_berger":{"description":"data/scl/dent_berger.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dent_mean7":{"description":"data/scl/dent_mean7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"deporcy":{"description":"data/scl/deporcy.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diab17a":{"description":"data/scl/diab17a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diab17bb":{"description":"data/scl/diab17bb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diab17cb":{"description":"data/scl/diab17cb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diab17db":{"description":"data/scl/diab17db.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diab19_612":{"description":"data/scl/diab19_612.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diab19_72":{"description":"data/scl/diab19_72.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diab19a":{"description":"data/scl/diab19a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diab19ab":{"description":"data/scl/diab19ab.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diablack":{"description":"data/scl/diablack.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diabree":{"description":"data/scl/diabree.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diachrome1":{"description":"data/scl/diachrome1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diaconv1029":{"description":"data/scl/diaconv1029.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diaconv225":{"description":"data/scl/diaconv225.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diaconv2401":{"description":"data/scl/diaconv2401.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diaconv2401t":{"description":"data/scl/diaconv2401t.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diaconv3136":{"description":"data/scl/diaconv3136.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diaconv4375":{"description":"data/scl/diaconv4375.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diaconv5120":{"description":"data/scl/diaconv5120.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diaconv6144":{"description":"data/scl/diaconv6144.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diacycle13":{"description":"data/scl/diacycle13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diaddim1":{"description":"data/scl/diaddim1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dialim1":{"description":"data/scl/dialim1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diam19":{"description":"data/scl/diam19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diamin7":{"description":"data/scl/diamin7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diamin7_72":{"description":"data/scl/diamin7_72.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diamin7marv":{"description":"data/scl/diamin7marv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diamisty":{"description":"data/scl/diamisty.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diamond11a":{"description":"data/scl/diamond11a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diamond11ak":{"description":"data/scl/diamond11ak.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diamond11map":{"description":"data/scl/diamond11map.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diamond11strange":{"description":"data/scl/diamond11strange.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diamond11tr":{"description":"data/scl/diamond11tr.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diamond15":{"description":"data/scl/diamond15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diamond17":{"description":"data/scl/diamond17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diamond17a":{"description":"data/scl/diamond17a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diamond17b":{"description":"data/scl/diamond17b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diamond19":{"description":"data/scl/diamond19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diamond27":{"description":"data/scl/diamond27.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diamond7-13":{"description":"data/scl/diamond7-13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diamond7":{"description":"data/scl/diamond7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diamond7_126":{"description":"data/scl/diamond7_126.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diamond7_225":{"description":"data/scl/diamond7_225.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diamond9":{"description":"data/scl/diamond9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diamond9_875":{"description":"data/scl/diamond9_875.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diamond9block":{"description":"data/scl/diamond9block.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diamond9keemic":{"description":"data/scl/diamond9keemic.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diamond9plus":{"description":"data/scl/diamond9plus.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diamond_chess":{"description":"data/scl/diamond_chess.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diamond_chess11":{"description":"data/scl/diamond_chess11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diamond_dup":{"description":"data/scl/diamond_dup.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diamond_mod":{"description":"data/scl/diamond_mod.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diamond_tetr":{"description":"data/scl/diamond_tetr.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diamondupblock":{"description":"data/scl/diamondupblock.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diaphonic_10":{"description":"data/scl/diaphonic_10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diaphonic_12":{"description":"data/scl/diaphonic_12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diaphonic_12a":{"description":"data/scl/diaphonic_12a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diaphonic_7":{"description":"data/scl/diaphonic_7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diat13":{"description":"data/scl/diat13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diat15":{"description":"data/scl/diat15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diat15_inv":{"description":"data/scl/diat15_inv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diat17":{"description":"data/scl/diat17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diat19":{"description":"data/scl/diat19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diat21":{"description":"data/scl/diat21.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diat21_inv":{"description":"data/scl/diat21_inv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diat23":{"description":"data/scl/diat23.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diat25":{"description":"data/scl/diat25.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diat27":{"description":"data/scl/diat27.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diat27_inv":{"description":"data/scl/diat27_inv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diat29":{"description":"data/scl/diat29.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diat31":{"description":"data/scl/diat31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diat33":{"description":"data/scl/diat33.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diat_chrom":{"description":"data/scl/diat_chrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diat_dies2":{"description":"data/scl/diat_dies2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diat_dies5":{"description":"data/scl/diat_dies5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diat_enh":{"description":"data/scl/diat_enh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diat_enh2":{"description":"data/scl/diat_enh2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diat_enh3":{"description":"data/scl/diat_enh3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diat_enh4":{"description":"data/scl/diat_enh4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diat_enh5":{"description":"data/scl/diat_enh5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diat_enh6":{"description":"data/scl/diat_enh6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diat_eq":{"description":"data/scl/diat_eq.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diat_eq2":{"description":"data/scl/diat_eq2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diat_hemchrom":{"description":"data/scl/diat_hemchrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diat_smal":{"description":"data/scl/diat_smal.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diat_sofchrom":{"description":"data/scl/diat_sofchrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diat_soft":{"description":"data/scl/diat_soft.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diat_soft2":{"description":"data/scl/diat_soft2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diat_soft3":{"description":"data/scl/diat_soft3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diat_soft4":{"description":"data/scl/diat_soft4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"didy_chrom":{"description":"data/scl/didy_chrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"didy_chrom1":{"description":"data/scl/didy_chrom1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"didy_chrom2":{"description":"data/scl/didy_chrom2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"didy_chrom3":{"description":"data/scl/didy_chrom3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"didy_diat":{"description":"data/scl/didy_diat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"didy_enh":{"description":"data/scl/didy_enh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"didy_enh2":{"description":"data/scl/didy_enh2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"didymus19sync":{"description":"data/scl/didymus19sync.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diesic-m":{"description":"data/scl/diesic-m.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diesic-t":{"description":"data/scl/diesic-t.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diff19-9-4":{"description":"data/scl/diff19-9-4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diff31-h8":{"description":"data/scl/diff31-h8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diff31-q":{"description":"data/scl/diff31-q.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diff31_72":{"description":"data/scl/diff31_72.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"diminished":{"description":"data/scl/diminished.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dimteta":{"description":"data/scl/dimteta.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dimtetb":{"description":"data/scl/dimtetb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dint":{"description":"data/scl/dint.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"div_fifth1":{"description":"data/scl/div_fifth1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"div_fifth2":{"description":"data/scl/div_fifth2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"div_fifth3":{"description":"data/scl/div_fifth3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"div_fifth4":{"description":"data/scl/div_fifth4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"div_fifth5":{"description":"data/scl/div_fifth5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"divine9":{"description":"data/scl/divine9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dkring1":{"description":"data/scl/dkring1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dkring2":{"description":"data/scl/dkring2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dkring3":{"description":"data/scl/dkring3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dkring4":{"description":"data/scl/dkring4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dodeceny":{"description":"data/scl/dodeceny.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"domdimpajinjschis":{"description":"data/scl/domdimpajinjschis.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"donar46":{"description":"data/scl/donar46.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dorian_chrom":{"description":"data/scl/dorian_chrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dorian_chrom2":{"description":"data/scl/dorian_chrom2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dorian_chrominv":{"description":"data/scl/dorian_chrominv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dorian_diat":{"description":"data/scl/dorian_diat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dorian_diat2":{"description":"data/scl/dorian_diat2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dorian_diat2inv":{"description":"data/scl/dorian_diat2inv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dorian_diatcon":{"description":"data/scl/dorian_diatcon.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dorian_diatred11":{"description":"data/scl/dorian_diatred11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dorian_enh":{"description":"data/scl/dorian_enh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dorian_enh2":{"description":"data/scl/dorian_enh2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dorian_enhinv":{"description":"data/scl/dorian_enhinv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dorian_pent":{"description":"data/scl/dorian_pent.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dorian_pis":{"description":"data/scl/dorian_pis.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dorian_schl":{"description":"data/scl/dorian_schl.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dorian_tri1":{"description":"data/scl/dorian_tri1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dorian_tri2":{"description":"data/scl/dorian_tri2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"doty_14":{"description":"data/scl/doty_14.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"doublediadie":{"description":"data/scl/doublediadie.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"douwes":{"description":"data/scl/douwes.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dow_high":{"description":"data/scl/dow_high.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dow_lmh":{"description":"data/scl/dow_lmh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dow_low":{"description":"data/scl/dow_low.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dow_middle":{"description":"data/scl/dow_middle.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dowland_12":{"description":"data/scl/dowland_12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"druri":{"description":"data/scl/druri.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_12_of_19-ht":{"description":"data/scl/dudon_12_of_19-ht.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_19-l_rocky_hwt":{"description":"data/scl/dudon_19-l_rocky_hwt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_3-limit_with429":{"description":"data/scl/dudon_3-limit_with429.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_a":{"description":"data/scl/dudon_a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_afshari":{"description":"data/scl/dudon_afshari.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_aka":{"description":"data/scl/dudon_aka.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_aksand":{"description":"data/scl/dudon_aksand.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_aluna":{"description":"data/scl/dudon_aluna.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_amlak":{"description":"data/scl/dudon_amlak.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_appalachian":{"description":"data/scl/dudon_appalachian.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_are-are_tapping":{"description":"data/scl/dudon_are-are_tapping.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_are-are_women1":{"description":"data/scl/dudon_are-are_women1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_are-are_women2":{"description":"data/scl/dudon_are-are_women2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_armadillo":{"description":"data/scl/dudon_armadillo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_atlantis":{"description":"data/scl/dudon_atlantis.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_aulos":{"description":"data/scl/dudon_aulos.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_b":{"description":"data/scl/dudon_b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_baka":{"description":"data/scl/dudon_baka.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_bala_ribbon":{"description":"data/scl/dudon_bala_ribbon.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_bala_ribbon19":{"description":"data/scl/dudon_bala_ribbon19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_bala_ribbon24":{"description":"data/scl/dudon_bala_ribbon24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_balafon_semifo":{"description":"data/scl/dudon_balafon_semifo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_balasept-above":{"description":"data/scl/dudon_balasept-above.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_balasept-under":{"description":"data/scl/dudon_balasept-under.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_bali-balaeb_14":{"description":"data/scl/dudon_bali-balaeb_14.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_bambara":{"description":"data/scl/dudon_bambara.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_bayati_in_d":{"description":"data/scl/dudon_bayati_in_d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_baziguzuk":{"description":"data/scl/dudon_baziguzuk.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_bhairav":{"description":"data/scl/dudon_bhairav.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_bhairavi":{"description":"data/scl/dudon_bhairavi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_bhatiyar":{"description":"data/scl/dudon_bhatiyar.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_bhavapriya":{"description":"data/scl/dudon_bhavapriya.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_brazil":{"description":"data/scl/dudon_brazil.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_burma":{"description":"data/scl/dudon_burma.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_buzurg":{"description":"data/scl/dudon_buzurg.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_byzantine":{"description":"data/scl/dudon_byzantine.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_c1":{"description":"data/scl/dudon_c1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_c12":{"description":"data/scl/dudon_c12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_chandrakaus":{"description":"data/scl/dudon_chandrakaus.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_chiffonie":{"description":"data/scl/dudon_chiffonie.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_chromatic_subh":{"description":"data/scl/dudon_chromatic_subh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_coherent_shrutis":{"description":"data/scl/dudon_coherent_shrutis.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_cometslendro1":{"description":"data/scl/dudon_cometslendro1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_cometslendro2":{"description":"data/scl/dudon_cometslendro2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_comptine":{"description":"data/scl/dudon_comptine.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_comptine_h3":{"description":"data/scl/dudon_comptine_h3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_country_blues":{"description":"data/scl/dudon_country_blues.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_countrysongs":{"description":"data/scl/dudon_countrysongs.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_crying_commas":{"description":"data/scl/dudon_crying_commas.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_darbari":{"description":"data/scl/dudon_darbari.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_diat":{"description":"data/scl/dudon_diat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_diatess":{"description":"data/scl/dudon_diatess.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_didymus":{"description":"data/scl/dudon_didymus.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_egyptian_rast":{"description":"data/scl/dudon_egyptian_rast.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_evan_thai":{"description":"data/scl/dudon_evan_thai.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_flamenca":{"description":"data/scl/dudon_flamenca.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_fong":{"description":"data/scl/dudon_fong.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_gayakapriya":{"description":"data/scl/dudon_gayakapriya.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_gnawa-pelog":{"description":"data/scl/dudon_gnawa-pelog.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_golden_h7eb":{"description":"data/scl/dudon_golden_h7eb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_gulu-nem":{"description":"data/scl/dudon_gulu-nem.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_harm_minor":{"description":"data/scl/dudon_harm_minor.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_harry":{"description":"data/scl/dudon_harry.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_hawaiian":{"description":"data/scl/dudon_hawaiian.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_hijazira":{"description":"data/scl/dudon_hijazira.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_hiroyoshi":{"description":"data/scl/dudon_hiroyoshi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_homayun":{"description":"data/scl/dudon_homayun.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_hoomi":{"description":"data/scl/dudon_hoomi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_ifbis":{"description":"data/scl/dudon_ifbis.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_iph-arax":{"description":"data/scl/dudon_iph-arax.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_isrep":{"description":"data/scl/dudon_isrep.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_jamlak":{"description":"data/scl/dudon_jamlak.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_jazz":{"description":"data/scl/dudon_jazz.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_jobim":{"description":"data/scl/dudon_jobim.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_jog":{"description":"data/scl/dudon_jog.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_joged-bumbung":{"description":"data/scl/dudon_joged-bumbung.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_kalyana":{"description":"data/scl/dudon_kalyana.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_kanakangi":{"description":"data/scl/dudon_kanakangi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_kellner_eb":{"description":"data/scl/dudon_kellner_eb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_kidarvani":{"description":"data/scl/dudon_kidarvani.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_kirvanti":{"description":"data/scl/dudon_kirvanti.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_kora-chimere":{"description":"data/scl/dudon_kora-chimere.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_kora_snd":{"description":"data/scl/dudon_kora_snd.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_kumoyoshi_19-l":{"description":"data/scl/dudon_kumoyoshi_19-l.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_lakota":{"description":"data/scl/dudon_lakota.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_liane":{"description":"data/scl/dudon_liane.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_lucie":{"description":"data/scl/dudon_lucie.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_madhuvanti":{"description":"data/scl/dudon_madhuvanti.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_mahur":{"description":"data/scl/dudon_mahur.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_mandinka":{"description":"data/scl/dudon_mandinka.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_marovany":{"description":"data/scl/dudon_marovany.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_marva":{"description":"data/scl/dudon_marva.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_meancaline":{"description":"data/scl/dudon_meancaline.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_melkis":{"description":"data/scl/dudon_melkis.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_melkis_3f":{"description":"data/scl/dudon_melkis_3f.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_meso-iph12":{"description":"data/scl/dudon_meso-iph12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_meso-iph7":{"description":"data/scl/dudon_meso-iph7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_michemine":{"description":"data/scl/dudon_michemine.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_moha_baya":{"description":"data/scl/dudon_moha_baya.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_mohajira":{"description":"data/scl/dudon_mohajira.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_mohajira117":{"description":"data/scl/dudon_mohajira117.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_mohajira_r":{"description":"data/scl/dudon_mohajira_r.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_mougi":{"description":"data/scl/dudon_mougi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_mounos":{"description":"data/scl/dudon_mounos.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_nan-kouan":{"description":"data/scl/dudon_nan-kouan.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_napolitan":{"description":"data/scl/dudon_napolitan.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_natte":{"description":"data/scl/dudon_natte.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_nung-phan1":{"description":"data/scl/dudon_nung-phan1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_nung-phan2":{"description":"data/scl/dudon_nung-phan2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_okna_hwt":{"description":"data/scl/dudon_okna_hwt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_over-under_ht":{"description":"data/scl/dudon_over-under_ht.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_pelog_35":{"description":"data/scl/dudon_pelog_35.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_pelog_59":{"description":"data/scl/dudon_pelog_59.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_pelog_ambi":{"description":"data/scl/dudon_pelog_ambi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_phi13":{"description":"data/scl/dudon_phi13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_phidiama":{"description":"data/scl/dudon_phidiama.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_piphat":{"description":"data/scl/dudon_piphat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_piphat_min":{"description":"data/scl/dudon_piphat_min.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_purvi":{"description":"data/scl/dudon_purvi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_quechua":{"description":"data/scl/dudon_quechua.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_raph":{"description":"data/scl/dudon_raph.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_rast-iph39":{"description":"data/scl/dudon_rast-iph39.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_rast-iph63":{"description":"data/scl/dudon_rast-iph63.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_rast-mohajira":{"description":"data/scl/dudon_rast-mohajira.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_rast_matrix":{"description":"data/scl/dudon_rast_matrix.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_rebab":{"description":"data/scl/dudon_rebab.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_s-n-buzurg":{"description":"data/scl/dudon_s-n-buzurg.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_saba-c":{"description":"data/scl/dudon_saba-c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_sapaan":{"description":"data/scl/dudon_sapaan.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_saqqara":{"description":"data/scl/dudon_saqqara.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_satara":{"description":"data/scl/dudon_satara.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_saung_gauk":{"description":"data/scl/dudon_saung_gauk.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_segah":{"description":"data/scl/dudon_segah.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_segah_subh":{"description":"data/scl/dudon_segah_subh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_septimal_2":{"description":"data/scl/dudon_septimal_2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_septimal_3":{"description":"data/scl/dudon_septimal_3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_shaku":{"description":"data/scl/dudon_shaku.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_shri_rag":{"description":"data/scl/dudon_shri_rag.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_shur":{"description":"data/scl/dudon_shur.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_siam_97":{"description":"data/scl/dudon_siam_97.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_simdek":{"description":"data/scl/dudon_simdek.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_sireine_f":{"description":"data/scl/dudon_sireine_f.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_skisni":{"description":"data/scl/dudon_skisni.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_skisni_hwt":{"description":"data/scl/dudon_skisni_hwt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_slendra":{"description":"data/scl/dudon_slendra.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_slendro_m-mean":{"description":"data/scl/dudon_slendro_m-mean.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_slendro_matrix":{"description":"data/scl/dudon_slendro_matrix.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_smallest_numbers":{"description":"data/scl/dudon_smallest_numbers.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_soria":{"description":"data/scl/dudon_soria.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_soria12":{"description":"data/scl/dudon_soria12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_sumer":{"description":"data/scl/dudon_sumer.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_synch12":{"description":"data/scl/dudon_synch12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_tango":{"description":"data/scl/dudon_tango.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_thai":{"description":"data/scl/dudon_thai.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_thai2":{"description":"data/scl/dudon_thai2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_thai3":{"description":"data/scl/dudon_thai3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_tibet":{"description":"data/scl/dudon_tibet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_tielenka":{"description":"data/scl/dudon_tielenka.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_timbila":{"description":"data/scl/dudon_timbila.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_tit_fleur":{"description":"data/scl/dudon_tit_fleur.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_todi":{"description":"data/scl/dudon_todi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_tsaharuk24":{"description":"data/scl/dudon_tsaharuk24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_valiha":{"description":"data/scl/dudon_valiha.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_werckmeister3_eb":{"description":"data/scl/dudon_werckmeister3_eb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_x-slen_31":{"description":"data/scl/dudon_x-slen_31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_zinith":{"description":"data/scl/dudon_zinith.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_ziraat":{"description":"data/scl/dudon_ziraat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dudon_zurna":{"description":"data/scl/dudon_zurna.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"duncan":{"description":"data/scl/duncan.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"duoden12":{"description":"data/scl/duoden12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"duodenarium":{"description":"data/scl/duodenarium.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"duodene":{"description":"data/scl/duodene.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"duodene14-18-21":{"description":"data/scl/duodene14-18-21.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"duodene3-11_9":{"description":"data/scl/duodene3-11_9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"duodene6-7-9":{"description":"data/scl/duodene6-7-9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"duodene_double":{"description":"data/scl/duodene_double.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"duodene_min":{"description":"data/scl/duodene_min.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"duodene_r-45":{"description":"data/scl/duodene_r-45.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"duodene_r45":{"description":"data/scl/duodene_r45.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"duodene_skew":{"description":"data/scl/duodene_skew.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"duodene_t":{"description":"data/scl/duodene_t.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"duodene_w":{"description":"data/scl/duodene_w.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"duohex":{"description":"data/scl/duohex.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"duohexmarvwoo":{"description":"data/scl/duohexmarvwoo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dwarf11marv":{"description":"data/scl/dwarf11marv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dwarf12_11":{"description":"data/scl/dwarf12_11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dwarf12_11marvwoo":{"description":"data/scl/dwarf12_11marvwoo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dwarf12_7":{"description":"data/scl/dwarf12_7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dwarf12marv":{"description":"data/scl/dwarf12marv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dwarf13_7d":{"description":"data/scl/dwarf13_7d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dwarf13marv":{"description":"data/scl/dwarf13marv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dwarf14block":{"description":"data/scl/dwarf14block.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dwarf14c7-hecate":{"description":"data/scl/dwarf14c7-hecate.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dwarf14marv":{"description":"data/scl/dwarf14marv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dwarf15marv":{"description":"data/scl/dwarf15marv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dwarf15marvwoo":{"description":"data/scl/dwarf15marvwoo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dwarf16marv":{"description":"data/scl/dwarf16marv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dwarf17marv":{"description":"data/scl/dwarf17marv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dwarf17marveq":{"description":"data/scl/dwarf17marveq.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dwarf17marvwoo":{"description":"data/scl/dwarf17marvwoo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dwarf18marv":{"description":"data/scl/dwarf18marv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dwarf19_43":{"description":"data/scl/dwarf19_43.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dwarf19marv":{"description":"data/scl/dwarf19marv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dwarf20marv":{"description":"data/scl/dwarf20marv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dwarf21marv":{"description":"data/scl/dwarf21marv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dwarf22_77":{"description":"data/scl/dwarf22_77.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dwarf22marv":{"description":"data/scl/dwarf22marv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dwarf25marv":{"description":"data/scl/dwarf25marv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dwarf271_bp":{"description":"data/scl/dwarf271_bp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dwarf27_7tempered":{"description":"data/scl/dwarf27_7tempered.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dwarf31_11":{"description":"data/scl/dwarf31_11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dwart14block":{"description":"data/scl/dwart14block.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"dyadic53tone9div":{"description":"data/scl/dyadic53tone9div.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"edson17":{"description":"data/scl/edson17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg333":{"description":"data/scl/efg333.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg333333333337":{"description":"data/scl/efg333333333337.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg333333355":{"description":"data/scl/efg333333355.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg33335":{"description":"data/scl/efg33335.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg3333555":{"description":"data/scl/efg3333555.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg33335555":{"description":"data/scl/efg33335555.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg333355577":{"description":"data/scl/efg333355577.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg333357":{"description":"data/scl/efg333357.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg33337":{"description":"data/scl/efg33337.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg3335":{"description":"data/scl/efg3335.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg33355":{"description":"data/scl/efg33355.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg333555":{"description":"data/scl/efg333555.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg33355555":{"description":"data/scl/efg33355555.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg333555777":{"description":"data/scl/efg333555777.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg333555plusmarvwoo":{"description":"data/scl/efg333555plusmarvwoo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg333557":{"description":"data/scl/efg333557.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg33357":{"description":"data/scl/efg33357.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg3335711":{"description":"data/scl/efg3335711.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg333577":{"description":"data/scl/efg333577.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg3337":{"description":"data/scl/efg3337.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg33377":{"description":"data/scl/efg33377.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg335":{"description":"data/scl/efg335.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg3355":{"description":"data/scl/efg3355.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg33555":{"description":"data/scl/efg33555.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg335555577":{"description":"data/scl/efg335555577.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg335555marvwoo":{"description":"data/scl/efg335555marvwoo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg33555marvwoo":{"description":"data/scl/efg33555marvwoo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg33557":{"description":"data/scl/efg33557.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg335577":{"description":"data/scl/efg335577.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg3357":{"description":"data/scl/efg3357.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg335711":{"description":"data/scl/efg335711.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg33577":{"description":"data/scl/efg33577.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg337":{"description":"data/scl/efg337.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg3377":{"description":"data/scl/efg3377.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg33777":{"description":"data/scl/efg33777.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg33777a":{"description":"data/scl/efg33777a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg355":{"description":"data/scl/efg355.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg3555":{"description":"data/scl/efg3555.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg35555":{"description":"data/scl/efg35555.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg35557":{"description":"data/scl/efg35557.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg3557":{"description":"data/scl/efg3557.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg35577":{"description":"data/scl/efg35577.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg357":{"description":"data/scl/efg357.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg35711":{"description":"data/scl/efg35711.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg3571113":{"description":"data/scl/efg3571113.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg3577":{"description":"data/scl/efg3577.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg35777":{"description":"data/scl/efg35777.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg35777a":{"description":"data/scl/efg35777a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg3711":{"description":"data/scl/efg3711.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg377":{"description":"data/scl/efg377.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg37711":{"description":"data/scl/efg37711.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg3777":{"description":"data/scl/efg3777.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg37777":{"description":"data/scl/efg37777.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg37777a":{"description":"data/scl/efg37777a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg555":{"description":"data/scl/efg555.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg55557":{"description":"data/scl/efg55557.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg5557":{"description":"data/scl/efg5557.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg55577":{"description":"data/scl/efg55577.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg557":{"description":"data/scl/efg557.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg5577":{"description":"data/scl/efg5577.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg55777":{"description":"data/scl/efg55777.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg577":{"description":"data/scl/efg577.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg5777":{"description":"data/scl/efg5777.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg57777":{"description":"data/scl/efg57777.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg777":{"description":"data/scl/efg777.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efg77777":{"description":"data/scl/efg77777.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"efghalf357777":{"description":"data/scl/efghalf357777.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"egads":{"description":"data/scl/egads.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"eikobag":{"description":"data/scl/eikobag.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"eikohole1":{"description":"data/scl/eikohole1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"eikohole2":{"description":"data/scl/eikohole2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"eikohole4":{"description":"data/scl/eikohole4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"eikohole5":{"description":"data/scl/eikohole5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"eikohole6":{"description":"data/scl/eikohole6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"eikosany":{"description":"data/scl/eikosany.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"eikosanyplusop":{"description":"data/scl/eikosanyplusop.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"eikoseven":{"description":"data/scl/eikoseven.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ekring1":{"description":"data/scl/ekring1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ekring2":{"description":"data/scl/ekring2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ekring3":{"description":"data/scl/ekring3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ekring4":{"description":"data/scl/ekring4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ekring5":{"description":"data/scl/ekring5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ekring5bp":{"description":"data/scl/ekring5bp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ekring6":{"description":"data/scl/ekring6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ekring7":{"description":"data/scl/ekring7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ekring7bp":{"description":"data/scl/ekring7bp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"elevenplus":{"description":"data/scl/elevenplus.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"elf12f":{"description":"data/scl/elf12f.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"elf87":{"description":"data/scl/elf87.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"elfjove7":{"description":"data/scl/elfjove7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"elfkeenanismic11c":{"description":"data/scl/elfkeenanismic11c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"elfkeenanismic12":{"description":"data/scl/elfkeenanismic12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"elfkeenanismic7":{"description":"data/scl/elfkeenanismic7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"elfleapday10":{"description":"data/scl/elfleapday10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"elfleapday12f":{"description":"data/scl/elfleapday12f.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"elfleapday7":{"description":"data/scl/elfleapday7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"elfleapday8d":{"description":"data/scl/elfleapday8d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"elfleapday9":{"description":"data/scl/elfleapday9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"elfmadagascar12f":{"description":"data/scl/elfmadagascar12f.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"elfmagic10":{"description":"data/scl/elfmagic10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"elfmagic12":{"description":"data/scl/elfmagic12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"elfmagic7":{"description":"data/scl/elfmagic7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"elfmagic8":{"description":"data/scl/elfmagic8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"elfmagic9":{"description":"data/scl/elfmagic9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"elfmiracle12":{"description":"data/scl/elfmiracle12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"elfmiracle7":{"description":"data/scl/elfmiracle7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"elfmyna7":{"description":"data/scl/elfmyna7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"elfoctacot12f":{"description":"data/scl/elfoctacot12f.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"elfqilin10":{"description":"data/scl/elfqilin10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"elfthrush10":{"description":"data/scl/elfthrush10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"elfthrush8d":{"description":"data/scl/elfthrush8d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"elfvalentine8d":{"description":"data/scl/elfvalentine8d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"elfvalinorsmic10":{"description":"data/scl/elfvalinorsmic10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"elfvalinorsmic11":{"description":"data/scl/elfvalinorsmic11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"elfzeus10":{"description":"data/scl/elfzeus10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"elfzeus12":{"description":"data/scl/elfzeus12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ellis":{"description":"data/scl/ellis.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ellis_24":{"description":"data/scl/ellis_24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ellis_eb":{"description":"data/scl/ellis_eb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ellis_harm":{"description":"data/scl/ellis_harm.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ellis_mteb":{"description":"data/scl/ellis_mteb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ellis_r":{"description":"data/scl/ellis_r.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"enh14":{"description":"data/scl/enh14.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"enh15":{"description":"data/scl/enh15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"enh15_inv":{"description":"data/scl/enh15_inv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"enh15_inv2":{"description":"data/scl/enh15_inv2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"enh17":{"description":"data/scl/enh17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"enh17_con":{"description":"data/scl/enh17_con.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"enh19":{"description":"data/scl/enh19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"enh19_con":{"description":"data/scl/enh19_con.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"enh2":{"description":"data/scl/enh2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"enh21":{"description":"data/scl/enh21.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"enh21_inv":{"description":"data/scl/enh21_inv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"enh21_inv2":{"description":"data/scl/enh21_inv2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"enh23":{"description":"data/scl/enh23.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"enh23_con":{"description":"data/scl/enh23_con.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"enh25":{"description":"data/scl/enh25.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"enh25_con":{"description":"data/scl/enh25_con.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"enh27":{"description":"data/scl/enh27.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"enh27_inv":{"description":"data/scl/enh27_inv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"enh27_inv2":{"description":"data/scl/enh27_inv2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"enh29":{"description":"data/scl/enh29.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"enh29_con":{"description":"data/scl/enh29_con.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"enh31":{"description":"data/scl/enh31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"enh31_con":{"description":"data/scl/enh31_con.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"enh33":{"description":"data/scl/enh33.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"enh33_con":{"description":"data/scl/enh33_con.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"enh_invcon":{"description":"data/scl/enh_invcon.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"enh_mod":{"description":"data/scl/enh_mod.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"enh_perm":{"description":"data/scl/enh_perm.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"enlil19_13":{"description":"data/scl/enlil19_13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ennea45":{"description":"data/scl/ennea45.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ennea45ji":{"description":"data/scl/ennea45ji.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ennea72":{"description":"data/scl/ennea72.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ennea72synch":{"description":"data/scl/ennea72synch.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"enneadecal57":{"description":"data/scl/enneadecal57.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ennealimmal45trans":{"description":"data/scl/ennealimmal45trans.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"epimore_enh":{"description":"data/scl/epimore_enh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"eratos_chrom":{"description":"data/scl/eratos_chrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"eratos_diat":{"description":"data/scl/eratos_diat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"eratos_enh":{"description":"data/scl/eratos_enh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"erlangen":{"description":"data/scl/erlangen.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"erlangen2":{"description":"data/scl/erlangen2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"erlich1":{"description":"data/scl/erlich1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"erlich10":{"description":"data/scl/erlich10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"erlich10a":{"description":"data/scl/erlich10a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"erlich10coh":{"description":"data/scl/erlich10coh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"erlich10s1":{"description":"data/scl/erlich10s1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"erlich10s2":{"description":"data/scl/erlich10s2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"erlich11":{"description":"data/scl/erlich11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"erlich11s1":{"description":"data/scl/erlich11s1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"erlich11s2":{"description":"data/scl/erlich11s2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"erlich12":{"description":"data/scl/erlich12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"erlich13":{"description":"data/scl/erlich13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"erlich2":{"description":"data/scl/erlich2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"erlich3":{"description":"data/scl/erlich3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"erlich4":{"description":"data/scl/erlich4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"erlich5":{"description":"data/scl/erlich5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"erlich6":{"description":"data/scl/erlich6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"erlich7":{"description":"data/scl/erlich7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"erlich8":{"description":"data/scl/erlich8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"erlich9":{"description":"data/scl/erlich9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"erlich_bpf":{"description":"data/scl/erlich_bpf.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"erlich_bpp":{"description":"data/scl/erlich_bpp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"erlich_bpp2":{"description":"data/scl/erlich_bpp2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"erlich_bppe":{"description":"data/scl/erlich_bppe.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"erlich_bppm":{"description":"data/scl/erlich_bppm.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"erlichpump":{"description":"data/scl/erlichpump.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"escot":{"description":"data/scl/escot.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"et-mix24":{"description":"data/scl/et-mix24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"et-mix6":{"description":"data/scl/et-mix6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"etdays":{"description":"data/scl/etdays.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"etdays2":{"description":"data/scl/etdays2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"euler":{"description":"data/scl/euler.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"euler20":{"description":"data/scl/euler20.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"euler24":{"description":"data/scl/euler24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"euler_diat":{"description":"data/scl/euler_diat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"euler_enh":{"description":"data/scl/euler_enh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"euler_gm":{"description":"data/scl/euler_gm.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"even12a":{"description":"data/scl/even12a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"even12b":{"description":"data/scl/even12b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"exptriad2":{"description":"data/scl/exptriad2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"exptriad3":{"description":"data/scl/exptriad3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"farey12_101":{"description":"data/scl/farey12_101.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"farey12_116":{"description":"data/scl/farey12_116.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"farey12_65":{"description":"data/scl/farey12_65.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"farey12_80":{"description":"data/scl/farey12_80.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"farey3":{"description":"data/scl/farey3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"farey4":{"description":"data/scl/farey4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"farey5":{"description":"data/scl/farey5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"farnsworth":{"description":"data/scl/farnsworth.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fibo_10":{"description":"data/scl/fibo_10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fibo_9":{"description":"data/scl/fibo_9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"finnamore":{"description":"data/scl/finnamore.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"finnamore53":{"description":"data/scl/finnamore53.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"finnamore_11":{"description":"data/scl/finnamore_11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"finnamore_7":{"description":"data/scl/finnamore_7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"finnamore_7a":{"description":"data/scl/finnamore_7a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"finnamore_jc":{"description":"data/scl/finnamore_jc.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fisher":{"description":"data/scl/fisher.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-10tet":{"description":"data/scl/fj-10tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-12tet":{"description":"data/scl/fj-12tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-13tet":{"description":"data/scl/fj-13tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-14tet":{"description":"data/scl/fj-14tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-15tet":{"description":"data/scl/fj-15tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-16tet":{"description":"data/scl/fj-16tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-17tet":{"description":"data/scl/fj-17tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-18tet":{"description":"data/scl/fj-18tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-19tet":{"description":"data/scl/fj-19tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-20tet":{"description":"data/scl/fj-20tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-21tet":{"description":"data/scl/fj-21tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-22tet":{"description":"data/scl/fj-22tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-23tet":{"description":"data/scl/fj-23tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-24tet":{"description":"data/scl/fj-24tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-26tet":{"description":"data/scl/fj-26tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-30tet":{"description":"data/scl/fj-30tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-31tet":{"description":"data/scl/fj-31tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-36tet":{"description":"data/scl/fj-36tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-41tet":{"description":"data/scl/fj-41tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-42tet":{"description":"data/scl/fj-42tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-43tet":{"description":"data/scl/fj-43tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-53tet":{"description":"data/scl/fj-53tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-54tet":{"description":"data/scl/fj-54tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-55tet":{"description":"data/scl/fj-55tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-5tet":{"description":"data/scl/fj-5tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-60tet":{"description":"data/scl/fj-60tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-66tet":{"description":"data/scl/fj-66tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-72tet":{"description":"data/scl/fj-72tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-78tet":{"description":"data/scl/fj-78tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-7tet":{"description":"data/scl/fj-7tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-84tet":{"description":"data/scl/fj-84tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-8tet":{"description":"data/scl/fj-8tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-90tet":{"description":"data/scl/fj-90tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-96tet":{"description":"data/scl/fj-96tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fj-9tet":{"description":"data/scl/fj-9tet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"flattone12":{"description":"data/scl/flattone12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"flavel":{"description":"data/scl/flavel.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"flippery9":{"description":"data/scl/flippery9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fogliano":{"description":"data/scl/fogliano.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fogliano1":{"description":"data/scl/fogliano1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fogliano2":{"description":"data/scl/fogliano2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker-h":{"description":"data/scl/fokker-h.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker-ht":{"description":"data/scl/fokker-ht.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker-k":{"description":"data/scl/fokker-k.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker-l":{"description":"data/scl/fokker-l.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker-lt":{"description":"data/scl/fokker-lt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker-m":{"description":"data/scl/fokker-m.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker-n":{"description":"data/scl/fokker-n.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker-n2":{"description":"data/scl/fokker-n2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker-p":{"description":"data/scl/fokker-p.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker-q":{"description":"data/scl/fokker-q.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker-r":{"description":"data/scl/fokker-r.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker-s":{"description":"data/scl/fokker-s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker_12":{"description":"data/scl/fokker_12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker_12a":{"description":"data/scl/fokker_12a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker_12b":{"description":"data/scl/fokker_12b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker_12c":{"description":"data/scl/fokker_12c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker_12m":{"description":"data/scl/fokker_12m.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker_12t":{"description":"data/scl/fokker_12t.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker_12t2":{"description":"data/scl/fokker_12t2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker_22":{"description":"data/scl/fokker_22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker_22a":{"description":"data/scl/fokker_22a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker_31":{"description":"data/scl/fokker_31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker_31a":{"description":"data/scl/fokker_31a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker_31b":{"description":"data/scl/fokker_31b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker_31c":{"description":"data/scl/fokker_31c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker_31d":{"description":"data/scl/fokker_31d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker_31d2":{"description":"data/scl/fokker_31d2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker_41":{"description":"data/scl/fokker_41.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker_41a":{"description":"data/scl/fokker_41a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker_41b":{"description":"data/scl/fokker_41b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker_53":{"description":"data/scl/fokker_53.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker_53a":{"description":"data/scl/fokker_53a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker_53b":{"description":"data/scl/fokker_53b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker_av":{"description":"data/scl/fokker_av.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker_bosch":{"description":"data/scl/fokker_bosch.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker_sr":{"description":"data/scl/fokker_sr.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker_sr2":{"description":"data/scl/fokker_sr2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker_sra":{"description":"data/scl/fokker_sra.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fokker_uv":{"description":"data/scl/fokker_uv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"foote":{"description":"data/scl/foote.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"foote2":{"description":"data/scl/foote2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"forster":{"description":"data/scl/forster.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fortuna11":{"description":"data/scl/fortuna11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fortuna_a1":{"description":"data/scl/fortuna_a1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fortuna_a2":{"description":"data/scl/fortuna_a2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fortuna_bag":{"description":"data/scl/fortuna_bag.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fortuna_eth":{"description":"data/scl/fortuna_eth.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fortuna_sheng":{"description":"data/scl/fortuna_sheng.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"francis_924-1":{"description":"data/scl/francis_924-1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"francis_924-2":{"description":"data/scl/francis_924-2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"francis_924-3":{"description":"data/scl/francis_924-3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"francis_924-4":{"description":"data/scl/francis_924-4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"francis_r12-14p":{"description":"data/scl/francis_r12-14p.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"francis_r12-2":{"description":"data/scl/francis_r12-2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"francis_r2-1":{"description":"data/scl/francis_r2-1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"francis_r2-14p":{"description":"data/scl/francis_r2-14p.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"francis_seal":{"description":"data/scl/francis_seal.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"francis_suppig":{"description":"data/scl/francis_suppig.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"freiberg":{"description":"data/scl/freiberg.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"freivald-star":{"description":"data/scl/freivald-star.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"freivald11":{"description":"data/scl/freivald11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"freivald_canton":{"description":"data/scl/freivald_canton.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"freivald_lucky":{"description":"data/scl/freivald_lucky.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"freivald_sub":{"description":"data/scl/freivald_sub.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"freivald_sup":{"description":"data/scl/freivald_sup.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"freivaldthree":{"description":"data/scl/freivaldthree.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fribourg":{"description":"data/scl/fribourg.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"frischknecht2":{"description":"data/scl/frischknecht2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fusc4":{"description":"data/scl/fusc4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fusc5":{"description":"data/scl/fusc5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"fusc6":{"description":"data/scl/fusc6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gabler":{"description":"data/scl/gabler.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"galilei":{"description":"data/scl/galilei.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gamelan_udan":{"description":"data/scl/gamelan_udan.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ganassi":{"description":"data/scl/ganassi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gann_arcana":{"description":"data/scl/gann_arcana.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gann_charingcross":{"description":"data/scl/gann_charingcross.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gann_cinderella":{"description":"data/scl/gann_cinderella.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gann_custer":{"description":"data/scl/gann_custer.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gann_fractured":{"description":"data/scl/gann_fractured.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gann_fugitive":{"description":"data/scl/gann_fugitive.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gann_ghost":{"description":"data/scl/gann_ghost.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gann_love":{"description":"data/scl/gann_love.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gann_new_aunts":{"description":"data/scl/gann_new_aunts.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gann_revisited":{"description":"data/scl/gann_revisited.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gann_sitting":{"description":"data/scl/gann_sitting.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gann_solitaire":{"description":"data/scl/gann_solitaire.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gann_suntune":{"description":"data/scl/gann_suntune.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gann_super":{"description":"data/scl/gann_super.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gann_things":{"description":"data/scl/gann_things.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gann_wolfe":{"description":"data/scl/gann_wolfe.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"garcia":{"description":"data/scl/garcia.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"garibaldi24opt":{"description":"data/scl/garibaldi24opt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"genggong":{"description":"data/scl/genggong.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"genovese_12":{"description":"data/scl/genovese_12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"genovese_38":{"description":"data/scl/genovese_38.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gerle":{"description":"data/scl/gerle.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gf1-2":{"description":"data/scl/gf1-2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gf2-3":{"description":"data/scl/gf2-3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gibelius":{"description":"data/scl/gibelius.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gilson7":{"description":"data/scl/gilson7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gilson7a":{"description":"data/scl/gilson7a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gizmo14-ji_transversal":{"description":"data/scl/gizmo14-ji_transversal.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gizmo14-pote":{"description":"data/scl/gizmo14-pote.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gizmo14":{"description":"data/scl/gizmo14.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"glacial6":{"description":"data/scl/glacial6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gluck":{"description":"data/scl/gluck.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"godmeankeeflat1":{"description":"data/scl/godmeankeeflat1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"godmeankeeflat3":{"description":"data/scl/godmeankeeflat3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"goebel":{"description":"data/scl/goebel.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"golden_5":{"description":"data/scl/golden_5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gorgo-pelog":{"description":"data/scl/gorgo-pelog.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gradus10":{"description":"data/scl/gradus10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gradus10m":{"description":"data/scl/gradus10m.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gradus3":{"description":"data/scl/gradus3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gradus4":{"description":"data/scl/gradus4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gradus5":{"description":"data/scl/gradus5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gradus6":{"description":"data/scl/gradus6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gradus7":{"description":"data/scl/gradus7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gradus8":{"description":"data/scl/gradus8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gradus9":{"description":"data/scl/gradus9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"grady11":{"description":"data/scl/grady11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"grady_14":{"description":"data/scl/grady_14.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"grady_centaur":{"description":"data/scl/grady_centaur.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"grady_centaur17":{"description":"data/scl/grady_centaur17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"grady_centaur19":{"description":"data/scl/grady_centaur19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"grady_centaurmarv":{"description":"data/scl/grady_centaurmarv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"graf-sorge":{"description":"data/scl/graf-sorge.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"grammateus":{"description":"data/scl/grammateus.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"graupner":{"description":"data/scl/graupner.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"groenewald":{"description":"data/scl/groenewald.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"groenewald_21":{"description":"data/scl/groenewald_21.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"groenewald_bach":{"description":"data/scl/groenewald_bach.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"groven":{"description":"data/scl/groven.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"groven_ji":{"description":"data/scl/groven_ji.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"guanyin22":{"description":"data/scl/guanyin22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"guanyintet5":{"description":"data/scl/guanyintet5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"guiron77":{"description":"data/scl/guiron77.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gunkali":{"description":"data/scl/gunkali.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"gyaling":{"description":"data/scl/gyaling.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"h10_27":{"description":"data/scl/h10_27.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"h12_24":{"description":"data/scl/h12_24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"h14_27":{"description":"data/scl/h14_27.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"h15_24":{"description":"data/scl/h15_24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"h17_32":{"description":"data/scl/h17_32.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hahn9":{"description":"data/scl/hahn9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hahn_7":{"description":"data/scl/hahn_7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hahn_g":{"description":"data/scl/hahn_g.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hahnmaxr":{"description":"data/scl/hahnmaxr.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hamilton":{"description":"data/scl/hamilton.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hamilton_jc":{"description":"data/scl/hamilton_jc.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hamilton_jc2":{"description":"data/scl/hamilton_jc2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hammond":{"description":"data/scl/hammond.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hammond12":{"description":"data/scl/hammond12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"handblue":{"description":"data/scl/handblue.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"handel":{"description":"data/scl/handel.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"handel2":{"description":"data/scl/handel2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hanfling-bumler":{"description":"data/scl/hanfling-bumler.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hanson_19":{"description":"data/scl/hanson_19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm-doreninv1":{"description":"data/scl/harm-doreninv1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm-dorinv1":{"description":"data/scl/harm-dorinv1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm-lydchrinv1":{"description":"data/scl/harm-lydchrinv1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm-lydeninv1":{"description":"data/scl/harm-lydeninv1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm-mixochrinv1":{"description":"data/scl/harm-mixochrinv1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm-mixoeninv1":{"description":"data/scl/harm-mixoeninv1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm10":{"description":"data/scl/harm10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm12":{"description":"data/scl/harm12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm12_2":{"description":"data/scl/harm12_2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm12s":{"description":"data/scl/harm12s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm14":{"description":"data/scl/harm14.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm15":{"description":"data/scl/harm15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm15a":{"description":"data/scl/harm15a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm16":{"description":"data/scl/harm16.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm19":{"description":"data/scl/harm19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm1c-hypod":{"description":"data/scl/harm1c-hypod.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm1c-hypol":{"description":"data/scl/harm1c-hypol.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm1c-lydian":{"description":"data/scl/harm1c-lydian.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm1c-mix":{"description":"data/scl/harm1c-mix.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm1c-mixolydian":{"description":"data/scl/harm1c-mixolydian.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm20_12":{"description":"data/scl/harm20_12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm24_12":{"description":"data/scl/harm24_12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm24_8":{"description":"data/scl/harm24_8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm256":{"description":"data/scl/harm256.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm28_8":{"description":"data/scl/harm28_8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm28_9":{"description":"data/scl/harm28_9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm30":{"description":"data/scl/harm30.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm32":{"description":"data/scl/harm32.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm6":{"description":"data/scl/harm6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm7lim":{"description":"data/scl/harm7lim.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm8":{"description":"data/scl/harm8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm9":{"description":"data/scl/harm9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm_bastard":{"description":"data/scl/harm_bastard.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm_bastinv":{"description":"data/scl/harm_bastinv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm_darreg":{"description":"data/scl/harm_darreg.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm_mean":{"description":"data/scl/harm_mean.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm_pehrson":{"description":"data/scl/harm_pehrson.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harm_perkis":{"description":"data/scl/harm_perkis.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harmc-hypop":{"description":"data/scl/harmc-hypop.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harmd-15":{"description":"data/scl/harmd-15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harmd-conmix":{"description":"data/scl/harmd-conmix.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harmd-hypop":{"description":"data/scl/harmd-hypop.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harmd-lyd":{"description":"data/scl/harmd-lyd.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harmd-mix":{"description":"data/scl/harmd-mix.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harmd-phr":{"description":"data/scl/harmd-phr.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harme-hypod":{"description":"data/scl/harme-hypod.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harme-hypol":{"description":"data/scl/harme-hypol.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harme-hypop":{"description":"data/scl/harme-hypop.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harmf10":{"description":"data/scl/harmf10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harmf12":{"description":"data/scl/harmf12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harmf16":{"description":"data/scl/harmf16.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harmf30":{"description":"data/scl/harmf30.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harmf9":{"description":"data/scl/harmf9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harmjc-15":{"description":"data/scl/harmjc-15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harmjc-17-2":{"description":"data/scl/harmjc-17-2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harmjc-17":{"description":"data/scl/harmjc-17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harmjc-19-2":{"description":"data/scl/harmjc-19-2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harmjc-19":{"description":"data/scl/harmjc-19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harmjc-21":{"description":"data/scl/harmjc-21.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harmjc-23-2":{"description":"data/scl/harmjc-23-2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harmjc-23":{"description":"data/scl/harmjc-23.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harmjc-25":{"description":"data/scl/harmjc-25.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harmjc-27":{"description":"data/scl/harmjc-27.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harmjc-hypod16":{"description":"data/scl/harmjc-hypod16.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harmjc-hypol20":{"description":"data/scl/harmjc-hypol20.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harmjc-hypop18":{"description":"data/scl/harmjc-hypop18.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harmjc-lydian13":{"description":"data/scl/harmjc-lydian13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harmjc-mix14":{"description":"data/scl/harmjc-mix14.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harmjc-phryg12":{"description":"data/scl/harmjc-phryg12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harmonical":{"description":"data/scl/harmonical.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harmonical_up":{"description":"data/scl/harmonical_up.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harmsub16":{"description":"data/scl/harmsub16.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harrison_15":{"description":"data/scl/harrison_15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harrison_16":{"description":"data/scl/harrison_16.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harrison_5":{"description":"data/scl/harrison_5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harrison_5_1":{"description":"data/scl/harrison_5_1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harrison_5_3":{"description":"data/scl/harrison_5_3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harrison_5_4":{"description":"data/scl/harrison_5_4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harrison_8":{"description":"data/scl/harrison_8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harrison_bill":{"description":"data/scl/harrison_bill.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harrison_cinna":{"description":"data/scl/harrison_cinna.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harrison_diat":{"description":"data/scl/harrison_diat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harrison_handel":{"description":"data/scl/harrison_handel.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harrison_kyai":{"description":"data/scl/harrison_kyai.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harrison_mid":{"description":"data/scl/harrison_mid.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harrison_mid2":{"description":"data/scl/harrison_mid2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harrison_min":{"description":"data/scl/harrison_min.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harrison_mix1":{"description":"data/scl/harrison_mix1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harrison_mix2":{"description":"data/scl/harrison_mix2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harrison_mix3":{"description":"data/scl/harrison_mix3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harrison_mix4":{"description":"data/scl/harrison_mix4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harrison_slye":{"description":"data/scl/harrison_slye.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harrison_songs":{"description":"data/scl/harrison_songs.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harrisonj":{"description":"data/scl/harrisonj.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harrisonm_rev":{"description":"data/scl/harrisonm_rev.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"harry58":{"description":"data/scl/harry58.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"haverstick13":{"description":"data/scl/haverstick13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"haverstick21":{"description":"data/scl/haverstick21.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hawkes":{"description":"data/scl/hawkes.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hawkes2":{"description":"data/scl/hawkes2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hawkes3":{"description":"data/scl/hawkes3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"helmholtz":{"description":"data/scl/helmholtz.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"helmholtz_24":{"description":"data/scl/helmholtz_24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"helmholtz_decad":{"description":"data/scl/helmholtz_decad.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"helmholtz_pure":{"description":"data/scl/helmholtz_pure.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"helmholtz_temp":{"description":"data/scl/helmholtz_temp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hem_chrom":{"description":"data/scl/hem_chrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hem_chrom11":{"description":"data/scl/hem_chrom11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hem_chrom13":{"description":"data/scl/hem_chrom13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hem_chrom2":{"description":"data/scl/hem_chrom2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hemienn82":{"description":"data/scl/hemienn82.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hemifamcyc":{"description":"data/scl/hemifamcyc.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hemifamity27":{"description":"data/scl/hemifamity27.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hemimute31":{"description":"data/scl/hemimute31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hemiwuer24":{"description":"data/scl/hemiwuer24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hemiwuerschmidt19trans37":{"description":"data/scl/hemiwuerschmidt19trans37.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hemiwuerschmidt25trans37":{"description":"data/scl/hemiwuerschmidt25trans37.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hemiwuerschmidt31trans37":{"description":"data/scl/hemiwuerschmidt31trans37.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hemony":{"description":"data/scl/hemony.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hen12":{"description":"data/scl/hen12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hen22":{"description":"data/scl/hen22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hept_diamond":{"description":"data/scl/hept_diamond.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hept_diamondi":{"description":"data/scl/hept_diamondi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hept_diamondp":{"description":"data/scl/hept_diamondp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"herf_istrian":{"description":"data/scl/herf_istrian.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"heun":{"description":"data/scl/heun.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexagonal13":{"description":"data/scl/hexagonal13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexagonal37":{"description":"data/scl/hexagonal37.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany1":{"description":"data/scl/hexany1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany10":{"description":"data/scl/hexany10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany11":{"description":"data/scl/hexany11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany12":{"description":"data/scl/hexany12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany13":{"description":"data/scl/hexany13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany14":{"description":"data/scl/hexany14.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany15":{"description":"data/scl/hexany15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany16":{"description":"data/scl/hexany16.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany17":{"description":"data/scl/hexany17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany18":{"description":"data/scl/hexany18.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany19":{"description":"data/scl/hexany19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany2":{"description":"data/scl/hexany2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany20":{"description":"data/scl/hexany20.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany21":{"description":"data/scl/hexany21.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany21a":{"description":"data/scl/hexany21a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany22":{"description":"data/scl/hexany22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany23":{"description":"data/scl/hexany23.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany24":{"description":"data/scl/hexany24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany25":{"description":"data/scl/hexany25.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany26":{"description":"data/scl/hexany26.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany3":{"description":"data/scl/hexany3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany4":{"description":"data/scl/hexany4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany49":{"description":"data/scl/hexany49.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany5":{"description":"data/scl/hexany5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany6":{"description":"data/scl/hexany6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany7":{"description":"data/scl/hexany7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany8":{"description":"data/scl/hexany8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany_1029":{"description":"data/scl/hexany_1029.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany_1728":{"description":"data/scl/hexany_1728.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany_245":{"description":"data/scl/hexany_245.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany_4375":{"description":"data/scl/hexany_4375.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany_5120":{"description":"data/scl/hexany_5120.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany_6144":{"description":"data/scl/hexany_6144.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany_65625":{"description":"data/scl/hexany_65625.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany_875":{"description":"data/scl/hexany_875.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany_cl":{"description":"data/scl/hexany_cl.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany_cl2":{"description":"data/scl/hexany_cl2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany_tetr":{"description":"data/scl/hexany_tetr.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany_trans":{"description":"data/scl/hexany_trans.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany_trans2":{"description":"data/scl/hexany_trans2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany_trans3":{"description":"data/scl/hexany_trans3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany_u2":{"description":"data/scl/hexany_u2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany_union":{"description":"data/scl/hexany_union.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexany_urot":{"description":"data/scl/hexany_urot.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexanys-valentino":{"description":"data/scl/hexanys-valentino.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexanys":{"description":"data/scl/hexanys.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexanys2":{"description":"data/scl/hexanys2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexlesfip22":{"description":"data/scl/hexlesfip22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexlesfip22seed":{"description":"data/scl/hexlesfip22seed.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexy-miraculous":{"description":"data/scl/hexy-miraculous.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexy":{"description":"data/scl/hexy.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hexymarv":{"description":"data/scl/hexymarv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hi19marv":{"description":"data/scl/hi19marv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"higgs":{"description":"data/scl/higgs.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"highschool1-rodan":{"description":"data/scl/highschool1-rodan.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"highschool1":{"description":"data/scl/highschool1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"highschool2-miracle":{"description":"data/scl/highschool2-miracle.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"highschool2":{"description":"data/scl/highschool2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"highschool3":{"description":"data/scl/highschool3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"highschool_9":{"description":"data/scl/highschool_9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hijaz pentachord 13-limit a":{"description":"data/scl/hijaz pentachord 13-limit a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hijaz pentachord 13-limit b":{"description":"data/scl/hijaz pentachord 13-limit b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hijaz pentachord 67-limit":{"description":"data/scl/hijaz pentachord 67-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hijaz pentachord 7-limit":{"description":"data/scl/hijaz pentachord 7-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hijaz tetrachord 11-limit":{"description":"data/scl/hijaz tetrachord 11-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hijaz tetrachord 13-limit a":{"description":"data/scl/hijaz tetrachord 13-limit a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hijaz tetrachord 13-limit b":{"description":"data/scl/hijaz tetrachord 13-limit b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hijaz tetrachord 67-limit":{"description":"data/scl/hijaz tetrachord 67-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hijaz tetrachord 7-limit":{"description":"data/scl/hijaz tetrachord 7-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hilim13":{"description":"data/scl/hilim13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hinrichsen":{"description":"data/scl/hinrichsen.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hinsz_gr":{"description":"data/scl/hinsz_gr.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hipkins":{"description":"data/scl/hipkins.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hirajoshi":{"description":"data/scl/hirajoshi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hirajoshi2":{"description":"data/scl/hirajoshi2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hirajoshi3":{"description":"data/scl/hirajoshi3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hirashima":{"description":"data/scl/hirashima.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hjelmstad-blues":{"description":"data/scl/hjelmstad-blues.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hjelmstad-boogie":{"description":"data/scl/hjelmstad-boogie.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hjelmstad-conv":{"description":"data/scl/hjelmstad-conv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ho_mai_nhi":{"description":"data/scl/ho_mai_nhi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hochgartz":{"description":"data/scl/hochgartz.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hofmann1":{"description":"data/scl/hofmann1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hofmann2":{"description":"data/scl/hofmann2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hofmann_chrom":{"description":"data/scl/hofmann_chrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"holder":{"description":"data/scl/holder.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"holder2":{"description":"data/scl/holder2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"honkyoku":{"description":"data/scl/honkyoku.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"horwell22":{"description":"data/scl/horwell22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hppshq":{"description":"data/scl/hppshq.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hulen_33":{"description":"data/scl/hulen_33.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hummel":{"description":"data/scl/hummel.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hummel2":{"description":"data/scl/hummel2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"huntington10":{"description":"data/scl/huntington10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"huntington7":{"description":"data/scl/huntington7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"huseyni pentachord 13-limit":{"description":"data/scl/huseyni pentachord 13-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"huseyni pentachord 19-limit":{"description":"data/scl/huseyni pentachord 19-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"huseyni pentachord 23-limit":{"description":"data/scl/huseyni pentachord 23-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"huseyni pentachord 71-limit":{"description":"data/scl/huseyni pentachord 71-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"husmann":{"description":"data/scl/husmann.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"huzzam pentachord 61-limit":{"description":"data/scl/huzzam pentachord 61-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"huzzam pentachord 79-limit":{"description":"data/scl/huzzam pentachord 79-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"huzzam":{"description":"data/scl/huzzam.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hyper_enh":{"description":"data/scl/hyper_enh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hyper_enh2":{"description":"data/scl/hyper_enh2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypo_chrom":{"description":"data/scl/hypo_chrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypo_diat":{"description":"data/scl/hypo_diat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypo_enh":{"description":"data/scl/hypo_enh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypod_chrom":{"description":"data/scl/hypod_chrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypod_chrom2":{"description":"data/scl/hypod_chrom2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypod_chrom2inv":{"description":"data/scl/hypod_chrom2inv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypod_chromenh":{"description":"data/scl/hypod_chromenh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypod_chrominv":{"description":"data/scl/hypod_chrominv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypod_diat":{"description":"data/scl/hypod_diat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypod_diat2":{"description":"data/scl/hypod_diat2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypod_diatcon":{"description":"data/scl/hypod_diatcon.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypod_diatinv":{"description":"data/scl/hypod_diatinv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypod_enh":{"description":"data/scl/hypod_enh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypod_enhinv":{"description":"data/scl/hypod_enhinv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypod_enhinv2":{"description":"data/scl/hypod_enhinv2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypodorian_pis":{"description":"data/scl/hypodorian_pis.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypol_chrom":{"description":"data/scl/hypol_chrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypol_chrominv":{"description":"data/scl/hypol_chrominv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypol_chrominv2":{"description":"data/scl/hypol_chrominv2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypol_chrominv3":{"description":"data/scl/hypol_chrominv3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypol_diat":{"description":"data/scl/hypol_diat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypol_diatcon":{"description":"data/scl/hypol_diatcon.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypol_diatinv":{"description":"data/scl/hypol_diatinv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypol_enh":{"description":"data/scl/hypol_enh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypol_enhinv":{"description":"data/scl/hypol_enhinv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypol_enhinv2":{"description":"data/scl/hypol_enhinv2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypol_enhinv3":{"description":"data/scl/hypol_enhinv3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypol_pent":{"description":"data/scl/hypol_pent.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypol_tri":{"description":"data/scl/hypol_tri.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypol_tri2":{"description":"data/scl/hypol_tri2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypolydian_pis":{"description":"data/scl/hypolydian_pis.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypop_chrom":{"description":"data/scl/hypop_chrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypop_chromenh":{"description":"data/scl/hypop_chromenh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypop_chrominv":{"description":"data/scl/hypop_chrominv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypop_chrominv2":{"description":"data/scl/hypop_chrominv2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypop_diat":{"description":"data/scl/hypop_diat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypop_diat2":{"description":"data/scl/hypop_diat2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypop_diat2inv":{"description":"data/scl/hypop_diat2inv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypop_diatcon":{"description":"data/scl/hypop_diatcon.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypop_enh":{"description":"data/scl/hypop_enh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypop_enhinv":{"description":"data/scl/hypop_enhinv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypop_enhinv2":{"description":"data/scl/hypop_enhinv2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"hypophryg_pis":{"description":"data/scl/hypophryg_pis.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iivv17":{"description":"data/scl/iivv17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ikosany":{"description":"data/scl/ikosany.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ikosany7":{"description":"data/scl/ikosany7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian-ayyar":{"description":"data/scl/indian-ayyar.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian-dk":{"description":"data/scl/indian-dk.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian-ellis":{"description":"data/scl/indian-ellis.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian-hahn":{"description":"data/scl/indian-hahn.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian-hrdaya1":{"description":"data/scl/indian-hrdaya1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian-hrdaya2":{"description":"data/scl/indian-hrdaya2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian-invrot":{"description":"data/scl/indian-invrot.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian-magrama":{"description":"data/scl/indian-magrama.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian-mystical22":{"description":"data/scl/indian-mystical22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian-newbengali":{"description":"data/scl/indian-newbengali.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian-old2ellis":{"description":"data/scl/indian-old2ellis.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian-oldellis":{"description":"data/scl/indian-oldellis.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian-raja":{"description":"data/scl/indian-raja.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian-sagrama":{"description":"data/scl/indian-sagrama.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian-sarana":{"description":"data/scl/indian-sarana.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian-sarana2":{"description":"data/scl/indian-sarana2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian-srutiharm":{"description":"data/scl/indian-srutiharm.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian-srutivina":{"description":"data/scl/indian-srutivina.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian-vina":{"description":"data/scl/indian-vina.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian-vina2":{"description":"data/scl/indian-vina2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian-vina3":{"description":"data/scl/indian-vina3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian":{"description":"data/scl/indian.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian2":{"description":"data/scl/indian2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian2_sm":{"description":"data/scl/indian2_sm.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian3":{"description":"data/scl/indian3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian4":{"description":"data/scl/indian4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian5":{"description":"data/scl/indian5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian6":{"description":"data/scl/indian6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian_12":{"description":"data/scl/indian_12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian_12c":{"description":"data/scl/indian_12c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian_a":{"description":"data/scl/indian_a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian_b":{"description":"data/scl/indian_b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian_c":{"description":"data/scl/indian_c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian_d":{"description":"data/scl/indian_d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian_e":{"description":"data/scl/indian_e.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian_g":{"description":"data/scl/indian_g.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian_rat":{"description":"data/scl/indian_rat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indian_rot":{"description":"data/scl/indian_rot.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indium17":{"description":"data/scl/indium17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"indra31":{"description":"data/scl/indra31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"interbartolo1":{"description":"data/scl/interbartolo1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"interbartolo2":{"description":"data/scl/interbartolo2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"interbartolo3":{"description":"data/scl/interbartolo3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ionic":{"description":"data/scl/ionic.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iran_diat":{"description":"data/scl/iran_diat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iranian pentachord 7-limit":{"description":"data/scl/iranian pentachord 7-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iraq":{"description":"data/scl/iraq.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"isfahan_5":{"description":"data/scl/isfahan_5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"islamic":{"description":"data/scl/islamic.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"italian":{"description":"data/scl/italian.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter1":{"description":"data/scl/iter1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter10":{"description":"data/scl/iter10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter11":{"description":"data/scl/iter11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter12":{"description":"data/scl/iter12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter13":{"description":"data/scl/iter13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter14":{"description":"data/scl/iter14.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter15":{"description":"data/scl/iter15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter16":{"description":"data/scl/iter16.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter17":{"description":"data/scl/iter17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter18":{"description":"data/scl/iter18.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter19":{"description":"data/scl/iter19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter2":{"description":"data/scl/iter2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter20":{"description":"data/scl/iter20.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter21":{"description":"data/scl/iter21.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter22":{"description":"data/scl/iter22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter23":{"description":"data/scl/iter23.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter24":{"description":"data/scl/iter24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter25":{"description":"data/scl/iter25.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter26":{"description":"data/scl/iter26.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter27":{"description":"data/scl/iter27.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter28":{"description":"data/scl/iter28.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter29":{"description":"data/scl/iter29.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter3":{"description":"data/scl/iter3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter30":{"description":"data/scl/iter30.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter31":{"description":"data/scl/iter31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter32":{"description":"data/scl/iter32.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter33":{"description":"data/scl/iter33.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter34":{"description":"data/scl/iter34.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter35":{"description":"data/scl/iter35.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter36":{"description":"data/scl/iter36.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter4":{"description":"data/scl/iter4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter5":{"description":"data/scl/iter5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter6":{"description":"data/scl/iter6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter7":{"description":"data/scl/iter7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter8":{"description":"data/scl/iter8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"iter9":{"description":"data/scl/iter9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ives":{"description":"data/scl/ives.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ives2a":{"description":"data/scl/ives2a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ives2b":{"description":"data/scl/ives2b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"jademohaporc":{"description":"data/scl/jademohaporc.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"janke1":{"description":"data/scl/janke1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"janke2":{"description":"data/scl/janke2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"janke3":{"description":"data/scl/janke3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"janke4":{"description":"data/scl/janke4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"janke5":{"description":"data/scl/janke5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"janke6":{"description":"data/scl/janke6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"janke7":{"description":"data/scl/janke7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"jemblung1":{"description":"data/scl/jemblung1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"jemblung2":{"description":"data/scl/jemblung2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ji_10coh":{"description":"data/scl/ji_10coh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ji_10coh2":{"description":"data/scl/ji_10coh2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ji_10i4":{"description":"data/scl/ji_10i4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ji_11":{"description":"data/scl/ji_11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ji_12":{"description":"data/scl/ji_12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ji_121":{"description":"data/scl/ji_121.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ji_12a":{"description":"data/scl/ji_12a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ji_12b":{"description":"data/scl/ji_12b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ji_12coh":{"description":"data/scl/ji_12coh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ji_13":{"description":"data/scl/ji_13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ji_15coh":{"description":"data/scl/ji_15coh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ji_17":{"description":"data/scl/ji_17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ji_17a":{"description":"data/scl/ji_17a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ji_17b":{"description":"data/scl/ji_17b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ji_18":{"description":"data/scl/ji_18.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ji_19":{"description":"data/scl/ji_19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ji_20":{"description":"data/scl/ji_20.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ji_21":{"description":"data/scl/ji_21.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ji_22":{"description":"data/scl/ji_22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ji_29":{"description":"data/scl/ji_29.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ji_30":{"description":"data/scl/ji_30.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ji_31":{"description":"data/scl/ji_31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ji_311":{"description":"data/scl/ji_311.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ji_5coh":{"description":"data/scl/ji_5coh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ji_7":{"description":"data/scl/ji_7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ji_7a":{"description":"data/scl/ji_7a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ji_8coh":{"description":"data/scl/ji_8coh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ji_9":{"description":"data/scl/ji_9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ji_9coh":{"description":"data/scl/ji_9coh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"jioct12":{"description":"data/scl/jioct12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"jira1":{"description":"data/scl/jira1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"jira2":{"description":"data/scl/jira2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"jobin-bach":{"description":"data/scl/jobin-bach.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"johnson-secor_rwt":{"description":"data/scl/johnson-secor_rwt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"johnson_44":{"description":"data/scl/johnson_44.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"johnson_7":{"description":"data/scl/johnson_7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"johnson_eb":{"description":"data/scl/johnson_eb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"johnson_ratwell":{"description":"data/scl/johnson_ratwell.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"johnson_temp":{"description":"data/scl/johnson_temp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"johnston":{"description":"data/scl/johnston.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"johnston_21":{"description":"data/scl/johnston_21.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"johnston_22":{"description":"data/scl/johnston_22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"johnston_25":{"description":"data/scl/johnston_25.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"johnston_6-qt":{"description":"data/scl/johnston_6-qt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"johnston_6-qt_row":{"description":"data/scl/johnston_6-qt_row.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"johnston_81":{"description":"data/scl/johnston_81.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"jonsson1":{"description":"data/scl/jonsson1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"jonsson2":{"description":"data/scl/jonsson2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"jorgensen":{"description":"data/scl/jorgensen.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"jousse":{"description":"data/scl/jousse.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"jousse2":{"description":"data/scl/jousse2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"jove41":{"description":"data/scl/jove41.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"jubilismic10":{"description":"data/scl/jubilismic10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"julius22":{"description":"data/scl/julius22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"julius24":{"description":"data/scl/julius24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kacapi1":{"description":"data/scl/kacapi1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kacapi10":{"description":"data/scl/kacapi10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kacapi11":{"description":"data/scl/kacapi11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kacapi2":{"description":"data/scl/kacapi2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kacapi3":{"description":"data/scl/kacapi3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kacapi4":{"description":"data/scl/kacapi4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kacapi5":{"description":"data/scl/kacapi5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kacapi6":{"description":"data/scl/kacapi6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kacapi7":{"description":"data/scl/kacapi7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kacapi8":{"description":"data/scl/kacapi8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kacapi9":{"description":"data/scl/kacapi9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kai-metalbar-exp":{"description":"data/scl/kai-metalbar-exp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kai-metalbar":{"description":"data/scl/kai-metalbar.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kanzelmeyer_11":{"description":"data/scl/kanzelmeyer_11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kanzelmeyer_18":{"description":"data/scl/kanzelmeyer_18.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kayolonian":{"description":"data/scl/kayolonian.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kayolonian_12":{"description":"data/scl/kayolonian_12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kayolonian_40":{"description":"data/scl/kayolonian_40.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kayolonian_f":{"description":"data/scl/kayolonian_f.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kayolonian_p":{"description":"data/scl/kayolonian_p.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kayolonian_s":{"description":"data/scl/kayolonian_s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kayolonian_t":{"description":"data/scl/kayolonian_t.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kayolonian_z":{"description":"data/scl/kayolonian_z.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kayoloniana":{"description":"data/scl/kayoloniana.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kebyar-b":{"description":"data/scl/kebyar-b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kebyar-s":{"description":"data/scl/kebyar-s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kebyar-t":{"description":"data/scl/kebyar-t.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"keemic15":{"description":"data/scl/keemic15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"keen1":{"description":"data/scl/keen1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"keen2":{"description":"data/scl/keen2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"keen3":{"description":"data/scl/keen3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"keen4":{"description":"data/scl/keen4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"keen5":{"description":"data/scl/keen5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"keen6":{"description":"data/scl/keen6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"keenan3":{"description":"data/scl/keenan3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"keenan3j":{"description":"data/scl/keenan3j.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"keenan3rb":{"description":"data/scl/keenan3rb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"keenan3rb2":{"description":"data/scl/keenan3rb2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"keenan5":{"description":"data/scl/keenan5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"keenan6":{"description":"data/scl/keenan6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"keenan7":{"description":"data/scl/keenan7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"keenan_b19":{"description":"data/scl/keenan_b19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"keenan_mt":{"description":"data/scl/keenan_mt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"keenan_st":{"description":"data/scl/keenan_st.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"keenan_t9":{"description":"data/scl/keenan_t9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"keentet":{"description":"data/scl/keentet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"keesred12_5":{"description":"data/scl/keesred12_5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kelletat":{"description":"data/scl/kelletat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kelletat1":{"description":"data/scl/kelletat1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kellner":{"description":"data/scl/kellner.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kellner_eb":{"description":"data/scl/kellner_eb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kellner_org":{"description":"data/scl/kellner_org.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kellners":{"description":"data/scl/kellners.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kepler1":{"description":"data/scl/kepler1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kepler2":{"description":"data/scl/kepler2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kepler3":{"description":"data/scl/kepler3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kilroy":{"description":"data/scl/kilroy.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kimball":{"description":"data/scl/kimball.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kimball_53":{"description":"data/scl/kimball_53.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kirkwood":{"description":"data/scl/kirkwood.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kirn-stan":{"description":"data/scl/kirn-stan.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kirnberger":{"description":"data/scl/kirnberger.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kirnberger1":{"description":"data/scl/kirnberger1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kirnberger2":{"description":"data/scl/kirnberger2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kirnberger24":{"description":"data/scl/kirnberger24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kirnberger3":{"description":"data/scl/kirnberger3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kirnberger3s":{"description":"data/scl/kirnberger3s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kirnberger3v":{"description":"data/scl/kirnberger3v.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kirnberger48":{"description":"data/scl/kirnberger48.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kite33":{"description":"data/scl/kite33.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"klais":{"description":"data/scl/klais.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kleismic34trans":{"description":"data/scl/kleismic34trans.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kleismic34transex":{"description":"data/scl/kleismic34transex.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"klonaris":{"description":"data/scl/klonaris.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"knot":{"description":"data/scl/knot.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"koepf_36":{"description":"data/scl/koepf_36.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"koepf_48":{"description":"data/scl/koepf_48.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kolinski":{"description":"data/scl/kolinski.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"konig":{"description":"data/scl/konig.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kora1":{"description":"data/scl/kora1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kora2":{"description":"data/scl/kora2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kora3":{"description":"data/scl/kora3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kora4":{"description":"data/scl/kora4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"korea_5":{"description":"data/scl/korea_5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kornerup":{"description":"data/scl/kornerup.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kornerup_11":{"description":"data/scl/kornerup_11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"koval":{"description":"data/scl/koval.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"koval2":{"description":"data/scl/koval2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"koval3":{"description":"data/scl/koval3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"koval4":{"description":"data/scl/koval4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"koval5":{"description":"data/scl/koval5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"koval6":{"description":"data/scl/koval6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"koval7":{"description":"data/scl/koval7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"koval8":{"description":"data/scl/koval8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"koval9":{"description":"data/scl/koval9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kraeh_22":{"description":"data/scl/kraeh_22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kraeh_22a":{"description":"data/scl/kraeh_22a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kring1":{"description":"data/scl/kring1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kring1p3":{"description":"data/scl/kring1p3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kring2":{"description":"data/scl/kring2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kring2p3":{"description":"data/scl/kring2p3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kring3":{"description":"data/scl/kring3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kring3bp":{"description":"data/scl/kring3bp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kring4":{"description":"data/scl/kring4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kring4p3":{"description":"data/scl/kring4p3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kring5":{"description":"data/scl/kring5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kring5p3":{"description":"data/scl/kring5p3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kring6":{"description":"data/scl/kring6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kring6p3":{"description":"data/scl/kring6p3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"krousseau2":{"description":"data/scl/krousseau2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kukuya":{"description":"data/scl/kukuya.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kurdi pentachord 17-limit":{"description":"data/scl/kurdi pentachord 17-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kurdi tetrachord 17-limit":{"description":"data/scl/kurdi tetrachord 17-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kurzweil_arab":{"description":"data/scl/kurzweil_arab.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kurzweil_ji":{"description":"data/scl/kurzweil_ji.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kurzweil_pelogh":{"description":"data/scl/kurzweil_pelogh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kurzweil_pelogm":{"description":"data/scl/kurzweil_pelogm.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kurzweil_slen":{"description":"data/scl/kurzweil_slen.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"kurzweil_tibet":{"description":"data/scl/kurzweil_tibet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"laka-dwarf":{"description":"data/scl/laka-dwarf.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lambdoma5_12":{"description":"data/scl/lambdoma5_12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lambdoma_prim":{"description":"data/scl/lambdoma_prim.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lambert":{"description":"data/scl/lambert.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lang":{"description":"data/scl/lang.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lara":{"description":"data/scl/lara.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"leapday46":{"description":"data/scl/leapday46.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"leapmute29":{"description":"data/scl/leapmute29.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"leapmute46":{"description":"data/scl/leapmute46.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lebanon":{"description":"data/scl/lebanon.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"leedy":{"description":"data/scl/leedy.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"leeuw1":{"description":"data/scl/leeuw1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"leftpistol":{"description":"data/scl/leftpistol.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"legros1":{"description":"data/scl/legros1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"legros2":{"description":"data/scl/legros2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lehman1":{"description":"data/scl/lehman1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lehman2":{"description":"data/scl/lehman2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lehman3":{"description":"data/scl/lehman3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lemba12":{"description":"data/scl/lemba12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lemba22":{"description":"data/scl/lemba22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lemba24":{"description":"data/scl/lemba24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lemba8":{"description":"data/scl/lemba8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"leusden":{"description":"data/scl/leusden.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"levens":{"description":"data/scl/levens.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"levens2":{"description":"data/scl/levens2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ligon":{"description":"data/scl/ligon.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ligon10":{"description":"data/scl/ligon10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ligon11":{"description":"data/scl/ligon11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ligon2":{"description":"data/scl/ligon2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ligon3":{"description":"data/scl/ligon3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ligon4":{"description":"data/scl/ligon4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ligon5":{"description":"data/scl/ligon5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ligon7":{"description":"data/scl/ligon7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ligon8":{"description":"data/scl/ligon8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ligon9":{"description":"data/scl/ligon9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lindley-ortgies1":{"description":"data/scl/lindley-ortgies1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lindley-ortgies2":{"description":"data/scl/lindley-ortgies2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lindley1":{"description":"data/scl/lindley1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lindley2":{"description":"data/scl/lindley2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lindley_ea":{"description":"data/scl/lindley_ea.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lindley_sf":{"description":"data/scl/lindley_sf.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"line10":{"description":"data/scl/line10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"line40":{"description":"data/scl/line40.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"linemarv12":{"description":"data/scl/linemarv12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"liu_major":{"description":"data/scl/liu_major.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"liu_mel":{"description":"data/scl/liu_mel.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"liu_minor":{"description":"data/scl/liu_minor.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"liu_pent":{"description":"data/scl/liu_pent.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"locomotive":{"description":"data/scl/locomotive.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"london-baroque":{"description":"data/scl/london-baroque.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lorenzi-m":{"description":"data/scl/lorenzi-m.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lorenzi":{"description":"data/scl/lorenzi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lorina":{"description":"data/scl/lorina.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lublin":{"description":"data/scl/lublin.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucktenberg":{"description":"data/scl/lucktenberg.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy01and07tuned0b5s":{"description":"data/scl/lucy01and07tuned0b5s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy02and14tuned5b0s":{"description":"data/scl/lucy02and14tuned5b0s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy03tuned4b1s":{"description":"data/scl/lucy03tuned4b1s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy04and21tuned3b2s":{"description":"data/scl/lucy04and21tuned3b2s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy05tuned2b3s":{"description":"data/scl/lucy05tuned2b3s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy06tuned1b4s":{"description":"data/scl/lucy06tuned1b4s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy08tuned0b6s":{"description":"data/scl/lucy08tuned0b6s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy09tuned0b7s":{"description":"data/scl/lucy09tuned0b7s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy10tuned0b8s":{"description":"data/scl/lucy10tuned0b8s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy11tuned0b9s":{"description":"data/scl/lucy11tuned0b9s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy13Gxtuned0b11s":{"description":"data/scl/lucy13Gxtuned0b11s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy15tuned6b0s":{"description":"data/scl/lucy15tuned6b0s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy16tuned7b0s":{"description":"data/scl/lucy16tuned7b0s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy18Bbbtuned9b0s":{"description":"data/scl/lucy18Bbbtuned9b0s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy19Bbbtuned10b0s":{"description":"data/scl/lucy19Bbbtuned10b0s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy20Bbbtuned11b0s":{"description":"data/scl/lucy20Bbbtuned11b0s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy22tuned4bGs":{"description":"data/scl/lucy22tuned4bGs.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy23tuned4bDs":{"description":"data/scl/lucy23tuned4bDs.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy24tuned4bCs":{"description":"data/scl/lucy24tuned4bCs.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy25tunedAb4s":{"description":"data/scl/lucy25tunedAb4s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy26tunedGb4s":{"description":"data/scl/lucy26tunedGb4s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy27tunedEb5s":{"description":"data/scl/lucy27tunedEb5s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy28tunedDb4s":{"description":"data/scl/lucy28tunedDb4s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy29tunedBbAbGbCsDs":{"description":"data/scl/lucy29tunedBbAbGbCsDs.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy30tunedBbEbGbCsGs":{"description":"data/scl/lucy30tunedBbEbGbCsGs.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy31tuned3b2sCsAs":{"description":"data/scl/lucy31tuned3b2sCsAs.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy32tuned3b2sDsFs":{"description":"data/scl/lucy32tuned3b2sDsFs.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy33tuned3b2sDsGs":{"description":"data/scl/lucy33tuned3b2sDsGs.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy34tuned3b2sDsAs":{"description":"data/scl/lucy34tuned3b2sDsAs.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy35tuned3b2sFsGs":{"description":"data/scl/lucy35tuned3b2sFsGs.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy36tuned3b2sFsAs":{"description":"data/scl/lucy36tuned3b2sFsAs.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy37tuned3b2sGsAs":{"description":"data/scl/lucy37tuned3b2sGsAs.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy38tuned2b3sDbEb":{"description":"data/scl/lucy38tuned2b3sDbEb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy39tuned2b3sDbGb":{"description":"data/scl/lucy39tuned2b3sDbGb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy40tuned2b3sDbAb":{"description":"data/scl/lucy40tuned2b3sDbAb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy41tuned2b3sDbBb":{"description":"data/scl/lucy41tuned2b3sDbBb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy42tuned2b3sEbGb":{"description":"data/scl/lucy42tuned2b3sEbGb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy43tuned2b3sEbAb":{"description":"data/scl/lucy43tuned2b3sEbAb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy44tuned2b3sGbAb":{"description":"data/scl/lucy44tuned2b3sGbAb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy45tuned2b3sGbBb":{"description":"data/scl/lucy45tuned2b3sGbBb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy46tuned2b3sAbBb":{"description":"data/scl/lucy46tuned2b3sAbBb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy50Bbbtuned6b1sFs":{"description":"data/scl/lucy50Bbbtuned6b1sFs.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy51Bbbtuned3b3sBbEbDbBbbFsGsFx":{"description":"data/scl/lucy51Bbbtuned3b3sBbEbDbBbbFsGsFx.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy52tuned4b1sAs":{"description":"data/scl/lucy52tuned4b1sAs.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy53tuned4b2sCsFCb":{"description":"data/scl/lucy53tuned4b2sCsFCb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy55tuned3b3sCxFb":{"description":"data/scl/lucy55tuned3b3sCxFb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy56tuned4b3sEs":{"description":"data/scl/lucy56tuned4b3sEs.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy57tuned7b0sAbbGbb":{"description":"data/scl/lucy57tuned7b0sAbbGbb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy58tuned5b2sEs":{"description":"data/scl/lucy58tuned5b2sEs.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy59Bbbtuned9b0sE":{"description":"data/scl/lucy59Bbbtuned9b0sE.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy60tuned3b4sEs":{"description":"data/scl/lucy60tuned3b4sEs.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy61Bbbtuned8b1s":{"description":"data/scl/lucy61Bbbtuned8b1s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy62tuned4b3sBbbEs":{"description":"data/scl/lucy62tuned4b3sBbbEs.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy63tuned5b0s":{"description":"data/scl/lucy63tuned5b0s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy64tuned7b0snoF":{"description":"data/scl/lucy64tuned7b0snoF.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy65tuned2b3s":{"description":"data/scl/lucy65tuned2b3s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy_19":{"description":"data/scl/lucy_19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy_24":{"description":"data/scl/lucy_24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy_31":{"description":"data/scl/lucy_31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lucy_7":{"description":"data/scl/lucy_7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lumma5":{"description":"data/scl/lumma5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lumma_10":{"description":"data/scl/lumma_10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lumma_12_fun":{"description":"data/scl/lumma_12_fun.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lumma_12_moh-ha-ha":{"description":"data/scl/lumma_12_moh-ha-ha.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lumma_12_strangeion":{"description":"data/scl/lumma_12_strangeion.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lumma_12p5":{"description":"data/scl/lumma_12p5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lumma_12p6":{"description":"data/scl/lumma_12p6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lumma_12p7":{"description":"data/scl/lumma_12p7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lumma_17":{"description":"data/scl/lumma_17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lumma_22":{"description":"data/scl/lumma_22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lumma_5151":{"description":"data/scl/lumma_5151.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lumma_al1":{"description":"data/scl/lumma_al1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lumma_al2":{"description":"data/scl/lumma_al2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lumma_al3":{"description":"data/scl/lumma_al3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lumma_al4":{"description":"data/scl/lumma_al4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lumma_al5":{"description":"data/scl/lumma_al5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lumma_al6":{"description":"data/scl/lumma_al6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lumma_al7":{"description":"data/scl/lumma_al7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lumma_dec1":{"description":"data/scl/lumma_dec1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lumma_dec2":{"description":"data/scl/lumma_dec2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lumma_magic":{"description":"data/scl/lumma_magic.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lumma_prism":{"description":"data/scl/lumma_prism.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lumma_prismkeen":{"description":"data/scl/lumma_prismkeen.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lumma_prismt":{"description":"data/scl/lumma_prismt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lumma_stelhex":{"description":"data/scl/lumma_stelhex.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lumma_synchtrines+2":{"description":"data/scl/lumma_synchtrines+2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lumma_wt19":{"description":"data/scl/lumma_wt19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"luyten":{"description":"data/scl/luyten.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lydian_chrom":{"description":"data/scl/lydian_chrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lydian_chrom2":{"description":"data/scl/lydian_chrom2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lydian_chrominv":{"description":"data/scl/lydian_chrominv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lydian_diat":{"description":"data/scl/lydian_diat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lydian_diat2":{"description":"data/scl/lydian_diat2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lydian_diat2inv":{"description":"data/scl/lydian_diat2inv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lydian_diatcon":{"description":"data/scl/lydian_diatcon.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lydian_enh":{"description":"data/scl/lydian_enh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lydian_enh2":{"description":"data/scl/lydian_enh2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lydian_enhinv":{"description":"data/scl/lydian_enhinv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lydian_pent":{"description":"data/scl/lydian_pent.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lydian_pis":{"description":"data/scl/lydian_pis.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lydian_tri":{"description":"data/scl/lydian_tri.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"lydian_tri2":{"description":"data/scl/lydian_tri2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"machine_lf":{"description":"data/scl/machine_lf.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"madagascar19":{"description":"data/scl/madagascar19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"madenda-sejati":{"description":"data/scl/madenda-sejati.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"madimba":{"description":"data/scl/madimba.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"magic-majthird13":{"description":"data/scl/magic-majthird13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"magic-shrutis":{"description":"data/scl/magic-shrutis.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"magic16septimage":{"description":"data/scl/magic16septimage.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"magic16terzbirat":{"description":"data/scl/magic16terzbirat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"magic19trans37":{"description":"data/scl/magic19trans37.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"magic19trans37ex":{"description":"data/scl/magic19trans37ex.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"magic22trans37":{"description":"data/scl/magic22trans37.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"magic22trans37ex":{"description":"data/scl/magic22trans37ex.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mahur tetrachord 13-limit":{"description":"data/scl/mahur tetrachord 13-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mahur tetrachord 19-limit":{"description":"data/scl/mahur tetrachord 19-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"maihingen":{"description":"data/scl/maihingen.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"majmin":{"description":"data/scl/majmin.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"major_clus":{"description":"data/scl/major_clus.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"major_wing":{"description":"data/scl/major_wing.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"major_wing_lesfip":{"description":"data/scl/major_wing_lesfip.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"makoyan":{"description":"data/scl/makoyan.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"malawi_bangwe":{"description":"data/scl/malawi_bangwe.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"malawi_bangwe1":{"description":"data/scl/malawi_bangwe1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"malawi_bangwe2":{"description":"data/scl/malawi_bangwe2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"malawi_bangwe3":{"description":"data/scl/malawi_bangwe3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"malawi_bangwe4":{"description":"data/scl/malawi_bangwe4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"malawi_bangwe5":{"description":"data/scl/malawi_bangwe5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"malawi_bangwe6":{"description":"data/scl/malawi_bangwe6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"malawi_bangwe7":{"description":"data/scl/malawi_bangwe7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"malawi_bangwe8":{"description":"data/scl/malawi_bangwe8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"malawi_bangwe9":{"description":"data/scl/malawi_bangwe9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"malawi_malimba5":{"description":"data/scl/malawi_malimba5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"malawi_valimba":{"description":"data/scl/malawi_valimba.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"malco":{"description":"data/scl/malco.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"malcolm":{"description":"data/scl/malcolm.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"malcolm2":{"description":"data/scl/malcolm2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"malcolm_ap":{"description":"data/scl/malcolm_ap.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"malcolm_me":{"description":"data/scl/malcolm_me.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"malcolme":{"description":"data/scl/malcolme.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"malcolme2":{"description":"data/scl/malcolme2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"malcolms":{"description":"data/scl/malcolms.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"malerbi":{"description":"data/scl/malerbi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"malgache":{"description":"data/scl/malgache.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"malgache1":{"description":"data/scl/malgache1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"malgache2":{"description":"data/scl/malgache2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"malkauns":{"description":"data/scl/malkauns.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mambuti":{"description":"data/scl/mambuti.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mandela":{"description":"data/scl/mandela.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mandelbaum5":{"description":"data/scl/mandelbaum5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mandelbaum7":{"description":"data/scl/mandelbaum7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mandelbaum7keemun":{"description":"data/scl/mandelbaum7keemun.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mander":{"description":"data/scl/mander.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marimba1":{"description":"data/scl/marimba1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marimba2":{"description":"data/scl/marimba2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marimba3":{"description":"data/scl/marimba3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marion":{"description":"data/scl/marion.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marion1":{"description":"data/scl/marion1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marion10":{"description":"data/scl/marion10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marion15":{"description":"data/scl/marion15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marissing":{"description":"data/scl/marissing.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marpurg-1":{"description":"data/scl/marpurg-1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marpurg-a":{"description":"data/scl/marpurg-a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marpurg-b":{"description":"data/scl/marpurg-b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marpurg-c":{"description":"data/scl/marpurg-c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marpurg-d":{"description":"data/scl/marpurg-d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marpurg-e":{"description":"data/scl/marpurg-e.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marpurg-g":{"description":"data/scl/marpurg-g.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marpurg-t1":{"description":"data/scl/marpurg-t1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marpurg-t11":{"description":"data/scl/marpurg-t11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marpurg-t12":{"description":"data/scl/marpurg-t12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marpurg-t1a":{"description":"data/scl/marpurg-t1a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marpurg-t2":{"description":"data/scl/marpurg-t2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marpurg-t2a":{"description":"data/scl/marpurg-t2a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marpurg-t3":{"description":"data/scl/marpurg-t3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marpurg-t4":{"description":"data/scl/marpurg-t4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marpurg-t5":{"description":"data/scl/marpurg-t5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marpurg-t7":{"description":"data/scl/marpurg-t7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marpurg-t8":{"description":"data/scl/marpurg-t8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marpurg-t9":{"description":"data/scl/marpurg-t9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marpurg":{"description":"data/scl/marpurg.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marpurg1":{"description":"data/scl/marpurg1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marpurg3":{"description":"data/scl/marpurg3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marsh":{"description":"data/scl/marsh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marvbiz":{"description":"data/scl/marvbiz.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marvel10":{"description":"data/scl/marvel10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marvel11":{"description":"data/scl/marvel11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marvel12":{"description":"data/scl/marvel12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marvel19":{"description":"data/scl/marvel19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marvel19woo":{"description":"data/scl/marvel19woo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marvel22":{"description":"data/scl/marvel22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marvel22_11":{"description":"data/scl/marvel22_11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marvel6":{"description":"data/scl/marvel6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marvel9":{"description":"data/scl/marvel9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"marveldene":{"description":"data/scl/marveldene.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"maunder1":{"description":"data/scl/maunder1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"maunder2":{"description":"data/scl/maunder2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mavila12":{"description":"data/scl/mavila12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mavila9":{"description":"data/scl/mavila9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mavlim1":{"description":"data/scl/mavlim1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mavsynch16":{"description":"data/scl/mavsynch16.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mavsynch7":{"description":"data/scl/mavsynch7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"max7amarvwoo":{"description":"data/scl/max7amarvwoo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_banda":{"description":"data/scl/mbira_banda.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_banda2":{"description":"data/scl/mbira_banda2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_budongo":{"description":"data/scl/mbira_budongo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_budongo2":{"description":"data/scl/mbira_budongo2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_chilimba":{"description":"data/scl/mbira_chilimba.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_chisanzhi":{"description":"data/scl/mbira_chisanzhi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_chisanzhi2":{"description":"data/scl/mbira_chisanzhi2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_chisanzhi3":{"description":"data/scl/mbira_chisanzhi3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_chisanzhi4":{"description":"data/scl/mbira_chisanzhi4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_deza":{"description":"data/scl/mbira_deza.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_ekembe":{"description":"data/scl/mbira_ekembe.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_ekembe2":{"description":"data/scl/mbira_ekembe2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_gondo":{"description":"data/scl/mbira_gondo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_ikembe":{"description":"data/scl/mbira_ikembe.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_ilimba":{"description":"data/scl/mbira_ilimba.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_isanzo":{"description":"data/scl/mbira_isanzo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_kalimba":{"description":"data/scl/mbira_kalimba.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_kalimba2":{"description":"data/scl/mbira_kalimba2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_kalimba3":{"description":"data/scl/mbira_kalimba3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_kangombio":{"description":"data/scl/mbira_kangombio.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_kangombio2":{"description":"data/scl/mbira_kangombio2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_kankowela":{"description":"data/scl/mbira_kankowela.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_kankowela2":{"description":"data/scl/mbira_kankowela2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_kankowela3":{"description":"data/scl/mbira_kankowela3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_kankowele":{"description":"data/scl/mbira_kankowele.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_katima":{"description":"data/scl/mbira_katima.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_kiliyo":{"description":"data/scl/mbira_kiliyo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_kombi":{"description":"data/scl/mbira_kombi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_kunaka":{"description":"data/scl/mbira_kunaka.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_kunaka2":{"description":"data/scl/mbira_kunaka2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_limba":{"description":"data/scl/mbira_limba.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_malimba":{"description":"data/scl/mbira_malimba.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_mang_baru":{"description":"data/scl/mbira_mang_baru.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_marimbe":{"description":"data/scl/mbira_marimbe.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_mbele_ko_fuku":{"description":"data/scl/mbira_mbele_ko_fuku.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_mbira":{"description":"data/scl/mbira_mbira.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_muchapata":{"description":"data/scl/mbira_muchapata.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_mude":{"description":"data/scl/mbira_mude.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_mujuru":{"description":"data/scl/mbira_mujuru.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_mumamba":{"description":"data/scl/mbira_mumamba.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_natine":{"description":"data/scl/mbira_natine.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_neikembe":{"description":"data/scl/mbira_neikembe.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_sansi":{"description":"data/scl/mbira_sansi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_sansi2":{"description":"data/scl/mbira_sansi2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mbira_zimb":{"description":"data/scl/mbira_zimb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mboko_bow":{"description":"data/scl/mboko_bow.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mboko_zither":{"description":"data/scl/mboko_zither.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mcclain":{"description":"data/scl/mcclain.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mcclain_18":{"description":"data/scl/mcclain_18.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mcclain_8":{"description":"data/scl/mcclain_8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mccoskey_22":{"description":"data/scl/mccoskey_22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mcgoogy_phi":{"description":"data/scl/mcgoogy_phi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mcgoogy_phi2":{"description":"data/scl/mcgoogy_phi2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mclaren_bar":{"description":"data/scl/mclaren_bar.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mclaren_cps":{"description":"data/scl/mclaren_cps.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mclaren_harm":{"description":"data/scl/mclaren_harm.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mclaren_rath1":{"description":"data/scl/mclaren_rath1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mclaren_rath2":{"description":"data/scl/mclaren_rath2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean10":{"description":"data/scl/mean10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean11":{"description":"data/scl/mean11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean11ls_19":{"description":"data/scl/mean11ls_19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean13":{"description":"data/scl/mean13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean14":{"description":"data/scl/mean14.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean14_15":{"description":"data/scl/mean14_15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean14_19":{"description":"data/scl/mean14_19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean14_7":{"description":"data/scl/mean14_7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean14a":{"description":"data/scl/mean14a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean16":{"description":"data/scl/mean16.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean17":{"description":"data/scl/mean17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean17_17":{"description":"data/scl/mean17_17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean17_19":{"description":"data/scl/mean17_19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean18":{"description":"data/scl/mean18.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean19":{"description":"data/scl/mean19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean19r":{"description":"data/scl/mean19r.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean19t":{"description":"data/scl/mean19t.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean23":{"description":"data/scl/mean23.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean23six":{"description":"data/scl/mean23six.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean24rat":{"description":"data/scl/mean24rat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean25":{"description":"data/scl/mean25.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean26":{"description":"data/scl/mean26.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean26_21":{"description":"data/scl/mean26_21.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean27":{"description":"data/scl/mean27.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean29":{"description":"data/scl/mean29.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean2nine":{"description":"data/scl/mean2nine.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean2nine_15":{"description":"data/scl/mean2nine_15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean2nine_19":{"description":"data/scl/mean2nine_19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean2nine_31":{"description":"data/scl/mean2nine_31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean2sev":{"description":"data/scl/mean2sev.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean2sev10":{"description":"data/scl/mean2sev10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean2sev_15":{"description":"data/scl/mean2sev_15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean2sev_19":{"description":"data/scl/mean2sev_19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean2sev_31":{"description":"data/scl/mean2sev_31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean2seveb":{"description":"data/scl/mean2seveb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean2sevr":{"description":"data/scl/mean2sevr.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mean4nine":{"description":"data/scl/mean4nine.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanbrat32":{"description":"data/scl/meanbrat32.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanbrat32a":{"description":"data/scl/meanbrat32a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanbratm32":{"description":"data/scl/meanbratm32.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meandia":{"description":"data/scl/meandia.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meaneb1071":{"description":"data/scl/meaneb1071.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meaneb1071a":{"description":"data/scl/meaneb1071a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meaneb341":{"description":"data/scl/meaneb341.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meaneb371":{"description":"data/scl/meaneb371.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meaneb371a":{"description":"data/scl/meaneb371a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meaneb381":{"description":"data/scl/meaneb381.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meaneb451":{"description":"data/scl/meaneb451.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meaneb471":{"description":"data/scl/meaneb471.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meaneb471a":{"description":"data/scl/meaneb471a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meaneb471b":{"description":"data/scl/meaneb471b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meaneb472":{"description":"data/scl/meaneb472.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meaneb472_19":{"description":"data/scl/meaneb472_19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meaneb472a":{"description":"data/scl/meaneb472a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meaneb591":{"description":"data/scl/meaneb591.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meaneb732":{"description":"data/scl/meaneb732.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meaneb732_19":{"description":"data/scl/meaneb732_19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meaneb732a":{"description":"data/scl/meaneb732a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meaneb742":{"description":"data/scl/meaneb742.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meaneb742a":{"description":"data/scl/meaneb742a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meaneb781":{"description":"data/scl/meaneb781.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meaneb891":{"description":"data/scl/meaneb891.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meaneight":{"description":"data/scl/meaneight.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meaneightp":{"description":"data/scl/meaneightp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanfifth":{"description":"data/scl/meanfifth.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanfifth2":{"description":"data/scl/meanfifth2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanfifth_19":{"description":"data/scl/meanfifth_19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanfifth_43":{"description":"data/scl/meanfifth_43.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanfifth_french":{"description":"data/scl/meanfifth_french.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanfiftheb":{"description":"data/scl/meanfiftheb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meangolden":{"description":"data/scl/meangolden.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meangolden_top":{"description":"data/scl/meangolden_top.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanhalf":{"description":"data/scl/meanhalf.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanhar2":{"description":"data/scl/meanhar2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanhar3":{"description":"data/scl/meanhar3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanharris":{"description":"data/scl/meanharris.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanhsev":{"description":"data/scl/meanhsev.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanhskl":{"description":"data/scl/meanhskl.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanlst357_19":{"description":"data/scl/meanlst357_19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanmalc":{"description":"data/scl/meanmalc.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meannine":{"description":"data/scl/meannine.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meannkleis":{"description":"data/scl/meannkleis.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanpi":{"description":"data/scl/meanpi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanpi2":{"description":"data/scl/meanpi2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanpkleis":{"description":"data/scl/meanpkleis.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanquar":{"description":"data/scl/meanquar.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanquar_14":{"description":"data/scl/meanquar_14.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanquar_15":{"description":"data/scl/meanquar_15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanquar_16":{"description":"data/scl/meanquar_16.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanquar_17":{"description":"data/scl/meanquar_17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanquar_19":{"description":"data/scl/meanquar_19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanquar_27":{"description":"data/scl/meanquar_27.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanquar_31":{"description":"data/scl/meanquar_31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanquareb":{"description":"data/scl/meanquareb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanquarm23":{"description":"data/scl/meanquarm23.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanquarn":{"description":"data/scl/meanquarn.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanquarr":{"description":"data/scl/meanquarr.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanquarw2":{"description":"data/scl/meanquarw2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanquarw3":{"description":"data/scl/meanquarw3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanreverse":{"description":"data/scl/meanreverse.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meansabat":{"description":"data/scl/meansabat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meansabat_53":{"description":"data/scl/meansabat_53.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanschis":{"description":"data/scl/meanschis.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanschis7":{"description":"data/scl/meanschis7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanschis_17":{"description":"data/scl/meanschis_17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meansept":{"description":"data/scl/meansept.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meansept2":{"description":"data/scl/meansept2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meansept3":{"description":"data/scl/meansept3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meansept4":{"description":"data/scl/meansept4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meansev":{"description":"data/scl/meansev.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meansev2":{"description":"data/scl/meansev2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meansev_19":{"description":"data/scl/meansev_19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanseveb":{"description":"data/scl/meanseveb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meansixth":{"description":"data/scl/meansixth.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meansixth_19":{"description":"data/scl/meansixth_19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meansixtheb":{"description":"data/scl/meansixtheb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meansixthm":{"description":"data/scl/meansixthm.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meansixthm2":{"description":"data/scl/meansixthm2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meansixthpm":{"description":"data/scl/meansixthpm.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meansixthso":{"description":"data/scl/meansixthso.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meansqunumigpopmo":{"description":"data/scl/meansqunumigpopmo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanstr":{"description":"data/scl/meanstr.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanten":{"description":"data/scl/meanten.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanthird":{"description":"data/scl/meanthird.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanthird_19":{"description":"data/scl/meanthird_19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanthirdeb":{"description":"data/scl/meanthirdeb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanthirdp":{"description":"data/scl/meanthirdp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meantone-fifths11":{"description":"data/scl/meantone-fifths11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meantone19trans37":{"description":"data/scl/meantone19trans37.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meantone19trans37ex":{"description":"data/scl/meantone19trans37ex.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meantone31trans37":{"description":"data/scl/meantone31trans37.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meantone31trans37ex":{"description":"data/scl/meantone31trans37ex.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanvar1":{"description":"data/scl/meanvar1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanvar2":{"description":"data/scl/meanvar2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanvar3":{"description":"data/scl/meanvar3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meanvar4":{"description":"data/scl/meanvar4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meister-p12":{"description":"data/scl/meister-p12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meister-s4":{"description":"data/scl/meister-s4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meister-s5":{"description":"data/scl/meister-s5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meister-synt":{"description":"data/scl/meister-synt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meister-t":{"description":"data/scl/meister-t.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"melog":{"description":"data/scl/melog.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mercadier":{"description":"data/scl/mercadier.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mercadier2":{"description":"data/scl/mercadier2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mercator":{"description":"data/scl/mercator.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mercury_sand":{"description":"data/scl/mercury_sand.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"merrick":{"description":"data/scl/merrick.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mersen-ban":{"description":"data/scl/mersen-ban.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mersen_l1":{"description":"data/scl/mersen_l1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mersen_l2":{"description":"data/scl/mersen_l2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mersen_s1":{"description":"data/scl/mersen_s1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mersen_s2":{"description":"data/scl/mersen_s2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mersen_s3":{"description":"data/scl/mersen_s3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mersenmt1":{"description":"data/scl/mersenmt1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mersenmt2":{"description":"data/scl/mersenmt2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mersenne-t":{"description":"data/scl/mersenne-t.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mersenne_26":{"description":"data/scl/mersenne_26.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mersenne_31":{"description":"data/scl/mersenne_31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"met24-byz-1st_pl-trans":{"description":"data/scl/met24-byz-1st_pl-trans.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"met24-byz-2nd_pl":{"description":"data/scl/met24-byz-2nd_pl.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"met24-byz-3rd-ditonic":{"description":"data/scl/met24-byz-3rd-ditonic.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"met24-byz-3rd":{"description":"data/scl/met24-byz-3rd.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"met24-byz-4th_e":{"description":"data/scl/met24-byz-4th_e.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"met24-byz-4th_e2":{"description":"data/scl/met24-byz-4th_e2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"met24-byz-4th_pl-var1":{"description":"data/scl/met24-byz-4th_pl-var1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"met24-byz-4th_pl-var2":{"description":"data/scl/met24-byz-4th_pl-var2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"met24-byz-4th_pl":{"description":"data/scl/met24-byz-4th_pl.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"met24-byz-barys_diat":{"description":"data/scl/met24-byz-barys_diat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"met24-byz-palace1":{"description":"data/scl/met24-byz-palace1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"met24-byz-palace2":{"description":"data/scl/met24-byz-palace2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"met24-byz-schrom":{"description":"data/scl/met24-byz-schrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"met24-byz-schrom2":{"description":"data/scl/met24-byz-schrom2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"met24-chrys_chrom-2nd_pl":{"description":"data/scl/met24-chrys_chrom-2nd_pl.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"met24-chrys_chromdiat":{"description":"data/scl/met24-chrys_chromdiat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"met24-chrys_diat-1st-68":{"description":"data/scl/met24-chrys_diat-1st-68.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"met24-chrys_diat-1st":{"description":"data/scl/met24-chrys_diat-1st.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"met24-chrys_diat-4th-68":{"description":"data/scl/met24-chrys_diat-4th-68.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"met24-chrys_diat-4th":{"description":"data/scl/met24-chrys_diat-4th.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"met24-chrys_diat-4th_pl":{"description":"data/scl/met24-chrys_diat-4th_pl.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"met24-chrys_diatenh":{"description":"data/scl/met24-chrys_diatenh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"met24-chrys_enhdiat":{"description":"data/scl/met24-chrys_enhdiat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"met24c-cs12-archytan-maqam_cup":{"description":"data/scl/met24c-cs12-archytan-maqam_cup.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"metals":{"description":"data/scl/metals.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"metdia":{"description":"data/scl/metdia.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"metius":{"description":"data/scl/metius.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meyer":{"description":"data/scl/meyer.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"meyer_29":{"description":"data/scl/meyer_29.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mgr12":{"description":"data/scl/mgr12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mgr14":{"description":"data/scl/mgr14.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mgr18":{"description":"data/scl/mgr18.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mid_enh1":{"description":"data/scl/mid_enh1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mid_enh2":{"description":"data/scl/mid_enh2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miller7":{"description":"data/scl/miller7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miller_12":{"description":"data/scl/miller_12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miller_12a":{"description":"data/scl/miller_12a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miller_12r":{"description":"data/scl/miller_12r.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miller_ar1":{"description":"data/scl/miller_ar1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miller_ar2":{"description":"data/scl/miller_ar2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miller_b1":{"description":"data/scl/miller_b1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miller_b2":{"description":"data/scl/miller_b2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miller_bug":{"description":"data/scl/miller_bug.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miller_lazy":{"description":"data/scl/miller_lazy.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miller_nikta":{"description":"data/scl/miller_nikta.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miller_phi-plus-1-udphi":{"description":"data/scl/miller_phi-plus-1-udphi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miller_reflections":{"description":"data/scl/miller_reflections.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miller_sp":{"description":"data/scl/miller_sp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"millerop":{"description":"data/scl/millerop.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"minerva12":{"description":"data/scl/minerva12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"minerva22":{"description":"data/scl/minerva22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"minerva22x":{"description":"data/scl/minerva22x.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"minor_5":{"description":"data/scl/minor_5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"minor_clus":{"description":"data/scl/minor_clus.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"minor_wing":{"description":"data/scl/minor_wing.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"minorthird_19":{"description":"data/scl/minorthird_19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"minortone":{"description":"data/scl/minortone.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miracle1":{"description":"data/scl/miracle1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miracle1a":{"description":"data/scl/miracle1a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miracle2":{"description":"data/scl/miracle2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miracle21trans":{"description":"data/scl/miracle21trans.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miracle21trans511":{"description":"data/scl/miracle21trans511.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miracle24":{"description":"data/scl/miracle24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miracle2a":{"description":"data/scl/miracle2a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miracle2m":{"description":"data/scl/miracle2m.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miracle3":{"description":"data/scl/miracle3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miracle31s":{"description":"data/scl/miracle31s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miracle31trans":{"description":"data/scl/miracle31trans.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miracle31trans511":{"description":"data/scl/miracle31trans511.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miracle3a":{"description":"data/scl/miracle3a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miracle3p":{"description":"data/scl/miracle3p.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miracle41s":{"description":"data/scl/miracle41s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miracle_10":{"description":"data/scl/miracle_10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miracle_12":{"description":"data/scl/miracle_12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miracle_12a":{"description":"data/scl/miracle_12a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miracle_24hi":{"description":"data/scl/miracle_24hi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miracle_24lo":{"description":"data/scl/miracle_24lo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miracle_8":{"description":"data/scl/miracle_8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miring":{"description":"data/scl/miring.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miring1":{"description":"data/scl/miring1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miring2":{"description":"data/scl/miring2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"misca":{"description":"data/scl/misca.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miscb":{"description":"data/scl/miscb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miscc":{"description":"data/scl/miscc.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miscd":{"description":"data/scl/miscd.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"misce":{"description":"data/scl/misce.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miscf":{"description":"data/scl/miscf.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"miscg":{"description":"data/scl/miscg.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"misch":{"description":"data/scl/misch.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"misty":{"description":"data/scl/misty.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mistyschism":{"description":"data/scl/mistyschism.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mitchell":{"description":"data/scl/mitchell.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mixed9_3":{"description":"data/scl/mixed9_3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mixed9_4":{"description":"data/scl/mixed9_4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mixed9_5":{"description":"data/scl/mixed9_5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mixed9_6":{"description":"data/scl/mixed9_6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mixed9_7":{"description":"data/scl/mixed9_7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mixed9_8":{"description":"data/scl/mixed9_8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mixol_chrom":{"description":"data/scl/mixol_chrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mixol_chrom2":{"description":"data/scl/mixol_chrom2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mixol_chrominv":{"description":"data/scl/mixol_chrominv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mixol_diat":{"description":"data/scl/mixol_diat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mixol_diat2":{"description":"data/scl/mixol_diat2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mixol_diatcon":{"description":"data/scl/mixol_diatcon.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mixol_diatinv":{"description":"data/scl/mixol_diatinv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mixol_diatinv2":{"description":"data/scl/mixol_diatinv2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mixol_enh":{"description":"data/scl/mixol_enh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mixol_enh2":{"description":"data/scl/mixol_enh2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mixol_enhinv":{"description":"data/scl/mixol_enhinv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mixol_penta":{"description":"data/scl/mixol_penta.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mixol_pis":{"description":"data/scl/mixol_pis.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mixol_tri1":{"description":"data/scl/mixol_tri1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mixol_tri2":{"description":"data/scl/mixol_tri2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mmmgeo1":{"description":"data/scl/mmmgeo1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mmmgeo2":{"description":"data/scl/mmmgeo2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mmmgeo3a":{"description":"data/scl/mmmgeo3a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mmmgeo4a":{"description":"data/scl/mmmgeo4a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mmmgeo4b":{"description":"data/scl/mmmgeo4b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mmswap":{"description":"data/scl/mmswap.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"moantone12":{"description":"data/scl/moantone12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mobbs-mackenzie":{"description":"data/scl/mobbs-mackenzie.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mohaj-bala_213":{"description":"data/scl/mohaj-bala_213.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mohaj-bala_443":{"description":"data/scl/mohaj-bala_443.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mohajira-to-slendro":{"description":"data/scl/mohajira-to-slendro.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mokhalif":{"description":"data/scl/mokhalif.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"monarda_ji":{"description":"data/scl/monarda_ji.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"monarda_tannic_pote":{"description":"data/scl/monarda_tannic_pote.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"monarda_tannic_te":{"description":"data/scl/monarda_tannic_te.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"montvallon":{"description":"data/scl/montvallon.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"monza":{"description":"data/scl/monza.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"monzismic":{"description":"data/scl/monzismic.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"monzo-sym-11":{"description":"data/scl/monzo-sym-11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"monzo-sym-5":{"description":"data/scl/monzo-sym-5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"monzo-sym-7":{"description":"data/scl/monzo-sym-7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"monzo_pyth-quartertone":{"description":"data/scl/monzo_pyth-quartertone.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"monzo_sumerian_2place12":{"description":"data/scl/monzo_sumerian_2place12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"monzo_sumerian_simp12":{"description":"data/scl/monzo_sumerian_simp12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"moore":{"description":"data/scl/moore.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"morgan":{"description":"data/scl/morgan.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"morgan_c_36":{"description":"data/scl/morgan_c_36.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"morgan_c_46":{"description":"data/scl/morgan_c_46.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"moscow":{"description":"data/scl/moscow.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mothra11br4":{"description":"data/scl/mothra11br4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mothra11rat":{"description":"data/scl/mothra11rat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mothra11sub":{"description":"data/scl/mothra11sub.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mothra16br4":{"description":"data/scl/mothra16br4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mttfokker":{"description":"data/scl/mttfokker.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"munakata":{"description":"data/scl/munakata.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mund45":{"description":"data/scl/mund45.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mundeuc45":{"description":"data/scl/mundeuc45.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"musaqa":{"description":"data/scl/musaqa.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"musaqa_24":{"description":"data/scl/musaqa_24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mustear pentachord 17-limit":{"description":"data/scl/mustear pentachord 17-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mustear pentachord 5-limit":{"description":"data/scl/mustear pentachord 5-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"myna15br25":{"description":"data/scl/myna15br25.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"myna15br3":{"description":"data/scl/myna15br3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"myna19trans":{"description":"data/scl/myna19trans.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"myna19trans37":{"description":"data/scl/myna19trans37.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"myna23":{"description":"data/scl/myna23.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"myna23trans":{"description":"data/scl/myna23trans.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"myna23trans37":{"description":"data/scl/myna23trans37.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"myna27trans":{"description":"data/scl/myna27trans.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"myna27trans37":{"description":"data/scl/myna27trans37.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"myna7opt":{"description":"data/scl/myna7opt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mynadiaechhemi":{"description":"data/scl/mynadiaechhemi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mynafip22":{"description":"data/scl/mynafip22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mystery":{"description":"data/scl/mystery.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mystic-r":{"description":"data/scl/mystic-r.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"mystic":{"description":"data/scl/mystic.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"nakika12":{"description":"data/scl/nakika12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"namo17":{"description":"data/scl/namo17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"narushima-vex":{"description":"data/scl/narushima-vex.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"nassarre":{"description":"data/scl/nassarre.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ndau1":{"description":"data/scl/ndau1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ndau2":{"description":"data/scl/ndau2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ndau3":{"description":"data/scl/ndau3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"negri5_19":{"description":"data/scl/negri5_19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"negri_19":{"description":"data/scl/negri_19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"neid-mar-morg":{"description":"data/scl/neid-mar-morg.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"neidhardm":{"description":"data/scl/neidhardm.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"neidhardt-f10":{"description":"data/scl/neidhardt-f10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"neidhardt-f10i":{"description":"data/scl/neidhardt-f10i.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"neidhardt-f11":{"description":"data/scl/neidhardt-f11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"neidhardt-f12":{"description":"data/scl/neidhardt-f12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"neidhardt-f2":{"description":"data/scl/neidhardt-f2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"neidhardt-f3":{"description":"data/scl/neidhardt-f3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"neidhardt-f4":{"description":"data/scl/neidhardt-f4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"neidhardt-f5":{"description":"data/scl/neidhardt-f5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"neidhardt-f6":{"description":"data/scl/neidhardt-f6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"neidhardt-f7":{"description":"data/scl/neidhardt-f7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"neidhardt-f9":{"description":"data/scl/neidhardt-f9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"neidhardt-s1":{"description":"data/scl/neidhardt-s1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"neidhardt-s2":{"description":"data/scl/neidhardt-s2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"neidhardt-s3":{"description":"data/scl/neidhardt-s3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"neidhardt-t1":{"description":"data/scl/neidhardt-t1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"neidhardt-t2":{"description":"data/scl/neidhardt-t2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"neidhardt-t3":{"description":"data/scl/neidhardt-t3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"neidhardt-t4":{"description":"data/scl/neidhardt-t4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"neidhardt-t5":{"description":"data/scl/neidhardt-t5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"neidhardt1":{"description":"data/scl/neidhardt1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"neidhardt2":{"description":"data/scl/neidhardt2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"neidhardt3":{"description":"data/scl/neidhardt3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"neidhardt4":{"description":"data/scl/neidhardt4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"neidhardtn":{"description":"data/scl/neidhardtn.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"nestoria17":{"description":"data/scl/nestoria17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"neutr_diat":{"description":"data/scl/neutr_diat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"neutr_pent1":{"description":"data/scl/neutr_pent1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"neutr_pent2":{"description":"data/scl/neutr_pent2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"new_enh":{"description":"data/scl/new_enh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"new_enh2":{"description":"data/scl/new_enh2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"newcastle":{"description":"data/scl/newcastle.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"newton_15_out_of_53":{"description":"data/scl/newton_15_out_of_53.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"newts":{"description":"data/scl/newts.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"niederbobritzsch":{"description":"data/scl/niederbobritzsch.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"nikriz pentachord 13-limit":{"description":"data/scl/nikriz pentachord 13-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"nikriz pentachord 29-limit":{"description":"data/scl/nikriz pentachord 29-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"nikriz pentachord 67-limit":{"description":"data/scl/nikriz pentachord 67-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"nikriz pentachord 7-limit":{"description":"data/scl/nikriz pentachord 7-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"norden":{"description":"data/scl/norden.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"notchedcube":{"description":"data/scl/notchedcube.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"nova-lesfip":{"description":"data/scl/nova-lesfip.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"novadene":{"description":"data/scl/novadene.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"novaro":{"description":"data/scl/novaro.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"novaro15":{"description":"data/scl/novaro15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"novaro_eb":{"description":"data/scl/novaro_eb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"nufip15":{"description":"data/scl/nufip15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ochmohaporc":{"description":"data/scl/ochmohaporc.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"oconnell":{"description":"data/scl/oconnell.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"oconnell_11":{"description":"data/scl/oconnell_11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"oconnell_14":{"description":"data/scl/oconnell_14.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"oconnell_7":{"description":"data/scl/oconnell_7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"oconnell_9":{"description":"data/scl/oconnell_9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"oconnell_9a":{"description":"data/scl/oconnell_9a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"octasquare25":{"description":"data/scl/octasquare25.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"octocoh":{"description":"data/scl/octocoh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"octoid72":{"description":"data/scl/octoid72.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"octone":{"description":"data/scl/octone.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"octony_min":{"description":"data/scl/octony_min.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"octony_rot":{"description":"data/scl/octony_rot.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"octony_trans":{"description":"data/scl/octony_trans.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"octony_trans2":{"description":"data/scl/octony_trans2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"octony_trans3":{"description":"data/scl/octony_trans3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"octony_trans4":{"description":"data/scl/octony_trans4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"octony_trans5":{"description":"data/scl/octony_trans5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"octony_trans6":{"description":"data/scl/octony_trans6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"octony_u":{"description":"data/scl/octony_u.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"odd1":{"description":"data/scl/odd1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"odd2":{"description":"data/scl/odd2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"odonnell":{"description":"data/scl/odonnell.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"oettingen":{"description":"data/scl/oettingen.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"oettingen2":{"description":"data/scl/oettingen2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ogr10":{"description":"data/scl/ogr10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ogr10a":{"description":"data/scl/ogr10a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ogr11":{"description":"data/scl/ogr11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ogr12":{"description":"data/scl/ogr12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ogr2":{"description":"data/scl/ogr2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ogr3":{"description":"data/scl/ogr3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ogr4":{"description":"data/scl/ogr4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ogr4a":{"description":"data/scl/ogr4a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ogr5":{"description":"data/scl/ogr5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ogr5a":{"description":"data/scl/ogr5a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ogr5b":{"description":"data/scl/ogr5b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ogr5c":{"description":"data/scl/ogr5c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ogr6":{"description":"data/scl/ogr6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ogr6a":{"description":"data/scl/ogr6a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ogr6b":{"description":"data/scl/ogr6b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ogr6c":{"description":"data/scl/ogr6c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ogr6d":{"description":"data/scl/ogr6d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ogr7":{"description":"data/scl/ogr7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ogr8":{"description":"data/scl/ogr8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ogr9":{"description":"data/scl/ogr9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"oktone":{"description":"data/scl/oktone.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"oldani":{"description":"data/scl/oldani.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"oljare":{"description":"data/scl/oljare.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"oljare17":{"description":"data/scl/oljare17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"olympos":{"description":"data/scl/olympos.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"omaha":{"description":"data/scl/omaha.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"omahat":{"description":"data/scl/omahat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"opelt":{"description":"data/scl/opelt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"organ1373a":{"description":"data/scl/organ1373a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"organ1373b":{"description":"data/scl/organ1373b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"orwell-graham":{"description":"data/scl/orwell-graham.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"orwell13-modmos-containing-minvera12":{"description":"data/scl/orwell13-modmos-containing-minvera12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"orwell13eb":{"description":"data/scl/orwell13eb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"orwell13trans":{"description":"data/scl/orwell13trans.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"orwell13trans57":{"description":"data/scl/orwell13trans57.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"orwell13trans57ex":{"description":"data/scl/orwell13trans57ex.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"orwell22":{"description":"data/scl/orwell22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"orwell22trans":{"description":"data/scl/orwell22trans.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"orwell22trans57":{"description":"data/scl/orwell22trans57.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"orwell31trans":{"description":"data/scl/orwell31trans.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"orwell31trans57":{"description":"data/scl/orwell31trans57.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"orwell9-12":{"description":"data/scl/orwell9-12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"orwellismic22_11":{"description":"data/scl/orwellismic22_11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"orwellismic9":{"description":"data/scl/orwellismic9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"p4":{"description":"data/scl/p4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"p5":{"description":"data/scl/p5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"p5a":{"description":"data/scl/p5a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"p6":{"description":"data/scl/p6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"p6a":{"description":"data/scl/p6a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pagano_b":{"description":"data/scl/pagano_b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pajara_mm":{"description":"data/scl/pajara_mm.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pajara_rms":{"description":"data/scl/pajara_rms.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pajara_top":{"description":"data/scl/pajara_top.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pajhedgepythquas1":{"description":"data/scl/pajhedgepythquas1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pajhedgepythquas2":{"description":"data/scl/pajhedgepythquas2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pajmagorpor22":{"description":"data/scl/pajmagorpor22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pajmagorpor22_100":{"description":"data/scl/pajmagorpor22_100.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pajmagorpor22_176":{"description":"data/scl/pajmagorpor22_176.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pajmagorpor22_225":{"description":"data/scl/pajmagorpor22_225.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pajmagorpor22_385":{"description":"data/scl/pajmagorpor22_385.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pajmagorpor22apollo":{"description":"data/scl/pajmagorpor22apollo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pajmagorpor22ares":{"description":"data/scl/pajmagorpor22ares.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pajmagorpor22marvel":{"description":"data/scl/pajmagorpor22marvel.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pajmagorpor22minerva":{"description":"data/scl/pajmagorpor22minerva.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pajmagorpor22supermagic":{"description":"data/scl/pajmagorpor22supermagic.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"palace":{"description":"data/scl/palace.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"palace2":{"description":"data/scl/palace2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"panpipe1":{"description":"data/scl/panpipe1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"panpipe2":{"description":"data/scl/panpipe2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"panpipe3":{"description":"data/scl/panpipe3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parachrom":{"description":"data/scl/parachrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parakleismic":{"description":"data/scl/parakleismic.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parapyth12-7":{"description":"data/scl/parapyth12-7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parapyth12":{"description":"data/scl/parapyth12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parapyth12trans":{"description":"data/scl/parapyth12trans.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parapyth17-7":{"description":"data/scl/parapyth17-7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parapyth17trans":{"description":"data/scl/parapyth17trans.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parizek_13lqmt":{"description":"data/scl/parizek_13lqmt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parizek_17lqmt":{"description":"data/scl/parizek_17lqmt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parizek_7lmtd1":{"description":"data/scl/parizek_7lmtd1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parizek_7lqmtd2":{"description":"data/scl/parizek_7lqmtd2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parizek_cirot":{"description":"data/scl/parizek_cirot.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parizek_epi":{"description":"data/scl/parizek_epi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parizek_epi2":{"description":"data/scl/parizek_epi2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parizek_epi2a":{"description":"data/scl/parizek_epi2a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parizek_ji1":{"description":"data/scl/parizek_ji1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parizek_jiweltmp":{"description":"data/scl/parizek_jiweltmp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parizek_jiwt2":{"description":"data/scl/parizek_jiwt2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parizek_jiwt3":{"description":"data/scl/parizek_jiwt3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parizek_llt7":{"description":"data/scl/parizek_llt7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parizek_lt13":{"description":"data/scl/parizek_lt13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parizek_lt130":{"description":"data/scl/parizek_lt130.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parizek_meanqr":{"description":"data/scl/parizek_meanqr.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parizek_part7_12":{"description":"data/scl/parizek_part7_12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parizek_qmeb1":{"description":"data/scl/parizek_qmeb1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parizek_qmeb2":{"description":"data/scl/parizek_qmeb2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parizek_qmeb3":{"description":"data/scl/parizek_qmeb3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parizek_qmtp12":{"description":"data/scl/parizek_qmtp12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parizek_qmtp24":{"description":"data/scl/parizek_qmtp24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parizek_ragipuq1":{"description":"data/scl/parizek_ragipuq1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parizek_rphi":{"description":"data/scl/parizek_rphi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parizek_syndiat":{"description":"data/scl/parizek_syndiat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parizek_syntonal":{"description":"data/scl/parizek_syntonal.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parizek_temp":{"description":"data/scl/parizek_temp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parizek_temp19":{"description":"data/scl/parizek_temp19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parizek_triharmon":{"description":"data/scl/parizek_triharmon.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parizek_well":{"description":"data/scl/parizek_well.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parizek_xid1":{"description":"data/scl/parizek_xid1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parizek_xid2":{"description":"data/scl/parizek_xid2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parizekhex":{"description":"data/scl/parizekhex.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"parrot":{"description":"data/scl/parrot.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"part12":{"description":"data/scl/part12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"partch-barstow":{"description":"data/scl/partch-barstow.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"partch-greek":{"description":"data/scl/partch-greek.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"partch-grm":{"description":"data/scl/partch-grm.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"partch-indian":{"description":"data/scl/partch-indian.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"partch_29-av":{"description":"data/scl/partch_29-av.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"partch_29":{"description":"data/scl/partch_29.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"partch_37":{"description":"data/scl/partch_37.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"partch_39":{"description":"data/scl/partch_39.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"partch_41":{"description":"data/scl/partch_41.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"partch_41a":{"description":"data/scl/partch_41a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"partch_41comb":{"description":"data/scl/partch_41comb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"partch_43":{"description":"data/scl/partch_43.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"partch_43a":{"description":"data/scl/partch_43a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"patala":{"description":"data/scl/patala.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"paulsmagic":{"description":"data/scl/paulsmagic.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pel-pelog":{"description":"data/scl/pel-pelog.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog1":{"description":"data/scl/pelog1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog10":{"description":"data/scl/pelog10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog11":{"description":"data/scl/pelog11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog12":{"description":"data/scl/pelog12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog13":{"description":"data/scl/pelog13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog14":{"description":"data/scl/pelog14.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog15":{"description":"data/scl/pelog15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog16":{"description":"data/scl/pelog16.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog17":{"description":"data/scl/pelog17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog18":{"description":"data/scl/pelog18.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog19":{"description":"data/scl/pelog19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog2":{"description":"data/scl/pelog2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog20":{"description":"data/scl/pelog20.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog3":{"description":"data/scl/pelog3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog4":{"description":"data/scl/pelog4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog5":{"description":"data/scl/pelog5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog6":{"description":"data/scl/pelog6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog7":{"description":"data/scl/pelog7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog8":{"description":"data/scl/pelog8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog_24":{"description":"data/scl/pelog_24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog_9":{"description":"data/scl/pelog_9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog_a":{"description":"data/scl/pelog_a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog_av":{"description":"data/scl/pelog_av.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog_b":{"description":"data/scl/pelog_b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog_c":{"description":"data/scl/pelog_c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog_he":{"description":"data/scl/pelog_he.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog_jc":{"description":"data/scl/pelog_jc.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog_laras":{"description":"data/scl/pelog_laras.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog_mal":{"description":"data/scl/pelog_mal.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog_me1":{"description":"data/scl/pelog_me1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog_me2":{"description":"data/scl/pelog_me2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog_me3":{"description":"data/scl/pelog_me3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog_pa":{"description":"data/scl/pelog_pa.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog_pa2":{"description":"data/scl/pelog_pa2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog_pb":{"description":"data/scl/pelog_pb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog_pb2":{"description":"data/scl/pelog_pb2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog_schmidt":{"description":"data/scl/pelog_schmidt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog_selun":{"description":"data/scl/pelog_selun.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog_slen":{"description":"data/scl/pelog_slen.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelog_str":{"description":"data/scl/pelog_str.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelogic":{"description":"data/scl/pelogic.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pelogic2":{"description":"data/scl/pelogic2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"penchgah pentachord 7-limit":{"description":"data/scl/penchgah pentachord 7-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"penta1":{"description":"data/scl/penta1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"penta2":{"description":"data/scl/penta2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"penta_opt":{"description":"data/scl/penta_opt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pentadekany":{"description":"data/scl/pentadekany.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pentadekany2":{"description":"data/scl/pentadekany2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pentadekany3":{"description":"data/scl/pentadekany3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pentadekany4":{"description":"data/scl/pentadekany4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pentatetra1":{"description":"data/scl/pentatetra1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pentatetra2":{"description":"data/scl/pentatetra2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pentatetra3":{"description":"data/scl/pentatetra3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pentatriad":{"description":"data/scl/pentatriad.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pentatriad1":{"description":"data/scl/pentatriad1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pepper":{"description":"data/scl/pepper.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pepper2":{"description":"data/scl/pepper2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pepper_archytas12":{"description":"data/scl/pepper_archytas12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pepper_archytas7":{"description":"data/scl/pepper_archytas7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pepper_archytas8":{"description":"data/scl/pepper_archytas8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pepper_didymus9":{"description":"data/scl/pepper_didymus9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pepper_jubilee12":{"description":"data/scl/pepper_jubilee12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pepper_meantone-killer":{"description":"data/scl/pepper_meantone-killer.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pepper_orwellian13":{"description":"data/scl/pepper_orwellian13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pepper_orwellian9":{"description":"data/scl/pepper_orwellian9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pepper_portent11":{"description":"data/scl/pepper_portent11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pepper_sengic7":{"description":"data/scl/pepper_sengic7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pepper_sengic8":{"description":"data/scl/pepper_sengic8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pepper_sengic9":{"description":"data/scl/pepper_sengic9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pepper_sonic13":{"description":"data/scl/pepper_sonic13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pepper_sonic15":{"description":"data/scl/pepper_sonic15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pepper_starling11":{"description":"data/scl/pepper_starling11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pepper_starling7":{"description":"data/scl/pepper_starling7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pepper_zeus7":{"description":"data/scl/pepper_zeus7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pepper_zeus8":{"description":"data/scl/pepper_zeus8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"perkis-indian":{"description":"data/scl/perkis-indian.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"perrett-tt":{"description":"data/scl/perrett-tt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"perrett":{"description":"data/scl/perrett.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"perrett_14":{"description":"data/scl/perrett_14.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"perrett_chrom":{"description":"data/scl/perrett_chrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"perry":{"description":"data/scl/perry.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"perry2":{"description":"data/scl/perry2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"perry3":{"description":"data/scl/perry3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"perry4":{"description":"data/scl/perry4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"persian-far":{"description":"data/scl/persian-far.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"persian-far53":{"description":"data/scl/persian-far53.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"persian-hr":{"description":"data/scl/persian-hr.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"persian-vaz":{"description":"data/scl/persian-vaz.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"persian":{"description":"data/scl/persian.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"persian2":{"description":"data/scl/persian2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phi1_13":{"description":"data/scl/phi1_13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phi_10":{"description":"data/scl/phi_10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phi_11":{"description":"data/scl/phi_11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phi_12":{"description":"data/scl/phi_12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phi_13":{"description":"data/scl/phi_13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phi_13a":{"description":"data/scl/phi_13a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phi_13b":{"description":"data/scl/phi_13b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phi_7b":{"description":"data/scl/phi_7b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phi_7be":{"description":"data/scl/phi_7be.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phi_8":{"description":"data/scl/phi_8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phi_8a":{"description":"data/scl/phi_8a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phi_inv_13":{"description":"data/scl/phi_inv_13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phi_inv_8":{"description":"data/scl/phi_inv_8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phi_mos2":{"description":"data/scl/phi_mos2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phi_mos3":{"description":"data/scl/phi_mos3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phi_mos4":{"description":"data/scl/phi_mos4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phillips_19":{"description":"data/scl/phillips_19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phillips_19a":{"description":"data/scl/phillips_19a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phillips_22":{"description":"data/scl/phillips_22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phillips_ji":{"description":"data/scl/phillips_ji.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phryg_chromcon2":{"description":"data/scl/phryg_chromcon2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phryg_chromconi":{"description":"data/scl/phryg_chromconi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phryg_chrominv":{"description":"data/scl/phryg_chrominv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phryg_chromt":{"description":"data/scl/phryg_chromt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phryg_diat":{"description":"data/scl/phryg_diat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phryg_diatcon":{"description":"data/scl/phryg_diatcon.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phryg_diatinv":{"description":"data/scl/phryg_diatinv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phryg_diatsinv":{"description":"data/scl/phryg_diatsinv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phryg_enh":{"description":"data/scl/phryg_enh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phryg_enhcon":{"description":"data/scl/phryg_enhcon.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phryg_enhinv":{"description":"data/scl/phryg_enhinv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phryg_enhinv2":{"description":"data/scl/phryg_enhinv2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phryg_penta":{"description":"data/scl/phryg_penta.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phryg_pis":{"description":"data/scl/phryg_pis.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phryg_tri1":{"description":"data/scl/phryg_tri1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phryg_tri1inv":{"description":"data/scl/phryg_tri1inv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phryg_tri2":{"description":"data/scl/phryg_tri2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phryg_tri3":{"description":"data/scl/phryg_tri3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phrygian":{"description":"data/scl/phrygian.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phrygian_diat":{"description":"data/scl/phrygian_diat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"phrygian_enh":{"description":"data/scl/phrygian_enh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"piano":{"description":"data/scl/piano.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"piano7":{"description":"data/scl/piano7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_10":{"description":"data/scl/pipedum_10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_10a":{"description":"data/scl/pipedum_10a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_10b":{"description":"data/scl/pipedum_10b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_10c":{"description":"data/scl/pipedum_10c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_10d":{"description":"data/scl/pipedum_10d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_10e":{"description":"data/scl/pipedum_10e.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_10f":{"description":"data/scl/pipedum_10f.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_10g":{"description":"data/scl/pipedum_10g.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_10h":{"description":"data/scl/pipedum_10h.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_10i":{"description":"data/scl/pipedum_10i.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_10j":{"description":"data/scl/pipedum_10j.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_10k":{"description":"data/scl/pipedum_10k.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_10l":{"description":"data/scl/pipedum_10l.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_10m":{"description":"data/scl/pipedum_10m.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_11":{"description":"data/scl/pipedum_11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_11a":{"description":"data/scl/pipedum_11a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_11b":{"description":"data/scl/pipedum_11b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_12":{"description":"data/scl/pipedum_12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_12a":{"description":"data/scl/pipedum_12a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_12b":{"description":"data/scl/pipedum_12b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_12c":{"description":"data/scl/pipedum_12c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_12d":{"description":"data/scl/pipedum_12d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_12e":{"description":"data/scl/pipedum_12e.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_12f":{"description":"data/scl/pipedum_12f.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_12g":{"description":"data/scl/pipedum_12g.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_12h":{"description":"data/scl/pipedum_12h.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_12i":{"description":"data/scl/pipedum_12i.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_12j":{"description":"data/scl/pipedum_12j.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_12k":{"description":"data/scl/pipedum_12k.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_12l":{"description":"data/scl/pipedum_12l.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_13":{"description":"data/scl/pipedum_13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_130":{"description":"data/scl/pipedum_130.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_13a":{"description":"data/scl/pipedum_13a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_13b":{"description":"data/scl/pipedum_13b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_13bp":{"description":"data/scl/pipedum_13bp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_13bp2":{"description":"data/scl/pipedum_13bp2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_13c":{"description":"data/scl/pipedum_13c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_13d":{"description":"data/scl/pipedum_13d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_13e":{"description":"data/scl/pipedum_13e.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_14":{"description":"data/scl/pipedum_14.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_140":{"description":"data/scl/pipedum_140.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_14a":{"description":"data/scl/pipedum_14a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_14b":{"description":"data/scl/pipedum_14b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_14c":{"description":"data/scl/pipedum_14c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_15":{"description":"data/scl/pipedum_15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_15a":{"description":"data/scl/pipedum_15a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_15b":{"description":"data/scl/pipedum_15b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_15c":{"description":"data/scl/pipedum_15c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_15d":{"description":"data/scl/pipedum_15d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_15e":{"description":"data/scl/pipedum_15e.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_15f":{"description":"data/scl/pipedum_15f.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_15g":{"description":"data/scl/pipedum_15g.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_15h":{"description":"data/scl/pipedum_15h.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_16":{"description":"data/scl/pipedum_16.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_17":{"description":"data/scl/pipedum_17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_171":{"description":"data/scl/pipedum_171.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_17a":{"description":"data/scl/pipedum_17a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_17b":{"description":"data/scl/pipedum_17b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_17c":{"description":"data/scl/pipedum_17c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_17d":{"description":"data/scl/pipedum_17d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_17e":{"description":"data/scl/pipedum_17e.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_17f":{"description":"data/scl/pipedum_17f.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_17g":{"description":"data/scl/pipedum_17g.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_18":{"description":"data/scl/pipedum_18.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_18a":{"description":"data/scl/pipedum_18a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_18b":{"description":"data/scl/pipedum_18b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_19a":{"description":"data/scl/pipedum_19a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_19b":{"description":"data/scl/pipedum_19b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_19e":{"description":"data/scl/pipedum_19e.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_19f":{"description":"data/scl/pipedum_19f.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_19g":{"description":"data/scl/pipedum_19g.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_19h":{"description":"data/scl/pipedum_19h.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_19i":{"description":"data/scl/pipedum_19i.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_19j":{"description":"data/scl/pipedum_19j.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_19k":{"description":"data/scl/pipedum_19k.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_19l":{"description":"data/scl/pipedum_19l.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_19m":{"description":"data/scl/pipedum_19m.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_19n":{"description":"data/scl/pipedum_19n.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_19o":{"description":"data/scl/pipedum_19o.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_20":{"description":"data/scl/pipedum_20.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_21":{"description":"data/scl/pipedum_21.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_21a":{"description":"data/scl/pipedum_21a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_21b":{"description":"data/scl/pipedum_21b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_21c":{"description":"data/scl/pipedum_21c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_22":{"description":"data/scl/pipedum_22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_22a":{"description":"data/scl/pipedum_22a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_22b":{"description":"data/scl/pipedum_22b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_22b2":{"description":"data/scl/pipedum_22b2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_22c":{"description":"data/scl/pipedum_22c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_22d":{"description":"data/scl/pipedum_22d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_22e":{"description":"data/scl/pipedum_22e.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_22f":{"description":"data/scl/pipedum_22f.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_22g":{"description":"data/scl/pipedum_22g.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_22h":{"description":"data/scl/pipedum_22h.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_22i":{"description":"data/scl/pipedum_22i.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_22j":{"description":"data/scl/pipedum_22j.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_22k":{"description":"data/scl/pipedum_22k.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_22l":{"description":"data/scl/pipedum_22l.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_22m":{"description":"data/scl/pipedum_22m.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_23":{"description":"data/scl/pipedum_23.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_24":{"description":"data/scl/pipedum_24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_24a":{"description":"data/scl/pipedum_24a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_25":{"description":"data/scl/pipedum_25.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_26":{"description":"data/scl/pipedum_26.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_26a":{"description":"data/scl/pipedum_26a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_26b":{"description":"data/scl/pipedum_26b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_27":{"description":"data/scl/pipedum_27.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_27a":{"description":"data/scl/pipedum_27a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_27b":{"description":"data/scl/pipedum_27b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_27c":{"description":"data/scl/pipedum_27c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_27d":{"description":"data/scl/pipedum_27d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_27e":{"description":"data/scl/pipedum_27e.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_27f":{"description":"data/scl/pipedum_27f.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_27g":{"description":"data/scl/pipedum_27g.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_27h":{"description":"data/scl/pipedum_27h.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_27i":{"description":"data/scl/pipedum_27i.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_27j":{"description":"data/scl/pipedum_27j.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_27k":{"description":"data/scl/pipedum_27k.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_28":{"description":"data/scl/pipedum_28.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_29":{"description":"data/scl/pipedum_29.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_29a":{"description":"data/scl/pipedum_29a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_31":{"description":"data/scl/pipedum_31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_31a":{"description":"data/scl/pipedum_31a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_31a2":{"description":"data/scl/pipedum_31a2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_31b":{"description":"data/scl/pipedum_31b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_31c":{"description":"data/scl/pipedum_31c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_31d":{"description":"data/scl/pipedum_31d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_31e":{"description":"data/scl/pipedum_31e.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_31f":{"description":"data/scl/pipedum_31f.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_31g":{"description":"data/scl/pipedum_31g.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_32":{"description":"data/scl/pipedum_32.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_32a":{"description":"data/scl/pipedum_32a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_34":{"description":"data/scl/pipedum_34.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_342":{"description":"data/scl/pipedum_342.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_34a":{"description":"data/scl/pipedum_34a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_34b":{"description":"data/scl/pipedum_34b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_36":{"description":"data/scl/pipedum_36.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_36a":{"description":"data/scl/pipedum_36a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_37":{"description":"data/scl/pipedum_37.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_38":{"description":"data/scl/pipedum_38.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_38a":{"description":"data/scl/pipedum_38a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_41":{"description":"data/scl/pipedum_41.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_41a":{"description":"data/scl/pipedum_41a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_41b":{"description":"data/scl/pipedum_41b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_41c":{"description":"data/scl/pipedum_41c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_41d":{"description":"data/scl/pipedum_41d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_43":{"description":"data/scl/pipedum_43.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_45":{"description":"data/scl/pipedum_45.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_45a":{"description":"data/scl/pipedum_45a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_46":{"description":"data/scl/pipedum_46.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_46a":{"description":"data/scl/pipedum_46a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_46b":{"description":"data/scl/pipedum_46b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_46c":{"description":"data/scl/pipedum_46c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_46d":{"description":"data/scl/pipedum_46d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_50":{"description":"data/scl/pipedum_50.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_53a":{"description":"data/scl/pipedum_53a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_53b":{"description":"data/scl/pipedum_53b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_53c":{"description":"data/scl/pipedum_53c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_55":{"description":"data/scl/pipedum_55.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_58":{"description":"data/scl/pipedum_58.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_58a":{"description":"data/scl/pipedum_58a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_5a":{"description":"data/scl/pipedum_5a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_65":{"description":"data/scl/pipedum_65.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_65a":{"description":"data/scl/pipedum_65a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_67":{"description":"data/scl/pipedum_67.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_68":{"description":"data/scl/pipedum_68.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_72":{"description":"data/scl/pipedum_72.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_72a":{"description":"data/scl/pipedum_72a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_72b":{"description":"data/scl/pipedum_72b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_72b2":{"description":"data/scl/pipedum_72b2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_72c":{"description":"data/scl/pipedum_72c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_74":{"description":"data/scl/pipedum_74.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_8":{"description":"data/scl/pipedum_8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_81":{"description":"data/scl/pipedum_81.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_87":{"description":"data/scl/pipedum_87.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_8a":{"description":"data/scl/pipedum_8a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_9":{"description":"data/scl/pipedum_9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_99":{"description":"data/scl/pipedum_99.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_9a":{"description":"data/scl/pipedum_9a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_9b":{"description":"data/scl/pipedum_9b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_9c":{"description":"data/scl/pipedum_9c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_9d":{"description":"data/scl/pipedum_9d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pipedum_9e":{"description":"data/scl/pipedum_9e.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pleyel-dussek":{"description":"data/scl/pleyel-dussek.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"plum":{"description":"data/scl/plum.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"polansky_owt1":{"description":"data/scl/polansky_owt1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"polansky_owt2":{"description":"data/scl/polansky_owt2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"polansky_ps":{"description":"data/scl/polansky_ps.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ponsford1":{"description":"data/scl/ponsford1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ponsford2":{"description":"data/scl/ponsford2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"poole-rod":{"description":"data/scl/poole-rod.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"poole":{"description":"data/scl/poole.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"poole_100":{"description":"data/scl/poole_100.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"porcupine":{"description":"data/scl/porcupine.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"porcupine15cfip":{"description":"data/scl/porcupine15cfip.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"porcupine15fip":{"description":"data/scl/porcupine15fip.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"porcupine15lfip":{"description":"data/scl/porcupine15lfip.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"porcupinewoo15":{"description":"data/scl/porcupinewoo15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"porcupinewoo22":{"description":"data/scl/porcupinewoo22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"portbag1":{"description":"data/scl/portbag1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"portbag2":{"description":"data/scl/portbag2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"portent11tri":{"description":"data/scl/portent11tri.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"portent26":{"description":"data/scl/portent26.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"portsmouth":{"description":"data/scl/portsmouth.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pps7":{"description":"data/scl/pps7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"precata19":{"description":"data/scl/precata19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prelleur":{"description":"data/scl/prelleur.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"preston":{"description":"data/scl/preston.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"preston2":{"description":"data/scl/preston2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prime_10":{"description":"data/scl/prime_10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prime_12":{"description":"data/scl/prime_12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prime_5":{"description":"data/scl/prime_5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prime_7":{"description":"data/scl/prime_7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"primewak15":{"description":"data/scl/primewak15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prinz":{"description":"data/scl/prinz.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prinz2":{"description":"data/scl/prinz2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pris":{"description":"data/scl/pris.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prisun":{"description":"data/scl/prisun.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prod13":{"description":"data/scl/prod13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prod7d":{"description":"data/scl/prod7d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prod7s":{"description":"data/scl/prod7s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prodigy11":{"description":"data/scl/prodigy11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prodigy12":{"description":"data/scl/prodigy12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prodigy29":{"description":"data/scl/prodigy29.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prodq13":{"description":"data/scl/prodq13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prog_ennea":{"description":"data/scl/prog_ennea.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prog_ennea1":{"description":"data/scl/prog_ennea1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prog_ennea2":{"description":"data/scl/prog_ennea2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prog_ennea3":{"description":"data/scl/prog_ennea3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prooijen1":{"description":"data/scl/prooijen1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prooijen2":{"description":"data/scl/prooijen2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop10a":{"description":"data/scl/prop10a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop10b":{"description":"data/scl/prop10b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop10c":{"description":"data/scl/prop10c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop10d":{"description":"data/scl/prop10d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop10e":{"description":"data/scl/prop10e.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop10f":{"description":"data/scl/prop10f.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop10g":{"description":"data/scl/prop10g.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop10h":{"description":"data/scl/prop10h.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop10i":{"description":"data/scl/prop10i.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop10j":{"description":"data/scl/prop10j.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop10k":{"description":"data/scl/prop10k.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop10l":{"description":"data/scl/prop10l.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop7a":{"description":"data/scl/prop7a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop7b":{"description":"data/scl/prop7b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop7c":{"description":"data/scl/prop7c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop7d":{"description":"data/scl/prop7d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop7e":{"description":"data/scl/prop7e.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop7f":{"description":"data/scl/prop7f.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop7g":{"description":"data/scl/prop7g.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop7h":{"description":"data/scl/prop7h.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop8a":{"description":"data/scl/prop8a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop8b":{"description":"data/scl/prop8b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop8c":{"description":"data/scl/prop8c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop8d":{"description":"data/scl/prop8d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop8e":{"description":"data/scl/prop8e.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop8f":{"description":"data/scl/prop8f.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop8g":{"description":"data/scl/prop8g.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop8h":{"description":"data/scl/prop8h.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop8i":{"description":"data/scl/prop8i.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop8j":{"description":"data/scl/prop8j.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop8k":{"description":"data/scl/prop8k.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop9a":{"description":"data/scl/prop9a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop9b":{"description":"data/scl/prop9b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop9d":{"description":"data/scl/prop9d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop9e":{"description":"data/scl/prop9e.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop9f":{"description":"data/scl/prop9f.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop9g":{"description":"data/scl/prop9g.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop9h":{"description":"data/scl/prop9h.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop9j":{"description":"data/scl/prop9j.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop9k":{"description":"data/scl/prop9k.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop9l":{"description":"data/scl/prop9l.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop9o":{"description":"data/scl/prop9o.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop9q":{"description":"data/scl/prop9q.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"prop9r":{"description":"data/scl/prop9r.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ps-dorian":{"description":"data/scl/ps-dorian.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ps-enh":{"description":"data/scl/ps-enh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ps-hypod":{"description":"data/scl/ps-hypod.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ps-hypod2":{"description":"data/scl/ps-hypod2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ps-mixol":{"description":"data/scl/ps-mixol.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ptolemy":{"description":"data/scl/ptolemy.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ptolemy_chrom":{"description":"data/scl/ptolemy_chrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ptolemy_ddiat":{"description":"data/scl/ptolemy_ddiat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ptolemy_diat":{"description":"data/scl/ptolemy_diat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ptolemy_diat2":{"description":"data/scl/ptolemy_diat2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ptolemy_diat3":{"description":"data/scl/ptolemy_diat3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ptolemy_diat4":{"description":"data/scl/ptolemy_diat4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ptolemy_diat5":{"description":"data/scl/ptolemy_diat5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ptolemy_diff":{"description":"data/scl/ptolemy_diff.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ptolemy_enh":{"description":"data/scl/ptolemy_enh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ptolemy_exp":{"description":"data/scl/ptolemy_exp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ptolemy_ext":{"description":"data/scl/ptolemy_ext.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ptolemy_hom":{"description":"data/scl/ptolemy_hom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ptolemy_hominv":{"description":"data/scl/ptolemy_hominv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ptolemy_hominv2":{"description":"data/scl/ptolemy_hominv2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ptolemy_iast":{"description":"data/scl/ptolemy_iast.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ptolemy_iastaiol":{"description":"data/scl/ptolemy_iastaiol.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ptolemy_ichrom":{"description":"data/scl/ptolemy_ichrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ptolemy_idiat":{"description":"data/scl/ptolemy_idiat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ptolemy_imix":{"description":"data/scl/ptolemy_imix.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ptolemy_malak":{"description":"data/scl/ptolemy_malak.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ptolemy_malak2":{"description":"data/scl/ptolemy_malak2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ptolemy_mdiat":{"description":"data/scl/ptolemy_mdiat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ptolemy_mdiat2":{"description":"data/scl/ptolemy_mdiat2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ptolemy_mdiat3":{"description":"data/scl/ptolemy_mdiat3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ptolemy_meta":{"description":"data/scl/ptolemy_meta.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ptolemy_mix":{"description":"data/scl/ptolemy_mix.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ptolemy_perm":{"description":"data/scl/ptolemy_perm.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ptolemy_prod":{"description":"data/scl/ptolemy_prod.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ptolemy_tree":{"description":"data/scl/ptolemy_tree.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pum14marvwoo":{"description":"data/scl/pum14marvwoo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pummelmarvwoo":{"description":"data/scl/pummelmarvwoo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pump12_1":{"description":"data/scl/pump12_1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pump12_2":{"description":"data/scl/pump12_2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pump13":{"description":"data/scl/pump13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pump14":{"description":"data/scl/pump14.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pump15":{"description":"data/scl/pump15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pump16":{"description":"data/scl/pump16.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pump17":{"description":"data/scl/pump17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pump18":{"description":"data/scl/pump18.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pyclesfip17":{"description":"data/scl/pyclesfip17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pygmie":{"description":"data/scl/pygmie.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pykett_dorset":{"description":"data/scl/pykett_dorset.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pyle":{"description":"data/scl/pyle.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pyramid":{"description":"data/scl/pyramid.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pyramid_down":{"description":"data/scl/pyramid_down.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pyth_12":{"description":"data/scl/pyth_12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pyth_12s":{"description":"data/scl/pyth_12s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pyth_17":{"description":"data/scl/pyth_17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pyth_17s":{"description":"data/scl/pyth_17s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pyth_22":{"description":"data/scl/pyth_22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pyth_27":{"description":"data/scl/pyth_27.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pyth_31":{"description":"data/scl/pyth_31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pyth_7a":{"description":"data/scl/pyth_7a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pyth_chrom":{"description":"data/scl/pyth_chrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pyth_sev":{"description":"data/scl/pyth_sev.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pyth_sev_16":{"description":"data/scl/pyth_sev_16.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"pyth_third":{"description":"data/scl/pyth_third.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"qadir":{"description":"data/scl/qadir.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"quasi_9":{"description":"data/scl/quasi_9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"quasic22":{"description":"data/scl/quasic22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"quint_chrom":{"description":"data/scl/quint_chrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"qx1":{"description":"data/scl/qx1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"qx2":{"description":"data/scl/qx2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ragib":{"description":"data/scl/ragib.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ragib7":{"description":"data/scl/ragib7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ragipu16":{"description":"data/scl/ragipu16.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ragipu17":{"description":"data/scl/ragipu17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ragismic19":{"description":"data/scl/ragismic19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rain123":{"description":"data/scl/rain123.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rain159":{"description":"data/scl/rain159.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"raintree":{"description":"data/scl/raintree.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"raintree2":{"description":"data/scl/raintree2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rameau-flat":{"description":"data/scl/rameau-flat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rameau-french":{"description":"data/scl/rameau-french.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rameau-gall":{"description":"data/scl/rameau-gall.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rameau-gall2":{"description":"data/scl/rameau-gall2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rameau-merc":{"description":"data/scl/rameau-merc.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rameau-minor":{"description":"data/scl/rameau-minor.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rameau-nouv":{"description":"data/scl/rameau-nouv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rameau-sharp":{"description":"data/scl/rameau-sharp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rameau":{"description":"data/scl/rameau.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ramis":{"description":"data/scl/ramis.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rankfour46a":{"description":"data/scl/rankfour46a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rankfour46b":{"description":"data/scl/rankfour46b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rapoport_8":{"description":"data/scl/rapoport_8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rast pentachord 11-limit":{"description":"data/scl/rast pentachord 11-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rast pentachord 31-limit":{"description":"data/scl/rast pentachord 31-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rast pentachord 5-limit":{"description":"data/scl/rast pentachord 5-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rast tetrachord 11-limit":{"description":"data/scl/rast tetrachord 11-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rast tetrachord 31-limit":{"description":"data/scl/rast tetrachord 31-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rast tetrachord 5-limit":{"description":"data/scl/rast tetrachord 5-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rast_11-limit":{"description":"data/scl/rast_11-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rast_7-limit":{"description":"data/scl/rast_7-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rast_moha":{"description":"data/scl/rast_moha.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rastgross2":{"description":"data/scl/rastgross2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rastgross3":{"description":"data/scl/rastgross3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rat_dorenh":{"description":"data/scl/rat_dorenh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rat_hypodenh":{"description":"data/scl/rat_hypodenh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rat_hypodenh2":{"description":"data/scl/rat_hypodenh2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rat_hypodenh3":{"description":"data/scl/rat_hypodenh3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rat_hypodhex":{"description":"data/scl/rat_hypodhex.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rat_hypodhex2":{"description":"data/scl/rat_hypodhex2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rat_hypodhex3":{"description":"data/scl/rat_hypodhex3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rat_hypodhex4":{"description":"data/scl/rat_hypodhex4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rat_hypodhex5":{"description":"data/scl/rat_hypodhex5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rat_hypodhex6":{"description":"data/scl/rat_hypodhex6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rat_hypodpen":{"description":"data/scl/rat_hypodpen.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rat_hypodpen2":{"description":"data/scl/rat_hypodpen2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rat_hypodpen3":{"description":"data/scl/rat_hypodpen3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rat_hypodpen4":{"description":"data/scl/rat_hypodpen4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rat_hypodpen5":{"description":"data/scl/rat_hypodpen5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rat_hypodpen6":{"description":"data/scl/rat_hypodpen6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rat_hypodtri":{"description":"data/scl/rat_hypodtri.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rat_hypodtri2":{"description":"data/scl/rat_hypodtri2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rat_hypolenh":{"description":"data/scl/rat_hypolenh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rat_hypopchrom":{"description":"data/scl/rat_hypopchrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rat_hypopenh":{"description":"data/scl/rat_hypopenh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rat_hypoppen":{"description":"data/scl/rat_hypoppen.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rat_hypoptri":{"description":"data/scl/rat_hypoptri.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rat_hypoptri2":{"description":"data/scl/rat_hypoptri2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rectsp10":{"description":"data/scl/rectsp10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rectsp10a":{"description":"data/scl/rectsp10a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rectsp11":{"description":"data/scl/rectsp11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rectsp12":{"description":"data/scl/rectsp12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rectsp6":{"description":"data/scl/rectsp6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rectsp6a":{"description":"data/scl/rectsp6a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rectsp6amarvwoo":{"description":"data/scl/rectsp6amarvwoo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rectsp7":{"description":"data/scl/rectsp7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rectsp7a":{"description":"data/scl/rectsp7a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rectsp8":{"description":"data/scl/rectsp8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rectsp8a":{"description":"data/scl/rectsp8a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rectsp9":{"description":"data/scl/rectsp9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rectsp9a":{"description":"data/scl/rectsp9a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"redfield":{"description":"data/scl/redfield.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"reinhard":{"description":"data/scl/reinhard.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"reinhardj17":{"description":"data/scl/reinhardj17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"renteng1":{"description":"data/scl/renteng1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"renteng2":{"description":"data/scl/renteng2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"renteng3":{"description":"data/scl/renteng3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"renteng4":{"description":"data/scl/renteng4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"riccati":{"description":"data/scl/riccati.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"riemann":{"description":"data/scl/riemann.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"riley_albion":{"description":"data/scl/riley_albion.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"riley_rosary":{"description":"data/scl/riley_rosary.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"robot_dead":{"description":"data/scl/robot_dead.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"robot_live":{"description":"data/scl/robot_live.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rodan26opt":{"description":"data/scl/rodan26opt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rodan31opt":{"description":"data/scl/rodan31opt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rodan41opt":{"description":"data/scl/rodan41opt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rodgers_chevyshake":{"description":"data/scl/rodgers_chevyshake.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rogers_7":{"description":"data/scl/rogers_7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rogers_wind":{"description":"data/scl/rogers_wind.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"romieu":{"description":"data/scl/romieu.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"romieu_inv":{"description":"data/scl/romieu_inv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rosati_21":{"description":"data/scl/rosati_21.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rosati_21a":{"description":"data/scl/rosati_21a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rosati_21m":{"description":"data/scl/rosati_21m.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rothert":{"description":"data/scl/rothert.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"roulette19":{"description":"data/scl/roulette19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rousseau":{"description":"data/scl/rousseau.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rousseau2":{"description":"data/scl/rousseau2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rousseau3":{"description":"data/scl/rousseau3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rousseau4":{"description":"data/scl/rousseau4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rousseauk":{"description":"data/scl/rousseauk.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rousseauw":{"description":"data/scl/rousseauw.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rozencrantz":{"description":"data/scl/rozencrantz.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rsr_12":{"description":"data/scl/rsr_12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rvf1":{"description":"data/scl/rvf1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rvf2":{"description":"data/scl/rvf2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rvf3":{"description":"data/scl/rvf3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rvf4":{"description":"data/scl/rvf4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"rvfj_12":{"description":"data/scl/rvfj_12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"saba pentachord 13-limit a":{"description":"data/scl/saba pentachord 13-limit a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"saba pentachord 13-limit b":{"description":"data/scl/saba pentachord 13-limit b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"saba pentachord 19-limit":{"description":"data/scl/saba pentachord 19-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"saba pentachord 23-limit a+b":{"description":"data/scl/saba pentachord 23-limit a+b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"saba pentachord 23-limit a":{"description":"data/scl/saba pentachord 23-limit a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"saba pentachord 23-limit b":{"description":"data/scl/saba pentachord 23-limit b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"saba pentachord 31-limit":{"description":"data/scl/saba pentachord 31-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"saba_sup":{"description":"data/scl/saba_sup.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sabbagh":{"description":"data/scl/sabbagh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sabbagh2":{"description":"data/scl/sabbagh2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"safi_arabic":{"description":"data/scl/safi_arabic.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"safi_arabic_s":{"description":"data/scl/safi_arabic_s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"safi_buzurk":{"description":"data/scl/safi_buzurk.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"safi_diat":{"description":"data/scl/safi_diat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"safi_diat2":{"description":"data/scl/safi_diat2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"safi_isfahan":{"description":"data/scl/safi_isfahan.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"safi_isfahan2":{"description":"data/scl/safi_isfahan2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"safi_major":{"description":"data/scl/safi_major.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"safi_rahevi":{"description":"data/scl/safi_rahevi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"safi_unnamed1":{"description":"data/scl/safi_unnamed1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"safi_unnamed2":{"description":"data/scl/safi_unnamed2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"safi_unnamed3":{"description":"data/scl/safi_unnamed3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"safi_unnamed4":{"description":"data/scl/safi_unnamed4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"safi_zirefkend-i":{"description":"data/scl/safi_zirefkend-i.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"safi_zirefkend":{"description":"data/scl/safi_zirefkend.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"safi_zirefkend2":{"description":"data/scl/safi_zirefkend2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"safiyuddin_actual_buzurg":{"description":"data/scl/safiyuddin_actual_buzurg.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"safiyuddin_actual_isfahan":{"description":"data/scl/safiyuddin_actual_isfahan.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"safiyuddin_actual_rahavi":{"description":"data/scl/safiyuddin_actual_rahavi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"safiyuddin_actual_zirefkend_octavedgenus":{"description":"data/scl/safiyuddin_actual_zirefkend_octavedgenus.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"safiyuddin_udfretratios":{"description":"data/scl/safiyuddin_udfretratios.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"salinas_19":{"description":"data/scl/salinas_19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"salinas_24":{"description":"data/scl/salinas_24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"salinas_enh":{"description":"data/scl/salinas_enh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"salunding":{"description":"data/scl/salunding.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"samad_oghab_dokhtaramme_zurnascale":{"description":"data/scl/samad_oghab_dokhtaramme_zurnascale.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sankey":{"description":"data/scl/sankey.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"santur1":{"description":"data/scl/santur1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"santur2":{"description":"data/scl/santur2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sanza":{"description":"data/scl/sanza.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sanza2":{"description":"data/scl/sanza2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sauveur":{"description":"data/scl/sauveur.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sauveur2":{"description":"data/scl/sauveur2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sauveur_17":{"description":"data/scl/sauveur_17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sauveur_ji":{"description":"data/scl/sauveur_ji.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"savas_bardiat":{"description":"data/scl/savas_bardiat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"savas_barenh":{"description":"data/scl/savas_barenh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"savas_chrom":{"description":"data/scl/savas_chrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"savas_diat":{"description":"data/scl/savas_diat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"savas_palace":{"description":"data/scl/savas_palace.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sazkar7":{"description":"data/scl/sazkar7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sc311_41":{"description":"data/scl/sc311_41.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"scalatron":{"description":"data/scl/scalatron.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"scheffer":{"description":"data/scl/scheffer.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schiassi":{"description":"data/scl/schiassi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schidlof":{"description":"data/scl/schidlof.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schillinger":{"description":"data/scl/schillinger.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schis41":{"description":"data/scl/schis41.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schisynch17":{"description":"data/scl/schisynch17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schlesinger_jupiter":{"description":"data/scl/schlesinger_jupiter.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schlesinger_mars":{"description":"data/scl/schlesinger_mars.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schlesinger_saturn":{"description":"data/scl/schlesinger_saturn.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schlick-barbour":{"description":"data/scl/schlick-barbour.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schlick-husmann":{"description":"data/scl/schlick-husmann.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schlick-lange":{"description":"data/scl/schlick-lange.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schlick-ratte":{"description":"data/scl/schlick-ratte.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schlick-schugk":{"description":"data/scl/schlick-schugk.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schlick-tessmer":{"description":"data/scl/schlick-tessmer.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schlick2":{"description":"data/scl/schlick2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schlick3":{"description":"data/scl/schlick3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schlick3a":{"description":"data/scl/schlick3a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schneegass1":{"description":"data/scl/schneegass1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schneegass2":{"description":"data/scl/schneegass2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schneegass3":{"description":"data/scl/schneegass3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schneider_log":{"description":"data/scl/schneider_log.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"scholz":{"description":"data/scl/scholz.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"scholz_epi":{"description":"data/scl/scholz_epi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_10":{"description":"data/scl/schulter_10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_12":{"description":"data/scl/schulter_12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_14_13-12":{"description":"data/scl/schulter_14_13-12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_17":{"description":"data/scl/schulter_17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_24":{"description":"data/scl/schulter_24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_24a":{"description":"data/scl/schulter_24a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_34":{"description":"data/scl/schulter_34.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_44_39-12":{"description":"data/scl/schulter_44_39-12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_44_39-12_c":{"description":"data/scl/schulter_44_39-12_c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_44_39-diat1":{"description":"data/scl/schulter_44_39-diat1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_O3-reg-24":{"description":"data/scl/schulter_O3-reg-24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_O3-zalzalian12_D":{"description":"data/scl/schulter_O3-zalzalian12_D.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_O3_24":{"description":"data/scl/schulter_O3_24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_bamm24b-pegasus12d":{"description":"data/scl/schulter_bamm24b-pegasus12d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_biapotomic_septimal24":{"description":"data/scl/schulter_biapotomic_septimal24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_cantonpentalike34":{"description":"data/scl/schulter_cantonpentalike34.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_cantonpentamint58":{"description":"data/scl/schulter_cantonpentamint58.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_christmas_eve24":{"description":"data/scl/schulter_christmas_eve24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_diat7":{"description":"data/scl/schulter_diat7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_ham":{"description":"data/scl/schulter_ham.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_indigo12":{"description":"data/scl/schulter_indigo12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_jot17a":{"description":"data/scl/schulter_jot17a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_jot17bb":{"description":"data/scl/schulter_jot17bb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_jwt17":{"description":"data/scl/schulter_jwt17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_lin76-34":{"description":"data/scl/schulter_lin76-34.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_met12":{"description":"data/scl/schulter_met12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_met24-buzurg_al-erin10_cup":{"description":"data/scl/schulter_met24-buzurg_al-erin10_cup.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_met24-canonical":{"description":"data/scl/schulter_met24-canonical.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_met24-ji1":{"description":"data/scl/schulter_met24-ji1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_met24-ji3_a":{"description":"data/scl/schulter_met24-ji3_a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_met24-semineutral17_F#":{"description":"data/scl/schulter_met24-semineutral17_F#.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_met24":{"description":"data/scl/schulter_met24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_met24pote":{"description":"data/scl/schulter_met24pote.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_neogeb24":{"description":"data/scl/schulter_neogeb24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_neogji12":{"description":"data/scl/schulter_neogji12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_neogp16a":{"description":"data/scl/schulter_neogp16a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_patheq58":{"description":"data/scl/schulter_patheq58.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_pel":{"description":"data/scl/schulter_pel.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_peppermint":{"description":"data/scl/schulter_peppermint.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_piaguilike2":{"description":"data/scl/schulter_piaguilike2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_qcm62a":{"description":"data/scl/schulter_qcm62a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_qcmlji24":{"description":"data/scl/schulter_qcmlji24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_qcmqd8_4":{"description":"data/scl/schulter_qcmqd8_4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_rbuzurg-buzurg8_cup":{"description":"data/scl/schulter_rbuzurg-buzurg8_cup.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_rbuzurg-buzurg_hijaz_cup":{"description":"data/scl/schulter_rbuzurg-buzurg_hijaz_cup.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_semineutral36":{"description":"data/scl/schulter_semineutral36.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_shur10":{"description":"data/scl/schulter_shur10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_shur17":{"description":"data/scl/schulter_shur17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_simplemint24":{"description":"data/scl/schulter_simplemint24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_sq":{"description":"data/scl/schulter_sq.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_sunvar24-19_16":{"description":"data/scl/schulter_sunvar24-19_16.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_sunvar24_dup":{"description":"data/scl/schulter_sunvar24_dup.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_tedorian":{"description":"data/scl/schulter_tedorian.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_turquoise17-104ed2":{"description":"data/scl/schulter_turquoise17-104ed2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_turquoise17":{"description":"data/scl/schulter_turquoise17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_wilsonistic":{"description":"data/scl/schulter_wilsonistic.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_xenoga24":{"description":"data/scl/schulter_xenoga24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_xenogj24":{"description":"data/scl/schulter_xenogj24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_zarte84":{"description":"data/scl/schulter_zarte84.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"schulter_zarte84n":{"description":"data/scl/schulter_zarte84n.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"scotbag":{"description":"data/scl/scotbag.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"scotbag2":{"description":"data/scl/scotbag2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"scotbag3":{"description":"data/scl/scotbag3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"scotbag4":{"description":"data/scl/scotbag4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"scottd1":{"description":"data/scl/scottd1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"scottd2":{"description":"data/scl/scottd2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"scottd3":{"description":"data/scl/scottd3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"scottd4":{"description":"data/scl/scottd4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"scottj":{"description":"data/scl/scottj.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"scottj2":{"description":"data/scl/scottj2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"scottr_ebvt":{"description":"data/scl/scottr_ebvt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"scottr_lab":{"description":"data/scl/scottr_lab.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor12_1":{"description":"data/scl/secor12_1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor12_2":{"description":"data/scl/secor12_2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor12_3":{"description":"data/scl/secor12_3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor17htt1":{"description":"data/scl/secor17htt1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor17htt2":{"description":"data/scl/secor17htt2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor17htt3":{"description":"data/scl/secor17htt3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor17htt4":{"description":"data/scl/secor17htt4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor17wt":{"description":"data/scl/secor17wt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor17zrt":{"description":"data/scl/secor17zrt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor19wt":{"description":"data/scl/secor19wt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor19wt1":{"description":"data/scl/secor19wt1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor19wt2":{"description":"data/scl/secor19wt2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor1_4tx":{"description":"data/scl/secor1_4tx.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor1_5tx":{"description":"data/scl/secor1_5tx.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor22_17p5":{"description":"data/scl/secor22_17p5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor22_19p3":{"description":"data/scl/secor22_19p3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor22_ji29":{"description":"data/scl/secor22_ji29.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor29htt":{"description":"data/scl/secor29htt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor29tolerant":{"description":"data/scl/secor29tolerant.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor34wt":{"description":"data/scl/secor34wt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor41htt":{"description":"data/scl/secor41htt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor5_23stx":{"description":"data/scl/secor5_23stx.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor5_23tx":{"description":"data/scl/secor5_23tx.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor5_23wt":{"description":"data/scl/secor5_23wt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor_bicycle":{"description":"data/scl/secor_bicycle.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor_pelogic11":{"description":"data/scl/secor_pelogic11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor_pelogic7":{"description":"data/scl/secor_pelogic7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor_pelogic9":{"description":"data/scl/secor_pelogic9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor_swt149":{"description":"data/scl/secor_swt149.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor_vrwt":{"description":"data/scl/secor_vrwt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor_wt1-5":{"description":"data/scl/secor_wt1-5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor_wt1-7":{"description":"data/scl/secor_wt1-7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor_wt1-7r":{"description":"data/scl/secor_wt1-7r.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor_wt10":{"description":"data/scl/secor_wt10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor_wt2-11":{"description":"data/scl/secor_wt2-11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor_wtpb-24a":{"description":"data/scl/secor_wtpb-24a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor_wtpb-24b":{"description":"data/scl/secor_wtpb-24b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor_wtpb-24c":{"description":"data/scl/secor_wtpb-24c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor_wtpb-24d":{"description":"data/scl/secor_wtpb-24d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secor_wtpb-24e":{"description":"data/scl/secor_wtpb-24e.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"secoralternative10":{"description":"data/scl/secoralternative10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"segah pentachord 17-limit":{"description":"data/scl/segah pentachord 17-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"segah pentachord 5-limit":{"description":"data/scl/segah pentachord 5-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"segah-ferahnak pentachord 19-limit":{"description":"data/scl/segah-ferahnak pentachord 19-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"segah2":{"description":"data/scl/segah2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"segah99":{"description":"data/scl/segah99.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"segah_rat":{"description":"data/scl/segah_rat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"seidel_12":{"description":"data/scl/seidel_12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"seidel_32":{"description":"data/scl/seidel_32.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"seikilos":{"description":"data/scl/seikilos.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sejati":{"description":"data/scl/sejati.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sekati1":{"description":"data/scl/sekati1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sekati2":{"description":"data/scl/sekati2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sekati3":{"description":"data/scl/sekati3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sekati4":{"description":"data/scl/sekati4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sekati5":{"description":"data/scl/sekati5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sekati6":{"description":"data/scl/sekati6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sekati7":{"description":"data/scl/sekati7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sekati8":{"description":"data/scl/sekati8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sekati9":{"description":"data/scl/sekati9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"selisir":{"description":"data/scl/selisir.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"selisir2":{"description":"data/scl/selisir2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"selisir3":{"description":"data/scl/selisir3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"selisir4":{"description":"data/scl/selisir4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"selisir5":{"description":"data/scl/selisir5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"selisir6":{"description":"data/scl/selisir6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"semafip":{"description":"data/scl/semafip.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"semmeanflat1":{"description":"data/scl/semmeanflat1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"senior":{"description":"data/scl/senior.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sensax":{"description":"data/scl/sensax.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sensi19":{"description":"data/scl/sensi19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sensi19br1":{"description":"data/scl/sensi19br1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sensidia":{"description":"data/scl/sensidia.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sensisynch19":{"description":"data/scl/sensisynch19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"septenarius440":{"description":"data/scl/septenarius440.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"septenarius440a":{"description":"data/scl/septenarius440a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"septenariusGG49":{"description":"data/scl/septenariusGG49.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"septicyc":{"description":"data/scl/septicyc.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"serafini-11":{"description":"data/scl/serafini-11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"serafini-moonsuite":{"description":"data/scl/serafini-moonsuite.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"serafini-q":{"description":"data/scl/serafini-q.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"serafini-sunday":{"description":"data/scl/serafini-sunday.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"serre_enh":{"description":"data/scl/serre_enh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"set70a":{"description":"data/scl/set70a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sev-elev":{"description":"data/scl/sev-elev.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sevish":{"description":"data/scl/sevish.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sevish_22":{"description":"data/scl/sevish_22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sevish_no":{"description":"data/scl/sevish_no.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sevish_pom":{"description":"data/scl/sevish_pom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sevish_umbriel":{"description":"data/scl/sevish_umbriel.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sevish_whitey":{"description":"data/scl/sevish_whitey.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sha":{"description":"data/scl/sha.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"shahin":{"description":"data/scl/shahin.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"shahin2":{"description":"data/scl/shahin2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"shahin_adl":{"description":"data/scl/shahin_adl.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"shahin_agin":{"description":"data/scl/shahin_agin.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"shahin_baran":{"description":"data/scl/shahin_baran.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"shahin_dance":{"description":"data/scl/shahin_dance.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"shahin_wt":{"description":"data/scl/shahin_wt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"shalfun":{"description":"data/scl/shalfun.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"shansx":{"description":"data/scl/shansx.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sharm1c-conm":{"description":"data/scl/sharm1c-conm.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sharm1c-conp":{"description":"data/scl/sharm1c-conp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sharm1c-dor":{"description":"data/scl/sharm1c-dor.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sharm1c-lyd":{"description":"data/scl/sharm1c-lyd.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sharm1c-mix":{"description":"data/scl/sharm1c-mix.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sharm1c-phr":{"description":"data/scl/sharm1c-phr.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sharm1e-conm":{"description":"data/scl/sharm1e-conm.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sharm1e-conp":{"description":"data/scl/sharm1e-conp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sharm1e-dor":{"description":"data/scl/sharm1e-dor.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sharm1e-lyd":{"description":"data/scl/sharm1e-lyd.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sharm1e-mix":{"description":"data/scl/sharm1e-mix.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sharm1e-phr":{"description":"data/scl/sharm1e-phr.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sharm2c-15":{"description":"data/scl/sharm2c-15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sharm2c-hypod":{"description":"data/scl/sharm2c-hypod.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sharm2c-hypol":{"description":"data/scl/sharm2c-hypol.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sharm2c-hypop":{"description":"data/scl/sharm2c-hypop.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sharm2e-15":{"description":"data/scl/sharm2e-15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sharm2e-hypod":{"description":"data/scl/sharm2e-hypod.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sharm2e-hypol":{"description":"data/scl/sharm2e-hypol.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sharm2e-hypop":{"description":"data/scl/sharm2e-hypop.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sheiman":{"description":"data/scl/sheiman.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sheiman_7":{"description":"data/scl/sheiman_7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sheiman_9":{"description":"data/scl/sheiman_9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sheiman_michael-phi":{"description":"data/scl/sheiman_michael-phi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sheiman_phi_r":{"description":"data/scl/sheiman_phi_r.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sheiman_phiter6":{"description":"data/scl/sheiman_phiter6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sheiman_silver":{"description":"data/scl/sheiman_silver.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"shell5_2":{"description":"data/scl/shell5_2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"shell5_3":{"description":"data/scl/shell5_3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"shell5_4":{"description":"data/scl/shell5_4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"shell7_2":{"description":"data/scl/shell7_2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sherwood":{"description":"data/scl/sherwood.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"shmigelsky":{"description":"data/scl/shmigelsky.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"shrutar-shrutis":{"description":"data/scl/shrutar-shrutis.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"shrutar":{"description":"data/scl/shrutar.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"shrutar_temp":{"description":"data/scl/shrutar_temp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"shrutart":{"description":"data/scl/shrutart.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"siamese":{"description":"data/scl/siamese.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"silbermann1":{"description":"data/scl/silbermann1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"silbermann2":{"description":"data/scl/silbermann2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"silbermann2a":{"description":"data/scl/silbermann2a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"silver":{"description":"data/scl/silver.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"silver_11":{"description":"data/scl/silver_11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"silver_11a":{"description":"data/scl/silver_11a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"silver_11b":{"description":"data/scl/silver_11b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"silver_15":{"description":"data/scl/silver_15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"silver_7":{"description":"data/scl/silver_7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"silver_8":{"description":"data/scl/silver_8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"silver_9":{"description":"data/scl/silver_9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"silvermean":{"description":"data/scl/silvermean.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"simonton":{"description":"data/scl/simonton.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"simp12-amity":{"description":"data/scl/simp12-amity.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"simp12":{"description":"data/scl/simp12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sims":{"description":"data/scl/sims.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sims2":{"description":"data/scl/sims2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sims_24":{"description":"data/scl/sims_24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sims_herf":{"description":"data/scl/sims_herf.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sin":{"description":"data/scl/sin.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sinemod12":{"description":"data/scl/sinemod12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sinemod8":{"description":"data/scl/sinemod8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"singapore":{"description":"data/scl/singapore.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"singapore_coh":{"description":"data/scl/singapore_coh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sintemp6":{"description":"data/scl/sintemp6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sintemp6a":{"description":"data/scl/sintemp6a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sintemp_19":{"description":"data/scl/sintemp_19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sintemp_7":{"description":"data/scl/sintemp_7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"skateboard11":{"description":"data/scl/skateboard11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slen_pel":{"description":"data/scl/slen_pel.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slen_pel16":{"description":"data/scl/slen_pel16.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slen_pel23":{"description":"data/scl/slen_pel23.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slen_pel_jc":{"description":"data/scl/slen_pel_jc.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slen_pel_schmidt":{"description":"data/scl/slen_pel_schmidt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro":{"description":"data/scl/slendro.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro10":{"description":"data/scl/slendro10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro11":{"description":"data/scl/slendro11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro12":{"description":"data/scl/slendro12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro13":{"description":"data/scl/slendro13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro14":{"description":"data/scl/slendro14.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro15":{"description":"data/scl/slendro15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro2":{"description":"data/scl/slendro2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro3":{"description":"data/scl/slendro3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro4":{"description":"data/scl/slendro4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro5_1":{"description":"data/scl/slendro5_1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro5_2":{"description":"data/scl/slendro5_2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro5_4":{"description":"data/scl/slendro5_4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro6":{"description":"data/scl/slendro6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro8":{"description":"data/scl/slendro8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro9":{"description":"data/scl/slendro9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro_7_1":{"description":"data/scl/slendro_7_1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro_7_2":{"description":"data/scl/slendro_7_2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro_7_3":{"description":"data/scl/slendro_7_3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro_7_4":{"description":"data/scl/slendro_7_4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro_7_5":{"description":"data/scl/slendro_7_5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro_7_6":{"description":"data/scl/slendro_7_6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro_a1":{"description":"data/scl/slendro_a1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro_ang":{"description":"data/scl/slendro_ang.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro_ang2":{"description":"data/scl/slendro_ang2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro_av":{"description":"data/scl/slendro_av.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro_av2":{"description":"data/scl/slendro_av2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro_dudon":{"description":"data/scl/slendro_dudon.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro_gam1":{"description":"data/scl/slendro_gam1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro_gam2":{"description":"data/scl/slendro_gam2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro_gum":{"description":"data/scl/slendro_gum.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro_ky1":{"description":"data/scl/slendro_ky1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro_ky2":{"description":"data/scl/slendro_ky2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro_laras":{"description":"data/scl/slendro_laras.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro_m":{"description":"data/scl/slendro_m.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro_madu":{"description":"data/scl/slendro_madu.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro_pa":{"description":"data/scl/slendro_pa.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro_pas":{"description":"data/scl/slendro_pas.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro_pb":{"description":"data/scl/slendro_pb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro_pc":{"description":"data/scl/slendro_pc.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro_pliat":{"description":"data/scl/slendro_pliat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro_q13":{"description":"data/scl/slendro_q13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro_s1":{"description":"data/scl/slendro_s1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro_udan":{"description":"data/scl/slendro_udan.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendro_wolf":{"description":"data/scl/slendro_wolf.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendrob1":{"description":"data/scl/slendrob1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendrob2":{"description":"data/scl/slendrob2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendrob3":{"description":"data/scl/slendrob3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendroc1":{"description":"data/scl/slendroc1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendroc2":{"description":"data/scl/slendroc2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendroc3":{"description":"data/scl/slendroc3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendroc4":{"description":"data/scl/slendroc4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendroc5":{"description":"data/scl/slendroc5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendroc6":{"description":"data/scl/slendroc6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"slendrod1":{"description":"data/scl/slendrod1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smith_eh":{"description":"data/scl/smith_eh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smith_mq":{"description":"data/scl/smith_mq.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw46":{"description":"data/scl/smithgw46.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw46a":{"description":"data/scl/smithgw46a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw72a":{"description":"data/scl/smithgw72a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw72c":{"description":"data/scl/smithgw72c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw72d":{"description":"data/scl/smithgw72d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw72e":{"description":"data/scl/smithgw72e.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw72f":{"description":"data/scl/smithgw72f.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw72g":{"description":"data/scl/smithgw72g.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw72h":{"description":"data/scl/smithgw72h.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw72i":{"description":"data/scl/smithgw72i.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw72j":{"description":"data/scl/smithgw72j.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_15highschool1":{"description":"data/scl/smithgw_15highschool1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_15highschool2":{"description":"data/scl/smithgw_15highschool2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_18":{"description":"data/scl/smithgw_18.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_19highschool1":{"description":"data/scl/smithgw_19highschool1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_19highschool2":{"description":"data/scl/smithgw_19highschool2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_21":{"description":"data/scl/smithgw_21.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_22highschool":{"description":"data/scl/smithgw_22highschool.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_45":{"description":"data/scl/smithgw_45.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_58":{"description":"data/scl/smithgw_58.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_9":{"description":"data/scl/smithgw_9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_al-baked":{"description":"data/scl/smithgw_al-baked.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_al-fried":{"description":"data/scl/smithgw_al-fried.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_asbru":{"description":"data/scl/smithgw_asbru.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_ball":{"description":"data/scl/smithgw_ball.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_ball2":{"description":"data/scl/smithgw_ball2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_bifrost":{"description":"data/scl/smithgw_bifrost.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_cauldron":{"description":"data/scl/smithgw_cauldron.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_choraled":{"description":"data/scl/smithgw_choraled.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_circu":{"description":"data/scl/smithgw_circu.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_ck":{"description":"data/scl/smithgw_ck.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_decab":{"description":"data/scl/smithgw_decab.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_decac":{"description":"data/scl/smithgw_decac.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_decad":{"description":"data/scl/smithgw_decad.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_dhexmarv":{"description":"data/scl/smithgw_dhexmarv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_diff13":{"description":"data/scl/smithgw_diff13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_duopors":{"description":"data/scl/smithgw_duopors.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_dwarf6_7":{"description":"data/scl/smithgw_dwarf6_7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_ennon13":{"description":"data/scl/smithgw_ennon13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_ennon15":{"description":"data/scl/smithgw_ennon15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_ennon28":{"description":"data/scl/smithgw_ennon28.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_ennon43":{"description":"data/scl/smithgw_ennon43.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_euclid3":{"description":"data/scl/smithgw_euclid3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_exotic1":{"description":"data/scl/smithgw_exotic1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_fifaug":{"description":"data/scl/smithgw_fifaug.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_gamelion":{"description":"data/scl/smithgw_gamelion.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_glamma":{"description":"data/scl/smithgw_glamma.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_glumma-hendec":{"description":"data/scl/smithgw_glumma-hendec.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_glumma":{"description":"data/scl/smithgw_glumma.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_gm":{"description":"data/scl/smithgw_gm.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_grail":{"description":"data/scl/smithgw_grail.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_graileq":{"description":"data/scl/smithgw_graileq.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_grailrms":{"description":"data/scl/smithgw_grailrms.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_hahn12":{"description":"data/scl/smithgw_hahn12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_hahn15":{"description":"data/scl/smithgw_hahn15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_hahn16":{"description":"data/scl/smithgw_hahn16.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_hahn19":{"description":"data/scl/smithgw_hahn19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_hahn22":{"description":"data/scl/smithgw_hahn22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_hemw":{"description":"data/scl/smithgw_hemw.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_indianred":{"description":"data/scl/smithgw_indianred.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_klv":{"description":"data/scl/smithgw_klv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_majraj1":{"description":"data/scl/smithgw_majraj1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_majraj2":{"description":"data/scl/smithgw_majraj2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_majraj3":{"description":"data/scl/smithgw_majraj3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_majsyn1":{"description":"data/scl/smithgw_majsyn1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_majsyn2":{"description":"data/scl/smithgw_majsyn2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_majsyn3":{"description":"data/scl/smithgw_majsyn3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_meandin":{"description":"data/scl/smithgw_meandin.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_meanlesfip":{"description":"data/scl/smithgw_meanlesfip.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_meanred":{"description":"data/scl/smithgw_meanred.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_meansp":{"description":"data/scl/smithgw_meansp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_meantune":{"description":"data/scl/smithgw_meantune.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_mir22":{"description":"data/scl/smithgw_mir22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_mmt":{"description":"data/scl/smithgw_mmt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_modmos12a":{"description":"data/scl/smithgw_modmos12a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_monzoblock37":{"description":"data/scl/smithgw_monzoblock37.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_mush":{"description":"data/scl/smithgw_mush.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_nova":{"description":"data/scl/smithgw_nova.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_orw18r":{"description":"data/scl/smithgw_orw18r.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_pel1":{"description":"data/scl/smithgw_pel1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_pel3":{"description":"data/scl/smithgw_pel3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_pk":{"description":"data/scl/smithgw_pk.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_pris":{"description":"data/scl/smithgw_pris.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_prisa":{"description":"data/scl/smithgw_prisa.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_propsep":{"description":"data/scl/smithgw_propsep.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_pum13marv":{"description":"data/scl/smithgw_pum13marv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_qm3a":{"description":"data/scl/smithgw_qm3a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_qm3b":{"description":"data/scl/smithgw_qm3b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_ragasyn1":{"description":"data/scl/smithgw_ragasyn1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_ratwell":{"description":"data/scl/smithgw_ratwell.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_ratwolf":{"description":"data/scl/smithgw_ratwolf.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_rectoo":{"description":"data/scl/smithgw_rectoo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_red72_11geo":{"description":"data/scl/smithgw_red72_11geo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_red72_11pro":{"description":"data/scl/smithgw_red72_11pro.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_sc19":{"description":"data/scl/smithgw_sc19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_sch13":{"description":"data/scl/smithgw_sch13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_sch13a":{"description":"data/scl/smithgw_sch13a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_scj22a":{"description":"data/scl/smithgw_scj22a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_scj22b":{"description":"data/scl/smithgw_scj22b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_scj22c":{"description":"data/scl/smithgw_scj22c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_secab":{"description":"data/scl/smithgw_secab.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_secac":{"description":"data/scl/smithgw_secac.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_secad":{"description":"data/scl/smithgw_secad.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_sixtetwoo":{"description":"data/scl/smithgw_sixtetwoo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_smalldi11":{"description":"data/scl/smithgw_smalldi11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_smalldi19a":{"description":"data/scl/smithgw_smalldi19a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_smalldi19b":{"description":"data/scl/smithgw_smalldi19b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_smalldi19c":{"description":"data/scl/smithgw_smalldi19c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_smalldiglum19":{"description":"data/scl/smithgw_smalldiglum19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_smalldimos11":{"description":"data/scl/smithgw_smalldimos11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_smalldimos19":{"description":"data/scl/smithgw_smalldimos19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_sqoo":{"description":"data/scl/smithgw_sqoo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_star":{"description":"data/scl/smithgw_star.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_star2":{"description":"data/scl/smithgw_star2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_starra":{"description":"data/scl/smithgw_starra.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_starrb":{"description":"data/scl/smithgw_starrb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_starrc":{"description":"data/scl/smithgw_starrc.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_suzz":{"description":"data/scl/smithgw_suzz.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_syndia2":{"description":"data/scl/smithgw_syndia2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_syndia3":{"description":"data/scl/smithgw_syndia3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_syndia4":{"description":"data/scl/smithgw_syndia4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_syndia6":{"description":"data/scl/smithgw_syndia6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_tetra":{"description":"data/scl/smithgw_tetra.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_tr31":{"description":"data/scl/smithgw_tr31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_tr7_13":{"description":"data/scl/smithgw_tr7_13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_tr7_13b":{"description":"data/scl/smithgw_tr7_13b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_tr7_13r":{"description":"data/scl/smithgw_tr7_13r.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_tra":{"description":"data/scl/smithgw_tra.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_tre":{"description":"data/scl/smithgw_tre.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_treb":{"description":"data/scl/smithgw_treb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_trx":{"description":"data/scl/smithgw_trx.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_trxb":{"description":"data/scl/smithgw_trxb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_wa":{"description":"data/scl/smithgw_wa.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_wa120":{"description":"data/scl/smithgw_wa120.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_wb":{"description":"data/scl/smithgw_wb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_well1":{"description":"data/scl/smithgw_well1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_whelp1":{"description":"data/scl/smithgw_whelp1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_whelp2":{"description":"data/scl/smithgw_whelp2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_whelp3":{"description":"data/scl/smithgw_whelp3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_wilcmarv11":{"description":"data/scl/smithgw_wilcmarv11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_wilcmarv7":{"description":"data/scl/smithgw_wilcmarv7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_wiz28":{"description":"data/scl/smithgw_wiz28.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_wiz34":{"description":"data/scl/smithgw_wiz34.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_wiz38":{"description":"data/scl/smithgw_wiz38.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_wreckpop":{"description":"data/scl/smithgw_wreckpop.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithgw_yarman12":{"description":"data/scl/smithgw_yarman12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithj12":{"description":"data/scl/smithj12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithj17":{"description":"data/scl/smithj17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithj24":{"description":"data/scl/smithj24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithrk_19":{"description":"data/scl/smithrk_19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"smithrk_mult":{"description":"data/scl/smithrk_mult.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"snow_31":{"description":"data/scl/snow_31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"snyder":{"description":"data/scl/snyder.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"solar":{"description":"data/scl/solar.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"solfeggio":{"description":"data/scl/solfeggio.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"solfeggio2":{"description":"data/scl/solfeggio2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sonbirkezsorted":{"description":"data/scl/sonbirkezsorted.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sorge":{"description":"data/scl/sorge.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sorge1":{"description":"data/scl/sorge1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sorge2":{"description":"data/scl/sorge2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sorge3":{"description":"data/scl/sorge3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sorge4":{"description":"data/scl/sorge4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sorog9":{"description":"data/scl/sorog9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"spanyi":{"description":"data/scl/spanyi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh-2009well885Hz":{"description":"data/scl/sparschuh-2009well885Hz.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh-442widefrench5th-a":{"description":"data/scl/sparschuh-442widefrench5th-a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh-442widefrench5th":{"description":"data/scl/sparschuh-442widefrench5th.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh-885organ":{"description":"data/scl/sparschuh-885organ.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh-eleven_eyes":{"description":"data/scl/sparschuh-eleven_eyes.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh-epimoric7":{"description":"data/scl/sparschuh-epimoric7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh-eqbeat-fac_ceg":{"description":"data/scl/sparschuh-eqbeat-fac_ceg.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh-equalbeating":{"description":"data/scl/sparschuh-equalbeating.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh-gothic440":{"description":"data/scl/sparschuh-gothic440.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh-jsbloops440":{"description":"data/scl/sparschuh-jsbloops440.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh-neovictorian":{"description":"data/scl/sparschuh-neovictorian.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh-neovictorian2":{"description":"data/scl/sparschuh-neovictorian2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh-oldpiano":{"description":"data/scl/sparschuh-oldpiano.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh-pc-div":{"description":"data/scl/sparschuh-pc-div.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh-pc":{"description":"data/scl/sparschuh-pc.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh-sc":{"description":"data/scl/sparschuh-sc.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh-squiggle_clavichord":{"description":"data/scl/sparschuh-squiggle_clavichord.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh-squiggle_harpsichord":{"description":"data/scl/sparschuh-squiggle_harpsichord.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh-stanhope":{"description":"data/scl/sparschuh-stanhope.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh-wohltemperiert":{"description":"data/scl/sparschuh-wohltemperiert.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh_19limwell":{"description":"data/scl/sparschuh_19limwell.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh_41_23_bi_epi":{"description":"data/scl/sparschuh_41_23_bi_epi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh_53in13lim":{"description":"data/scl/sparschuh_53in13lim.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh_53tone5limit":{"description":"data/scl/sparschuh_53tone5limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh_53via19lim":{"description":"data/scl/sparschuh_53via19lim.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh_5limdodek":{"description":"data/scl/sparschuh_5limdodek.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh_bach19lim":{"description":"data/scl/sparschuh_bach19lim.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh_bach_cup":{"description":"data/scl/sparschuh_bach_cup.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh_dent":{"description":"data/scl/sparschuh_dent.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh_dyadrat53":{"description":"data/scl/sparschuh_dyadrat53.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh_ji53":{"description":"data/scl/sparschuh_ji53.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh_ji53a":{"description":"data/scl/sparschuh_ji53a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh_mietke":{"description":"data/scl/sparschuh_mietke.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh_septenarian29":{"description":"data/scl/sparschuh_septenarian29.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh_septenarian53":{"description":"data/scl/sparschuh_septenarian53.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sparschuh_wtc":{"description":"data/scl/sparschuh_wtc.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"spec1_14":{"description":"data/scl/spec1_14.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"spec1_17":{"description":"data/scl/spec1_17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"spec1_25":{"description":"data/scl/spec1_25.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"spec1_33":{"description":"data/scl/spec1_33.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"spec1_4":{"description":"data/scl/spec1_4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"spec1_5":{"description":"data/scl/spec1_5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"specr2":{"description":"data/scl/specr2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"specr3":{"description":"data/scl/specr3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"spectacle31":{"description":"data/scl/spectacle31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"spon_chal1":{"description":"data/scl/spon_chal1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"spon_chal2":{"description":"data/scl/spon_chal2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"spon_mont":{"description":"data/scl/spon_mont.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"spon_terp":{"description":"data/scl/spon_terp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sqrtphi":{"description":"data/scl/sqrtphi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"squares":{"description":"data/scl/squares.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"stade":{"description":"data/scl/stade.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"stanhope":{"description":"data/scl/stanhope.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"stanhope2":{"description":"data/scl/stanhope2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"stanhope_f":{"description":"data/scl/stanhope_f.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"stanhope_m":{"description":"data/scl/stanhope_m.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"stanhope_s":{"description":"data/scl/stanhope_s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"star-lesfip":{"description":"data/scl/star-lesfip.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"starling":{"description":"data/scl/starling.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"starling11":{"description":"data/scl/starling11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"starling12":{"description":"data/scl/starling12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"starling15":{"description":"data/scl/starling15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"starling16":{"description":"data/scl/starling16.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"starling17":{"description":"data/scl/starling17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"starling19":{"description":"data/scl/starling19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"starling7":{"description":"data/scl/starling7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"starling8":{"description":"data/scl/starling8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"starling9":{"description":"data/scl/starling9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"stearns":{"description":"data/scl/stearns.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"stearns2":{"description":"data/scl/stearns2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"stearns3":{"description":"data/scl/stearns3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"stearns4":{"description":"data/scl/stearns4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"steldek1":{"description":"data/scl/steldek1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"steldek1s":{"description":"data/scl/steldek1s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"steldek2":{"description":"data/scl/steldek2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"steldek2s":{"description":"data/scl/steldek2s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"steldia":{"description":"data/scl/steldia.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"steleik1":{"description":"data/scl/steleik1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"steleik1s":{"description":"data/scl/steleik1s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"steleik2":{"description":"data/scl/steleik2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"steleik2s":{"description":"data/scl/steleik2s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"stelhex-catakleismic":{"description":"data/scl/stelhex-catakleismic.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"stelhex1":{"description":"data/scl/stelhex1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"stelhex1star":{"description":"data/scl/stelhex1star.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"stelhex2":{"description":"data/scl/stelhex2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"stelhex3":{"description":"data/scl/stelhex3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"stelhex4":{"description":"data/scl/stelhex4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"stelhex5":{"description":"data/scl/stelhex5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"stelhex6":{"description":"data/scl/stelhex6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"stelhexplus":{"description":"data/scl/stelhexplus.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"stellar":{"description":"data/scl/stellar.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"stellar5":{"description":"data/scl/stellar5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"stellarhex":{"description":"data/scl/stellarhex.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"stellarhexmarvwoo":{"description":"data/scl/stellarhexmarvwoo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"stellblock":{"description":"data/scl/stellblock.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"stelpd1":{"description":"data/scl/stelpd1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"stelpd1s":{"description":"data/scl/stelpd1s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"stelpent1":{"description":"data/scl/stelpent1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"stelpent1s":{"description":"data/scl/stelpent1s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"steltet1":{"description":"data/scl/steltet1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"steltet1s":{"description":"data/scl/steltet1s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"steltet2":{"description":"data/scl/steltet2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"steltri1":{"description":"data/scl/steltri1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"steltri2":{"description":"data/scl/steltri2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sternbrocot4":{"description":"data/scl/sternbrocot4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"stevin":{"description":"data/scl/stevin.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"stopper":{"description":"data/scl/stopper.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"storbeck":{"description":"data/scl/storbeck.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"strahle":{"description":"data/scl/strahle.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"studwacko":{"description":"data/scl/studwacko.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sub24-12":{"description":"data/scl/sub24-12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sub40":{"description":"data/scl/sub40.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sub50":{"description":"data/scl/sub50.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sub8":{"description":"data/scl/sub8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sullivan7":{"description":"data/scl/sullivan7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sullivan_blue":{"description":"data/scl/sullivan_blue.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sullivan_blueji":{"description":"data/scl/sullivan_blueji.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sullivan_cjv":{"description":"data/scl/sullivan_cjv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sullivan_eagle":{"description":"data/scl/sullivan_eagle.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sullivan_raven":{"description":"data/scl/sullivan_raven.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sullivan_ravenji":{"description":"data/scl/sullivan_ravenji.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sullivan_sh":{"description":"data/scl/sullivan_sh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sullivan_zen":{"description":"data/scl/sullivan_zen.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sullivan_zen2":{"description":"data/scl/sullivan_zen2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sumatra":{"description":"data/scl/sumatra.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"super_10":{"description":"data/scl/super_10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"super_11":{"description":"data/scl/super_11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"super_12":{"description":"data/scl/super_12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"super_13":{"description":"data/scl/super_13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"super_15":{"description":"data/scl/super_15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"super_19":{"description":"data/scl/super_19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"super_19a":{"description":"data/scl/super_19a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"super_19b":{"description":"data/scl/super_19b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"super_22":{"description":"data/scl/super_22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"super_22a":{"description":"data/scl/super_22a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"super_24":{"description":"data/scl/super_24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"super_8":{"description":"data/scl/super_8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"super_9":{"description":"data/scl/super_9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"superclipgenus19":{"description":"data/scl/superclipgenus19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"superfif7a":{"description":"data/scl/superfif7a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"superfif7b":{"description":"data/scl/superfif7b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"supermagic15":{"description":"data/scl/supermagic15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"supertriskaideka":{"description":"data/scl/supertriskaideka.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"suppig":{"description":"data/scl/suppig.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"surupan_7":{"description":"data/scl/surupan_7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"surupan_9":{"description":"data/scl/surupan_9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"surupan_ajeng":{"description":"data/scl/surupan_ajeng.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"surupan_degung":{"description":"data/scl/surupan_degung.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"surupan_madenda":{"description":"data/scl/surupan_madenda.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"surupan_melog":{"description":"data/scl/surupan_melog.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"surupan_miring":{"description":"data/scl/surupan_miring.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"surupan_x":{"description":"data/scl/surupan_x.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"surupan_y":{"description":"data/scl/surupan_y.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"sverige":{"description":"data/scl/sverige.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"swet1":{"description":"data/scl/swet1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"swet2":{"description":"data/scl/swet2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"swet3":{"description":"data/scl/swet3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"swet4":{"description":"data/scl/swet4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"swet5":{"description":"data/scl/swet5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"swet6":{"description":"data/scl/swet6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"syntonolydian":{"description":"data/scl/syntonolydian.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"syrian":{"description":"data/scl/syrian.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"t-side":{"description":"data/scl/t-side.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"t-side2":{"description":"data/scl/t-side2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tagawa_55":{"description":"data/scl/tagawa_55.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tamil":{"description":"data/scl/tamil.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tamil_vi":{"description":"data/scl/tamil_vi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tamil_vi2":{"description":"data/scl/tamil_vi2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tanaka":{"description":"data/scl/tanaka.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tanbur":{"description":"data/scl/tanbur.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tansur":{"description":"data/scl/tansur.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tapek-ribbon":{"description":"data/scl/tapek-ribbon.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tartini_7":{"description":"data/scl/tartini_7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"taylor_g":{"description":"data/scl/taylor_g.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"taylor_n":{"description":"data/scl/taylor_n.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"telemann":{"description":"data/scl/telemann.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"telemann_28":{"description":"data/scl/telemann_28.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temes-mix":{"description":"data/scl/temes-mix.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temes":{"description":"data/scl/temes.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temes2-mix":{"description":"data/scl/temes2-mix.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temes2":{"description":"data/scl/temes2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp10ebss":{"description":"data/scl/temp10ebss.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp11ebst":{"description":"data/scl/temp11ebst.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp12b2w":{"description":"data/scl/temp12b2w.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp12b2w19":{"description":"data/scl/temp12b2w19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp12b2ws":{"description":"data/scl/temp12b2ws.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp12bf1":{"description":"data/scl/temp12bf1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp12eb46o":{"description":"data/scl/temp12eb46o.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp12eb46o2":{"description":"data/scl/temp12eb46o2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp12ebf":{"description":"data/scl/temp12ebf.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp12ebf4":{"description":"data/scl/temp12ebf4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp12ebfo":{"description":"data/scl/temp12ebfo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp12ebfo2o":{"description":"data/scl/temp12ebfo2o.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp12ebfp":{"description":"data/scl/temp12ebfp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp12ebfr":{"description":"data/scl/temp12ebfr.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp12ep":{"description":"data/scl/temp12ep.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp12fo1o":{"description":"data/scl/temp12fo1o.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp12fo2o":{"description":"data/scl/temp12fo2o.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp12k4":{"description":"data/scl/temp12k4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp12p10":{"description":"data/scl/temp12p10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp12p6":{"description":"data/scl/temp12p6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp12p6a":{"description":"data/scl/temp12p6a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp12p8":{"description":"data/scl/temp12p8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp12rwt":{"description":"data/scl/temp12rwt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp12septendec":{"description":"data/scl/temp12septendec.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp12to1o":{"description":"data/scl/temp12to1o.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp12to2o":{"description":"data/scl/temp12to2o.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp12w2b":{"description":"data/scl/temp12w2b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp152-171":{"description":"data/scl/temp152-171.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp15coh":{"description":"data/scl/temp15coh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp15ebmt":{"description":"data/scl/temp15ebmt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp15ebsi":{"description":"data/scl/temp15ebsi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp15mt":{"description":"data/scl/temp15mt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp15rbt":{"description":"data/scl/temp15rbt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp16d3":{"description":"data/scl/temp16d3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp16d4":{"description":"data/scl/temp16d4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp16ebs":{"description":"data/scl/temp16ebs.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp16ebt":{"description":"data/scl/temp16ebt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp16l4":{"description":"data/scl/temp16l4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp17ebf":{"description":"data/scl/temp17ebf.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp17ebs":{"description":"data/scl/temp17ebs.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp17fo2o":{"description":"data/scl/temp17fo2o.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp17nt":{"description":"data/scl/temp17nt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp17s":{"description":"data/scl/temp17s.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp19ebf":{"description":"data/scl/temp19ebf.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp19ebmt":{"description":"data/scl/temp19ebmt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp19ebo":{"description":"data/scl/temp19ebo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp19ebt":{"description":"data/scl/temp19ebt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp19fo2o":{"description":"data/scl/temp19fo2o.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp19k10":{"description":"data/scl/temp19k10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp19k3":{"description":"data/scl/temp19k3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp19k4":{"description":"data/scl/temp19k4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp19k5":{"description":"data/scl/temp19k5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp19k6":{"description":"data/scl/temp19k6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp19k7":{"description":"data/scl/temp19k7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp19k8":{"description":"data/scl/temp19k8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp19k9":{"description":"data/scl/temp19k9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp19lst":{"description":"data/scl/temp19lst.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp19mto2o":{"description":"data/scl/temp19mto2o.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp19tf2":{"description":"data/scl/temp19tf2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp21ebs":{"description":"data/scl/temp21ebs.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp22ebf":{"description":"data/scl/temp22ebf.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp22ebt":{"description":"data/scl/temp22ebt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp22fo2o":{"description":"data/scl/temp22fo2o.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp23ebs":{"description":"data/scl/temp23ebs.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp24ebaf":{"description":"data/scl/temp24ebaf.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp24ebf":{"description":"data/scl/temp24ebf.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp24ebt":{"description":"data/scl/temp24ebt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp25ebt":{"description":"data/scl/temp25ebt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp26ebf":{"description":"data/scl/temp26ebf.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp26ebmt":{"description":"data/scl/temp26ebmt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp26ebs":{"description":"data/scl/temp26ebs.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp26rb3":{"description":"data/scl/temp26rb3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp26so1o":{"description":"data/scl/temp26so1o.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp27c8":{"description":"data/scl/temp27c8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp27rb2":{"description":"data/scl/temp27rb2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp28ebt":{"description":"data/scl/temp28ebt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp28fo1o":{"description":"data/scl/temp28fo1o.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp29c14":{"description":"data/scl/temp29c14.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp29ebf":{"description":"data/scl/temp29ebf.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp29fo1o":{"description":"data/scl/temp29fo1o.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp29fo2o":{"description":"data/scl/temp29fo2o.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31c51":{"description":"data/scl/temp31c51.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31ebf":{"description":"data/scl/temp31ebf.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31ebs":{"description":"data/scl/temp31ebs.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31ebsi":{"description":"data/scl/temp31ebsi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31ebt":{"description":"data/scl/temp31ebt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31g3":{"description":"data/scl/temp31g3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31g4":{"description":"data/scl/temp31g4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31g5":{"description":"data/scl/temp31g5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31g6":{"description":"data/scl/temp31g6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31g7":{"description":"data/scl/temp31g7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31h10":{"description":"data/scl/temp31h10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31h11":{"description":"data/scl/temp31h11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31h8":{"description":"data/scl/temp31h8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31h9":{"description":"data/scl/temp31h9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31ms":{"description":"data/scl/temp31ms.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31mt":{"description":"data/scl/temp31mt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31rb1":{"description":"data/scl/temp31rb1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31rb1a":{"description":"data/scl/temp31rb1a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31rb2":{"description":"data/scl/temp31rb2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31rb2a":{"description":"data/scl/temp31rb2a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31rb2b":{"description":"data/scl/temp31rb2b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31rbf2":{"description":"data/scl/temp31rbf2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31rbs1":{"description":"data/scl/temp31rbs1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31rbs2":{"description":"data/scl/temp31rbs2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31smith":{"description":"data/scl/temp31smith.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31so2o":{"description":"data/scl/temp31so2o.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31st2o":{"description":"data/scl/temp31st2o.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31to":{"description":"data/scl/temp31to.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31w10":{"description":"data/scl/temp31w10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31w11":{"description":"data/scl/temp31w11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31w12":{"description":"data/scl/temp31w12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31w13":{"description":"data/scl/temp31w13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31w14":{"description":"data/scl/temp31w14.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31w15":{"description":"data/scl/temp31w15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31w8":{"description":"data/scl/temp31w8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp31w9":{"description":"data/scl/temp31w9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp34ebsi":{"description":"data/scl/temp34ebsi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp34ebt":{"description":"data/scl/temp34ebt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp34rb2a":{"description":"data/scl/temp34rb2a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp34w10":{"description":"data/scl/temp34w10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp34w5":{"description":"data/scl/temp34w5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp34w6":{"description":"data/scl/temp34w6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp34w7":{"description":"data/scl/temp34w7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp34w8":{"description":"data/scl/temp34w8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp34w9":{"description":"data/scl/temp34w9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp35ebsi":{"description":"data/scl/temp35ebsi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp36ebs":{"description":"data/scl/temp36ebs.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp37ebs":{"description":"data/scl/temp37ebs.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp37ebt":{"description":"data/scl/temp37ebt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp40ebt":{"description":"data/scl/temp40ebt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp41ebf":{"description":"data/scl/temp41ebf.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp43ebf":{"description":"data/scl/temp43ebf.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp4ebmt":{"description":"data/scl/temp4ebmt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp4ebsi":{"description":"data/scl/temp4ebsi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp53ebs":{"description":"data/scl/temp53ebs.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp53ebsi":{"description":"data/scl/temp53ebsi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp53ebt":{"description":"data/scl/temp53ebt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp57ebs":{"description":"data/scl/temp57ebs.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp59ebt":{"description":"data/scl/temp59ebt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp5ebf":{"description":"data/scl/temp5ebf.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp5ebs":{"description":"data/scl/temp5ebs.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp6":{"description":"data/scl/temp6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp65ebf":{"description":"data/scl/temp65ebf.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp65ebt":{"description":"data/scl/temp65ebt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp6eb2":{"description":"data/scl/temp6eb2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp6teb":{"description":"data/scl/temp6teb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp7-5ebf":{"description":"data/scl/temp7-5ebf.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp7ebf":{"description":"data/scl/temp7ebf.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp7ebnt":{"description":"data/scl/temp7ebnt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp8eb3q":{"description":"data/scl/temp8eb3q.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"temp9ebmt":{"description":"data/scl/temp9ebmt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tenn41a":{"description":"data/scl/tenn41a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tenn41b":{"description":"data/scl/tenn41b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tenn41c":{"description":"data/scl/tenn41c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tenney_11":{"description":"data/scl/tenney_11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tenney_8":{"description":"data/scl/tenney_8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"terrain":{"description":"data/scl/terrain.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tertia78":{"description":"data/scl/tertia78.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tertiadia":{"description":"data/scl/tertiadia.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tertiadie":{"description":"data/scl/tertiadie.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tet3a":{"description":"data/scl/tet3a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tetragam-di":{"description":"data/scl/tetragam-di.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tetragam-enh":{"description":"data/scl/tetragam-enh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tetragam-hex":{"description":"data/scl/tetragam-hex.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tetragam-py":{"description":"data/scl/tetragam-py.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tetragam-slpe":{"description":"data/scl/tetragam-slpe.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tetragam-slpe2":{"description":"data/scl/tetragam-slpe2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tetragam-sp":{"description":"data/scl/tetragam-sp.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tetragam-un":{"description":"data/scl/tetragam-un.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tetragam13":{"description":"data/scl/tetragam13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tetragam5":{"description":"data/scl/tetragam5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tetragam7":{"description":"data/scl/tetragam7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tetragam8":{"description":"data/scl/tetragam8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tetragam9a":{"description":"data/scl/tetragam9a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tetragam9b":{"description":"data/scl/tetragam9b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tetraphonic_31":{"description":"data/scl/tetraphonic_31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tetratriad":{"description":"data/scl/tetratriad.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tetratriad1":{"description":"data/scl/tetratriad1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tetratriad2":{"description":"data/scl/tetratriad2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"thailand":{"description":"data/scl/thailand.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"thailand2":{"description":"data/scl/thailand2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"thailand3":{"description":"data/scl/thailand3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"thailand4":{"description":"data/scl/thailand4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"thailand5":{"description":"data/scl/thailand5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"thailand6":{"description":"data/scl/thailand6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"thirds":{"description":"data/scl/thirds.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"thirteendene":{"description":"data/scl/thirteendene.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"thirteenten":{"description":"data/scl/thirteenten.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"thomas":{"description":"data/scl/thomas.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"thrush12":{"description":"data/scl/thrush12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"thrush15":{"description":"data/scl/thrush15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"thunor46":{"description":"data/scl/thunor46.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tiby1":{"description":"data/scl/tiby1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tiby2":{"description":"data/scl/tiby2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tiby3":{"description":"data/scl/tiby3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tiby4":{"description":"data/scl/tiby4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tickner_whirlwind":{"description":"data/scl/tickner_whirlwind.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"timbila1":{"description":"data/scl/timbila1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"timbila2":{"description":"data/scl/timbila2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"timbila3":{"description":"data/scl/timbila3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"timbila4":{"description":"data/scl/timbila4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"timbila5":{"description":"data/scl/timbila5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"timbila6":{"description":"data/scl/timbila6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"timbila7":{"description":"data/scl/timbila7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"timbila8":{"description":"data/scl/timbila8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"todi_av":{"description":"data/scl/todi_av.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tonos15_pis":{"description":"data/scl/tonos15_pis.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tonos17_pis":{"description":"data/scl/tonos17_pis.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tonos19_pis":{"description":"data/scl/tonos19_pis.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tonos21_pis":{"description":"data/scl/tonos21_pis.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tonos23_pis":{"description":"data/scl/tonos23_pis.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tonos25_pis":{"description":"data/scl/tonos25_pis.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tonos27_pis":{"description":"data/scl/tonos27_pis.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tonos29_pis":{"description":"data/scl/tonos29_pis.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tonos31_pis":{"description":"data/scl/tonos31_pis.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tonos31_pis2":{"description":"data/scl/tonos31_pis2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tonos33_pis":{"description":"data/scl/tonos33_pis.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"toof1":{"description":"data/scl/toof1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"torb24":{"description":"data/scl/torb24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"trab19":{"description":"data/scl/trab19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"trab19a":{"description":"data/scl/trab19a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"trab19marv":{"description":"data/scl/trab19marv.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tranh":{"description":"data/scl/tranh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tranh2":{"description":"data/scl/tranh2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tranh3":{"description":"data/scl/tranh3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"trawas":{"description":"data/scl/trawas.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tri12-1":{"description":"data/scl/tri12-1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tri12-2":{"description":"data/scl/tri12-2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tri19-1":{"description":"data/scl/tri19-1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tri19-2":{"description":"data/scl/tri19-2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tri19-3":{"description":"data/scl/tri19-3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tri19-4":{"description":"data/scl/tri19-4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tri19-5":{"description":"data/scl/tri19-5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tri19-6":{"description":"data/scl/tri19-6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tri19-7":{"description":"data/scl/tri19-7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tri19-8":{"description":"data/scl/tri19-8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tri19-9":{"description":"data/scl/tri19-9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"triangs11":{"description":"data/scl/triangs11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"triangs13":{"description":"data/scl/triangs13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"triangs22":{"description":"data/scl/triangs22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"triaphonic_12":{"description":"data/scl/triaphonic_12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"triaphonic_17":{"description":"data/scl/triaphonic_17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"trichord-witchcraft":{"description":"data/scl/trichord-witchcraft.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"trichord7":{"description":"data/scl/trichord7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tridec8":{"description":"data/scl/tridec8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"trikleismic57":{"description":"data/scl/trikleismic57.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"trithagorean":{"description":"data/scl/trithagorean.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tritriad":{"description":"data/scl/tritriad.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tritriad10":{"description":"data/scl/tritriad10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tritriad11":{"description":"data/scl/tritriad11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tritriad13":{"description":"data/scl/tritriad13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tritriad14":{"description":"data/scl/tritriad14.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tritriad18":{"description":"data/scl/tritriad18.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tritriad22":{"description":"data/scl/tritriad22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tritriad26":{"description":"data/scl/tritriad26.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tritriad3":{"description":"data/scl/tritriad3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tritriad32":{"description":"data/scl/tritriad32.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tritriad3c":{"description":"data/scl/tritriad3c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tritriad3d":{"description":"data/scl/tritriad3d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tritriad5":{"description":"data/scl/tritriad5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tritriad68":{"description":"data/scl/tritriad68.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tritriad68i":{"description":"data/scl/tritriad68i.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tritriad69":{"description":"data/scl/tritriad69.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tritriad7":{"description":"data/scl/tritriad7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tritriad9":{"description":"data/scl/tritriad9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"trost":{"description":"data/scl/trost.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tsikno_2nd":{"description":"data/scl/tsikno_2nd.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tsjerepnin":{"description":"data/scl/tsjerepnin.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tsuda13":{"description":"data/scl/tsuda13.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tuinstra":{"description":"data/scl/tuinstra.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tuneable3":{"description":"data/scl/tuneable3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tuners1":{"description":"data/scl/tuners1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tuners2":{"description":"data/scl/tuners2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"tuners3":{"description":"data/scl/tuners3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turkish":{"description":"data/scl/turkish.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turkish_17":{"description":"data/scl/turkish_17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turkish_24":{"description":"data/scl/turkish_24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turkish_24a":{"description":"data/scl/turkish_24a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turkish_29":{"description":"data/scl/turkish_29.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turkish_29a":{"description":"data/scl/turkish_29a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turkish_41":{"description":"data/scl/turkish_41.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turkish_41a":{"description":"data/scl/turkish_41a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turkish_aeu":{"description":"data/scl/turkish_aeu.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turkish_aeu41":{"description":"data/scl/turkish_aeu41.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turkish_awjara_on_b":{"description":"data/scl/turkish_awjara_on_b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turkish_bagl":{"description":"data/scl/turkish_bagl.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turkish_bestenigar_on_b":{"description":"data/scl/turkish_bestenigar_on_b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turkish_buselik_on_d":{"description":"data/scl/turkish_buselik_on_d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turkish_huseyni_and_neva":{"description":"data/scl/turkish_huseyni_and_neva.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turkish_mahur_and_penchgah":{"description":"data/scl/turkish_mahur_and_penchgah.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turkish_mahur_and_zavil":{"description":"data/scl/turkish_mahur_and_zavil.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turkish_nishabur_on_e":{"description":"data/scl/turkish_nishabur_on_e.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turkish_rast_and_penchgah_on_c":{"description":"data/scl/turkish_rast_and_penchgah_on_c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turkish_segah-huzzam-mustear_on_e":{"description":"data/scl/turkish_segah-huzzam-mustear_on_e.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turkish_segah-huzzam-mustear_v2_on_e":{"description":"data/scl/turkish_segah-huzzam-mustear_v2_on_e.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turkish_segah_on_e":{"description":"data/scl/turkish_segah_on_e.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turkish_sivas":{"description":"data/scl/turkish_sivas.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turkish_sunbule_on_d":{"description":"data/scl/turkish_sunbule_on_d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turkish_ushshaq-bayati_on_d":{"description":"data/scl/turkish_ushshaq-bayati_on_d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turko-arabic_(kurdili)hijazkar-suznak-nawruz_neveser_nikriz_on_c":{"description":"data/scl/turko-arabic_(kurdili)hijazkar-suznak-nawruz_neveser_nikriz_on_c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turko-arabic_(kurdili)neveser_and_nikriz_on_c":{"description":"data/scl/turko-arabic_(kurdili)neveser_and_nikriz_on_c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turko-arabic_hijaz-humayun-zirgule_on_d":{"description":"data/scl/turko-arabic_hijaz-humayun-zirgule_on_d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turko-arabic_hijazkar_and kurdili-hijazkar_on_c":{"description":"data/scl/turko-arabic_hijazkar_and kurdili-hijazkar_on_c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turko-arabic_iraq-awdj_and_ferahnak_on_b":{"description":"data/scl/turko-arabic_iraq-awdj_and_ferahnak_on_b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turko-arabic_karjighar-bayati_shuri_on_d":{"description":"data/scl/turko-arabic_karjighar-bayati_shuri_on_d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turko-arabic_kurdi_buselik_nishabur_on_d":{"description":"data/scl/turko-arabic_kurdi_buselik_nishabur_on_d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turko-arabic_kurdi_on_d":{"description":"data/scl/turko-arabic_kurdi_on_d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turko-arabic_nihavend(murassah)_zanjaran_on_c":{"description":"data/scl/turko-arabic_nihavend(murassah)_zanjaran_on_c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turko-arabic_nihavend_and_nihavend-murassah_on_c":{"description":"data/scl/turko-arabic_nihavend_and_nihavend-murassah_on_c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turko-arabic_rast_huseyni_uzzal-garip":{"description":"data/scl/turko-arabic_rast_huseyni_uzzal-garip.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turko-arabic_rast_on_c":{"description":"data/scl/turko-arabic_rast_on_c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turko-arabic_saba_on_d":{"description":"data/scl/turko-arabic_saba_on_d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turko-arabic_suznak-nawruz_on_c":{"description":"data/scl/turko-arabic_suznak-nawruz_on_c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turko-arabic_ushshaq-bayati_and_huseyni_on_d":{"description":"data/scl/turko-arabic_ushshaq-bayati_and_huseyni_on_d.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"turko-arabic_uzzal-garip":{"description":"data/scl/turko-arabic_uzzal-garip.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"two29":{"description":"data/scl/two29.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"two29a":{"description":"data/scl/two29a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"twofifths1":{"description":"data/scl/twofifths1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"twofifths2":{"description":"data/scl/twofifths2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ulimba":{"description":"data/scl/ulimba.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ultimate12_nr1":{"description":"data/scl/ultimate12_nr1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ultimate12_nr2":{"description":"data/scl/ultimate12_nr2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ultimate12_nr3":{"description":"data/scl/ultimate12_nr3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ultimate12_nr4a":{"description":"data/scl/ultimate12_nr4a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ultimate12_nr4b":{"description":"data/scl/ultimate12_nr4b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"unimajor":{"description":"data/scl/unimajor.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"unimajorpenta":{"description":"data/scl/unimajorpenta.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"unimarv19":{"description":"data/scl/unimarv19.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"urania24":{"description":"data/scl/urania24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"urmawi":{"description":"data/scl/urmawi.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"uruk":{"description":"data/scl/uruk.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ushaq99":{"description":"data/scl/ushaq99.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ushshaq tetrachord 11-limit":{"description":"data/scl/ushshaq tetrachord 11-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ushshaq tetrachord 19-limit":{"description":"data/scl/ushshaq tetrachord 19-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"ushshaq tetrachord 23-limit":{"description":"data/scl/ushshaq tetrachord 23-limit.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vaisvil_70":{"description":"data/scl/vaisvil_70.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vaisvil_diam7pluswoo":{"description":"data/scl/vaisvil_diam7pluswoo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vaisvil_goldsilver":{"description":"data/scl/vaisvil_goldsilver.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vaisvil_halfdiamond91":{"description":"data/scl/vaisvil_halfdiamond91.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vaisvil_harm3-26":{"description":"data/scl/vaisvil_harm3-26.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"val-werck":{"description":"data/scl/val-werck.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"valamute31":{"description":"data/scl/valamute31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"valamute46":{"description":"data/scl/valamute46.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"valenporc15":{"description":"data/scl/valenporc15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"valentine":{"description":"data/scl/valentine.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"valentine2":{"description":"data/scl/valentine2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vallotti-broekaert":{"description":"data/scl/vallotti-broekaert.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vallotti":{"description":"data/scl/vallotti.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vallotti2":{"description":"data/scl/vallotti2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vallotti3":{"description":"data/scl/vallotti3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vavoom":{"description":"data/scl/vavoom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"velde_9":{"description":"data/scl/velde_9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"velde_ji":{"description":"data/scl/velde_ji.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"venkataramana":{"description":"data/scl/venkataramana.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"veroli-ord":{"description":"data/scl/veroli-ord.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"veroli":{"description":"data/scl/veroli.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"veroli1":{"description":"data/scl/veroli1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"veroli2":{"description":"data/scl/veroli2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vertex_chrom":{"description":"data/scl/vertex_chrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vertex_chrom2":{"description":"data/scl/vertex_chrom2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vertex_chrom3":{"description":"data/scl/vertex_chrom3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vertex_chrom4":{"description":"data/scl/vertex_chrom4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vertex_diat":{"description":"data/scl/vertex_diat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vertex_diat10":{"description":"data/scl/vertex_diat10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vertex_diat11":{"description":"data/scl/vertex_diat11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vertex_diat12":{"description":"data/scl/vertex_diat12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vertex_diat2":{"description":"data/scl/vertex_diat2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vertex_diat4":{"description":"data/scl/vertex_diat4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vertex_diat5":{"description":"data/scl/vertex_diat5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vertex_diat7":{"description":"data/scl/vertex_diat7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vertex_diat8":{"description":"data/scl/vertex_diat8.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vertex_diat9":{"description":"data/scl/vertex_diat9.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vertex_sdiat":{"description":"data/scl/vertex_sdiat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vertex_sdiat2":{"description":"data/scl/vertex_sdiat2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vertex_sdiat3":{"description":"data/scl/vertex_sdiat3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vertex_sdiat4":{"description":"data/scl/vertex_sdiat4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vertex_sdiat5":{"description":"data/scl/vertex_sdiat5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vicentino1":{"description":"data/scl/vicentino1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vicentino2":{"description":"data/scl/vicentino2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vicentino2q217":{"description":"data/scl/vicentino2q217.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vicentino36":{"description":"data/scl/vicentino36.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vicentino38":{"description":"data/scl/vicentino38.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"victor_eb":{"description":"data/scl/victor_eb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"victorian":{"description":"data/scl/victorian.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vines_ovovo10eb5w6w7_0_D":{"description":"data/scl/vines_ovovo10eb5w6w7_0_D.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vines_ovovo22eb9w14w15_00_D":{"description":"data/scl/vines_ovovo22eb9w14w15_00_D.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vines_ovovo27eb5w6w7_00_D":{"description":"data/scl/vines_ovovo27eb5w6w7_00_D.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vitale1":{"description":"data/scl/vitale1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vitale2":{"description":"data/scl/vitale2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vitale3":{"description":"data/scl/vitale3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vogel_21":{"description":"data/scl/vogel_21.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vogelh_b":{"description":"data/scl/vogelh_b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vogelh_fisk":{"description":"data/scl/vogelh_fisk.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vogelh_hamburg":{"description":"data/scl/vogelh_hamburg.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vogelh_hmean":{"description":"data/scl/vogelh_hmean.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"volans":{"description":"data/scl/volans.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vong":{"description":"data/scl/vong.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vries19-72":{"description":"data/scl/vries19-72.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vries35-72":{"description":"data/scl/vries35-72.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vries5-72":{"description":"data/scl/vries5-72.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"vries6-31":{"description":"data/scl/vries6-31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"waka3-7-17":{"description":"data/scl/waka3-7-17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wakabayashi_half":{"description":"data/scl/wakabayashi_half.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"walker_21":{"description":"data/scl/walker_21.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"walkerr_11":{"description":"data/scl/walkerr_11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wang-pho":{"description":"data/scl/wang-pho.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wauchope":{"description":"data/scl/wauchope.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wegscheider":{"description":"data/scl/wegscheider.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wegscheider2":{"description":"data/scl/wegscheider2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wegscheider_1a":{"description":"data/scl/wegscheider_1a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"weingarten":{"description":"data/scl/weingarten.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"weingarten2":{"description":"data/scl/weingarten2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"weiss1":{"description":"data/scl/weiss1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"weiss2":{"description":"data/scl/weiss2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"weiss_mandal":{"description":"data/scl/weiss_mandal.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wellfip17":{"description":"data/scl/wellfip17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wendell1":{"description":"data/scl/wendell1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wendell1r":{"description":"data/scl/wendell1r.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wendell2":{"description":"data/scl/wendell2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wendell2p":{"description":"data/scl/wendell2p.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wendell3":{"description":"data/scl/wendell3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wendell4":{"description":"data/scl/wendell4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wendell5":{"description":"data/scl/wendell5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wendell6":{"description":"data/scl/wendell6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wendell7":{"description":"data/scl/wendell7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"werc4":{"description":"data/scl/werc4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"werck1":{"description":"data/scl/werck1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"werck3":{"description":"data/scl/werck3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"werck3_eb":{"description":"data/scl/werck3_eb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"werck3_ebm":{"description":"data/scl/werck3_ebm.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"werck3_mim":{"description":"data/scl/werck3_mim.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"werck3_mod":{"description":"data/scl/werck3_mod.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"werck3_mod2":{"description":"data/scl/werck3_mod2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"werck3_turck":{"description":"data/scl/werck3_turck.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"werck4":{"description":"data/scl/werck4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"werck5":{"description":"data/scl/werck5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"werck6":{"description":"data/scl/werck6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"werck6_cor":{"description":"data/scl/werck6_cor.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"werck6_dup":{"description":"data/scl/werck6_dup.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"werck_cl5":{"description":"data/scl/werck_cl5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"werck_cl6":{"description":"data/scl/werck_cl6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"werck_puzzle":{"description":"data/scl/werck_puzzle.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"werckmeisterIV_variant":{"description":"data/scl/werckmeisterIV_variant.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"werckmeisterIV_variant_c":{"description":"data/scl/werckmeisterIV_variant_c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"white":{"description":"data/scl/white.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"whoosh":{"description":"data/scl/whoosh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wicks_eb":{"description":"data/scl/wicks_eb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wiegleb-book":{"description":"data/scl/wiegleb-book.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wiegleb":{"description":"data/scl/wiegleb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wier_15":{"description":"data/scl/wier_15.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wier_53":{"description":"data/scl/wier_53.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wier_cl":{"description":"data/scl/wier_cl.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wier_j":{"description":"data/scl/wier_j.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wiese1":{"description":"data/scl/wiese1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wiese3":{"description":"data/scl/wiese3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilcent17":{"description":"data/scl/wilcent17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson-rastbayyati24":{"description":"data/scl/wilson-rastbayyati24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson1":{"description":"data/scl/wilson1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson11":{"description":"data/scl/wilson11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson1t":{"description":"data/scl/wilson1t.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson2":{"description":"data/scl/wilson2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson3":{"description":"data/scl/wilson3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson5":{"description":"data/scl/wilson5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson7":{"description":"data/scl/wilson7.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson7_2":{"description":"data/scl/wilson7_2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson7_3":{"description":"data/scl/wilson7_3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson7_4":{"description":"data/scl/wilson7_4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson_17":{"description":"data/scl/wilson_17.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson_31":{"description":"data/scl/wilson_31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson_41":{"description":"data/scl/wilson_41.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson_alessandro":{"description":"data/scl/wilson_alessandro.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson_bag":{"description":"data/scl/wilson_bag.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson_class":{"description":"data/scl/wilson_class.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson_dia1":{"description":"data/scl/wilson_dia1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson_dia2":{"description":"data/scl/wilson_dia2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson_dia3":{"description":"data/scl/wilson_dia3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson_dia4":{"description":"data/scl/wilson_dia4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson_duo":{"description":"data/scl/wilson_duo.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson_enh":{"description":"data/scl/wilson_enh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson_enh2":{"description":"data/scl/wilson_enh2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson_facet":{"description":"data/scl/wilson_facet.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson_gh1":{"description":"data/scl/wilson_gh1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson_gh11":{"description":"data/scl/wilson_gh11.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson_gh2":{"description":"data/scl/wilson_gh2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson_gh50":{"description":"data/scl/wilson_gh50.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson_hebdome1":{"description":"data/scl/wilson_hebdome1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson_hexflank":{"description":"data/scl/wilson_hexflank.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson_hypenh":{"description":"data/scl/wilson_hypenh.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson_l1":{"description":"data/scl/wilson_l1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson_l2":{"description":"data/scl/wilson_l2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson_l3":{"description":"data/scl/wilson_l3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson_l4":{"description":"data/scl/wilson_l4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson_l5":{"description":"data/scl/wilson_l5.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson_l6":{"description":"data/scl/wilson_l6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wilson_pelog":{"description":"data/scl/wilson_pelog.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"window":{"description":"data/scl/window.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wizard22":{"description":"data/scl/wizard22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wonder1":{"description":"data/scl/wonder1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wonder36":{"description":"data/scl/wonder36.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wookie58":{"description":"data/scl/wookie58.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"woz31":{"description":"data/scl/woz31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wronski":{"description":"data/scl/wronski.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wurschmidt":{"description":"data/scl/wurschmidt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wurschmidt1":{"description":"data/scl/wurschmidt1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wurschmidt2":{"description":"data/scl/wurschmidt2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wurschmidt_31":{"description":"data/scl/wurschmidt_31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wurschmidt_31a":{"description":"data/scl/wurschmidt_31a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wurschmidt_53":{"description":"data/scl/wurschmidt_53.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"wyschnegradsky":{"description":"data/scl/wyschnegradsky.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"xenakis_chrom":{"description":"data/scl/xenakis_chrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"xenakis_diat":{"description":"data/scl/xenakis_diat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"xenakis_schrom":{"description":"data/scl/xenakis_schrom.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"xylophone2":{"description":"data/scl/xylophone2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"xylophone3":{"description":"data/scl/xylophone3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"xylophone4":{"description":"data/scl/xylophone4.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yajna31":{"description":"data/scl/yajna31.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman-36a_12core":{"description":"data/scl/yarman-36a_12core.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman12-135":{"description":"data/scl/yarman12-135.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman12-159":{"description":"data/scl/yarman12-159.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman24a-rational":{"description":"data/scl/yarman24a-rational.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman24a":{"description":"data/scl/yarman24a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman24b-rational":{"description":"data/scl/yarman24b-rational.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman24b-rational2":{"description":"data/scl/yarman24b-rational2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman24b":{"description":"data/scl/yarman24b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman24c":{"description":"data/scl/yarman24c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman24d-equalizedmtfifth":{"description":"data/scl/yarman24d-equalizedmtfifth.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman31b-rational-practical":{"description":"data/scl/yarman31b-rational-practical.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman31b-rational":{"description":"data/scl/yarman31b-rational.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman31b":{"description":"data/scl/yarman31b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman31c-rational-practical":{"description":"data/scl/yarman31c-rational-practical.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman31c-rational":{"description":"data/scl/yarman31c-rational.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman31c":{"description":"data/scl/yarman31c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman31c_final":{"description":"data/scl/yarman31c_final.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman31d-equalizedmtfifth":{"description":"data/scl/yarman31d-equalizedmtfifth.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman31d-rational-practical":{"description":"data/scl/yarman31d-rational-practical.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman31d-rational":{"description":"data/scl/yarman31d-rational.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman36a_nr1-438hz":{"description":"data/scl/yarman36a_nr1-438hz.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman36a_nr2-440hz":{"description":"data/scl/yarman36a_nr2-440hz.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman36b":{"description":"data/scl/yarman36b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman36c":{"description":"data/scl/yarman36c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman_17etx3":{"description":"data/scl/yarman_17etx3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman_19etx2":{"description":"data/scl/yarman_19etx2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman_19etx3":{"description":"data/scl/yarman_19etx3.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman_23etx2":{"description":"data/scl/yarman_23etx2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman_29etx2":{"description":"data/scl/yarman_29etx2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman_buselik":{"description":"data/scl/yarman_buselik.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman_hijaz":{"description":"data/scl/yarman_hijaz.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman_hijazkar":{"description":"data/scl/yarman_hijazkar.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman_karjighar":{"description":"data/scl/yarman_karjighar.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman_mahur":{"description":"data/scl/yarman_mahur.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman_nihavend":{"description":"data/scl/yarman_nihavend.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman_rast":{"description":"data/scl/yarman_rast.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman_saba":{"description":"data/scl/yarman_saba.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman_segah":{"description":"data/scl/yarman_segah.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yarman_ushaq":{"description":"data/scl/yarman_ushaq.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yasser_6":{"description":"data/scl/yasser_6.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yasser_diat":{"description":"data/scl/yasser_diat.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yasser_ji":{"description":"data/scl/yasser_ji.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yekta-41":{"description":"data/scl/yekta-41.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yekta-cataclysmic":{"description":"data/scl/yekta-cataclysmic.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yekta":{"description":"data/scl/yekta.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"young-g":{"description":"data/scl/young-g.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"young-lm_guitar":{"description":"data/scl/young-lm_guitar.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"young-lm_piano":{"description":"data/scl/young-lm_piano.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"young-sorge":{"description":"data/scl/young-sorge.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"young-w10":{"description":"data/scl/young-w10.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"young-w14":{"description":"data/scl/young-w14.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"young-wt":{"description":"data/scl/young-wt.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"young":{"description":"data/scl/young.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"young1":{"description":"data/scl/young1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"young2":{"description":"data/scl/young2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"yugo_bagpipe":{"description":"data/scl/yugo_bagpipe.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"zalzal":{"description":"data/scl/zalzal.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"zalzal2":{"description":"data/scl/zalzal2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"zapf-dent":{"description":"data/scl/zapf-dent.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"zapf":{"description":"data/scl/zapf.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"zarlino2":{"description":"data/scl/zarlino2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"zarlino24":{"description":"data/scl/zarlino24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"zarte24-volans_b":{"description":"data/scl/zarte24-volans_b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"zartehijaz1":{"description":"data/scl/zartehijaz1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"zesster_a":{"description":"data/scl/zesster_a.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"zesster_b":{"description":"data/scl/zesster_b.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"zesster_c":{"description":"data/scl/zesster_c.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"zesster_mix":{"description":"data/scl/zesster_mix.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"zest24-persian_Eb":{"description":"data/scl/zest24-persian_Eb.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"zest24-supergoya17plus3_Db":{"description":"data/scl/zest24-supergoya17plus3_Db.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"zest24":{"description":"data/scl/zest24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"zeta12":{"description":"data/scl/zeta12.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"zeus1":{"description":"data/scl/zeus1.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"zeus22":{"description":"data/scl/zeus22.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"zeus24":{"description":"data/scl/zeus24.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"zeus7tri":{"description":"data/scl/zeus7tri.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"zeus8tri":{"description":"data/scl/zeus8tri.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"zex46":{"description":"data/scl/zex46.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"zir_bouzourk":{"description":"data/scl/zir_bouzourk.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"zwolle":{"description":"data/scl/zwolle.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]},"zwolle2":{"description":"data/scl/zwolle2.scl","size":1,"tune":440,"center":69,"range":0,"cents":[]}}

},{}],3:[function(require,module,exports){
module.exports={
  "c": 0,
  "cbb": 10,
  "cb": 11,
  "c#": 1,
  "c##": 2,
  "cx": 2,
  "d": 2,
  "dbb": 0,
  "db": 1,
  "d#": 3,
  "d##": 4,
  "dx": 4,
  "e": 4,
  "ebb": 2,
  "eb": 3,
  "e#": 5,
  "e##": 6,
  "ex": 6,
  "f": 5,
  "fbb": 3,
  "fb": 4,
  "f#": 6,
  "f##": 7,
  "fx": 7,
  "g": 7,
  "gbb": 5,
  "gb": 6,
  "g#": 8,
  "g##": 9,
  "gx": 9,
  "a": 9,
  "abb": 7,
  "ab": 8,
  "a#": 10,
  "a##": 11,
  "ax": 11,
  "b": 11,
  "bbb": 9,
  "bb": 10,
  "b#": 0,
  "b##": 1,
  "bx": 1,
  "C": 0,
  "Cbb": 10,
  "Cb": 11,
  "C#": 1,
  "C##": 2,
  "Cx": 2,
  "D": 2,
  "Dbb": 0,
  "Db": 1,
  "D#": 3,
  "D##": 4,
  "Dx": 4,
  "E": 4,
  "Ebb": 2,
  "Eb": 3,
  "E#": 5,
  "E##": 6,
  "Ex": 6,
  "F": 5,
  "Fbb": 3,
  "Fb": 4,
  "F#": 6,
  "F##": 7,
  "Fx": 7,
  "G": 7,
  "Gbb": 5,
  "Gb": 6,
  "G#": 8,
  "G##": 9,
  "Gx": 9,
  "A": 9,
  "Abb": 7,
  "Ab": 8,
  "A#": 10,
  "A##": 11,
  "Ax": 11,
  "B": 11,
  "Bbb": 9,
  "Bb": 10,
  "B#": 0,
  "B##": 1,
  "Bx": 1
}

},{}],4:[function(require,module,exports){
//=======================================================================
// index.js
// main of 'total-serialism' Package
// by Timo Hoogland (@t.mo / @tmhglnd), www.timohoogland.com
// MIT License
//
// total-serialism is a set of methods for the generation and 
// transformation of number sequences designed with algorithmic 
// composition for music in mind.
//=======================================================================

// require the various libraries
const Generative    = require('./src/gen-basic.js');
const Algorithmic   = require('./src/gen-complex.js');
const Stochastic    = require('./src/gen-stochastic.js');
const Transform     = require('./src/transform.js');
const Statistic     = require('./src/statistic.js')
const Translate     = require('./src/translate.js');
const Utility       = require('./src/utility.js');

// export the various libraries
exports.Generative  = Generative;
exports.Algorithmic = Algorithmic;
exports.Stochastic  = Stochastic;
exports.Transform   = Transform;
exports.Statistic   = Statistic;
exports.Translate   = Translate;
exports.Utility     = Utility;

// Methods exposed to global scope
exports.getSettings = Translate.getSettings;
exports.setTempo    = Translate.setTempo;
exports.getTempo    = Translate.getTempo;
exports.setBPM      = Translate.setTempo;
exports.getBPM      = Translate.getTempo;
exports.setScale    = Translate.setScale;
exports.getScale    = Translate.getScale;
exports.setRoot     = Translate.setRoot;
exports.getRoot     = Translate.getRoot;
},{"./src/gen-basic.js":37,"./src/gen-complex.js":38,"./src/gen-stochastic.js":39,"./src/statistic.js":40,"./src/transform.js":41,"./src/translate.js":42,"./src/utility.js":43}],5:[function(require,module,exports){
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tonaljs/core')) :
  typeof define === 'function' && define.amd ? define(['exports', '@tonaljs/core'], factory) :
  (global = global || self, factory(global.AbcNotation = {}, global.core));
}(this, (function (exports, core) { 'use strict';

  var fillStr = function (character, times) {
      return Array(times + 1).join(character);
  };
  var REGEX = /^(_{1,}|=|\^{1,}|)([abcdefgABCDEFG])([,']*)$/;
  function tokenize(str) {
      var m = REGEX.exec(str);
      if (!m) {
          return ["", "", ""];
      }
      return [m[1], m[2], m[3]];
  }
  /**
   * Convert a (string) note in ABC notation into a (string) note in scientific notation
   *
   * @example
   * abcToScientificNotation("c") // => "C5"
   */
  function abcToScientificNotation(str) {
      var _a = tokenize(str), acc = _a[0], letter = _a[1], oct = _a[2];
      if (letter === "") {
          return "";
      }
      var o = 4;
      for (var i = 0; i < oct.length; i++) {
          o += oct.charAt(i) === "," ? -1 : 1;
      }
      var a = acc[0] === "_"
          ? acc.replace(/_/g, "b")
          : acc[0] === "^"
              ? acc.replace(/\^/g, "#")
              : "";
      return letter.charCodeAt(0) > 96
          ? letter.toUpperCase() + a + (o + 1)
          : letter + a + o;
  }
  /**
   * Convert a (string) note in scientific notation into a (string) note in ABC notation
   *
   * @example
   * scientificToAbcNotation("C#4") // => "^C"
   */
  function scientificToAbcNotation(str) {
      var n = core.note(str);
      if (n.empty || !n.oct) {
          return "";
      }
      var letter = n.letter, acc = n.acc, oct = n.oct;
      var a = acc[0] === "b" ? acc.replace(/b/g, "_") : acc.replace(/#/g, "^");
      var l = oct > 4 ? letter.toLowerCase() : letter;
      var o = oct === 5 ? "" : oct > 4 ? fillStr("'", oct - 5) : fillStr(",", 4 - oct);
      return a + l + o;
  }
  function transpose(note, interval) {
      return scientificToAbcNotation(core.transpose(abcToScientificNotation(note), interval));
  }
  function distance(from, to) {
      return core.distance(abcToScientificNotation(from), abcToScientificNotation(to));
  }
  var index = {
      abcToScientificNotation: abcToScientificNotation,
      scientificToAbcNotation: scientificToAbcNotation,
      tokenize: tokenize,
      transpose: transpose,
      distance: distance,
  };

  exports.abcToScientificNotation = abcToScientificNotation;
  exports.default = index;
  exports.distance = distance;
  exports.scientificToAbcNotation = scientificToAbcNotation;
  exports.tokenize = tokenize;
  exports.transpose = transpose;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


},{"@tonaljs/core":11}],6:[function(require,module,exports){
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tonaljs/core')) :
  typeof define === 'function' && define.amd ? define(['exports', '@tonaljs/core'], factory) :
  (global = global || self, factory(global.Array = {}, global.core));
}(this, (function (exports, core) { 'use strict';

  // ascending range
  function ascR(b, n) {
      var a = [];
      // tslint:disable-next-line:curly
      for (; n--; a[n] = n + b)
          ;
      return a;
  }
  // descending range
  function descR(b, n) {
      var a = [];
      // tslint:disable-next-line:curly
      for (; n--; a[n] = b - n)
          ;
      return a;
  }
  /**
   * Creates a numeric range
   *
   * @param {number} from
   * @param {number} to
   * @return {Array<number>}
   *
   * @example
   * range(-2, 2) // => [-2, -1, 0, 1, 2]
   * range(2, -2) // => [2, 1, 0, -1, -2]
   */
  function range(from, to) {
      return from < to ? ascR(from, to - from + 1) : descR(from, from - to + 1);
  }
  /**
   * Rotates a list a number of times. It"s completly agnostic about the
   * contents of the list.
   *
   * @param {Integer} times - the number of rotations
   * @param {Array} array
   * @return {Array} the rotated array
   *
   * @example
   * rotate(1, [1, 2, 3]) // => [2, 3, 1]
   */
  function rotate(times, arr) {
      var len = arr.length;
      var n = ((times % len) + len) % len;
      return arr.slice(n, len).concat(arr.slice(0, n));
  }
  /**
   * Return a copy of the array with the null values removed
   * @function
   * @param {Array} array
   * @return {Array}
   *
   * @example
   * compact(["a", "b", null, "c"]) // => ["a", "b", "c"]
   */
  function compact(arr) {
      return arr.filter(function (n) { return n === 0 || n; });
  }
  /**
   * Sort an array of notes in ascending order. Pitch classes are listed
   * before notes. Any string that is not a note is removed.
   *
   * @param {string[]} notes
   * @return {string[]} sorted array of notes
   *
   * @example
   * sortedNoteNames(['c2', 'c5', 'c1', 'c0', 'c6', 'c'])
   * // => ['C', 'C0', 'C1', 'C2', 'C5', 'C6']
   * sortedNoteNames(['c', 'F', 'G', 'a', 'b', 'h', 'J'])
   * // => ['C', 'F', 'G', 'A', 'B']
   */
  function sortedNoteNames(notes) {
      var valid = notes.map(function (n) { return core.note(n); }).filter(function (n) { return !n.empty; });
      return valid.sort(function (a, b) { return a.height - b.height; }).map(function (n) { return n.name; });
  }
  /**
   * Get sorted notes with duplicates removed. Pitch classes are listed
   * before notes.
   *
   * @function
   * @param {string[]} array
   * @return {string[]} unique sorted notes
   *
   * @example
   * Array.sortedUniqNoteNames(['a', 'b', 'c2', '1p', 'p2', 'c2', 'b', 'c', 'c3' ])
   * // => [ 'C', 'A', 'B', 'C2', 'C3' ]
   */
  function sortedUniqNoteNames(arr) {
      return sortedNoteNames(arr).filter(function (n, i, a) { return i === 0 || n !== a[i - 1]; });
  }
  /**
   * Randomizes the order of the specified array in-place, using the Fisher–Yates shuffle.
   *
   * @function
   * @param {Array} array
   * @return {Array} the array shuffled
   *
   * @example
   * shuffle(["C", "D", "E", "F"]) // => [...]
   */
  function shuffle(arr, rnd) {
      if (rnd === void 0) { rnd = Math.random; }
      var i;
      var t;
      var m = arr.length;
      while (m) {
          i = Math.floor(rnd() * m--);
          t = arr[m];
          arr[m] = arr[i];
          arr[i] = t;
      }
      return arr;
  }
  /**
   * Get all permutations of an array
   *
   * @param {Array} array - the array
   * @return {Array<Array>} an array with all the permutations
   * @example
   * permutations(["a", "b", "c"])) // =>
   * [
   *   ["a", "b", "c"],
   *   ["b", "a", "c"],
   *   ["b", "c", "a"],
   *   ["a", "c", "b"],
   *   ["c", "a", "b"],
   *   ["c", "b", "a"]
   * ]
   */
  function permutations(arr) {
      if (arr.length === 0) {
          return [[]];
      }
      return permutations(arr.slice(1)).reduce(function (acc, perm) {
          return acc.concat(arr.map(function (e, pos) {
              var newPerm = perm.slice();
              newPerm.splice(pos, 0, arr[0]);
              return newPerm;
          }));
      }, []);
  }

  exports.compact = compact;
  exports.permutations = permutations;
  exports.range = range;
  exports.rotate = rotate;
  exports.shuffle = shuffle;
  exports.sortedNoteNames = sortedNoteNames;
  exports.sortedUniqNoteNames = sortedUniqNoteNames;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


},{"@tonaljs/core":11}],7:[function(require,module,exports){
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tonaljs/chord-type'), require('@tonaljs/core'), require('@tonaljs/pcset')) :
  typeof define === 'function' && define.amd ? define(['exports', '@tonaljs/chord-type', '@tonaljs/core', '@tonaljs/pcset'], factory) :
  (global = global || self, factory(global.ChordDetect = {}, global.chordType, global.core, global.pcset));
}(this, (function (exports, chordType, core, pcset) { 'use strict';

  var NotFound = { weight: 0, name: "" };
  var namedSet = function (notes) {
      var pcToName = notes.reduce(function (record, n) {
          var chroma = core.note(n).chroma;
          if (chroma !== undefined) {
              record[chroma] = record[chroma] || core.note(n).name;
          }
          return record;
      }, {});
      return function (chroma) { return pcToName[chroma]; };
  };
  function detect(source) {
      var notes = source.map(function (n) { return core.note(n).pc; }).filter(function (x) { return x; });
      if (core.note.length === 0) {
          return [];
      }
      var found = findExactMatches(notes, 1);
      return found
          .filter(function (chord) { return chord.weight; })
          .sort(function (a, b) { return b.weight - a.weight; })
          .map(function (chord) { return chord.name; });
  }
  function findExactMatches(notes, weight) {
      var tonic = notes[0];
      var tonicChroma = core.note(tonic).chroma;
      var noteName = namedSet(notes);
      var allModes = pcset.modes(notes, false);
      var found = allModes.map(function (mode, chroma) {
          var chordName = chordType.get(mode).aliases[0];
          if (!chordName) {
              return NotFound;
          }
          var baseNote = noteName(chroma);
          var isInversion = chroma !== tonicChroma;
          if (isInversion) {
              return { weight: 0.5 * weight, name: "" + baseNote + chordName + "/" + tonic };
          }
          else {
              return { weight: 1 * weight, name: "" + baseNote + chordName };
          }
      });
      return found;
  }
  var index = { detect: detect };

  exports.default = index;
  exports.detect = detect;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


},{"@tonaljs/chord-type":8,"@tonaljs/core":11,"@tonaljs/pcset":18}],8:[function(require,module,exports){
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tonaljs/core'), require('@tonaljs/pcset')) :
    typeof define === 'function' && define.amd ? define(['exports', '@tonaljs/core', '@tonaljs/pcset'], factory) :
    (global = global || self, factory(global.ChordType = {}, global.core, global.pcset));
}(this, (function (exports, core, pcset) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    /**
     * @private
     * Chord List
     * Source: https://en.wikibooks.org/wiki/Music_Theory/Complete_List_of_Chord_Patterns
     * Format: ["intervals", "full name", "abrv1 abrv2"]
     */
    var CHORDS = [
        // ==Major==
        ["1P 3M 5P", "major", "M "],
        ["1P 3M 5P 7M", "major seventh", "maj7 Δ ma7 M7 Maj7"],
        ["1P 3M 5P 7M 9M", "major ninth", "maj9 Δ9"],
        ["1P 3M 5P 7M 9M 13M", "major thirteenth", "maj13 Maj13"],
        ["1P 3M 5P 6M", "sixth", "6 add6 add13 M6"],
        ["1P 3M 5P 6M 9M", "sixth/ninth", "6/9 69"],
        ["1P 3M 5P 7M 11A", "lydian", "maj#4 Δ#4 Δ#11"],
        ["1P 3M 6m 7M", "major seventh flat sixth", "M7b6"],
        // ==Minor==
        // '''Normal'''
        ["1P 3m 5P", "minor", "m min -"],
        ["1P 3m 5P 7m", "minor seventh", "m7 min7 mi7 -7"],
        ["1P 3m 5P 7M", "minor/major seventh", "m/ma7 m/maj7 mM7 mMaj7 m/M7 -Δ7 mΔ"],
        ["1P 3m 5P 6M", "minor sixth", "m6"],
        ["1P 3m 5P 7m 9M", "minor ninth", "m9"],
        ["1P 3m 5P 7m 9M 11P", "minor eleventh", "m11"],
        ["1P 3m 5P 7m 9M 13M", "minor thirteenth", "m13"],
        // '''Diminished'''
        ["1P 3m 5d", "diminished", "dim ° o"],
        ["1P 3m 5d 7d", "diminished seventh", "dim7 °7 o7"],
        ["1P 3m 5d 7m", "half-diminished", "m7b5 ø"],
        // ==Dominant/Seventh==
        // '''Normal'''
        ["1P 3M 5P 7m", "dominant seventh", "7 dom"],
        ["1P 3M 5P 7m 9M", "dominant ninth", "9"],
        ["1P 3M 5P 7m 9M 13M", "dominant thirteenth", "13"],
        ["1P 3M 5P 7m 11A", "lydian dominant seventh", "7#11 7#4"],
        // '''Altered'''
        ["1P 3M 5P 7m 9m", "dominant flat ninth", "7b9"],
        ["1P 3M 5P 7m 9A", "dominant sharp ninth", "7#9"],
        ["1P 3M 7m 9m", "altered", "alt7"],
        // '''Suspended'''
        ["1P 4P 5P", "suspended fourth", "sus4"],
        ["1P 2M 5P", "suspended second", "sus2"],
        ["1P 4P 5P 7m", "suspended fourth seventh", "7sus4"],
        ["1P 5P 7m 9M 11P", "eleventh", "11"],
        ["1P 4P 5P 7m 9m", "suspended fourth flat ninth", "b9sus phryg"],
        // ==Other==
        ["1P 5P", "fifth", "5"],
        ["1P 3M 5A", "augmented", "aug + +5"],
        ["1P 3M 5A 7M", "augmented seventh", "maj7#5 maj7+5 +maj7"],
        ["1P 3M 5P 7M 9M 11A", "major sharp eleventh (lydian)", "maj9#11 Δ9#11"],
        // ==Legacy==
        ["1P 2M 4P 5P", "", "sus24 sus4add9"],
        ["1P 3M 13m", "", "Mb6"],
        ["1P 3M 5A 7M 9M", "", "maj9#5 Maj9#5"],
        ["1P 3M 5A 7m", "", "7#5 +7 7aug aug7"],
        ["1P 3M 5A 7m 9A", "", "7#5#9 7alt"],
        ["1P 3M 5A 7m 9M", "", "9#5 9+"],
        ["1P 3M 5A 7m 9M 11A", "", "9#5#11"],
        ["1P 3M 5A 7m 9m", "", "7#5b9"],
        ["1P 3M 5A 7m 9m 11A", "", "7#5b9#11"],
        ["1P 3M 5A 9A", "", "+add#9"],
        ["1P 3M 5A 9M", "", "M#5add9 +add9"],
        ["1P 3M 5P 6M 11A", "", "M6#11 M6b5 6#11 6b5"],
        ["1P 3M 5P 6M 7M 9M", "", "M7add13"],
        ["1P 3M 5P 6M 9M 11A", "", "69#11"],
        ["1P 3M 5P 6m 7m", "", "7b6"],
        ["1P 3M 5P 7M 9A 11A", "", "maj7#9#11"],
        ["1P 3M 5P 7M 9M 11A 13M", "", "M13#11 maj13#11 M13+4 M13#4"],
        ["1P 3M 5P 7M 9m", "", "M7b9"],
        ["1P 3M 5P 7m 11A 13m", "", "7#11b13 7b5b13"],
        ["1P 3M 5P 7m 13M", "", "7add6 67 7add13"],
        ["1P 3M 5P 7m 9A 11A", "", "7#9#11 7b5#9"],
        ["1P 3M 5P 7m 9A 11A 13M", "", "13#9#11"],
        ["1P 3M 5P 7m 9A 11A 13m", "", "7#9#11b13"],
        ["1P 3M 5P 7m 9A 13M", "", "13#9"],
        ["1P 3M 5P 7m 9A 13m", "", "7#9b13"],
        ["1P 3M 5P 7m 9M 11A", "", "9#11 9+4 9#4"],
        ["1P 3M 5P 7m 9M 11A 13M", "", "13#11 13+4 13#4"],
        ["1P 3M 5P 7m 9M 11A 13m", "", "9#11b13 9b5b13"],
        ["1P 3M 5P 7m 9m 11A", "", "7b9#11 7b5b9"],
        ["1P 3M 5P 7m 9m 11A 13M", "", "13b9#11"],
        ["1P 3M 5P 7m 9m 11A 13m", "", "7b9b13#11 7b9#11b13 7b5b9b13"],
        ["1P 3M 5P 7m 9m 13M", "", "13b9"],
        ["1P 3M 5P 7m 9m 13m", "", "7b9b13"],
        ["1P 3M 5P 7m 9m 9A", "", "7b9#9"],
        ["1P 3M 5P 9M", "", "Madd9 2 add9 add2"],
        ["1P 3M 5P 9m", "", "Maddb9"],
        ["1P 3M 5d", "", "Mb5"],
        ["1P 3M 5d 6M 7m 9M", "", "13b5"],
        ["1P 3M 5d 7M", "", "M7b5"],
        ["1P 3M 5d 7M 9M", "", "M9b5"],
        ["1P 3M 5d 7m", "", "7b5"],
        ["1P 3M 5d 7m 9M", "", "9b5"],
        ["1P 3M 7m", "", "7no5"],
        ["1P 3M 7m 13m", "", "7b13"],
        ["1P 3M 7m 9M", "", "9no5"],
        ["1P 3M 7m 9M 13M", "", "13no5"],
        ["1P 3M 7m 9M 13m", "", "9b13"],
        ["1P 3m 4P 5P", "", "madd4"],
        ["1P 3m 5A", "", "m#5 m+ mb6"],
        ["1P 3m 5P 6M 9M", "", "m69"],
        ["1P 3m 5P 6m 7M", "", "mMaj7b6"],
        ["1P 3m 5P 6m 7M 9M", "", "mMaj9b6"],
        ["1P 3m 5P 7M 9M", "", "mMaj9"],
        ["1P 3m 5P 7m 11P", "", "m7add11 m7add4"],
        ["1P 3m 5P 9M", "", "madd9"],
        ["1P 3m 5d 6M 7M", "", "o7M7"],
        ["1P 3m 5d 7M", "", "oM7"],
        ["1P 3m 6m 7M", "", "mb6M7"],
        ["1P 3m 6m 7m", "", "m7#5"],
        ["1P 3m 6m 7m 9M", "", "m9#5"],
        ["1P 3m 6m 7m 9M 11P", "", "m11A"],
        ["1P 3m 6m 9m", "", "mb6b9"],
        ["1P 2M 3m 5d 7m", "", "m9b5"],
        ["1P 4P 5A 7M", "", "M7#5sus4"],
        ["1P 4P 5A 7M 9M", "", "M9#5sus4"],
        ["1P 4P 5A 7m", "", "7#5sus4"],
        ["1P 4P 5P 7M", "", "M7sus4"],
        ["1P 4P 5P 7M 9M", "", "M9sus4"],
        ["1P 4P 5P 7m 9M", "", "9sus4 9sus"],
        ["1P 4P 5P 7m 9M 13M", "", "13sus4 13sus"],
        ["1P 4P 5P 7m 9m 13m", "", "7sus4b9b13 7b9b13sus4"],
        ["1P 4P 7m 10m", "", "4 quartal"],
        ["1P 5P 7m 9m 11P", "", "11b9"],
    ];

    var NoChordType = __assign(__assign({}, pcset.EmptyPcset), { name: "", quality: "Unknown", intervals: [], aliases: [] });
    var dictionary = [];
    var index = {};
    /**
     * Given a chord name or chroma, return the chord properties
     * @param {string} source - chord name or pitch class set chroma
     * @example
     * import { get } from 'tonaljs/chord-type'
     * get('major') // => { name: 'major', ... }
     */
    function get(type) {
        return index[type] || NoChordType;
    }
    var chordType = core.deprecate("ChordType.chordType", "ChordType.get", get);
    /**
     * Get all chord (long) names
     */
    function names() {
        return dictionary.map(function (chord) { return chord.name; }).filter(function (x) { return x; });
    }
    /**
     * Get all chord symbols
     */
    function symbols() {
        return dictionary.map(function (chord) { return chord.aliases[0]; }).filter(function (x) { return x; });
    }
    /**
     * Keys used to reference chord types
     */
    function keys() {
        return Object.keys(index);
    }
    /**
     * Return a list of all chord types
     */
    function all() {
        return dictionary.slice();
    }
    var entries = core.deprecate("ChordType.entries", "ChordType.all", all);
    /**
     * Clear the dictionary
     */
    function removeAll() {
        dictionary = [];
        index = {};
    }
    /**
     * Add a chord to the dictionary.
     * @param intervals
     * @param aliases
     * @param [fullName]
     */
    function add(intervals, aliases, fullName) {
        var quality = getQuality(intervals);
        var chord = __assign(__assign({}, pcset.get(intervals)), { name: fullName || "", quality: quality,
            intervals: intervals,
            aliases: aliases });
        dictionary.push(chord);
        if (chord.name) {
            index[chord.name] = chord;
        }
        index[chord.setNum] = chord;
        index[chord.chroma] = chord;
        chord.aliases.forEach(function (alias) { return addAlias(chord, alias); });
    }
    function addAlias(chord, alias) {
        index[alias] = chord;
    }
    function getQuality(intervals) {
        var has = function (interval) { return intervals.indexOf(interval) !== -1; };
        return has("5A")
            ? "Augmented"
            : has("3M")
                ? "Major"
                : has("5d")
                    ? "Diminished"
                    : has("3m")
                        ? "Minor"
                        : "Unknown";
    }
    CHORDS.forEach(function (_a) {
        var ivls = _a[0], fullName = _a[1], names = _a[2];
        return add(ivls.split(" "), names.split(" "), fullName);
    });
    dictionary.sort(function (a, b) { return a.setNum - b.setNum; });
    var index$1 = {
        names: names,
        symbols: symbols,
        get: get,
        all: all,
        add: add,
        removeAll: removeAll,
        keys: keys,
        // deprecated
        entries: entries,
        chordType: chordType,
    };

    exports.add = add;
    exports.addAlias = addAlias;
    exports.all = all;
    exports.chordType = chordType;
    exports.default = index$1;
    exports.entries = entries;
    exports.get = get;
    exports.keys = keys;
    exports.names = names;
    exports.removeAll = removeAll;
    exports.symbols = symbols;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


},{"@tonaljs/core":11,"@tonaljs/pcset":18}],9:[function(require,module,exports){
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tonaljs/chord-detect'), require('@tonaljs/chord-type'), require('@tonaljs/core'), require('@tonaljs/pcset'), require('@tonaljs/scale-type')) :
    typeof define === 'function' && define.amd ? define(['exports', '@tonaljs/chord-detect', '@tonaljs/chord-type', '@tonaljs/core', '@tonaljs/pcset', '@tonaljs/scale-type'], factory) :
    (global = global || self, factory(global.Chord = {}, global.chordDetect, global.chordType, global.core, global.pcset, global.scaleType));
}(this, (function (exports, chordDetect, chordType, core, pcset, scaleType) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    var NoChord = {
        empty: true,
        name: "",
        symbol: "",
        root: "",
        rootDegree: 0,
        type: "",
        tonic: null,
        setNum: NaN,
        quality: "Unknown",
        chroma: "",
        normalized: "",
        aliases: [],
        notes: [],
        intervals: [],
    };
    // 6, 64, 7, 9, 11 and 13 are consider part of the chord
    // (see https://github.com/danigb/tonal/issues/55)
    var NUM_TYPES = /^(6|64|7|9|11|13)$/;
    /**
     * Tokenize a chord name. It returns an array with the tonic and chord type
     * If not tonic is found, all the name is considered the chord name.
     *
     * This function does NOT check if the chord type exists or not. It only tries
     * to split the tonic and chord type.
     *
     * @function
     * @param {string} name - the chord name
     * @return {Array} an array with [tonic, type]
     * @example
     * tokenize("Cmaj7") // => [ "C", "maj7" ]
     * tokenize("C7") // => [ "C", "7" ]
     * tokenize("mMaj7") // => [ null, "mMaj7" ]
     * tokenize("Cnonsense") // => [ null, "nonsense" ]
     */
    function tokenize(name) {
        var _a = core.tokenizeNote(name), letter = _a[0], acc = _a[1], oct = _a[2], type = _a[3];
        if (letter === "") {
            return ["", name];
        }
        // aug is augmented (see https://github.com/danigb/tonal/issues/55)
        if (letter === "A" && type === "ug") {
            return ["", "aug"];
        }
        // see: https://github.com/tonaljs/tonal/issues/70
        if (!type && (oct === "4" || oct === "5")) {
            return [letter + acc, oct];
        }
        if (NUM_TYPES.test(oct)) {
            return [letter + acc, oct + type];
        }
        else {
            return [letter + acc + oct, type];
        }
    }
    /**
     * Get a Chord from a chord name.
     */
    function get(src) {
        if (src === "") {
            return NoChord;
        }
        if (Array.isArray(src) && src.length === 2) {
            return getChord(src[1], src[0]);
        }
        else {
            var _a = tokenize(src), tonic = _a[0], type = _a[1];
            var chord_1 = getChord(type, tonic);
            return chord_1.empty ? getChord(src) : chord_1;
        }
    }
    /**
     * Get chord properties
     *
     * @param typeName - the chord type name
     * @param [tonic] - Optional tonic
     * @param [root]  - Optional root (requires a tonic)
     */
    function getChord(typeName, optionalTonic, optionalRoot) {
        var type = chordType.get(typeName);
        var tonic = core.note(optionalTonic || "");
        var root = core.note(optionalRoot || "");
        if (type.empty ||
            (optionalTonic && tonic.empty) ||
            (optionalRoot && root.empty)) {
            return NoChord;
        }
        var rootInterval = core.distance(tonic.pc, root.pc);
        var rootDegree = type.intervals.indexOf(rootInterval) + 1;
        if (!root.empty && !rootDegree) {
            return NoChord;
        }
        var notes = tonic.empty
            ? []
            : type.intervals.map(function (i) { return core.transpose(tonic, i); });
        typeName = type.aliases.indexOf(typeName) !== -1 ? typeName : type.aliases[0];
        var symbol = "" + (tonic.empty ? "" : tonic.pc) + typeName + (root.empty ? "" : "/" + root.pc);
        var name = "" + (optionalTonic ? tonic.pc + " " : "") + type.name + (optionalRoot ? " over " + root.pc : "");
        return __assign(__assign({}, type), { name: name,
            symbol: symbol, type: type.name, root: root.name, rootDegree: rootDegree, tonic: tonic.name, notes: notes });
    }
    var chord = core.deprecate("Chord.chord", "Chord.get", get);
    /**
     * Transpose a chord name
     *
     * @param {string} chordName - the chord name
     * @return {string} the transposed chord
     *
     * @example
     * transpose('Dm7', 'P4') // => 'Gm7
     */
    function transpose(chordName, interval) {
        var _a = tokenize(chordName), tonic = _a[0], type = _a[1];
        if (!tonic) {
            return chordName;
        }
        return core.transpose(tonic, interval) + type;
    }
    /**
     * Get all scales where the given chord fits
     *
     * @example
     * chordScales('C7b9')
     * // => ["phrygian dominant", "flamenco", "spanish heptatonic", "half-whole diminished", "chromatic"]
     */
    function chordScales(name) {
        var s = get(name);
        var isChordIncluded = pcset.isSupersetOf(s.chroma);
        return scaleType.all()
            .filter(function (scale) { return isChordIncluded(scale.chroma); })
            .map(function (scale) { return scale.name; });
    }
    /**
     * Get all chords names that are a superset of the given one
     * (has the same notes and at least one more)
     *
     * @function
     * @example
     * extended("CMaj7")
     * // => [ 'Cmaj#4', 'Cmaj7#9#11', 'Cmaj9', 'CM7add13', 'Cmaj13', 'Cmaj9#11', 'CM13#11', 'CM7b9' ]
     */
    function extended(chordName) {
        var s = get(chordName);
        var isSuperset = pcset.isSupersetOf(s.chroma);
        return chordType.all()
            .filter(function (chord) { return isSuperset(chord.chroma); })
            .map(function (chord) { return s.tonic + chord.aliases[0]; });
    }
    /**
     * Find all chords names that are a subset of the given one
     * (has less notes but all from the given chord)
     *
     * @example
     */
    function reduced(chordName) {
        var s = get(chordName);
        var isSubset = pcset.isSubsetOf(s.chroma);
        return chordType.all()
            .filter(function (chord) { return isSubset(chord.chroma); })
            .map(function (chord) { return s.tonic + chord.aliases[0]; });
    }
    var index = {
        getChord: getChord,
        get: get,
        detect: chordDetect.detect,
        chordScales: chordScales,
        extended: extended,
        reduced: reduced,
        tokenize: tokenize,
        transpose: transpose,
        // deprecate
        chord: chord,
    };

    Object.defineProperty(exports, 'detect', {
        enumerable: true,
        get: function () {
            return chordDetect.detect;
        }
    });
    exports.chord = chord;
    exports.chordScales = chordScales;
    exports.default = index;
    exports.extended = extended;
    exports.get = get;
    exports.getChord = getChord;
    exports.reduced = reduced;
    exports.tokenize = tokenize;
    exports.transpose = transpose;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


},{"@tonaljs/chord-detect":7,"@tonaljs/chord-type":8,"@tonaljs/core":11,"@tonaljs/pcset":18,"@tonaljs/scale-type":22}],10:[function(require,module,exports){
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.Collection = {}));
}(this, (function (exports) { 'use strict';

  // ascending range
  function ascR(b, n) {
      var a = [];
      // tslint:disable-next-line:curly
      for (; n--; a[n] = n + b)
          ;
      return a;
  }
  // descending range
  function descR(b, n) {
      var a = [];
      // tslint:disable-next-line:curly
      for (; n--; a[n] = b - n)
          ;
      return a;
  }
  /**
   * Creates a numeric range
   *
   * @param {number} from
   * @param {number} to
   * @return {Array<number>}
   *
   * @example
   * range(-2, 2) // => [-2, -1, 0, 1, 2]
   * range(2, -2) // => [2, 1, 0, -1, -2]
   */
  function range(from, to) {
      return from < to ? ascR(from, to - from + 1) : descR(from, from - to + 1);
  }
  /**
   * Rotates a list a number of times. It"s completly agnostic about the
   * contents of the list.
   *
   * @param {Integer} times - the number of rotations
   * @param {Array} collection
   * @return {Array} the rotated collection
   *
   * @example
   * rotate(1, [1, 2, 3]) // => [2, 3, 1]
   */
  function rotate(times, arr) {
      var len = arr.length;
      var n = ((times % len) + len) % len;
      return arr.slice(n, len).concat(arr.slice(0, n));
  }
  /**
   * Return a copy of the collection with the null values removed
   * @function
   * @param {Array} collection
   * @return {Array}
   *
   * @example
   * compact(["a", "b", null, "c"]) // => ["a", "b", "c"]
   */
  function compact(arr) {
      return arr.filter(function (n) { return n === 0 || n; });
  }
  /**
   * Randomizes the order of the specified collection in-place, using the Fisher–Yates shuffle.
   *
   * @function
   * @param {Array} collection
   * @return {Array} the collection shuffled
   *
   * @example
   * shuffle(["C", "D", "E", "F"]) // => [...]
   */
  function shuffle(arr, rnd) {
      if (rnd === void 0) { rnd = Math.random; }
      var i;
      var t;
      var m = arr.length;
      while (m) {
          i = Math.floor(rnd() * m--);
          t = arr[m];
          arr[m] = arr[i];
          arr[i] = t;
      }
      return arr;
  }
  /**
   * Get all permutations of an collection
   *
   * @param {Array} collection - the collection
   * @return {Array<Array>} an collection with all the permutations
   * @example
   * permutations(["a", "b", "c"])) // =>
   * [
   *   ["a", "b", "c"],
   *   ["b", "a", "c"],
   *   ["b", "c", "a"],
   *   ["a", "c", "b"],
   *   ["c", "a", "b"],
   *   ["c", "b", "a"]
   * ]
   */
  function permutations(arr) {
      if (arr.length === 0) {
          return [[]];
      }
      return permutations(arr.slice(1)).reduce(function (acc, perm) {
          return acc.concat(arr.map(function (e, pos) {
              var newPerm = perm.slice();
              newPerm.splice(pos, 0, arr[0]);
              return newPerm;
          }));
      }, []);
  }
  var index = {
      compact: compact,
      permutations: permutations,
      range: range,
      rotate: rotate,
      shuffle: shuffle,
  };

  exports.compact = compact;
  exports.default = index;
  exports.permutations = permutations;
  exports.range = range;
  exports.rotate = rotate;
  exports.shuffle = shuffle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


},{}],11:[function(require,module,exports){
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.Core = {}));
}(this, (function (exports) { 'use strict';

  /**
   * Fill a string with a repeated character
   *
   * @param character
   * @param repetition
   */
  var fillStr = function (s, n) { return Array(Math.abs(n) + 1).join(s); };
  function deprecate(original, alternative, fn) {
      return function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
          }
          // tslint:disable-next-line
          console.warn(original + " is deprecated. Use " + alternative + ".");
          return fn.apply(this, args);
      };
  }

  function isNamed(src) {
      return src !== null && typeof src === "object" && typeof src.name === "string"
          ? true
          : false;
  }

  function isPitch(pitch) {
      return pitch !== null &&
          typeof pitch === "object" &&
          typeof pitch.step === "number" &&
          typeof pitch.alt === "number"
          ? true
          : false;
  }
  // The number of fifths of [C, D, E, F, G, A, B]
  var FIFTHS = [0, 2, 4, -1, 1, 3, 5];
  // The number of octaves it span each step
  var STEPS_TO_OCTS = FIFTHS.map(function (fifths) {
      return Math.floor((fifths * 7) / 12);
  });
  function encode(pitch) {
      var step = pitch.step, alt = pitch.alt, oct = pitch.oct, _a = pitch.dir, dir = _a === void 0 ? 1 : _a;
      var f = FIFTHS[step] + 7 * alt;
      if (oct === undefined) {
          return [dir * f];
      }
      var o = oct - STEPS_TO_OCTS[step] - 4 * alt;
      return [dir * f, dir * o];
  }
  // We need to get the steps from fifths
  // Fifths for CDEFGAB are [ 0, 2, 4, -1, 1, 3, 5 ]
  // We add 1 to fifths to avoid negative numbers, so:
  // for ["F", "C", "G", "D", "A", "E", "B"] we have:
  var FIFTHS_TO_STEPS = [3, 0, 4, 1, 5, 2, 6];
  function decode(coord) {
      var f = coord[0], o = coord[1], dir = coord[2];
      var step = FIFTHS_TO_STEPS[unaltered(f)];
      var alt = Math.floor((f + 1) / 7);
      if (o === undefined) {
          return { step: step, alt: alt, dir: dir };
      }
      var oct = o + 4 * alt + STEPS_TO_OCTS[step];
      return { step: step, alt: alt, oct: oct, dir: dir };
  }
  // Return the number of fifths as if it were unaltered
  function unaltered(f) {
      var i = (f + 1) % 7;
      return i < 0 ? 7 + i : i;
  }

  var NoNote = { empty: true, name: "", pc: "", acc: "" };
  var cache = new Map();
  var stepToLetter = function (step) { return "CDEFGAB".charAt(step); };
  var altToAcc = function (alt) {
      return alt < 0 ? fillStr("b", -alt) : fillStr("#", alt);
  };
  var accToAlt = function (acc) {
      return acc[0] === "b" ? -acc.length : acc.length;
  };
  /**
   * Given a note literal (a note name or a note object), returns the Note object
   * @example
   * note('Bb4') // => { name: "Bb4", midi: 70, chroma: 10, ... }
   */
  function note(src) {
      var cached = cache.get(src);
      if (cached) {
          return cached;
      }
      var value = typeof src === "string"
          ? parse(src)
          : isPitch(src)
              ? note(pitchName(src))
              : isNamed(src)
                  ? note(src.name)
                  : NoNote;
      cache.set(src, value);
      return value;
  }
  var REGEX = /^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;
  /**
   * @private
   */
  function tokenizeNote(str) {
      var m = REGEX.exec(str);
      return [m[1].toUpperCase(), m[2].replace(/x/g, "##"), m[3], m[4]];
  }
  /**
   * @private
   */
  function coordToNote(noteCoord) {
      return note(decode(noteCoord));
  }
  var mod = function (n, m) { return ((n % m) + m) % m; };
  var SEMI = [0, 2, 4, 5, 7, 9, 11];
  function parse(noteName) {
      var tokens = tokenizeNote(noteName);
      if (tokens[0] === "" || tokens[3] !== "") {
          return NoNote;
      }
      var letter = tokens[0];
      var acc = tokens[1];
      var octStr = tokens[2];
      var step = (letter.charCodeAt(0) + 3) % 7;
      var alt = accToAlt(acc);
      var oct = octStr.length ? +octStr : undefined;
      var coord = encode({ step: step, alt: alt, oct: oct });
      var name = letter + acc + octStr;
      var pc = letter + acc;
      var chroma = (SEMI[step] + alt + 120) % 12;
      var height = oct === undefined
          ? mod(SEMI[step] + alt, 12) - 12 * 99
          : SEMI[step] + alt + 12 * (oct + 1);
      var midi = height >= 0 && height <= 127 ? height : null;
      var freq = oct === undefined ? null : Math.pow(2, (height - 69) / 12) * 440;
      return {
          empty: false,
          acc: acc,
          alt: alt,
          chroma: chroma,
          coord: coord,
          freq: freq,
          height: height,
          letter: letter,
          midi: midi,
          name: name,
          oct: oct,
          pc: pc,
          step: step,
      };
  }
  function pitchName(props) {
      var step = props.step, alt = props.alt, oct = props.oct;
      var letter = stepToLetter(step);
      if (!letter) {
          return "";
      }
      var pc = letter + altToAcc(alt);
      return oct || oct === 0 ? pc + oct : pc;
  }

  var NoInterval = { empty: true, name: "", acc: "" };
  // shorthand tonal notation (with quality after number)
  var INTERVAL_TONAL_REGEX = "([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})";
  // standard shorthand notation (with quality before number)
  var INTERVAL_SHORTHAND_REGEX = "(AA|A|P|M|m|d|dd)([-+]?\\d+)";
  var REGEX$1 = new RegExp("^" + INTERVAL_TONAL_REGEX + "|" + INTERVAL_SHORTHAND_REGEX + "$");
  /**
   * @private
   */
  function tokenizeInterval(str) {
      var m = REGEX$1.exec("" + str);
      if (m === null) {
          return ["", ""];
      }
      return m[1] ? [m[1], m[2]] : [m[4], m[3]];
  }
  var cache$1 = {};
  /**
   * Get interval properties. It returns an object with:
   *
   * - name: the interval name
   * - num: the interval number
   * - type: 'perfectable' or 'majorable'
   * - q: the interval quality (d, m, M, A)
   * - dir: interval direction (1 ascending, -1 descending)
   * - simple: the simplified number
   * - semitones: the size in semitones
   * - chroma: the interval chroma
   *
   * @param {string} interval - the interval name
   * @return {Object} the interval properties
   *
   * @example
   * import { interval } from '@tonaljs/core'
   * interval('P5').semitones // => 7
   * interval('m3').type // => 'majorable'
   */
  function interval(src) {
      return typeof src === "string"
          ? cache$1[src] || (cache$1[src] = parse$1(src))
          : isPitch(src)
              ? interval(pitchName$1(src))
              : isNamed(src)
                  ? interval(src.name)
                  : NoInterval;
  }
  var SIZES = [0, 2, 4, 5, 7, 9, 11];
  var TYPES = "PMMPPMM";
  function parse$1(str) {
      var tokens = tokenizeInterval(str);
      if (tokens[0] === "") {
          return NoInterval;
      }
      var num = +tokens[0];
      var q = tokens[1];
      var step = (Math.abs(num) - 1) % 7;
      var t = TYPES[step];
      if (t === "M" && q === "P") {
          return NoInterval;
      }
      var type = t === "M" ? "majorable" : "perfectable";
      var name = "" + num + q;
      var dir = num < 0 ? -1 : 1;
      var simple = num === 8 || num === -8 ? num : dir * (step + 1);
      var alt = qToAlt(type, q);
      var oct = Math.floor((Math.abs(num) - 1) / 7);
      var semitones = dir * (SIZES[step] + alt + 12 * oct);
      var chroma = (((dir * (SIZES[step] + alt)) % 12) + 12) % 12;
      var coord = encode({ step: step, alt: alt, oct: oct, dir: dir });
      return {
          empty: false,
          name: name,
          num: num,
          q: q,
          step: step,
          alt: alt,
          dir: dir,
          type: type,
          simple: simple,
          semitones: semitones,
          chroma: chroma,
          coord: coord,
          oct: oct,
      };
  }
  /**
   * @private
   */
  function coordToInterval(coord) {
      var f = coord[0], _a = coord[1], o = _a === void 0 ? 0 : _a;
      var isDescending = f * 7 + o * 12 < 0;
      var ivl = isDescending ? [-f, -o, -1] : [f, o, 1];
      return interval(decode(ivl));
  }
  function qToAlt(type, q) {
      return (q === "M" && type === "majorable") ||
          (q === "P" && type === "perfectable")
          ? 0
          : q === "m" && type === "majorable"
              ? -1
              : /^A+$/.test(q)
                  ? q.length
                  : /^d+$/.test(q)
                      ? -1 * (type === "perfectable" ? q.length : q.length + 1)
                      : 0;
  }
  // return the interval name of a pitch
  function pitchName$1(props) {
      var step = props.step, alt = props.alt, _a = props.oct, oct = _a === void 0 ? 0 : _a, dir = props.dir;
      if (!dir) {
          return "";
      }
      var num = step + 1 + 7 * oct;
      var d = dir < 0 ? "-" : "";
      var type = TYPES[step] === "M" ? "majorable" : "perfectable";
      var name = d + num + altToQ(type, alt);
      return name;
  }
  function altToQ(type, alt) {
      if (alt === 0) {
          return type === "majorable" ? "M" : "P";
      }
      else if (alt === -1 && type === "majorable") {
          return "m";
      }
      else if (alt > 0) {
          return fillStr("A", alt);
      }
      else {
          return fillStr("d", type === "perfectable" ? alt : alt + 1);
      }
  }

  /**
   * Transpose a note by an interval.
   *
   * @param {string} note - the note or note name
   * @param {string} interval - the interval or interval name
   * @return {string} the transposed note name or empty string if not valid notes
   * @example
   * import { tranpose } from "@tonaljs/core"
   * transpose("d3", "3M") // => "F#3"
   * transpose("D", "3M") // => "F#"
   * ["C", "D", "E", "F", "G"].map(pc => transpose(pc, "M3)) // => ["E", "F#", "G#", "A", "B"]
   */
  function transpose(noteName, intervalName) {
      var note$1 = note(noteName);
      var interval$1 = interval(intervalName);
      if (note$1.empty || interval$1.empty) {
          return "";
      }
      var noteCoord = note$1.coord;
      var intervalCoord = interval$1.coord;
      var tr = noteCoord.length === 1
          ? [noteCoord[0] + intervalCoord[0]]
          : [noteCoord[0] + intervalCoord[0], noteCoord[1] + intervalCoord[1]];
      return coordToNote(tr).name;
  }
  /**
   * Find the interval distance between two notes or coord classes.
   *
   * To find distance between coord classes, both notes must be coord classes and
   * the interval is always ascending
   *
   * @param {Note|string} from - the note or note name to calculate distance from
   * @param {Note|string} to - the note or note name to calculate distance to
   * @return {string} the interval name or empty string if not valid notes
   *
   */
  function distance(fromNote, toNote) {
      var from = note(fromNote);
      var to = note(toNote);
      if (from.empty || to.empty) {
          return "";
      }
      var fcoord = from.coord;
      var tcoord = to.coord;
      var fifths = tcoord[0] - fcoord[0];
      var octs = fcoord.length === 2 && tcoord.length === 2
          ? tcoord[1] - fcoord[1]
          : -Math.floor((fifths * 7) / 12);
      return coordToInterval([fifths, octs]).name;
  }

  exports.accToAlt = accToAlt;
  exports.altToAcc = altToAcc;
  exports.coordToInterval = coordToInterval;
  exports.coordToNote = coordToNote;
  exports.decode = decode;
  exports.deprecate = deprecate;
  exports.distance = distance;
  exports.encode = encode;
  exports.fillStr = fillStr;
  exports.interval = interval;
  exports.isNamed = isNamed;
  exports.isPitch = isPitch;
  exports.note = note;
  exports.stepToLetter = stepToLetter;
  exports.tokenizeInterval = tokenizeInterval;
  exports.tokenizeNote = tokenizeNote;
  exports.transpose = transpose;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


},{}],12:[function(require,module,exports){
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.DurationValue = {}));
}(this, (function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    // source: https://en.wikipedia.org/wiki/Note_value
    var DATA = [
        [
            0.125,
            "dl",
            ["large", "duplex longa", "maxima", "octuple", "octuple whole"],
        ],
        [0.25, "l", ["long", "longa"]],
        [0.5, "d", ["double whole", "double", "breve"]],
        [1, "w", ["whole", "semibreve"]],
        [2, "h", ["half", "minim"]],
        [4, "q", ["quarter", "crotchet"]],
        [8, "e", ["eighth", "quaver"]],
        [16, "s", ["sixteenth", "semiquaver"]],
        [32, "t", ["thirty-second", "demisemiquaver"]],
        [64, "sf", ["sixty-fourth", "hemidemisemiquaver"]],
        [128, "h", ["hundred twenty-eighth"]],
        [256, "th", ["two hundred fifty-sixth"]],
    ];

    var VALUES = [];
    DATA.forEach(function (_a) {
        var denominator = _a[0], shorthand = _a[1], names = _a[2];
        return add(denominator, shorthand, names);
    });
    var NoDuration = {
        empty: true,
        name: "",
        value: 0,
        fraction: [0, 0],
        shorthand: "",
        dots: "",
        names: [],
    };
    function names() {
        return VALUES.reduce(function (names, duration) {
            duration.names.forEach(function (name) { return names.push(name); });
            return names;
        }, []);
    }
    function shorthands() {
        return VALUES.map(function (dur) { return dur.shorthand; });
    }
    var REGEX = /^([^.]+)(\.*)$/;
    function get(name) {
        var _a = REGEX.exec(name) || [], _ = _a[0], simple = _a[1], dots = _a[2];
        var base = VALUES.find(function (dur) { return dur.shorthand === simple || dur.names.includes(simple); });
        if (!base) {
            return NoDuration;
        }
        var fraction = calcDots(base.fraction, dots.length);
        var value = fraction[0] / fraction[1];
        return __assign(__assign({}, base), { name: name, dots: dots, value: value, fraction: fraction });
    }
    var value = function (name) { return get(name).value; };
    var fraction = function (name) { return get(name).fraction; };
    var index = { names: names, shorthands: shorthands, get: get, value: value, fraction: fraction };
    //// PRIVATE ////
    function add(denominator, shorthand, names) {
        VALUES.push({
            empty: false,
            dots: "",
            name: "",
            value: 1 / denominator,
            fraction: denominator < 1 ? [1 / denominator, 1] : [1, denominator],
            shorthand: shorthand,
            names: names,
        });
    }
    function calcDots(fraction, dots) {
        var pow = Math.pow(2, dots);
        var numerator = fraction[0] * pow;
        var denominator = fraction[1] * pow;
        var base = numerator;
        // add fractions
        for (var i = 0; i < dots; i++) {
            numerator += base / Math.pow(2, i + 1);
        }
        // simplify
        while (numerator % 2 === 0 && denominator % 2 === 0) {
            numerator /= 2;
            denominator /= 2;
        }
        return [numerator, denominator];
    }

    exports.default = index;
    exports.fraction = fraction;
    exports.get = get;
    exports.names = names;
    exports.shorthands = shorthands;
    exports.value = value;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


},{}],13:[function(require,module,exports){
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tonaljs/core')) :
  typeof define === 'function' && define.amd ? define(['exports', '@tonaljs/core'], factory) :
  (global = global || self, factory(global.Interval = {}, global.core));
}(this, (function (exports, core) { 'use strict';

  /**
   * Get the natural list of names
   */
  function names() {
      return "1P 2M 3M 4P 5P 6m 7m".split(" ");
  }
  /**
   * Get properties of an interval
   *
   * @function
   * @example
   * Interval.get('P4') // => {"alt": 0,  "dir": 1,  "name": "4P", "num": 4, "oct": 0, "q": "P", "semitones": 5, "simple": 4, "step": 3, "type": "perfectable"}
   */
  var get = core.interval;
  /**
   * Get name of an interval
   *
   * @function
   * @example
   * Interval.name('4P') // => "4P"
   * Interval.name('P4') // => "4P"
   * Interval.name('C4') // => ""
   */
  var name = function (name) { return core.interval(name).name; };
  /**
   * Get semitones of an interval
   * @function
   * @example
   * Interval.semitones('P4') // => 5
   */
  var semitones = function (name) { return core.interval(name).semitones; };
  /**
   * Get quality of an interval
   * @function
   * @example
   * Interval.quality('P4') // => "P"
   */
  var quality = function (name) { return core.interval(name).q; };
  /**
   * Get number of an interval
   * @function
   * @example
   * Interval.num('P4') // => 4
   */
  var num = function (name) { return core.interval(name).num; };
  /**
   * Get the simplified version of an interval.
   *
   * @function
   * @param {string} interval - the interval to simplify
   * @return {string} the simplified interval
   *
   * @example
   * Interval.simplify("9M") // => "2M"
   * Interval.simplify("2M") // => "2M"
   * Interval.simplify("-2M") // => "7m"
   * ["8P", "9M", "10M", "11P", "12P", "13M", "14M", "15P"].map(Interval.simplify)
   * // => [ "8P", "2M", "3M", "4P", "5P", "6M", "7M", "8P" ]
   */
  function simplify(name) {
      var i = core.interval(name);
      return i.empty ? "" : i.simple + i.q;
  }
  /**
   * Get the inversion (https://en.wikipedia.org/wiki/Inversion_(music)#Intervals)
   * of an interval.
   *
   * @function
   * @param {string} interval - the interval to invert in interval shorthand
   * notation or interval array notation
   * @return {string} the inverted interval
   *
   * @example
   * Interval.invert("3m") // => "6M"
   * Interval.invert("2M") // => "7m"
   */
  function invert(name) {
      var i = core.interval(name);
      if (i.empty) {
          return "";
      }
      var step = (7 - i.step) % 7;
      var alt = i.type === "perfectable" ? -i.alt : -(i.alt + 1);
      return core.interval({ step: step, alt: alt, oct: i.oct, dir: i.dir }).name;
  }
  // interval numbers
  var IN = [1, 2, 2, 3, 3, 4, 5, 5, 6, 6, 7, 7];
  // interval qualities
  var IQ = "P m M m M P d P m M m M".split(" ");
  /**
   * Get interval name from semitones number. Since there are several interval
   * names for the same number, the name it's arbitrary, but deterministic.
   *
   * @param {Integer} num - the number of semitones (can be negative)
   * @return {string} the interval name
   * @example
   * Interval.fromSemitones(7) // => "5P"
   * Interval.fromSemitones(-7) // => "-5P"
   */
  function fromSemitones(semitones) {
      var d = semitones < 0 ? -1 : 1;
      var n = Math.abs(semitones);
      var c = n % 12;
      var o = Math.floor(n / 12);
      return d * (IN[c] + 7 * o) + IQ[c];
  }
  /**
   * Find interval between two notes
   *
   * @example
   * Interval.distance("C4", "G4"); // => "5P"
   */
  var distance = core.distance;
  /**
   * Adds two intervals
   *
   * @function
   * @param {string} interval1
   * @param {string} interval2
   * @return {string} the added interval name
   * @example
   * Interval.add("3m", "5P") // => "7m"
   */
  var add = combinator(function (a, b) { return [a[0] + b[0], a[1] + b[1]]; });
  /**
   * Returns a function that adds an interval
   *
   * @function
   * @example
   * ['1P', '2M', '3M'].map(Interval.addTo('5P')) // => ["5P", "6M", "7M"]
   */
  var addTo = function (interval) { return function (other) {
      return add(interval, other);
  }; };
  /**
   * Subtracts two intervals
   *
   * @function
   * @param {string} minuendInterval
   * @param {string} subtrahendInterval
   * @return {string} the substracted interval name
   * @example
   * Interval.substract('5P', '3M') // => '3m'
   * Interval.substract('3M', '5P') // => '-3m'
   */
  var substract = combinator(function (a, b) { return [a[0] - b[0], a[1] - b[1]]; });
  var index = {
      names: names,
      get: get,
      name: name,
      num: num,
      semitones: semitones,
      quality: quality,
      fromSemitones: fromSemitones,
      distance: distance,
      invert: invert,
      simplify: simplify,
      add: add,
      addTo: addTo,
      substract: substract,
  };
  function combinator(fn) {
      return function (a, b) {
          var coordA = core.interval(a).coord;
          var coordB = core.interval(b).coord;
          if (coordA && coordB) {
              var coord = fn(coordA, coordB);
              return core.coordToInterval(coord).name;
          }
      };
  }

  exports.add = add;
  exports.addTo = addTo;
  exports.default = index;
  exports.distance = distance;
  exports.fromSemitones = fromSemitones;
  exports.get = get;
  exports.invert = invert;
  exports.name = name;
  exports.names = names;
  exports.num = num;
  exports.quality = quality;
  exports.semitones = semitones;
  exports.simplify = simplify;
  exports.substract = substract;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


},{"@tonaljs/core":11}],14:[function(require,module,exports){
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tonaljs/core'), require('@tonaljs/note'), require('@tonaljs/roman-numeral')) :
    typeof define === 'function' && define.amd ? define(['exports', '@tonaljs/core', '@tonaljs/note', '@tonaljs/roman-numeral'], factory) :
    (global = global || self, factory(global.Key = {}, global.core, global.note, global.romanNumeral));
}(this, (function (exports, core, note, romanNumeral) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    var mapToScale = function (scale) { return function (symbols, sep) {
        if (sep === void 0) { sep = ""; }
        return symbols.map(function (symbol, index) {
            return symbol !== "-" ? scale[index] + sep + symbol : "";
        });
    }; };
    function keyScale(gradesLiteral, chordsLiteral, hfLiteral, chordScalesLiteral) {
        return function (tonic) {
            var grades = gradesLiteral.split(" ");
            var intervals = grades.map(function (gr) { return romanNumeral.get(gr).interval || ""; });
            var scale = intervals.map(function (interval) { return core.transpose(tonic, interval); });
            var map = mapToScale(scale);
            return {
                tonic: tonic,
                grades: grades,
                intervals: intervals,
                scale: scale,
                chords: map(chordsLiteral.split(" ")),
                chordsHarmonicFunction: hfLiteral.split(" "),
                chordScales: map(chordScalesLiteral.split(","), " "),
            };
        };
    }
    var distInFifths = function (from, to) {
        var f = core.note(from);
        var t = core.note(to);
        return f.empty || t.empty ? 0 : t.coord[0] - f.coord[0];
    };
    var MajorScale = keyScale("I II III IV V VI VII", "maj7 m7 m7 maj7 7 m7 m7b5", "T SD T SD D T D", "major,dorian,phrygian,lydian,mixolydian,minor,locrian");
    var NaturalScale = keyScale("I II bIII IV V bVI bVII", "m7 m7b5 maj7 m7 m7 maj7 7", "T SD T SD D SD SD", "minor,locrian,major,dorian,phrygian,lydian,mixolydian");
    var HarmonicScale = keyScale("I II bIII IV V bVI VII", "mmaj7 m7b5 +maj7 m7 7 maj7 mo7", "T SD T SD D SD D", "harmonic minor,locrian 6,major augmented,lydian diminished,phrygian dominant,lydian #9,ultralocrian");
    var MelodicScale = keyScale("I II bIII IV V VI VII", "m6 m7 +maj7 7 7 m7b5 m7b5", "T SD T SD D - -", "melodic minor,dorian b2,lydian augmented,lydian dominant,mixolydian b6,locrian #2,altered");
    /**
     * Get a major key properties in a given tonic
     * @param tonic
     */
    function majorKey(tonic) {
        var keyScale = MajorScale(tonic);
        var alteration = distInFifths("C", tonic);
        var map = mapToScale(keyScale.scale);
        return __assign(__assign({}, keyScale), { type: "major", minorRelative: core.transpose(tonic, "-3m"), alteration: alteration, keySignature: core.altToAcc(alteration), secondaryDominants: map("- VI7 VII7 I7 II7 III7 -".split(" ")), secondaryDominantsMinorRelative: map("- IIIm7b5 IV#m7 Vm7 VIm7 VIIm7b5 -".split(" ")), substituteDominants: map("- bIII7 IV7 bV7 bVI7 bVII7 -".split(" ")), substituteDominantsMinorRelative: map("- IIIm7 Im7 IIbm7 VIm7 IVm7 -".split(" ")) });
    }
    /**
     * Get minor key properties in a given tonic
     * @param tonic
     */
    function minorKey(tonic) {
        var alteration = distInFifths("C", tonic) - 3;
        return {
            type: "minor",
            tonic: tonic,
            relativeMajor: core.transpose(tonic, "3m"),
            alteration: alteration,
            keySignature: core.altToAcc(alteration),
            natural: NaturalScale(tonic),
            harmonic: HarmonicScale(tonic),
            melodic: MelodicScale(tonic),
        };
    }
    /**
     * Given a key signature, returns the tonic of the major key
     * @param sigature
     * @example
     * majorTonicFromKeySignature('###') // => 'A'
     */
    function majorTonicFromKeySignature(sig) {
        if (typeof sig === "number") {
            return note.transposeFifths("C", sig);
        }
        else if (typeof sig === "string" && /^b+|#+$/.test(sig)) {
            return note.transposeFifths("C", core.accToAlt(sig));
        }
        return null;
    }
    var index = { majorKey: majorKey, majorTonicFromKeySignature: majorTonicFromKeySignature, minorKey: minorKey };

    exports.default = index;
    exports.majorKey = majorKey;
    exports.majorTonicFromKeySignature = majorTonicFromKeySignature;
    exports.minorKey = minorKey;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


},{"@tonaljs/core":11,"@tonaljs/note":17,"@tonaljs/roman-numeral":21}],15:[function(require,module,exports){
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tonaljs/core')) :
  typeof define === 'function' && define.amd ? define(['exports', '@tonaljs/core'], factory) :
  (global = global || self, factory(global.Midi = {}, global.core));
}(this, (function (exports, core) { 'use strict';

  function isMidi(arg) {
      return +arg >= 0 && +arg <= 127;
  }
  /**
   * Get the note midi number (a number between 0 and 127)
   *
   * It returns undefined if not valid note name
   *
   * @function
   * @param {string|number} note - the note name or midi number
   * @return {Integer} the midi number or undefined if not valid note
   * @example
   * import { toMidi } from '@tonaljs/midi'
   * toMidi("C4") // => 60
   * toMidi(60) // => 60
   * toMidi('60') // => 60
   */
  function toMidi(note) {
      if (isMidi(note)) {
          return +note;
      }
      var n = core.note(note);
      return n.empty ? null : n.midi;
  }
  /**
   * Get the frequency in hertzs from midi number
   *
   * @param {number} midi - the note midi number
   * @param {number} [tuning = 440] - A4 tuning frequency in Hz (440 by default)
   * @return {number} the frequency or null if not valid note midi
   * @example
   * import { midiToFreq} from '@tonaljs/midi'
   * midiToFreq(69) // => 440
   */
  function midiToFreq(midi, tuning) {
      if (tuning === void 0) { tuning = 440; }
      return Math.pow(2, (midi - 69) / 12) * tuning;
  }
  var L2 = Math.log(2);
  var L440 = Math.log(440);
  /**
   * Get the midi number from a frequency in hertz. The midi number can
   * contain decimals (with two digits precission)
   *
   * @param {number} frequency
   * @return {number}
   * @example
   * import { freqToMidi} from '@tonaljs/midi'
   * freqToMidi(220)); //=> 57
   * freqToMidi(261.62)); //=> 60
   * freqToMidi(261)); //=> 59.96
   */
  function freqToMidi(freq) {
      var v = (12 * (Math.log(freq) - L440)) / L2 + 69;
      return Math.round(v * 100) / 100;
  }
  var SHARPS = "C C# D D# E F F# G G# A A# B".split(" ");
  var FLATS = "C Db D Eb E F Gb G Ab A Bb B".split(" ");
  /**
   * Given a midi number, returns a note name. The altered notes will have
   * flats unless explicitly set with the optional `useSharps` parameter.
   *
   * @function
   * @param {number} midi - the midi note number
   * @param {Object} options = default: `{ sharps: false, pitchClass: false }`
   * @param {boolean} useSharps - (Optional) set to true to use sharps instead of flats
   * @return {string} the note name
   * @example
   * import { midiToNoteName } from '@tonaljs/midi'
   * midiToNoteName(61) // => "Db4"
   * midiToNoteName(61, { pitchClass: true }) // => "Db"
   * midiToNoteName(61, { sharps: true }) // => "C#4"
   * midiToNoteName(61, { pitchClass: true, sharps: true }) // => "C#"
   * // it rounds to nearest note
   * midiToNoteName(61.7) // => "D4"
   */
  function midiToNoteName(midi, options) {
      if (options === void 0) { options = {}; }
      if (isNaN(midi) || midi === -Infinity || midi === Infinity)
          return "";
      midi = Math.round(midi);
      var pcs = options.sharps === true ? SHARPS : FLATS;
      var pc = pcs[midi % 12];
      if (options.pitchClass) {
          return pc;
      }
      var o = Math.floor(midi / 12) - 1;
      return pc + o;
  }
  var index = { isMidi: isMidi, toMidi: toMidi, midiToFreq: midiToFreq, midiToNoteName: midiToNoteName, freqToMidi: freqToMidi };

  exports.default = index;
  exports.freqToMidi = freqToMidi;
  exports.isMidi = isMidi;
  exports.midiToFreq = midiToFreq;
  exports.midiToNoteName = midiToNoteName;
  exports.toMidi = toMidi;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


},{"@tonaljs/core":11}],16:[function(require,module,exports){
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tonaljs/core'), require('@tonaljs/pcset')) :
    typeof define === 'function' && define.amd ? define(['exports', '@tonaljs/core', '@tonaljs/pcset'], factory) :
    (global = global || self, factory(global.Mode = {}, global.core, global.pcset));
}(this, (function (exports, core, pcset) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    var DATA = [
        [0, 2773, 0, "ionian", "", "Maj7", "major"],
        [1, 2902, 2, "dorian", "m", "m7"],
        [2, 3418, 4, "phrygian", "m", "m7"],
        [3, 2741, -1, "lydian", "", "Maj7"],
        [4, 2774, 1, "mixolydian", "", "7"],
        [5, 2906, 3, "aeolian", "m", "m7", "minor"],
        [6, 3434, 5, "locrian", "dim", "m7b5"],
    ];

    var NoMode = __assign(__assign({}, pcset.EmptyPcset), { name: "", alt: 0, modeNum: NaN, triad: "", seventh: "", aliases: [] });
    var modes = DATA.map(toMode);
    var index = {};
    modes.forEach(function (mode) {
        index[mode.name] = mode;
        mode.aliases.forEach(function (alias) {
            index[alias] = mode;
        });
    });
    /**
     * Get a Mode by it's name
     *
     * @example
     * get('dorian')
     * // =>
     * // {
     * //   intervals: [ '1P', '2M', '3m', '4P', '5P', '6M', '7m' ],
     * //   modeNum: 1,
     * //   chroma: '101101010110',
     * //   normalized: '101101010110',
     * //   name: 'dorian',
     * //   setNum: 2902,
     * //   alt: 2,
     * //   triad: 'm',
     * //   seventh: 'm7',
     * //   aliases: []
     * // }
     */
    function get(name) {
        return typeof name === "string"
            ? index[name.toLowerCase()] || NoMode
            : name && name.name
                ? get(name.name)
                : NoMode;
    }
    var mode = core.deprecate("Mode.mode", "Mode.get", get);
    /**
     * Get a list of all modes
     */
    function all() {
        return modes.slice();
    }
    var entries = core.deprecate("Mode.mode", "Mode.all", all);
    /**
     * Get a list of all mode names
     */
    function names() {
        return modes.map(function (mode) { return mode.name; });
    }
    function toMode(mode) {
        var modeNum = mode[0], setNum = mode[1], alt = mode[2], name = mode[3], triad = mode[4], seventh = mode[5], alias = mode[6];
        var aliases = alias ? [alias] : [];
        var chroma = Number(setNum).toString(2);
        var intervals = pcset.chromaToIntervals(chroma);
        return {
            empty: false,
            intervals: intervals,
            modeNum: modeNum,
            chroma: chroma,
            normalized: chroma,
            name: name,
            setNum: setNum,
            alt: alt,
            triad: triad,
            seventh: seventh,
            aliases: aliases,
        };
    }
    var index$1 = {
        get: get,
        names: names,
        all: all,
        // deprecated
        entries: entries,
        mode: mode,
    };

    exports.all = all;
    exports.default = index$1;
    exports.entries = entries;
    exports.get = get;
    exports.mode = mode;
    exports.names = names;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


},{"@tonaljs/core":11,"@tonaljs/pcset":18}],17:[function(require,module,exports){
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tonaljs/core'), require('@tonaljs/midi')) :
  typeof define === 'function' && define.amd ? define(['exports', '@tonaljs/core', '@tonaljs/midi'], factory) :
  (global = global || self, factory(global.Note = {}, global.core, global.midi$1));
}(this, (function (exports, core, midi$1) { 'use strict';

  var NAMES = ["C", "D", "E", "F", "G", "A", "B"];
  var toName = function (n) { return n.name; };
  var onlyNotes = function (array) {
      return array.map(core.note).filter(function (n) { return !n.empty; });
  };
  /**
   * Return the natural note names without octave
   * @function
   * @example
   * Note.names(); // => ["C", "D", "E", "F", "G", "A", "B"]
   */
  function names(array) {
      if (array === undefined) {
          return NAMES.slice();
      }
      else if (!Array.isArray(array)) {
          return [];
      }
      else {
          return onlyNotes(array).map(toName);
      }
  }
  /**
   * Get a note from a note name
   *
   * @function
   * @example
   * Note.get('Bb4') // => { name: "Bb4", midi: 70, chroma: 10, ... }
   */
  var get = core.note;
  /**
   * Get the note name
   * @function
   */
  var name = function (note) { return get(note).name; };
  /**
   * Get the note pitch class name
   * @function
   */
  var pitchClass = function (note) { return get(note).pc; };
  /**
   * Get the note accidentals
   * @function
   */
  var accidentals = function (note) { return get(note).acc; };
  /**
   * Get the note octave
   * @function
   */
  var octave = function (note) { return get(note).oct; };
  /**
   * Get the note midi
   * @function
   */
  var midi = function (note) { return get(note).midi; };
  /**
   * Get the note midi
   * @function
   */
  var freq = function (note) { return get(note).freq; };
  /**
   * Get the note chroma
   * @function
   */
  var chroma = function (note) { return get(note).chroma; };
  /**
   * Given a midi number, returns a note name. Uses flats for altered notes.
   *
   * @function
   * @param {number} midi - the midi note number
   * @return {string} the note name
   * @example
   * Note.fromMidi(61) // => "Db4"
   * Note.fromMidi(61.7) // => "D4"
   */
  function fromMidi(midi) {
      return midi$1.midiToNoteName(midi);
  }
  /**
   * Given a midi number, returns a note name. Uses flats for altered notes.
   */
  function fromFreq(freq) {
      return midi$1.midiToNoteName(midi$1.freqToMidi(freq));
  }
  /**
   * Given a midi number, returns a note name. Uses flats for altered notes.
   */
  function fromFreqSharps(freq) {
      return midi$1.midiToNoteName(midi$1.freqToMidi(freq), { sharps: true });
  }
  /**
   * Given a midi number, returns a note name. Uses flats for altered notes.
   *
   * @function
   * @param {number} midi - the midi note number
   * @return {string} the note name
   * @example
   * Note.fromMidiSharps(61) // => "C#4"
   */
  function fromMidiSharps(midi) {
      return midi$1.midiToNoteName(midi, { sharps: true });
  }
  /**
   * Transpose a note by an interval
   */
  var transpose = core.transpose;
  var tr = core.transpose;
  /**
   * Transpose by an interval.
   * @function
   * @param {string} interval
   * @return {function} a function that transposes by the given interval
   * @example
   * ["C", "D", "E"].map(Note.transposeBy("5P"));
   * // => ["G", "A", "B"]
   */
  var transposeBy = function (interval) { return function (note) {
      return transpose(note, interval);
  }; };
  var trBy = transposeBy;
  /**
   * Transpose from a note
   * @function
   * @param {string} note
   * @return {function}  a function that transposes the the note by an interval
   * ["1P", "3M", "5P"].map(Note.transposeFrom("C"));
   * // => ["C", "E", "G"]
   */
  var transposeFrom = function (note) { return function (interval) {
      return transpose(note, interval);
  }; };
  var trFrom = transposeFrom;
  /**
   * Transpose a note by a number of perfect fifths.
   *
   * @function
   * @param {string} note - the note name
   * @param {number} fifhts - the number of fifths
   * @return {string} the transposed note name
   *
   * @example
   * import { transposeFifths } from "@tonaljs/note"
   * transposeFifths("G4", 1) // => "D"
   * [0, 1, 2, 3, 4].map(fifths => transposeFifths("C", fifths)) // => ["C", "G", "D", "A", "E"]
   */
  function transposeFifths(noteName, fifths) {
      var note = get(noteName);
      if (note.empty) {
          return "";
      }
      var _a = note.coord, nFifths = _a[0], nOcts = _a[1];
      var transposed = nOcts === undefined
          ? core.coordToNote([nFifths + fifths])
          : core.coordToNote([nFifths + fifths, nOcts]);
      return transposed.name;
  }
  var trFifths = transposeFifths;
  var ascending = function (a, b) { return a.height - b.height; };
  var descending = function (a, b) { return b.height - a.height; };
  function sortedNames(notes, comparator) {
      comparator = comparator || ascending;
      return onlyNotes(notes).sort(comparator).map(toName);
  }
  function sortedUniqNames(notes) {
      return sortedNames(notes, ascending).filter(function (n, i, a) { return i === 0 || n !== a[i - 1]; });
  }
  /**
   * Simplify a note
   *
   * @function
   * @param {string} note - the note to be simplified
   * - sameAccType: default true. Use same kind of accidentals that source
   * @return {string} the simplified note or '' if not valid note
   * @example
   * simplify("C##") // => "D"
   * simplify("C###") // => "D#"
   * simplify("C###")
   * simplify("B#4") // => "C5"
   */
  var simplify = nameBuilder(true);
  /**
   * Get enharmonic of a note
   *
   * @function
   * @param {string} note
   * @return {string} the enharmonic note or '' if not valid note
   * @example
   * Note.enharmonic("Db") // => "C#"
   * Note.enharmonic("C") // => "C"
   */
  var enharmonic = nameBuilder(false);
  function nameBuilder(sameAccidentals) {
      return function (noteName) {
          var note = get(noteName);
          if (note.empty) {
              return "";
          }
          var sharps = sameAccidentals ? note.alt > 0 : note.alt < 0;
          var pitchClass = note.midi === null;
          return midi$1.midiToNoteName(note.midi || note.chroma, { sharps: sharps, pitchClass: pitchClass });
      };
  }
  var index = {
      names: names,
      get: get,
      name: name,
      pitchClass: pitchClass,
      accidentals: accidentals,
      octave: octave,
      midi: midi,
      ascending: ascending,
      descending: descending,
      sortedNames: sortedNames,
      sortedUniqNames: sortedUniqNames,
      fromMidi: fromMidi,
      fromMidiSharps: fromMidiSharps,
      freq: freq,
      fromFreq: fromFreq,
      fromFreqSharps: fromFreqSharps,
      chroma: chroma,
      transpose: transpose,
      tr: tr,
      transposeBy: transposeBy,
      trBy: trBy,
      transposeFrom: transposeFrom,
      trFrom: trFrom,
      transposeFifths: transposeFifths,
      trFifths: trFifths,
      simplify: simplify,
      enharmonic: enharmonic,
  };

  exports.accidentals = accidentals;
  exports.ascending = ascending;
  exports.chroma = chroma;
  exports.default = index;
  exports.descending = descending;
  exports.enharmonic = enharmonic;
  exports.freq = freq;
  exports.fromFreq = fromFreq;
  exports.fromFreqSharps = fromFreqSharps;
  exports.fromMidi = fromMidi;
  exports.fromMidiSharps = fromMidiSharps;
  exports.get = get;
  exports.midi = midi;
  exports.name = name;
  exports.names = names;
  exports.octave = octave;
  exports.pitchClass = pitchClass;
  exports.simplify = simplify;
  exports.sortedNames = sortedNames;
  exports.sortedUniqNames = sortedUniqNames;
  exports.tr = tr;
  exports.trBy = trBy;
  exports.trFifths = trFifths;
  exports.trFrom = trFrom;
  exports.transpose = transpose;
  exports.transposeBy = transposeBy;
  exports.transposeFifths = transposeFifths;
  exports.transposeFrom = transposeFrom;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


},{"@tonaljs/core":11,"@tonaljs/midi":15}],18:[function(require,module,exports){
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tonaljs/collection'), require('@tonaljs/core')) :
  typeof define === 'function' && define.amd ? define(['exports', '@tonaljs/collection', '@tonaljs/core'], factory) :
  (global = global || self, factory(global.Pcset = {}, global.collection, global.core));
}(this, (function (exports, collection, core) { 'use strict';

  var _a;
  var EmptyPcset = {
      empty: true,
      name: "",
      setNum: 0,
      chroma: "000000000000",
      normalized: "000000000000",
      intervals: [],
  };
  // UTILITIES
  var setNumToChroma = function (num) { return Number(num).toString(2); };
  var chromaToNumber = function (chroma) { return parseInt(chroma, 2); };
  var REGEX = /^[01]{12}$/;
  function isChroma(set) {
      return REGEX.test(set);
  }
  var isPcsetNum = function (set) {
      return typeof set === "number" && set >= 0 && set <= 4095;
  };
  var isPcset = function (set) { return set && isChroma(set.chroma); };
  var cache = (_a = {}, _a[EmptyPcset.chroma] = EmptyPcset, _a);
  /**
   * Get the pitch class set of a collection of notes or set number or chroma
   */
  function get(src) {
      var chroma = isChroma(src)
          ? src
          : isPcsetNum(src)
              ? setNumToChroma(src)
              : Array.isArray(src)
                  ? listToChroma(src)
                  : isPcset(src)
                      ? src.chroma
                      : EmptyPcset.chroma;
      return (cache[chroma] = cache[chroma] || chromaToPcset(chroma));
  }
  /**
   * Use Pcset.properties
   * @function
   * @deprecated
   */
  var pcset = core.deprecate("Pcset.pcset", "Pcset.get", get);
  /**
   * Get pitch class set chroma
   * @function
   * @example
   * Pcset.chroma(["c", "d", "e"]); //=> "101010000000"
   */
  var chroma = function (set) { return get(set).chroma; };
  /**
   * Get intervals (from C) of a set
   * @function
   * @example
   * Pcset.intervals(["c", "d", "e"]); //=>
   */
  var intervals = function (set) { return get(set).intervals; };
  /**
   * Get pitch class set number
   * @function
   * @example
   * Pcset.num(["c", "d", "e"]); //=> 2192
   */
  var num = function (set) { return get(set).setNum; };
  var IVLS = [
      "1P",
      "2m",
      "2M",
      "3m",
      "3M",
      "4P",
      "5d",
      "5P",
      "6m",
      "6M",
      "7m",
      "7M",
  ];
  /**
   * @private
   * Get the intervals of a pcset *starting from C*
   * @param {Set} set - the pitch class set
   * @return {IntervalName[]} an array of interval names or an empty array
   * if not a valid pitch class set
   */
  function chromaToIntervals(chroma) {
      var intervals = [];
      for (var i = 0; i < 12; i++) {
          // tslint:disable-next-line:curly
          if (chroma.charAt(i) === "1")
              intervals.push(IVLS[i]);
      }
      return intervals;
  }
  /**
   * Get a list of all possible pitch class sets (all possible chromas) *having
   * C as root*. There are 2048 different chromas. If you want them with another
   * note you have to transpose it
   *
   * @see http://allthescales.org/
   * @return {Array<PcsetChroma>} an array of possible chromas from '10000000000' to '11111111111'
   */
  function chromas() {
      return collection.range(2048, 4095).map(setNumToChroma);
  }
  /**
   * Given a a list of notes or a pcset chroma, produce the rotations
   * of the chroma discarding the ones that starts with "0"
   *
   * This is used, for example, to get all the modes of a scale.
   *
   * @param {Array|string} set - the list of notes or pitchChr of the set
   * @param {boolean} normalize - (Optional, true by default) remove all
   * the rotations that starts with "0"
   * @return {Array<string>} an array with all the modes of the chroma
   *
   * @example
   * Pcset.modes(["C", "D", "E"]).map(Pcset.intervals)
   */
  function modes(set, normalize) {
      if (normalize === void 0) { normalize = true; }
      var pcs = get(set);
      var binary = pcs.chroma.split("");
      return collection.compact(binary.map(function (_, i) {
          var r = collection.rotate(i, binary);
          return normalize && r[0] === "0" ? null : r.join("");
      }));
  }
  /**
   * Test if two pitch class sets are numentical
   *
   * @param {Array|string} set1 - one of the pitch class sets
   * @param {Array|string} set2 - the other pitch class set
   * @return {boolean} true if they are equal
   * @example
   * Pcset.isEqual(["c2", "d3"], ["c5", "d2"]) // => true
   */
  function isEqual(s1, s2) {
      return get(s1).setNum === get(s2).setNum;
  }
  /**
   * Create a function that test if a collection of notes is a
   * subset of a given set
   *
   * The function is curryfied.
   *
   * @param {PcsetChroma|NoteName[]} set - the superset to test against (chroma or
   * list of notes)
   * @return{function(PcsetChroma|NoteNames[]): boolean} a function accepting a set
   * to test against (chroma or list of notes)
   * @example
   * const inCMajor = Pcset.isSubsetOf(["C", "E", "G"])
   * inCMajor(["e6", "c4"]) // => true
   * inCMajor(["e6", "c4", "d3"]) // => false
   */
  function isSubsetOf(set) {
      var s = get(set).setNum;
      return function (notes) {
          var o = get(notes).setNum;
          // tslint:disable-next-line: no-bitwise
          return s && s !== o && (o & s) === o;
      };
  }
  /**
   * Create a function that test if a collection of notes is a
   * superset of a given set (it contains all notes and at least one more)
   *
   * @param {Set} set - an array of notes or a chroma set string to test against
   * @return {(subset: Set): boolean} a function that given a set
   * returns true if is a subset of the first one
   * @example
   * const extendsCMajor = Pcset.isSupersetOf(["C", "E", "G"])
   * extendsCMajor(["e6", "a", "c4", "g2"]) // => true
   * extendsCMajor(["c6", "e4", "g3"]) // => false
   */
  function isSupersetOf(set) {
      var s = get(set).setNum;
      return function (notes) {
          var o = get(notes).setNum;
          // tslint:disable-next-line: no-bitwise
          return s && s !== o && (o | s) === o;
      };
  }
  /**
   * Test if a given pitch class set includes a note
   *
   * @param {Array<string>} set - the base set to test against
   * @param {string} note - the note to test
   * @return {boolean} true if the note is included in the pcset
   *
   * Can be partially applied
   *
   * @example
   * const isNoteInCMajor = isNoteIncludedIn(['C', 'E', 'G'])
   * isNoteInCMajor('C4') // => true
   * isNoteInCMajor('C#4') // => false
   */
  function isNoteIncludedIn(set) {
      var s = get(set);
      return function (noteName) {
          var n = core.note(noteName);
          return s && !n.empty && s.chroma.charAt(n.chroma) === "1";
      };
  }
  /** @deprecated use: isNoteIncludedIn */
  var includes = isNoteIncludedIn;
  /**
   * Filter a list with a pitch class set
   *
   * @param {Array|string} set - the pitch class set notes
   * @param {Array|string} notes - the note list to be filtered
   * @return {Array} the filtered notes
   *
   * @example
   * Pcset.filter(["C", "D", "E"], ["c2", "c#2", "d2", "c3", "c#3", "d3"]) // => [ "c2", "d2", "c3", "d3" ])
   * Pcset.filter(["C2"], ["c2", "c#2", "d2", "c3", "c#3", "d3"]) // => [ "c2", "c3" ])
   */
  function filter(set) {
      var isIncluded = isNoteIncludedIn(set);
      return function (notes) {
          return notes.filter(isIncluded);
      };
  }
  var index = {
      get: get,
      chroma: chroma,
      num: num,
      intervals: intervals,
      chromas: chromas,
      isSupersetOf: isSupersetOf,
      isSubsetOf: isSubsetOf,
      isNoteIncludedIn: isNoteIncludedIn,
      isEqual: isEqual,
      filter: filter,
      modes: modes,
      // deprecated
      pcset: pcset,
  };
  //// PRIVATE ////
  function chromaRotations(chroma) {
      var binary = chroma.split("");
      return binary.map(function (_, i) { return collection.rotate(i, binary).join(""); });
  }
  function chromaToPcset(chroma) {
      var setNum = chromaToNumber(chroma);
      var normalizedNum = chromaRotations(chroma)
          .map(chromaToNumber)
          .filter(function (n) { return n >= 2048; })
          .sort()[0];
      var normalized = setNumToChroma(normalizedNum);
      var intervals = chromaToIntervals(chroma);
      return {
          empty: false,
          name: "",
          setNum: setNum,
          chroma: chroma,
          normalized: normalized,
          intervals: intervals,
      };
  }
  function listToChroma(set) {
      if (set.length === 0) {
          return EmptyPcset.chroma;
      }
      var pitch;
      var binary = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      // tslint:disable-next-line:prefer-for-of
      for (var i = 0; i < set.length; i++) {
          pitch = core.note(set[i]);
          // tslint:disable-next-line: curly
          if (pitch.empty)
              pitch = core.interval(set[i]);
          // tslint:disable-next-line: curly
          if (!pitch.empty)
              binary[pitch.chroma] = 1;
      }
      return binary.join("");
  }

  exports.EmptyPcset = EmptyPcset;
  exports.chromaToIntervals = chromaToIntervals;
  exports.chromas = chromas;
  exports.default = index;
  exports.filter = filter;
  exports.get = get;
  exports.includes = includes;
  exports.isEqual = isEqual;
  exports.isNoteIncludedIn = isNoteIncludedIn;
  exports.isSubsetOf = isSubsetOf;
  exports.isSupersetOf = isSupersetOf;
  exports.modes = modes;
  exports.pcset = pcset;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


},{"@tonaljs/collection":10,"@tonaljs/core":11}],19:[function(require,module,exports){
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tonaljs/chord'), require('@tonaljs/core'), require('@tonaljs/roman-numeral')) :
  typeof define === 'function' && define.amd ? define(['exports', '@tonaljs/chord', '@tonaljs/core', '@tonaljs/roman-numeral'], factory) :
  (global = global || self, factory(global.Progression = {}, global.chord, global.core, global.romanNumeral));
}(this, (function (exports, chord, core, romanNumeral) { 'use strict';

  /**
   * Given a tonic and a chord list expressed with roman numeral notation
   * returns the progression expressed with leadsheet chords symbols notation
   * @example
   * fromRomanNumerals("C", ["I", "IIm7", "V7"]);
   * // => ["C", "Dm7", "G7"]
   */
  function fromRomanNumerals(tonic, chords) {
      var romanNumerals = chords.map(romanNumeral.get);
      return romanNumerals.map(function (rn) { return core.transpose(tonic, core.interval(rn)) + rn.chordType; });
  }
  /**
   * Given a tonic and a chord list with leadsheet symbols notation,
   * return the chord list with roman numeral notation
   * @example
   * toRomanNumerals("C", ["CMaj7", "Dm7", "G7"]);
   * // => ["IMaj7", "IIm7", "V7"]
   */
  function toRomanNumerals(tonic, chords) {
      return chords.map(function (chord$1) {
          var _a = chord.tokenize(chord$1), note = _a[0], chordType = _a[1];
          var intervalName = core.distance(tonic, note);
          var roman = romanNumeral.get(core.interval(intervalName));
          return roman.name + chordType;
      });
  }
  var index = { fromRomanNumerals: fromRomanNumerals, toRomanNumerals: toRomanNumerals };

  exports.default = index;
  exports.fromRomanNumerals = fromRomanNumerals;
  exports.toRomanNumerals = toRomanNumerals;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


},{"@tonaljs/chord":9,"@tonaljs/core":11,"@tonaljs/roman-numeral":21}],20:[function(require,module,exports){
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tonaljs/collection'), require('@tonaljs/midi')) :
  typeof define === 'function' && define.amd ? define(['exports', '@tonaljs/collection', '@tonaljs/midi'], factory) :
  (global = global || self, factory(global.Range = {}, global.collection, global.midi));
}(this, (function (exports, collection, midi) { 'use strict';

  /**
   * Create a numeric range. You supply a list of notes or numbers and it will
   * be connected to create complex ranges.
   *
   * @param {Array} array - the list of notes or numbers used
   * @return {Array} an array of numbers or empty array if not valid parameters
   *
   * @example
   * numeric(["C5", "C4"]) // => [ 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60 ]
   * // it works midi notes
   * numeric([10, 5]) // => [ 10, 9, 8, 7, 6, 5 ]
   * // complex range
   * numeric(["C4", "E4", "Bb3"]) // => [60, 61, 62, 63, 64, 63, 62, 61, 60, 59, 58]
   */
  function numeric(notes) {
      var midi$1 = collection.compact(notes.map(midi.toMidi));
      if (!notes.length || midi$1.length !== notes.length) {
          // there is no valid notes
          return [];
      }
      return midi$1.reduce(function (result, note) {
          var last = result[result.length - 1];
          return result.concat(collection.range(last, note).slice(1));
      }, [midi$1[0]]);
  }
  /**
   * Create a range of chromatic notes. The altered notes will use flats.
   *
   * @function
   * @param {String|Array} list - the list of notes or midi note numbers
   * @return {Array} an array of note names
   *
   * @example
   * Range.chromatic("C2 E2 D2") // => ["C2", "Db2", "D2", "Eb2", "E2", "Eb2", "D2"]
   * // with sharps
   * Range.chromatic("C2 C3", true) // => [ "C2", "C#2", "D2", "D#2", "E2", "F2", "F#2", "G2", "G#2", "A2", "A#2", "B2", "C3" ]
   */
  function chromatic(notes, options) {
      return numeric(notes).map(function (midi$1) { return midi.midiToNoteName(midi$1, options); });
  }
  var index = { numeric: numeric, chromatic: chromatic };

  exports.chromatic = chromatic;
  exports.default = index;
  exports.numeric = numeric;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


},{"@tonaljs/collection":10,"@tonaljs/midi":15}],21:[function(require,module,exports){
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tonaljs/core')) :
  typeof define === 'function' && define.amd ? define(['exports', '@tonaljs/core'], factory) :
  (global = global || self, factory(global.RomanNumeral = {}, global.core));
}(this, (function (exports, core) { 'use strict';

  var NoRomanNumeral = { empty: true, name: "", chordType: "" };
  var cache = {};
  /**
   * Get properties of a roman numeral string
   *
   * @function
   * @param {string} - the roman numeral string (can have type, like: Imaj7)
   * @return {Object} - the roman numeral properties
   * @param {string} name - the roman numeral (tonic)
   * @param {string} type - the chord type
   * @param {string} num - the number (1 = I, 2 = II...)
   * @param {boolean} major - major or not
   *
   * @example
   * romanNumeral("VIIb5") // => { name: "VII", type: "b5", num: 7, major: true }
   */
  function get(src) {
      return typeof src === "string"
          ? cache[src] || (cache[src] = parse(src))
          : typeof src === "number"
              ? get(NAMES[src] || "")
              : core.isPitch(src)
                  ? fromPitch(src)
                  : core.isNamed(src)
                      ? get(src.name)
                      : NoRomanNumeral;
  }
  var romanNumeral = core.deprecate("RomanNumeral.romanNumeral", "RomanNumeral.get", get);
  /**
   * Get roman numeral names
   *
   * @function
   * @param {boolean} [isMajor=true]
   * @return {Array<String>}
   *
   * @example
   * names() // => ["I", "II", "III", "IV", "V", "VI", "VII"]
   */
  function names(major) {
      if (major === void 0) { major = true; }
      return (major ? NAMES : NAMES_MINOR).slice();
  }
  function fromPitch(pitch) {
      return get(core.altToAcc(pitch.alt) + NAMES[pitch.step]);
  }
  var REGEX = /^(#{1,}|b{1,}|x{1,}|)(IV|I{1,3}|VI{0,2}|iv|i{1,3}|vi{0,2})([^IViv]*)$/;
  function tokenize(str) {
      return (REGEX.exec(str) || ["", "", "", ""]);
  }
  var ROMANS = "I II III IV V VI VII";
  var NAMES = ROMANS.split(" ");
  var NAMES_MINOR = ROMANS.toLowerCase().split(" ");
  function parse(src) {
      var _a = tokenize(src), name = _a[0], acc = _a[1], roman = _a[2], chordType = _a[3];
      if (!roman) {
          return NoRomanNumeral;
      }
      var upperRoman = roman.toUpperCase();
      var step = NAMES.indexOf(upperRoman);
      var alt = core.accToAlt(acc);
      var dir = 1;
      return {
          empty: false,
          name: name,
          roman: roman,
          interval: core.interval({ step: step, alt: alt, dir: dir }).name,
          acc: acc,
          chordType: chordType,
          alt: alt,
          step: step,
          major: roman === upperRoman,
          oct: 0,
          dir: dir,
      };
  }
  var index = {
      names: names,
      get: get,
      // deprecated
      romanNumeral: romanNumeral,
  };

  exports.default = index;
  exports.get = get;
  exports.names = names;
  exports.tokenize = tokenize;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


},{"@tonaljs/core":11}],22:[function(require,module,exports){
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tonaljs/core'), require('@tonaljs/pcset')) :
    typeof define === 'function' && define.amd ? define(['exports', '@tonaljs/core', '@tonaljs/pcset'], factory) :
    (global = global || self, factory(global.ScaleType = {}, global.core, global.pcset));
}(this, (function (exports, core, pcset) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    // SCALES
    // Format: ["intervals", "name", "alias1", "alias2", ...]
    var SCALES = [
        // 5-note scales
        ["1P 2M 3M 5P 6M", "major pentatonic", "pentatonic"],
        ["1P 3M 4P 5P 7M", "ionian pentatonic"],
        ["1P 3M 4P 5P 7m", "mixolydian pentatonic", "indian"],
        ["1P 2M 4P 5P 6M", "ritusen"],
        ["1P 2M 4P 5P 7m", "egyptian"],
        ["1P 3M 4P 5d 7m", "neopolitan major pentatonic"],
        ["1P 3m 4P 5P 6m", "vietnamese 1"],
        ["1P 2m 3m 5P 6m", "pelog"],
        ["1P 2m 4P 5P 6m", "kumoijoshi"],
        ["1P 2M 3m 5P 6m", "hirajoshi"],
        ["1P 2m 4P 5d 7m", "iwato"],
        ["1P 2m 4P 5P 7m", "in-sen"],
        ["1P 3M 4A 5P 7M", "lydian pentatonic", "chinese"],
        ["1P 3m 4P 6m 7m", "malkos raga"],
        ["1P 3m 4P 5d 7m", "locrian pentatonic", "minor seven flat five pentatonic"],
        ["1P 3m 4P 5P 7m", "minor pentatonic", "vietnamese 2"],
        ["1P 3m 4P 5P 6M", "minor six pentatonic"],
        ["1P 2M 3m 5P 6M", "flat three pentatonic", "kumoi"],
        ["1P 2M 3M 5P 6m", "flat six pentatonic"],
        ["1P 2m 3M 5P 6M", "scriabin"],
        ["1P 3M 5d 6m 7m", "whole tone pentatonic"],
        ["1P 3M 4A 5A 7M", "lydian #5P pentatonic"],
        ["1P 3M 4A 5P 7m", "lydian dominant pentatonic"],
        ["1P 3m 4P 5P 7M", "minor #7M pentatonic"],
        ["1P 3m 4d 5d 7m", "super locrian pentatonic"],
        // 6-note scales
        ["1P 2M 3m 4P 5P 7M", "minor hexatonic"],
        ["1P 2A 3M 5P 5A 7M", "augmented"],
        ["1P 2M 3m 3M 5P 6M", "major blues"],
        ["1P 2M 4P 5P 6M 7m", "piongio"],
        ["1P 2m 3M 4A 6M 7m", "prometheus neopolitan"],
        ["1P 2M 3M 4A 6M 7m", "prometheus"],
        ["1P 2m 3M 5d 6m 7m", "mystery #1"],
        ["1P 2m 3M 4P 5A 6M", "six tone symmetric"],
        ["1P 2M 3M 4A 5A 7m", "whole tone", "messiaen's mode #1"],
        ["1P 2m 4P 4A 5P 7M", "messiaen's mode #5"],
        ["1P 3m 4P 5d 5P 7m", "minor blues", "blues"],
        // 7-note scales
        ["1P 2M 3M 4P 5d 6m 7m", "locrian major", "arabian"],
        ["1P 2m 3M 4A 5P 6m 7M", "double harmonic lydian"],
        ["1P 2M 3m 4P 5P 6m 7M", "harmonic minor"],
        [
            "1P 2m 3m 3M 5d 6m 7m",
            "altered",
            "super locrian",
            "diminished whole tone",
            "pomeroy",
        ],
        ["1P 2M 3m 4P 5d 6m 7m", "locrian #2", "half-diminished", "aeolian b5"],
        [
            "1P 2M 3M 4P 5P 6m 7m",
            "mixolydian b6",
            "melodic minor fifth mode",
            "hindu",
        ],
        ["1P 2M 3M 4A 5P 6M 7m", "lydian dominant", "lydian b7", "overtone"],
        ["1P 2M 3M 4A 5P 6M 7M", "lydian"],
        ["1P 2M 3M 4A 5A 6M 7M", "lydian augmented"],
        [
            "1P 2m 3m 4P 5P 6M 7m",
            "dorian b2",
            "phrygian #6",
            "melodic minor second mode",
        ],
        ["1P 2M 3m 4P 5P 6M 7M", "melodic minor"],
        ["1P 2m 3m 4P 5d 6m 7m", "locrian"],
        [
            "1P 2m 3m 4d 5d 6m 7d",
            "ultralocrian",
            "superlocrian bb7",
            "·superlocrian diminished",
        ],
        ["1P 2m 3m 4P 5d 6M 7m", "locrian 6", "locrian natural 6", "locrian sharp 6"],
        ["1P 2A 3M 4P 5P 5A 7M", "augmented heptatonic"],
        ["1P 2M 3m 5d 5P 6M 7m", "romanian minor"],
        ["1P 2M 3m 4A 5P 6M 7m", "dorian #4"],
        ["1P 2M 3m 4A 5P 6M 7M", "lydian diminished"],
        ["1P 2m 3m 4P 5P 6m 7m", "phrygian"],
        ["1P 2M 3M 4A 5A 7m 7M", "leading whole tone"],
        ["1P 2M 3M 4A 5P 6m 7m", "lydian minor"],
        ["1P 2m 3M 4P 5P 6m 7m", "phrygian dominant", "spanish", "phrygian major"],
        ["1P 2m 3m 4P 5P 6m 7M", "balinese"],
        ["1P 2m 3m 4P 5P 6M 7M", "neopolitan major"],
        ["1P 2M 3m 4P 5P 6m 7m", "aeolian", "minor"],
        ["1P 2M 3M 4P 5P 6m 7M", "harmonic major"],
        ["1P 2m 3M 4P 5P 6m 7M", "double harmonic major", "gypsy"],
        ["1P 2M 3m 4P 5P 6M 7m", "dorian"],
        ["1P 2M 3m 4A 5P 6m 7M", "hungarian minor"],
        ["1P 2A 3M 4A 5P 6M 7m", "hungarian major"],
        ["1P 2m 3M 4P 5d 6M 7m", "oriental"],
        ["1P 2m 3m 3M 4A 5P 7m", "flamenco"],
        ["1P 2m 3m 4A 5P 6m 7M", "todi raga"],
        ["1P 2M 3M 4P 5P 6M 7m", "mixolydian", "dominant"],
        ["1P 2m 3M 4P 5d 6m 7M", "persian"],
        ["1P 2M 3M 4P 5P 6M 7M", "major", "ionian"],
        ["1P 2m 3M 5d 6m 7m 7M", "enigmatic"],
        [
            "1P 2M 3M 4P 5A 6M 7M",
            "major augmented",
            "major #5",
            "ionian augmented",
            "ionian #5",
        ],
        ["1P 2A 3M 4A 5P 6M 7M", "lydian #9"],
        // 8-note scales
        ["1P 2m 2M 4P 4A 5P 6m 7M", "messiaen's mode #4"],
        ["1P 2m 3M 4P 4A 5P 6m 7M", "purvi raga"],
        ["1P 2m 3m 3M 4P 5P 6m 7m", "spanish heptatonic"],
        ["1P 2M 3M 4P 5P 6M 7m 7M", "bebop"],
        ["1P 2M 3m 3M 4P 5P 6M 7m", "bebop minor"],
        ["1P 2M 3M 4P 5P 5A 6M 7M", "bebop major"],
        ["1P 2m 3m 4P 5d 5P 6m 7m", "bebop locrian"],
        ["1P 2M 3m 4P 5P 6m 7m 7M", "minor bebop"],
        ["1P 2M 3m 4P 5d 6m 6M 7M", "diminished", "whole-half diminished"],
        ["1P 2M 3M 4P 5d 5P 6M 7M", "ichikosucho"],
        ["1P 2M 3m 4P 5P 6m 6M 7M", "minor six diminished"],
        ["1P 2m 3m 3M 4A 5P 6M 7m", "half-whole diminished", "dominant diminished", "messiaen's mode #2"],
        ["1P 3m 3M 4P 5P 6M 7m 7M", "kafi raga"],
        ["1P 2M 3M 4P 4A 5A 6A 7M", "messiaen's mode #6"],
        // 9-note scales
        ["1P 2M 3m 3M 4P 5d 5P 6M 7m", "composite blues"],
        ["1P 2M 3m 3M 4A 5P 6m 7m 7M", "messiaen's mode #3"],
        // 10-note scales
        ["1P 2m 2M 3m 4P 4A 5P 6m 6M 7M", "messiaen's mode #7"],
        // 12-note scales
        ["1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M", "chromatic"],
    ];

    var NoScaleType = __assign(__assign({}, pcset.EmptyPcset), { intervals: [], aliases: [] });
    var dictionary = [];
    var index = {};
    function names() {
        return dictionary.map(function (scale) { return scale.name; });
    }
    /**
     * Given a scale name or chroma, return the scale properties
     *
     * @param {string} type - scale name or pitch class set chroma
     * @example
     * import { get } from 'tonaljs/scale-type'
     * get('major') // => { name: 'major', ... }
     */
    function get(type) {
        return index[type] || NoScaleType;
    }
    var scaleType = core.deprecate("ScaleDictionary.scaleType", "ScaleType.get", get);
    /**
     * Return a list of all scale types
     */
    function all() {
        return dictionary.slice();
    }
    var entries = core.deprecate("ScaleDictionary.entries", "ScaleType.all", all);
    /**
     * Keys used to reference scale types
     */
    function keys() {
        return Object.keys(index);
    }
    /**
     * Clear the dictionary
     */
    function removeAll() {
        dictionary = [];
        index = {};
    }
    /**
     * Add a scale into dictionary
     * @param intervals
     * @param name
     * @param aliases
     */
    function add(intervals, name, aliases) {
        if (aliases === void 0) { aliases = []; }
        var scale = __assign(__assign({}, pcset.get(intervals)), { name: name, intervals: intervals, aliases: aliases });
        dictionary.push(scale);
        index[scale.name] = scale;
        index[scale.setNum] = scale;
        index[scale.chroma] = scale;
        scale.aliases.forEach(function (alias) { return addAlias(scale, alias); });
        return scale;
    }
    function addAlias(scale, alias) {
        index[alias] = scale;
    }
    SCALES.forEach(function (_a) {
        var ivls = _a[0], name = _a[1], aliases = _a.slice(2);
        return add(ivls.split(" "), name, aliases);
    });
    var index$1 = {
        names: names,
        get: get,
        all: all,
        add: add,
        removeAll: removeAll,
        keys: keys,
        // deprecated
        entries: entries,
        scaleType: scaleType,
    };

    exports.NoScaleType = NoScaleType;
    exports.add = add;
    exports.addAlias = addAlias;
    exports.all = all;
    exports.default = index$1;
    exports.entries = entries;
    exports.get = get;
    exports.keys = keys;
    exports.names = names;
    exports.removeAll = removeAll;
    exports.scaleType = scaleType;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


},{"@tonaljs/core":11,"@tonaljs/pcset":18}],23:[function(require,module,exports){
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tonaljs/chord-type'), require('@tonaljs/collection'), require('@tonaljs/core'), require('@tonaljs/note'), require('@tonaljs/pcset'), require('@tonaljs/scale-type')) :
    typeof define === 'function' && define.amd ? define(['exports', '@tonaljs/chord-type', '@tonaljs/collection', '@tonaljs/core', '@tonaljs/note', '@tonaljs/pcset', '@tonaljs/scale-type'], factory) :
    (global = global || self, factory(global.Scale = {}, global.chordType, global.collection, global.core, global.note, global.pcset, global.scaleType));
}(this, (function (exports, chordType, collection, core, note, pcset, scaleType) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    var NoScale = {
        empty: true,
        name: "",
        type: "",
        tonic: null,
        setNum: NaN,
        chroma: "",
        normalized: "",
        aliases: [],
        notes: [],
        intervals: [],
    };
    /**
     * Given a string with a scale name and (optionally) a tonic, split
     * that components.
     *
     * It retuns an array with the form [ name, tonic ] where tonic can be a
     * note name or null and name can be any arbitrary string
     * (this function doesn"t check if that scale name exists)
     *
     * @function
     * @param {string} name - the scale name
     * @return {Array} an array [tonic, name]
     * @example
     * tokenize("C mixolydean") // => ["C", "mixolydean"]
     * tokenize("anything is valid") // => ["", "anything is valid"]
     * tokenize() // => ["", ""]
     */
    function tokenize(name) {
        if (typeof name !== "string") {
            return ["", ""];
        }
        var i = name.indexOf(" ");
        var tonic = core.note(name.substring(0, i));
        if (tonic.empty) {
            var n = core.note(name);
            return n.empty ? ["", name] : [n.name, ""];
        }
        var type = name.substring(tonic.name.length + 1);
        return [tonic.name, type.length ? type : ""];
    }
    /**
     * Get all scale names
     * @function
     */
    var names = scaleType.names;
    /**
     * Get a Scale from a scale name.
     */
    function get(src) {
        var tokens = Array.isArray(src) ? src : tokenize(src);
        var tonic = core.note(tokens[0]).name;
        var st = scaleType.get(tokens[1]);
        if (st.empty) {
            return NoScale;
        }
        var type = st.name;
        var notes = tonic
            ? st.intervals.map(function (i) { return core.transpose(tonic, i); })
            : [];
        var name = tonic ? tonic + " " + type : type;
        return __assign(__assign({}, st), { name: name, type: type, tonic: tonic, notes: notes });
    }
    var scale = core.deprecate("Scale.scale", "Scale.get", get);
    /**
     * Get all chords that fits a given scale
     *
     * @function
     * @param {string} name - the scale name
     * @return {Array<string>} - the chord names
     *
     * @example
     * scaleChords("pentatonic") // => ["5", "64", "M", "M6", "Madd9", "Msus2"]
     */
    function scaleChords(name) {
        var s = get(name);
        var inScale = pcset.isSubsetOf(s.chroma);
        return chordType.all()
            .filter(function (chord) { return inScale(chord.chroma); })
            .map(function (chord) { return chord.aliases[0]; });
    }
    /**
     * Get all scales names that are a superset of the given one
     * (has the same notes and at least one more)
     *
     * @function
     * @param {string} name
     * @return {Array} a list of scale names
     * @example
     * extended("major") // => ["bebop", "bebop dominant", "bebop major", "chromatic", "ichikosucho"]
     */
    function extended(name) {
        var s = get(name);
        var isSuperset = pcset.isSupersetOf(s.chroma);
        return scaleType.all()
            .filter(function (scale) { return isSuperset(scale.chroma); })
            .map(function (scale) { return scale.name; });
    }
    /**
     * Find all scales names that are a subset of the given one
     * (has less notes but all from the given scale)
     *
     * @function
     * @param {string} name
     * @return {Array} a list of scale names
     *
     * @example
     * reduced("major") // => ["ionian pentatonic", "major pentatonic", "ritusen"]
     */
    function reduced(name) {
        var isSubset = pcset.isSubsetOf(get(name).chroma);
        return scaleType.all()
            .filter(function (scale) { return isSubset(scale.chroma); })
            .map(function (scale) { return scale.name; });
    }
    /**
     * Given an array of notes, return the scale: a pitch class set starting from
     * the first note of the array
     *
     * @function
     * @param {string[]} notes
     * @return {string[]} pitch classes with same tonic
     * @example
     * scaleNotes(['C4', 'c3', 'C5', 'C4', 'c4']) // => ["C"]
     * scaleNotes(['D4', 'c#5', 'A5', 'F#6']) // => ["D", "F#", "A", "C#"]
     */
    function scaleNotes(notes) {
        var pcset = notes.map(function (n) { return core.note(n).pc; }).filter(function (x) { return x; });
        var tonic = pcset[0];
        var scale = note.sortedUniqNames(pcset);
        return collection.rotate(scale.indexOf(tonic), scale);
    }
    /**
     * Find mode names of a scale
     *
     * @function
     * @param {string} name - scale name
     * @example
     * modeNames("C pentatonic") // => [
     *   ["C", "major pentatonic"],
     *   ["D", "egyptian"],
     *   ["E", "malkos raga"],
     *   ["G", "ritusen"],
     *   ["A", "minor pentatonic"]
     * ]
     */
    function modeNames(name) {
        var s = get(name);
        if (s.empty) {
            return [];
        }
        var tonics = s.tonic ? s.notes : s.intervals;
        return pcset.modes(s.chroma)
            .map(function (chroma, i) {
            var modeName = get(chroma).name;
            return modeName ? [tonics[i], modeName] : ["", ""];
        })
            .filter(function (x) { return x[0]; });
    }
    var index = {
        get: get,
        names: names,
        extended: extended,
        modeNames: modeNames,
        reduced: reduced,
        scaleChords: scaleChords,
        scaleNotes: scaleNotes,
        tokenize: tokenize,
        // deprecated
        scale: scale,
    };

    exports.default = index;
    exports.extended = extended;
    exports.get = get;
    exports.modeNames = modeNames;
    exports.names = names;
    exports.reduced = reduced;
    exports.scale = scale;
    exports.scaleChords = scaleChords;
    exports.scaleNotes = scaleNotes;
    exports.tokenize = tokenize;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


},{"@tonaljs/chord-type":8,"@tonaljs/collection":10,"@tonaljs/core":11,"@tonaljs/note":17,"@tonaljs/pcset":18,"@tonaljs/scale-type":22}],24:[function(require,module,exports){
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.TimeSignature = {}));
}(this, (function (exports) { 'use strict';

  // CONSTANTS
  var NONE = {
      empty: true,
      name: "",
      upper: undefined,
      lower: undefined,
      type: undefined,
      additive: [],
  };
  var NAMES = ["4/4", "3/4", "2/4", "2/2", "12/8", "9/8", "6/8", "3/8"];
  // PUBLIC API
  function names() {
      return NAMES.slice();
  }
  var REGEX = /^(\d?\d(?:\+\d)*)\/(\d)$/;
  var CACHE = new Map();
  function get(literal) {
      var cached = CACHE.get(literal);
      if (cached) {
          return cached;
      }
      var ts = build(parse(literal));
      CACHE.set(literal, ts);
      return ts;
  }
  function parse(literal) {
      if (typeof literal === "string") {
          var _a = REGEX.exec(literal) || [], _ = _a[0], up_1 = _a[1], low = _a[2];
          return parse([up_1, low]);
      }
      var up = literal[0], down = literal[1];
      var denominator = +down;
      if (typeof up === "number") {
          return [up, denominator];
      }
      var list = up.split("+").map(function (n) { return +n; });
      return list.length === 1 ? [list[0], denominator] : [list, denominator];
  }
  var index = { names: names, parse: parse, get: get };
  // PRIVATE
  function build(_a) {
      var up = _a[0], down = _a[1];
      var upper = Array.isArray(up) ? up.reduce(function (a, b) { return a + b; }, 0) : up;
      var lower = down;
      if (upper === 0 || lower === 0) {
          return NONE;
      }
      var name = Array.isArray(up) ? up.join("+") + "/" + down : up + "/" + down;
      var additive = Array.isArray(up) ? up : [];
      var type = lower === 4 || lower === 2
          ? "simple"
          : lower === 8 && upper % 3 === 0
              ? "compound"
              : "irregular";
      return {
          empty: false,
          name: name,
          type: type,
          upper: upper,
          lower: lower,
          additive: additive,
      };
  }

  exports.default = index;
  exports.get = get;
  exports.names = names;
  exports.parse = parse;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


},{}],25:[function(require,module,exports){
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tonaljs/abc-notation'), require('@tonaljs/array'), require('@tonaljs/chord'), require('@tonaljs/chord-type'), require('@tonaljs/collection'), require('@tonaljs/core'), require('@tonaljs/duration-value'), require('@tonaljs/interval'), require('@tonaljs/key'), require('@tonaljs/midi'), require('@tonaljs/mode'), require('@tonaljs/note'), require('@tonaljs/pcset'), require('@tonaljs/progression'), require('@tonaljs/range'), require('@tonaljs/roman-numeral'), require('@tonaljs/scale'), require('@tonaljs/scale-type'), require('@tonaljs/time-signature')) :
  typeof define === 'function' && define.amd ? define(['exports', '@tonaljs/abc-notation', '@tonaljs/array', '@tonaljs/chord', '@tonaljs/chord-type', '@tonaljs/collection', '@tonaljs/core', '@tonaljs/duration-value', '@tonaljs/interval', '@tonaljs/key', '@tonaljs/midi', '@tonaljs/mode', '@tonaljs/note', '@tonaljs/pcset', '@tonaljs/progression', '@tonaljs/range', '@tonaljs/roman-numeral', '@tonaljs/scale', '@tonaljs/scale-type', '@tonaljs/time-signature'], factory) :
  (global = global || self, factory(global.Tonal = {}, global.abcNotation, global.array, global.chord, global.ChordType, global.collection, global.Core, global.durationValue, global.interval, global.key, global.midi, global.mode, global.note, global.Pcset, global.progression, global.range, global.romanNumeral, global.scale, global.ScaleType, global.timeSignature));
}(this, (function (exports, abcNotation, array, chord, ChordType, collection, Core, durationValue, interval, key, midi, mode, note, Pcset, progression, range, romanNumeral, scale, ScaleType, timeSignature) { 'use strict';

  abcNotation = abcNotation && Object.prototype.hasOwnProperty.call(abcNotation, 'default') ? abcNotation['default'] : abcNotation;
  chord = chord && Object.prototype.hasOwnProperty.call(chord, 'default') ? chord['default'] : chord;
  ChordType = ChordType && Object.prototype.hasOwnProperty.call(ChordType, 'default') ? ChordType['default'] : ChordType;
  collection = collection && Object.prototype.hasOwnProperty.call(collection, 'default') ? collection['default'] : collection;
  durationValue = durationValue && Object.prototype.hasOwnProperty.call(durationValue, 'default') ? durationValue['default'] : durationValue;
  interval = interval && Object.prototype.hasOwnProperty.call(interval, 'default') ? interval['default'] : interval;
  key = key && Object.prototype.hasOwnProperty.call(key, 'default') ? key['default'] : key;
  midi = midi && Object.prototype.hasOwnProperty.call(midi, 'default') ? midi['default'] : midi;
  mode = mode && Object.prototype.hasOwnProperty.call(mode, 'default') ? mode['default'] : mode;
  note = note && Object.prototype.hasOwnProperty.call(note, 'default') ? note['default'] : note;
  Pcset = Pcset && Object.prototype.hasOwnProperty.call(Pcset, 'default') ? Pcset['default'] : Pcset;
  progression = progression && Object.prototype.hasOwnProperty.call(progression, 'default') ? progression['default'] : progression;
  range = range && Object.prototype.hasOwnProperty.call(range, 'default') ? range['default'] : range;
  romanNumeral = romanNumeral && Object.prototype.hasOwnProperty.call(romanNumeral, 'default') ? romanNumeral['default'] : romanNumeral;
  scale = scale && Object.prototype.hasOwnProperty.call(scale, 'default') ? scale['default'] : scale;
  ScaleType = ScaleType && Object.prototype.hasOwnProperty.call(ScaleType, 'default') ? ScaleType['default'] : ScaleType;
  timeSignature = timeSignature && Object.prototype.hasOwnProperty.call(timeSignature, 'default') ? timeSignature['default'] : timeSignature;

  // deprecated (backwards compatibility)
  var Tonal = Core;
  var PcSet = Pcset;
  var ChordDictionary = ChordType;
  var ScaleDictionary = ScaleType;

  Object.keys(Core).forEach(function (k) {
    if (k !== 'default') Object.defineProperty(exports, k, {
      enumerable: true,
      get: function () {
        return Core[k];
      }
    });
  });
  exports.AbcNotation = abcNotation;
  exports.Array = array;
  exports.Chord = chord;
  exports.ChordType = ChordType;
  exports.Collection = collection;
  exports.Core = Core;
  exports.DurationValue = durationValue;
  exports.Interval = interval;
  exports.Key = key;
  exports.Midi = midi;
  exports.Mode = mode;
  exports.Note = note;
  exports.Pcset = Pcset;
  exports.Progression = progression;
  exports.Range = range;
  exports.RomanNumeral = romanNumeral;
  exports.Scale = scale;
  exports.ScaleType = ScaleType;
  exports.TimeSignature = timeSignature;
  exports.ChordDictionary = ChordDictionary;
  exports.PcSet = PcSet;
  exports.ScaleDictionary = ScaleDictionary;
  exports.Tonal = Tonal;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


},{"@tonaljs/abc-notation":5,"@tonaljs/array":6,"@tonaljs/chord":9,"@tonaljs/chord-type":8,"@tonaljs/collection":10,"@tonaljs/core":11,"@tonaljs/duration-value":12,"@tonaljs/interval":13,"@tonaljs/key":14,"@tonaljs/midi":15,"@tonaljs/mode":16,"@tonaljs/note":17,"@tonaljs/pcset":18,"@tonaljs/progression":19,"@tonaljs/range":20,"@tonaljs/roman-numeral":21,"@tonaljs/scale":23,"@tonaljs/scale-type":22,"@tonaljs/time-signature":24}],26:[function(require,module,exports){
"use strict";

(function (exports) {

    // control sequences for coloring

    exports.black = "\x1b[30m"
    exports.red = "\x1b[31m"
    exports.green = "\x1b[32m"
    exports.yellow = "\x1b[33m"
    exports.blue = "\x1b[34m"
    exports.magenta = "\x1b[35m"
    exports.cyan = "\x1b[36m"
    exports.lightgray = "\x1b[37m"
    exports.default = "\x1b[39m"
    exports.darkgray = "\x1b[90m"
    exports.lightred = "\x1b[91m"
    exports.lightgreen = "\x1b[92m"
    exports.lightyellow = "\x1b[93m"
    exports.lightblue = "\x1b[94m"
    exports.lightmagenta = "\x1b[95m"
    exports.lightcyan = "\x1b[96m"
    exports.white = "\x1b[97m"
    exports.reset = "\x1b[0m"

    function colored (char, color) {
        // do not color it if color is not specified
        return (color === undefined) ? char : (color + char + exports.reset)
    }

    exports.colored = colored

    exports.plot = function (series, cfg = undefined) {
        // this function takes oth one array and array of arrays
        // if an array of numbers is passed it is transfored to
        // an array of exactly one array with numbers
        if (typeof(series[0]) == "number"){
            series = [series]
        }

        cfg = (typeof cfg !== 'undefined') ? cfg : {}

        let min = (typeof cfg.min !== 'undefined') ? cfg.min : series[0][0]
        let max = (typeof cfg.max !== 'undefined') ? cfg.max : series[0][0]

        for (let j = 0; j < series.length; j++) {
            for (let i = 0; i < series[j].length; i++) {
                min = Math.min(min, series[j][i])
                max = Math.max(max, series[j][i])
            }
        }

        let defaultSymbols = [ '┼', '┤', '╶', '╴', '─', '╰', '╭', '╮', '╯', '│' ]
        let range   = Math.abs (max - min)
        let offset  = (typeof cfg.offset  !== 'undefined') ? cfg.offset  : 3
        let padding = (typeof cfg.padding !== 'undefined') ? cfg.padding : '           '
        let height  = (typeof cfg.height  !== 'undefined') ? cfg.height  : range
        let colors  = (typeof cfg.colors !== 'undefined') ? cfg.colors : []
        let ratio   = range !== 0 ? height / range : 1;
        let min2    = Math.round (min * ratio)
        let max2    = Math.round (max * ratio)
        let rows    = Math.abs (max2 - min2)
        let width = 0
        for (let i = 0; i < series.length; i++) {
            width = Math.max(width, series[i].length)
        }
        width = width + offset
        let symbols = (typeof cfg.symbols !== 'undefined') ? cfg.symbols : defaultSymbols
        let format  = (typeof cfg.format !== 'undefined') ? cfg.format : function (x) {
            return (padding + x.toFixed (2)).slice (-padding.length)
        }

        let result = new Array (rows + 1) // empty space
        for (let i = 0; i <= rows; i++) {
            result[i] = new Array (width)
            for (let j = 0; j < width; j++) {
                result[i][j] = ' '
            }
        }
        for (let y = min2; y <= max2; ++y) { // axis + labels
            let label = format (rows > 0 ? max - (y - min2) * range / rows : y, y - min2)
            result[y - min2][Math.max (offset - label.length, 0)] = label
            result[y - min2][offset - 1] = (y == 0) ? symbols[0] : symbols[1]
        }

        for (let j = 0; j < series.length; j++) {
            let currentColor = colors[j % colors.length]
            let y0 = Math.round (series[j][0] * ratio) - min2
            result[rows - y0][offset - 1] = colored(symbols[0], currentColor) // first value

            for (let x = 0; x < series[j].length - 1; x++) { // plot the line
                let y0 = Math.round (series[j][x + 0] * ratio) - min2
                let y1 = Math.round (series[j][x + 1] * ratio) - min2
                if (y0 == y1) {
                    result[rows - y0][x + offset] = colored(symbols[4], currentColor)
                } else {
                    result[rows - y1][x + offset] = colored((y0 > y1) ? symbols[5] : symbols[6], currentColor)
                    result[rows - y0][x + offset] = colored((y0 > y1) ? symbols[7] : symbols[8], currentColor)
                    let from = Math.min (y0, y1)
                    let to = Math.max (y0, y1)
                    for (let y = from + 1; y < to; y++) {
                        result[rows - y][x + offset] = colored(symbols[9], currentColor)
                    }
                }
            }
        }
        return result.map (function (x) { return x.join ('') }).join ('\n')
    }

}) (typeof exports === 'undefined' ? /* istanbul ignore next */ this['asciichart'] = {} : exports);

},{}],27:[function(require,module,exports){
;(function (globalObject) {
  'use strict';

/*
 *      bignumber.js v9.0.0
 *      A JavaScript library for arbitrary-precision arithmetic.
 *      https://github.com/MikeMcl/bignumber.js
 *      Copyright (c) 2019 Michael Mclaughlin <M8ch88l@gmail.com>
 *      MIT Licensed.
 *
 *      BigNumber.prototype methods     |  BigNumber methods
 *                                      |
 *      absoluteValue            abs    |  clone
 *      comparedTo                      |  config               set
 *      decimalPlaces            dp     |      DECIMAL_PLACES
 *      dividedBy                div    |      ROUNDING_MODE
 *      dividedToIntegerBy       idiv   |      EXPONENTIAL_AT
 *      exponentiatedBy          pow    |      RANGE
 *      integerValue                    |      CRYPTO
 *      isEqualTo                eq     |      MODULO_MODE
 *      isFinite                        |      POW_PRECISION
 *      isGreaterThan            gt     |      FORMAT
 *      isGreaterThanOrEqualTo   gte    |      ALPHABET
 *      isInteger                       |  isBigNumber
 *      isLessThan               lt     |  maximum              max
 *      isLessThanOrEqualTo      lte    |  minimum              min
 *      isNaN                           |  random
 *      isNegative                      |  sum
 *      isPositive                      |
 *      isZero                          |
 *      minus                           |
 *      modulo                   mod    |
 *      multipliedBy             times  |
 *      negated                         |
 *      plus                            |
 *      precision                sd     |
 *      shiftedBy                       |
 *      squareRoot               sqrt   |
 *      toExponential                   |
 *      toFixed                         |
 *      toFormat                        |
 *      toFraction                      |
 *      toJSON                          |
 *      toNumber                        |
 *      toPrecision                     |
 *      toString                        |
 *      valueOf                         |
 *
 */


  var BigNumber,
    isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
    mathceil = Math.ceil,
    mathfloor = Math.floor,

    bignumberError = '[BigNumber Error] ',
    tooManyDigits = bignumberError + 'Number primitive has more than 15 significant digits: ',

    BASE = 1e14,
    LOG_BASE = 14,
    MAX_SAFE_INTEGER = 0x1fffffffffffff,         // 2^53 - 1
    // MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
    POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
    SQRT_BASE = 1e7,

    // EDITABLE
    // The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
    // the arguments to toExponential, toFixed, toFormat, and toPrecision.
    MAX = 1E9;                                   // 0 to MAX_INT32


  /*
   * Create and return a BigNumber constructor.
   */
  function clone(configObject) {
    var div, convertBase, parseNumeric,
      P = BigNumber.prototype = { constructor: BigNumber, toString: null, valueOf: null },
      ONE = new BigNumber(1),


      //----------------------------- EDITABLE CONFIG DEFAULTS -------------------------------


      // The default values below must be integers within the inclusive ranges stated.
      // The values can also be changed at run-time using BigNumber.set.

      // The maximum number of decimal places for operations involving division.
      DECIMAL_PLACES = 20,                     // 0 to MAX

      // The rounding mode used when rounding to the above decimal places, and when using
      // toExponential, toFixed, toFormat and toPrecision, and round (default value).
      // UP         0 Away from zero.
      // DOWN       1 Towards zero.
      // CEIL       2 Towards +Infinity.
      // FLOOR      3 Towards -Infinity.
      // HALF_UP    4 Towards nearest neighbour. If equidistant, up.
      // HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
      // HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
      // HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
      // HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
      ROUNDING_MODE = 4,                       // 0 to 8

      // EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]

      // The exponent value at and beneath which toString returns exponential notation.
      // Number type: -7
      TO_EXP_NEG = -7,                         // 0 to -MAX

      // The exponent value at and above which toString returns exponential notation.
      // Number type: 21
      TO_EXP_POS = 21,                         // 0 to MAX

      // RANGE : [MIN_EXP, MAX_EXP]

      // The minimum exponent value, beneath which underflow to zero occurs.
      // Number type: -324  (5e-324)
      MIN_EXP = -1e7,                          // -1 to -MAX

      // The maximum exponent value, above which overflow to Infinity occurs.
      // Number type:  308  (1.7976931348623157e+308)
      // For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
      MAX_EXP = 1e7,                           // 1 to MAX

      // Whether to use cryptographically-secure random number generation, if available.
      CRYPTO = false,                          // true or false

      // The modulo mode used when calculating the modulus: a mod n.
      // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
      // The remainder (r) is calculated as: r = a - n * q.
      //
      // UP        0 The remainder is positive if the dividend is negative, else is negative.
      // DOWN      1 The remainder has the same sign as the dividend.
      //             This modulo mode is commonly known as 'truncated division' and is
      //             equivalent to (a % n) in JavaScript.
      // FLOOR     3 The remainder has the same sign as the divisor (Python %).
      // HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
      // EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
      //             The remainder is always positive.
      //
      // The truncated division, floored division, Euclidian division and IEEE 754 remainder
      // modes are commonly used for the modulus operation.
      // Although the other rounding modes can also be used, they may not give useful results.
      MODULO_MODE = 1,                         // 0 to 9

      // The maximum number of significant digits of the result of the exponentiatedBy operation.
      // If POW_PRECISION is 0, there will be unlimited significant digits.
      POW_PRECISION = 0,                    // 0 to MAX

      // The format specification used by the BigNumber.prototype.toFormat method.
      FORMAT = {
        prefix: '',
        groupSize: 3,
        secondaryGroupSize: 0,
        groupSeparator: ',',
        decimalSeparator: '.',
        fractionGroupSize: 0,
        fractionGroupSeparator: '\xA0',      // non-breaking space
        suffix: ''
      },

      // The alphabet used for base conversion. It must be at least 2 characters long, with no '+',
      // '-', '.', whitespace, or repeated character.
      // '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_'
      ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyz';


    //------------------------------------------------------------------------------------------


    // CONSTRUCTOR


    /*
     * The BigNumber constructor and exported function.
     * Create and return a new instance of a BigNumber object.
     *
     * v {number|string|BigNumber} A numeric value.
     * [b] {number} The base of v. Integer, 2 to ALPHABET.length inclusive.
     */
    function BigNumber(v, b) {
      var alphabet, c, caseChanged, e, i, isNum, len, str,
        x = this;

      // Enable constructor call without `new`.
      if (!(x instanceof BigNumber)) return new BigNumber(v, b);

      if (b == null) {

        if (v && v._isBigNumber === true) {
          x.s = v.s;

          if (!v.c || v.e > MAX_EXP) {
            x.c = x.e = null;
          } else if (v.e < MIN_EXP) {
            x.c = [x.e = 0];
          } else {
            x.e = v.e;
            x.c = v.c.slice();
          }

          return;
        }

        if ((isNum = typeof v == 'number') && v * 0 == 0) {

          // Use `1 / n` to handle minus zero also.
          x.s = 1 / v < 0 ? (v = -v, -1) : 1;

          // Fast path for integers, where n < 2147483648 (2**31).
          if (v === ~~v) {
            for (e = 0, i = v; i >= 10; i /= 10, e++);

            if (e > MAX_EXP) {
              x.c = x.e = null;
            } else {
              x.e = e;
              x.c = [v];
            }

            return;
          }

          str = String(v);
        } else {

          if (!isNumeric.test(str = String(v))) return parseNumeric(x, str, isNum);

          x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
        }

        // Decimal point?
        if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');

        // Exponential form?
        if ((i = str.search(/e/i)) > 0) {

          // Determine exponent.
          if (e < 0) e = i;
          e += +str.slice(i + 1);
          str = str.substring(0, i);
        } else if (e < 0) {

          // Integer.
          e = str.length;
        }

      } else {

        // '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
        intCheck(b, 2, ALPHABET.length, 'Base');

        // Allow exponential notation to be used with base 10 argument, while
        // also rounding to DECIMAL_PLACES as with other bases.
        if (b == 10) {
          x = new BigNumber(v);
          return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
        }

        str = String(v);

        if (isNum = typeof v == 'number') {

          // Avoid potential interpretation of Infinity and NaN as base 44+ values.
          if (v * 0 != 0) return parseNumeric(x, str, isNum, b);

          x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;

          // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
          if (BigNumber.DEBUG && str.replace(/^0\.0*|\./, '').length > 15) {
            throw Error
             (tooManyDigits + v);
          }
        } else {
          x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
        }

        alphabet = ALPHABET.slice(0, b);
        e = i = 0;

        // Check that str is a valid base b number.
        // Don't use RegExp, so alphabet can contain special characters.
        for (len = str.length; i < len; i++) {
          if (alphabet.indexOf(c = str.charAt(i)) < 0) {
            if (c == '.') {

              // If '.' is not the first character and it has not be found before.
              if (i > e) {
                e = len;
                continue;
              }
            } else if (!caseChanged) {

              // Allow e.g. hexadecimal 'FF' as well as 'ff'.
              if (str == str.toUpperCase() && (str = str.toLowerCase()) ||
                  str == str.toLowerCase() && (str = str.toUpperCase())) {
                caseChanged = true;
                i = -1;
                e = 0;
                continue;
              }
            }

            return parseNumeric(x, String(v), isNum, b);
          }
        }

        // Prevent later check for length on converted number.
        isNum = false;
        str = convertBase(str, b, 10, x.s);

        // Decimal point?
        if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');
        else e = str.length;
      }

      // Determine leading zeros.
      for (i = 0; str.charCodeAt(i) === 48; i++);

      // Determine trailing zeros.
      for (len = str.length; str.charCodeAt(--len) === 48;);

      if (str = str.slice(i, ++len)) {
        len -= i;

        // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
        if (isNum && BigNumber.DEBUG &&
          len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
            throw Error
             (tooManyDigits + (x.s * v));
        }

         // Overflow?
        if ((e = e - i - 1) > MAX_EXP) {

          // Infinity.
          x.c = x.e = null;

        // Underflow?
        } else if (e < MIN_EXP) {

          // Zero.
          x.c = [x.e = 0];
        } else {
          x.e = e;
          x.c = [];

          // Transform base

          // e is the base 10 exponent.
          // i is where to slice str to get the first element of the coefficient array.
          i = (e + 1) % LOG_BASE;
          if (e < 0) i += LOG_BASE;  // i < 1

          if (i < len) {
            if (i) x.c.push(+str.slice(0, i));

            for (len -= LOG_BASE; i < len;) {
              x.c.push(+str.slice(i, i += LOG_BASE));
            }

            i = LOG_BASE - (str = str.slice(i)).length;
          } else {
            i -= len;
          }

          for (; i--; str += '0');
          x.c.push(+str);
        }
      } else {

        // Zero.
        x.c = [x.e = 0];
      }
    }


    // CONSTRUCTOR PROPERTIES


    BigNumber.clone = clone;

    BigNumber.ROUND_UP = 0;
    BigNumber.ROUND_DOWN = 1;
    BigNumber.ROUND_CEIL = 2;
    BigNumber.ROUND_FLOOR = 3;
    BigNumber.ROUND_HALF_UP = 4;
    BigNumber.ROUND_HALF_DOWN = 5;
    BigNumber.ROUND_HALF_EVEN = 6;
    BigNumber.ROUND_HALF_CEIL = 7;
    BigNumber.ROUND_HALF_FLOOR = 8;
    BigNumber.EUCLID = 9;


    /*
     * Configure infrequently-changing library-wide settings.
     *
     * Accept an object with the following optional properties (if the value of a property is
     * a number, it must be an integer within the inclusive range stated):
     *
     *   DECIMAL_PLACES   {number}           0 to MAX
     *   ROUNDING_MODE    {number}           0 to 8
     *   EXPONENTIAL_AT   {number|number[]}  -MAX to MAX  or  [-MAX to 0, 0 to MAX]
     *   RANGE            {number|number[]}  -MAX to MAX (not zero)  or  [-MAX to -1, 1 to MAX]
     *   CRYPTO           {boolean}          true or false
     *   MODULO_MODE      {number}           0 to 9
     *   POW_PRECISION       {number}           0 to MAX
     *   ALPHABET         {string}           A string of two or more unique characters which does
     *                                       not contain '.'.
     *   FORMAT           {object}           An object with some of the following properties:
     *     prefix                 {string}
     *     groupSize              {number}
     *     secondaryGroupSize     {number}
     *     groupSeparator         {string}
     *     decimalSeparator       {string}
     *     fractionGroupSize      {number}
     *     fractionGroupSeparator {string}
     *     suffix                 {string}
     *
     * (The values assigned to the above FORMAT object properties are not checked for validity.)
     *
     * E.g.
     * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
     *
     * Ignore properties/parameters set to null or undefined, except for ALPHABET.
     *
     * Return an object with the properties current values.
     */
    BigNumber.config = BigNumber.set = function (obj) {
      var p, v;

      if (obj != null) {

        if (typeof obj == 'object') {

          // DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
          // '[BigNumber Error] DECIMAL_PLACES {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'DECIMAL_PLACES')) {
            v = obj[p];
            intCheck(v, 0, MAX, p);
            DECIMAL_PLACES = v;
          }

          // ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
          // '[BigNumber Error] ROUNDING_MODE {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'ROUNDING_MODE')) {
            v = obj[p];
            intCheck(v, 0, 8, p);
            ROUNDING_MODE = v;
          }

          // EXPONENTIAL_AT {number|number[]}
          // Integer, -MAX to MAX inclusive or
          // [integer -MAX to 0 inclusive, 0 to MAX inclusive].
          // '[BigNumber Error] EXPONENTIAL_AT {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'EXPONENTIAL_AT')) {
            v = obj[p];
            if (v && v.pop) {
              intCheck(v[0], -MAX, 0, p);
              intCheck(v[1], 0, MAX, p);
              TO_EXP_NEG = v[0];
              TO_EXP_POS = v[1];
            } else {
              intCheck(v, -MAX, MAX, p);
              TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
            }
          }

          // RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
          // [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
          // '[BigNumber Error] RANGE {not a primitive number|not an integer|out of range|cannot be zero}: {v}'
          if (obj.hasOwnProperty(p = 'RANGE')) {
            v = obj[p];
            if (v && v.pop) {
              intCheck(v[0], -MAX, -1, p);
              intCheck(v[1], 1, MAX, p);
              MIN_EXP = v[0];
              MAX_EXP = v[1];
            } else {
              intCheck(v, -MAX, MAX, p);
              if (v) {
                MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
              } else {
                throw Error
                 (bignumberError + p + ' cannot be zero: ' + v);
              }
            }
          }

          // CRYPTO {boolean} true or false.
          // '[BigNumber Error] CRYPTO not true or false: {v}'
          // '[BigNumber Error] crypto unavailable'
          if (obj.hasOwnProperty(p = 'CRYPTO')) {
            v = obj[p];
            if (v === !!v) {
              if (v) {
                if (typeof crypto != 'undefined' && crypto &&
                 (crypto.getRandomValues || crypto.randomBytes)) {
                  CRYPTO = v;
                } else {
                  CRYPTO = !v;
                  throw Error
                   (bignumberError + 'crypto unavailable');
                }
              } else {
                CRYPTO = v;
              }
            } else {
              throw Error
               (bignumberError + p + ' not true or false: ' + v);
            }
          }

          // MODULO_MODE {number} Integer, 0 to 9 inclusive.
          // '[BigNumber Error] MODULO_MODE {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'MODULO_MODE')) {
            v = obj[p];
            intCheck(v, 0, 9, p);
            MODULO_MODE = v;
          }

          // POW_PRECISION {number} Integer, 0 to MAX inclusive.
          // '[BigNumber Error] POW_PRECISION {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'POW_PRECISION')) {
            v = obj[p];
            intCheck(v, 0, MAX, p);
            POW_PRECISION = v;
          }

          // FORMAT {object}
          // '[BigNumber Error] FORMAT not an object: {v}'
          if (obj.hasOwnProperty(p = 'FORMAT')) {
            v = obj[p];
            if (typeof v == 'object') FORMAT = v;
            else throw Error
             (bignumberError + p + ' not an object: ' + v);
          }

          // ALPHABET {string}
          // '[BigNumber Error] ALPHABET invalid: {v}'
          if (obj.hasOwnProperty(p = 'ALPHABET')) {
            v = obj[p];

            // Disallow if only one character,
            // or if it contains '+', '-', '.', whitespace, or a repeated character.
            if (typeof v == 'string' && !/^.$|[+-.\s]|(.).*\1/.test(v)) {
              ALPHABET = v;
            } else {
              throw Error
               (bignumberError + p + ' invalid: ' + v);
            }
          }

        } else {

          // '[BigNumber Error] Object expected: {v}'
          throw Error
           (bignumberError + 'Object expected: ' + obj);
        }
      }

      return {
        DECIMAL_PLACES: DECIMAL_PLACES,
        ROUNDING_MODE: ROUNDING_MODE,
        EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
        RANGE: [MIN_EXP, MAX_EXP],
        CRYPTO: CRYPTO,
        MODULO_MODE: MODULO_MODE,
        POW_PRECISION: POW_PRECISION,
        FORMAT: FORMAT,
        ALPHABET: ALPHABET
      };
    };


    /*
     * Return true if v is a BigNumber instance, otherwise return false.
     *
     * If BigNumber.DEBUG is true, throw if a BigNumber instance is not well-formed.
     *
     * v {any}
     *
     * '[BigNumber Error] Invalid BigNumber: {v}'
     */
    BigNumber.isBigNumber = function (v) {
      if (!v || v._isBigNumber !== true) return false;
      if (!BigNumber.DEBUG) return true;

      var i, n,
        c = v.c,
        e = v.e,
        s = v.s;

      out: if ({}.toString.call(c) == '[object Array]') {

        if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {

          // If the first element is zero, the BigNumber value must be zero.
          if (c[0] === 0) {
            if (e === 0 && c.length === 1) return true;
            break out;
          }

          // Calculate number of digits that c[0] should have, based on the exponent.
          i = (e + 1) % LOG_BASE;
          if (i < 1) i += LOG_BASE;

          // Calculate number of digits of c[0].
          //if (Math.ceil(Math.log(c[0] + 1) / Math.LN10) == i) {
          if (String(c[0]).length == i) {

            for (i = 0; i < c.length; i++) {
              n = c[i];
              if (n < 0 || n >= BASE || n !== mathfloor(n)) break out;
            }

            // Last element cannot be zero, unless it is the only element.
            if (n !== 0) return true;
          }
        }

      // Infinity/NaN
      } else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
        return true;
      }

      throw Error
        (bignumberError + 'Invalid BigNumber: ' + v);
    };


    /*
     * Return a new BigNumber whose value is the maximum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */
    BigNumber.maximum = BigNumber.max = function () {
      return maxOrMin(arguments, P.lt);
    };


    /*
     * Return a new BigNumber whose value is the minimum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */
    BigNumber.minimum = BigNumber.min = function () {
      return maxOrMin(arguments, P.gt);
    };


    /*
     * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
     * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
     * zeros are produced).
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp}'
     * '[BigNumber Error] crypto unavailable'
     */
    BigNumber.random = (function () {
      var pow2_53 = 0x20000000000000;

      // Return a 53 bit integer n, where 0 <= n < 9007199254740992.
      // Check if Math.random() produces more than 32 bits of randomness.
      // If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
      // 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.
      var random53bitInt = (Math.random() * pow2_53) & 0x1fffff
       ? function () { return mathfloor(Math.random() * pow2_53); }
       : function () { return ((Math.random() * 0x40000000 | 0) * 0x800000) +
         (Math.random() * 0x800000 | 0); };

      return function (dp) {
        var a, b, e, k, v,
          i = 0,
          c = [],
          rand = new BigNumber(ONE);

        if (dp == null) dp = DECIMAL_PLACES;
        else intCheck(dp, 0, MAX);

        k = mathceil(dp / LOG_BASE);

        if (CRYPTO) {

          // Browsers supporting crypto.getRandomValues.
          if (crypto.getRandomValues) {

            a = crypto.getRandomValues(new Uint32Array(k *= 2));

            for (; i < k;) {

              // 53 bits:
              // ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
              // 11111 11111111 11111111 11111111 11100000 00000000 00000000
              // ((Math.pow(2, 32) - 1) >>> 11).toString(2)
              //                                     11111 11111111 11111111
              // 0x20000 is 2^21.
              v = a[i] * 0x20000 + (a[i + 1] >>> 11);

              // Rejection sampling:
              // 0 <= v < 9007199254740992
              // Probability that v >= 9e15, is
              // 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
              if (v >= 9e15) {
                b = crypto.getRandomValues(new Uint32Array(2));
                a[i] = b[0];
                a[i + 1] = b[1];
              } else {

                // 0 <= v <= 8999999999999999
                // 0 <= (v % 1e14) <= 99999999999999
                c.push(v % 1e14);
                i += 2;
              }
            }
            i = k / 2;

          // Node.js supporting crypto.randomBytes.
          } else if (crypto.randomBytes) {

            // buffer
            a = crypto.randomBytes(k *= 7);

            for (; i < k;) {

              // 0x1000000000000 is 2^48, 0x10000000000 is 2^40
              // 0x100000000 is 2^32, 0x1000000 is 2^24
              // 11111 11111111 11111111 11111111 11111111 11111111 11111111
              // 0 <= v < 9007199254740992
              v = ((a[i] & 31) * 0x1000000000000) + (a[i + 1] * 0x10000000000) +
                 (a[i + 2] * 0x100000000) + (a[i + 3] * 0x1000000) +
                 (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];

              if (v >= 9e15) {
                crypto.randomBytes(7).copy(a, i);
              } else {

                // 0 <= (v % 1e14) <= 99999999999999
                c.push(v % 1e14);
                i += 7;
              }
            }
            i = k / 7;
          } else {
            CRYPTO = false;
            throw Error
             (bignumberError + 'crypto unavailable');
          }
        }

        // Use Math.random.
        if (!CRYPTO) {

          for (; i < k;) {
            v = random53bitInt();
            if (v < 9e15) c[i++] = v % 1e14;
          }
        }

        k = c[--i];
        dp %= LOG_BASE;

        // Convert trailing digits to zeros according to dp.
        if (k && dp) {
          v = POWS_TEN[LOG_BASE - dp];
          c[i] = mathfloor(k / v) * v;
        }

        // Remove trailing elements which are zero.
        for (; c[i] === 0; c.pop(), i--);

        // Zero?
        if (i < 0) {
          c = [e = 0];
        } else {

          // Remove leading elements which are zero and adjust exponent accordingly.
          for (e = -1 ; c[0] === 0; c.splice(0, 1), e -= LOG_BASE);

          // Count the digits of the first element of c to determine leading zeros, and...
          for (i = 1, v = c[0]; v >= 10; v /= 10, i++);

          // adjust the exponent accordingly.
          if (i < LOG_BASE) e -= LOG_BASE - i;
        }

        rand.e = e;
        rand.c = c;
        return rand;
      };
    })();


    /*
     * Return a BigNumber whose value is the sum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */
    BigNumber.sum = function () {
      var i = 1,
        args = arguments,
        sum = new BigNumber(args[0]);
      for (; i < args.length;) sum = sum.plus(args[i++]);
      return sum;
    };


    // PRIVATE FUNCTIONS


    // Called by BigNumber and BigNumber.prototype.toString.
    convertBase = (function () {
      var decimal = '0123456789';

      /*
       * Convert string of baseIn to an array of numbers of baseOut.
       * Eg. toBaseOut('255', 10, 16) returns [15, 15].
       * Eg. toBaseOut('ff', 16, 10) returns [2, 5, 5].
       */
      function toBaseOut(str, baseIn, baseOut, alphabet) {
        var j,
          arr = [0],
          arrL,
          i = 0,
          len = str.length;

        for (; i < len;) {
          for (arrL = arr.length; arrL--; arr[arrL] *= baseIn);

          arr[0] += alphabet.indexOf(str.charAt(i++));

          for (j = 0; j < arr.length; j++) {

            if (arr[j] > baseOut - 1) {
              if (arr[j + 1] == null) arr[j + 1] = 0;
              arr[j + 1] += arr[j] / baseOut | 0;
              arr[j] %= baseOut;
            }
          }
        }

        return arr.reverse();
      }

      // Convert a numeric string of baseIn to a numeric string of baseOut.
      // If the caller is toString, we are converting from base 10 to baseOut.
      // If the caller is BigNumber, we are converting from baseIn to base 10.
      return function (str, baseIn, baseOut, sign, callerIsToString) {
        var alphabet, d, e, k, r, x, xc, y,
          i = str.indexOf('.'),
          dp = DECIMAL_PLACES,
          rm = ROUNDING_MODE;

        // Non-integer.
        if (i >= 0) {
          k = POW_PRECISION;

          // Unlimited precision.
          POW_PRECISION = 0;
          str = str.replace('.', '');
          y = new BigNumber(baseIn);
          x = y.pow(str.length - i);
          POW_PRECISION = k;

          // Convert str as if an integer, then restore the fraction part by dividing the
          // result by its base raised to a power.

          y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e, '0'),
           10, baseOut, decimal);
          y.e = y.c.length;
        }

        // Convert the number as integer.

        xc = toBaseOut(str, baseIn, baseOut, callerIsToString
         ? (alphabet = ALPHABET, decimal)
         : (alphabet = decimal, ALPHABET));

        // xc now represents str as an integer and converted to baseOut. e is the exponent.
        e = k = xc.length;

        // Remove trailing zeros.
        for (; xc[--k] == 0; xc.pop());

        // Zero?
        if (!xc[0]) return alphabet.charAt(0);

        // Does str represent an integer? If so, no need for the division.
        if (i < 0) {
          --e;
        } else {
          x.c = xc;
          x.e = e;

          // The sign is needed for correct rounding.
          x.s = sign;
          x = div(x, y, dp, rm, baseOut);
          xc = x.c;
          r = x.r;
          e = x.e;
        }

        // xc now represents str converted to baseOut.

        // THe index of the rounding digit.
        d = e + dp + 1;

        // The rounding digit: the digit to the right of the digit that may be rounded up.
        i = xc[d];

        // Look at the rounding digits and mode to determine whether to round up.

        k = baseOut / 2;
        r = r || d < 0 || xc[d + 1] != null;

        r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
              : i > k || i == k &&(rm == 4 || r || rm == 6 && xc[d - 1] & 1 ||
               rm == (x.s < 0 ? 8 : 7));

        // If the index of the rounding digit is not greater than zero, or xc represents
        // zero, then the result of the base conversion is zero or, if rounding up, a value
        // such as 0.00001.
        if (d < 1 || !xc[0]) {

          // 1^-dp or 0
          str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
        } else {

          // Truncate xc to the required number of decimal places.
          xc.length = d;

          // Round up?
          if (r) {

            // Rounding up may mean the previous digit has to be rounded up and so on.
            for (--baseOut; ++xc[--d] > baseOut;) {
              xc[d] = 0;

              if (!d) {
                ++e;
                xc = [1].concat(xc);
              }
            }
          }

          // Determine trailing zeros.
          for (k = xc.length; !xc[--k];);

          // E.g. [4, 11, 15] becomes 4bf.
          for (i = 0, str = ''; i <= k; str += alphabet.charAt(xc[i++]));

          // Add leading zeros, decimal point and trailing zeros as required.
          str = toFixedPoint(str, e, alphabet.charAt(0));
        }

        // The caller will add the sign.
        return str;
      };
    })();


    // Perform division in the specified base. Called by div and convertBase.
    div = (function () {

      // Assume non-zero x and k.
      function multiply(x, k, base) {
        var m, temp, xlo, xhi,
          carry = 0,
          i = x.length,
          klo = k % SQRT_BASE,
          khi = k / SQRT_BASE | 0;

        for (x = x.slice(); i--;) {
          xlo = x[i] % SQRT_BASE;
          xhi = x[i] / SQRT_BASE | 0;
          m = khi * xlo + xhi * klo;
          temp = klo * xlo + ((m % SQRT_BASE) * SQRT_BASE) + carry;
          carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
          x[i] = temp % base;
        }

        if (carry) x = [carry].concat(x);

        return x;
      }

      function compare(a, b, aL, bL) {
        var i, cmp;

        if (aL != bL) {
          cmp = aL > bL ? 1 : -1;
        } else {

          for (i = cmp = 0; i < aL; i++) {

            if (a[i] != b[i]) {
              cmp = a[i] > b[i] ? 1 : -1;
              break;
            }
          }
        }

        return cmp;
      }

      function subtract(a, b, aL, base) {
        var i = 0;

        // Subtract b from a.
        for (; aL--;) {
          a[aL] -= i;
          i = a[aL] < b[aL] ? 1 : 0;
          a[aL] = i * base + a[aL] - b[aL];
        }

        // Remove leading zeros.
        for (; !a[0] && a.length > 1; a.splice(0, 1));
      }

      // x: dividend, y: divisor.
      return function (x, y, dp, rm, base) {
        var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0,
          yL, yz,
          s = x.s == y.s ? 1 : -1,
          xc = x.c,
          yc = y.c;

        // Either NaN, Infinity or 0?
        if (!xc || !xc[0] || !yc || !yc[0]) {

          return new BigNumber(

           // Return NaN if either NaN, or both Infinity or 0.
           !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN :

            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            xc && xc[0] == 0 || !yc ? s * 0 : s / 0
         );
        }

        q = new BigNumber(s);
        qc = q.c = [];
        e = x.e - y.e;
        s = dp + e + 1;

        if (!base) {
          base = BASE;
          e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
          s = s / LOG_BASE | 0;
        }

        // Result exponent may be one less then the current value of e.
        // The coefficients of the BigNumbers from convertBase may have trailing zeros.
        for (i = 0; yc[i] == (xc[i] || 0); i++);

        if (yc[i] > (xc[i] || 0)) e--;

        if (s < 0) {
          qc.push(1);
          more = true;
        } else {
          xL = xc.length;
          yL = yc.length;
          i = 0;
          s += 2;

          // Normalise xc and yc so highest order digit of yc is >= base / 2.

          n = mathfloor(base / (yc[0] + 1));

          // Not necessary, but to handle odd bases where yc[0] == (base / 2) - 1.
          // if (n > 1 || n++ == 1 && yc[0] < base / 2) {
          if (n > 1) {
            yc = multiply(yc, n, base);
            xc = multiply(xc, n, base);
            yL = yc.length;
            xL = xc.length;
          }

          xi = yL;
          rem = xc.slice(0, yL);
          remL = rem.length;

          // Add zeros to make remainder as long as divisor.
          for (; remL < yL; rem[remL++] = 0);
          yz = yc.slice();
          yz = [0].concat(yz);
          yc0 = yc[0];
          if (yc[1] >= base / 2) yc0++;
          // Not necessary, but to prevent trial digit n > base, when using base 3.
          // else if (base == 3 && yc0 == 1) yc0 = 1 + 1e-15;

          do {
            n = 0;

            // Compare divisor and remainder.
            cmp = compare(yc, rem, yL, remL);

            // If divisor < remainder.
            if (cmp < 0) {

              // Calculate trial digit, n.

              rem0 = rem[0];
              if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);

              // n is how many times the divisor goes into the current remainder.
              n = mathfloor(rem0 / yc0);

              //  Algorithm:
              //  product = divisor multiplied by trial digit (n).
              //  Compare product and remainder.
              //  If product is greater than remainder:
              //    Subtract divisor from product, decrement trial digit.
              //  Subtract product from remainder.
              //  If product was less than remainder at the last compare:
              //    Compare new remainder and divisor.
              //    If remainder is greater than divisor:
              //      Subtract divisor from remainder, increment trial digit.

              if (n > 1) {

                // n may be > base only when base is 3.
                if (n >= base) n = base - 1;

                // product = divisor * trial digit.
                prod = multiply(yc, n, base);
                prodL = prod.length;
                remL = rem.length;

                // Compare product and remainder.
                // If product > remainder then trial digit n too high.
                // n is 1 too high about 5% of the time, and is not known to have
                // ever been more than 1 too high.
                while (compare(prod, rem, prodL, remL) == 1) {
                  n--;

                  // Subtract divisor from product.
                  subtract(prod, yL < prodL ? yz : yc, prodL, base);
                  prodL = prod.length;
                  cmp = 1;
                }
              } else {

                // n is 0 or 1, cmp is -1.
                // If n is 0, there is no need to compare yc and rem again below,
                // so change cmp to 1 to avoid it.
                // If n is 1, leave cmp as -1, so yc and rem are compared again.
                if (n == 0) {

                  // divisor < remainder, so n must be at least 1.
                  cmp = n = 1;
                }

                // product = divisor
                prod = yc.slice();
                prodL = prod.length;
              }

              if (prodL < remL) prod = [0].concat(prod);

              // Subtract product from remainder.
              subtract(rem, prod, remL, base);
              remL = rem.length;

               // If product was < remainder.
              if (cmp == -1) {

                // Compare divisor and new remainder.
                // If divisor < new remainder, subtract divisor from remainder.
                // Trial digit n too low.
                // n is 1 too low about 5% of the time, and very rarely 2 too low.
                while (compare(yc, rem, yL, remL) < 1) {
                  n++;

                  // Subtract divisor from remainder.
                  subtract(rem, yL < remL ? yz : yc, remL, base);
                  remL = rem.length;
                }
              }
            } else if (cmp === 0) {
              n++;
              rem = [0];
            } // else cmp === 1 and n will be 0

            // Add the next digit, n, to the result array.
            qc[i++] = n;

            // Update the remainder.
            if (rem[0]) {
              rem[remL++] = xc[xi] || 0;
            } else {
              rem = [xc[xi]];
              remL = 1;
            }
          } while ((xi++ < xL || rem[0] != null) && s--);

          more = rem[0] != null;

          // Leading zero?
          if (!qc[0]) qc.splice(0, 1);
        }

        if (base == BASE) {

          // To calculate q.e, first get the number of digits of qc[0].
          for (i = 1, s = qc[0]; s >= 10; s /= 10, i++);

          round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);

        // Caller is convertBase.
        } else {
          q.e = e;
          q.r = +more;
        }

        return q;
      };
    })();


    /*
     * Return a string representing the value of BigNumber n in fixed-point or exponential
     * notation rounded to the specified decimal places or significant digits.
     *
     * n: a BigNumber.
     * i: the index of the last digit required (i.e. the digit that may be rounded up).
     * rm: the rounding mode.
     * id: 1 (toExponential) or 2 (toPrecision).
     */
    function format(n, i, rm, id) {
      var c0, e, ne, len, str;

      if (rm == null) rm = ROUNDING_MODE;
      else intCheck(rm, 0, 8);

      if (!n.c) return n.toString();

      c0 = n.c[0];
      ne = n.e;

      if (i == null) {
        str = coeffToString(n.c);
        str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS)
         ? toExponential(str, ne)
         : toFixedPoint(str, ne, '0');
      } else {
        n = round(new BigNumber(n), i, rm);

        // n.e may have changed if the value was rounded up.
        e = n.e;

        str = coeffToString(n.c);
        len = str.length;

        // toPrecision returns exponential notation if the number of significant digits
        // specified is less than the number of digits necessary to represent the integer
        // part of the value in fixed-point notation.

        // Exponential notation.
        if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {

          // Append zeros?
          for (; len < i; str += '0', len++);
          str = toExponential(str, e);

        // Fixed-point notation.
        } else {
          i -= ne;
          str = toFixedPoint(str, e, '0');

          // Append zeros?
          if (e + 1 > len) {
            if (--i > 0) for (str += '.'; i--; str += '0');
          } else {
            i += e - len;
            if (i > 0) {
              if (e + 1 == len) str += '.';
              for (; i--; str += '0');
            }
          }
        }
      }

      return n.s < 0 && c0 ? '-' + str : str;
    }


    // Handle BigNumber.max and BigNumber.min.
    function maxOrMin(args, method) {
      var n,
        i = 1,
        m = new BigNumber(args[0]);

      for (; i < args.length; i++) {
        n = new BigNumber(args[i]);

        // If any number is NaN, return NaN.
        if (!n.s) {
          m = n;
          break;
        } else if (method.call(m, n)) {
          m = n;
        }
      }

      return m;
    }


    /*
     * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
     * Called by minus, plus and times.
     */
    function normalise(n, c, e) {
      var i = 1,
        j = c.length;

       // Remove trailing zeros.
      for (; !c[--j]; c.pop());

      // Calculate the base 10 exponent. First get the number of digits of c[0].
      for (j = c[0]; j >= 10; j /= 10, i++);

      // Overflow?
      if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {

        // Infinity.
        n.c = n.e = null;

      // Underflow?
      } else if (e < MIN_EXP) {

        // Zero.
        n.c = [n.e = 0];
      } else {
        n.e = e;
        n.c = c;
      }

      return n;
    }


    // Handle values that fail the validity test in BigNumber.
    parseNumeric = (function () {
      var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
        dotAfter = /^([^.]+)\.$/,
        dotBefore = /^\.([^.]+)$/,
        isInfinityOrNaN = /^-?(Infinity|NaN)$/,
        whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;

      return function (x, str, isNum, b) {
        var base,
          s = isNum ? str : str.replace(whitespaceOrPlus, '');

        // No exception on ±Infinity or NaN.
        if (isInfinityOrNaN.test(s)) {
          x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
        } else {
          if (!isNum) {

            // basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
            s = s.replace(basePrefix, function (m, p1, p2) {
              base = (p2 = p2.toLowerCase()) == 'x' ? 16 : p2 == 'b' ? 2 : 8;
              return !b || b == base ? p1 : m;
            });

            if (b) {
              base = b;

              // E.g. '1.' to '1', '.1' to '0.1'
              s = s.replace(dotAfter, '$1').replace(dotBefore, '0.$1');
            }

            if (str != s) return new BigNumber(s, base);
          }

          // '[BigNumber Error] Not a number: {n}'
          // '[BigNumber Error] Not a base {b} number: {n}'
          if (BigNumber.DEBUG) {
            throw Error
              (bignumberError + 'Not a' + (b ? ' base ' + b : '') + ' number: ' + str);
          }

          // NaN
          x.s = null;
        }

        x.c = x.e = null;
      }
    })();


    /*
     * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
     * If r is truthy, it is known that there are more digits after the rounding digit.
     */
    function round(x, sd, rm, r) {
      var d, i, j, k, n, ni, rd,
        xc = x.c,
        pows10 = POWS_TEN;

      // if x is not Infinity or NaN...
      if (xc) {

        // rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
        // n is a base 1e14 number, the value of the element of array x.c containing rd.
        // ni is the index of n within x.c.
        // d is the number of digits of n.
        // i is the index of rd within n including leading zeros.
        // j is the actual index of rd within n (if < 0, rd is a leading zero).
        out: {

          // Get the number of digits of the first element of xc.
          for (d = 1, k = xc[0]; k >= 10; k /= 10, d++);
          i = sd - d;

          // If the rounding digit is in the first element of xc...
          if (i < 0) {
            i += LOG_BASE;
            j = sd;
            n = xc[ni = 0];

            // Get the rounding digit at index j of n.
            rd = n / pows10[d - j - 1] % 10 | 0;
          } else {
            ni = mathceil((i + 1) / LOG_BASE);

            if (ni >= xc.length) {

              if (r) {

                // Needed by sqrt.
                for (; xc.length <= ni; xc.push(0));
                n = rd = 0;
                d = 1;
                i %= LOG_BASE;
                j = i - LOG_BASE + 1;
              } else {
                break out;
              }
            } else {
              n = k = xc[ni];

              // Get the number of digits of n.
              for (d = 1; k >= 10; k /= 10, d++);

              // Get the index of rd within n.
              i %= LOG_BASE;

              // Get the index of rd within n, adjusted for leading zeros.
              // The number of leading zeros of n is given by LOG_BASE - d.
              j = i - LOG_BASE + d;

              // Get the rounding digit at index j of n.
              rd = j < 0 ? 0 : n / pows10[d - j - 1] % 10 | 0;
            }
          }

          r = r || sd < 0 ||

          // Are there any non-zero digits after the rounding digit?
          // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
          // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
           xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);

          r = rm < 4
           ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
           : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 &&

            // Check whether the digit to the left of the rounding digit is odd.
            ((i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10) & 1 ||
             rm == (x.s < 0 ? 8 : 7));

          if (sd < 1 || !xc[0]) {
            xc.length = 0;

            if (r) {

              // Convert sd to decimal places.
              sd -= x.e + 1;

              // 1, 0.1, 0.01, 0.001, 0.0001 etc.
              xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
              x.e = -sd || 0;
            } else {

              // Zero.
              xc[0] = x.e = 0;
            }

            return x;
          }

          // Remove excess digits.
          if (i == 0) {
            xc.length = ni;
            k = 1;
            ni--;
          } else {
            xc.length = ni + 1;
            k = pows10[LOG_BASE - i];

            // E.g. 56700 becomes 56000 if 7 is the rounding digit.
            // j > 0 means i > number of leading zeros of n.
            xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
          }

          // Round up?
          if (r) {

            for (; ;) {

              // If the digit to be rounded up is in the first element of xc...
              if (ni == 0) {

                // i will be the length of xc[0] before k is added.
                for (i = 1, j = xc[0]; j >= 10; j /= 10, i++);
                j = xc[0] += k;
                for (k = 1; j >= 10; j /= 10, k++);

                // if i != k the length has increased.
                if (i != k) {
                  x.e++;
                  if (xc[0] == BASE) xc[0] = 1;
                }

                break;
              } else {
                xc[ni] += k;
                if (xc[ni] != BASE) break;
                xc[ni--] = 0;
                k = 1;
              }
            }
          }

          // Remove trailing zeros.
          for (i = xc.length; xc[--i] === 0; xc.pop());
        }

        // Overflow? Infinity.
        if (x.e > MAX_EXP) {
          x.c = x.e = null;

        // Underflow? Zero.
        } else if (x.e < MIN_EXP) {
          x.c = [x.e = 0];
        }
      }

      return x;
    }


    function valueOf(n) {
      var str,
        e = n.e;

      if (e === null) return n.toString();

      str = coeffToString(n.c);

      str = e <= TO_EXP_NEG || e >= TO_EXP_POS
        ? toExponential(str, e)
        : toFixedPoint(str, e, '0');

      return n.s < 0 ? '-' + str : str;
    }


    // PROTOTYPE/INSTANCE METHODS


    /*
     * Return a new BigNumber whose value is the absolute value of this BigNumber.
     */
    P.absoluteValue = P.abs = function () {
      var x = new BigNumber(this);
      if (x.s < 0) x.s = 1;
      return x;
    };


    /*
     * Return
     *   1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
     *   -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
     *   0 if they have the same value,
     *   or null if the value of either is NaN.
     */
    P.comparedTo = function (y, b) {
      return compare(this, new BigNumber(y, b));
    };


    /*
     * If dp is undefined or null or true or false, return the number of decimal places of the
     * value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
     *
     * Otherwise, if dp is a number, return a new BigNumber whose value is the value of this
     * BigNumber rounded to a maximum of dp decimal places using rounding mode rm, or
     * ROUNDING_MODE if rm is omitted.
     *
     * [dp] {number} Decimal places: integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */
    P.decimalPlaces = P.dp = function (dp, rm) {
      var c, n, v,
        x = this;

      if (dp != null) {
        intCheck(dp, 0, MAX);
        if (rm == null) rm = ROUNDING_MODE;
        else intCheck(rm, 0, 8);

        return round(new BigNumber(x), dp + x.e + 1, rm);
      }

      if (!(c = x.c)) return null;
      n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;

      // Subtract the number of trailing zeros of the last number.
      if (v = c[v]) for (; v % 10 == 0; v /= 10, n--);
      if (n < 0) n = 0;

      return n;
    };


    /*
     *  n / 0 = I
     *  n / N = N
     *  n / I = 0
     *  0 / n = 0
     *  0 / 0 = N
     *  0 / N = N
     *  0 / I = 0
     *  N / n = N
     *  N / 0 = N
     *  N / N = N
     *  N / I = N
     *  I / n = I
     *  I / 0 = I
     *  I / N = N
     *  I / I = N
     *
     * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
     * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
     */
    P.dividedBy = P.div = function (y, b) {
      return div(this, new BigNumber(y, b), DECIMAL_PLACES, ROUNDING_MODE);
    };


    /*
     * Return a new BigNumber whose value is the integer part of dividing the value of this
     * BigNumber by the value of BigNumber(y, b).
     */
    P.dividedToIntegerBy = P.idiv = function (y, b) {
      return div(this, new BigNumber(y, b), 0, 1);
    };


    /*
     * Return a BigNumber whose value is the value of this BigNumber exponentiated by n.
     *
     * If m is present, return the result modulo m.
     * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
     * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using ROUNDING_MODE.
     *
     * The modular power operation works efficiently when x, n, and m are integers, otherwise it
     * is equivalent to calculating x.exponentiatedBy(n).modulo(m) with a POW_PRECISION of 0.
     *
     * n {number|string|BigNumber} The exponent. An integer.
     * [m] {number|string|BigNumber} The modulus.
     *
     * '[BigNumber Error] Exponent not an integer: {n}'
     */
    P.exponentiatedBy = P.pow = function (n, m) {
      var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y,
        x = this;

      n = new BigNumber(n);

      // Allow NaN and ±Infinity, but not other non-integers.
      if (n.c && !n.isInteger()) {
        throw Error
          (bignumberError + 'Exponent not an integer: ' + valueOf(n));
      }

      if (m != null) m = new BigNumber(m);

      // Exponent of MAX_SAFE_INTEGER is 15.
      nIsBig = n.e > 14;

      // If x is NaN, ±Infinity, ±0 or ±1, or n is ±Infinity, NaN or ±0.
      if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {

        // The sign of the result of pow when x is negative depends on the evenness of n.
        // If +n overflows to ±Infinity, the evenness of n would be not be known.
        y = new BigNumber(Math.pow(+valueOf(x), nIsBig ? 2 - isOdd(n) : +valueOf(n)));
        return m ? y.mod(m) : y;
      }

      nIsNeg = n.s < 0;

      if (m) {

        // x % m returns NaN if abs(m) is zero, or m is NaN.
        if (m.c ? !m.c[0] : !m.s) return new BigNumber(NaN);

        isModExp = !nIsNeg && x.isInteger() && m.isInteger();

        if (isModExp) x = x.mod(m);

      // Overflow to ±Infinity: >=2**1e10 or >=1.0000024**1e15.
      // Underflow to ±0: <=0.79**1e10 or <=0.9999975**1e15.
      } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0
        // [1, 240000000]
        ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7
        // [80000000000000]  [99999750000000]
        : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {

        // If x is negative and n is odd, k = -0, else k = 0.
        k = x.s < 0 && isOdd(n) ? -0 : 0;

        // If x >= 1, k = ±Infinity.
        if (x.e > -1) k = 1 / k;

        // If n is negative return ±0, else return ±Infinity.
        return new BigNumber(nIsNeg ? 1 / k : k);

      } else if (POW_PRECISION) {

        // Truncating each coefficient array to a length of k after each multiplication
        // equates to truncating significant digits to POW_PRECISION + [28, 41],
        // i.e. there will be a minimum of 28 guard digits retained.
        k = mathceil(POW_PRECISION / LOG_BASE + 2);
      }

      if (nIsBig) {
        half = new BigNumber(0.5);
        if (nIsNeg) n.s = 1;
        nIsOdd = isOdd(n);
      } else {
        i = Math.abs(+valueOf(n));
        nIsOdd = i % 2;
      }

      y = new BigNumber(ONE);

      // Performs 54 loop iterations for n of 9007199254740991.
      for (; ;) {

        if (nIsOdd) {
          y = y.times(x);
          if (!y.c) break;

          if (k) {
            if (y.c.length > k) y.c.length = k;
          } else if (isModExp) {
            y = y.mod(m);    //y = y.minus(div(y, m, 0, MODULO_MODE).times(m));
          }
        }

        if (i) {
          i = mathfloor(i / 2);
          if (i === 0) break;
          nIsOdd = i % 2;
        } else {
          n = n.times(half);
          round(n, n.e + 1, 1);

          if (n.e > 14) {
            nIsOdd = isOdd(n);
          } else {
            i = +valueOf(n);
            if (i === 0) break;
            nIsOdd = i % 2;
          }
        }

        x = x.times(x);

        if (k) {
          if (x.c && x.c.length > k) x.c.length = k;
        } else if (isModExp) {
          x = x.mod(m);    //x = x.minus(div(x, m, 0, MODULO_MODE).times(m));
        }
      }

      if (isModExp) return y;
      if (nIsNeg) y = ONE.div(y);

      return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
    };


    /*
     * Return a new BigNumber whose value is the value of this BigNumber rounded to an integer
     * using rounding mode rm, or ROUNDING_MODE if rm is omitted.
     *
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {rm}'
     */
    P.integerValue = function (rm) {
      var n = new BigNumber(this);
      if (rm == null) rm = ROUNDING_MODE;
      else intCheck(rm, 0, 8);
      return round(n, n.e + 1, rm);
    };


    /*
     * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
     * otherwise return false.
     */
    P.isEqualTo = P.eq = function (y, b) {
      return compare(this, new BigNumber(y, b)) === 0;
    };


    /*
     * Return true if the value of this BigNumber is a finite number, otherwise return false.
     */
    P.isFinite = function () {
      return !!this.c;
    };


    /*
     * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
     * otherwise return false.
     */
    P.isGreaterThan = P.gt = function (y, b) {
      return compare(this, new BigNumber(y, b)) > 0;
    };


    /*
     * Return true if the value of this BigNumber is greater than or equal to the value of
     * BigNumber(y, b), otherwise return false.
     */
    P.isGreaterThanOrEqualTo = P.gte = function (y, b) {
      return (b = compare(this, new BigNumber(y, b))) === 1 || b === 0;

    };


    /*
     * Return true if the value of this BigNumber is an integer, otherwise return false.
     */
    P.isInteger = function () {
      return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
    };


    /*
     * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
     * otherwise return false.
     */
    P.isLessThan = P.lt = function (y, b) {
      return compare(this, new BigNumber(y, b)) < 0;
    };


    /*
     * Return true if the value of this BigNumber is less than or equal to the value of
     * BigNumber(y, b), otherwise return false.
     */
    P.isLessThanOrEqualTo = P.lte = function (y, b) {
      return (b = compare(this, new BigNumber(y, b))) === -1 || b === 0;
    };


    /*
     * Return true if the value of this BigNumber is NaN, otherwise return false.
     */
    P.isNaN = function () {
      return !this.s;
    };


    /*
     * Return true if the value of this BigNumber is negative, otherwise return false.
     */
    P.isNegative = function () {
      return this.s < 0;
    };


    /*
     * Return true if the value of this BigNumber is positive, otherwise return false.
     */
    P.isPositive = function () {
      return this.s > 0;
    };


    /*
     * Return true if the value of this BigNumber is 0 or -0, otherwise return false.
     */
    P.isZero = function () {
      return !!this.c && this.c[0] == 0;
    };


    /*
     *  n - 0 = n
     *  n - N = N
     *  n - I = -I
     *  0 - n = -n
     *  0 - 0 = 0
     *  0 - N = N
     *  0 - I = -I
     *  N - n = N
     *  N - 0 = N
     *  N - N = N
     *  N - I = N
     *  I - n = I
     *  I - 0 = I
     *  I - N = N
     *  I - I = N
     *
     * Return a new BigNumber whose value is the value of this BigNumber minus the value of
     * BigNumber(y, b).
     */
    P.minus = function (y, b) {
      var i, j, t, xLTy,
        x = this,
        a = x.s;

      y = new BigNumber(y, b);
      b = y.s;

      // Either NaN?
      if (!a || !b) return new BigNumber(NaN);

      // Signs differ?
      if (a != b) {
        y.s = -b;
        return x.plus(y);
      }

      var xe = x.e / LOG_BASE,
        ye = y.e / LOG_BASE,
        xc = x.c,
        yc = y.c;

      if (!xe || !ye) {

        // Either Infinity?
        if (!xc || !yc) return xc ? (y.s = -b, y) : new BigNumber(yc ? x : NaN);

        // Either zero?
        if (!xc[0] || !yc[0]) {

          // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
          return yc[0] ? (y.s = -b, y) : new BigNumber(xc[0] ? x :

           // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
           ROUNDING_MODE == 3 ? -0 : 0);
        }
      }

      xe = bitFloor(xe);
      ye = bitFloor(ye);
      xc = xc.slice();

      // Determine which is the bigger number.
      if (a = xe - ye) {

        if (xLTy = a < 0) {
          a = -a;
          t = xc;
        } else {
          ye = xe;
          t = yc;
        }

        t.reverse();

        // Prepend zeros to equalise exponents.
        for (b = a; b--; t.push(0));
        t.reverse();
      } else {

        // Exponents equal. Check digit by digit.
        j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;

        for (a = b = 0; b < j; b++) {

          if (xc[b] != yc[b]) {
            xLTy = xc[b] < yc[b];
            break;
          }
        }
      }

      // x < y? Point xc to the array of the bigger number.
      if (xLTy) t = xc, xc = yc, yc = t, y.s = -y.s;

      b = (j = yc.length) - (i = xc.length);

      // Append zeros to xc if shorter.
      // No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
      if (b > 0) for (; b--; xc[i++] = 0);
      b = BASE - 1;

      // Subtract yc from xc.
      for (; j > a;) {

        if (xc[--j] < yc[j]) {
          for (i = j; i && !xc[--i]; xc[i] = b);
          --xc[i];
          xc[j] += BASE;
        }

        xc[j] -= yc[j];
      }

      // Remove leading zeros and adjust exponent accordingly.
      for (; xc[0] == 0; xc.splice(0, 1), --ye);

      // Zero?
      if (!xc[0]) {

        // Following IEEE 754 (2008) 6.3,
        // n - n = +0  but  n - n = -0  when rounding towards -Infinity.
        y.s = ROUNDING_MODE == 3 ? -1 : 1;
        y.c = [y.e = 0];
        return y;
      }

      // No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
      // for finite x and y.
      return normalise(y, xc, ye);
    };


    /*
     *   n % 0 =  N
     *   n % N =  N
     *   n % I =  n
     *   0 % n =  0
     *  -0 % n = -0
     *   0 % 0 =  N
     *   0 % N =  N
     *   0 % I =  0
     *   N % n =  N
     *   N % 0 =  N
     *   N % N =  N
     *   N % I =  N
     *   I % n =  N
     *   I % 0 =  N
     *   I % N =  N
     *   I % I =  N
     *
     * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
     * BigNumber(y, b). The result depends on the value of MODULO_MODE.
     */
    P.modulo = P.mod = function (y, b) {
      var q, s,
        x = this;

      y = new BigNumber(y, b);

      // Return NaN if x is Infinity or NaN, or y is NaN or zero.
      if (!x.c || !y.s || y.c && !y.c[0]) {
        return new BigNumber(NaN);

      // Return x if y is Infinity or x is zero.
      } else if (!y.c || x.c && !x.c[0]) {
        return new BigNumber(x);
      }

      if (MODULO_MODE == 9) {

        // Euclidian division: q = sign(y) * floor(x / abs(y))
        // r = x - qy    where  0 <= r < abs(y)
        s = y.s;
        y.s = 1;
        q = div(x, y, 0, 3);
        y.s = s;
        q.s *= s;
      } else {
        q = div(x, y, 0, MODULO_MODE);
      }

      y = x.minus(q.times(y));

      // To match JavaScript %, ensure sign of zero is sign of dividend.
      if (!y.c[0] && MODULO_MODE == 1) y.s = x.s;

      return y;
    };


    /*
     *  n * 0 = 0
     *  n * N = N
     *  n * I = I
     *  0 * n = 0
     *  0 * 0 = 0
     *  0 * N = N
     *  0 * I = N
     *  N * n = N
     *  N * 0 = N
     *  N * N = N
     *  N * I = N
     *  I * n = I
     *  I * 0 = N
     *  I * N = N
     *  I * I = I
     *
     * Return a new BigNumber whose value is the value of this BigNumber multiplied by the value
     * of BigNumber(y, b).
     */
    P.multipliedBy = P.times = function (y, b) {
      var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc,
        base, sqrtBase,
        x = this,
        xc = x.c,
        yc = (y = new BigNumber(y, b)).c;

      // Either NaN, ±Infinity or ±0?
      if (!xc || !yc || !xc[0] || !yc[0]) {

        // Return NaN if either is NaN, or one is 0 and the other is Infinity.
        if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
          y.c = y.e = y.s = null;
        } else {
          y.s *= x.s;

          // Return ±Infinity if either is ±Infinity.
          if (!xc || !yc) {
            y.c = y.e = null;

          // Return ±0 if either is ±0.
          } else {
            y.c = [0];
            y.e = 0;
          }
        }

        return y;
      }

      e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
      y.s *= x.s;
      xcL = xc.length;
      ycL = yc.length;

      // Ensure xc points to longer array and xcL to its length.
      if (xcL < ycL) zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i;

      // Initialise the result array with zeros.
      for (i = xcL + ycL, zc = []; i--; zc.push(0));

      base = BASE;
      sqrtBase = SQRT_BASE;

      for (i = ycL; --i >= 0;) {
        c = 0;
        ylo = yc[i] % sqrtBase;
        yhi = yc[i] / sqrtBase | 0;

        for (k = xcL, j = i + k; j > i;) {
          xlo = xc[--k] % sqrtBase;
          xhi = xc[k] / sqrtBase | 0;
          m = yhi * xlo + xhi * ylo;
          xlo = ylo * xlo + ((m % sqrtBase) * sqrtBase) + zc[j] + c;
          c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
          zc[j--] = xlo % base;
        }

        zc[j] = c;
      }

      if (c) {
        ++e;
      } else {
        zc.splice(0, 1);
      }

      return normalise(y, zc, e);
    };


    /*
     * Return a new BigNumber whose value is the value of this BigNumber negated,
     * i.e. multiplied by -1.
     */
    P.negated = function () {
      var x = new BigNumber(this);
      x.s = -x.s || null;
      return x;
    };


    /*
     *  n + 0 = n
     *  n + N = N
     *  n + I = I
     *  0 + n = n
     *  0 + 0 = 0
     *  0 + N = N
     *  0 + I = I
     *  N + n = N
     *  N + 0 = N
     *  N + N = N
     *  N + I = N
     *  I + n = I
     *  I + 0 = I
     *  I + N = N
     *  I + I = I
     *
     * Return a new BigNumber whose value is the value of this BigNumber plus the value of
     * BigNumber(y, b).
     */
    P.plus = function (y, b) {
      var t,
        x = this,
        a = x.s;

      y = new BigNumber(y, b);
      b = y.s;

      // Either NaN?
      if (!a || !b) return new BigNumber(NaN);

      // Signs differ?
       if (a != b) {
        y.s = -b;
        return x.minus(y);
      }

      var xe = x.e / LOG_BASE,
        ye = y.e / LOG_BASE,
        xc = x.c,
        yc = y.c;

      if (!xe || !ye) {

        // Return ±Infinity if either ±Infinity.
        if (!xc || !yc) return new BigNumber(a / 0);

        // Either zero?
        // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
        if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
      }

      xe = bitFloor(xe);
      ye = bitFloor(ye);
      xc = xc.slice();

      // Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
      if (a = xe - ye) {
        if (a > 0) {
          ye = xe;
          t = yc;
        } else {
          a = -a;
          t = xc;
        }

        t.reverse();
        for (; a--; t.push(0));
        t.reverse();
      }

      a = xc.length;
      b = yc.length;

      // Point xc to the longer array, and b to the shorter length.
      if (a - b < 0) t = yc, yc = xc, xc = t, b = a;

      // Only start adding at yc.length - 1 as the further digits of xc can be ignored.
      for (a = 0; b;) {
        a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
        xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
      }

      if (a) {
        xc = [a].concat(xc);
        ++ye;
      }

      // No need to check for zero, as +x + +y != 0 && -x + -y != 0
      // ye = MAX_EXP + 1 possible
      return normalise(y, xc, ye);
    };


    /*
     * If sd is undefined or null or true or false, return the number of significant digits of
     * the value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
     * If sd is true include integer-part trailing zeros in the count.
     *
     * Otherwise, if sd is a number, return a new BigNumber whose value is the value of this
     * BigNumber rounded to a maximum of sd significant digits using rounding mode rm, or
     * ROUNDING_MODE if rm is omitted.
     *
     * sd {number|boolean} number: significant digits: integer, 1 to MAX inclusive.
     *                     boolean: whether to count integer-part trailing zeros: true or false.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
     */
    P.precision = P.sd = function (sd, rm) {
      var c, n, v,
        x = this;

      if (sd != null && sd !== !!sd) {
        intCheck(sd, 1, MAX);
        if (rm == null) rm = ROUNDING_MODE;
        else intCheck(rm, 0, 8);

        return round(new BigNumber(x), sd, rm);
      }

      if (!(c = x.c)) return null;
      v = c.length - 1;
      n = v * LOG_BASE + 1;

      if (v = c[v]) {

        // Subtract the number of trailing zeros of the last element.
        for (; v % 10 == 0; v /= 10, n--);

        // Add the number of digits of the first element.
        for (v = c[0]; v >= 10; v /= 10, n++);
      }

      if (sd && x.e + 1 > n) n = x.e + 1;

      return n;
    };


    /*
     * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
     * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
     *
     * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {k}'
     */
    P.shiftedBy = function (k) {
      intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
      return this.times('1e' + k);
    };


    /*
     *  sqrt(-n) =  N
     *  sqrt(N) =  N
     *  sqrt(-I) =  N
     *  sqrt(I) =  I
     *  sqrt(0) =  0
     *  sqrt(-0) = -0
     *
     * Return a new BigNumber whose value is the square root of the value of this BigNumber,
     * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
     */
    P.squareRoot = P.sqrt = function () {
      var m, n, r, rep, t,
        x = this,
        c = x.c,
        s = x.s,
        e = x.e,
        dp = DECIMAL_PLACES + 4,
        half = new BigNumber('0.5');

      // Negative/NaN/Infinity/zero?
      if (s !== 1 || !c || !c[0]) {
        return new BigNumber(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
      }

      // Initial estimate.
      s = Math.sqrt(+valueOf(x));

      // Math.sqrt underflow/overflow?
      // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
      if (s == 0 || s == 1 / 0) {
        n = coeffToString(c);
        if ((n.length + e) % 2 == 0) n += '0';
        s = Math.sqrt(+n);
        e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);

        if (s == 1 / 0) {
          n = '1e' + e;
        } else {
          n = s.toExponential();
          n = n.slice(0, n.indexOf('e') + 1) + e;
        }

        r = new BigNumber(n);
      } else {
        r = new BigNumber(s + '');
      }

      // Check for zero.
      // r could be zero if MIN_EXP is changed after the this value was created.
      // This would cause a division by zero (x/t) and hence Infinity below, which would cause
      // coeffToString to throw.
      if (r.c[0]) {
        e = r.e;
        s = e + dp;
        if (s < 3) s = 0;

        // Newton-Raphson iteration.
        for (; ;) {
          t = r;
          r = half.times(t.plus(div(x, t, dp, 1)));

          if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {

            // The exponent of r may here be one less than the final result exponent,
            // e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
            // are indexed correctly.
            if (r.e < e) --s;
            n = n.slice(s - 3, s + 1);

            // The 4th rounding digit may be in error by -1 so if the 4 rounding digits
            // are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
            // iteration.
            if (n == '9999' || !rep && n == '4999') {

              // On the first iteration only, check to see if rounding up gives the
              // exact result as the nines may infinitely repeat.
              if (!rep) {
                round(t, t.e + DECIMAL_PLACES + 2, 0);

                if (t.times(t).eq(x)) {
                  r = t;
                  break;
                }
              }

              dp += 4;
              s += 4;
              rep = 1;
            } else {

              // If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
              // result. If not, then there are further digits and m will be truthy.
              if (!+n || !+n.slice(1) && n.charAt(0) == '5') {

                // Truncate to the first rounding digit.
                round(r, r.e + DECIMAL_PLACES + 2, 1);
                m = !r.times(r).eq(x);
              }

              break;
            }
          }
        }
      }

      return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
    };


    /*
     * Return a string representing the value of this BigNumber in exponential notation and
     * rounded using ROUNDING_MODE to dp fixed decimal places.
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */
    P.toExponential = function (dp, rm) {
      if (dp != null) {
        intCheck(dp, 0, MAX);
        dp++;
      }
      return format(this, dp, rm, 1);
    };


    /*
     * Return a string representing the value of this BigNumber in fixed-point notation rounding
     * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
     *
     * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
     * but e.g. (-0.00001).toFixed(0) is '-0'.
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */
    P.toFixed = function (dp, rm) {
      if (dp != null) {
        intCheck(dp, 0, MAX);
        dp = dp + this.e + 1;
      }
      return format(this, dp, rm);
    };


    /*
     * Return a string representing the value of this BigNumber in fixed-point notation rounded
     * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
     * of the format or FORMAT object (see BigNumber.set).
     *
     * The formatting object may contain some or all of the properties shown below.
     *
     * FORMAT = {
     *   prefix: '',
     *   groupSize: 3,
     *   secondaryGroupSize: 0,
     *   groupSeparator: ',',
     *   decimalSeparator: '.',
     *   fractionGroupSize: 0,
     *   fractionGroupSeparator: '\xA0',      // non-breaking space
     *   suffix: ''
     * };
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     * [format] {object} Formatting options. See FORMAT pbject above.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     * '[BigNumber Error] Argument not an object: {format}'
     */
    P.toFormat = function (dp, rm, format) {
      var str,
        x = this;

      if (format == null) {
        if (dp != null && rm && typeof rm == 'object') {
          format = rm;
          rm = null;
        } else if (dp && typeof dp == 'object') {
          format = dp;
          dp = rm = null;
        } else {
          format = FORMAT;
        }
      } else if (typeof format != 'object') {
        throw Error
          (bignumberError + 'Argument not an object: ' + format);
      }

      str = x.toFixed(dp, rm);

      if (x.c) {
        var i,
          arr = str.split('.'),
          g1 = +format.groupSize,
          g2 = +format.secondaryGroupSize,
          groupSeparator = format.groupSeparator || '',
          intPart = arr[0],
          fractionPart = arr[1],
          isNeg = x.s < 0,
          intDigits = isNeg ? intPart.slice(1) : intPart,
          len = intDigits.length;

        if (g2) i = g1, g1 = g2, g2 = i, len -= i;

        if (g1 > 0 && len > 0) {
          i = len % g1 || g1;
          intPart = intDigits.substr(0, i);
          for (; i < len; i += g1) intPart += groupSeparator + intDigits.substr(i, g1);
          if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
          if (isNeg) intPart = '-' + intPart;
        }

        str = fractionPart
         ? intPart + (format.decimalSeparator || '') + ((g2 = +format.fractionGroupSize)
          ? fractionPart.replace(new RegExp('\\d{' + g2 + '}\\B', 'g'),
           '$&' + (format.fractionGroupSeparator || ''))
          : fractionPart)
         : intPart;
      }

      return (format.prefix || '') + str + (format.suffix || '');
    };


    /*
     * Return an array of two BigNumbers representing the value of this BigNumber as a simple
     * fraction with an integer numerator and an integer denominator.
     * The denominator will be a positive non-zero value less than or equal to the specified
     * maximum denominator. If a maximum denominator is not specified, the denominator will be
     * the lowest value necessary to represent the number exactly.
     *
     * [md] {number|string|BigNumber} Integer >= 1, or Infinity. The maximum denominator.
     *
     * '[BigNumber Error] Argument {not an integer|out of range} : {md}'
     */
    P.toFraction = function (md) {
      var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s,
        x = this,
        xc = x.c;

      if (md != null) {
        n = new BigNumber(md);

        // Throw if md is less than one or is not an integer, unless it is Infinity.
        if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
          throw Error
            (bignumberError + 'Argument ' +
              (n.isInteger() ? 'out of range: ' : 'not an integer: ') + valueOf(n));
        }
      }

      if (!xc) return new BigNumber(x);

      d = new BigNumber(ONE);
      n1 = d0 = new BigNumber(ONE);
      d1 = n0 = new BigNumber(ONE);
      s = coeffToString(xc);

      // Determine initial denominator.
      // d is a power of 10 and the minimum max denominator that specifies the value exactly.
      e = d.e = s.length - x.e - 1;
      d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
      md = !md || n.comparedTo(d) > 0 ? (e > 0 ? d : n1) : n;

      exp = MAX_EXP;
      MAX_EXP = 1 / 0;
      n = new BigNumber(s);

      // n0 = d1 = 0
      n0.c[0] = 0;

      for (; ;)  {
        q = div(n, d, 0, 1);
        d2 = d0.plus(q.times(d1));
        if (d2.comparedTo(md) == 1) break;
        d0 = d1;
        d1 = d2;
        n1 = n0.plus(q.times(d2 = n1));
        n0 = d2;
        d = n.minus(q.times(d2 = d));
        n = d2;
      }

      d2 = div(md.minus(d0), d1, 0, 1);
      n0 = n0.plus(d2.times(n1));
      d0 = d0.plus(d2.times(d1));
      n0.s = n1.s = x.s;
      e = e * 2;

      // Determine which fraction is closer to x, n0/d0 or n1/d1
      r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(
          div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];

      MAX_EXP = exp;

      return r;
    };


    /*
     * Return the value of this BigNumber converted to a number primitive.
     */
    P.toNumber = function () {
      return +valueOf(this);
    };


    /*
     * Return a string representing the value of this BigNumber rounded to sd significant digits
     * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
     * necessary to represent the integer part of the value in fixed-point notation, then use
     * exponential notation.
     *
     * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
     */
    P.toPrecision = function (sd, rm) {
      if (sd != null) intCheck(sd, 1, MAX);
      return format(this, sd, rm, 2);
    };


    /*
     * Return a string representing the value of this BigNumber in base b, or base 10 if b is
     * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
     * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
     * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
     * TO_EXP_NEG, return exponential notation.
     *
     * [b] {number} Integer, 2 to ALPHABET.length inclusive.
     *
     * '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
     */
    P.toString = function (b) {
      var str,
        n = this,
        s = n.s,
        e = n.e;

      // Infinity or NaN?
      if (e === null) {
        if (s) {
          str = 'Infinity';
          if (s < 0) str = '-' + str;
        } else {
          str = 'NaN';
        }
      } else {
        if (b == null) {
          str = e <= TO_EXP_NEG || e >= TO_EXP_POS
           ? toExponential(coeffToString(n.c), e)
           : toFixedPoint(coeffToString(n.c), e, '0');
        } else if (b === 10) {
          n = round(new BigNumber(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
          str = toFixedPoint(coeffToString(n.c), n.e, '0');
        } else {
          intCheck(b, 2, ALPHABET.length, 'Base');
          str = convertBase(toFixedPoint(coeffToString(n.c), e, '0'), 10, b, s, true);
        }

        if (s < 0 && n.c[0]) str = '-' + str;
      }

      return str;
    };


    /*
     * Return as toString, but do not accept a base argument, and include the minus sign for
     * negative zero.
     */
    P.valueOf = P.toJSON = function () {
      return valueOf(this);
    };


    P._isBigNumber = true;

    if (configObject != null) BigNumber.set(configObject);

    return BigNumber;
  }


  // PRIVATE HELPER FUNCTIONS

  // These functions don't need access to variables,
  // e.g. DECIMAL_PLACES, in the scope of the `clone` function above.


  function bitFloor(n) {
    var i = n | 0;
    return n > 0 || n === i ? i : i - 1;
  }


  // Return a coefficient array as a string of base 10 digits.
  function coeffToString(a) {
    var s, z,
      i = 1,
      j = a.length,
      r = a[0] + '';

    for (; i < j;) {
      s = a[i++] + '';
      z = LOG_BASE - s.length;
      for (; z--; s = '0' + s);
      r += s;
    }

    // Determine trailing zeros.
    for (j = r.length; r.charCodeAt(--j) === 48;);

    return r.slice(0, j + 1 || 1);
  }


  // Compare the value of BigNumbers x and y.
  function compare(x, y) {
    var a, b,
      xc = x.c,
      yc = y.c,
      i = x.s,
      j = y.s,
      k = x.e,
      l = y.e;

    // Either NaN?
    if (!i || !j) return null;

    a = xc && !xc[0];
    b = yc && !yc[0];

    // Either zero?
    if (a || b) return a ? b ? 0 : -j : i;

    // Signs differ?
    if (i != j) return i;

    a = i < 0;
    b = k == l;

    // Either Infinity?
    if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1;

    // Compare exponents.
    if (!b) return k > l ^ a ? 1 : -1;

    j = (k = xc.length) < (l = yc.length) ? k : l;

    // Compare digit by digit.
    for (i = 0; i < j; i++) if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;

    // Compare lengths.
    return k == l ? 0 : k > l ^ a ? 1 : -1;
  }


  /*
   * Check that n is a primitive number, an integer, and in range, otherwise throw.
   */
  function intCheck(n, min, max, name) {
    if (n < min || n > max || n !== mathfloor(n)) {
      throw Error
       (bignumberError + (name || 'Argument') + (typeof n == 'number'
         ? n < min || n > max ? ' out of range: ' : ' not an integer: '
         : ' not a primitive number: ') + String(n));
    }
  }


  // Assumes finite n.
  function isOdd(n) {
    var k = n.c.length - 1;
    return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
  }


  function toExponential(str, e) {
    return (str.length > 1 ? str.charAt(0) + '.' + str.slice(1) : str) +
     (e < 0 ? 'e' : 'e+') + e;
  }


  function toFixedPoint(str, e, z) {
    var len, zs;

    // Negative exponent?
    if (e < 0) {

      // Prepend zeros.
      for (zs = z + '.'; ++e; zs += z);
      str = zs + str;

    // Positive exponent
    } else {
      len = str.length;

      // Append zeros.
      if (++e > len) {
        for (zs = z, e -= len; --e; zs += z);
        str += zs;
      } else if (e < len) {
        str = str.slice(0, e) + '.' + str.slice(e);
      }
    }

    return str;
  }


  // EXPORT


  BigNumber = clone();
  BigNumber['default'] = BigNumber.BigNumber = BigNumber;

  // AMD.
  if (typeof define == 'function' && define.amd) {
    define(function () { return BigNumber; });

  // Node.js and other environments that support module.exports.
  } else if (typeof module != 'undefined' && module.exports) {
    module.exports = BigNumber;

  // Browser.
  } else {
    if (!globalObject) {
      globalObject = typeof self != 'undefined' && self ? self : window;
    }

    globalObject.BigNumber = BigNumber;
  }
})(this);

},{}],28:[function(require,module,exports){

},{}],29:[function(require,module,exports){
// A library of seedable RNGs implemented in Javascript.
//
// Usage:
//
// var seedrandom = require('seedrandom');
// var random = seedrandom(1); // or any seed.
// var x = random();       // 0 <= x < 1.  Every bit is random.
// var x = random.quick(); // 0 <= x < 1.  32 bits of randomness.

// alea, a 53-bit multiply-with-carry generator by Johannes Baagøe.
// Period: ~2^116
// Reported to pass all BigCrush tests.
var alea = require('./lib/alea');

// xor128, a pure xor-shift generator by George Marsaglia.
// Period: 2^128-1.
// Reported to fail: MatrixRank and LinearComp.
var xor128 = require('./lib/xor128');

// xorwow, George Marsaglia's 160-bit xor-shift combined plus weyl.
// Period: 2^192-2^32
// Reported to fail: CollisionOver, SimpPoker, and LinearComp.
var xorwow = require('./lib/xorwow');

// xorshift7, by François Panneton and Pierre L'ecuyer, takes
// a different approach: it adds robustness by allowing more shifts
// than Marsaglia's original three.  It is a 7-shift generator
// with 256 bits, that passes BigCrush with no systmatic failures.
// Period 2^256-1.
// No systematic BigCrush failures reported.
var xorshift7 = require('./lib/xorshift7');

// xor4096, by Richard Brent, is a 4096-bit xor-shift with a
// very long period that also adds a Weyl generator. It also passes
// BigCrush with no systematic failures.  Its long period may
// be useful if you have many generators and need to avoid
// collisions.
// Period: 2^4128-2^32.
// No systematic BigCrush failures reported.
var xor4096 = require('./lib/xor4096');

// Tyche-i, by Samuel Neves and Filipe Araujo, is a bit-shifting random
// number generator derived from ChaCha, a modern stream cipher.
// https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
// Period: ~2^127
// No systematic BigCrush failures reported.
var tychei = require('./lib/tychei');

// The original ARC4-based prng included in this library.
// Period: ~2^1600
var sr = require('./seedrandom');

sr.alea = alea;
sr.xor128 = xor128;
sr.xorwow = xorwow;
sr.xorshift7 = xorshift7;
sr.xor4096 = xor4096;
sr.tychei = tychei;

module.exports = sr;

},{"./lib/alea":30,"./lib/tychei":31,"./lib/xor128":32,"./lib/xor4096":33,"./lib/xorshift7":34,"./lib/xorwow":35,"./seedrandom":36}],30:[function(require,module,exports){
// A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010
// http://baagoe.com/en/RandomMusings/javascript/
// https://github.com/nquinlan/better-random-numbers-for-javascript-mirror
// Original work is under MIT license -

// Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.



(function(global, module, define) {

function Alea(seed) {
  var me = this, mash = Mash();

  me.next = function() {
    var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32
    me.s0 = me.s1;
    me.s1 = me.s2;
    return me.s2 = t - (me.c = t | 0);
  };

  // Apply the seeding algorithm from Baagoe.
  me.c = 1;
  me.s0 = mash(' ');
  me.s1 = mash(' ');
  me.s2 = mash(' ');
  me.s0 -= mash(seed);
  if (me.s0 < 0) { me.s0 += 1; }
  me.s1 -= mash(seed);
  if (me.s1 < 0) { me.s1 += 1; }
  me.s2 -= mash(seed);
  if (me.s2 < 0) { me.s2 += 1; }
  mash = null;
}

function copy(f, t) {
  t.c = f.c;
  t.s0 = f.s0;
  t.s1 = f.s1;
  t.s2 = f.s2;
  return t;
}

function impl(seed, opts) {
  var xg = new Alea(seed),
      state = opts && opts.state,
      prng = xg.next;
  prng.int32 = function() { return (xg.next() * 0x100000000) | 0; }
  prng.double = function() {
    return prng() + (prng() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
  };
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

function Mash() {
  var n = 0xefc8249d;

  var mash = function(data) {
    data = String(data);
    for (var i = 0; i < data.length; i++) {
      n += data.charCodeAt(i);
      var h = 0.02519603282416938 * n;
      n = h >>> 0;
      h -= n;
      h *= n;
      n = h >>> 0;
      h -= n;
      n += h * 0x100000000; // 2^32
    }
    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
  };

  return mash;
}


if (module && module.exports) {
  module.exports = impl;
} else if (define && define.amd) {
  define(function() { return impl; });
} else {
  this.alea = impl;
}

})(
  this,
  (typeof module) == 'object' && module,    // present in node.js
  (typeof define) == 'function' && define   // present with an AMD loader
);



},{}],31:[function(require,module,exports){
// A Javascript implementaion of the "Tyche-i" prng algorithm by
// Samuel Neves and Filipe Araujo.
// See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  // Set up generator function.
  me.next = function() {
    var b = me.b, c = me.c, d = me.d, a = me.a;
    b = (b << 25) ^ (b >>> 7) ^ c;
    c = (c - d) | 0;
    d = (d << 24) ^ (d >>> 8) ^ a;
    a = (a - b) | 0;
    me.b = b = (b << 20) ^ (b >>> 12) ^ c;
    me.c = c = (c - d) | 0;
    me.d = (d << 16) ^ (c >>> 16) ^ a;
    return me.a = (a - b) | 0;
  };

  /* The following is non-inverted tyche, which has better internal
   * bit diffusion, but which is about 25% slower than tyche-i in JS.
  me.next = function() {
    var a = me.a, b = me.b, c = me.c, d = me.d;
    a = (me.a + me.b | 0) >>> 0;
    d = me.d ^ a; d = d << 16 ^ d >>> 16;
    c = me.c + d | 0;
    b = me.b ^ c; b = b << 12 ^ d >>> 20;
    me.a = a = a + b | 0;
    d = d ^ a; me.d = d = d << 8 ^ d >>> 24;
    me.c = c = c + d | 0;
    b = b ^ c;
    return me.b = (b << 7 ^ b >>> 25);
  }
  */

  me.a = 0;
  me.b = 0;
  me.c = 2654435769 | 0;
  me.d = 1367130551;

  if (seed === Math.floor(seed)) {
    // Integer seed.
    me.a = (seed / 0x100000000) | 0;
    me.b = seed | 0;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 20; k++) {
    me.b ^= strseed.charCodeAt(k) | 0;
    me.next();
  }
}

function copy(f, t) {
  t.a = f.a;
  t.b = f.b;
  t.c = f.c;
  t.d = f.d;
  return t;
};

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (define && define.amd) {
  define(function() { return impl; });
} else {
  this.tychei = impl;
}

})(
  this,
  (typeof module) == 'object' && module,    // present in node.js
  (typeof define) == 'function' && define   // present with an AMD loader
);



},{}],32:[function(require,module,exports){
// A Javascript implementaion of the "xor128" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  me.x = 0;
  me.y = 0;
  me.z = 0;
  me.w = 0;

  // Set up generator function.
  me.next = function() {
    var t = me.x ^ (me.x << 11);
    me.x = me.y;
    me.y = me.z;
    me.z = me.w;
    return me.w ^= (me.w >>> 19) ^ t ^ (t >>> 8);
  };

  if (seed === (seed | 0)) {
    // Integer seed.
    me.x = seed;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 64; k++) {
    me.x ^= strseed.charCodeAt(k) | 0;
    me.next();
  }
}

function copy(f, t) {
  t.x = f.x;
  t.y = f.y;
  t.z = f.z;
  t.w = f.w;
  return t;
}

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (define && define.amd) {
  define(function() { return impl; });
} else {
  this.xor128 = impl;
}

})(
  this,
  (typeof module) == 'object' && module,    // present in node.js
  (typeof define) == 'function' && define   // present with an AMD loader
);



},{}],33:[function(require,module,exports){
// A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.
//
// This fast non-cryptographic random number generator is designed for
// use in Monte-Carlo algorithms. It combines a long-period xorshift
// generator with a Weyl generator, and it passes all common batteries
// of stasticial tests for randomness while consuming only a few nanoseconds
// for each prng generated.  For background on the generator, see Brent's
// paper: "Some long-period random number generators using shifts and xors."
// http://arxiv.org/pdf/1004.3115v1.pdf
//
// Usage:
//
// var xor4096 = require('xor4096');
// random = xor4096(1);                        // Seed with int32 or string.
// assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.
// assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.
//
// For nonzero numeric keys, this impelementation provides a sequence
// identical to that by Brent's xorgens 3 implementaion in C.  This
// implementation also provides for initalizing the generator with
// string seeds, or for saving and restoring the state of the generator.
//
// On Chrome, this prng benchmarks about 2.1 times slower than
// Javascript's built-in Math.random().

(function(global, module, define) {

function XorGen(seed) {
  var me = this;

  // Set up generator function.
  me.next = function() {
    var w = me.w,
        X = me.X, i = me.i, t, v;
    // Update Weyl generator.
    me.w = w = (w + 0x61c88647) | 0;
    // Update xor generator.
    v = X[(i + 34) & 127];
    t = X[i = ((i + 1) & 127)];
    v ^= v << 13;
    t ^= t << 17;
    v ^= v >>> 15;
    t ^= t >>> 12;
    // Update Xor generator array state.
    v = X[i] = v ^ t;
    me.i = i;
    // Result is the combination.
    return (v + (w ^ (w >>> 16))) | 0;
  };

  function init(me, seed) {
    var t, v, i, j, w, X = [], limit = 128;
    if (seed === (seed | 0)) {
      // Numeric seeds initialize v, which is used to generates X.
      v = seed;
      seed = null;
    } else {
      // String seeds are mixed into v and X one character at a time.
      seed = seed + '\0';
      v = 0;
      limit = Math.max(limit, seed.length);
    }
    // Initialize circular array and weyl value.
    for (i = 0, j = -32; j < limit; ++j) {
      // Put the unicode characters into the array, and shuffle them.
      if (seed) v ^= seed.charCodeAt((j + 32) % seed.length);
      // After 32 shuffles, take v as the starting w value.
      if (j === 0) w = v;
      v ^= v << 10;
      v ^= v >>> 15;
      v ^= v << 4;
      v ^= v >>> 13;
      if (j >= 0) {
        w = (w + 0x61c88647) | 0;     // Weyl.
        t = (X[j & 127] ^= (v + w));  // Combine xor and weyl to init array.
        i = (0 == t) ? i + 1 : 0;     // Count zeroes.
      }
    }
    // We have detected all zeroes; make the key nonzero.
    if (i >= 128) {
      X[(seed && seed.length || 0) & 127] = -1;
    }
    // Run the generator 512 times to further mix the state before using it.
    // Factoring this as a function slows the main generator, so it is just
    // unrolled here.  The weyl generator is not advanced while warming up.
    i = 127;
    for (j = 4 * 128; j > 0; --j) {
      v = X[(i + 34) & 127];
      t = X[i = ((i + 1) & 127)];
      v ^= v << 13;
      t ^= t << 17;
      v ^= v >>> 15;
      t ^= t >>> 12;
      X[i] = v ^ t;
    }
    // Storing state as object members is faster than using closure variables.
    me.w = w;
    me.X = X;
    me.i = i;
  }

  init(me, seed);
}

function copy(f, t) {
  t.i = f.i;
  t.w = f.w;
  t.X = f.X.slice();
  return t;
};

function impl(seed, opts) {
  if (seed == null) seed = +(new Date);
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (state.X) copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (define && define.amd) {
  define(function() { return impl; });
} else {
  this.xor4096 = impl;
}

})(
  this,                                     // window object or global
  (typeof module) == 'object' && module,    // present in node.js
  (typeof define) == 'function' && define   // present with an AMD loader
);

},{}],34:[function(require,module,exports){
// A Javascript implementaion of the "xorshift7" algorithm by
// François Panneton and Pierre L'ecuyer:
// "On the Xorgshift Random Number Generators"
// http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf

(function(global, module, define) {

function XorGen(seed) {
  var me = this;

  // Set up generator function.
  me.next = function() {
    // Update xor generator.
    var X = me.x, i = me.i, t, v, w;
    t = X[i]; t ^= (t >>> 7); v = t ^ (t << 24);
    t = X[(i + 1) & 7]; v ^= t ^ (t >>> 10);
    t = X[(i + 3) & 7]; v ^= t ^ (t >>> 3);
    t = X[(i + 4) & 7]; v ^= t ^ (t << 7);
    t = X[(i + 7) & 7]; t = t ^ (t << 13); v ^= t ^ (t << 9);
    X[i] = v;
    me.i = (i + 1) & 7;
    return v;
  };

  function init(me, seed) {
    var j, w, X = [];

    if (seed === (seed | 0)) {
      // Seed state array using a 32-bit integer.
      w = X[0] = seed;
    } else {
      // Seed state using a string.
      seed = '' + seed;
      for (j = 0; j < seed.length; ++j) {
        X[j & 7] = (X[j & 7] << 15) ^
            (seed.charCodeAt(j) + X[(j + 1) & 7] << 13);
      }
    }
    // Enforce an array length of 8, not all zeroes.
    while (X.length < 8) X.push(0);
    for (j = 0; j < 8 && X[j] === 0; ++j);
    if (j == 8) w = X[7] = -1; else w = X[j];

    me.x = X;
    me.i = 0;

    // Discard an initial 256 values.
    for (j = 256; j > 0; --j) {
      me.next();
    }
  }

  init(me, seed);
}

function copy(f, t) {
  t.x = f.x.slice();
  t.i = f.i;
  return t;
}

function impl(seed, opts) {
  if (seed == null) seed = +(new Date);
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (state.x) copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (define && define.amd) {
  define(function() { return impl; });
} else {
  this.xorshift7 = impl;
}

})(
  this,
  (typeof module) == 'object' && module,    // present in node.js
  (typeof define) == 'function' && define   // present with an AMD loader
);


},{}],35:[function(require,module,exports){
// A Javascript implementaion of the "xorwow" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  // Set up generator function.
  me.next = function() {
    var t = (me.x ^ (me.x >>> 2));
    me.x = me.y; me.y = me.z; me.z = me.w; me.w = me.v;
    return (me.d = (me.d + 362437 | 0)) +
       (me.v = (me.v ^ (me.v << 4)) ^ (t ^ (t << 1))) | 0;
  };

  me.x = 0;
  me.y = 0;
  me.z = 0;
  me.w = 0;
  me.v = 0;

  if (seed === (seed | 0)) {
    // Integer seed.
    me.x = seed;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 64; k++) {
    me.x ^= strseed.charCodeAt(k) | 0;
    if (k == strseed.length) {
      me.d = me.x << 10 ^ me.x >>> 4;
    }
    me.next();
  }
}

function copy(f, t) {
  t.x = f.x;
  t.y = f.y;
  t.z = f.z;
  t.w = f.w;
  t.v = f.v;
  t.d = f.d;
  return t;
}

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (define && define.amd) {
  define(function() { return impl; });
} else {
  this.xorwow = impl;
}

})(
  this,
  (typeof module) == 'object' && module,    // present in node.js
  (typeof define) == 'function' && define   // present with an AMD loader
);



},{}],36:[function(require,module,exports){
/*
Copyright 2019 David Bau.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

(function (global, pool, math) {
//
// The following constants are related to IEEE 754 limits.
//

var width = 256,        // each RC4 output is 0 <= x < 256
    chunks = 6,         // at least six RC4 outputs for each double
    digits = 52,        // there are 52 significant digits in a double
    rngname = 'random', // rngname: name for Math.random and Math.seedrandom
    startdenom = math.pow(width, chunks),
    significance = math.pow(2, digits),
    overflow = significance * 2,
    mask = width - 1,
    nodecrypto;         // node.js crypto module, initialized at the bottom.

//
// seedrandom()
// This is the seedrandom function described above.
//
function seedrandom(seed, options, callback) {
  var key = [];
  options = (options == true) ? { entropy: true } : (options || {});

  // Flatten the seed string or build one from local entropy if needed.
  var shortseed = mixkey(flatten(
    options.entropy ? [seed, tostring(pool)] :
    (seed == null) ? autoseed() : seed, 3), key);

  // Use the seed to initialize an ARC4 generator.
  var arc4 = new ARC4(key);

  // This function returns a random double in [0, 1) that contains
  // randomness in every bit of the mantissa of the IEEE 754 value.
  var prng = function() {
    var n = arc4.g(chunks),             // Start with a numerator n < 2 ^ 48
        d = startdenom,                 //   and denominator d = 2 ^ 48.
        x = 0;                          //   and no 'extra last byte'.
    while (n < significance) {          // Fill up all significant digits by
      n = (n + x) * width;              //   shifting numerator and
      d *= width;                       //   denominator and generating a
      x = arc4.g(1);                    //   new least-significant-byte.
    }
    while (n >= overflow) {             // To avoid rounding up, before adding
      n /= 2;                           //   last byte, shift everything
      d /= 2;                           //   right using integer math until
      x >>>= 1;                         //   we have exactly the desired bits.
    }
    return (n + x) / d;                 // Form the number within [0, 1).
  };

  prng.int32 = function() { return arc4.g(4) | 0; }
  prng.quick = function() { return arc4.g(4) / 0x100000000; }
  prng.double = prng;

  // Mix the randomness into accumulated entropy.
  mixkey(tostring(arc4.S), pool);

  // Calling convention: what to return as a function of prng, seed, is_math.
  return (options.pass || callback ||
      function(prng, seed, is_math_call, state) {
        if (state) {
          // Load the arc4 state from the given state if it has an S array.
          if (state.S) { copy(state, arc4); }
          // Only provide the .state method if requested via options.state.
          prng.state = function() { return copy(arc4, {}); }
        }

        // If called as a method of Math (Math.seedrandom()), mutate
        // Math.random because that is how seedrandom.js has worked since v1.0.
        if (is_math_call) { math[rngname] = prng; return seed; }

        // Otherwise, it is a newer calling convention, so return the
        // prng directly.
        else return prng;
      })(
  prng,
  shortseed,
  'global' in options ? options.global : (this == math),
  options.state);
}

//
// ARC4
//
// An ARC4 implementation.  The constructor takes a key in the form of
// an array of at most (width) integers that should be 0 <= x < (width).
//
// The g(count) method returns a pseudorandom integer that concatenates
// the next (count) outputs from ARC4.  Its return value is a number x
// that is in the range 0 <= x < (width ^ count).
//
function ARC4(key) {
  var t, keylen = key.length,
      me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];

  // The empty key [] is treated as [0].
  if (!keylen) { key = [keylen++]; }

  // Set up S using the standard key scheduling algorithm.
  while (i < width) {
    s[i] = i++;
  }
  for (i = 0; i < width; i++) {
    s[i] = s[j = mask & (j + key[i % keylen] + (t = s[i]))];
    s[j] = t;
  }

  // The "g" method returns the next (count) outputs as one number.
  (me.g = function(count) {
    // Using instance members instead of closure state nearly doubles speed.
    var t, r = 0,
        i = me.i, j = me.j, s = me.S;
    while (count--) {
      t = s[i = mask & (i + 1)];
      r = r * width + s[mask & ((s[i] = s[j = mask & (j + t)]) + (s[j] = t))];
    }
    me.i = i; me.j = j;
    return r;
    // For robust unpredictability, the function call below automatically
    // discards an initial batch of values.  This is called RC4-drop[256].
    // See http://google.com/search?q=rsa+fluhrer+response&btnI
  })(width);
}

//
// copy()
// Copies internal state of ARC4 to or from a plain object.
//
function copy(f, t) {
  t.i = f.i;
  t.j = f.j;
  t.S = f.S.slice();
  return t;
};

//
// flatten()
// Converts an object tree to nested arrays of strings.
//
function flatten(obj, depth) {
  var result = [], typ = (typeof obj), prop;
  if (depth && typ == 'object') {
    for (prop in obj) {
      try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}
    }
  }
  return (result.length ? result : typ == 'string' ? obj : obj + '\0');
}

//
// mixkey()
// Mixes a string seed into a key that is an array of integers, and
// returns a shortened string seed that is equivalent to the result key.
//
function mixkey(seed, key) {
  var stringseed = seed + '', smear, j = 0;
  while (j < stringseed.length) {
    key[mask & j] =
      mask & ((smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++));
  }
  return tostring(key);
}

//
// autoseed()
// Returns an object for autoseeding, using window.crypto and Node crypto
// module if available.
//
function autoseed() {
  try {
    var out;
    if (nodecrypto && (out = nodecrypto.randomBytes)) {
      // The use of 'out' to remember randomBytes makes tight minified code.
      out = out(width);
    } else {
      out = new Uint8Array(width);
      (global.crypto || global.msCrypto).getRandomValues(out);
    }
    return tostring(out);
  } catch (e) {
    var browser = global.navigator,
        plugins = browser && browser.plugins;
    return [+new Date, global, plugins, global.screen, tostring(pool)];
  }
}

//
// tostring()
// Converts an array of charcodes to a string
//
function tostring(a) {
  return String.fromCharCode.apply(0, a);
}

//
// When seedrandom.js is loaded, we immediately mix a few bits
// from the built-in RNG into the entropy pool.  Because we do
// not want to interfere with deterministic PRNG state later,
// seedrandom will not call math.random on its own again after
// initialization.
//
mixkey(math.random(), pool);

//
// Nodejs and AMD support: export the implementation as a module using
// either convention.
//
if ((typeof module) == 'object' && module.exports) {
  module.exports = seedrandom;
  // When in node.js, try using crypto package for autoseeding.
  try {
    nodecrypto = require('crypto');
  } catch (ex) {}
} else if ((typeof define) == 'function' && define.amd) {
  define(function() { return seedrandom; });
} else {
  // When included as a plain script, set up Math.seedrandom global.
  math['seed' + rngname] = seedrandom;
}


// End anonymous scope, and pass initial values.
})(
  // global: `self` in browsers (including strict mode and web workers),
  // otherwise `this` in Node and other environments
  (typeof self !== 'undefined') ? self : this,
  [],     // pool: entropy pool starts empty
  Math    // math: package containing random, pow, and seedrandom
);

},{"crypto":28}],37:[function(require,module,exports){
//==========================================================================
// gen-basic.js
// part of 'total-serialism' Package
// by Timo Hoogland (@t.mo / @tmhglnd), www.timohoogland.com
// MIT License
//
// Basic methods that generate number sequences as 
// startingpoint for composing melodies, rhythms and more
// 
// credits:
// - spread-methods inspired by Max8's MC functions spread and spreadinclusive
//==========================================================================

const Util = require('./utility.js');

// Generate a list of n-length starting at one value
// up until (but excluding) the 3th argument. 
// Evenly spaced values in between in floating-point
// 
// @params {array-length, low-output, high-output}
// @return {Array}
//
function spreadFloat(len=1, lo=len, hi=0){
	// swap if lo > hi
	if (lo > hi){ var t=lo, lo=hi, hi=t; }
	// len is minimum of 1
	len = Math.max(1, len);
	// generate array
	let arr = [];
	for (let i=0; i<len; i++){
		arr[i] = (i / len) * (hi - lo) + lo;
	}
	return arr;
}
exports.spreadFloat = spreadFloat;
exports.spreadF = spreadFloat;

// Generate a list of n-length starting at one value
// up until (but excluding) the 3th argument. 
// Set an exponential curve in the spacing of the values.
// 
// @params {length, low-output, high-output, exponent}
// @return {Array}
//
function spreadFloatExp(len=1, lo=len, hi=0, exp=1){
	// swap if lo > hi
	if (lo > hi){ var t=lo, lo=hi, hi=t; }
	// len is minimum of 1
	len = Math.max(1, len);
	// generate array
	let arr = [];
	for (let i=0; i<len; i++){
		arr[i] = Math.pow((i / len), exp) * (hi - lo) + lo;
	}
	return arr;
}
exports.spreadFloatExp = spreadFloatExp;

// Spread function rounded to integers
// 
// @params {length, low-output, high-output}
// @return {Array}
//
function spread(len, lo, hi){
	let arr = spreadFloat(len, lo, hi);
	return arr.map(v => Math.floor(Number(v.toPrecision(15))));
}
exports.spread = spread;

// Spread function floored to integers
// 
// @params {length, low-output, high-output, exponent}
// @return {Array}
//
function spreadExp(len, lo, hi, exp){
	let arr = spreadFloatExp(len, lo, hi, exp);
	return arr.map(v => Math.floor(Number(v.toPrecision(15))));
}
exports.spreadExp = spreadExp;

// Generate a list of n-length starting at one value
// ending at the 3th argument.
// Evenly spaced values in between in floating-point
// 
// @params {length, low-output, high-output}
// @return {Array}
//
function spreadInclusiveFloat(len=1, lo=len, hi=0){
	// swap if lo > hi
	if (lo > hi){ var t=lo, lo=hi, hi=t; }
	// len is minimum of 1
	len = Math.max(1, len);
	// generate array
	let arr = []
	for (let i=0; i<len; i++){
		arr[i] = (i / (len-1)) * (hi - lo) + lo;
	}
	return arr;
}
exports.spreadInclusiveFloat = spreadInclusiveFloat;
exports.spreadIncF = spreadInclusiveFloat;

// Generate a list of n-length starting at one value
// ending at the 3th argument.
// Set an exponential curve in the spacing of the values.
// 
// @params {length, low-output, high-output, exponent}
// @return {Array}
//
function spreadInclusiveFloatExp(len=1, lo=len, hi=0, exp=1){
	// swap if lo > hi
	if (lo > hi){ var t=lo, lo=hi, hi=t; }
	// len is minimum of 1
	len = Math.max(1, len);
	// generate array
	let arr = [];
	for (let i=0; i<len; i++){
		arr[i] = Math.pow((i / (len-1)), exp) * (hi - lo) + lo;
	}
	return arr;
}
exports.spreadInclusiveFloatExp = spreadInclusiveFloatExp;

// spreadinclusiveFloat function floored to integers
// 
// @params {length, low-output, high-output}
// @return {Array}
//
function spreadInclusive(len, lo, hi){
	var arr = spreadInclusiveFloat(len, lo, hi);
	return arr.map(v => Math.floor(Number(v.toPrecision(15))));
}
exports.spreadInclusive = spreadInclusive;
exports.spreadInc = spreadInclusive;

// spreadinclusiveFloatExp function floored to integers
// 
// @params {length, low-output, high-output, exponent}
// @return {Array}
//
function spreadInclusiveExp(len, lo, hi, exp){
	var arr = spreadInclusiveFloatExp(len, lo, hi, exp);
	return arr.map(v => Math.floor(Number(v.toPrecision(15))));
}
exports.spreadInclusiveExp = spreadInclusiveExp;

// fill an array with values. Arguments are pairs.
// Every pair consists of <value, amount>
// The value is repeated n-amount times in the list
// 
// @params {value0, amount0, value1, amount1, ... value-n, amount-n}
// @return {Array}
// 
function fill(...args){
	// when no arguments return array of 0
	if (!args.length){ return [0]; }
	// when arguments uneven strip last argument
	if (args.length % 2){ args.pop(); }
	
	let len = args.length/2;
	let arr = [];
	for (let i=0; i<len; i++){
		for (let k=0; k<Math.abs(args[i*2+1]); k++){
			arr.push(args[i*2]);
		}
	}
	return arr;
}
exports.fill = fill;

// Generate an array with n-periods of a sine function
// Optional last arguments set lo and hi range and phase offset
// Only setting first range argument sets the low-range to 0
// 
// @param {Int} -> Length of output array
// @param {Number} -> Periods of sine-wave 
// @param {Number} -> Low range of values (optional, default=-1) 
// @param {Number} -> High range of values (optional, default=1)
// @param {Number} -> Phase offset (optional, default=0)
// @return {Array} -> Sine function
// 
function sineFloat(len=1, periods=1, lo, hi, phase=0){
	if (lo === undefined){ lo = -1; hi = 1; }
	else if (hi === undefined){ hi = lo, lo = 0; }
	// if no range specified
	// if (lo === undefined){ lo = -1; hi = 1; }
	// swap if lo > hi
	// if (lo > hi){ var t=lo, lo=hi, hi=t; }

	// array length minimum of 1
	len = Math.max(1, len);
	let arr = [];

	let a = Math.PI * 2.0 * periods / len;
	let p = Math.PI * phase * 2.0;
	for (let i=0; i<len; i++){
		arr[i] = Math.sin(a * i + p);
	}
	return Util.map(arr, -1, 1, lo, hi);
}
exports.sineFloat = sineFloat;
// exports.sin = sineFloat;

// Generate an integer array with n-periods of a sine function
// Optional last arguments set lo and hi range
// 
// @param {Int} -> Length of output array
// @param {Number} -> Periods of sine-wave 
// @param {Number} -> Low range of values (optional, default = 0) 
// @param {Number} -> High range of values (optional, default = 12)
// @param {Number} -> Phase shift (optional, default = 0)
// @return {Array} -> Sine function
// 
function sine(len=1, periods=1, lo=12, hi, phase){
	var arr = sineFloat(len, periods, lo, hi, phase);
	return arr.map(v => Math.trunc(v));
}
exports.sine = sine;

// Generate an array with n-periods of a cosine function
// Flip the low and high range to invert the function
// See sinFloat() for details
//
function cosineFloat(len=1, periods=1, lo, hi, phase=0){
	return sineFloat(len, periods, lo, hi, phase+0.25);
}
exports.cosineFloat = cosineFloat;
// exports.cos = cosineFloat;

// Generate an integer array with n-periods of a cosine function
// Flip the low and high range to invert the function
// See sin() for details
// 
function cosine(len=1, periods=1, lo=12, hi, phase=0){
	var arr = sineFloat(len, periods, lo, hi, phase+0.25);
	return arr.map(v => Math.trunc(v));
}
exports.cosine = cosine;


},{"./utility.js":43}],38:[function(require,module,exports){
//==============================================================================
// gen-complex.js
// part of 'total-serialism' Package
// by Timo Hoogland (@t.mo / @tmhglnd), www.timohoogland.com
// MIT License
//
// Complex Algorithms and methods that generate number sequences as 
// startingpoint for composing melodies, rhythms and more
// 
// credits:
// - euclid() based on paper by Godfried Toussaint  
// http://cgm.cs.mcgill.ca/~godfried/publications/banff.pdf 
// and code from https://github.com/brianhouse/bjorklund
// - hexBeat() inspired by Steven Yi's implementation in the csound
//  livecode environment from 
// https://github.com/kunstmusik/csound-live-code
// and here https://kunstmusik.github.io/learn-hex-beats/
// - fibonacci(), nbonacci() and pisano() inspired by 'fibonacci motion' 
// used by composer Iannis Xenakis and 'symbolic music'. See further 
// reading in README.md. Also inspired by Numberphile videos on 
// pisano period on youtube.
//==============================================================================

const Transform = require('./transform.js');
const BigNumber = require('bignumber.js');

// configure the bignumber settings
BigNumber.config({
	DECIMAL_PLACES: 20,
	EXPONENTIAL_AT: [-7, 20]
});

// A hexadecimal rhythm generator. Generates values of 0 and 1
// based on the input of a hexadecimal character string
//
// @param {String} -> hexadecimal characters (0 t/m f)
// @return {Array} -> rhythm
// 
function hexBeat(hex="8"){
	if (!hex.isNaN){ hex = hex.toString(); }
	var a = [];
	for (let i in hex){
		var binary = parseInt("0x"+hex[i]).toString(2);
		binary = isNaN(binary)? '0000' : binary;
		var padding = binary.padStart(4, '0');
		a = a.concat(padding.split('').map(x => Number(x)));
	}
	return a;
}
exports.hexBeat = hexBeat;

// A euclidean rhythm generator. Generates values of 0 and 1
// distributed based on the common denominator after division
//
// @param {Int} -> steps (optional, default=8)
// @param {Int} -> beats (optional, default=4)
// @param {Int} -> rotate (optional, default=0)
// @return {Array}
// 
var pattern, counts, remainders;

function euclid(steps=8, beats=4, rot=0){
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

	return Transform.rotate(pattern, rot - pattern.indexOf(1));
}
exports.euclid = euclid;

function build(l){
	var level = l;
	
	if (level == -1){
		pattern.push(0);
	} else if (level == -2){
		pattern.push(1);
	} else {
		for (var i=0; i<counts[level]; i++){
			build(level-1);
		}
		if (remainders[level] != 0){
			build(level-2);
		}
	}
}

// Lindemayer String expansion
// a recursive fractal algorithm to generate botanic (and more)
// Default rule is 1 -> 10, 0 -> 1, where 1=A and 0=B
// Rules are specified as a JS object consisting of strings or arrays
//
// @param {String} -> the axiom (the start)
// @param {Int} -> number of generations
// @param {Object} -> production rules
// @return {String/Array} -> axiom determins string or array output
// 
function linden(axiom=[1], iteration=3, rules={1: [1, 0], 0: [1]}){
	axiom = (typeof axiom === 'number')? [axiom] : axiom;
	let asString = typeof axiom === 'string';
	let res;

	for(let n=0; n<iteration; n++){
		res = (asString)? "" : [];
		for(let ch in axiom){
			let char = axiom[ch];
			let rule = rules[char];
			if(rule){
				res = (asString)? res + rule : res.concat(rule);
			}else{
				res = (asString)? res + char : res.concat(char);
			}
		}
		axiom = res;
	}
	return res;
}
exports.linden = linden;

// Generate any n-bonacci sequence as an array of BigNumber objects
// F(n) = t * F(n-1) + F(n-2). This possibly generatres various 
// integer sequences: fibonacci, pell, tribonacci
// 
// @param {Int} -> output length of array
// @param {Int} -> start value 1
// @param {Int} -> start value 2
// @param {Int} -> multiplier t
// @return {Array} -> array of BigNumber objects
// 
function numBonacci(len=1, s1=0, s2=1, t=1){
	var n1 = new BigNumber(s2); //startvalue n-1
	var n2 = new BigNumber(s1); //startvalue n-2

	len = Math.max(1, len-2);
	var cur = 0, arr = [n2, n1];

	if (len < 2) {
		return arr.slice(0, len);
	} else {
		for (var i=0; i<len; i++){	
			// general method for nbonacci sequences
			// Fn = t * Fn-1 + Fn-2
			cur = n1.times(t).plus(n2);
			n2 = n1; // store n-1 as n-2
			n1 = cur; // store current number as n-1
			arr.push(cur); // store BigNumber in array
		}
		return arr;
	}
}

// Generate any n-bonacci sequence as an array of BigNumber objects
// for export fuction. F(n) = t * F(n-1) + F(n-2)
// 
// @param {Int} -> output length of array
// @param {Int} -> start value 1 (optional, default=0)
// @param {Int} -> start value 2 (optional, default=1)
// @param {Int} -> multiplier (optional, default=1)
// @return {String-Array} -> array of bignumbers as strings
// 
function nbonacci(len=1, s1=0, s2=1, t=1, toString=false){
	return numBonacci(len, s1, s2, t).map(x => {
		return (toString)? x.toFixed() : x.toNumber() 
	});
}
exports.nbonacci = nbonacci;

// Generate the Fibonacci sequence as an array of BigNumber objects
// F(n) = F(n-1) + F(n-2). The ratio between consecutive numbers in 
// the fibonacci sequence tends towards the Golden Ratio (1+√5)/2
// OEIS: A000045 (Online Encyclopedia of Integer Sequences)
// When working with larger fibonacci-numbers then possible in 64-bit
// Set the toString to true
// 
// @param {Int} -> output length of array
// @param {Int} -> offset in sequence (optional, default=0)
// @param {Bool} -> numbers as strings (optional, default=false)
// @return {String-Array} -> array of bignumbers as strings
// 
function fibonacci(len=1, offset=0, toString=false){
	var f = numBonacci(len+offset, 0, 1, 1).map(x => {
		return (toString)? x.toFixed() : x.toNumber() 
	});
	if (offset > 0){
		return f.slice(offset, offset+len);
	}
	return f;
}
exports.fibonacci = fibonacci;

// Generate the Pisano period sequence as an array of BigNumber objects
// Returns array of [0] if no period is found within the default length
// of fibonacci numbers (256). Mod value is a minimum of 2
// 
// F(n) = (F(n-1) + F(n-2)) mod a.
// 
// @param {Int} -> output length of array
// @param {Int} -> modulus for pisano period
// @return {Int-Array} -> array of integers
// 
function pisano(mod=12, len=-1){
	if (mod < 2){ return [0]; }
	if (len < 1){
		return pisanoPeriod(mod);
	} else {
		return numBonacci(len, 0, 1, 1).map(x => x.mod(mod).toNumber());
	}
}
exports.pisano = pisano;

function pisanoPeriod(mod=2, length=64){
	// console.log('pisano', '@mod', mod, '@length', length);
	var seq = numBonacci(length, 0, 1, 1).map(x => x.mod(mod).toNumber());
	var p = [], l = 0;

	for (var i=0; i<seq.length; i++){
		p.push(seq[i]);

		if (p.length > 2){ 
			var c = [0, 1, 1];
			var equals = 0;

			for (let k in p){
				equals += p[k] === c[k];
			}
			if (equals === 3 && l > 3){
				return seq.slice(0, l);
				// return { 'length' : l };
			}
			p = p.slice(1, 3);
			l++;
		}
	}
	// console.log('no period, next iteration');
	return pisanoPeriod(mod, length*2);
}

// Generate the Pell numbers as an array of BigNumber objects
// F(n) = 2 * F(n-1) + F(n-2). The ratio between consecutive numbers 
// in the pell sequence tends towards the Silver Ratio 1 + √2.
// OEIS: A006190 (Online Encyclopedia of Integer Sequences)
// 
// @param {Int} -> output length of array
// @param {Int} -> offset in sequence (optional, default=0)
// @param {Bool} -> numbers as strings (optional, default=false)
// @return {String-Array} -> array of bignumbers as strings
// 
function pell(len=1, offset=0, toString=false){
	var f = numBonacci(len+offset, 0, 1, 2).map(x => {
		return (toString)? x.toFixed() : x.toNumber() 
	});
	if (offset > 0){
		return f.slice(offset, offset+len);
	}
	return f;
}
exports.pell = pell;

// Generate the Tribonacci numbers as an array of BigNumber objects
// F(n) = 2 * F(n-1) + F(n-2). The ratio between consecutive numbers in 
// the 3-bonacci sequence tends towards the Bronze Ratio (3 + √13) / 2.
// OEIS: A000129 (Online Encyclopedia of Integer Sequences)
// 
// @param {Int} -> output length of array
// @param {Int} -> offset in sequence (optional, default=0)
// @param {Bool} -> numbers as strings (optional, default=false)
// @return {String-Array} -> array of bignumbers as strings
// 
function threeFibonacci(len=1, offset=0, toString=false){
	let f = numBonacci(len+offset, 0, 1, 3).map(x => {
		return (toString)? x.toFixed() : x.toNumber() 
	});
	if (offset > 0){
		return f.slice(offset, offset+len);
	}
	return f;
}
exports.threeFibonacci = threeFibonacci;

// Generate the Lucas numbers as an array of BigNumber objects
// F(n) = F(n-1) + F(n-2), with F0=2 and F1=1.
// OEIS: A000032 (Online Encyclopedia of Integer Sequences)
// 
// @param {Int} -> output length of array
// @param {Int} -> offset in sequence (optional, default=0)
// @param {Bool} -> numbers as strings (optional, default=false)
// @return {String-Array} -> array of bignumbers as strings
// 
function lucas(len=1, offset=0, toString=false){
	let f = numBonacci(len+offset, 2, 1, 1).map(x => {
		return (toString)? x.toFixed() : x.toNumber() 
	});
	if (offset > 0){
		return f.slice(offset, offset+len);
	}
	return f;
}
exports.lucas = lucas;

},{"./transform.js":41,"bignumber.js":27}],39:[function(require,module,exports){
//=======================================================================
// gen-stochastic.js
// part of 'total-serialism' Package
// by Timo Hoogland (@t.mo / @tmhglnd), www.timohoogland.com
// MIT License
//
// Stochastic and Probablity Theory algorithms to generate 
// various forms of random 
// number sequences
// 
// credits:
// - Gratefully using the seedrandom package by David Bau
//=======================================================================

// require Generative methods
const Gen = require('./gen-basic.js');
const Util = require('./utility.js');
// require seedrandom package
var seedrandom = require('seedrandom');

// local pseudorandom number generator
var rng = seedrandom();

// Set the seed for all the Random Number Generators. 
// 0 sets to unpredictable seeding
// 
// @param {Number/String} -> the seed
// @return {Void}
// 
function seed(v=0){
	if (v === 0 || v === null || v === undefined){
		rng = seedrandom();
	} else {
		rng = seedrandom(v);
	}
}
exports.seed = seed;

// generate a list of random float values 
// between a certain specified range (excluding high val)
// 
// @param {Int} -> number of values to output
// @param {Number} -> minimum range (optional, default=0)
// @param {Number} -> maximum range (optional, defautl=1)
// @return {Array}
// 
function randomFloat(len=1, lo=1, hi=0){
	// swap if lo > hi
	if (lo > hi){ var t=lo, lo=hi, hi=t; }
	// len is positive and minimum of 1
	len = Math.max(1, len);
	
	var arr = new Array(len);
	for (var i=0; i<len; i++){
		arr[i] = (rng() * (hi - lo)) + lo;
	}
	return arr;
}
exports.randomFloat = randomFloat;
exports.randomF = randomFloat;

// generate a list of random integer values 
// between a certain specified range (excluding high val)
// 
// @param {Int} -> number of values to output
// @param {Number} -> minimum range (optional, default=0)
// @param {Number} -> maximum range (optional, defautl=2)
// @return {Array}
// 
function random(len=1, lo=2, hi=0){
	var arr = randomFloat(len, lo, hi);
	return arr.map(v => Math.floor(v));
}
exports.random = random;

// generate a list of random float values but the next random 
// value is within a limited range of the previous value generating
// a random "drunk" walk, also referred to as brownian motion.
// Inspired by the [drunk]-object in MaxMSP
// 
// @param {Int} -> length of output array
// @param {Number} -> step range for next random value
// @param {Number} -> minimum range (optional, default=null)
// @param {Number} -> maximum range (optional, default=null)
// @param {Number} -> starting point
// @param {Bool} -> fold between lo and hi range
// @return {Array}
// 
function drunkFloat(len=1, step=1, lo=1, hi=0, p, bound=true){
	// swap if lo > hi
	if (lo > hi){ var t=lo, lo=hi, hi=t; }
	p = (!p)? (lo+hi)/2 : p;

	var arr = [];
	for (var i=0; i<Math.max(1,len); i++){
		// direction of next random number (+ / -)
		var dir = (rng() > 0.5) * 2 - 1;
		// prev + random value * step * direction
		p += rng() * step * dir;

		if (bound && (p > hi || p < lo)){
			p = Util.fold(p, lo, hi);
		}
		arr.push(p);
	}
	return arr;
}
exports.drunkFloat = drunkFloat;
exports.walkFloat = drunkFloat;

// generate a list of random integer values but the next random 
// value is within a limited range of the previous value generating
// a random "drunk" walk, also referred to as brownian motion.
// Inspired by the [drunk]-object in MaxMSP
// 
// @param {Int} -> length of output array
// @param {Number} -> step range for next random value
// @param {Number} -> minimum range (optional, default=null)
// @param {Number} -> maximum range (optional, default=null)
// @param {Number} -> starting point
// @param {Bool} -> fold between lo and hi range
// @return {Array}
// 
function drunk(len=1, step=1, lo=12, hi=0, p, bound=true){
	let arr = drunkFloat(len, step, lo, hi, p, bound);
	return arr.map(v => Math.floor(v));
}
exports.drunk = drunk;
exports.walk = drunk;

// generate a list of random integer values 0 or 1
// like a coin toss, heads/tails
// 
// @param {Int} -> number of tosses to output
// @return {Array}
// 
function coin(len=1){
	var arr = randomFloat(len, 0, 2);
	return arr.map(v => Math.floor(v));
}
exports.coin = coin;

// generate a list of random integer values 1 to 6
// like the roll of a dice
// 
// @param {Int} -> number of tosses to output
// @param {Int} -> sides of the die (optional, default=6)
// @return {Array}
// 
function dice(len=1, sides=6){
	var arr = randomFloat(len, 1, sides+1);
	return arr.map(v => Math.floor(v));
}
exports.dice = dice;

// shuffle a list, based on the Fisher-Yates shuffle algorithm
// by Ronald Fisher and Frank Yates in 1938
// The algorithm has run time complexity of O(n)
// 
// @param {Array} -> array to shuffle
// @return {Array}
// 
function shuffle(a=[0]){
	var arr = a.slice();
	for (var i=arr.length-1; i>0; i-=1) {
		var j = Math.floor(rng() * (i + 1));
		var t = arr[i];
		arr[i] = arr[j];
		arr[j] = t;
	}
	return arr;
}
exports.shuffle = shuffle;

// Generate a list of 12 semitones
// then shuffle the list based on a random seed
// 
// @return {Array} -> twelve-tone series
// 
function twelveTone(){
	return shuffle(Gen.spread(12));
}
exports.twelveTone = twelveTone;

// Generate a list of unique random integer values between a 
// certain specified range (excluding high val). An 'urn' is filled
// with values and when one is picked it is removed from the urn. 
// If the outputlist is longer then the range, the urn refills when
// empty. On refill it is made sure no repeating value can be picked.
// Inspired by the [urn]-object in MaxMSP
// 
// @param {Int} -> number of values to output
// @param {Number} -> maximum range (optional, default=12)
// @param {Number} -> minimum range (optional, defautl=0)
// @return {Array} -> random values
// 
function urn(len=1, hi=12, lo=0){
	// swap if lo > hi
	if (lo > hi){ var t=lo, lo=hi, hi=t; }
	// generate array with values and pick
	return pick(len, Gen.spread(hi-lo, lo, hi));
}
exports.urn = urn;

// Choose random items from an array provided
// The default array is an array of 0 and 1
// 
// @param {Int} -> output length
// @param {Array} -> items to choose from
// @return {Array} -> randomly selected items
// 
function choose(len=1, a=[0, 1]){
	// if a is no Array make it an array
	a = (!Array.isArray(a))? [a] : a;

	var arr = [];
	for (var i=0; i<Math.max(1,len); i++){
		arr.push(a[Math.floor(rng()*a.length)]);
	}
	return arr;
}
exports.choose = choose;

// Pick random items from an array provided
// An 'urn' is filled with values and when one is picked it is removed 
// from the urn. If the outputlist is longer then the range, the urn 
// refills when empty. On refill it is made sure no repeating value
// can be picked.
// 
// @param {Int} -> output length
// @param {Array} -> items to choose from
// @return {Array} -> randomly selected items
// 
function pick(len=1, a=[0, 1]){
	// fill the jar with the input
	var jar = (!Array.isArray(a))? [a] : a;
	// shuffle the jar
	var s = shuffle(jar);
	// value, previous, output-array
	var v, p, arr = [];	
	for (var i=0; i<Math.max(1,len); i++){
		v = s.pop();
		if (v === undefined){
			s = shuffle(jar);
			v = s.pop();
			if (v === p) {
				v = s.pop();
				s.push(p);
			}
		}
		arr[i] = v;
		p = v;
	}
	return arr;
}
exports.pick = pick;


// Initialize a Markov Chain Model (One of the simpelest forms of ML)
// A Markov chain is a stochastic model describing a sequence 
// of possible events in which the probability of each event depends 
// only on the state of the previous (multiple) events.
// 
// @get chain -> return transition table from Markov
// @method clear() -> erase the transition table
// @method train() -> train the markov model
// @method seed() -> seed the random number generator (scoped RNG)
// @method axiom() -> set the initial value to start the chain
// @method next() -> generate the next value based state or set axiom
// @method chain() -> generate an array of values
// 
class MarkovChain {
	constructor(data){
		// transition probabilities table
		this._table = {};
		// train if dataset is provided
		if (data) { this.train(data) };
		// current state of markov chain
		this._state;
		// scoped random number generator
		this.rng = seedrandom();
	}
	get table(){
		// return copy of object
		return { ...this._table };
	}
	clear(){
		// empty the transition probabilities
		this._table = {};
	}
	train(a){
		if (!Array.isArray(a)){ 
			return console.error('Error: train() expected array but received:', typeof a);
		}
		// build a transition table from array of values
		for (let i=1; i<a.length; i++){
			if (!this._table[a[i-1]]) {
				this._table[a[i-1]] = [a[i]];
			} else {
				this._table[a[i-1]].push(a[i]);
			}
		}
	}
	seed(s){
		// set unpredictable seed if 0, null or undefined
		if (s === 0 || s === null || s === undefined){
			rng = seedrandom();
		} else {
			rng = seedrandom(s);
		}
	}
	state(a){
		// set the state
		if (!this._table[a]){
            console.error('Warning: state() value is not part of transition table');
		}
		this._state = a;
	}
	next(){
        // if the state is undefined or has no transition in table
        // randomly choose from all
		if (this._state === undefined || !this._table[this._state]){
			let states = Object.keys(this._table);
			this._state = states[Math.floor(rng() * states.length)]
		}
		// get probabilities based on state
		let probs = this._table[this._state];
		// select pseudorandomly next value
		this._state = probs[Math.floor(rng() * probs.length)];
		return this._state;
	}
	chain(l){
		// return an array of values generated with next()
		let c = [];
		for (let i=0; i<l; i++){
			c.push(this.next());
		}
		return c;
	}
}
exports.MarkovChain = MarkovChain;
},{"./gen-basic.js":37,"./utility.js":43,"seedrandom":29}],40:[function(require,module,exports){
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

const Mod = require('./transform');

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

// Return the biggest value from an array
// 
// @param {NumberArray} -> input array
// @return {Number} -> biggest value
// 
function maximum(a=[0]){
	if (!Array.isArray(a)) { return a; }
	let m = -Infinity;
	for (let i in a){
		m = (a[i] > Number(m))? a[i] : m;
	}
	return m;
}
exports.maximum = maximum;
exports.max = maximum;

// Return the lowest value from an array
// 
// @param {NumberArray} -> input array
// @return {Number} -> lowest value
// 
function minimum(a=[0]){
	if (!Array.isArray(a)) { return a; }
	let m = Infinity;
	for (let i in a){
		m = (a[i] < Number(m))? a[i] : m;
	}
	return m;
}
exports.minimum = minimum;
exports.min = minimum;

// Return the average (artihmetic mean value) from an array
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

// Return the median (center value) from an array
// The median is a measure of central tendency
// If array is even number of values the median is the
// average of the two center values
// Ignores other datatypes then Number and Boolean
// 
// @param {NumberArray} -> input array of n-numbers
// @return {Number} -> median
// 
function median(a=[0]){
	if (!Array.isArray(a)) { return a; }
	let arr = a.slice();
	if (arr.map(x => typeof x).includes('string')) { 
		arr = Mod.filterType(arr, ['number', 'boolean']);
	}
	arr = arr.sort((a,b) => { return a-b; });
	let c = Math.floor(arr.length/2);

	if (!(arr.length % 2)){
		return (arr[c] + arr[c-1]) / 2;
	}
	return arr[c];
}
exports.median = median;
exports.center = median;

// Returns the mode(s) (most common value) from an array
// The mode is a measure of central tendency
// Returns an array when multi-modal system
// 
// @param {NumberArray} -> input array of n-numbers
// @return {Number/Array} -> the mode or modes
//
function mode(a=[0]){
	if (!Array.isArray(a)) { return a; }
	let arr = a.slice().sort((a,b) => { return a-b; });

	let amount = 1;
	let streak = 0;
	let modes = [];

	for (let i=1; i<arr.length; i++){
		if (arr[i-1] != arr[i]){
			amount = 0;
		}
		amount++;
		if (amount > streak){
			streak = amount;
			modes = [arr[i]];
		} else if (amount == streak){
			modes.push(arr[i]);
		}
	}
	return modes;
}
exports.mode = mode;
exports.common = mode;
},{"./transform":41}],41:[function(require,module,exports){
//=======================================================================
// transform.js
// part of 'total-serialism' Package
// by Timo Hoogland (@t.mo / @tmhglnd), www.timohoogland.com
// MIT License
//
// Basic methods that can transform number sequences
// 
// 
// credits:
// - Many functions are based on Laurie Spiegel's suggestion to 
// "extract a basic "library" consisting of the most elemental 
// transformations which have consistently been successfully used on 
// musical patterns, a basic group of "tried-and-true" musical 
// manipulations.", in Manipulation of Musical Patterns (1981)
//=======================================================================

// require the Utility methods
// const Rand = require('./gen-stochastic');
const Stat = require('./statistic');
const Util = require('./utility');

// duplicate an array, but add an offset to every value
// 
// @param {Array} -> array to clone
// @param {Int, Int2, ... Int-n} -> amount of clones with integer offset
// 
function clone(a=[0], ...c){
	if (!c.length) { c = [0, 0]; }
	var arr = [];
	for (var i=0; i<c.length; i++){
		arr = arr.concat(a.map(v => v + c[i]));
	}
	return arr;
}
exports.clone = clone;

// combine arrays into one array
// multiple arrays as arguments possible
// 
// @params {Array0, Array1, ..., Array-n} -> Arrays to join
// @return {Array}
// 
function combine(...args){
	if (!args.length){ return [0]; }
	var arr = [];
	for (var i=0; i<args.length; i++){
		arr = arr.concat(args[i]);
	}
	return arr;
}
exports.combine = combine;
exports.join = combine;

// duplicate an array a certain amount of times
// 
// @param {Array} -> array to duplicate
// @param {Int} -> amount of output duplicates (optional, default=2)
// @return {Array}
// 
function duplicate(a=[0], d=2){
	var arr = [];
	for (var i=0; i<Math.max(1,d); i++){
		arr = arr.concat(a);
	}
	return arr;
}
exports.duplicate = duplicate;
exports.copy = duplicate;

// add zeroes to an array with a rhythmic sequence
// the division determins the amount of values per bar
// total length = bars * div
// 
// param {Array} -> Array to use every n-bars
// param {Int} -> amount of bars
// param {Int} -> amount of values per bar
// return {Array}
// 
function every(a=[0], bars=4, div=16, shift=0){
	let len = Math.floor(bars * div) - a.length;
	if (len < 1) { 
		return a; 
	} else {
		let arr = new Array(len).fill(0);
		return rotate(a.concat(arr), Math.floor(shift*div));
	}
}
exports.every = every;

// filter one or multiple values from an array
// 
// @param {Array} -> array to filter
// @param {Number/String/Array} -> values to filter
// @return (Array} -> filtered array
// 
function filter(a=[0], f){
	let arr = (Array.isArray(a))? a.slice() : [a];
	f = (Array.isArray(f))? f : [f];

	for (let i in f){
		let index = arr.indexOf(f[i]);
		while (index >= 0){
			arr.splice(index, 1);
			index = arr.indexOf(f[i]);
		}
	}
	return arr;
}
exports.filter = filter;

// filter one or multiple datatypes from an array
// In this case the input type is the type that is output
// 
// @param {Array} -> array to filter
// @param {String/Array} -> types to filter
// @return (Array} -> filtered array
// 
function filterType(a=[0], t){
	a = (Array.isArray(a))? a.slice() : [a];
	t = (Array.isArray(t))? t : [t];

	let types = a.map(x => typeof x);	
	let arr = [];
	for (let i in t){
		let index = types.indexOf(t[i]);
		while (index >= 0){
			arr.push(a[index]);
			a.splice(index, 1);
			types.splice(index, 1);
			index = types.indexOf(t[i]);
		}
	}
	return arr;
}
exports.filterType = filterType;

// invert a list of values by mapping the lowest value
// to the highest value and vice versa, flipping everything
// in between. 
// Second optional argument sets the center to flip values against. 
// Third optional argument sets a range to flip values against.
// 
// @param {Array} -> array to invert
// @param {Int} -> invert center / low range (optional)
// @param {Int} -> high range (optional)
// @return {Array}
// 
function invert(arr=[0], lo, hi){
	if (lo === undefined){
		hi = Math.max(...arr);
		lo = Math.min(...arr);
	} else if (hi === undefined){
		hi = lo;
	}
	return arr.slice().map(v => hi - v + lo);
}
exports.invert = invert;

// interleave two or more arrays
// 
// @param {Array0, Array1, ..., Array-n} -> arrays to interleave
// @return {Array}
//  
function lace(...args){
	if (!args.length){ return [0]; }

	var l = 0;
	for (let i in args){
		l = Math.max(args[i].length, l);
	}
	var arr = [];
	for (var i=0; i<l; i++){
		for (var k in args){
			let v = args[k][i];
			if (v != undefined){ arr.push(v); }
		}
	}
	return arr;
}
exports.lace = lace;

// merge all values of two arrays on the same index
// into a 2D array. preserves length of longest list
// 
// @params {Array0, Array1, ..., Array-n} -> Arrays to merge
// @return {Array}
// 
function merge(...args){
	if (!args.length){ return [0]; }
	var l = 0;
	for (let i in args){
		l = Math.max(args[i].length, l);
	}
	var arr = [];
	for (var i=0; i<l; i++){
		var a = [];
		for (var k in args){
			let v = args[k][i];
			if (v != undefined){ a.push(v); }
		}
		arr[i] = a;
	}
	return arr;
}
exports.merge = merge;

// reverse an array and concatenate to the input
// creating a palindrome of the array
// 
// @param {Array} -> array to make palindrome of
// @param {Bool} -> no-double flag (optional, default=false)
// @return {Array}
// 
function palindrome(arr=[0], noDouble=false){
	var rev = arr.slice().reverse();
	if (noDouble){
		rev = rev.slice(1, rev.length-1);
	}
	return arr.concat(rev);
}
exports.palindrome = palindrome;
exports.mirror = palindrome;

// reverse the order of items in an Array
// 
// @param {Array} -> array to reverse
// @return {Array}
// 
function reverse(a=[0]){
	return a.slice().reverse();
}
exports.reverse = reverse;

// rotate the position of items in an array 
// 1 = direction right, -1 = direction left
// 
// @param {Array} -> array to rotate
// @param {Int} -> steps to rotate (optional, default=0)
// @return {Array}
// 
function rotate(a=[0], r=0){
	var l = a.length;
	var arr = [];
	for (var i=0; i<l; i++){
		arr[i] = a[Util.mod((i - r), l)];
	}
	return arr;
}
exports.rotate = rotate;

// placeholder for the sort() method found in 
// statistic.js
// 
exports.sort = Stat.sort;

// spray the values of one array on the 
// places of values of another array if 
// the value is greater than 0
// 
// param {Array} -> array to spread
// param {Array} -> positions to spread to
// return {Array}
// 
function spray(values=[0], beats=[0]){
	var arr = beats.slice();
	var c = 0;
	for (let i in beats){
		if (beats[i] > 0){
			arr[i] = values[c++ % values.length];
		}
	}
	return arr;
}
exports.spray = spray;

// filter duplicate items from an array
// does not account for 2-dimensional arrays in the array
// 
// @param {Array} -> array to filter
// @return {Array}
// 
function unique(a=[0]){
	return [...new Set(a)];
}
exports.unique = unique;
},{"./statistic":40,"./utility":43}],42:[function(require,module,exports){
//==============================================================================
// translate.js
// part of 'total-serialism' Package
// by Timo Hoogland (@t.mo / @tmhglnd), www.timohoogland.com
// MIT License
//
// Methods to translate between midi, note-names, intervals and more
// 
// credits:
// - Using the amazing Tonal.js package by @danigb for various functions
//==============================================================================

// require API's
const { Note } = require('@tonaljs/tonal');
// require Scale Mappings
const Scales = require('../data/scales.json');
const ToneSet = require('../data/tones.json');

// global settings stored in object
var notation = {
	"scale" : "chromatic",
	"root" : "c",
	"rootInt" : 0,
	"map" : Scales["chromatic"],
	"bpm" : 120,
	"measureInMs" : 2000
}

// Return a dictionary with all the notational preferences:
// scale, root, map, bpm, measureInMs
// 
// @return -> Dictionary object
// 
function getSettings(){
	return { ...notation };
}
exports.getSettings = getSettings;

// Set the tempo to use for translating between values, default = 100. 
// Also calculates the length of a 4/4 measure in milliseconds
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
// 
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
// 
function setScale(s="chromatic", r){
	if (Scales[s]){
		notation.scale = s;
		if (r !== undefined) { setRoot(r); }
		notation.map = Scales[s];
	}
}
exports.setScale = setScale;

// returns the scale and root as object
// 
// @return {Object} -> the scale, root and rootInt
// @return {Void}
// 
function getScale(){
	return { 
		"scale" : getSettings().scale, 
		"root" : getSettings().root,
		"rootInt" : getSettings().rootInt };
}
exports.getScale = getScale;

// Set the root of a scale to use for mapping integer sequences
// 
// @param {Int/String} -> root of the scale (optional, default=c)
// @return {Void}
// 
function setRoot(r='c'){
	if (!isNaN(Number(r))){
		notation.rootInt = Math.floor(r);
		notation.root = Note.pitchClass(Note.fromMidi(notation.rootInt));
	} else if (r in ToneSet){
		notation.rootInt = ToneSet[r];
		notation.root = r;
	} else {
		console.log('not a valid root');
	}
}
exports.setRoot = setRoot;

// returns the root of the scale as String and integer
// 
// @return {Object} -> the scale and root
// @return {Void}
// 
function getRoot(){
	return { "root" : getSettings().root, "rootInt" : getSettings().rootInt };
}
exports.getRoot = getRoot;

/* WORK IN PROGRESS
// set a custom mapping for a non existing scale
// 
// @params {Array} -> array of length 12 containing semitones
// @return {Void}
// 
function setMapping(a){
	if (!Array.isArray(a) || a.length < 12){
		console.error("not an array or not long enough");
		a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	}
	notation.map = a.slice(0, 12);
	// a = (a !== undefined)? a : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
}
exports.setMapping = setMapping;*/

// returns an array of all available scale names
// 
// @return {Array} -> scale names
// 
function scaleNames(){
	return Object.keys(Scales);
}
exports.scaleNames = scaleNames;

/* WORK IN PROGRESS
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
exports.searchScales = searchScales;*/

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
// @param {Number/String} -> octave (optional, default=4)
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

// Convert a list of semitone intervals to frequency
// provide octave offset
// 
// @param {Number/Array} -> semitones
// @param {Number} -> octave (optional, default=4)
// @return {Number/Array}
// 
function relativeToFreq(a=0, o=4){
	o = (typeof o === 'string')? Note.midi(o) : o * 12;
	if (!Array.isArray(a)){
		console.log(Note.freq(Note.fromMidi(a + o)));
		return Note.freq(a + o);
	}
	return a.map(x => Note.freq(Note.fromMidi(x + o)));
}
exports.relativeToFreq = relativeToFreq;
exports.rtof = relativeToFreq;

// Map a list of relative semitone values to the selected
// scale set with setScale(). Preserves detuning when a 
// midi floating point value is used
// 
// @params {Array/Number} -> Array of relative semitones
// @return {Array/Number} -> mapped to scale
// 
function mapToScale(a=[0]){
	if (!Array.isArray(a)) return mapScale(a);
	return a.map(x => mapScale(x));
}
exports.mapToScale = mapToScale;
exports.toScale = mapToScale;

function mapScale(a){
	let d = a - Math.floor(a);
	let s = Math.floor(((a % 12) + 12) % 12);
	let o = Math.floor(a / 12);
	return notation.map[s] + o * 12 + d;
}

// Map an array of reletive semitone intervals to scale and 
// output in specified octave as midi value
// 
// @param {Array/Int} -> 
// @param {Int/String} -> octave 
// @return {Array/Int} -> mapped midi values
// 
function mapToMidi(a=[0], o=4){
	o = (typeof o === 'string')? Note.midi(o) : o * 12 + notation.rootInt;
	if (!Array.isArray(a)) return a + o;
	return a.map(x => mapScale(x) + o);
}
exports.mapToMidi = mapToMidi;
exports.toMidi = mapToMidi;

/* WORK IN PROGRESS
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
*/

// Convert a beat division value to milliseconds based on the global BPM
// eg. ['1/4', 1/8', '1/16'] => [500, 250, 125] @ BPM = 120
// 
// @param {Number/String/Array} -> beat division or ratio array
// @param {Number} -> set the BPM (optional, default=globalBPM)
// @return {Number/Array}
//
function divisionToMs(a=['1'], bpm){
	let measureMs = notation.measureInMs;
	if (bpm !== undefined) {
		measureMs = 60000.0 / Math.max(1, Number(bpm)) * 4;
	}
	let v = (!Array.isArray(a))? [a] : a; 
	return v.map(x => {
		// match all division symbols: eg. 1/4, 5/16
		let d = /^\d+(\/\d+)?$/;
		x = (typeof x === 'string' && d.test(x))? eval(x) : x;
		return x * measureMs;
	});
}
exports.divisionToMs = divisionToMs;
exports.dtoms = divisionToMs;

// Convert a beat ratio value to milliseconds based on the BPM
// eg. [0.25, 0.125, 0.0625] => [500, 250, 125] @ BPM = 120
// 
// @param {Number/String/Array} -> beat ratio array
// @return {Number/Array}
//
function divisionToRatio(a=['1']){
	let v = (!Array.isArray(a))? [a] : a; 
	return v.map(x => {
		// match all division symbols: eg. 1/4, 5/16
		let d = /^\d+(\/\d+)?$/;
		return (typeof x === 'string' && d.test(x))? eval(x) : x;
	});
}
exports.divisionToRatio = divisionToRatio;
exports.dtor = divisionToRatio;

// Convert a frequency ratio string to a corresponding cents value
// eq. ['2/1', '3/2'] => [1200, 701.95]
// 
// @param {Number/String/Array} -> ratios to convert
// @return {Number/Array} -> cents output
// 
function ratioToCent(ratio=['1/1']){
	let reg = /^[0-9]+(\/[0-9]+)?$/;
	let a = (!Array.isArray(ratio))? [ratio] : ratio;

	a = a.map(x => {
		if (typeof x === 'string' && reg.test(x)){
			x = eval(x);
		}
		return Math.log(x)/Math.log(2)*1200.0;
	});
	return (!Array.isArray(ratio))? a[0] : a;
}
exports.ratioToCent = ratioToCent;
exports.rtoc = ratioToCent;

//=======================================================================
// Scala class
// 
// Import a .scl file and convert to a JSON object. Use methods to 
// translate numbers into frequencies according to the settings of
// tune, center and the scala cents
//=======================================================================

// const fs = require('fs');
// const path = require('path');

// const TL = require('./translate.js');
// scala database from json
// const db = require('../data/scldb-min.json');

class Scala {
	constructor() {
		// the converted file to dictionary
		this.scl = {
			'description' : 'Divide an octave into 12 equal steps',
			'size' : 1,
			'tune' : 440,
			'center' :  69,
			'range' : 1200,
			'cents' : [ 0, 100, 200, 300, 400, 500, 
						600, 700, 800, 900, 1000, 1100 ]
		};
	}

	// get the current loaded scala data
	// 
	// @return {Object} -> Object with the loaded scala data
	// 
	get data(){
		return { ...this.scl };
	}

	// get the filenames from the database
	// 
	// @return {Array} -> array with all scala filenames
	// 
	get names(){
		const db = require('../data/scldb.json');
		return Object.keys(db);
	}

	// set the tuning in Hz for the center value
	// 
	// @param {Number} -> tuning in Hz
	// @return {Void}
	// 
	tune(v){
		if (isNaN(Number(v))){
			error(v + ' is not a number \n');
		} else {
			this.scl['tune'] = v;
		}
	}
	
	// set the center value corresponding with cent 0 and tuning frequency
	// 
	// @param {Int} -> center value as integer
	// @return {Void}
	// 
	center(v){
		if (isNaN(Number(v))){
			error(v + ' is not a number \n');
		} else {
			this.scl['center'] = v;
		}
	}

	// return the frequency from the scala corresponding to the input number
	// 
	// @params {Number/Array} -> Number to convert
	// @return {Number} -> Converted frequency
	// 
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
	// 
	// @params {Object} -> filter options in the format:
	// 					{ size: <Number/Array>, range: <Number>, 
	// 					  cents: <String/Array>, description: <String/Array> }
	// @return {Object -> All scala files matching the filter
	// 
	search(f){
		const db = require('../data/scldb.json');

		f = (typeof f !== 'undefined') ? f : {};
		f.size = (typeof f.size !== 'undefined') ? f.size : null;
		f.range = (typeof f.range !== 'undefined') ? f.range : null;
		f.cents = (typeof f.cents !== 'undefined') ? f.cents : null;
		// f.name = (typeof f.name !== 'undefined') ? f.name : null;
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

	// read and parse a filestring (best imported with fs.readFileSync for 
	// local usage or fetch() in the browser) to use in the scale
	// 
	// @params {String} -> text as string loaded from .scl file
	// @return {Void}
	// 
	parse(f){
		// read the file text in variable
		// let file = fs.readFileSync(f, 'utf8');
		// this.scl.name = path.parse(f).name;

		// remove linebreaks and split into array of lines
		let file = f.replace(/(\r\n|\n\r|\r|\n)/g, '\n').split('\n');
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
		this.scl['cents'] = this.scl.cents.sort((a, b) => {return a-b});
		// last value is width of "octave" (usually an octave of 1200)
		this.scl['range'] = this.scl.cents.pop();
	}

	// return an object with frequencies derived from the loaded scala
	// mapped to a specific range of values
	// 
	// @params {Int} -> high value for output range (optional, default=127)
	// @params {Int} -> low value for output range (optional, default=0)
	// @return {Object} -> Object with all values and corresponding frequency
	// 
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
exports.Scala = Scala;

},{"../data/scales.json":1,"../data/scldb.json":2,"../data/tones.json":3,"@tonaljs/tonal":25}],43:[function(require,module,exports){
//====================================================================
// utility.js
// part of 'total-serialism' Package
// by Timo Hoogland (@t.mo / @tmhglnd), www.timohoogland.com
// MIT License
//
// Utility functions
//====================================================================

const chart = require('asciichart');

const HALF_PI = Math.PI / 2.0;
const TWO_PI = Math.PI * 2.0;
const PI = Math.PI;

exports.HALF_PI = HALF_PI;
exports.TWO_PI = TWO_PI;
exports.PI = PI;

// Wrap a value between a low and high range
// Similar to mod, expect the low range is also adjustable
// 
// @param {Number/Array} -> input value
// @param {Number} -> minimum value optional, (default=12)
// @param {Number} -> maximum value optional, (default=0)
// @return {Number} -> remainder after division
// 
function wrap(a, lo=12, hi=0){
	// swap if lo > hi
	if (lo > hi){ var t=lo, lo=hi, hi=t; }
	// calculate range and wrap the values
	let r = hi - lo;
	if (!Array.isArray(a)){
		return (((a - lo % r) + r) % r) + lo;
	}
	return a.map(x => (((x - hi % r) + r) % r) + hi)
}
exports.wrap = wrap;

// Constrain a value between a low and high range
// 
// @param {Number/Array} -> number to constrain
// @param {Number} -> minimum value (optional, default=12)
// @param {Number} -> maximum value (optional, default=0)
// @return {Number} -> constrained value
// 
function constrain(a, lo=12, hi=0){
	// swap if lo > hi
	if (lo > hi){ var t=lo, lo=hi, hi=t; }
	// constrain the values
	if (!Array.isArray(a)){
		return Math.min(hi, Math.max(lo, a));
	}
	return a.map(x => Math.min(hi, Math.max(lo, x)));
}
exports.constrain = constrain;
exports.bound = constrain;

// Fold a between a low and high range
// When the value exceeds the range it is folded inwards
// Has the effect of "bouncing" against the boundaries
// 
// @param {Number/Array} -> number to fold
// @param {Number} -> minimum value (optional, default=12)
// @param {Number} -> maximum value (optional, default=0)
// @return {Number} -> folder value
// 
function fold(a, lo=12, hi=0){
	// swap if lo > hi
	if (lo > hi){ var t=lo, lo=hi, hi=t; }
	// fold the values
	if (!Array.isArray(a)){
		return _fold(a, lo, hi);
	}
	return a.map(x => _fold(x, lo, hi));
}
exports.fold = fold;
exports.bounce = fold;

function _fold(a, lo, hi){
	a = _map(a, lo, hi, -1, 1);
	a = Math.asin(Math.sin(a * HALF_PI)) / HALF_PI;
	return _map(a, -1, 1, lo, hi);
}

// Map/scale a value or array from one input-range 
// to a given output-range
// 
// @param {Number/Array} -> value to be scaled
// @param {Number} -> input low
// @param {Number} -> input high
// @param {Number} -> output low
// @param {Number} -> output high
// @param {Number} -> exponent (optional, default=1)
// @return {Number/Array}
// 
function map(a, ...params){
	if (!Array.isArray(a)){
		return _map(a, ...params);
	}
	return a.map(x => _map(x, ...params));
}
exports.map = map;
exports.scale = map;

function _map(a, inLo=0, inHi=1, outLo=0, outHi=1, exp=1){
	a = (a - inLo) / (inHi - inLo);
	if (exp != 1){
		var sign = (a >= 0.0) ? 1 : -1;
		a = Math.pow(Math.abs(a), exp) * sign;
	}
	return a * (outHi - outLo) + outLo;
}

// add 1 or more values to an array, 
// preserves listlength of first argument
// arguments are applied sequentially
// 
// @param {Number/Array} -> input to be added to
// @param {Number/Array} -> value to add
// @return {Number/Array}
// 
function add(a, v=0){
	if (Array.isArray(v)){
		a = (Array.isArray(a))? a : [a];
		let l1 = a.length, l2 = v.length, r = [];
		let l = Math.max(l1, l2);
		for (let i=0; i<l; i++){
			r[i] = a[i % l1] + v[i % l2];
		}
		return r;
	}
	if (!Array.isArray(a)){
		return a + v;
	}
	return a.map(x => x + v);
}
exports.add = add;

// subtract 1 or more values from an array
// preserves listlength of first argument
// arguments are applied sequentially
// 
// @param {Number/Array} -> input to be subtracted from
// @param {Number/Array} -> value to subtract
// @return {Number/Array}
// 
function subtract(a, v=0){
	if (Array.isArray(v)){
		a = (Array.isArray(a))? a : [a];
		let l1 = a.length, l2 = v.length, r = [];
		let l = Math.max(l1, l2);
		for (let i=0; i<l; i++){
			r[i] = a[i % l1] - v[i % l2];
		}
		return r;
	}
	if (!Array.isArray(a)){
		return a - v;
	}
	return a.map(x => x - v);
}
exports.subtract = subtract;
exports.sub = subtract;

// multiply 1 or more values from an array
// preserves listlength of first argument
// arguments are applied sequentially
// 
// @param {Number/Array} -> input to be multiplied
// @param {Number/Array} -> value to multiply with
// @return {Number/Array}
// 
function multiply(a, v=1){
	if (Array.isArray(v)){
		a = (Array.isArray(a))? a : [a];
		let l1 = a.length, l2 = v.length, r = [];
		let l = Math.max(l1, l2);
		for (let i=0; i<l; i++){
			r[i] = a[i % l1] * v[i % l2];
		}
		return r;
	}
	if (!Array.isArray(a)){
		return a * v;
	}
	return a.map(x => x * v);
}
exports.multiply = multiply;
exports.mul = multiply;

// divide 1 or more values from an array
// preserves listlength of first argument
// arguments are applied sequentially
// 
// @param {Number/Array} -> input to be divided
// @param {Number/Array} -> value to divide with
// @return {Number/Array}
// 
function divide(a, v=1){
	if (Array.isArray(v)){
		a = (Array.isArray(a))? a : [a];
		let l1 = a.length, l2 = v.length, r = [];
		let l = Math.max(l1, l2);
		for (let i=0; i<l; i++){
			r[i] = a[i % l1] / v[i % l2];
		}
		return r;
	}
	if (!Array.isArray(a)){
		return a / v;
	}
	return a.map(x => x / v);
}
exports.divide = divide;
exports.div = divide;

// Return the remainder after division
// also works in the negative direction
// 
// @param {Int/Array} -> input value
// @param {Int/Array} -> divisor (optional, default=12)
// @return {Int/Array} -> remainder after division
// 
function mod(a, mod=12){
	if (Array.isArray(mod)){
		a = (Array.isArray(a))? a : [a];
		let l1 = a.length, l2 = mod.length, r = [];
		let l = Math.max(l1, l2);
		for (let i=0; i<l; i++){
			let m = mod[i % l2];
			r[i] = ((a[i % l1] % m) + m) % m;
		}
		return r;
	}
	if (!Array.isArray(a)){
		return ((a % mod) + mod) % mod;
	}
	return a.map(x => ((x % mod) + mod) % mod);
}
exports.mod = mod;

// Plot an array of values to the console in the form of an
// ascii chart and return chart from function. If you just want the 
// chart returned as text and not log to console set { log: false }.
// Using the asciichart package by x84. 
// 
// @param {Number/Array/String} -> value to plot
// @param {Object} -> { log: false } don't log to console and only return
//                 -> { data: true } log the original array data
//                 -> { decimals: 2 } adjust the number of decimals
//                 -> { height: 10 } set a fixed chart line-height
//                 -> other preferences for padding, colors, offset
//                    See the asciichart documentation
// 
function plot(a=[0], prefs){
	// if a is not an Array
	a = (Array.isArray(a)) ? a : [a]; 
	// empty object if no preferences
	prefs = (typeof prefs !== 'undefined') ? prefs : {};

	prefs.log = (typeof prefs.log !== 'undefined') ? prefs.log : true;
	prefs.data = (typeof prefs.data !== 'undefined') ? prefs.data : false;
	prefs.decimals = (typeof prefs.decimals !== 'undefined') ? prefs.decimals : 2;

	let p = chart.plot(a, prefs);
	if (prefs.data){
		console.log('chart data: [', a.map(x => x.toFixed(prefs.decimals)).join(", "), "]\n");
	}
	if (prefs.log){
		console.log(chart.plot(a, prefs), "\n");
	}
	return p;
}
exports.plot = plot;
},{"asciichart":26}]},{},[4])(4)
});
