let convertValue = document.getElementById("convert-el");
let length = document.getElementById("length-el");
let volume = document.getElementById("volume-el");
let mass = document.getElementById("mass-el");

convertValue.textContent = 2000;
let toConvert = convertValue.textContent;

//Rounds to 3 dp
function rounding(num) {
  return Math.round((num + Number.EPSILON) * 1000) / 1000;
}

function convertLength() {
  let metres = rounding(toConvert / 3.28084);
  let feet = rounding(toConvert * 3.28084);
  length.textContent =
    toConvert +
    " metres = " +
    feet +
    " feet | " +
    toConvert +
    " feet = " +
    metres;
}

function convertVolume() {
  let gallons = rounding(toConvert / 4.546);
  let litres = rounding(toConvert * 4.546);
  volume.textContent =
    toConvert +
    " gallons = " +
    litres +
    " litres | " +
    toConvert +
    " litres = " +
    gallons +
    " gallons";
}

convertLength();
convertVolume();
