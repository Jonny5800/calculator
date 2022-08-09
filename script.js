let currentValue = "";

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

function updateDisplay(displayValue) {
  display.value = currentValue + displayValue;
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

//for (i = 0; i< numberElements.length ; i++){
//numberElements[i].addEventListener
//}
numberElements.forEach((ref) => {
  ref.addEventListener("click", (elem) => {
    updateDisplay(elem.target.textContent);
    currentValue = currentValue + elem.target.textContent;
  });
});

buttonMultiply.addEventListener("click", () => {
  console.log("multiply");
});
buttonMinus.addEventListener("click", () => {
  console.log("Minus");
});
buttonPlus.addEventListener("click", () => console.log("plus"));
buttonEquals.addEventListener("click", () => {
  console.log("equals");
});
buttonDivide.addEventListener("click", () => {
  console.log("divide");
});
buttonClear.addEventListener("click", () => {
  console.log("clear");
});
/*
buttonOne.addEventListener("click", (elem) => {
  console.log(elem.target.textContent);
  updateDisplay(1);
});
buttonTwo.addEventListener("click", (elem) => {
  console.log(elem.target.textContent);
  updateDisplay(2);
});
buttonThree.addEventListener("click", () => {
  updateDisplay(3);
});
*/
// This is the display

/*function showDisplay(){
    code to update the display to HTML after receiving button value inputs
    }*/

//Original display from and to DOM

/*
//THIS SEEMS TO BE THE STICKING POINT - cannot get anything to show up in the cals screen **edit - solved above by display output**
// classname, ID, queryselector, nothing shows even after deleting the placeholder.
const screenDisplay = document.querySelector(".showIt") 
screenDisplay = 187
*/

//let tryDisplay = document.getElementById("display").innerHTML = "kw" interferes with button 5's value

//button eight working in this
/*
let pressEight = document.querySelector("#eight");
pressEight.addEventListener("click", ()=>{displayOutput  =buttonEight ; 
console.log(pressEight); //logs the HTML for 8
console.log(buttonEight); //logs digit 8
})
*/

//So far only managed to log the number 8 and the contents of the 8 button HTML

// Methods tried in the Eventlistener function
/*{displayOutput + parseInt(buttonEight)}  
displayOutput.buttonEight
displayOutput.textContent += buttonEight
displayOutput.textContent = buttonEight

*/
//console.log(document.getElementById("display").value + pressEight.textContent)

//console.log(buttonNine)
//console.log(price) ****************

/*
let valueStore = 0
console.log(valueStore)
*/

//Digit logs to console........
//let pressAny = document.querySelectorAll("buttons");
//pressAny.addEventListener("click", ()=>{console.log(24)})

/********************************************* */
//console.log(sumStore.concat(buttonSeven))
//console.log(pressSeven)

//pressEight Working.......
/*let pressEight = document.querySelector("#eight");
pressEight.addEventListener("click", ()=>{console.log(document.getElementById("display").value + pressEight.textContent)})
*/

/*************************************************** */

//Evolution of getting the five button to work >>>>>>>

//VERSION 1
/*let pressFive = document.querySelector("#five");
pressFive.addEventListener("click", ()=>{
    console.log(5)})*/

/*let pressFive = document.querySelector("#five");
pressFive.addEventListener("click", fiveFunc =>{
    console.log(fiveFunc.target) //logs the 5 button HTML element
    if (fiveFunc.target.closest("button"))return
})    
*/

//VERSION 2
/*let pressFive = document.querySelector("#five");
pressFive.addEventListener("click", fiveFunc =>{
    //console.log(fiveFunc.target) //logs the 5 button HTML element
    if (!fiveFunc.target.closest("button"))return //randomWordNotButtons

    let key5 = fiveFunc.target;
    //console.log(key5.textContent) Logs the digit 5
    let key5Value = key5.textContent
    //console.log(key5Value) Also logs the digit 5
})*/

//VERSION 3
/*let pressFive = document.querySelector("#five");
pressFive.addEventListener("click", fiveFunc =>{
    //console.log(fiveFunc.target) //logs the 5 button HTML element
    if (!fiveFunc.target.closest("button"))return //randomWordNotButtons

    let key5 = fiveFunc.target;
    //console.log(key5.textContent) Logs the digit 5
    let key5Value = key5.textContent
    //console.log(key5Value) Also logs the digit 5

    let = displayVal = display.textContent //Not sure how JS picks up the DISPLAY element with no other reference to it
    //console.log(displayVal) doesnt log anything

})*/

//VERSION 4
/*
let pressFive = document.querySelector("#five");
pressFive.addEventListener("click", fiveFunc =>{
    //console.log(fiveFunc.target) //logs the 5 button HTML element
    if (!fiveFunc.target.closest("button"))return //randomWordNotButtons

    let key5 = fiveFunc.target;
    //console.log(key5.textContent) Logs the digit 5
    let key5Value = key5.textContent
    //console.log(key5Value) Also logs the digit 5

    let = displayVal = display.textContent //Not sure how JS picks up the DISPLAY element with no other reference to it
    //console.log(displayVal) doesnt log anything

    display.textContent = 40 //key5Value

})*/

//VERSION 5
/*
let pressFive = document.querySelector("#five");
pressFive.addEventListener("click", fiveFunc =>{
    //console.log(fiveFunc.target) //logs the 5 button HTML element
    if (!fiveFunc.target.closest("button"))return //randomWordNotButtons

    let key5 = fiveFunc.target;
    //console.log(key5.textContent) Logs the digit 5
    let key5Value = key5.textContent
    //console.log(key5Value) Also logs the digit 5

    let = displayVal = display.textContent //Not sure how JS picks up the DISPLAY element with no other reference to it
    //console.log(displayVal) doesnt log anything

    display.textContent = 40 //key5Value
    //console.log(displayVal) //logs 40 while display.textContent is set to 40

    console.log(key5Value)
    displayOutput.textContent = key5Value

})*/

//Digit logs to console above

/*
let buttonInput = document.querySelector(".buttons");
buttonInput.addEventListener("click", ()=> {console.log(buttonInput)})
*/

//calcButton.addEventListener("click", ()=>{console.log(calcButton)})

//console.log(pressZero) ....Logs the div for zero
//console.log(buttonNine)

//Placed at the bottom instead of deleting completely
/*
function output() {
console.log(price.value)
}

let price = document.getElementById("nine").textContent; 
price.addEventListener("click", output, true)

console.log(price)
*/
