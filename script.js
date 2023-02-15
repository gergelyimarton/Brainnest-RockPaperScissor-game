let nameIsRight = false
let userWins = 0,
opponentWins = 0;
const rounds = 5;
let nameOfPlayer = ""

//legyen egy funkcio ami nem engedi hogy bot, paper, scissor, rock legyen a neved (done!)
//legyen megoldva a jatek elinditasanak a kesleltetese hogy idoben lehessen megnyitni a console-t
//legyen vege ha 3-nal tobb gyozelem van es irja ki a gyoztest
//miert nem irja ki hogy hany ponttal gyozott? (done!)


while (nameIsRight != true){
    let userName = prompt("Hi, this is a Rock Paper Scissor game with 5 rounds.\nWhat's your name?")
    if (userName !== "rock" && userName !== "paper" && userName !== "scissor" && userName !== "Rock" && userName !== "Paper" && userName !== "Scissor" && userName !== "Bot" && userName !== "bot"){
        nameOfPlayer = userName
        nameIsRight = true
    } else {
        alert("Please pick another name!")
    }
}

function exitGame() {
    let shouldExit = confirm("Would you like to continue?");
  
    if (!shouldExit) {
      alert("Thanks for playing. Goodbye!");
      throw new Error("User exited the game");
    }
  }
  

//this function for the right input form
function isItOkay (){
    let userChoise = prompt("Choose!\nRock, Paper or Scissor?");
    let lowerCaser = userChoise.toLowerCase();
    
    if (lowerCaser !== "rock" && lowerCaser !== "paper" && lowerCaser !== "scissor"){
        return 0
    }

    
    console.log(nameOfPlayer + " choose: " + lowerCaser)
    return lowerCaser;
}
//this function generate a random choice 
function computerPlay() {
    let randomChoose = Math.floor(Math.random() * 3);
    let letsChoice = ""
    
    switch(randomChoose) {
        case 0:
            letsChoice = "rock";
          break;
        case 1:
            letsChoice = "paper";
          break;
        case 2:
            letsChoice = "scissor";
            break;
        default:
            letsChoice = "error";
      }

      console.log("Bot choose: " + letsChoice)
      return letsChoice;
}
//this function decide who's the winner after each round
function whoTheWinner (playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "scissor"){
        userWins++;
        console.log("Your points: " + userWins + " Opponent points: " + opponentWins)
        return "You Win! Rock beats Scissor\n--------------------------------------------------"
    } else if (playerSelection === "scissor" && computerSelection === "paper"){
        userWins++;
        console.log("Your points: " + userWins + " Opponent points: " + opponentWins)
        return "You Win! Scissor beats Paper\n--------------------------------------------------"
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        userWins++;
        console.log("Your points: " + userWins + " Opponent points: " + opponentWins)
        return "You Win! Paper beats Rock\n--------------------------------------------------"
    } else if (playerSelection === computerSelection){
        console.log("Your points: " + userWins + " Opponent points: " + opponentWins)
        return "It's a Tie!\n--------------------------------------------------"
    } else { 
        opponentWins++;
        console.log("Your points: " + userWins + " Opponent points: " + opponentWins)
        return "You lost! " + computerSelection + " beats " + playerSelection + "\n--------------------------------------------------"
    }
}
//this function decide who's the winner after the 5th round
function theUltimateWinner (){
    if(userWins < opponentWins){
        alert("Winner Winner, Chicken dinnner!\nBot is the Ultimate Winner!\nWith: " + opponentWins + " points")
    } else if(userWins == opponentWins){
        alert("It's a tie! No Ultimate Winner.")
    } else {
        alert("Winner Winner, Chicken dinner!\n" + nameOfPlayer + " is the Ultimate Winner\nWith: " + userWins + " points")
    }  
}
//this is the game
function gameStart (){
    for (let i = 0; i < rounds; i++){
        itsOkay = false
        playerChoice = ""

        // Give user option to exit before starting new round
        exitGame();



        //this is for the wrong input
        while(itsOkay != true){
            playerChoice = isItOkay();
            if (playerChoice === 0){
                alert("Unknown input.\nPlease choose again!");
            } else {
                itsOkay = true;
            }
        }

        console.log(
                whoTheWinner(
                    playerChoice,
                    computerPlay()))
    
    }
}


gameStart()
theUltimateWinner()

