var request = require("request");
var Letter = require("./letter.js");

function Word(lettersInWord, wLength, indexArray, userGuess) {
	this.lettersArray = [],
	this.displayWord = [],
	this.lettersInWord = lettersInWord,
	this.wLength = wLength,
	this.indexArray = [],

	this.letterDisplay = function(){
		// console.log(this);
		for (var i = 0; i < this.wLength; i++) {
			var letter = new Letter(this.lettersInWord[i], userGuess)
			// console.log(letter);
			this.lettersArray.push(letter);
			// console.log(letter);
			this.displayWord.push(letter.display());
			this.indexArray.push(letter.isCorrect(userGuess));
				
		}
		console.log(this.displayWord.toString());
		console.log(indexArray);
	}
}
	
		
// var indexArray = [];
// var randomWord = "baseball";
// var lettersInWord = randomWord.split("");

// var wLength = lettersInWord.length;
// // console.log(wLength);
// var newWord = new Word(lettersInWord, wLength, indexArray, "l");
// newWord.letterDisplay();

// // console.log(newWord);
// // console.log(newWord.toString());

module.exports = Word;


