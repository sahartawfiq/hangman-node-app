
function Letter(underlyingLetter, userGuess){
	this.underlyingLetter = underlyingLetter,
	this.userGuess = userGuess,
	
	this.display = function(){
		if (this.isCorrect()) {
			// console.log('underlying letter: ' + this.underlyingLetter);
			return this.underlyingLetter;
		}else{
			// console.log("_");
			return "_";
		}
	},
	this.isCorrect = function(userGuess){
		if(this.underlyingLetter===this.userGuess){
			return true;
		}else{
			return false;
		}		
	}
}
// var a = new Letter("t", "t");

// console.log(a.isCorrect());
// a.display();
// module.exports = Letter;
