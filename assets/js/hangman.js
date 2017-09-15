// "use strict";

var names = ['arya','cersei','jon','daenerys','tyrion','sansa','ned','joffrey','hound','jaime','hodor'];
var chosenName = "";
var wordLength = [];
var blanksNeeded = 0;
var blankShown = [];
var correct = 0;
var space = 0;


var guessRemain = 10;
var userGuess = "";
var guessed = [];
var wins = 0;
var losses = 0;

var wordSpace = document.querySelector('#placeholder');
var show = document.querySelector('#guessed');
var count = document.querySelector('#livesLeft');
var loseCount = document.querySelector('#losses');
var winCount = document.querySelector('#wins');
var hint = document.querySelector('#hint');


// Console Log Key Pressed
document.onkeypress = function (event) {
  var keyChar = event.key.toUpperCase();
  console.log(keyChar + " was pressed ");
}

function playGame() {
	newName();
}

var o = function(key,val) {
  console.log(key, val)
}

function newName() {
	chosenName = names[Math.floor(Math.random() * names.length)];

  wordLength = chosenName.replace(/\s/g, "-").split("");
  blanksNeeded = wordLength.length;
  o("blanksShown: ", blankShown)
  blankShown = []
  // was a global variable, needed to be reset to local within the function. Needed to be set as empty before new game.
  o("blanksNeeded: ", blanksNeeded)
  // add blanks
  for (var i = 0; i < blanksNeeded; i++) {
    o("wordLength in loop: ", wordLength[i])
    if (wordLength[i] === "-" || wordLength[i] === " ") {
      blankShown.push("&nbsp;");
      space += 1;
    } else {
      blankShown.push("_");
    }
  }
    // wordSpace.innerHTML = blankShown;
o("blanksShow after loop: ", blankShown)
o("wordSpace: ", wordSpace)

  var stringWord = blankShown.join();

  o("stringWord: ", stringWord)
  wordSpace.innerHTML = stringWord.replace(/,/g, "&nbsp;");
}

// Guessed Letters
function guessedLetters() {
  if (guessed.indexOf(userGuess) === -1) {
    guessed.push(userGuess);
  } else if (guessed.indexOf(userGuess) > -1) {
    correct--;
  }
  show.innerHTML = guessed.toString();
}

function checkLetters(letter) {
  chosenName.split("").forEach(function (char, index) {
    o("character: ", char)
    o("letter: ", letter)
    if (char === letter) {
      blankShown[index] = letter;
      wordSpace.innerHTML = blankShown;
      correct++;
    }

    /*
      update index of array with all blanks so it contains a char on the same index
    */
  })
}

function guessCount() {
  count.innerHTML = guessRemain;
  count.onkeyup = guessRemain--;
}


// make function to update letters div
/*
function update(arrayOfLetters) {
  // TODO: select div to update
  // TODO: join array 
  // TODO: replace content of selected div with joined array
}

*/

function reset() {
    wins = 0;
    winCount.innerHTML = wins;
    losses = 0;
    loseCount.innerHTML = losses;
    blankShow = [];
    userGuess = "";
    correct = 0;
    space = 0;
    guessed = [];
    show.innerHTML = guessed;
    guessRemain = 10;
    count.innerHTML = guessRemain;
    hint.innerHTML = "People who could help or hurt you when playing for the throne?";
    tag.innderHTML = "This is not the day I die.";
    playGame();
}

function newGame() {
    blankShow = [];
    userGuess = "";
    correct = 0;
    space = 0;
    guessed = [];
    show.innerHTML = guessed;
    guessRemain = 10;
    count.innerHTML = guessRemain;
    playGame();
}

function winLost() {
  if (correct + space + 1 >= chosenName.length && guessRemain > 0) {
    alert("What do we say to the Lord of Death? Not today.");
    wins++;
    winCount.innerHTML = wins;
    tag.innerHTML = "Dare to play again?";
  }
  else if (guessRemain <1 && chosenName === "arya") {
    alert("You know nothing, Jon Snow.");
    losses++;
    loseCount.innerHTML = losses;
  }
  else if (guessRemain <1 && chosenName === "cersei") {
    alert("You know nothing, Jon Snow.");
    losses++;
    loseCount.innerHTML = losses;
  }
  else if (guessRemain <1 && chosenName === "jon") {
    alert("You know nothing, Jon Snow.");
    losses++;
    loseCount.innerHTML = losses;
  }
  else if (guessRemain <1 && chosenName === "daenerys") {
    alert("You know nothing, Jon Snow.");
    losses++;
    loseCount.innerHTML = losses;
  }
  else if (guessRemain <1 && chosenName === "tyrion") {
    alert("You know nothing, Jon Snow.");
    losses++;
    loseCount.innerHTML = losses;
  }
  else if (guessRemain <1 && chosenName === "sansa") {
    alert("You know nothing, Jon Snow.");
    losses++;
    loseCount.innerHTML = losses;
  }
  else if (guessRemain <1 && chosenName === "ned") {
    alert("You know nothing, Jon Snow.");
    losses++;
    loseCount.innerHTML = losses;
  }
  else if (guessRemain <1 && chosenName === "joffrey") {
    alert("You know nothing, Jon Snow.");
    losses++;
    loseCount.innerHTML = losses;
  }
  else if (guessRemain <1 && chosenName === "hound") {
    alert("You know nothing, Jon Snow.");
    losses++;
    loseCount.innerHTML = losses;
  }
  else if (guessRemain <1 && chosenName === "jaime") {
    alert("You know nothing, Jon Snow.");
    losses++;
    loseCount.innerHTML = losses;
  }
  else if (guessRemain <1 && chosenName === "hodor") {
    alert("You know nothing, Jon Snow.");
    losses++;
    loseCount.innerHTML = losses;
  }
}

playGame();

document.onkeyup = function (event) {
  hint.innerHTML = ("People who could help or hurt you when playing for the throne?");

  userGuess = event.key.toLowerCase();

  guessCount();

  winLost ();

  checkLetters(userGuess);

  //guessed();
}



