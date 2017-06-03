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

	/*DOCSTRING: test all fncs in bm25_weight.js on array of term frequencies.*/
	var docs2vocabSet = __webpack_require__(1);

	// Declare a sample corpus.
	var tfMaps = [{"improv":1,"languag":3,"model":1,"examin":1,"cs":1,},
				  {"improv":2,"pdf":1,"cs":1},
				  {"model":1,"cs":4}];
	// console.log(tfMaps);

	var uniqTerms = docs2vocabSet(tfMaps.map(Object.keys, Object));
	console.log(uniqTerms);
	//{improv, languag, model, examin, cs, pdf}

/***/ },
/* 1 */
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


/***/ }
/******/ ]);