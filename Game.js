const readline = require("readline");
const Hangman = require("./Hangman");

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

let hangman = new Hangman("test the word");

console.log(`Remaining Guesses: ${hangman.getRemainingGuesses()}`);
console.log(hangman.getDisplayMessage());
console.log("Next Guess:");

process.stdin.on("keypress", (str, key) => {
  if (key.sequence === "\u0003") {
    process.exit();
  } else {
    hangman.guessLetter(str);

    console.log(`${str}\n`);

    if (hangman.isMessageSolved()) {
      console.log(
        `You won! The hidden message was ${hangman.getDisplayMessage()}`
      );
      process.exit();
    } else if (hangman.getRemainingGuesses() > 0) {
      console.log(`Remaining Guesses: ${hangman.getRemainingGuesses()}`);
      console.log(hangman.getDisplayMessage());
      console.log("Next Guess:");
    } else {
      console.log(
        `Game Over! The hidden message was ${hangman.getDisplayMessage()}`
      );
      process.exit();
    }
  }
});
