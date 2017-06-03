/*DOCSTRING: test doc_len.js on a 2d-array (matrix) of terms.*/
var docLen = require("../doc_len.js");

// Declare a sample corpus.
var sampMatr = [['http','www','gramophone','co'],
				['uk','forum','general', 'discussion','i','just','cant','get','into','bruckner']];

console.log(docLen(sampMatr));// docLen(sampMatr) = [57.1%, 143%]