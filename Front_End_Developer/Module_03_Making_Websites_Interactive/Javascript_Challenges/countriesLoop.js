let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/

console.log("The 5 largest countries in the world");
for (let country in largeCountries) {
  console.log("- " + largeCountries[country]);
}
