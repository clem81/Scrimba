console.log(typeof "blueberry");

const dessert = { type: "pie" };
dessert.type = "pudding";

const seconds = dessert;
seconds.type = "fruit";
console.log(dessert.type);

const foo = [1, 2, 3];
const [n] = foo;
console.log(n);

class Animal {
  static belly = [];
  eat() {
    Animal.belly.push("food");
  }
}

let a = new Animal();
a.eat();

console.log(Animal.belly[0]); //Prints food

let rainForestAcres = 10;
let animals = 0;

while (rainForestAcres < 13 || animals <= 2) {
  rainForestAcres++;
  animals += 2;
}

console.log(animals);

let animals2 = ["jaguar", "eagle"];

//Missing Line
animals2.reverse();
console.log(animals2.pop()); //Prints jaguar

var obj;
console.log(obj);

const fool = {
  bar() {
    console.log("Hello, world!");
  },
  name: "Albert",
  age: 26,
};

var sound = "grunt";
var bear = { sound: "roar" };

function roar() {
  console.log(this.sound);
}

roar.bind(bear);

var v = 1;

var f1 = function () {
  console.log(v);
};

var f2 = function () {
  var v = 2;
  f1();
};

console.log(f2());

var ab = ["dog", "cat", "hen"];
ab[100] = "fox";
console.log(ab.length);

var flagsJSON =
  '{ "countries" : [' +
  '{ "country":"Ireland" , "flag":"🇮🇪" },' +
  '{ "country":"Serbia" , "flag":"🇷🇸" },' +
  '{ "country":"Peru" , "flag":"🇵🇪" } ]}';

var flagDatabase = JSON.parse(flagsJSON);
console.log(flagDatabase.countries[0].flag);

class X {
  get Y() {
    return 42;
  }
}
var x = new X();
console.log(x.Y);
