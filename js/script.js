let imgobj = {
    "stone": 'img/stone.png',
    "paper": 'img/paper.png',
    "scissors": 'img/scissors.png',
}


let Score = (localStorage.getItem("Score") != null) ? JSON.parse(localStorage.getItem("Score")) : 0;
let CmpScore = (localStorage.getItem("Computer") != null) ? JSON.parse(localStorage.getItem("Computer")) : 0; 
let writeComputerScore = document.querySelector(".computerScore");
let writeHumanScore = document.querySelector(".humanScore");

(writeComputerScore) ? writeComputerScore.innerText = (CmpScore != null) ? CmpScore : 0 : null;
(writeHumanScore) ? writeHumanScore.innerText = (Score != null) ? Score : 0 : null;
var shw = document.querySelector(".btn")
var rul = document.querySelector("#rule")
var sh = document.querySelector(".show")
var crs = document.querySelector(".cross")
var rusl = document.querySelector(".result")
var plbtn = document.querySelector(".plybtn")
var nxt=document.querySelector(".nbt")

shw.addEventListener("click", function () {
    rul.style.opacity = "1";
    crs.style.opacity = "1";
})
crs.addEventListener("click", function () {
    rul.style.opacity = "0";
    crs.style.opacity = "0";
})
let hand = document.querySelector("#hands")

const choiceOne = (val) => {
    hand.style.display = "none";
    rusl.style.display = "block";
    sh.style.left = "82vw";
    if (val == 'stone') {
        document.querySelector(".userSelect").src = 'img/stone.png';
    }
    else if (val == 'paper') {
        document.querySelector(".userSelect").src = 'img/paper.png';
    }
    else if (val == 'scissors') {
        document.querySelector(".userSelect").src = 'img/scissors.png';
    }
    let rancmp = computerTurn();
    resultWin(val,rancmp)
}
plbtn.addEventListener("click", function () {
    hand.style.display = "block";
    rusl.style.display = "none";
    sh.style.left = "88vw"
})

const computerTurn = () => {
    let cmp = ["stone", "paper", "scissors"];
    let rancmp = cmp[Math.floor(Math.random() * 3)]
    document.querySelector(".comchoice").src = imgobj[rancmp];
    return rancmp;
}

const resultWin = (userhand, rancmp) => {
    if (userhand == "paper" && rancmp == "scissors") {
        setDecision("you lose")
        getComScore(CmpScore+1)
    }
    else if (userhand == "paper" && rancmp == "stone") {
        setDecision("you win")
        getScore(Score + 1)
    }
    else if (userhand == "paper" && rancmp == "paper") {
        setDecision("tie up")
    }
    else if (userhand == "stone" && rancmp == "stone") {
        setDecision("tie up")
    }
    else if (userhand == "stone" && rancmp == "paper") {
        setDecision("you lose")
        getComScore(CmpScore+1)
    }
    else if (userhand == "stone" && rancmp == "scissors") {
        setDecision("you win")
        getScore(Score + 1)
    }
    else if (userhand == "scissors" && rancmp == "scissors") {
        setDecision("tie up")
    }
    else if (userhand == "scissors" && rancmp == "stone") {
        setDecision("you lose")
        getComScore(CmpScore+1)
    }
    else if (userhand == "scissors" && rancmp == "paper") {
        setDecision("you win")
        getScore(Score + 1)
    }
}
const setDecision = (decision) => {
    document.querySelector(".answer").innerText=decision;
    let rem=document.getElementById("pc")
    if(decision != "tie up"){
        rem.style.display = "block";
        rem.innerHTML = "AGAINST PC"
        plbtn.innerHTML = "PLAY AGAIN"    
    }
    else{
        rem.style.display = "none";
        plbtn.innerHTML="REPLAY"  
    }
    if(decision != "you win"){
        nxt.style.display = "none" 
        sh.style.left = "88vw"   
    }
    else{
        nxt.style.display="block"  
    }
}
const getScore = (score) => {
    Score = score;
    localStorage.setItem("Score", score);
    writeHumanScore.innerText = score;
}

const getComScore = (cmpscore) => {
    CmpScore = cmpscore;
    localStorage.setItem("Computer", cmpscore);
    writeComputerScore.innerText = cmpscore;
}