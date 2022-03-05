let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function randomShape(){
    let item = Math.floor(Math.random() * 3)
    return hands[item]
}

console.log(randomShape())