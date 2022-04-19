let p1Score = 0;
let p2Score = 0;
let p1Turn = true;

const message = document.getElementById("message");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
const doubleBtn = document.getElementById("doubleBtn");
const clearMessage = document.querySelectorAll(".clearMessage");
console.log(clearMessage);
firstplayer();

rollBtn.addEventListener("click", function () {
  const dice = rollDice();
  game(dice);
});

resetBtn.addEventListener("click", reset);

doubleBtn.addEventListener("click", function () {
  const dice = double();
  game(dice);
});

function firstplayer() {
  let random = Math.floor(Math.random() * 2 + 1);
  random === 1 ? (p1Turn = true) : (p1Turn = false);
  showActivePlayer(p1Turn);
}

function showActivePlayer(active) {
  if (active) {
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    message.textContent = "Player 1 turn";
  } else {
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    message.textContent = "Player 2 turn";
  }
}

function rollDice() {
  const dice = Math.floor(Math.random() * 6) + 1;
  return dice;
}
function game(dice) {
  if (p1Turn) {
    player1Go(dice);
  } else {
    player2Go(dice);
  }
  if (p1Score < 20 && p2Score < 20) {
    p1Turn = !p1Turn;
    showActivePlayer(p1Turn);
  }
}

function player1Go(dice) {
  player1Dice.textContent = dice;
  p1Score += dice;
  player1Scoreboard.textContent = p1Score;
  gameOver(p1Score);
}
function player2Go(dice) {
  player2Dice.textContent = dice;
  p2Score += dice;
  player2Scoreboard.textContent = p2Score;
  gameOver(p2Score);
}

function gameOver(score) {
  if (score >= 20) {
    if (p1Turn) {
      message.textContent = "Player 1 has won!";
    } else {
      message.textContent = "Player 2 has won!";
    }
    rollBtn.style.display = "none";
    doubleBtn.style.display = "none";
    resetBtn.style.display = "block";
  }
}

function reset() {
  for (let clear in clearMessage) {
    clearMessage[clear].textContent = 0;
  }
  p1Score = 0;
  p2Score = 0;
  rollBtn.style.display = "block";
  resetBtn.style.display = "none";
  doubleBtn.style.display = "block";
  firstplayer();
}

function double() {
  let dice = rollDice();
  if (dice % 2 === 0) {
    dice *= 2;
  } else {
    dice = 0;
  }
  return dice;
}
