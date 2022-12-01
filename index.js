import prompt from "readline-sync";
import wordBank from "./wordbank.js";

console.log("\nWelcome to Hangman!\nPress ctrl+c to stop\n");

//Chooses a Random Word from the Word Back
const randomWord = wordBank[Math.round(Math.random() * wordBank.length)];

//Makes Letter Spaces into an array
const answerSpace = [];
for (let index = 0; index < randomWord.length; index++) {
      answerSpace[index] = "_";
}

const startGame = (wordLetters, wrongGuesses) => {
    while (wordLetters > 0 && wrongGuesses > 0) {
    console.log(answerSpace.join(" ")); //Makes the Space Array into a String
    let letter = prompt.question("Please guess a letter: "); 
    letter = letter.toLowerCase(); //Makes all Letters the same Case
//Loop to Create the Word
let isCorrectLetter = false;
    if (letter.length === 1) {
    for (let i = 0; i < randomWord.length; i++) {
               if (randomWord[i] === letter && answerSpace[i] === "_") {
                   answerSpace[i] = letter;
                   wordLetters--;
                   isCorrectLetter = true;
                   console.log(`Right Guesses Left: ${wordLetters}`);
                    
    }
    } 
    if (isCorrectLetter === false) {
        wrongGuesses--;
        console.log(`Wrong Guesses Left: ${wrongGuesses}`);
        }
    }
} 
//Closes While Loop to End Game
if (wordLetters === 0 || wrongGuesses === 0) {
            const lossGame = (wrong) => { 
                if (wrong === 0) {
                    console.log("You Loose! The answer was " + randomWord);
                }
                };
                const winGame = (correct) => {
                if (correct === 0) {
                  console.log("You Win! The answer was " + randomWord);
                }
                };
                lossGame(wrongGuesses); 
                winGame(wordLetters);             
}
};
startGame(randomWord.length, 6);