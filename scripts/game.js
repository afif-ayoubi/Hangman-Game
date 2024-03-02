const answerSection = document.getElementById("answer-section");
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
const randomWord = pickRandomWord(words);
const dahedWord=displaydashes(randomWord);
function pickRandomWord(array) {
  return array[Math.floor(Math.random() * array.length)];
}
function displaydashes(word) {
  return "_".repeat(word.length);
}
