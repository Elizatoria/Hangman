import prompt from "readline-sync";
import wordBank from "./wordbank.js";

console.log("\nWelcome to Hangman!\nPress ctrl+c to stop\n");

const randomWord = wordBank[Math.round(Math.random() * wordBank.length)];
console.log(randomWord);

const answerSpace = [];
for (let index = 0; index < randomWord.length; index++) {
      answerSpace[index] = "_";
}
//console.log(answerSpace);

//const endDisppay = false;

const startGame = (wordLetters, wrongGuesses) => {
    while (wordLetters > 0 && wrongGuesses > 0) {
    console.log(answerSpace.join(" "));
    let letter = prompt.question("Please guess a letter: ");
    letter = letter.toLowerCase();
    if (letter.length === 1) {
    for (let i = 0; i < randomWord.length; i++) {
               if (randomWord[i] === letter && answerSpace[i] === "_") {
                   answerSpace[i] = letter;
    wordLetters--;
    }
    }
    wrongGuesses--;
    } 
} 
if (wordLetters === 0 || wrongGuesses === 0) {
    const lossGame = (wrongGuesses) => { 
            if (wrongGuesses === 0) {
                console.log("You Loose! The answer was " + randomWord);
            }
            };
            const winGame = (wordLetters) => {
            if (wordLetters === 0) {
              console.log("You Win! The answer was " + randomWord);
            }
            };
}
};
startGame(randomWord.length, 6);

// const displayIfWon = () => {
//     if hasWon () {
//         console.log("You Win! The answer was " + randomWord); 
//     } else
//         console.log("You Loose! The answer was " + randomWord);
// };

// const endDisppay = (wordLetters, wrongGuesses) => {
//     if (wordLetters === 0) {
//               console.log("You Win! The answer was " + randomWord);
//             } if (wrongGuesses === 0) {
//                 console.log("You Loose! The answer was " + randomWord);
//             }
// }
// const lossGame = (wrong) => { 
//     if (wrong === 0) {
//         console.log("You Loose! The answer was " + randomWord);
//     }
//     };
//     lossGame(wrongGuesses); 
//     const winGame = (correct) => {
//     if (correct === 0) {
//       console.log("You Win! The answer was " + randomWord);
//     }
//     };
//     winGame(wordLetters);