#!/usr/bin/env node

const process = require("node:process");

function getWordCount(text) {
  return text.trim().split(" ").length;
}

function getCharacterCount(text) {
  return text.length;
}
function printHelpMessage() {
  console.log(`
    Usage: text-statistics "<text>"
    Example:
    text-statistics "Hello World. This is a test"

    Output:
    The number of words in "Hello world. This is a test" is: 6 and the number of characters is: 28
    
    `);
}
const userArguments = process.argv.slice(2);
if (userArguments.length !== 1) {
  printHelpMessage();
  return;
}

if (userArguments[0] === "--help" || userArguments[0] === "-h") {
  printHelpMessage();
  return;
}

console.log(
  `The number of words in "${userArguments[0]}" is: ${getWordCount(
    userArguments[0]
  )} and the number of characters is: ${getCharacterCount(userArguments[0])}`
);
