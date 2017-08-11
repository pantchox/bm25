var _ = require(lodash);

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
