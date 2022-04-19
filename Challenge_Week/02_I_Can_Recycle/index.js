const recycleBtn = document.getElementById("recycle-btn");
recycleBtn.addEventListener("click", recycle);
const emptyBtn = document.getElementById("empty-btn");
emptyBtn.addEventListener("click", empty);
const recycleSelect = document.getElementById("recycle-select");
const recycleBin = document.getElementById("recycle-bin");
const infoParagraph = document.getElementById("info-paragraph");
let itemCount = 0;

function recycle() {
  itemCount++;
  if (itemCount > 9) {
    alert("Bin full, you need to empty");
  } else {
    recycleBin.textContent += recycleSelect.value;
  }
}
function empty() {
  if (itemCount === 0) {
    alert("Bin already empty");
  } else {
    itemCount = 0;
    recycleBin.textContent = "";
  }
}

// Task: Wire up the <select> tag and recycle button so that an emoji of the selected item appears in the DOM each time the recycle button is pressed.

// stretch goal 1️⃣ Add an item limit to indicate when the recycle bin is full

// stretch goal 2️⃣: Add the option to empty the bin.

// stretch goal 3️⃣: Animate adding the items to the bin.
