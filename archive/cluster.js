// const km = require("./figue.js");
/**
* 1. Apply the Elbow Approach to estimate optimal k for k-means.
* try k = 2, 10
*/
var findOptimK = function(docTermMatr)
{
  var clusters = figue.kmeans(k, docTermMatr);

};

// Define sample input corpus, pass to the arrToDict function.
// var corpus = {page1: ["over", "great", "demesne", "Buck", "ruled"],
//               page2: ["Buck", "house", "dog", "kennel", "dog"]};
// var termDocDict = arrToDict(corpus, TextProcessor.tallyTermFreq);
// var vectorizer = new TermFreqVectorizer(termDocDict);
// var docTermMat = vectorizer.makeDocTermMatrix();
// var clusters = figue.kmeans(2, docTermMat);
// console.log(docTermMat);
// console.log(clusters);
