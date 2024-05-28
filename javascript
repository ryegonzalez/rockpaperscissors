var humanScore = 0
var computerScore = 0
var decision = 0
/*
Let there be three options that the computer can choose from: rock, paper or scissors.
Let the computer choose from these three options, all three have a random but equal chance of being chosen.
Return the "choice" that the computer has made
*/
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let computerChoice = options[Math.floor(Math.random() * 3)];
    return computerChoice;
}


/*
Prompt the person that is using this, ask them for rock, paper or scissors.
Return whatever the person put in
*/
function getHumanChoice() {
    let humanChoice = prompt("rock, paper, or scissors? (with no punctation or anything else, just the raw answer please or it breaks and you feel sad)");
    return humanChoice;
}


/*
If the player and a computer put in the same input, that means it's a draw, so print that
Otherwise, if the player chooses the option that beats the "choice" the computer made, then they win, so print out that they won, and set the decision variable to acknowledge
Otherwise, if the player chooses the option that gets beaten by the computers, then they lose, so that's printed out instead, and the decision variable's set to acknowledge that as well.
And if the result is none of these, then it's likely that the person made a mistake when answering the initial prompt, so state that an error occured and explain what might've happened
*/
function playRound(computerResult, humanResult) {
    console.log(decision)
    if (computerResult == humanResult) {
        console.log("Both sides chose " + humanResult + "! It's a draw!")
        decision = 0
    }
    else if ((computerResult == "rock" && humanResult == "paper") || (computerResult == "paper" && humanResult == "scissors") || (computerResult == "scissors" && humanResult == "rock")) {
        decision = 2
        console.log("You win! The computer chose " + computerResult + "!")
    }
    else if ((computerResult == "paper" && humanResult == "rock") || (computerResult == "scissors" && humanResult == "paper") || (computerResult == "rock" && humanResult == "scissors")) {
        decision = 1
        console.log("You lose! The computer chose " + computerResult + "!")
    }
    else
        console.log("Nobody wins or loses because an error occurred. So sorry!");
}

/*
If the decision is equal to two, meaning the person won, add a point to the person's score.
Set the decision variable back to it's initial value, which is zero.
If the decision is equal to one, meaning the computer won, add a point to the computer's score.
Set the decision variable back to it's initial value.
If the decision factor is equal to anything erlse, that means something went wrong or it was a tie, so set the variable back to it's initial value with no other edits
*/
function decide() {
    if (decision == 2) {
        humanScore = humanScore + 1
        decision = 0
        return humanScore
    }
    else if (decision == 1) {
        computerScore = computerScore + 1
        decision = 0
        return computerScore
    }
    else {
    }
}

/*
A function that solves the problem of the fact you can't call multiple functions to perform in a certain order multiple times in one function, so if this function were called it'd run them all in the correct order, but only once
*/
function playGame() {
    getComputerChoice();
    var computerResult = getComputerChoice();
    console.log(computerResult);
    var humanResult = getHumanChoice();
    console.log(humanResult);
    playRound(computerResult, humanResult);
    decide(humanScore, computerScore);
}

/*
A function that runs the function that runs the other functions multiple times.
*/
function playGames() {
    for (var i = 0; i < 5; i++) playGame()
}

console.log(playGames())
console.log(humanScore)
console.log(computerScore)
