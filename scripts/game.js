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
let randomWord = pickRandomWord();
let dashedWord = displayDashes(randomWord);

function pickRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function displayDashes(word) {
  return "_".repeat(word.length);
}

function updateDashedWord(word, guessedLetter) {
  let newDashedWord = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] === guessedLetter) {
      newDashedWord += guessedLetter;
    } else {
      newDashedWord += dashedWord[i];
    }
  }
  return newDashedWord;
}

function displayOnAnswerSection() {
  answerSection.textContent = dashedWord.split("").join(" ");
}

letters.addEventListener("click", function (event) {
  if (event.target.classList.contains("letter")) {
    const selectedLetter = event.target.textContent.toLowerCase();
    if (randomWord.includes(selectedLetter)) {
      dashedWord = updateDashedWord(randomWord, selectedLetter);
      displayOnAnswerSection();
    }
  }
});

document.addEventListener("keydown", function (event) {
  const pressedKey = event.key.toLowerCase();
  if (/[a-z]/.test(pressedKey)) {
    if (randomWord.includes(pressedKey)) {
      dashedWord = updateDashedWord(randomWord, pressedKey);
      displayOnAnswerSection();
    }
  }
});

displayOnAnswerSection();
