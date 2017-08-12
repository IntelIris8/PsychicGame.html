//letter choices available
var compChoices = ['a','b','c','d','e','f','g','h','i','j','k','l''m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

var compChoices = compChoices[Math.floor(Math.random() * compChoices.length)];

var updateGuessesLeft = function() {
	document.querySelector ('#guessesLeft').innerhtml = "Guesses Left:" + guessesLeft;
};

var updateLetterToGuess = function() {
	this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.com puterChoices.length)];
	};
	var updateGuessesSoFar = function() {
	}
}
 var reset = function() {
 	totalGuesses = 9;
 	guessesLeft = 9;
 	guessedLetters =[];

 	updateLetterToGuess();
 	updateGuessesLeft();
 	uopdateGuessesSoFar();
 }

 updateLetterToGuess();
 updateGuessesLeft();

 document.onkeyup = function(event) {
 	guessesLeft--;
 var userGuess = String.fromCharCode(event.keycoide).toLowerCase();

 guessedLetters.push(userGuess);
 updateGuessesLeft();
updateGuessesSoFar();

		if (guessesLeft > 0) {
			if (userGuess== letterToGuess) {
				wins++;
				document.querySelector('#wins').innerHTML = "Losses: " + losses;
				alert("Sorry, you're a side kick, try again.");
				reset();
			}
		};




 }