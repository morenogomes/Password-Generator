const generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", writePassword);
// const generateBtn = document.getElementById("generate");
// generateBtn.addEventListener("click", writePassword);

const specialCharacters = "!@#$%^&*¶§∞£¢∞§¶";
// let password = [];
// let possibleChar = [];

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

  let hasNumeric = confirm("Do you want numbers in your password?");
  let hasLowerCase = confirm("Do you want lowercase letters?");
  let hasUpperCase = confirm("Do you want uppercase letters?");
  let hasSpecialChar = confirm("Do you want special character?");

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
    getNumbers: () => String.fromCharCode(Math.floor(Math.random() * 10 + 48)
    ),

    getLowerCase: () => String.fromCharCode(Math.floor(Math.random() * 26 + 97)),

    getUpperCase: () => String.fromCharCode(Math.floor(Math.random() * 26 + 65)),

    getSpecialChar: () => String.specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
  };
  console.log(functionArray);
 

    let generatedPW = "";



    generatedPW += minimumNumeric;
    generatePW += minimumLowerCase;
    generatePW += minimumUpperCase;
    // generatedPW += minimumSpecialChar;

    return generatedPW;
}
