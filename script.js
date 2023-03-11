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
const equalsBtn = document.getElementById("equals_btn");
const delBtn = document.getElementById("del_btn");
const operators = document.querySelectorAll(".operator_btn");
const addBtn = document.getElementById("add_btn");
const subtractBtn = document.getElementById("subtract_btn");
const divisionBtn = document.getElementById("division_btn");
const multiplyBtn = document.getElementById("multiply_btn");
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
let oldNumber = 0;
let solution;
let mathOperation;

let x = [];

// Input numbers to create first/current number, Display current number in output field
numberKey.forEach((selected) => {
  selected.addEventListener("click", function () {
    numberClicked = selected.textContent;
    x.push(numberClicked);
    currentNumber = Number(x.join(""));
    outputField.innerText = currentNumber;
    console.log(
      `currentnum: ${currentNumber}, oldnum: ${oldNumber} numclicked: ${numberClicked}, x: ${x}`
    );
  });
});

// Grabs the symbol of each math operation (+,-,/,*), stores it as variable mathOperation
operators.forEach((symbol) => {
  symbol.addEventListener("click", function () {
    mathOperation = symbol.textContent;
    console.log(mathOperation);
    // if (
    //   (oldNumber > 0 || oldNumber < 0) &&
    //   (currentNumber > 0 || currentNumber < 0)
    // ) {
    //   equals();
    // }

    if (solution > 0 || solution < 0) {
      oldNumber = solution;
    } else {
      oldNumber = currentNumber; // Store current number as old number in preparation for new current number
    }
    // reset all previous stored current number values
    currentNumber = 0;
    numberClicked = 0;
    x = [];

    console.log(`old: ${oldNumber}, current: ${currentNumber}`);
  });
});

// Addition Function
// addBtn.addEventListener("click", function () {
//   console.log(this.innerText);
//   if (oldNumber != 0 && currentNumber != 0) {
//     solution = oldNumber + currentNumber;
//     oldNumber = solution;
//     outputField.innerText = solution;
//   } else if (solution >= 1) {
//     oldNumber = solution;
//   } else {
//     oldNumber = currentNumber; // Store current number as old number in preparation for new current number
//   }
//   // reset all previous stored current number values
//   currentNumber = 0;
//   numberClicked = 0;
//   x = [];

//   console.log(`old: ${oldNumber}, current: ${currentNumber}`);
// });

// addBtn.addEventListener("click", function () {
//   console.log(this.innerText);
//   if (solution > 0) {
//     oldNumber = solution;
//   } else {
//     oldNumber = currentNumber; // Store current number as old number in preparation for new current number
//   }
//   // reset all previous stored current number values
//   currentNumber = 0;
//   numberClicked = 0;
//   x = [];

//   console.log(`old: ${oldNumber}, current: ${currentNumber}`);
// });

const equals = function () {
  // console.log(this.innerText);
  if (mathOperation == "-") {
    solution = oldNumber - currentNumber;
    oldNumber = solution;
  } else if (mathOperation == "+") {
    solution = oldNumber + currentNumber;
    oldNumber = solution;
  } else if (mathOperation == "*") {
    solution = oldNumber * currentNumber;
    oldNumber = solution;
  } else if (mathOperation == "/") {
    solution = oldNumber / currentNumber;
    oldNumber = solution;
  }
  console.log(
    `solution: ${solution}, old: ${oldNumber}, current: ${currentNumber}`
  );
  outputField.innerText = solution;
};
equalsBtn.addEventListener("click", equals);

resetBtn.addEventListener("click", function () {
  outputField.innerText = "";
  numberClicked = 0;
  currentNumber = 0;
  oldNumber = 0;
  solution = 0;
  x = [];
});
