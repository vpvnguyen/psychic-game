var correctLetter = ["v"];
var wins = 0;
var losses = 0;
var guessLeft = 9;
var guessLetter = [];

// when user presses a key, run function
document.onkeyup = function (a) {
    var userGuess = a.key;

    // Start game logic
    if (correctLetter.indexOf(userGuess) === -1) {
        guessLeft--;
        document.getElementById("guesses-left").innerHTML = guessLeft;
        document.getElementById("losses").innerHTML = losses;
        guessLetter.push(userGuess);
        document.getElementById("guessed").innerHTML = guessLetter;
    } else {
        wins++; // lose a point
        document.getElementById("wins").innerHTML = wins;
    }
}