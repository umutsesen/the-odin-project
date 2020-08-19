function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"]
  const result = Math.floor(Math.random() * 3);
  return choices[result]
}

document.addEventListener("DomContentLoaded", game())

function game() {
  const buttons = document.querySelectorAll(`button`);
  buttons.forEach(function(button) {
      button.addEventListener('click', playRound)

  })
let compscore = 0
let userscore = 0
let round = 0;
//  for (i = 0; i < 5; i++) {
 //playRound()

function playRound(e) {
  if (userscore == 5 || compscore == 5) return WhoWon()
  const result = document.querySelector(`#results`);
  const computerSelection = computerPlay()
  const playerSelection = e.target.id;
  const ps = playerSelection.toLowerCase();
  const cs = computerSelection.toLowerCase();
  if (ps == cs) {
      result.textContent = 'Draw';
  } else if (ps == "scissors") {
      if (cs == "rock") {
          compscore++;
          result.textContent = `Computer Won ${cs}`;
      } else {
          userscore++;
          result.textContent = `Player Won ${ps}`;
      }
  } else if (ps == "rock") {
      if (cs == "paper") {
          compscore++;
          result.textContent =`Computer Won ${cs}`;
      } else {
          userscore++;
          result.textContent =`Player Won ${ps}`;
      }
  } else if (ps == "paper") {
      if (cs == "rock") {
          userscore++;
          result.textContent =`Player Won ${ps}`;
      } else {
          compscore++;
          result.textContent =`Computer Won ${cs}`;
      }
  }
}
function WhoWon() {
  const rounddiv = document.querySelector('#round');
  if (userscore > compscore) {
    rounddiv.textContent = `user won ${userscore}`;
  } else if (userscore == compscore) {
    rounddiv.textContent = `draw user :${userscore} computer: ${compscore}`;
  } else {
    rounddiv.textContent = `computer won ${compscore}`;
  }

}
}