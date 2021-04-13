// DOM Elements
const mistakesDiv = document.querySelector(".mistakes");
const winStatus = document.getElementById("win-status");
const secretWordReveal = document.getElementById("reveal-word")
const gameEndedMessage = document.querySelector(".game-ended-message");
const buttons = document.querySelector(".buttons");
const playAgainButton = buttons.querySelector("span");
const goBackToMenuButton = buttons.querySelector(".go-back");

// Game Variables
let mistakes = [];
let tries = 0;
let correctLetters = []
let gameFinished = false;

// Functions
const getLetterOccurences = (key) => {
    let occurences = []

    for(let i = 0; i < secretWord.length; i++){
        if(secretWord[i] == key){
            occurences.push(i)
        }
    }

    return occurences;
}


const clearMistakes = () => {
    mistakesDiv.innerHTML = "";
}

const setMistakes = () => {
    clearMistakes();

    mistakesDiv.innerHTML += `
        <strong>
            <span>[</span>
        </strong>
    `

    mistakes.forEach((mistake, i) => {
        mistakesDiv.innerHTML += `<span>${mistake}${i !== mistakes.length - 1 ? "," : ""}</span>`
    })

    mistakesDiv.innerHTML += `
        <strong>
            <span>]</span>
        </strong>
    `

    hangman[hangmanParts[numberOfMistakes - 1]].classList.remove("hidden");

    if(numberOfMistakes === hangmanParts.length){
        currentGameFinished(false)
    }
}

const addCorrectLetter = (letter, occurences) => {
    for(let i = 0; i < occurences.length; i++){
        correctLetters.push(letter);
    }

    occurences.forEach(index => {
        document.getElementById(`letter-${index}`).innerText = letter;
    })

    if(correctLetters.length === secretWord.length){
        currentGameFinished(true)
    }
}

const currentGameFinished = (win) => {
    gameFinished = true;

    if(win){
        winStatus.innerText = "You Won!"
    }else{
        winStatus.innerText = "You Lost!"
    }

    secretWordReveal.innerText = `The secret word was ${secretWord}`

    secretWordDiv.classList.add("hidden");
    gameEndedMessage.classList.remove("hidden");
    buttons.classList.remove("hidden");

    addGame(tries, mistakes.length, win, secretWord)
}

const playAgain = () => {
    gameScreen.classList.add("hidden")
    secretWordForm.classList.remove("hidden")
}

const goBackToMenu = () => {
    gameScreen.classList.add("hidden")
    menuScreen.classList.remove("hidden");
}

const initializeEverything = () => {
    secretWord = "";
    gameFinished = false;
    mistakes = []
    correctLetters = [];
    tries = 0;
    numberOfMistakes = difficulty === "easy" ? 0 : difficulty === "hard" ? 3 : 5;

    winStatus.innerText = ""
    secretWordReveal.innerText = ""

    clearMistakes();
    secretWordDiv.innerHTML = "";
    secretWordDiv.classList.remove("hidden")

    hangmanParts.forEach(part => {
        if(!hangman[part].classList.contains("hidden")){
            hangman[part].classList.add("hidden");
        }
    })
}

const resetGame = (goToMenu) => {
    initializeEverything();

    if(!goToMenu){
        playAgain();
    }else{
        goBackToMenu();
    }
}

// Listeners
window.addEventListener("keydown", e => {
    if(!notInMenu){
        return;
    }

    if(e.key === "Escape"){
        notInMenu = false;

        initializeEverything();

        if(secretWordForm.classList.contains("hidden")){
            gameScreen.classList.add("hidden")
        }else{
            secretWordForm.classList.add("hidden")
        }

        menuScreen.classList.remove("hidden");
    }else{
        if(gameFinished){
            return
        }

        if (e.keyCode >= 65 && e.keyCode <= 90 && secretWord !== ""){
            tries++;

            let occurences = getLetterOccurences(e.key)

            if(occurences.length === 0 && !mistakes.some(mistake => mistake === e.key)){
                mistakes.push(e.key);
                numberOfMistakes++;
                setMistakes();
            }else{
                if(correctLetters.find(letter => letter === e.key)){
                    return
                }

                addCorrectLetter(e.key, occurences);
            }
        }
    }
})

playAgainButton.addEventListener("click", () => {
    resetGame(false)
})

goBackToMenuButton.addEventListener("click", () => {
    resetGame(true)
})