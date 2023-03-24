"use strict";

// Theme Selection Toggle Buttons
const numberKey = document.querySelectorAll(".numberkey");
const buttons = document.querySelectorAll("button");
const theme1 = document.querySelector("#theme_1");
const theme2 = document.querySelector("#theme_2");
const theme3 = document.querySelector("#theme_3");
const themeStyleSheet = document.getElementById("theme_style_sheet");

// Calculator Numpad Buttons
const outputField = document.querySelector(".output_container");
const numpad = document.querySelector(".numpad_container");
const resetBtn = document.getElementById("reset_Btn");
const equalsBtn = document.getElementById("equals_btn");
const delBtn = document.getElementById("del_Btn");
const decimalBTN = document.getElementById("decimal_btn");
const operators = document.querySelectorAll(".operator_btn");
const addBtn = document.getElementById("add_btn");
const subtractBtn = document.getElementById("subtract_btn");
const divisionBtn = document.getElementById("division_btn");
const multiplyBtn = document.getElementById("multiply_btn");

// Calculator Values
let previousType = numpad.dataset.previousType;
let firstNumber;
let operator;
let solution;
outputField.textContent = "0";

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

buttons.forEach((keyPressed) => {
  keyPressed.addEventListener("click", function () {
    let keyValue = keyPressed.innerText;
    let outputValue = outputField.textContent;
    const type = keyPressed.dataset.type;

    // When a number button is pressed
    if (type == "number") {
      if (previousType === "equals") {
        firstNumber = "";
      }

      if (previousType === "operator" || previousType === "equals") {
        previousType = type;
        outputValue = "";
        outputField.textContent = keyValue;
        outputField.textContent = outputValue + keyValue;
      } else {
        if (outputValue === "0") {
          outputField.textContent = keyValue;
        } else {
          outputField.textContent = keyValue;
          outputField.textContent = outputValue + keyValue;
        }
      }
    }

    // When operator button is pressed
    if (type === "operator") {
      if (previousType === "number") {
        // calculate solution
        equalsFunc();
        outputValue = solution;
        outputField.textContent = outputValue;
        console.log(
          `${keyValue} operator was pressed, ${firstNumber} firstNumber SOLUTION stored`
        );
      }

      if (previousType === "equals") {
        firstNumber = outputValue;
        console.log(
          `${keyValue} operator was pressed, ${firstNumber} firstNumber EQUALS stored`
        );
      }
      firstNumber = outputValue;
      previousType = type;
      operator = keyValue;
      console.log(
        `${keyValue} operator was pressed, ${firstNumber} firstNumber stored`
      );
    }

    // When del button is pressed
    if (type === "del") {
      console.log(`${keyValue} was pressed`);
      outputValue = outputValue.slice(0, -1);

      if (outputValue === "") {
        outputValue = "0";
      }

      outputField.textContent = outputValue;
      console.log(outputValue);
    }

    // Function to hold if statements for when equals
    function equalsFunc() {
      if (operator === "+") {
        console.log(`${keyValue} was pressed, operator was +`);
        solution = parseInt(firstNumber) + parseInt(outputValue);
      }
      if (operator === "-") {
        console.log(`${keyValue} was pressed, operator was -`);
        solution = parseInt(firstNumber) - parseInt(outputValue);
      }
      if (operator === "*") {
        console.log(`${keyValue} was pressed, operator was *`);
        solution = parseInt(firstNumber) * parseInt(outputValue);
      }
      if (operator === "/") {
        console.log(`${keyValue} was pressed, operator was /`);
        solution = parseInt(firstNumber) / parseInt(outputValue);
      }
    }

    // When equals button is pressed
    if (type === "equals") {
      equalsFunc();

      previousType = type;
      outputField.textContent = solution;

      if (solution === Infinity) {
        console.log(solution);
        outputField.textContent = "Ru's a bitch";
      }
    }

    // When reset button is pressed
    if (type === "reset") {
      console.log(`${keyValue} was pressed`);
      previousType = "";
      firstNumber = "";
      operator = "";
      solution = "";
      outputField.textContent = "0";
    }
  });
});
