let box = document.getElementById("box");
const container = document.getElementById("container");

box.addEventListener("click", function () {
  console.log("I want to open the box!");
});

container.innerHTML = "<button onclick='buy()'>Buy!</button>";

function buy() {
  container.innerHTML += "<p>Thanks for buying!</p>";
}
