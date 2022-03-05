let chosenEl = document.querySelector("#chosen-el");
let computerEl = document.querySelector("#computer-el");
let selected = document.querySelector("#option");
let outcome = document.querySelector("#outcome-el");
let selectedShape = "";

let hands = ["rock", "paper", "scissors"];

selected.addEventListener("change", (event) => {
  selectedShape = selected.value;
});

function computerShape() {
  let item = Math.floor(Math.random() * 3);
  computerEl.textContent = "The computer chose: " + hands[item];
  return item;
}

function userShape() {
  let shape = hands.indexOf(selectedShape);
  chosenEl.textContent = "You have chosen: " + hands[shape];
  return shape;
}

function play() {
  //let userValue = hands[selectedShape]
  //console.log("This was global" + selectedShape);
  let userValue = parseInt(userShape());
  let computerValue = computerShape();
  //console.log(userValue, computerValue);

  if (userValue === computerValue) {
    outcome.textContent = "Draw";
  } else if (
    userValue - computerValue === 1 ||
    computerValue - userValue === 2
  ) {
    outcome.textContent =
      "Player wins! " + hands[userValue] + " beats " + hands[computerValue];
  } else {
    outcome.textContent =
      "Computer wins! " + hands[computerValue] + " beats " + hands[userValue];
  }
}
