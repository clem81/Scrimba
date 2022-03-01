let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.querySelector("#sum-el");

let hasBlackjack = false;
let isAlive = true;
let message = "";
let age = 20;

if (age < 21) {
  console.log("You can not enter the club!");
} else {
  console.log("Welcome");
}

function cards() {
  let firstCard = Math.floor(Math.random() * 11 - 2 + 1) + 2;
  let secondCard = Math.floor(Math.random() * 11 - 2 + 1) + 2;
  let sum = firstCard + secondCard;

  return [firstCard, secondCard, sum];
}

function displayCards() {
  return (cardsEl.textContent = `Cards: ${firstCard}  ${secondCard}`);
}

function startGame() {
  //displayCards();
  let [first, second, sum] = cards();
  cardsEl.textContent = `Cards: ${first} ${second}`;
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
