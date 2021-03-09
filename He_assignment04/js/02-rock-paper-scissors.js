//step 1 - make a choice
let playChoice = prompt("Please enter your choice of rock, paper, scissors.");
//validate player's choice
while (playChoice !== "rock" && playChoice !== "paper" && playChoice !== "scissors") {
    alert("The input is not valid, please enter again.");
    playChoice = prompt("Please enter your choice of rock, paper, scissors.");
}
console.log(`${playChoice}`);

//step 2 - computer makes a choice
let computerOptions = ["rock", "paper", "scissors"]; 
function computerChoice() {
    let computerNum = Math.floor(Math.random() * 3);
    computerChoice = computerOptions[computerNum];
    return;
}
computerChoice();
console.log(computerChoice);

//step3 - a conditional that deternines who wins
function compareHands(playChoice, computerChoice) {
    //checking for a tie
    if (playChoice === computerChoice) {
        alert("It is a tie.");
        return;
    }
    //checking for rock
    if (playChoice === "rock") {
       if (computerChoice === "scissors") {
           alert("Player wins.");
           return;
       } else {
           alert("Computer wins.");
           return;
       }
    }
    //checking for paper
    if (playChoice === "paper") {
        if (computerChoice === "scissors") {
            alert("Computer wins.");
            return;
        } else {
            alert("Player wins.");
            return;
        }
    }
    //checking for scissors
    if (playChoice === "scissors") {
        if (computerChoice === "paper") {
            alert("Player wins.");
            return;
        } else {
            alert("Computer wins.");
            return;
        }
     }
};
compareHands(playChoice, computerChoice);