// app.js

userScore = document.querySelector('#userScore');
compScore = document.querySelector('#compScore');
msgToPrint  = document.querySelector('.msg')
const choices = document.querySelectorAll(".imgs")
userScorePara = document.querySelector('#userScore')
compScorePara = document.querySelector('#compScore')

let getComputerChoice =() =>{
    let arr = ["rock", "paper" ,"scissors"]
    comp = Math.floor(Math.random()*3);
    return arr[comp];
}
compScore = 0;
userScore = 0;
let startGame = (userChoice)=>{
    
    compChoice = getComputerChoice();
    console.log("computer choose",compChoice);
    if(compChoice === userChoice ){
        console.log("it's a Draw");
        msgToPrint.style.backgroundColor = "gray";
        msgToPrint.innerText = "It's a Draw";
    }
    else if(userChoice ==="rock" && compChoice === "scissors" || userChoice ==="paper" && compChoice === "rock" || userChoice ==="scissors" && compChoice === "paper" ){
        console.log("user wins");
        userScore += 1;
        userScorePara.innerText = userScore;
        msgToPrint.innerText = `Congragulation's You win. Your ${userChoice} beats ${compChoice}`;
        msgToPrint.style.backgroundColor = "green";
    }
    else{
        compScore += 1;
        compScorePara.innerText = compScore;
        msgToPrint.innerText = `You lose.${compChoice} beats your ${userChoice}`;
        msgToPrint.style.backgroundColor = "red";
        msgToPrint.style.borderRadius = "30px";
        console.log("computer wins");    
    }
}
choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        let userChoice = choice.getAttribute('id')
        startGame(userChoice);
    })
})