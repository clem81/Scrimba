const messageEl = document.getElementById("message-el");

const message = "Hello there, localStorage";

localStorage.setItem("message", message);

messageEl.textContent = localStorage.getItem("message");
