/*DOCSTRING: test all fncs in bm25_weight.js on array of term frequencies.*/
var docs2vocabSet = require("../vocab.js");

// Declare a sample corpus.
var tfMaps = [{"improv":1,"languag":3,"model":1,"examin":1,"cs":1,},
			  {"improv":2,"pdf":1,"cs":1},
			  {"model":1,"cs":4}];
// console.log(tfMaps);

var uniqTerms = docs2vocabSet(tfMaps.map(Object.keys, Object));
console.log(uniqTerms);
//{improv, languag, model, examin, cs, pdf}