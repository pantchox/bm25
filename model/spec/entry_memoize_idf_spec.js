/*DOCSTRING: test memoize_idf.js on array of term frequencies.*/
var memoizeIdf = require("../memoize_idf.js");

var tfMaps2 = [{"improv":1,"languag":3,"model":1,"examin":1,"cs":1,},
			  {"improv":2,"pdf":1,"cs":1},
			  {"model":1,"cs":4}];

var cache2 = memoizeIdf(tfMaps2);
console.log(cache2);

// cs: 0
// examin: 1.0986122886681096
// improv: 0.4054651081081644
// languag: 1.0986122886681096
// model: 0.4054651081081644
// pdf: 1.0986122886681096

//{improv, languag, model, examin, cs, pdf}

/*
Term	Freq	Idf
improv	2	0.405465108
languag	1	1.098612289
model	2	0.405465108
examin	1	1.098612289
cs		3	0
pdf		1	1.098612289
*/

// Print the "vocabulary set" of the sample corpus given above.
// document.write('<br>vocabularySet - The set of all words seen in corpus:<br>');
// bmInstance._getVocabulary().forEach(function(value) {
//     document.write(value);
//     document.write('<br>');
//   });
//
// var idfCS = bmInstance._idf('cs');
// console.log(idfCS);
// var idf_improv = bmInstance._idf('improv');
// console.log(idf_improv);
