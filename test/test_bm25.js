var assert = require('assert');
var docLen = require("../app/view/doc_len/doc_len.js");

describe('Build a small test corpus, and test the IDF fcn. Also test its helper fcn.', function() {
    before(function() {
      // Declare a sample corpus.
      sampMatr = [['http','www','gramophone','co'],
      				['uk','forum','general', 'discussion','i','just','cant','get','into','bruckner']];

    });

    it('should compute vector of document lengths', function(){
      assert.deepStrictEqual([0.571, 1.43], docLen(sampMatr));
    });

    // it('should compute the IDF of each word in that vocabulary', function(){
    //   // assert.deepStrictEqual(idf, idfMap(corpus));
    // });
});
