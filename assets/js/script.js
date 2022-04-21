// Assignment Code
var generateBtn = document.querySelector("#generate");

var password = ""

var passwordPool = "";
function generatePassword(){
  
  var charCount = window.prompt("Password may contain 8-128 characters. Enter desired number of characters.")
  charCount = parseInt(charCount)
  while (charCount < 7 || charCount > 128){
    window.alert("You must input a valid selection!")
    var charCount = window.prompt("Password may contain 8-128 characters. Enter desired number of characters.")
    charCount = parseInt(charCount)
  }
  var lowerCase = window.confirm("Do you want lower case characters?");
  var upperCase = window.confirm("Do you want upper case characters?");
  var numberals = window.confirm("Do you want numbers?");
  var specialChars = window.confirm("Do you want special characters?");

  charCount = parseInt(charCount)

  var passwordType ="Your password will contain: " + charCount + ", ";
  


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

  
  debugger;
  for (let i = 0; i < charCount; i++)
    password = password + passwordPool.charAt(Math.random() * passwordPool.length)

  return password

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
