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
  });
});

buttonMultiply.addEventListener("click", () => {
  // previousKeyOperator = true;
  if (previousKeyOperator) {
    calculation = calculation.substr(0, calculation.length - 1);
  }
  previousKeyOperator = true;
  calculation += "*";
  console.log({ currentValue, calculation, previousKeyOperator });
});
buttonMinus.addEventListener("click", () => {
  previousKeyOperator = true;
  calculation += "-";
  console.log({ currentValue, calculation, previousKeyOperator });
});

buttonPlus.addEventListener("click", () => {
  previousKeyOperator = true;
  calculation += "+";
  console.log({ currentValue, calculation, previousKeyOperator });
});

buttonDivide.addEventListener("click", () => {
  previousKeyOperator = true;
  calculation += "/";
  console.log({ currentValue, calculation, previousKeyOperator });
});
buttonClear.addEventListener("click", () => {
  console.log("clear");
  currentValue = "";
  updateDisplay(currentValue);
});

//remove last character of display
buttonDelete.addEventListener("click", (deleter) => {
  var str = display.value;
  str = str.substr(0, str.length - 1);
  console.log(str + "this should get shortened in deleter");
  //displayValue = "";
  currentValue = str; //trial with these
  console.log(currentValue + "...currentValue inside delete");
  //console.log(displayValue + "...displayValue inside delete");
  return (display.value = str);
});
buttonEquals.addEventListener("click", (/*resulting*/) => {
  if (previousKeyOperator) return;
  const result = eval(calculation);
  calculation = result;
  currentValue = "";
  updateDisplay(result);
});
