const myEmojis = ["👨‍💻", "⛷", "🍲"];
const emojiContainer = document.getElementById("emojiContainer");
const pushBtn = document.getElementById("push-btn");
const inputEmoji = document.getElementById("emoji-input");
const unshiftBtn = document.getElementById("unshift-btn");
const popBtn = document.getElementById("pop-btn");
const shiftBtn = document.getElementById("shift-btn");

function renderEmojis() {
  clearInnerHTML(emojiContainer);
  for (let i in myEmojis) {
    let newElement = document.createElement("span");
    newElement.textContent = myEmojis[i];
    emojiContainer.append(newElement);
  }
  inputEmoji.value = "";
}

unshiftBtn.addEventListener("click", function () {
  if (inputEmoji.value) {
    myEmojis.unshift(inputEmoji.value);
    renderEmojis();
  }
});

pushBtn.addEventListener("click", function () {
  if (inputEmoji.value) {
    myEmojis.push(inputEmoji.value);
    renderEmojis();
  }
});

shiftBtn.addEventListener("click", function () {
  if (myEmojis.length) {
    myEmojis.shift();
    renderEmojis();
  }
});

popBtn.addEventListener("click", function () {
  if (myEmojis.length) {
    myEmojis.pop();
    renderEmojis();
  }
});

function clearInnerHTML(element) {
  element.innerHTML = "";
}
