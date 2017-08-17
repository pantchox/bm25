var assert = require('assert');
var docLen = require("../app/view/lib/doc_len.js");
var vsm = require("../app/view/corpus2vsm.js");
var Bm25 = require("../app/controller/bm25.js");

describe('Build a small test corpus, and test the IDF fcn. Also test its helper fcn.', function() {
    before(function() {
      // Declare a sample corpus.
      sampMatr = [['uk','gramophone','gramophone','discussion'],
      				    ['gramophone','into','general','discussion','into','into']];

      // What the outcome document dicts will look like for this sample corpus.
      var doc1 = {'uk': 1,
                  'gramophone': 2,
                  'discussion': 1};
      var doc2 = {'gramophone': 1,
                  'into': 3,
                  'general': 1,
                  'discussion': 1};
      vsmObj = {'docLens': [0.8, 1.2],
                'docs': [doc1, doc2]};

      // What the outcome document dicts will look like for this sample corpus.
      bm = new Bm25(sampMatr);

    });

    it('should compute vector of document lengths', function(){
      assert.deepStrictEqual([0.8, 1.2], docLen(sampMatr));
    });

    it('should compute a Vector Space Object from a corpus', function(){
      assert.deepStrictEqual(vsmObj, vsm(sampMatr));
    });

    // it('should compute the IDF of each word in that vocabulary', function(){
    //   // assert.deepStrictEqual(idf, idfMap(corpus));
    // });
});
