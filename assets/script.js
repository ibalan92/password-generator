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
    else return numberOfCharacters;
  }
  console.log(numberOfCharacters)
}
// Function to prompt user for password options
function getPasswordOptions() {
  
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  numOfCharacters()
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

//Press button -> Prompt "Please input a number"
//User input value = store in a var and convert to number
// if ( value <8 or value> 128)  -> prompt "Please input a valid number between 8 an 128"
//else return input value 

//Confirm lowercase or not by user input - save in var lowercase
//Confirm uppercase or not by user input - save in var uppercase
//Confirm numeric or not by user input - save in var numeric
//Confirm special character or not by user - save in var specialcharacter

//generatePassword
//if 

