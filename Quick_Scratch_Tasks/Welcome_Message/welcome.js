document.body.style.backgroundColor = "aqua";

let name = "Scooby Doo";
let greeting = "What's new, ";
let welcomeEl = document.getElementById("welcome-el");

welcomeEl.innerText = greeting + name;

welcomeEl.innerText += " 👋";
