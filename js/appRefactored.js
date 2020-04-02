"use strict";

// Global declarations
var answers = ['yes', 'y', 'no', 'n'];
var score = 0;
var msgScore = "Congratulations! You scored " + score + " out of 7.";
var invalid = "Please enter a valid response.";
var success = "You are correct! Nice guess " + userName + ".";
var wrong = userName + ", you are incorrect.";

// Gather visitor's name
var userName = prompt("Please enter your name", "Russel Wilson");
if (userName = null) {
    alert(invalid);
    prompt("Please enter your name", "Russel Wilson");
} 

console.log("User Name: " + userName);

// Question about being a Veteran
var milQues = prompt(userName + ", am I prior military?", "Yes or No").toLowerCase();
if (milQues = null) {
    alert("Please enter a valid name.");
    milQues = prompt(userName + ", am I prior military?", "Yes or No").toLowerCase();
} else {
    if (milQues === answers[0] || milQues === answers[1]) {
        alert(success);
        console.log("Military: " + milQues);
        score = (score++);
        break;
    } else {
        alert(userName + ", you are incorrect.");
        console.log("Military: " + milQues);
    }
}

// Question about being from Washington
var resQues = prompt(userName + ", am I originally from Washington?", "Yes or No").toLowerCase();
if (resQues = null) {
    alert("Please enter \"Yes or No\" response");
    resQues = prompt(userName + ", am I originally from Washington?").toLowerCase();
} else {
    if (resQues === answers[2] || resQues === answers[3]) {
        alert(success);
        console.log("Resident: " + resQues);
        score = (score++);
        break;
    } else {
        alert(userName + ", you are incorrect.");
        console.log("Resident: " + resQues);
    }
}

// Question about having pets
var petQues = prompt(userName + ", do I have any pets?", "Yes or no").toLowerCase();
if (resQues = null) {
    alert("Please enter \"Yes or No\" response");
    petQues = prompt(userName + ", am I originally from Washington?").toLowerCase();
} else {
    if (petQues === answers[0] || petQues === answers[1]) {
        alert(success);
        console.log("Resident: " + petQues);
        score = (score++);
        break;
    } else {
        alert(userName + ", you are incorrect.");
        console.log("Pets: " + petsQues);
    }
}

// Questoin about being an only child
var sibQues = prompt(userName + ", do I have any brothers or sister?", "Yes or No").toLowerCase();
if (sibQues = null) {
    alert("Please enter \"Yes or No\" response");
    sibQues = prompt(userName + ", am I originally from Washington?").toLowerCase();
} else {
    if (sibQues === answers[2] || sibQues === answers[3]) {
        alert(success);
        console.log("Siblings: " + sibQues);
        score = (score++);
        break;
    } else {
        alert(userName + ", you are incorrect.");
        console.log("Siblings: " + sibQues);
    }
}

// Questoin about being married
var marQues = prompt(userName + ", am I married?", "Yes or No").toLowerCase();
if (sibQues = null) {
    alert("Please enter \"Yes or No\" response");
    marQues = prompt(userName + ", am I originally from Washington?").toLowerCase();
} else {
    if (marQues === answers[2] || marQues === answers[3]) {
        alert(success);
        console.log("Married: " + marQues);
        score = (score++);
        break;
    } else {
        alert(userName + ", you are incorrect.");
        console.log("Married: " + marQues);
    }
}

// Guessing my age
var age = "33";
var msgHigh = "Nice try, too high! Guess again.";
var msgLow = "Nice try, too low! Guess again.";
var i;

for (i = 0; i < 6; i++) {
    var ageQues = prompt(userName + ", how old do you think I am?", "100"); {
        if(ageQues === null) {
            alert(invalid);
            prompt(userName + ", how old do you think I am?");
        } else {
            if (age === ageQues) {
                alert(success);
                console.log("Age: " + ageQues);
                score = (score++)
                break;
        } else if (age > ageQues) {
            alert(msgHigh);
        } else if (age < ageQ);
    }
}
}

// Where have I been
var locArray = ['japan', 'australia', 'south korea', 'singapore'];
var locLength = locArray.length;
var location = false;
var i;

var locQues = prompt("Name a country I might have been to.").toLowerCase();
for (i = 0; i < 6; i++) {
    if (locQues === locArray[i]) {

    }

}