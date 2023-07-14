import openai from "./configure/open-ai.js";
import readlineSync from "readline-sync";
import colors from "colors";

async function main () {
  const userName = readlineSync.question('What is your name?');
  console.log(`Hello ${userName}`)
};

main();