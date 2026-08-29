const passwordBox = document.getElementById("password")
const copyButton = document.getElementById("copy");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*";

const characters = upperCase + lowerCase + numbers + symbols;

function getRandomCharacter(characters) {
    return characters[Math.floor(Math.random() * characters.length)];
}

function generatePassword() {
    let password = "";

    password += getRandomCharacter(upperCase);
    password += getRandomCharacter(lowerCase);
    password += getRandomCharacter(numbers);
    password += getRandomCharacter(symbols);

    while (password.length < 16) {
        password += getRandomCharacter(characters);
    }

    passwordBox.value = password;
}

async function copyPassword() {
    if (passwordBox.value == "") {
        alert("Generate a Password First");
        return;
    }

    try {
       await navigator.clipboard.writeText(passwordBox.value);
        copyButton.value = "Copied";
        setTimeout(() => {
            copyButton.value = "Copy";
        }, 1000);

    } catch (error) {
        alert("Failed to copy Password!")
    }
}