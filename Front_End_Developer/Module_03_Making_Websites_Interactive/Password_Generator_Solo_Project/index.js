function getRandomInt() {
  return Math.floor(Math.random() * (126 - 33 + 1)) + 33;
}

//!ASCI range 33-126
function generatedPassword() {
  let number = 0;
  let password = [];

  for (i = 0; i < 10; i++) {
    let number = getRandomInt();
    let value = String.fromCharCode(number);
    password.push(value);
  }

  let passwordString = password.join("").toString();
  console.log(passwordString);
  return passwordString;
}

function clearPasswords() {
  let passwordSection = document.getElementById("passwords");
  let passCount = passwordSection.childElementCount;
  while (passwordSection.hasChildNodes()) {
    passwordSection.removeChild(passwordSection.children[0]);
  }
}
function appendPassword() {
  clearPasswords();
  let passwordSection = document.getElementById("passwords");
  for (let i = 0; i < 4; i++) {
    const passPara = document.createElement("p");
    const passwordValue = document.createTextNode(generatedPassword());
    passPara.appendChild(passwordValue);
    passwordSection.appendChild(passPara);
  }
}

function generate() {
  appendPassword();
}
