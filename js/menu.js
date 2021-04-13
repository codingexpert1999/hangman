// DOM Elements
const startGameButton = document.getElementById("start-game-button")
const showStatsButton = document.getElementById("show-stats-button")
const showOptionsButton = document.getElementById("show-options-button")
const menuScreen = document.getElementById("menu-screen")
const statsScreen = document.getElementById("stats-screen")
const optionsScreen = document.getElementById("options-screen")
const closeStatsButton = statsScreen.querySelector(".go-back")
const closeOptionsButton = optionsScreen.querySelector(".go-back")
const secretWordForm = document.getElementById("secret-word-form");
const gameScreen = document.getElementById("game-screen")

// Game Variables
let notInMenu = false;

// Listeners
showStatsButton.addEventListener("click", () => {
    setStats();
    
    menuScreen.classList.add("hidden")
    statsScreen.classList.remove("hidden")
})

showOptionsButton.addEventListener("click", () => {
    menuScreen.classList.add("hidden")
    optionsScreen.classList.remove("hidden")
})

closeStatsButton.addEventListener("click", () => {
    menuScreen.classList.remove("hidden")
    statsScreen.classList.add("hidden")
})

closeOptionsButton.addEventListener("click", () => {
    menuScreen.classList.remove("hidden")
    optionsScreen.classList.add("hidden")
})

startGameButton.addEventListener("click", () => {
    menuScreen.classList.add("hidden")
    secretWordForm.classList.remove("hidden")

    notInMenu = true
})