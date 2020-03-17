var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.

function longest(a, b) {
  if(a.length >= b.length)
    return a;
    else
    return b;
};
var result = words.reduce(longest, '');
console.log(result);
crocodile

/////


var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
// Use the above sum and calculate the average.
function sum1(acc, cv) {
  acc = acc+cv; 
  return acc;
}
var result = numbers1.reduce(sum1, 0);
console.log(result)

var average = (result/numbers1.length)
console.log(average);

//////



//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers
var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(a, b) {
  a = (a+b)/2;
  return a;
}
var result2 = numbers2.reduce(averageNumbers);
console.log(result2);

//////

//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
var words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];

function convertTolength(value) {
  return value.length;
}
words2.map(convertTolength);

var newArr = words2.map(convertTolength);

function averageWordLength(a, b) {
  a = (a+b)/2;
  return a;
}
console.log(newArr.reduce(averageWordLength));
