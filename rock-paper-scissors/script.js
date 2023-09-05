
const choice = ['rock', 'paper', 'scissors'];
let gameCount = 0;
let remain = 5;
let pScore = 0;
let cScore = 0;

// function-1
function getComputerChoice(choice) {
    return choice[Math.floor(Math.random()*choice.length)];
};

// finction-2
function playRound(playerSelection, computerSelection) {    

    gameCount += 1;
    remain -= 1;
    let gameResult = '';
    console.log('gameCount', gameCount, 'remain', remain, computerSelection);

    if (playerSelection === computerSelection) {
        gameResult = `Draw!`
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            cScore++;
            gameResult = `You Lose! Paper beats Rock`;
        } else {
            pScore++;
            gameResult = `You Win! Rock beats scissors`;
        }
        
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            pScore++;
            gameResult = `You Win! Paper beats Rock`;
        } else {
            cScore++;
            gameResult = `You Lose! scissors beats paper`;
        }
        
        
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            cScore++;
            gameResult = `You Lose! Rock beats scissors`;
        } else {
            pScore++;
            gameResult = `You Win! scissors beats paper`;
        }
        
    };
    
    return gameResult;
};

// function-3
game(); 
function game(choose = 'Choose your answer') {
    if (remain == 0) {
        document.getElementById("refresh").style.display = 'block';
        return ;
    }

    document.getElementById("result").innerHTML = choose;
    if (choose != 'Choose your answer') {
    const computerSelection = getComputerChoice(choice);
    document.getElementById("winner").innerHTML = playRound(choose, computerSelection);

    document.getElementById("remain").innerHTML = remain;
    document.getElementById("pScore").innerHTML = pScore;
    document.getElementById("cScore").innerHTML = cScore;
    };
};
