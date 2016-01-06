/*
*
* Bayes Classifier
* News classification by using svm.
*
* Author: Mehmet Tamtürk
* Date: 6 January 2016
*
*/

var fs = require('fs');
var classifier = require('classifier');
var bayes = new classifier.Bayesian();


/* News */
var sports = JSON.parse(fs.readFileSync('data/sport.json', 'utf8'));
var economics = JSON.parse(fs.readFileSync('data/economics.json', 'utf8'));


sports.forEach(function(sport) {
    bayes.train(sport, 'spor');
});

economics.forEach(function(economic) {
    bayes.train(economic, 'ekonomi');
});

var texts = [
    "Borsa değer kaybetmeye devam ediyor.",
    "Dolar bu gelişmelerin etkisiyle 3 barajını geçebilir.",
    "Beşiktaş kaleci transfer etti.",
    "Borsa günün ilk yarısında yüzde 0,51’lik düşüşle sürekli müzayede işlemlerine verilen araya girdi."
];

//console.log(bayes.backend.wordCounts)

console.log('-----------------------------------------------');

texts.forEach(function(text) {
    console.log("| " + text + " ==> " + bayes.classify(text));
});

console.log('-----------------------------------------------');



/*

OUTPUT:

-----------------------------------------------
| Borsa değer kaybetmeye devam ediyor. ==> ekonomi
| Dolar bu gelişmelerin etkisiyle 3 barajını geçebilir. ==> ekonomi
| Beşiktaş kaleci transfer etti. ==> spor
| Borsa günün ilk yarısında yüzde 0,51’lik düşüşle sürekli müzayede işlemlerine verilen araya girdi. ==> ekonomi
-----------------------------------------------

*/
