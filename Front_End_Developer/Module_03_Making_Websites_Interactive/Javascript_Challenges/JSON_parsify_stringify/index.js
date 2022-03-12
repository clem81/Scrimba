let characters = ["Ross", "Rachel", "Chandler"];

characters = JSON.stringify(characters); //make a string
console.log(characters);
localStorage.setItem("characters", characters); // writes to the local storage
console.log(localStorage.getItem("characters")); //returns the info based on name 'characters'
characters = JSON.parse(characters); //converts back to array
characters.push("Joey"); // adds Joey to the end
characters.unshift("Phoebe"); //adds phoebe at start
