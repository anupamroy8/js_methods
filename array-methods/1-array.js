// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers
var result = numbers.reduce( (a,b) => (a>b) ? a:b);

// Find longest string in strings
var result = strings.reduce( (a,b) => (a.length >b.length ) ? a:b);

// Find all the even numbers

var result = [];
var result = numbers.filter( a => (a%2 == 0));
// Find all the odd numbers

var result = [];
var result = numbers.filter( a => (a%2 != 0));
// Find all the words that contain 'is' use string method 'includes'

var result = [];
var result = strings.filter( a => (a.includes("is")));
console.log(result);

// Find all the words that contain 'is' use string method 'indexOf'

function stringIs(value) {
  if((value.indexOf("is")) != -1)
    return value;
}

console.log(strings.filter(stringIs))

// Check if all the numbers in numbers array are divisible by three use array method (every)

var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
function div3(value) {
  if(value%3 == 0)
    return value
}
numbers.every(div3)

// var result = [];
// var result = numbers.filter( a => (a%3 == 0));

//Alternatively:
// function div3(value) {
//   if(value%3 == 0)
//   return value;
// };

console.log(numbers.filter(div3));

//  Sort Array from smallest to largest

var newArr = [...numbers].sort((a,b) => a-b);

//Alternatively:

function smallToLarge(a,b) {
  return(a - b);
};

console.log([...numbers].sort(smallToLarge));

// Remove the last word in strings

strings.pop();
console.log(strings);

// Add a new word in the array

strings.push("words")
console.log(strings);

// Remove the first word in the array

strings.shift()
console.log(strings);

// Place a new word at the start of the array use (upshift)

strings.unshift("this")
console.log(strings);

// Make a subset of numbers array [18,9,7,11]

var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var newArr = [];
newArr = numbers.slice(3, 6)
console.log(newArr);

// Make a subset of strings array ['a','collection']

var strings = ["this", "is", "a", "collection", "of", "words"];
strings.slice(2,4);

// Replace 12 & 18 with 1221 and 1881

var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
numbers.splice(1,1,1221);
numbers.splice(3,1,1881);

// Replace words with string in strings array

var strings = ["this", "is", "a", "collection", "of", "words"];
function string(_a,_b,c) {
  return c;
};
strings.map(string);

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'

function checkJ(value) {
  if(value.firstname.charAt(0) == "J")
  return value;
};
customers.filter(checkJ);

// Create new array with firstname and lastname

function firstNameArr(value) {
  return (value.firstname);
};
customers.map(firstNameArr);
firstArr = [];
firstArr = customers.map(firstNameArr);

///////////////////////////////////

function lastNameArr(value) {
  return (value.lastname);
};
customers.map(lastNameArr);
lastArr = [];
lastArr = customers.map(lastNameArr);
// Sort the array created above alphabetically

firstArr.sort();

lastArr.sort();