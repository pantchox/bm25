/*DOCSTRING
Collection of static methods to compute TF-IDF from NLP, including:
  1. tfidf - calculate the tf * idf for a given term document pair*/

/**
 * CONSTRUCTOR
 * Creates term-frequency hashtables based on input array of term tokens; each TermFreqVectorizer object
 * comes with methods to compute its Term-Frequency-Inverse-Document-Frequency weight.
 * @param {Array} corpusArr
 * @property {Object} this.termFreqCorpus
 */
var TermFreqVectorizer = function(corpusArr, termFreqCorpus = [], vocabularyArr = [])
{
  //Callback fcn taking an array (i.e. document) element; tallies how many times each term (element) is found in document.
  var tallyTermFreq = function(runningCountTable, curTerm){
    if(curTerm in runningCountTable){// current term is found in collection of previous terms.
      runningCountTable[curTerm]++;
    }
    else{
      runningCountTable[curTerm] = 1;
    }
    return runningCountTable;
  };

  corpusArr.forEach(function(tokenArr){
     termFreqCorpus.push( tokenArr.reduce(tallyTermFreq, {}) ); // array of TF's
     vocabularyArr.push.apply(vocabularyArr, tokenArr); // concat arrays before deleting dups using Set
  });

  this.termFreqCorpus = termFreqCorpus;
  this.vocabularySet = new Set(vocabularyArr);
};

/**
 * METHODS
 */
TermFreqVectorizer.prototype = function()
{  /**
   * 1. tf: Calculate the Term-Frequency Associative Array of a given string term.*/
  var tf = function(term, docIdx)
  {
    var docObj = this.termFreqCorpus[docIdx];
    if(!docObj.hasOwnProperty(term)) // if term NOT in docObj
      return 0;
    return docObj[term];
  };

  /**
   * 2. idf(term): Total No. of Documents / No. of Documents Containing the Term.
   */
  var idf = function(term)
  {
    var numerator = Object.keys(this.termFreqCorpus).length;
    var denominator = 0;
    // iterate over docs in corpus and increment by 1 if term is seen in a given doc
    for(let docKey in this.termFreqCorpus)
    {
      if(this.termFreqCorpus.hasOwnProperty(docKey))
      {
        denominator += ( this.termFreqCorpus[docKey].hasOwnProperty(term) ? 1 : 0 );
      }
    }
    return 1 + Math.log(numerator / denominator);
  };

  /**
  * 3. Build row vector of doc-term matrix (i.e. array) by calling tf, idf
  */
  var makeRowVector = function(docIdx, terms = this.vocabularySet)
  {
    var rowVector = new Array(terms.size);
    var i = 0;
    for(let term of terms)
    {
      rowVector[i] = this.tf(term, docIdx) * this.idf(term);
      i++;
    }
    return rowVector;
  };

  /**
  * 4. Build doc-term matrix (i.e. array of arrays) by calling makeRowVector
  */
  var makeTfidfMatrix = function()
  {
    var docTermMatrix = new Array(this.termFreqCorpus.length);
    for(let docIdx = 0; docIdx < this.termFreqCorpus.length; docIdx++)
    {
      docTermMatrix[docIdx] = this.makeRowVector(docIdx);
    }
    return docTermMatrix;
  };

  return {tf: tf,
          idf: idf,
          makeRowVector: makeRowVector,
          makeTfidfMatrix: makeTfidfMatrix};
}();
// module.exports = TermFreqVectorizer;
