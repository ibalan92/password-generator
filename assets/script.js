// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

function numOfCharacters(){
  var numberOfCharacters = prompt("Please choose the number of characters for your password!")
      numberOfCharacters = parseInt(numberOfCharacters);
  while (numberOfCharacters < 8 || numberOfCharacters > 128){
    if (numberOfCharacters < 8){
      numberOfCharacters = prompt("The number should be greater than 8 and lower than 128. Please input a new number")
    }
    else if( numberOfCharacters > 128){
      numberOfCharacters = prompt("The number should be greater than 8 and lower than 128. Please input a new number")
    } 
  }
  return numberOfCharacters;
}

function allAreFalse(arr) {
  return arr.every(element => element === false);
}
// Function to prompt user for password options
function getPasswordOptions() {
  var lower = confirm("Do you want lower case in your password?");
  var upper = confirm("Do you want upper case in your password?");
  var numeric = confirm("Do you want numeric values in your password?");
  var special = confirm("Do you want special characters(£,$,%...) in your password?");
  var options = [];
  options.push(lower, upper, numeric, special);
  return options;
  }

// Function for getting a random element from an array
function getRandom(arr) {
  var randomChar = arr[(Math.floor(Math.random() * arr.length))];
  return randomChar;
}

// Function to generate password with user input
function generatePassword() {
  var totalnumber =  numOfCharacters();
  var options = getPasswordOptions();
  var setOfCharacters = [];

  //Populate the setOfCharacters array with the options chosen by the user
  if (options[0]){
    setOfCharacters.push(lowerCasedCharacters);
  }
  if (options[1]){
    setOfCharacters.push(upperCasedCharacters);
  }
  if (options[2]) {
    setOfCharacters.push(numericCharacters);
  }
  if (options[3]) {
    setOfCharacters.push(specialCharacters);
  }

  if (setOfCharacters.length === 0) {
    alert("You need to choose at least one option. Please try again, pressing Generate Password");
    return ""; // Return an empty string to indicate an error
  }

  var password = '';
  
  //Ensure at least one character of each chosen option is added to the password
  for (var i = 0; i < setOfCharacters.length; i++) {
    password += getRandom(setOfCharacters[i]);
  }
  //Fill the remaining string with random characters from the chosen option
  for (var i = setOfCharacters.length; i < totalnumber; i++) {
    var randomChar = getRandom(setOfCharacters);
    password += getRandom(randomChar);
  }
  return password;

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


