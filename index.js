var inquirer = require("inquirer");
var request = require("request");
var Word = require("./Word.js");
var Letter = require("./Letter.js");

var wordsArray = ["archery", "badminton", "basketball", "boxing", "beach volleyball", "cycling",
"diving", "fencing", "gymnastics", "handball", "karate", "rowing", "sailing", "soccer", "surfing",
"swimming", "synchronized swimming", "track and field", "weightlifting", "wrestling"];


var selectedWord = "";
var lettersInWord = [];
var wLength = 0;
var noOfCharacters = 0;
var lettersArray = [];
var indexArray = [];
var userGuess = "";
var remainingGuesses = 10;
 

selectedWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
lettersInWord = selectedWord.split("");
wLength = lettersInWord.length;
console.log(selectedWord);
console.log(lettersInWord);
console.log(wLength);

var underlyingWord = new Word(lettersInWord, wLength, indexArray, userGuess);
console.log(underlyingWord);
function enterALetter(){
inquirer.prompt([
    {
      	type: "input",
        name: "name",
        message: "Guess a letter: ",
        validate: function(value) {
          	if (value.match(/^[A-Za-z]+$/)) {
            	return true;
          	}else{
          		console.log('\n' + "Please enter a letter" + '\n');
          	return false;
      	  	}  
      	}
    }
 ]).then(function(answers){
 	userGuess = answers.name;
 	for (var i = 0; i < wLength; i++) {
 		if (underlyingWord.indexArray[i]) {
 			console.log(underlyingWord.check(answers.name));
      	  	console.log("Correct Guess!");
      	  	underlyingWord.letterDisplay();
 		}else{
 			remainingGuesses--;
      	  	console.log("wrong Guess, you have" + "  " + remainingGuesses +  " " +"guesses left");
 		} 
 	}      	  	
      	  
 });
}
enterALetter();

//


 
// prompt.get(["Guess a Letter"], function (err, result) {
    
//     console.log('  username: ' + result.username);
//     console.log('  email: ' + result.email);
//   });