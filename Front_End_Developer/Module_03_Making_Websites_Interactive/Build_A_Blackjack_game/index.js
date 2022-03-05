let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.querySelector("#sum-el");
let playerEl = document.querySelector("#player-el");

let hasBlackjack = false;
let isAlive = false;
let message = "";
let cards = [];
let player = {
  name: "Matt",
  chips: 250,
  age: 127,
};

playerEl.textContent = player.name + ":  £" + player.chips;

if (player.age < 21) {
  console.log("You can not enter the club!");
} else {
  console.log("Welcome");
}

function drawCard() {
  let card = Math.floor(Math.random() * 11 + 1);
  return card;
}

function displayCards(cards) {
  let message = "";
  for (let card in cards) {
    message = message + " " + cards[card];
  }
  return (cardsEl.textContent = "Cards: " + message);
}

function sumCards(cards) {
  let sum = cards.reduce((a, b) => a + b);
  sumEl.textContent = `Sum: ${sum}`;
  return sum;
}

function startGame() {
  isAlive = true;
  cards.push(drawCard());
  cards.push(drawCard());
  let sum = sumCards(cards);
  displayCards(cards);
  renderGame(sum);
}

function renderGame(sum) {
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
  if (isAlive && !hasBlackjack) {
    cards.push(drawCard());
    displayCards(cards);
    sum = sumCards(cards);
    renderGame(sum);
  }
}
