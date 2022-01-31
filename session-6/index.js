// Use this randomNumber INSIDE of the while/for loops to generate a random number
const randomNumber = Math.round(Math.random() * 10);

// ****************************************************TASK 1****************************************************

// let count = 0; // let browser know that count is 0.
// while (count < 10) {

//     const randomNumber = Math.round(Math.random() * 10);

//     count++; // (or count = count + 1)
//     console.log("This is the random number " + randomNumber)

//     console.log(count); // for testing

// }



// ****************************************************TASK 2; for loops ****************************************************


for (let count = 0; // initialisation variable inside brackets
    count < 10; // test condition for loop 
    count++) { // to change value of counter
        const randomNumber = Math.round(Math.random() * 10);

        console.log("This is the random number " + randomNumber)
    }



// ****************************************************Practise ****************************************************
// a while loop that prints the 2x tables until result is 144

let multiplier = 1;

while (multiplier <= 72) {
    console.log (multiplier * 2)
    multiplier++
}






