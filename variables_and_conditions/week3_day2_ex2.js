// Week 3 Day 2 Exercise 2

let myWatchedSeries = [
    'black mirror',
    'money heist',
    'the big bang theory',
    'sons of anarchy',
];
let myWatchedSeriesLength = myWatchedSeries.length;

let lastSeries = myWatchedSeries.pop();
let sentence = myWatchedSeries.join(', ') + ', and ' + lastSeries;

let result = 'I watched ' + myWatchedSeriesLength + ' series : ' + sentence;

console.log(result);
