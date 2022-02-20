let length = document.getElementById("length-el");
let volume = document.getElementById("volume-el");
let mass = document.getElementById("mass-el");

//Rounds to 3 dp
function rounding(num) {
  return Math.round((num + Number.EPSILON) * 1000) / 1000;
}

function convert() {
  let toConvert = document.getElementById("convert-el").value;
  convertLength(toConvert);
  convertVolume(toConvert);
  convertMass(toConvert);
}

function convertLength(toConvert) {
  let toMetres = rounding(toConvert / 3.28084);
  let toFeet = rounding(toConvert * 3.28084);
  length.textContent =
    toConvert +
    " metres = " +
    toFeet +
    " feet | " +
    toConvert +
    " feet = " +
    toMetres;
}

function convertVolume(toConvert) {
  let toGallons = rounding(toConvert / 4.546);
  let toLitres = rounding(toConvert * 4.546);
  volume.textContent =
    toConvert +
    " gallons = " +
    toLitres +
    " litres | " +
    toConvert +
    " litres = " +
    toGallons +
    " gallons";
}

function convertMass(toConvert) {
  let toPounds = rounding(toConvert * 2.20462);
  let toKilos = rounding(toConvert / 2.20462);
  mass.textContent =
    toConvert +
    "kilos = " +
    toPounds +
    "pounds | " +
    toConvert +
    "pounds = " +
    toKilos +
    "kilos";
}
