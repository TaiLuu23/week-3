// Function for Computer to return random value (Rock, Paper or Scisscors)
function computerPlay(){
    let result;
    let comChoice;
    result = Math.floor((Math.random() * 3) + 1);

    if(result == 1){
        comChoice = "rock";
    }else if (result == 2 ){
        comChoice = "paper";
    }else{
        comChoice ="scissors";
    }
    // console.log(result);
    // console.log(comChoice);
    return comChoice;
}
computerPlay();

// Play a round function
function playRound(playerSelection, computerSelection){

    // Computer choice is paper
    if(playerSelection == "scissors" && computerSelection == "paper"){
        return "you win!"
    }else if(playerSelection == "paper" && computerSelection == "paper"){
        return "It's a tie"
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        return "you lose!"

    // Computer choice is rock
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        return "you lose!"
    }else if(playerSelection == "rock" && computerSelection == "rock"){
        return "It's a tie"
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        return "you win!"
    
    // Computer choice is scissors
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        return "you win!"
    }else if(playerSelection == "paper" && computerSelection == "scissors") {
        return "you lose!"
    }else if(playerSelection == "scissors" && computerSelection == "scissors") {
        return "It's a tie"
    }

}


//Five rounds game function
function game(){
    for (i = 0; i < 5; i++){
        let yourChoice = window.prompt("Enter your choice");
        let computerSelection = computerPlay();
        console.log("Your choice is " + yourChoice);
        console.log("Computer choice is " + computerSelection)
        console.log(playRound(yourChoice.toLowerCase(), computerSelection));
    }
}
game();
