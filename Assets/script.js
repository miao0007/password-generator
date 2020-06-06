// Assignment Code
// Define variables for both Generate password button and password display textarea 
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input

// Add event listener to generate button
generateBtn.addEventListener("click", function () {

  // Let user decides the length of passwords
  var passwordLength = prompt(
    "How many characters would you like your password to be?"
  );
// Set the condition of password length for minimum and maximum
// Pop up the reminds that user can not choose length less that 8 and over than 128.

  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt(
      "Password length has to be between 8 to 128 characters. How many characters would you like your password to be?"
    );
  }

  // Ask users if they like choose lowercase characters as part of password
  var confirmLowerCase = confirm(
    "Would you like to choose lowercase characters?"
  );

  // Ask users uppercase option for password
  var confirmUpperCase = confirm(
    "Would you like to choose uppercase characters?"
  );

  // Ask users numeric characters option for password
  var confirmNumber = confirm("would you like to choose numeric characters?");

  // Ask users if they want special characters included in password
  var confirmSymbols = confirm("would you like to choose special characters?");

// Check users if they choose at least one type of characters for password generating
  if (
    !(confirmUpperCase || confirmLowerCase || confirmNumber || confirmSymbols)
  ) {

    // If none of types be chosen, alert message pop up
    alert("You have to select at least one character type!");

    // after user confirm, same questions be asked again for type of characters option
    confirmLowerCase = confirm(
      "Would you like to choose lowercase characters?"
    );
    confirmUpperCase = confirm(
      "Would you like to choose uppercase characters?"
    );
    confirmNumber = confirm("would you like to choose numeric characters?");
    confirmSymbols = confirm("would you like to choose special characters?");
  }
 
  // When users complete password type option, call writePassword function to display generated password in textarea.
  writePassword();



  // Define function writePassword which can display generated password in textarea.
  function writePassword() {

    // Set five parameters which include four character types and one password length
    var password = generatePassword(
      confirmLowerCase,
      confirmUpperCase,
      confirmNumber,
      confirmSymbols,
      passwordLength
    );

    // Assign generated password value
    passwordText.value = password;
  }
});


// build a object with array elements which include four character types inside 
var inputTypeGroup = {
  lowercase: getRandomLower,
  uppercase: getRandomUpper,
  numbers: getRandomNumber,
  symbols: getRandomSymbol,
};

// Set function to generate password based on user's option
function generatePassword(lowercase, uppercase, numbers, symbols, length) {

  // Set initial password variable which is null.
  var generatedPassword = "";

  // Assign combined character types to a variable
  var typesGroup = lowercase + uppercase + numbers + symbols;

// Create a object array which includes four character group
  var typesGroupArr = [
    {
      lowercase,
    },
    {
      uppercase,
    },
    {
      numbers,
    },
    {
      symbols,
    },

    // Use filter method to find out the array elements with required condition
  ].filter((item) => Object.values(item)[0]);

  // Make a loop to create the combined types characters string
  for (var i = 0; i < length; i += typesGroup) {
    typesGroupArr.forEach((type) => {
      var funcName = Object.keys(type)[0];
      generatedPassword += inputTypeGroup[funcName]();
    });
  }
// Create the password string with random characters combination and required password length.
  var getPassword = generatedPassword.slice(0, length);

  return getPassword;
}



// Create a function which generates a random lowercase character
function getRandomLower() {
  var lowers = "abcdefghijklmnopqrstuvwxyz";
  return lowers[Math.floor(Math.random() * lowers.length)];
}

// Create a function which generates a random uppercase character
function getRandomUpper() {
  var uppers = "ABCDEFHGIJKLMNOPQRSTUVWXYZ";
  return uppers[Math.floor(Math.random() * uppers.length)];
}

// Create a function which generates a random number
function getRandomNumber() {
  var numbers = "0123456789";
  return numbers[Math.floor(Math.random() * numbers.length)];
}


// Create a function which generates a random special character
function getRandomSymbol() {
  var symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
