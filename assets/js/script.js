// Assignment Code
var generateBtn = document.querySelector("#generate");
var charCount = 0

function generatePassword(){
  if (charCount < 7 || charCount > 128){
    var charCount = window.prompt("Password may contain 8-128 characters. Enter desired number of characters.")
  }
  var lowerCase = window.confirm("Do you want lower case characters?");
  var upperCase = window.confirm("Do you want upper case characters?");
  var numberals = window.confirm("Do you want numbers?");
  var specialChars = window.confirm("Do you want special characters?");

  charCount = parseInt(charCount)

  var passwordType ="Your password will contain: " + charCount + ", ";
  var passwordPool = "";


  if (lowerCase){
    var passwordType = passwordType + "lower case, ";
    var passwordPool ="abcdefghijklmnopqrstuvwxyz";
  };
  if (upperCase){
    var passwordType = passwordType + "upper case, ";
    var passwordPool = passwordPool + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  };
  if (numberals){
    var passwordType = passwordType + "numbers, ";
    var passwordPool = passwordPool + "1234567890";
  };
  if (specialChars){
    var passwordType = passwordType + "special characters.";
    var passwordPool = passwordPool + "!@#$%^&*()_+-="
  };

  window.alert(passwordType)  

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
