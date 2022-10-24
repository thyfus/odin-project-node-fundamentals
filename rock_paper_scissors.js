const prompt = require("prompt-sync")({ sigint: true });

// options
const choices = ["rock", "paper", "scissors"];

// user input/choice 
var user_choice = prompt("rock, paper or scissors: ");

// print user choice
console.log(user_choice)

// computer choice, it's a random number between 0 and the length of the choices list
var random = Math.floor(Math.random() * choices.length);

var computer_choice = (choices[random]);

// print computer choice
console.log(computer_choice);

// game logic
// ties
if (user_choice == computer_choice)  {
    console.log('tie')
}
// user wins
else if ((user_choice == "rock" && computer_choice == "scissors") ||
(user_choice == "paper" && computer_choice == "rock") ||
(user_choice == "scissors" && computer_choice == "paper")
) {
    console.log("you win")
}
// user loses 
else {
    console.log("you lose")
}