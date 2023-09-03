let scores = JSON.parse(localStorage.getItem('scores'));

// if scores is not found in local storage, create a new one with 0 values

if(!scores) {
  scores = {
    wins: 0,
    losses: 0,
    draws: 0
  }
}
updateScores();


function updateScores() {
  if(scores === null) {

  }
  const scoresTab = document.querySelector('.game-stats');
  scoresTab.innerHTML = `Wins: ${scores.wins} &emsp; Losses: ${scores.losses} &emsp; Draws: ${scores.draws}`;
}

function playGame(playerMove) {
  const computerMove = getComputerMove();
  document.querySelector('.chosenMoves').innerHTML = `You chose <img src=\"/PracticeProjects/images/${playerMove}-emoji.png\"> <img src=\"/PracticeProjects/images/${computerMove}-emoji.png\"> Computer chose`

  if ((playerMove === 'rock' && computerMove === 'scissors') || (playerMove === 'paper' && computerMove === 'rock') || (playerMove === 'scissors' && computerMove === 'paper')) {
    document.querySelector('.gameStatus').innerHTML = 'You Win!';
    ++scores.wins;
  }

  else if ((playerMove === 'rock' && computerMove === 'paper') || (playerMove === 'paper' && computerMove === 'scissors') || (playerMove === 'scissors' && computerMove === 'rock')) {
    document.querySelector('.gameStatus').innerHTML = 'Computer Wins';
    ++scores.losses;
  }

  else {
    document.querySelector('.gameStatus').innerHTML = 'Its a Draw';
    ++scores.losses;
  }

  updateScores();
  localStorage.setItem('scores', JSON.stringify(scores));
}

function getComputerMove() {
  let computerMove = Math.random();

  if (computerMove < (1 / 3)) {
    computerMove = 'rock';
  }
  else if (computerMove < (2 / 3)) {
    computerMove = 'paper';        
  }
  else {
    computerMove = 'scissors';
  }
  return computerMove;
}

function resetGame() {
  localStorage.removeItem('scores');
  location.reload();
}
