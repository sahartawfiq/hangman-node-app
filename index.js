var inquirer = require("inquirer");
var request = require("request");
var Word = require("./Word.js");
process.on('unhandledRejection', up => { console.log(up);});
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


var underlyingWord = new Word(selectedWord, wLength, userGuess);
play();

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
 	
 		if (userGuess) {
 			if (underlyingWord.displayWord(userGuess)) {
        console.log("\n" +"-------------------------" + "\n")
        console.log("Good Guess!!!");
        console.log("\n" +"-------------------------" + "\n")
      }else{
        console.log("\n" +"-------------------------" + "\n")
        console.log("Incorrect Guess :(");
        console.log("You have " + remainingGuesses + "  gusses left");
        console.log("\n" +"-------------------------" + "\n")
        remainingGuesses--;
        if (remainingGuesses === 0) {
          console.log("\n" +"-------------------------" + "\n")
          console.log("Game Over!!!!");
          console.log("\n" +"-------------------------" + "\n")
          return;
        }
      }
 			
      console.log(underlyingWord.displayLetters());
      enterALetter();
 		}     
 	})      	  	      	  
};


function play(){
    inquirer.prompt([
        {
        type: "confirm",
        name: "start",
        message: "Do you want to play?"},
        ]).then(function(data){
            if (data.start){
              console.log(underlyingWord.displayLetters());
              underlyingWord.letterArray();
              enterALetter();           
            } else {
                console.log("Bye!")
                return;
            }
        })
};


