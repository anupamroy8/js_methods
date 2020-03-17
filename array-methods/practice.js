// Use below arrays to make questions for yourself and practice the methods like
// map
// forEach
// filter
// splics
// reduce
// etc ..

// Write atleast 10 different question for every method.

var pizzas = [
  "Deep Dish",
  "Peperoni",
  "Hawaiian",
  "Meatzza",
  "Spicy Mama",
  "Margherita"
];

//forEach: To find array length:
function arrayLength(value) {
  console.log(value.length);
};
pizzas.forEach(arrayLength);

//forEach: To change to uppercase:
function arrUpper(value) {
  console.log(value.toUpperCase);
};
pizzas.forEach(arrUpper);

//forEach: To change to lowercase:
function arrLower(value) {
  console.log(value.toLowerCase());
};
pizzas.forEach(arrLower);

/////////////////////////////////////////

//map
function specialPizza(value) {
  console.log(`Today's special pizza is ${value} `);
};

pizzas.map(specialPizza);

function stringLen(value) {
  console.log(value.length)
}

////////////////////////////////////////
//filter

function pizza(value) {
  if(value.length > 8) 
      console.log(value);
  else 
      return;
};

/////////////////////////////////////

var cuts = [
  "Chuck",
  "Brisket",
  "Shank",
  "Rib",
  "Plate",
  "Flank",
  "Short Loin",
  "Tenderloin",
  "Sirloin",
  "Round"
];

//forEach: To find array length:
function arrayLength(value) {
  console.log(value.length);
};
cuts.forEach(arrayLength);

//forEach: To change to uppercase:
function arrUpper(value) {
  console.log(value.toUpperCase);
};
cuts.forEach(arrUpper);

//forEach: To change to lowercase:
function arrLower(value) {
  console.log(value.toLowerCase());
};
cuts.forEach(arrLower);

/////////////////////////////////////

//map
function tryCut(value) {
  console.log(`Try our new ${value} cut.`);
};
cuts.map(tryCut);

//filter
function cutLong6(value) {
  if(value.length > 6) 
      console.log(value);
  else 
      return;
};
/////////////////////////////////////


var numbers = [1, 2, 3, 4, 5, 6, 23, 121, 345, 33, 23, 12, 435, 642, 66, 23];


//forEach: To find array length:
function sum5(value) {
  console.log(value+5);
};
numbers.forEach(sum5);
/////////////////////////////////////
//map: To get multiplied by 10

function mul5(value) {
  console.log(value*10); 
};
//same using arrow function
console.log(numbers.map((value) => value*10 ));

//map: true if even | else false
console.log(numbers.map(value => value%2 == 0 ? true:false));

/////////////////////////////////////

//filter: only even will be in the new array.
function ifEven(value) {
  if(value%2 == 0)
    console.log(value);
}
newArray = numbers.filter(ifEven);

//filter: only odd will be in the new array.
function ifOdd(value) {
  if(value%2 != 0)
    console.log(value);
}
newArray = numbers.filter(ifOdd);

/////////////////////////////////////
