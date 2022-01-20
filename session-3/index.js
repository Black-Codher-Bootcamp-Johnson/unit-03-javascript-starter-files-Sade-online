// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14

const myName = "Sade";
const myAge = "20";
let a = 5;
let b = 10;

console.log (a + b); // expected output = 15 

// break 

function sayHey() {
    console.log("Hey!");
}

function conversation() {
    sayHey();
    console.log ("How are you?");
    console.log ("Goodbye");
}
// call conversation(); in console ... it works.. happy days :))

// break 

// below is a function called futureAge that returns a person’s name and their age in 5 years time

function futureAge(userName, currentAge){

    let newAge = currentAge + 5;
    console.log("Hi " + userName + "! You will be " + newAge + " years old in 5 years time :)");

    // to call in console using example variables = futureAge("Mary", 17);
}