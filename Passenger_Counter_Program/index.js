let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;
function increment() {
  //console.log("The button was clicked");
  count += 1;
  countEl.innerText = count;
}

function save() {
  let message = count + " - ";
  //saveEl.innerText += message; //innerText won't render the spaces properly which is why textContent is a better alternative
  saveEl.textContent += message;
  count = 0;
  countEl.textContent = 0;
}
