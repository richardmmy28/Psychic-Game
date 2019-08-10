var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 9;

var computerChoice = letters[Math.floor(Math.random() * letters.length)];

console.log(computerChoice)

document.onkeypress = function(event) {
    var userGuess = event.key;

    if(userGuess === computerChoice){
        wins++;
    }else{
        guesses--;
    }
    if(guesses < 1){
        losses++;
    }

   
document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "losses: " + losses;
document.getElementById("guesses").innerHTML = "Guesses left: " + guesses;
}
   
   

