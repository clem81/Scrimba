//document.getElementById("count-el").innerText = 5;
let countEl = document.getElementById("count-el");
let count = 0;
function increment() {
  //console.log("The button was clicked");
  count = count + 1;
  countEl.innerText = count;
}

function save() {
  console.log(count);
}
