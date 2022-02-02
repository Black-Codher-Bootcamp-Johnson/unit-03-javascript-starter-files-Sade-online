// ****************************************************TASK 1****************************************************
// create the animals array and use the pop method.... to superficially remove the last item in the array

// const animals = ['cat', 'dog', 'wolf', 'lion', 'eagle', 'zebra'];

// animals.pop();

// console.log(animals);





// ****************************************************TASK 2****************************************************

const animals = ['cat', 'dog', 'wolf', 'lion', 'eagle', 'zebra'];
animals.sort().reverse();
console.log(animals);



const namesOfPeople = ['Richard of York', 'Judas', 'Silas', 'Matthew', 'Nebuchadnezzar', 'Daniel', 'Zachariah', 'Pharaoh', 'Moses', 'Mary']

namesOfPeople.sort();
console.log(namesOfPeople);

namesOfPeople.reverse();
console.log(namesOfPeople);


// bonus task
const numbers = [5, 325, 67, 100000, 150];
numbers.sort(function(a, b){return a - b});
console.log(numbers);
console.log(numbers.length);




// ****************************************************TASK 3****************************************************

// Notice the backticks enclosing t'challa. Read https://www.javascripttutorial.net/es6/javascript-template-literals/ for an explanation on template literals

// Your task is to return an array that only has the name of each person and this array should be sorted by their age (youngest to oldest.

const people = [
  { name: `t'challa`, age: 37 },
  { name: 'shuri', age: 16 },
  { name: 'killmonger', age: 32 },
];

// This is a helper function that should be used in the final task of the session.
// You should pass this function to the sort method to sort the ages of each individiual in the people array of objects
// Note: this helper function is using a tertiary operator instead of an if/else statement
function compare(a, b) {
  const personA = a.age;
  const personB = b.age;

  return personA > personB ? true : false;
}

const sortedPeople = people.sort((a, b)=> a.age - b.age).map(person => person.name);
console.log('sorted people: ', sortedPeople);
