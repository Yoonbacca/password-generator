// Function based on w3 schools example at https://www.w3schools.com/js/tryit.asp?filename=tryjs_prompt
// Declare an object to house all password properties
let password = {
  length: 8,
  lowercase: false,
  uppercase: false,
  numbers: false,
  special: false
};
// Declare an empty string which will house all possible characters for password
let chars = "";

function passProperties() {
alert("Length: " + password.length + 
    "\nLowercase: " + password.lowercase + 
    "\nUppercase: " + password.uppercase +  
    "\nNumbers: " + password.numbers +  
    "\nSpecial: " + password.special );
}

// Confirm user on the length (only 8-128 accepted)
function passLength() {
  let text = "Please select a password length:";
  let criteria = "Between 8 - 128 characters";

  password.length = parseInt(prompt(text, criteria));
  if (password.length > 7 && password.length < 129 && !isNaN(password.length)) {
    passProperties();
    passLowercase();
  } else {
    alert("Invalid! Please try again");
    passProperties();
    passLength();
  }
}

// Confirm on lowercase
function passLowercase() {
  let text = "Would you like to use lowercase letters?";

  if (confirm(text) == true) {
    password.lowercase = true;
    chars += "abcdefghijklmnopqrstuvwxyz";
  } 

  passProperties();
  passUppercase();
}

// Confirm on uppercase
function passUppercase() {
  let text = "Would you like to use uppercase letters?";

  if (confirm(text) == true) {
    password.uppercase = true;
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } 

  passProperties();
  passNumbers();
}

// Write password to the #password input
function passNumbers() {
  let text = "Would you like to use numbers?";

  if (confirm(text) == true) {
    password.numbers = true;
    chars += "0123456789";
  } 

  passProperties();
  passSpecial();
}

// Write password to the #password input
// Failsafe added for all false inputs
function passSpecial() {
  let text = "Would you like to use special characters?";

  if (confirm(text) == true) {
    password.special = true;
    chars += "!@#$%^&*()";
    passProperties();
    writePassword();
  } else if (chars.length === 0) {
    passProperties();
    alert("All False Error. You need at least to select at least one criteria!");
    passLowercase();
  } else {
    passProperties();
    writePassword();
  }
}

// Write password to the #password input
// Inspiration from https://dev.to/code_mystery/random-password-generator-using-javascript-6a
function writePassword() {
  var passwordText = document.querySelector("#password");
  var pass = "";
  for (var i = 0; i < password.length; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    pass += chars.substring(randomNumber, randomNumber +1);
    console.log(pass);
  }
  console.log(pass);
  passwordText.value = pass;

}