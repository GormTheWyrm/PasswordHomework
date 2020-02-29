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

var password;
var pwLength;

var hasUpper;
var hasNum;
var hasSpecial;
var isValid = false;


function createPassword() {
    console.log("function started");
 
        var pwLength = prompt("Password length; please enter between 8 and 128 characters.");
        //need to make sure this is a number between 8 and 128

 
    hasUpper = confirm("Do you want uppercase letters in your password?");
    hasNum = confirm("Do you want numbers in your password?");
    hasSpecial = confirm("Do you want special characters in your password?");
    //end of while loop
}   //end of main function

createPassword;
//this should be an eventtime click!
document.addEventListener("click", createPassword)