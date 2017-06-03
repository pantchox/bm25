/*DOCSTRING
Collection of static methods to compute TF-IDF from NLP, including:
  1. tfidf - calculate the tf * idf for a given term document pair*/

  // var tfCorpus = {page1: {over: 1,
  //                       great: 1,
  //                        Buck: 1,
  //                       ruled: 1},
  //               page2: {Buck: 1,
  //                       house: 1,
  //                       dog: 2,
  //                       kennel: 1}};
  var data = [
      {'company': 'Microsoft' , 'size': 91259, 'revenue': 60420},
      {'company': 'IBM' , 'size': 400000, 'revenue': 98787},
      {'company': 'Skype' , 'size': 700, 'revenue': 716},
      {'company': 'SAP' , 'size': 48000, 'revenue': 11567},
      {'company': 'Yahoo!' , 'size': 14000 , 'revenue': 6426 },
      {'company': 'eBay' , 'size': 15000, 'revenue': 8700},
   ] ;
  var vectors = [];
  for (var i = 0; i < data.length; i++)
  {
      vectors[i] = [ data[i]['size'] , data[i]['revenue']] ;
  }
