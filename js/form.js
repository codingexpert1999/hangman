// DOM Elements
const hangman = {
    head: document.getElementById("head"),
    body: document.getElementById("body"),
    leftArm: document.getElementById("left-arm"),
    rightArm: document.getElementById("right-arm"),
    leftLeg: document.getElementById("left-leg"),
    rightLeg: document.getElementById("right-leg")
}
const secretWordInput = secretWordForm.querySelector("input");
const secretWordDiv = document.querySelector(".secret-word");

// Game Variables
const hangmanParts = ["head", "body", "leftArm", "rightArm", "leftLeg", "rightLeg"];
let secretWord = "";

// Functions
const setSecretWord = () => {
    secretWordDiv.innerHTML = "";

    for(let i = 0; i < secretWord.length; i++){
        secretWordDiv.innerHTML += `<span class="flex-center-row" id="letter-${i}"></span>`
    }
}

const initializeHangmanParts = () => {
    for(let i = 0; i < numberOfMistakes; i++){
        hangman[hangmanParts[i]].classList.remove("hidden");
    }
}

// Listeners
secretWordForm.addEventListener("submit", (e) => {
    e.preventDefault()

    secretWord = secretWordInput.value;
    secretWordInput.value = "";

    setSecretWord();

    initializeHangmanParts();

    secretWordForm.classList.add("hidden")
    gameScreen.classList.remove("hidden")
})