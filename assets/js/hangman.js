// "use strict";

var wordList = ['arya','cersei','jon','daenerys','tyrion','sansa','ned','joffrey','hound','jaime','hodor'];
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


// Console Log Key Pressed
document.onkeypress = function (event) {
  var keyChar = event.key.toUpperCase();
  console.log(keyChar + " was pressed ");
}

function playGame() {
	newName();{

function newName() {
	chosenName = wordList[Math.floor(Math.random() * wordList.length)];

  wordLength = chosenName.replace(/\s/g, "-").split("");
  blanksNeeded = wordLength.Length;

  // add blanks
  for (var i = 0; i < blanks; i++) {
    if (wordLength[i] === "-" || wordLength[i] === " ") {
      blankShown.innerHTML("&nbsp;");
      space += 1;
    } else {
      blankShown.innerHTML("_");
    }
    wordSpace.innerHTML = blankShown;
  }
}
}

// Guessed Letters
function guessed() {
  if (guessed.indexOf(userGuess) === -1) {
    guessed.push(userGuess);
  } else if (guessed.indexOf(userGuess) > -1) {
    correct--;
  }
  show.innerHTML = guessed.toString();
}

function checkLetters() {
  $(chosenWord.split("")).each(function (index, character) {
    if (character === userGuess) {
      blankShown[index] = userGuess;
      wordSpace.innerHTML = blankShown;
      correct++;
    }
  })
}

function guessCount() {
  count.innerHTML = guessRemain;
  count.onkeyup = guessRemain--;
}

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
}

playGame();

document.onkeyup = function (event) {
  hint.innerHTML = "People who could help or hurt you when playing for the throne?";

  userGuess = event.key.toLowerCase();

  guessCount();

  winLost ();

  checkLetters();

  guessed();
}



