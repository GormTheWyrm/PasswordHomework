
// create a password with options for uppercase, special symbols, and numbers
// The push() method adds new items to the end of an array, and returns the new length.


var letArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialArray = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var pw = document.querySelector("#pw");



function createPassword() {
    //I need all these within scope so they can use the next 2 variables
    //and so those variables will be deleted between button presses (when new password created)

    var passwordSize = 0;
    var passwordArray = [];
    var tempArray = [];
    var passwordString;

    function setLower() {
        for (i = 0; i < letArray.length; i++) {
            tempArray[i] = letArray[i];
        }
        console.log("Lowercase added");
    }
    function setUpper() {
        var isUpper = confirm("Do you want upper case letters in your password?");
        if (isUpper === true) {
            for (i = 0; i < upperArray.length; i++) {
                tempArray.push(upperArray[i]);
            }
            console.log("Uppercase Added");
        } else {
            console.log("no Uppercase");
        }
    }

    function setNumber() {
        var isNumber = confirm("Do you want numbers in your password?");
        if (isNumber === true) {
            for (i = 0; i < numberArray.length; i++) {
                tempArray.push(numberArray[i]);
            }
            console.log("Numbers Added");
        } else {
            console.log("no Numbers");
        }
    }
    function setSpecial() {
        var isSpecial = confirm("Do you want special characters in your password?");
        if (isSpecial === true) {
            for (i = 0; i < specialArray.length; i++) {
                tempArray.push(specialArray[i]);
            }
            console.log("Specials Added");
        } else {
            console.log("no Specials");
        }

    }
    function setPassword() {
       
        for (i = 0; i < passwordSize; i++) {
            //sets password array to the new password
            var tempValue = Math.floor(Math.random()*tempArray.length);
            // console.log(tempValue);
            passwordArray[i] = tempArray[tempValue];
            // console.log(`passwordArray: ${passwordArray[i]}`);
        }
        // console.log("tempArray size = "+tempArray.length);
        // console.log(`password size: ${passwordSize}`);
        passwordString = passwordArray.join("");
    }
    function setSize() {
        var isContinue;
         do {
             passwordSize = parseInt(prompt("Pick a password size between 8 and 128 characters. Please enter a number."));
             
             //may return not a number or return as a octal instead of a decimal if number starts with 0
            //is there a way to ensure this is a number?
            //does broswer convert nonnumbers to numerical value because that could cause a bug...
            /* ***** */
            if ((passwordSize >= 8) && (passwordSize <= 128)) {
    
                isContinue = true;
            } else {
                isContinue = false;
            }
        } while (isContinue == false);
        console.log(`passwordSize: ${passwordSize}`);
    }
    function displayPassword() {
        //array.join("") should be able to make an array a string!
        pw.textContent = passwordString;
    }
    // ********** START OF CREATEPASSWORD FUNCTION ********************

    setSize();      //prompt for size
    //not outputing passwordSize... need to convert passwordSize fro mstring to number!
    setLower(); //sets lowercase letters in tempArray
    setUpper(); //these are confirms that push new characters to temparray
    setNumber();
    setSpecial();

    //may need to fiddle with to ensure its a number...

    //need random number between 0 and pwSize
    setPassword();
    //show password
    displayPassword();
    //need a chance for user to accept the password?
}


document.getElementById("generateButton").addEventListener("click", createPassword);
    //currently this initiates the function "create password" on click
