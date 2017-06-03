/*DOCSTRING
test TF-IDF functions from tf_idf.js*/

/**
* 0. test TermFreqVectorizer
*/
// Define sample input corpus, pass to the arrToDict function.
var corpus = [["over", "great", "demesne", "Buck", "ruled"],
              ["Buck", "house", "dog", "kennel", "dog"]];

// Define sample input corpus, pass to the arrToDict function.
var TFvectorizer = new TermFreqVectorizer(corpus);

document.write('<br><br>4. TFvectorizer (returns an object with 2 properties)'.bold())
document.write('<br>vocabularySet - The set of all words seen in corpus:<br>');
TFvectorizer.vocabularySet.forEach(function(value) {
    document.write(value);
    document.write('<br>');
  });

document.write('<br>termFreqCorpus - a hashmap where each value is a term-frequency \
hashmap:<br>' + JSON.stringify(TFvectorizer.termFreqCorpus));

/**
* 3. test makeRowVector
*/
document.write("<br><br> tfidf row vector: <br>");
var rowVec = TFvectorizer.makeRowVector(docIdx=1);
rowVec.forEach(function(value) {
    document.write(value);
    document.write('<br>');
  });
//should equal:
// 0
// 0
// 0
// 1
// 0
// 1.69
// 3.39
// 1.69

/**
* 4. test makeDocTermMatrix
*/
var docTermMat = TFvectorizer.makeDocTermMatrix();
console.log(docTermMat);
// [[1.69, 1.69, 1.69, 1, 1.69, 0,    0,    0]
//  [0,    0,    0,    1, 0,    1.69, 3.39, 1.69]]

/**
 * test tallyTermFreq
 */
var documentArr = ["Buck", "house", "dog", "kennel", "dog"];
var termFreq = documentArr.reduce(TextProcessor.tallyTermFreq, {});
document.write('<br><br>3. tallyTermFreq (term-frequency of previous \
  array):<br>'.bold() + JSON.stringify(termFreq));

/**
* test tf
*/
// document.write('<br>')
// document.write('<br>=====tf=====')
// document.write("<br>'over', 'page1':   " + vectorizer.tf(term='over', 'page1'));
// document.write("<br>'Buck', 'page2':   " + vectorizer.tf(term='Buck', 'page2'));
// document.write("<br>'dog', 'page2':   " + vectorizer.tf(term='dog', 'page2'));
// document.write("<br>'kennel', 'page1':   " + vectorizer.tf(term='kennel', 'page1'));
//
// /**
// * test idf
// */
// document.write('<br>')
// document.write('<br>=====idf=====')
// document.write("<br>'over':   " + vectorizer.idf(term='over'));
// document.write("<br>'Buck':   " + vectorizer.idf(term='Buck'));
// document.write("<br>'dog':   " + vectorizer.idf(term='dog'));
// document.write("<br>'kennel':   " + vectorizer.idf(term='kennel'));
