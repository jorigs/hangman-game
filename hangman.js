"use strict";

var wordList = ['arya','cersei','jon','daenerys','tyrion','sansa','ned','joffrey','hound','jaime','hodor'];
var chosenName = "";


var guessRemain = 10;
var userGuess = "";
var guessed = [];




function playGame() {
	newName();
	if (chosenName === "")
}

function displayWord() {
	for (var i = 0; i < dashWord.length; i++) {
		activeWord.innerHTML = dashWord.join("");
	}
}

document.onkeypress = function (event) {
	var keyChar = event.key.toUpperCase();
	console.log(keyChar + " was pressed ");
}


//Lives Left
function myLives() {
  mylives = getElementById('myLives');
    myLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }

  mylives();

