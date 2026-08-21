let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const userScorepara= document.querySelector("#userScore");
const compScorepara= document.querySelector("#compScore");


const genCompChoice=()=>{
    let options =["rock","paper","scissor"];
   const randomIdx = Math.floor(Math.random()*3);
   return options[randomIdx];
}

const drawGame=()=>{
    console.log("Game was draw.");
     msg.innerText="Game was Draw. Play again!"
     msg.style.backgroundColor="rgb(30, 30, 33)"

     
}

const showWinner=(userWin,compChoice,userChoice)=>{
if(userWin){
    userScore++;
    userScorepara.innerText=userScore;
    msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";

}
else{
    compScore++
     compScorepara.innerText=compScore;
     msg.innerText=`You Lose ${compChoice} beats your ${userChoice}`;
     msg.style.backgroundColor="red";
}

}

const playGame =(userChoice)=>{
    console.log("user choice =", userChoice)
    const compChoice = genCompChoice();
    console.log("computer choice =",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper" ?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissor"?false:true;
        }
        else {
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin, compChoice, userChoice);

    }

}

choices.forEach((choice)=>{
   
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});
