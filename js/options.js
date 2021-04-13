// DOM Elements
const themeOptions = document.getElementById("theme")
const difficultyOptions = document.getElementById("difficulty")

// Game Variables
let difficulty = "easy"
let theme = "blue"
let numberOfMistakes = 0;

// Functions
const setTheme = (newTheme) => {
    theme = newTheme

    switch(theme){
        case "blue":
            document.documentElement.style.setProperty('--main-color', '#272057');
            document.documentElement.style.setProperty('--main-color-lighter', '#393072');
            break;
        case "dark":
            document.documentElement.style.setProperty('--main-color', '#333');
            document.documentElement.style.setProperty('--main-color-lighter', '#666');
            break;
        case "purple":
            document.documentElement.style.setProperty('--main-color', '#490d85');
            document.documentElement.style.setProperty('--main-color-lighter', '#752abf');
            break;
        case "red":
            document.documentElement.style.setProperty('--main-color', '#a6283d');
            document.documentElement.style.setProperty('--main-color-lighter', '#d1435b');
            break;
        default:
            break;
    }
}

const setDifficulty = (newDifficulty) => {
    difficulty = newDifficulty

    switch(difficulty){
        case "easy":
            numberOfMistakes = 0;
            break;
        case "hard":
            numberOfMistakes = 3;
            break;
        case "very-hard":
            numberOfMistakes = 5;
            break;
        default:
            break;
    }
}

// Listeners
themeOptions.addEventListener("input", e => {
    setTheme(e.target.value)
})

difficultyOptions.addEventListener("input", e => {
    setDifficulty(e.target.value)
})