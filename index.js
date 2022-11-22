import prompt from "readline-sync";
import wordBank from "./wordbank.js";

// const answer = '';
// const maxWrong = 6;
// const mistakes = 0;
// const guessed = [];

console.log("\nWelcome to Hangman!\nPress ctrl+c to stop\n");

const randomWord = wordBank[Math.round(Math.random() * wordBank.length)];
console.log(randomWord);

const answerSpace = [];
for (let index = 0; index < randomWord.length; index++) {
      answerSpace[index] = "_";
}
//console.log(answerSpace);

const wordLetters = randomWord.length;
const guesses = wordLetters + 6;

while (wordLetters > 0 && guesses > 0) {
  console.log(answerSpace.join(" "));
  
  const letter = prompt.question("Please guess a letter: ");
  if (letter === null) {
    break;
} else if (letter.length !== 1) { 
    console.log("Please enter a single letter.");
} else {   
      letter.toLowerCase();
      
      for (let j = 0; j < randomWord.length; j++) {
           if (randomWord[j] === letter && answerSpace[j] === "_") {
               answerSpace[j] = letter;
               wordLetters-1;
           } 
      }
    guesses-1;
}
};

const endGame = () => {
//console.log(answerSpace.join(" "));
if (wordLetters === 0) {
    console.log("You Win! The answer was " + word);
} else {
    console.log("You Loose! The answer was " + word);
}
};


// const lowerCase = (letter) => {
//   for (let i = 0; i < randomWord.length; i++) {
//     if (randomWord[i].toLowerCase() === letter) {
//       answerSpace[i] = randomWord[i];
//       tick = true;
//     } else if (answerSpace[i] === undefined) {
//       answer[i] = '_';
// }
// }
// };
// console.log(lowerCase);