let sentence = ["Hello ", "my ", "name ", "is ", "Per"];
let greetingEl = document.getElementById("greeting-el");
let message = "";

for (let i = 0; i < sentence.length; i++) {
  message = message + sentence[i];
}
greetingEl.textContent = message;
