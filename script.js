//   On button click:
// prompt for password length; 8-128
// prompt for character types     
//         ...could do this via 4 confirms (y/n)...
//         ...or by having several singular options displayed at once
//             lc, lc&up, lc&up&num, lc&up&spcl, lc&up&num&spcl
//     lowercase
//     uppercase
//     numeric
//     special
// "input validated" does this mean user gets chance to say yes or no to the password?
//     after each prompt user should get a confirm!

var password = "";
var pwArray = ["1", "2", "3"];
var pwLength;

var hasUpper;
var hasNum;
var hasSpecial;
var isValid = false;

//goal is to create a string using up to 4 groups
    //use 4 arrays to pick a random character
    //pick from one of those 4 arrays at random
var letArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];  
        //length = 26
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialArray = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
    // !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ 
        // "\" will not work; length = 31
    //ALT; COULD ADD ALL THESE INTO A SINGLE STRING AND CHOOSE A RANDOM CHAR FROM THAT STRING--- would use charat(x) method
        //wait, "' would screw up a string... unless I figured out a way to use code instead of syumbols... try it with arrays first
var finalArray = letArray;
    //not sure if this is kosher, but this array holds all needed characters

// var arrayPicker;

function chooseChars(){
    console.log("function started");
    var x = 26;
    var y = 0;
    do{
    pwLength = prompt("Password length; please enter between 8 and 128 characters.");
        //need to make sure this is a number between 8 and 128
        //is there a way to ensure this is a number?
        if ((pwLength >= 8) && (pwLength <= 128)){

            isContinue = true;
        } else{
            isContinue = false;
        }
    }while (isContinue == false);
    hasUpper = confirm("Do you want uppercase letters in your password?");
    if (hasUpper === true){
       for (var i = 0; i < (upperArray.length);++i){
           finalArray[x+i] = upperArray[i];
        //    console.log(finalArray[i]);
        //    console.log(finalArray[i+x]);
       }
    }
    hasNum = confirm("Do you want numbers in your password?");
    if (hasNum === true){
        for (var i = 0; i < (upperArray.length);++i){
            finalArray[x+i] = upperArray[i];
         //    console.log(finalArray[i]);
         //    console.log(finalArray[i+x]);
        }
     }
    hasSpecial = confirm("Do you want special characters in your password?");
    

}

function createPassword() {
    chooseChars();
    for(i=0; i< pwLength;i++){
        var x = 5;
        var x = Math.floor(Math.random() * finalArray.length);
        // console.log("x = "+x);
            //var x = random number betwen 0 and finalArray.length
                // not including finalArray.length but thats ok, because finallArray[length] is null
            //FIX *************
        pwArray[i] = finalArray[x];
        // password += finalArray[x];   //failed
        // password = password.concat(finalArray[x]);       //failed
            //going to use .join to make an array a string!
        // console.log("my password is" + pwArray[i]);
    }
    password = pwArray.join("");
    console.log("may password is "+password);
   
        //for length pick random number
}   //end of createPassword function


//***************************************************** 
//this should be an event time click!
// document.addEventListener("click", createPassword())
document.getElementById("generateButton").addEventListener("click",createPassword);
    //currently this initiates the function "create password" on click


// function randomIntFromInterval(min, max) { // min and max included 
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
//^ 3 lines from stackoverflow