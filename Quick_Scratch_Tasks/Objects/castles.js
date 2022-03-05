// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

let castle = {
  title: "Private room in Galway",
  tagline: "Live like a King in my Castle",
  guests: 4,
  bedrooms: 2,
  baths: [1, "Private half-bath"],
  cost: 190,
  superHost: true,
  images: ["img/castle1.png", "img/castle2.png"], //Just shows you can link to a range of files
};

console.log(castle.title);
console.log(castle.baths[0]);
