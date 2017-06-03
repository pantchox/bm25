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

	/*DOCSTRING: test doc_len.js on a 2d-array (matrix) of terms.*/
	var docLen = __webpack_require__(1);

	// Declare a sample corpus.
	var sampMatr = [['http','www','gramophone','co'],
					['uk','forum','general', 'discussion','i','just','cant','get','into','bruckner']];

	console.log(docLen(sampMatr));// docLen(sampMatr) = [57.1%, 143%]

/***/ },
/* 1 */
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