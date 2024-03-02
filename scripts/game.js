const answerSection = document.getElementById("answer-section");
const letters = document.querySelector(".letters"); 
const words = [
    "javascript",
    "python",
    "html",
    "php",
    "java",
    "csharp",
    "ruby",
    "swift",
    "kotlin",
    "typescript",
];
let randomWord, dashedWord, incorrectGuesses;

function pickRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function displayDashes(word) {
    return "_".repeat(word.length);
}
function displayOnAnswerSection() {
    answerSection.textContent = dashedWord.split("").join(" ");
}
function startNewGame() {
    randomWord = pickRandomWord();
    dashedWord = displayDashes(randomWord);
    incorrectGuesses = 0; 
    displayOnAnswerSection();
}

function updateDashedWord(word, guessedLetter) {
    let newDashedWord = "";
    for (let i = 0; i < word.length; i++) {
        if (word[i] == guessedLetter) {
            newDashedWord += guessedLetter;
        } else {
            newDashedWord += dashedWord[i];
        }
    }
    return newDashedWord;
}



letters.addEventListener("click", function(event) {
    if (event.target.classList.contains("letter")) {
        const selectedLetter = event.target.textContent.toLowerCase();
        if (randomWord.includes(selectedLetter)) {
            dashedWord = updateDashedWord(randomWord, selectedLetter);
            displayOnAnswerSection();
        } else {
            incorrectGuesses++;
            if (incorrectGuesses ==6) {
                alert("You lost! The word was: " + randomWord);
                startNewGame();
            }
        }
    }
});

document.addEventListener("keydown", function(event) {
    const pressedKey = event.key.toLowerCase();
    if (/[a-z]/.test(pressedKey)) {
        if (randomWord.includes(pressedKey)) {
            dashedWord = updateDashedWord(randomWord, pressedKey);
            displayOnAnswerSection();
        } else {
            incorrectGuesses++;
            if (incorrectGuesses ==6) {
                alert("You lost! The word was: " + randomWord);
                startNewGame();
            }
        }
    }
});

startNewGame();
