function getGrade (total) {
    let grade = 0;

    if (total > 90) {
        grade = 'A+';
    }
    else if (total > 80) {
        grade = 'A'; 
    }
    else if (total > 70) {
        grade = 'B';
    }
    else if (total > 60) {
        grade = 'C';
    }
    else if (total > 50) {
        grade = 'D';
    }
    else if (total > 40) {
        grade = 'E';
    }
    else if (total > 30) {
        grade = 'F';
    }
    else {
        console.log ("fail");
    }
    
console.log ("Your grade is " + grade);

}
// to call in console = getGrade(90)


// SWITCH STATEMENTS; if else statements from above have been rewritten.

// function getGrade (total) {
//     let grade;

//     switch (true) {

//     case (total > 90):
//         grade = 'A+';
//         break; // prevents us from falling through to next statement. acts similar to else if. 
//     case (total > 80):
//         grade = 'A';
//         break;    
//     case (total > 70):
//         grade = 'B';
//         break;
//     case (total > 60):
//         grade = 'C';
//         break;
//     case (total > 50):
//         grade = 'D';
//         break;
//     case (total > 40):
//         grade = 'E';
//         break;
//     case (total > 30):
//         grade = 'F';
//         break;
//     case (total < 30):
//         grade = 'Fail';

//     default:
//         grade = 'Fail';

// }
// console.log("Your grade is " + grade);

// }

