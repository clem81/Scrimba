//? - This is the more basic interaction with html, addevent listener is the better method
// function save() {
//   console.log("button clicked");
// }

const inputBtn = document.getElementById("input-btn");
let myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

//!This is an anonymous function inside the listener
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i in myLeads) {
    listItems += `<li> <a href="http://${myLeads[i]}" target="_blank"> ${myLeads[i]}</a> </li>`;
    console.log(listItems);
  }
  ulEl.innerHTML = listItems;
}

//Alternate way of adding to list
// for (let i in myLeads) {
//   //ulEl.innerHTML = `<li> ${myLeads[i]} </li>`;
//   const li = document.createElement("li");
//   li.textContent = myLeads[i];
//   ulEl.append(li);
// }
