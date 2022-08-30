let currentValue = "";
let calculation = "";
let previousKeyOperator = false;

/*Things to fix
- Function buttons - Make it so only one can be selected between numbers. Not like e.g 4+*5  
-Fix Del - Make Del button remove the last button input*/
//All DOM elements
const buttonZero = document.getElementById("zero");
const buttonOne = document.getElementById("one"); //buttonOne will log the button value
const buttonTwo = document.getElementById("two");
const buttonThree = document.getElementById("three");
const buttonFour = document.getElementById("four");
const buttonFive = document.getElementById("five");
const buttonSix = document.getElementById("six");
const buttonSeven = document.getElementById("seven");
const buttonEight = document.getElementById("eight");
const buttonNine = document.getElementById("nine");
const buttonClear = document.getElementById("clear");
const buttonMultiply = document.getElementById("multiply");
const buttonMinus = document.getElementById("minus");
const buttonPlus = document.getElementById("plus");
const buttonEquals = document.getElementById("equals");
const buttonDivide = document.getElementById("divide");
const display = document.getElementById("display");
const buttonDelete = document.getElementById("del");

function updateDisplay(val) {
  console.log(val);
  display.value = val;
}

//Eventlisteners
const numberElements = [
  buttonOne,
  buttonTwo,
  buttonThree,
  buttonFour,
  buttonFive,
  buttonSix,
  buttonSeven,
  buttonEight,
  buttonNine,
  buttonZero,
];

//example loop
//for (i = 0; i< numberElements.length ; i++){
//numberElements[i].addEventListener
//}
//....................
//
//............
numberElements.forEach((ref) => {
  ref.addEventListener("click", (elem) => {
    const num = elem.target.textContent;
    if (previousKeyOperator) {
      currentValue = num;
    } else {
      currentValue += num;
    }
    previousKeyOperator = false;
    calculation += num;
    updateDisplay(currentValue);
    console.log({ currentValue, calculation, previousKeyOperator });
    console.log(typeof (currentValue + "...curr val type"));
  });
});

buttonMultiply.addEventListener("click", () => {
  // previousKeyOperator = true;
  if (previousKeyOperator) return;
  if (previousKeyOperator) {
    calculation = calculation.substr(0, calculation.length - 1);
  }
  previousKeyOperator = true;
  calculation += "*";
  console.log({ currentValue, calculation, previousKeyOperator });
});
buttonMinus.addEventListener("click", () => {
  if (previousKeyOperator) return;
  previousKeyOperator = true;
  calculation += "-";
  console.log({ currentValue, calculation, previousKeyOperator });
});

buttonPlus.addEventListener("click", () => {
  if (previousKeyOperator) {
    secondDelete();
    console.log("trying to delete");
    // return currentValue;

    previousKeyOperator = true;
    calculation += "+";
    console.log({ currentValue, calculation, previousKeyOperator });
  }
});

/*
  previousKeyOperator = true;
  calculation += "+";
  console.log({ currentValue, calculation, previousKeyOperator });
});*/

buttonDivide.addEventListener("click", () => {
  if (previousKeyOperator) return;

  previousKeyOperator = true;
  calculation += "/";
  console.log({ currentValue, calculation, previousKeyOperator });
});

buttonClear.addEventListener("click", () => {
  console.log("clear");
  currentValue = "";
  calculation = "";
  updateDisplay(currentValue);
});

//remove last character of display
buttonDelete.addEventListener("click", () => {
  console.log("del invoked");
  let currValNumToString = currentValue;
  let currValAsString = currValNumToString.toString();

  currValAsString = currValAsString.substring(0, currValAsString.length - 1);
  currentValue = parseInt(currValAsString);

  calculation = calculation.substring(0, calculation.length - 1);
  updateDisplay(currentValue);

  console.log(typeof currentValue);
  console.log({ currentValue, calculation, previousKeyOperator });
  // return currentValue;
});

function secondDelete() {
  console.log("second delete invoked");
  // let currValNumToString = currentValue;
  // let currValAsString = currValNumToString.toString();

  // currValAsString = currValAsString.substring(0, currValAsString.length - 1);
  // currentValue = parseInt(currValAsString);

  calculation = calculation.substring(0, calculation.length - 1);
  updateDisplay(currentValue);

  console.log(typeof currentValue);
  console.log({ currentValue, calculation, previousKeyOperator });
}

buttonEquals.addEventListener("click", () => {
  if (previousKeyOperator) return;
  const result = eval(calculation);
  calculation = result;
  currentValue = "";
  updateDisplay(result);
});
