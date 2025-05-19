const passwordInput = document.getElementById("password");
const length =12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
const allCharacters = upperCase + lowerCase + numbers + symbols;

function generatePassword() {
    let password = "";
    for (let i = 0; i < length; i++) {
      //math.random generates a random n0; between 0 and 1 then ultiply by a constnt value of allCharacters.length,,,,,,,,thats how we get a random number between 0 and the length of allCharacters
        //Math.floor rounds down the number to the nearest whole number
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        //so here tthe random chracater is added untill length exceeds
        password += allCharacters[randomIndex];
    }
    passwordInput.value = password;
}

function copyPassword() {
  passwordInput.select();
  document.execCommand("copy");// ttells the browser ----"Copy whatever is currently selected."
}
