/*DOCSTRING Compute bm25*/
const vocab = require("./vocab/vocab.js");
const idf = require("./idf/idf.js");

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
