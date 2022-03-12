let data = [
  {
    player: "Jane",
    score: 52,
  },
  {
    player: "Mark",
    score: 42,
  },
];

const janeBtn = document.getElementById("jane-btn");
const markBtn = document.getElementById("mark-btn");
let messageEl = document.getElementById("message-el");

janeBtn.addEventListener("click", function () {
  message(0);
});

markBtn.addEventListener("click", function () {
  message(1);
});

function message(user) {
  messageEl.textContent = `${data[user].player} got a score of ${data[user].score}`;
}
