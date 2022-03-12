//? - This is the more basic interaction with html, addevent listener is the better method
// function save() {
//   console.log("button clicked");
// }

const inputBtn = document.getElementById("input-btn");
let myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
//localStorage.setItem("myLeads", "www.apple.com/uk");
console.log(localStorage.getItem("myLeads"));
localStorage.clear();

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

function render(leads) {
  let listItems = "";
  for (let i in leads) {
    listItems += `<li> <a href="http://${leads[i]}" target="_blank"> ${leads[i]}</a> </li>`;
    console.log(listItems);
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function () {
  myLeads = [];
  localStorage.clear();
  render(myLeads);
});

//!This is an anonymous function inside the listener
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  // quoted is key name and the stringify converts it to a string which is the ONLY allowed datatype
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);

  console.log(localStorage.getItem("myLeads")); // gets the info back used key name specified above
});

//Alternate way of adding to list
// for (let i in myLeads) {
//   //ulEl.innerHTML = `<li> ${myLeads[i]} </li>`;
//   const li = document.createElement("li");
//   li.textContent = myLeads[i];
//   ulEl.append(li);
// }
