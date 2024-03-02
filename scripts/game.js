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

function startNewGame() {
  randomWord = pickRandomWord();
  dashedWord = displayDashes(randomWord);
  incorrectGuesses = 0;
  displayOnAnswerSection();
  hang.innerHTML = '<img src="./assets/hang.svg" class="stand" />';
}

function pickRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function displayDashes(word) {
  return "_".repeat(word.length);
}

function displayOnAnswerSection() {
  answerSection.textContent = dashedWord.split("").join(" ");
}

function updateDashedWord(word, guessedLetter) {
  const updatedWord = word.split('').map((letter, index) => (letter === guessedLetter ? guessedLetter : dashedWord[index])).join('');
  if (updatedWord === word) {
    setTimeout(function() {
      alert("Congratulations! You guessed the word: " + randomWord);
      startNewGame();
    }, 100);
  }
  return updatedWord;
}


function addHangmanPart() {
  switch (incorrectGuesses) {
    case 1:
      head();
      break;
    case 2:
      body();
      break;
    case 3:
      leftHand();
      break;
    case 4:
      rightHand();
      break;
    case 5:
      leftLeg();
      break;
    case 6:
      rightLeg();
      setTimeout(function() {
        alert("You lost! The word was: " + randomWord);
        startNewGame();
      }, 100);
      break;
  }
}

letters.addEventListener("click", function (e) {
  if (e.target.classList.contains("letter")) {
    const selectedLetter = e.target.textContent.toLowerCase();
    if (randomWord.includes(selectedLetter)) {
      dashedWord = updateDashedWord(randomWord, selectedLetter);
      displayOnAnswerSection();
    } else {
      incorrectGuesses++;
      addHangmanPart(); 
   
    }
  }
});

document.addEventListener("keydown", function (e) {
  const pressedKey = e.key;
  if (/[a-z]/.test(pressedKey)) {
    if (randomWord.includes(pressedKey)) {
      dashedWord = updateDashedWord(randomWord, pressedKey);
      displayOnAnswerSection();
    } else {
      incorrectGuesses++;
      addHangmanPart();
   
    }
  }
});

startNewGame();

