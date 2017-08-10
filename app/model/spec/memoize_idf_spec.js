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

	/*DOCSTRING: test memoize_idf.js on array of term frequencies.*/
	var memoizeIdf = __webpack_require__(1);

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


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*DOCSTRING Compute bm25*/
	const vocab = __webpack_require__(2);
	const idf = __webpack_require__(3);

	module.exports = (function()
	{
	  return function(tfMaps)
	        {
	          // Use .map to iterate over the tfMaps; Object.keys pulls just the unique terms;
	          // vocab() takes the set union over all these arrays.
	          var uniqTerms = vocab(tfMaps.map(Object.keys, Object));

	          var idfMap = new Map(); // Initialize the Map object to hold the vocabulary
	          //set along with each term's corresponding idf weight.

	          uniqTerms.forEach(function(term)
	          {
	            idfMap[term] = idf(term, tfMaps);
	          });

	          return idfMap;
	        };
	})();

	/**
	 * Find the vocabulary set of a corpus, represented as a vector of term-freq mappings.
	 * @return {Set} the set of words seen in the corpus.
	 */
	// var __getVocabulary = function(tfMaps)
	// {
	//   // Use .map to iterate over the tfMaps; Object.keys pulls just the unique terms;
	//   // vocab() takes the set union over all these arrays.
	//   return vocab(tfMaps.map(Object.keys, Object));
	// };
	// var Bm25Vectorizer = function(termCountMaps)
	// {
	//   this._termCountMaps = termCountMaps; //private attribute
	// };
	/**
	 * Compute hashmap of vocabulary to its idf weight.
	 */
	// Bm25Vectorizer.prototype.calcIdfMap = function()
	// {
	//   var idfMap = new Map();
	//   __getVocabulary(this._termCountMaps).forEach(function(term){
	//     idfMap[term] = idf(term, this._termCountMaps);
	//   }, this);
	//   return idfMap;
	// };


/***/ },
/* 2 */
/***/ function(module, exports) {

	/*DOCSTRING: HELPER FUNCTION to Compute the unique vocabulary set of a corpus.*/
	module.exports = (function()
	{
	  Set.prototype.__arrUnion = function(arr)
	  {
	    arr.forEach(this.add, this); //'this' refers to the Set that called the method here.
	  }

	  return function(matr) // For a given 2D array, returns the set union of its elements.
	         {
	          var unionOfVector = new Set();
	          matr.forEach(unionOfVector.__arrUnion, unionOfVector); //union in-place
	          return unionOfVector;
	         };

	})();


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*DOCSTRING: Fcn to compute the inverse document frequency of some input term.*/
	module.exports = (function()
	{
	  /**
	   * Calc idf by looping over docs in corpus; tallying the number of docs the given term appears in.
	   * @param  {String} term
	   * @param  {Array} termFreqMaps
	   * @return {Number} the inverse document frequency of the input term
	   */
	  return function(term, termFreqMaps)
	         {
	          var numDocs = termFreqMaps.length;
	          var docsAppear = 0;
	          for(let i in termFreqMaps)
	          {
	            // loop over docs in corpus, increment by 1 if term is seen in a given doc
	            docsAppear += ( termFreqMaps[i].hasOwnProperty(term) ? 1 : 0 );
	          }
	          //Add 1 to log to shift log curve above 0 so that terms are guaranteed strictly positive weight.
	          //Add 1 in denominator to prevent division by 0 when a term doesn't appear in a document.
	          return 1 + Math.log(numDocs / (1 + docsAppear));
	         };
	})();


/***/ }
/******/ ]);