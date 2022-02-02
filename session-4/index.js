// ****************************************************TASK 1 - practice creating OBJECTS****************************************************
// objects typically start with curly braces and end with a semi colon.
const personA = { 
    name: 'Sade',
    age: 24,
    location: 'Manchester',
    likes: 'sleeping a bit too much where possible',
};

// to call in console: console.log(personA);

const personB = {
    name: 'Georgette',
    age: 25,
    location: 'somewhere down South',
    likes: 'watching movies',
};

const personC = {
    name: 'Daniel',
    age: 22,
    location: 'somewhere up North',
    likes: 'going hard at the gym',
};

const personD = {
    name: 'Emmanuel',
    age: 20,
    location: 'Newcastle',
    likes: 'Archery',
};
 
// a function called biography with one parameter called person that pulls in one of the OBJECTS above.

function biography(person) {
    
    console.log('Hi! my name is ' + person.name + ' and I am ' + person.age + ' years old. I live in '+ person.location + ' and I like ' +  person.likes )
}
biography(personA);
biography(personB);
biography(personC);
biography(personD);



// error to learn from
// function bio (person) {
//     bio (person);
//     console.log ("Hi, my name is " + person.name + ". I am" + person.age + " years old," + "I live " + person.location + "and I like" + person.likes);

//     return bio(personA);
// }
// this created a Maximum call stack size exceeded error :(
// to call in console: console.log(biography(personA));






//****************************************************TASK 2 - MATHS OPERATORS****************************************************
// ***Uncomment the code below to begin the task***

const x = 9;
const y = 6;

const addition = x + y;

console.log("Addition: x + y " + addition);

const subtraction = x - y;

console.log("Subtraction: x - y " + subtraction);

const multiplication = x * y;

console.log("multiplication: x * y " + multiplication);

const division = x / y;

console.log("Division: x / y " + division);


// ****************************************************TASK 3****************************************************

// const minimumDrivingAge = 17;
// let YourAge = 12;

// if (YourAge > minimumDrivingAge) {
//     console.log("you're legal!");
// }

// if (YourAge < minimumDrivingAge) {
//     console.log("you're illegal!");
// }

// into function 
function driving (age) {

    let myAge = 0;
    const minimumDrivingAge = 17;
    
    if (age > minimumDrivingAge) {
    
    result = "you're legal!";
    
    }
    
    else if (age < minimumDrivingAge) {
    
    result = "you're illegal!";
    
    }

    else {

        console.log ("you're an alien");
        
        }

    console.log (result);

    }
    // to call in console = driving(90)



// HOMEWORK
// Both tasks on this slide can be completed in the session4/ index.js file
// ● Create a calculator function that adds, subtracts, multiplies and divides two numbers
// ○ How many parameters should you pass to the function?
// ○ Do you declare variables as const or let?

function calculator() {


}

let value1 = parseInt(prompt("Whats your first number?"));
let value2 = parseInt(prompt("Whats your first number?"));

console.log(value1);
console.log(value2);

const add = value1 + value2;
console.log(value1 + " + " + value2 + " is " + add);

const times = value1 * value2;
console.log(value1 + " x " + value2 + " is " + times);

const minus = value1 - value2;
console.log(value1 + " - " + value2 + " is " + minus);

const divide = value1 / value2;
console.log(value1 + " / " + value2 + " is " + divide);


// ● Create a whoIsOlder function to compare the ages of two people to find out is older by how many years
// ○ The objects you created during task 1 will be passed as parameters
// ○ Determine who is older
// ○ Find the age difference
// ○ Return a sentence informing us of your results, e.g. “John is 5 years older than Peter”

// Practice creating pull requests, reviewing other people’s code and handling
// code conflicts
// ● A practice group project has been created for you in GitHub classroom (link
// is in Black Codher learning in the materials tab for this session)
// ○ Make sure your join the correct team
// ○ Your team is your study group
// ● Full instructions are in the README of the practice group project
// repository