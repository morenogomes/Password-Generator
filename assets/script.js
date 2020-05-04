//Password generator
//lowercase, uppercase, numeric, and/or special 
// const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q'];
const lowerCase = () => String.fromCharCode(Math.floor(Math.random() * 26 + 97));
// const uppercase = ['A', 'B', 'C', 'D'];
const upperCase = () => String.fromCharCode(Math.floor(Math.random() * 26 + 65));
// const numbers = ['0', '1', '2', '3'];
const numbers = () => String.fromCharCode(Math.floor(Math.random() * 10 + 48));

const specialChar = () => String.fromCharCode(Math.floor(Math.random() * 14 + 33));
// const specialChar = ['@', '#', '$', '%'];
const password = [];
const possibleChar = [];
console.log( "connected")
document.getElementById("generate").addEventListener("click", function() {
    console.log("on click")
    let pwLengh = prompt("Choose between 8 and 128 characters."); 
        if(pwLengh < 8 || pwLengh > 128 ){
        alert("Password must have between 8 and 128 characters.");
        // if pwLengh includes (leters)
        };
        let hasNumberic = confirm("Do you whant numbers in your password? ");
     

        let hasUpperCase = confirm( "Do you whant uppercase letters?");
        let hasLowerCase = confirm( "Do you whant lowercase letters?");
        let hasSpecialChar = confirm( "Do you whant special character?");
        console.log("numeric or not? " +hasUpperCase);
        var userOptions = {
            passwordLength: pwLengh,
            hasLowerCase: hasLowerCase,
            hasUpperCase: hasUpperCase,
            hasNumberic: hasNumberic,
            hasSpecialChar: hasSpecialChar
        };
        function randomGen(array){
            var randomNumber = Math.floor(Math.random() *array.length);
            var randomChar = array[randomNumber];
            return randomChar;
        }
        function passwordGen(){
            if(userOptions.hasLowerCase){
                var randomValue = randomGen(lowercase)
                possibleChar.push(lowercase)
                password.push(randomValue);
            }
            if(userOptions.hasUpperCase){
                var randomValue = randomGen(uppercase)
                possibleChar.push(uppercase);
                password.push(randomValue);
            }
            if(userOptions.hasNumberic){
                var randomValue = randomGen(numberic)
                possibleChar.push(numeric);
                password.push(randomValue);
            }
            if(userOptions.hasSpecialChar){
                possibleChar.push(specialChar);
                var randomValue = randomGen(specialChar)

                password.push(randomValue);
            }
            // if(password.length < userOptions.passwordLength){
            //     for(var i=0;)
            // }
        }

        
    
    // generatepw(pwLenght)
    // var lowercaseTrue = confirm("Include Lowercase in your password?");
    
    // var upercaseTrue = confirm("Include Uppercase in your password?");

    // var numbersTrue = confirm("Include numers in your password?");

    // var specialCharTrue = confirm("Include special characters in your password?");

   
})

// function generatepw(userpwLenght)
//     var password = '';
//     {
//     for ( i = 0; i < userpwLenght; i++) {
//         //
//         console.log(pwLowercase[Math.random])
//         password = password + pwLowercase[Math.random]
//     }
// }

// var lowercaseTrue = confirm("Do you want lowercase letters?");

// var upercaseTrue = confirm("Do you want upercase letters?");

// var numbersTrue = confirm("Do you want number?");

// var specialCharacterTrue = confirm("Do you want special characters?");

// if (lowercaseTrue) {
//     pwUpercase(Math.random());
// }

// console.log(lowercaseTrue);

//     if (lovercaseTrue) = 





//     var pwUpercase = confirm("Do you want to include Upercasse?");
//     var pwNumbers = confirm("Do you want to include numbers?");
//     var pwspecialCharacters = confirm("Do you want to include special characters?");


// var pwLeght = 

// var pwLovercase = String.fromCharCode(97, 122);

// var pwUpercase = String.fromCharCode(65, 90);

// var pwNumbers = String.fromCharCode(48, 57);

// var pwSpecialCharacters = String.fromCharCode(58, 63);

// var pwLowercase = confirm("Do you want to include lovercase?");
//     if (pwLowercase === true [Math.floor(Math.random() * 128)]);
    




// var pwUpercase = confirm("Do you want to include Upercasse?");
// var pwNumbers = confirm("Do you want to include numbers?");
// var pwspecialCharacters = confirm("Do you want to include special characters?");

// if(pwLowercase) {
    
// }




// document.getElementById("generate").addEventListener("click", function(){
//     var pwLeght = prompt("Choose between 8 and 128 characters.");
//   });





// document.getElementById('generate').addEventListener('click', function(){
//     // document.getElementById('password').innerHTML= 
//     var passwordArray= "";
//     if (confirm("Do you want capital letters?")){
//         passwordArray += "capital";
//     }
    
// });
// user input 2.Depending on the input create options variable 3. Loop times users password lenght. 4. 

// objects lesson Gandalf



// console.log(Math.floor(Math.random() * 128));
// uppercase = "ABCD"
// lowercase = "abcd"
// special = "!*&#@"
// num = 123123

// option = ""

// if (user wants uppercase ) {
//     options += uppercase
// }
// options = "asdflaksjdfj"

// 1 = l 
// 2 = a
// 3 = 
