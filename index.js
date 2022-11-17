import prompt from "readline-sync";
import wordBank from "./wordbank.js";

const randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(randomWord);