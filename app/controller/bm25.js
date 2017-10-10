/*DOCSTRING Compute bm25*/
const memoizeIdf = require("../../node_modules/idf");
const vsmObj = require("../view/corpus2vsm.js");
const bm25formula = require("../model/bm25formula.js");

module.exports = (function()
{
	//CONSTRUCTOR
	var Bm25 = function(corpusMatr)
	{
		let vecSpaceObj = vsmObj(corpusMatr);
		this.docLens = vecSpaceObj.docLens;
		this.docs = vecSpaceObj.docs;
		this.idfMap = memoizeIdf(this.docs);
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

  return Bm25;
})();
