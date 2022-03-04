let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.querySelector("#sum-el");

let hasBlackjack = false;
let isAlive = true;
let message = "";
let age = 20;
let cards = [];

if (age < 21) {
  console.log("You can not enter the club!");
} else {
  console.log("Welcome");
}

function drawCard() {
  let card = Math.floor(Math.random() * 11 - 2 + 1) + 2;
  return card;
}

function displayCards(cards) {
  let message = "";
  for (let card in cards) {
    message = message + " " + cards[card];
  }
  return (cardsEl.textContent = "Cards: " + message);
}
//todo - work out logic so sum is universal
function sum(first, second = 0) {}

function startGame() {
  renderGame();
}

function renderGame() {
  //displayCards();
  cards.push(drawCard());
  cards.push(drawCard());

  let sum = cards[0] + cards[1];
  displayCards(cards);
  //cardsEl.textContent = `Cards: ${first} ${second}`;
  sumEl.textContent = `Sum: ${sum}`;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Congratulations! You've got Blackjack!";
    hasBlackjack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  cards.push(drawCard());
  console.log("Drawing a new card from the deck");
  console.log(cards);
}
