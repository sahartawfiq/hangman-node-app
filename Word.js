
var Letter = require("./Letter.js");

function Word(ourWord, wLength, userGuess) {
	this.ourWord = ourWord,
	this.theDisplay = [],
	// this.lettersInWord = lettersInWord,
	this.wLength = wLength,
	this.userGuess = userGuess,

	this.letterArray = function(){
		
		for (var i = 0; i < this.ourWord.length; i++) {
			var char = new Letter(this.ourWord[i], userGuess);
			this.theDisplay.push(char);
							
		}		
	},
	this.displayLetters = function(){
        var letterString = "";
        for (var i=0; i < this.theDisplay.length; i++){
            
            letterString = letterString + this.theDisplay[i].display();
        }
        return letterString;
	},
	this.displayWord = function(userGuess){
		var status = false;
		for (var i = 0; i < this.theDisplay.length; i++) {
			if (this.theDisplay[i].isCorrect(userGuess)) {
				status = true;
			} 
		}
		return status; 
	}
}

	
		
// var indexArray = [];
// var randomWord = "baseball";
// var lettersInWord = randomWord.split("");

// var wLength = lettersInWord.length;
// console.log(wLength);
// var newWord = new Word(randomWord, wLength, "l");
// newWord.displayWord();
// var x = newWord.displayLetters();
// console.log(x);


module.exports = Word;


