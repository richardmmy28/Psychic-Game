var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 9;
var lettersGuessed = [];
var computerChoice = reset();

function reset(){
   return letters[Math.floor(Math.random() * letters.length)]
}

console.log(computerChoice);

document.onkeyup = function(event) {
    var userGuess = event.key;
    //This outputs letters used//
    lettersGuessed.push(userGuess);
    //This if statement allows user to choose letter.//
    if(userGuess === computerChoice){
        wins++;
        alert("you guessed the right letter");
        start(); 
    
    //This elseIf statement keeps track of how many guesses and passes an alert if you're guess is wrong //
    }else if(userGuess != computerChoice){
        guesses--;
        alert("Guess Again");
    }
    
        
    //this if statment equates to game loss//
    if(guesses === 0){
        losses++;
        start();
    }
function start(){
    guesses = 9;
    computerChoice = reset();
    lettersGuessed = [];
    


}

   
document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "losses: " + losses;
document.getElementById("guesses").innerHTML = "Guesses left: " + guesses;
document.getElementById("used").innerHTML = "Letters guessed: " + lettersGuessed;

}
   
   

