// DOM Elements
const statsTable = document.querySelector(".stats table tbody");

// Game Variables
const gamesPlayed = [
    {
        id: 1,
        mistakes: 4,
        tries: 9,
        gameWon: true,
        secretWord: "secret1"
    },
    {
        id: 2,
        mistakes: 8,
        tries: 8,
        gameWon: false,
        secretWord: "secret2"
    },
    {
        id: 3,
        mistakes: 0,
        tries: 5,
        gameWon: true,
        secretWord: "secret3"
    },
    {
        id: 4,
        mistakes: 6,
        tries: 8,
        gameWon: true,
        secretWord: "secret4"
    }
];

// Functions
const addGame = (tries, mistakes, gameWon, secretWord) => {
    gamesPlayed.push({
        id: gamesPlayed.length + 1,
        tries, 
        mistakes, 
        gameWon,
        secretWord
    })
}

const setStats = () => {
    statsTable.innerHTML = "";

    gamesPlayed.forEach(game => {
        statsTable.innerHTML += `
            <tr>
                <td>${game.id}</td>
                <td>${game.mistakes}</td>
                <td>${game.tries}</td>
                <td>${game.secretWord}</td>
                <td>${game.gameWon ? "Yes" : "No"}</td>
            </tr>
        `
    })
}