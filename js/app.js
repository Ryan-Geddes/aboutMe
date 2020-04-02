"use strict";

var score = 0

function getName(){
    var userName = prompt("Please Enter Your Name", "Russell Wilson");
    console.log("User Name: " + userName );
    return userName;
}
var userName = getName();

// Question about being a veteran
function getMilitary(){
var miltaryQuestion = prompt(userName + ", am I prior military?", "Yes or No").toLowerCase();
if ( miltaryQuestion === 'yes' || miltaryQuestion === 'y') {
    alert(userName + ', you are correct! I served 10yrs as a Submariner in the Navy.');
    score = (score + 1); 
} else {
    alert(userName + ', you are incorrect.');
}
console.log("Military: " + miltaryQuestion);
}
getMilitary();


// // Question about where I'm from
// var residentQuestion = prompt(userName + ", am I originally from Washington?", "Yes or No").toLowerCase();
// if ( residentQuestion === 'no' || residentQuestion === 'n') {
//     alert(userName + ', you are correct! I\'m originally from SoCal.');
//     score = (score + 1);
// } else {
//     alert(userName + ', you are incorrect.');
// }
// console.log("Resident: " + residentQuestion);

// // Question about Pets
// var petQuestion = prompt(userName + " , do I have any pets?", "Yes or No").toLowerCase();
// if ( petQuestion === 'yes' || petQuestion === 'y') {
//     alert(userName + ", you are correct! I have one cat.");
//     score = (score + 1);
// } else {
//     alert(userName + ", you are incorrect.");
// }
// console.log("Pets: " + petQuestion);

// // Question about family
// var siblingsQuestion = prompt(userName + ", do I have any brothers and sisters?", "Yes or No").toLowerCase();
// if (siblingsQuestion === 'no' || siblingsQuestion === 'n') {
//     alert(userName + ", you are correct! I\'m an only child.");
//     score = (score + 1);
// } else {
//     alert(userName + ", you are incorrect.");
// }
// console.log("Siblings: " + siblingsQuestion);

// // Question about being married
// var marriedQuestion = prompt(userName + ", am I married?", "Yes or No").toLowerCase();
// if ( marriedQuestion === 'no' || marriedQuestion === 'n') {
//     alert(userName + ', you are correct! I\'m not married, but I am engaged.');
//     score = (score + 1);
// } else {
//     alert(userName + ', you are incorrect.');
// }
// console.log("Married: " + marriedQuestion);

// // Question about age
// var age = "33";
// var msgHigh = "Too high, try again!";
// var msgLow = "Too low, try again!";
// var i;

// for (i = 0; i < 6; i++) {
//     var ageQuestion = prompt(userName + ", how old do you think I am?");
//     if(ageQuestion === age) {
//         alert("Great guess " + userName + ", you\'re right!");
//         score = (score + 1);
//         console.log("Guess: " + ageQuestion);
//         break;
//     } else if(ageQuestion > age) {
//         alert(msgHigh);
//         console.log("Guess: " + ageQuestion);
//     } else if(ageQuestion < age) {
//         alert(msgLow);
//         console.log("Guess: " + ageQuestion);
//     }
// }

// // Question about visiting places
// var visitArray = ['japan', 'australia', 'south korea', 'singapore'];
// var i;
// var msgScore = "Congratulations, you scored " 

// for (i = 0; i < 6; i++) {
//     var visitQuestion = prompt(userName + ", name a country I might have been to.").toLowerCase();
//     if (visitQuestion === visitArray[i]) {
//         alert("Great guess! I have been to both Japan and Australia.");
//         score = (score + 1);
//         console.log("Visit: " + visitQuestion);
        
//         break;
//     } else if (visitQuestion != visitArray[i]) {
//         alert("Nope, never been there. Try again!");
//         console.log("Visit: " + visitQuestion);
//     }
// }
// alert("Congratulations, you scored " + score + " right out of 7!");
// console.log("Score: " + score);
