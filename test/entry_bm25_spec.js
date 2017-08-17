/*DOCSTRING: test memoize_idf.js on array of term frequencies.*/
var Bm25 = require("../bm25.js");

// Declare a sample corpus.
var sampMatr = [['http','www','www','gramophone'],
								['gramophone'],
								['uk','uk','forum','bruckner', 'discussion','gramophone'],
								['http','just','cant','bruckner','bruckner','bruckner']];
var bm = new Bm25(sampMatr);

// var bm25row = bm.buildRow(1);
// console.log(bm25row);

var bm25matr = bm.buildMatr();
console.log(bm25matr);

// console.log(JSON.stringify(bm, null, 4));
/*
{
    "relDLs": [
        0.9411764705882353,
        0.23529411764705882,
        1.411764705882353,
        1.411764705882353
    ],
    "docs": [
        {
            "http": 1,
            "www": 2,
            "gramophone": 1
        },
        {
            "gramophone": 1
        },
        {
            "uk": 2,
            "forum": 1,
            "bruckner": 1,
            "discussion": 1,
            "gramophone": 1
        },
        {
            "http": 1,
            "just": 1,
            "cant": 1,
            "bruckner": 3
        }
    ],
    "idfMap": {
        "http": 0.6931471805599453,
        "www": 1.3862943611198906,
        "gramophone": 0.28768207245178085,
        "uk": 1.3862943611198906,
        "forum": 1.3862943611198906,
        "bruckner": 0.6931471805599453,
        "discussion": 1.3862943611198906,
        "just": 1.3862943611198906,
        "cant": 1.3862943611198906
    }
}
*/
