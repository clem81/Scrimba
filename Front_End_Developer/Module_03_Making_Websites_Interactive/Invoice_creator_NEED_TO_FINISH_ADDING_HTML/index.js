const washBtn = document.getElementById("wash-btn");
const mowBtn = document.getElementById("mow-btn");
const weedsBtn = document.getElementById("weeds-btn");
const invoiceEl = document.getElementById("invoice-el");

let total = 0;
let wash = false;
let mow = false;
let weeds = false;

washBtn.addEventListener("click", function () {
  carWash();
});

mowBtn.addEventListener("click", function () {
  mowLawn();
});
weedsBtn.addEventListener("click", function () {
  pullWeeds();
});

function carWash() {
  //wash = wash ? false : true;
  if (!wash) {
    console.log("add 10");
    total += 10;
    wash = true;
    addElement("fred", 10);
    // invoiceEl.innerHTML += "</br>";
    //invoiceEl.innerHTML +=
    //("<div class='row invoice'><div>Wash car</div><div>£10</div></div>");
    // invoiceEl.append("Wash car");
    // invoiceEl.append("£10");
  } else {
    console.log("already added");
  }
}
function mowLawn() {
  if (!mow) {
    console.log("add 20");
    total += 20;
    mow = true;
    let newElement = document.createElement("div");
    newElement.textContent = "Wash Caraaa";
    invoiceEl.append(newElement);
    //invoiceEl.innerHTML += "<div>Mow lawn</div><div>£20</div></br>";
  } else {
    console.log("already added");
  }
}
function pullWeeds() {
  if (!weeds) {
    console.log("add 30");
    total += 30;
    weeds = true;
    invoiceEl.innerHTML += "<div>Pull weeds</div><div>£30</div></br>";
  } else {
    console.log("already added");
  }
}

function addElement(item, price) {
  let newElement = document.createElement("div");
  newElement.innerHTML = "<span>Pull weeds</span>";
  invoiceEl.append(newElement);
  let newPrice = document.createElement("div");
  newPrice.innerHTML = "<span>£30</span><br>";
  invoiceEl.append(newPrice);
  // let newPrice = document.createElement("span");
  // newPrice.textContent = "£10";
  // invoiceEl.appendChild(newPrice);
}
