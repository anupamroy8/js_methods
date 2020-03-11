var data = [
  {
    name: "Butters",
    age: 3,
    type: "dog"
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog"
  },
  {
    name: "Red",
    age: 1,
    type: "cat"
  },
  {
    name: "Joey",
    age: 3,
    type: "dog"
  },
  {
    name: "Pochi",
    age: 3,
    type: "dog"
  }
];

// write a function that will sum all of the dogs ages in dog years using for loop.
// 1 human year = 7 dog year

// your code goes here

data.reduce((acc, cv) => {
  if(cv.type == "dog")
    acc = acc + (cv.age*7)
  return acc;
}, 0)
//105


// Solution is 105

// Write the same function using
// 1. filter - for filtering the cat or dog
// 2. map - to multiply human year to dog year
// 3. reduce - to accumulate total age.

// Solution 105

data.filter(value => 
  value.type == 'dog'
);

//

data.map( function (value) {
  if(value.type == 'dog')
  return value.age*7;
    else
    return "Not a dog";
});

//
data.reduce((acc, cv) => {
  if(cv.type == "dog")
    acc = acc + (cv.age*7)
  return acc;
}, 0)
