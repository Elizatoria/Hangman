import prompt from "readline-sync";
import wordBank from "./wordbank.js";

console.log("\nWelcome to Hangman!\nPress ctrl+c to stop\n");

const randomWord = wordBank[Math.round(Math.random() * wordBank.length)];
console.log(randomWord);

const answerSpace = [];
for (let index = 0; index < randomWord.length; index++) {
      answerSpace[index] = "_";
}
console.log(answerSpace);

const answer = '';
const maxWrong = 6;
const mistakes = 0;
const guessed = [];

const letter = prompt.question("Please guess a letter: ");

const lowerCase = (letter) => {
  for (let i = 0; i < randomWord.length; i++) {
    if (randomWord[i].toLowerCase() === letter) {
      answerSpace[i] = randomWord[i];
      tick = true;
    } else if (answerSpace[i] === undefined) {
      answer[i] = '_';
}
}
};