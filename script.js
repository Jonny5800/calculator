let currentValue = "";

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

function updateDisplay(displayValue) {
  display.value = currentValue + displayValue;
  console.log(currentValue + "...currentValue func");
  console.log(displayValue + "...displayValue func");
  console.log(display.value + "...display.value");
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
    updateDisplay(elem.target.textContent);
    //console.log(elem.target.textContent + "...elem.target.textContent");
    currentValue = currentValue + elem.target.textContent;
    console.log(currentValue);
  });
});

buttonMultiply.addEventListener("click", (timesing) => {
  //console.log("multiply");
  //console.log(currentValue + "...current value");
  //console.log(timesing.target.textContent + "...multiply button text content");
  console.log(currentValue + timesing.target.textContent);
  currentValue = currentValue + timesing.target.textContent;
});
buttonMinus.addEventListener("click", (takeAway) => {
  currentValue = currentValue + takeAway.target.textContent;
  console.log("Minus");
});

buttonPlus.addEventListener("click", (adding) => {
  currentValue + adding.target.textContent;
  console.log(
    currentValue +
      adding.target.textContent +
      "...currentValue + adding.target.textContent"
  );
  //console.log(currentValue.concat(adding)); //logs [object pointer event]
  //console.log(adding.target.textContent); //logs ... + ...

  currentValue = currentValue + adding.target.textContent; /***WORKING HERE****/
  console.log("adding");
  // // console.log(currentValue.concat(adding.target.textContent)); // logs the current values and concatenates the + sign
  // currentValue = currentValue.concat(adding.target.textContent);
  console.log(adding.target.textContent + "...adding.target.textContent");
});

buttonEquals.addEventListener("click", (/*resulting*/) => {
  //console.log(currentValue + "pressed equals");
  console.log(currentValue + "...currentValue at Equals but before eval");
  displayValue = eval(currentValue); //currentValue swapped with display value
  console.log(currentValue + "   << currentValue from equals");
  console.log(displayValue + "...displayValue from equals");

  //console.log("equals");
  currentValue = "";
  updateDisplay(displayValue);
  //this used to replace currentValue
  //currentValue /* THIS REMOVED EXPERIMENTALLY/= 2*/ /*- gives double the expected answer*/
  /*currentValue*/
});
buttonDivide.addEventListener("click", (divider) => {
  // console.log("divide");
  // console.log(currentValue);
  // console.log(divider.target.textContent + "...divider.target.textContent");
  //  console.log(
  //     currentValue.concat(divider.target.textContent) +
  //       "...currentValue.concat(divider.target.textContent)"
  //   );
  // REPLACED BY THE LINE BELOW - currentValue = currentValue.concat(divider.target.textContent);
  currentValue = currentValue + divider.target.textContent;
  console.log(currentValue);
});
buttonClear.addEventListener("click", () => {
  console.log("clear");
  updateDisplay((currentValue = ""));
});

//remove last character of display
buttonDelete.addEventListener("click", (deleter) => {
  console.log("Delete pressed");
  console.log(display.value + "...display.value in deleter");
  console.log(currentValue + "...currentValue in deleter");
  console.log(display.value + "...displayValue in deleter");
  // 3 possible methods
  // 1- substring()
  // 2 - slice()
  // 3 - substr() (old method)
  //take the value of the display
  //remove the last character of the string
  //return the new shorter string
  //update the display with the new shorter value
  //*
  var str = display.value;
  str = str.substr(0, str.length - 1);
  console.log(str + "this should get shortened in deleter");
  //displayValue = "";
  currentValue = ""; //trial with these
  return (display.value = str);
  /*******This partly works - deletes multiple*******
  var str = display.value;
  str = str.substr(0, str.length - 1);
  console.log(str + "this should get shortened");
  return (display.value = str);
*/
  //  *
  // *Come back to this if failure***********
  // let str = currentValue;
  // console.log(currentValue);
  // str = str.substring(0, str.length - 1);

  // console.log(str + "...str");
  // updateDisplay((displayValue = str));
  //return (currentValue = str);
  //*
  // *
  // updateDisplay(displayValue);

  //second go between here
  // *
  // *
  // console.log(currentValue + "...currentValue from delete");
  // console.log(display.value + "...display.value  from delete");
  // let str = display.Value;
  // let str2 = str.substring(0, str.length - 1);
  // console.log(str2 + "...the current value after delete");
  // return (dislay.Value = str2);
  // console;
  // // *
  // *
  //second go is between here

  // *
  // *
  // *
  // console.log(currentValue.lenght + "  ...current value.length");
  // console.log(updateDisplay.length + "...updateDisplay.length");
  // console.log(display.value.length + "  ...log display.value.length");
  // console.log(display.value + "  ...this is display value to slice");
  // let toSlice = display.value;
  // console.log(toSlice + "  ...before slice");
  // console.log(--toSlice.length + "...slice length");
  // /*// keep commented// bring back if solution dud let*/ beenSliced =
  //   toSlice.slice(0, 4((display.value.length -= -1)));
  // let beenSliced = toSlice.slice(
  //   0,
  //   --toSlice.length /*(display.value.length -= -1)*/
  // );
  // // /*
  // If the display has "1+2+3", .slice(0,4) will remove the 3 from the end.
  // This is
  // */
  // console.log(display.value.length + "..length after alter");
  // keep commented// updateDisplay(currentValue);
  // keep commented//need to actually update the display here because the sliced character comes back
  // console.log(beenSliced + "   ...value after slice");

  // updateDisplay(beenSliced);
  // keep commented//updateDisplay()
});
/*
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
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
