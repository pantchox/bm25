/*DOCSTRING: test corpus2vsm.js on a 2d-array (matrix) of terms.*/
var vsm = require("../corpus2vsm.js");

// Declare a sample corpus.
var sampMatr = [['http','www','www','gramophone'],
				['gramophone'],
				['uk','uk','forum','bruckner', 'discussion','gramophone'],
				['http','just','cant','bruckner','bruckner','bruckner']];
var vecSpaceObj = vsm(sampMatr)

document.write(JSON.stringify(vecSpaceObj, null, '\n'));
//SHOULD PRINT:
// {"relDLs": [ 0.9411, 0.2352, 1.4117, 1.4117], 
// "docs": [ { "http": 1, "www": 2, "gramophone": 1 },
//     { "gramophone": 1 }, 
//    { "uk": 2, "forum": 1, "bruckner": 1, "discussion": 1, "gramophone": 1 }, 
//    { "http": 1, "just": 1, "cant": 1, "bruckner": 3 } ] }
