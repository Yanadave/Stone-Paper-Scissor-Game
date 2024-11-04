let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComChoice = () =>{
    const options = ["rock" , "paper" , "scissors"];
    const randomIdx = Math.floor(Math.random() *   3);
    return options[randomIdx];
}

const drawGame = () =>{
   
    msg.innerHTML = "Game was Draw. Play Again";
    msg.style.backgroundColor = "darkblue";
}

const showWinner = (userWin, userChoice , compChoice) => {
    if (userWin){
        userScore++;
        userScorePara.innerHTML = userScore;
        msg.innerHTML = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerHTML = compScore;
        msg.innerHTML = `You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

}
const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = genComChoice();

    if (userChoice == compChoice){
    drawGame();
    } else{
        let userWin = true;
        if (userChoice === "rock"){
            //scissors,paper
            userWin = compChoice === "paper" ? false : true;

        } else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;

        } else{
            //rock,paper
            userWin = compChoice === "rock" ? false : true;

        }
        showWinner(userWin , userChoice , compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",function(){
       const userChoice = choice.getAttribute("id");
       playGame(userChoice);
    })
    
})