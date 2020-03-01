//2 current errors;
    //1. occasional undefined objects in my pwArray... going to remove " and '
    //2. nonbasic characters appear in PW when I hit the button a second time
        //this means I need to clear my finalArray ...



var password = "";
var pwArray = ["1", "2", "3"];
var pwLength;

var hasUpper;
var hasNum;
var hasSpecial;
var isValid = false;
var pw = document.querySelector("#pw");

//goal is to create a string using up to 4 groups
//use 4 arrays to pick a random character
//pick from one of those 4 arrays at random
var letArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialArray = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
// !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ 
// "\" will not work; length = 31
var finalArray = ["1", "2"];
//****************** end of declarations



function initArray(){
finalArray.length = 26;
}


function chooseChars() {
    console.log("function started");
    var x = 26;
    var y = 0;
    isContinue = false;
    hasUpper = false;
    hasSpecial = false;
    hasNum = false;
    do {
        pwLength = prompt("Password length; please enter between 8 and 128 characters.");
        //need to make sure this is a number between 8 and 128
        //is there a way to ensure this is a number?
        if ((pwLength >= 8) && (pwLength <= 128)) {

            isContinue = true;
        } else {
            isContinue = false;
        }
    } while (isContinue == false);
    hasUpper = confirm("Do you want uppercase letters in your password?");
    if (hasUpper === true) {
        for (var i = 0; i < (upperArray.length); ++i) {
            finalArray[x + i] = upperArray[i];
            //    console.log(finalArray[i]);
            //    console.log(finalArray[i+x]);
        }
        x += upperArray.length;
        // console.log("x should be 52; x=" + x);
        // console.log("upperArray=" + upperArray.length);
    }
    hasNum = confirm("Do you want numbers in your password?");
    if (hasNum === true) {
        for (var i = 0; i < (numArray.length); ++i) {
            finalArray[x + i] = numArray[i];
            //    console.log(finalArray[i]);
            //    console.log(finalArray[i+x]);
        }
        x += upperArray.length;
        // x = x + upperArray.length;
        // console.log("****");
        // console.log(x);
        // console.log(numArray.length);
        // console.log("x should be 62; x=" + x);
        //x should be 62 but is 78... but its working...?
        //I don;t know why x = 78... 26 letters, plus 26 letters, plus 10 mumbers...=62...right?
    }
    hasSpecial = confirm("Do you want special characters in your password?");
    if (hasSpecial === true) {
        for (var i = 0; i < (specialArray.length); ++i) {
            finalArray[x + i] = specialArray[i];
            //    console.log(finalArray[i]);
            //    console.log(finalArray[i+x]);
        }
        x += specialArray.length;
        // x = x + upperArray.length;

        // console.log("x... x=" + x);
        //x should be 62 but is 78... but its working...?
        //I don;t know why x = 78... 26 letters, plus 26 letters, plus 10 mumbers...=62...right?
    }

}

function clearpw() {
    //need to reset password?, pwArray?, finalArray?
    //clear password
    //clear pwArray
    password = "";
    pwArray = ["1", "2", "3"];
    for (i = 1; 1 < pwLength; i++) {
        pwArray.pop;
    }
    //JS has no memory management...


}   //broken


function createPassword() {

    initArray();
    chooseChars();
    for (i = 0; i < pwLength; i++) {
        //since x is wrong in other function, its vital that x is reset here
        var x = Math.floor(Math.random() * finalArray.length);
        // console.log("x = "+x);
        //var x = random number betwen 0 and finalArray.length
        // not including finalArray.length but thats ok, because finallArray[length] is null
        //FIX *************
        console.log(x);
        pwArray[i] = finalArray[x];
            //SOMEHOW I AM GETTING A FEW UNDEFINED CHARACTERS HERE..occasionally
            //that has to be a math issue!

    }
    password = pwArray.join("");
    console.log("my password is " + password);
    //make this replace "pw"s text content
    pw.textContent = password;
    // clearpw();
    //memory management breaks browser...
}   //end of createPassword function

//***************************************************** 
function testfunction(){
    
        for(i=0; i<specialArray.length; i++){
            console.log(specialArray[i]);
        }


    
}
//maybe I should refresh page at beginning of the create password function?
// testfunction();
document.getElementById("generateButton").addEventListener("click", createPassword);
    //currently this initiates the function "create password" on click
    

//***************************************************
// function randomIntFromInterval(min, max) { // min and max included 
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
//^ 3 lines from stackoverflow


