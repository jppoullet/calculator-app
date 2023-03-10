"use strict";

// Theme Selection Toggle Buttons
const numberKey = document.querySelectorAll(".numberkey");
const theme1 = document.querySelector("#theme_1");
const theme2 = document.querySelector("#theme_2");
const theme3 = document.querySelector("#theme_3");
const themeStyleSheet = document.getElementById("theme_style_sheet");

// Calculator Numpad Buttons
const outputField = document.querySelector(".output_container");
const resetBtn = document.getElementById("reset_Btn");
const equalsBtn = document.getElementById("equals_Btn");
const delBtn = document.getElementById("del_btn");
const addBtn = document.getElementById("add_Btn");
const subtractBtn = document.getElementById("subtract_btn");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const four = document.getElementById("four");
const five = document.getElementById("five");

// Theme Selection Toggle Switch
function selectTheme() {
  theme1.addEventListener("click", function () {
    console.log("theme 1 clicked");
    theme1.style.opacity = "1";
    theme2.style.opacity = "0";
    theme3.style.opacity = "0";
    themeStyleSheet.href = "style_theme_1.css";
  });
  theme2.addEventListener("click", function () {
    console.log("theme 2 clicked");
    theme1.style.opacity = "0";
    theme2.style.opacity = "1";
    theme3.style.opacity = "0";
    themeStyleSheet.href = "style_theme_2.css";
  });
  theme3.addEventListener("click", function () {
    console.log("theme 3 clicked");
    theme1.style.opacity = "0";
    theme2.style.opacity = "0";
    theme3.style.opacity = "1";
    themeStyleSheet.href = "style_theme_3.css";
  });
}
selectTheme();

let numberClicked;

let currentNumber;
let oldNumber;
let sum;

let x = [];

// function numberInputs {
// const numberInputs = function () {
// Input numbers to create first/current number, Display current number in output field
numberKey.forEach((selected) => {
  selected.addEventListener("click", function () {
    numberClicked = selected.textContent;
    x.push(numberClicked);
    currentNumber = Number(x.join(""));
    outputField.innerText = currentNumber;
    console.log(
      `currentnum: ${currentNumber}, numclicked: ${numberClicked}, x: ${x}`
    );
  });
});
// };
// numberInputs();

// Addition Function
addBtn.addEventListener("click", function () {
  console.log(this.innerText);
  if (sum >= 1) {
    oldNumber = sum;
  } else {
    oldNumber = currentNumber; // Store current number as old number in preparation for new current number
  }
  // reset all previous stored current number values
  currentNumber = 0;
  numberClicked = 0;
  x = [];

  console.log(`old: ${oldNumber}, current: ${currentNumber}`);

  // numberKey.forEach((selected) => {
  //   selected.addEventListener("click", function () {
  //     numberClicked = selected.innerText;
  //     y.push(numberClicked1);
  //     currentNumber = Number(y.join(""));
  //     console.log(numberClicked1);
  //     outputField.innerText = currentNumber;
  //   });
  // });
});

equalsBtn.addEventListener("click", function () {
  console.log(this.innerText);
  sum = oldNumber + currentNumber;
  oldNumber = sum;
  console.log(`sum: ${sum}, old: ${oldNumber}`);
  outputField.innerText = sum;
});

resetBtn.addEventListener("click", function () {
  outputField.innerText = "";
  numberClicked1 = 0;
  currentNumber = 0;
  oldNumber = 0;
  x = [];
  y = [];
});
