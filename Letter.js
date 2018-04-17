
function Letter(underlyingLetter, userGuess){
	this.underlyingLetter = underlyingLetter,
	this.userGuess = userGuess,
	
	this.display = function(){
		if (userGuess === underlyingLetter) {
			
			return " " + this.underlyingLetter + " ";
		}else{
			
			return " _ ";
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
module.exports = Letter;
