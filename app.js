let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscore1 = document.querySelector("#user-score");
const compscore1 = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3); 
     return options[randIdx];
};


const gameDraw = () =>{
    console.log("It was a draw");
    msg.innerText = "Draw, Try again.";
    msg.style.backgroundColor = "#081b31" ;   

};
showWinner= (userWin, userChoice , compChoice) => { 
    if(userWin){
    userScore++;
    userscore1.innerText = userScore;
    console.log("you won");
    msg.innerText = `You won! Your ${userChoice} beats ${compChoice} `; 
    msg.style.backgroundColor = "green" ;   
    }
    else {
        compScore++;
        compscore1.innerText = compScore;
        console.log("you lose");
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice} `; 
        msg.style.backgroundColor = "red" ;  
    }
};

const playGame = (userChoice) => {
    console.log("userChoice is ", userChoice);
    const compChoice = genCompChoice();
    console.log("CompChoice is ", compChoice);
    if (userChoice === compChoice) {
        gameDraw();
    
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice ==="paper" ? false : true ;
        } else if (userChoice === "paper") {
            userWin = compChoice ==="scissors" ? false : true ;
        } else {
            userWin = compChoice ==="rock" ? false : true ;
        }
        showWinner(userWin , userChoice , compChoice);     
    }

};

choices.forEach((choice) =>{
    choice.addEventListener("click" , ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});  



