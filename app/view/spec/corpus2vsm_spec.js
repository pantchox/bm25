/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*DOCSTRING: test corpus2vsm.js on a 2d-array (matrix) of terms.*/
	var vsm = __webpack_require__(1);

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


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*DOCSTRING convert raw data to vector space attributes*/

	const tfMaps = __webpack_require__(2);
	const relDocLengths = __webpack_require__(3);

	module.exports = (function()
	{
	  return function(corpusMatr)
			{
				return {relDLs: relDocLengths(corpusMatr),
						docs: tfMaps(corpusMatr)};
			};
	})();


/***/ },
/* 2 */
/***/ function(module, exports) {

	var termCountVectorizerModule = (function()
	{
	  /**
	   * 1. Callback fcn taking an array (i.e. document) element; tallies how many times each term (element) is
	   * found in document.
	   */
	  function tallyTermFreq(runningCountTable, curTerm){
	    if(curTerm in runningCountTable){
	      runningCountTable[curTerm]++;// current term is found in collection of previous terms.
	    }
	    else{
	      runningCountTable[curTerm] = 1;
	    }
	    return runningCountTable;
	  }

	  return function(corpus)//convert an input corpus to an array of term-freq dicts
	        {
	          return corpus.map(function(document)
	          {
	            return document.reduce(tallyTermFreq, new Map());
	          });
	        };
	})();
	module.exports = termCountVectorizerModule;


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*DOCSTRING: Build an array of the relative length of each document in a corpus.*/
	module.exports = (function()
	{
		/**
		 * For a given matrix, find each row's length, and return these lengths as an array.
		 */
		return function(matr) 
			    {
			    	let docLengths = matr.map(row => row.length);
			    	let avDocLength = _.sum(docLengths) / matr.length;	// use the _.sum fcn of Lodash
			    	return docLengths.map(docLength => docLength / avDocLength)
			    };
	})();


/***/ }
/******/ ]);