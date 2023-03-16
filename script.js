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
const delBtn = document.getElementById("del_Btn");
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
let oldNumber;
let solution;
let mathOperation;
let x = [];
let equalsClicked;

// Input numbers to create first/current number, Display current number in output field
numberKey.forEach((selected) => {
  selected.addEventListener("click", function () {
    if (equalsClicked) {
      equalsClicked = undefined;
      console.log("yes");
      oldNumber = undefined;
      solution = undefined;
    }
    if (solution != undefined && oldNumber != undefined) {
      // oldNumber = solution;
      solution = undefined;
      numberClicked = undefined;
      currentNumber = undefined;
      x = [];

      numberClicked = selected.textContent;
      x.push(numberClicked);
      currentNumber = Number(x.join(""));
      outputField.innerText = currentNumber;
      console.log(
        `1st currentnum: ${currentNumber}, oldnum: ${oldNumber} numclicked: ${numberClicked}, x: ${x}`
      );
    } else {
      numberClicked = selected.textContent;
      x.push(numberClicked);
      currentNumber = Number(x.join(""));
      outputField.innerText = currentNumber;
      console.log(
        `currentnum: ${currentNumber}, oldnum: ${oldNumber} numclicked: ${numberClicked}, x: ${x}`
      );
    }
    // numberClicked = selected.textContent;
    // x.push(numberClicked);
    // currentNumber = Number(x.join(""));
    // outputField.innerText = currentNumber;
    // console.log(
    //   `currentnum: ${currentNumber}, oldnum: ${oldNumber} numclicked: ${numberClicked}, x: ${x}`
    // );
  });
});

// Grabs the symbol of each math operation (+,-,/,*), stores it as variable mathOperation
operators.forEach((symbol) => {
  symbol.addEventListener("click", function () {
    if (oldNumber != undefined && currentNumber != undefined) {
      console.log(mathOperation);
      equals();
      console.log("operator pressed, equals function ran");
    }
    mathOperation = symbol.textContent;
    console.log(mathOperation);

    if (solution > 0 || solution < 0) {
      oldNumber = solution;
      // Store solution as oldNumber after the operation and equals button is pressed
    } else if (solution === 0) {
      oldNumber = 0;
      currentNumber = 0; // Set oldNumber and currentNumber to 0 due in the event math operation equals solution of 0
    } else {
      oldNumber = currentNumber;
    }
    // reset all previous stored current number values
    currentNumber = undefined;
    numberClicked = 0;
    x = [];

    console.log(`old: ${oldNumber}, current: ${currentNumber}`);
  });
});

const equals = function () {
  console.log("=");
  if (oldNumber != undefined && currentNumber != undefined) {
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
  } else {
    alert("numbers are undefined");
    console.log("numbers are undefined");
  }

  // numberClicked = 0;
  currentNumber = undefined;
  console.log(`currentNumber: ${currentNumber}`);
  x = [];
};

equalsBtn.addEventListener("click", function () {
  equals();
  equalsClicked = true;
});

const resetFunc = function () {
  outputField.innerText = "";
  numberClicked = 0;
  currentNumber = undefined;
  x = [];
  oldNumber = undefined;
  solution = undefined;
  console.log("RESET");
};

resetBtn.addEventListener("click", resetFunc);

delBtn.addEventListener("click", function () {
  x.pop();
  console.log(x);
  currentNumber = Number(x.join(""));
  console.log(currentNumber);
  outputField.innerText = currentNumber;
});
