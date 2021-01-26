class Hangman {
  constructor(message) {
    this.message = message;
    this.guesses = 6;
    this.guessedLetters = [];
  }
  getDisplayMessage() {
    let resultOfAddingAsteriks = "";
    const allTheLetters = this.message.split("");

    for (let i = 0; i < allTheLetters.length; i++) {
      const currentLetter = allTheLetters[i];
      if (this.guessedLetters.includes(currentLetter)) {
        resultOfAddingAsteriks += currentLetter;
      } else if (currentLetter !== " ") {
        resultOfAddingAsteriks += "*";
      } else {
        resultOfAddingAsteriks += " ";
      }
    }

    return resultOfAddingAsteriks;
  }

  guessLetter(letter) {
    const upperCasedLetter = letter.toUpperCase();
    console.log(upperCasedLetter, letter);
    const splitPhrase = this.message.split("");

    // COMPARE APPLES TO APPLES, make sure you compare upper case to upper case
    const letterGuessedIsInPhrase = splitPhrase
      .map(function (currentLetter) {
        return currentLetter.toUpperCase();
      })
      .includes(upperCasedLetter);

    if (letterGuessedIsInPhrase) {
      this.guessedLetters.push(letter);
    } else {
      this.guesses--;
    }

    // see if phrase includes letter that was guesses
    // record what letters have been guessed

    // decrement remaining guesses
  }

  getRemainingGuesses() {
    return this.guesses;
  }

  isMessageSolved() {
    let isSolved = true;
    const splitMessage = this.getDisplayMessage().split("");
    for (let i = 0; i < splitMessage.length; i++) {
      let currentLetter = splitMessage[i];
      if (currentLetter == "*") {
        isSolved = false;
        return isSolved;
      }
    }
    return isSolved;
  }
}

module.exports = Hangman;
