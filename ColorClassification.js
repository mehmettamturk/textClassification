var limdu = require('limdu');

var colorClassifier = new limdu.classifiers.NeuralNetwork();

colorClassifier.trainBatch([
    {input: { r: 0.03, g: 0.7, b: 0.5 }, output: 0},
    {input: { r: 0.16, g: 0.09, b: 0.2 }, output: 1},
    {input: { r: 0.5, g: 0.5, b: 1.0 }, output: 1}
]);

console.log(colorClassifier.classify({ r: 1, g: 0.4, b: 0 }));  // 0.99 - almost white
console.log(colorClassifier.classify({ r: 1, g: 0.4, b: 0 }, /* explanation level = */1));
