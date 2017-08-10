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
	var Bm25 = __webpack_require__(1);

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


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*DOCSTRING Compute bm25*/
	const memoizeIdf = __webpack_require__(2);
	const vsmObj = __webpack_require__(5);

	module.exports = (function()
	{

		// function tf(doc, term)
		// {
		// 	doc.hasOwnProperty(term);
		// 	return doc[term];
		// }

		/**
		 * Function applying the BM25 formula to key parameters.
		 */
		function bm25formula(tf, idf, relDL, K=1.6, B=0.75)
		{
			let verbose = (B * relDL) + 1 - B;
			let tfSaturate = tf / (K * verbose + tf);
			return idf * tfSaturate; // computes the bm25 weight using its formula
		}

		//CONSTRUCTOR
		var Bm25 = function(corpusMatr)
		{
			let vecSpaceObj = vsmObj(corpusMatr);
			this.docLens = vecSpaceObj.docLens;
			this.docs = vecSpaceObj.docs;
			this.idfMap = memoizeIdf(this.docs)
			this.terms = Object.keys(this.idfMap);
		}
		//METHODS
		Bm25.prototype.buildRow = function(docIdx)
		{
			// console.log(this.docLens);
			return this.terms.map(function(term)
														{
															let docLen = this.docLens[docIdx];
															let tf = this.docs[docIdx][term] || 0;
															let idf = this.idfMap[term];
															return bm25formula(tf, idf, docLen);
														}, this);

	 	};

		Bm25.prototype.buildMatr = function()
		{
			let bmMatr = new Array(this.docs.length);
			for(let i = 0; i < this.docs.length; i++)
			{
				bmMatr[i] = this.buildRow(i);
			}
			return bmMatr;
		};

	// Bm25.prototype.buildMatr = function()
	// {
	// 	let bmMatr = new Array(this.docs.length);
	// 	for(const docIndex of this.docs)
	// 	{
	// 		buildRow(term, docIdx)
	// 	}
	// 	return bmMatr;
	// };

	  return Bm25;
	})();


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*DOCSTRING Compute bm25*/
	const vocab = __webpack_require__(3);
	const idf = __webpack_require__(4);

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
/* 3 */
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
/* 4 */
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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*DOCSTRING convert raw data to vector space attributes*/

	const tfMaps = __webpack_require__(6);
	const relDocLengths = __webpack_require__(7);

	module.exports = (function()
	{
	  return function(corpusMatr)
			{
				return {docLens: relDocLengths(corpusMatr),
						    docs: tfMaps(corpusMatr)};
			};
	})();


/***/ },
/* 6 */
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
	            return document.reduce(tallyTermFreq, {});
	          });
	        };
	})();
	module.exports = termCountVectorizerModule;


/***/ },
/* 7 */
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