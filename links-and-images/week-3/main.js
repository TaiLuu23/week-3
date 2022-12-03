// Function for Computer to return random value (Rock, Paper or Scisscors)
function computerPlay(){
    let result;
    let comChoice;
    result = Math.floor((Math.random() * 3) + 1);

    if(result == 1){
        comChoice = "rock";
    }else if (result == 2 ){
        comChoice = "papper";
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
    //let final;

    // Computer choice is papper
    if(playerSelection == "scissors" && computerSelection == "papper"){
        console.log("You win!")

    }else if(playerSelection == "papper" && computerSelection == "papper"){
        console.log("It's a tie!")

    }else if(playerSelection == "rock" && computerSelection == "papper"){
        console.log("You lose!")
    
    // Computer choice is rock
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        console.log("You lose!")

    }else if(playerSelection == "rock" && computerSelection == "rock"){
        console.log("It's a tie!")

    }else if(playerSelection == "papper" && computerSelection == "rock"){
        console.log("You win!")
    
    // Computer choice is scissors
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        console.log("You win!")

    }else if(playerSelection == "papper" && computerSelection == "scissors") {
        console.log("You lose!")

    }else if(playerSelection == "scissors" && computerSelection == "scissors") {
        console.log("It's a tie!")
    }

}


//Five rounds game function
function game(){
    let countForComputer = 0;
    let countForUser = 0;

    for (i = 0; i < 5; i++){

        let yourChoice = window.prompt("Enter your choice");
        let computerSelection = computerPlay();
        console.log("Your choice is " + yourChoice);
        console.log("Computer choice is " + computerSelection)
        console.log(playRound(yourChoice.toLowerCase(), computerSelection));

        // if(final =="You lose!"){
        //     countForComputer++;
        //     console.log(countForComputer)
        // }else if(final == "You win!"){
        //     countForUser++;
        //     console.log(countForUser);
        // }
    }
    // console.log(countForComputer)
    // console.log(countForUser);
}
game();
