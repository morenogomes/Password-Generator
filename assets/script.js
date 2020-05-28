const generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", writePassword);
// const generateBtn = document.getElementById("generate");
// generateBtn.addEventListener("click", writePassword);

// let getNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let getNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let getLowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","y","w","x","z"];
let getUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","Y","W"];
let specialCharacters = ["!","@", "#", "$", "%", "^", "&", "*", "_" , "+", "=", "-", "?", "<"];


// Write password to the #password input
function writePassword() {
  var password = generatePW();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

function generatePW() {
  let pwLengh = prompt("Choose between 8 and 128 characters.");
  if (pwLengh < 8 || pwLengh > 128) {
    alert("Password must have between 8 and 128 characters.");
    generatePW();
  }

  let hasNumeric = confirm("Would you like numbers in your password?");
  let hasLowerCase = confirm("Would you like lowercase letters?");
  let hasUpperCase = confirm("Would you like uppercase letters?");
  let hasSpecialChar = confirm("Would you like special character?");

  let minimumCount = 0;

  
  hasNumeric = false;
  hasLowerCase = false;
  hasUpperCase = false;
  hasSpecialChar = false;
  //   //Empty minimum variabels

  let minimumNumeric = "";
  let minimumLowerCase = "";
  let minimumUpperCase = "";
  let minimumSpecialChar = "";

  if (hasNumeric === true) {
    minimumNumeric = functionArray.getNumbers();
    minimumCount++;
  }
  if (hasLowerCase === true) {
    minimumLowerCase = functionArray.getLowerCase();
    minimumCount++;
  }
  if (hasUpperCase === true) {
    minimumUpperCase = functionArray.getLowerCase();
    minimumCount++;
  }
  if (hasSpecialChar === true) {
    minimumSpecialChar = getSpecialChar();
    minimumCount++;
  }


  //Generator
  let functionArray = {

    getNumbers: () => hasNumeric[Math.floor(Math.random() * hasNumeric.length)],

    getLowerCase: () => hasLowerCase[Math.floor(Math.random())],

    getUpperCase: () => hasUpperCase[Math.floor(Math.random())],

    getSpecialChar: () => hasSpecialChar[Math.floor(Math.random() * specialCharacters.length)]
  };
  // console.log(Object.keys(functionArray));
  console.log(Object.keys(functionArray + "this is FUNCTIONARRAY!!!"));
  // console.log(JSON.stringify(functionArray));
 

    let generatedPW = "";



    generatedPW += minimumNumeric;
    generatePW += minimumLowerCase;
    generatePW += minimumUpperCase;
    generatedPW += minimumSpecialChar;

    return generatedPW;
}
