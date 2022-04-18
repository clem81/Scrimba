// POEM: Forests are green, oceans are blue. Keep the earth clean, for me and for you
const poem = document.getElementById("poem");
const obj = {
  color1: "green",
  color2: "blue",
  planet: "Earth",
  adjective: "clean",
  emojis: ["🚂", "🌍", "🛼", "🍩", "🏖", "🎠", "🔮"],
  sentence: function () {
    //maybe some code here 🤔
    let poem = `Forests are ${this.color1}, oceans are ${this.color2}. Keep the ${this.emojis[1]} ${this.adjective}, for me and for you`;
    return poem;
  },
};
obj.color2 = "purple";
poem.textContent = obj.sentence();

// Task: Changing only the code ABOVE (lines 1-15), complete the poem and render it on the page.

// stretch goal 1️⃣: Render the most suitable emoji from the emojis array in the object somewhere in our poem.

// stretch goal 2️⃣: Without changing the object declaration above, change sea color to purple!

// stretch goal 3️⃣: Without changing the CSS file, style the values added from the object.
