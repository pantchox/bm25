/*DOCSTRING convert raw data to vector space attributes*/

const tfMaps = require("./tf/TF_maps.js");
const relDocLengths = require("./doc_len/doc_len.js");

module.exports = (function()
{
  return function(corpusMatr)
		{
			return {docLens: relDocLengths(corpusMatr),
					    docs: tfMaps(corpusMatr)};
		};
})();
