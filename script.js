
// This is the display

/*function showDisplay(){
    code to update the display to HTML after receiving button value inputs
    }*/

//Original display from and to DOM
displayOutput = ""
displayOutput.textContent = "" //parseInt()
document.getElementById("display").value = displayOutput;


/*
//THIS SEEMS TO BE THE STICKING POINT - cannot get anything to show up in the cals screen **edit - solved above by display output**
// classname, ID, queryselector, nothing shows even after deleting the placeholder.
const screenDisplay = document.querySelector(".showIt") 
screenDisplay = 187
*/

//let tryDisplay = document.getElementById("display").innerHTML = "kw" interferes with button 5's value


let pressEight = document.querySelector("#eight");
pressEight.addEventListener("click", ()=>{displayOutput  =buttonEight ;
console.log(pressEight);
console.log(buttonEight);

})

//So far only managed to log the number 8 and the contents of the 8 button HTML

// Methods tried in the Eventlistener function
/*{displayOutput + parseInt(buttonEight)}  
displayOutput.buttonEight
displayOutput.textContent += buttonEight
displayOutput.textContent = buttonEight

*/
//console.log(document.getElementById("display").value + pressEight.textContent)

//buton values
let buttonOne = document.getElementById("one").textContent; //buttonOne will log the button value
let buttonTwo = document.getElementById("two").textContent;
let buttonThree = document.getElementById("three").textContent;
let buttonFour = document.getElementById("four").textContent;
let buttonFive = document.getElementById("five").textContent;
let buttonSix = document.getElementById("six").textContent;
let buttonSeven = document.getElementById("seven").textContent;
let buttonEight = document.getElementById("eight").textContent;
let buttonNine = document.getElementById("nine").textContent;



//console.log(buttonNine)
//console.log(price) ****************

/*
let valueStore = 0
console.log(valueStore)
*/

//Digit logs to console........
//let pressAny = document.querySelectorAll("buttons");
//pressAny.addEventListener("click", ()=>{console.log(24)})

let sumStore = ""
console.log(sumStore)
/***************************** */
let pressSeven = document.querySelector("#seven");
pressSeven.addEventListener("click", function execute(){
    console.log(buttonSeven.concat(sumStore))
})
/********************************************* */
//console.log(sumStore.concat(buttonSeven))
//console.log(pressSeven)

//pressEight Working.......
/*let pressEight = document.querySelector("#eight");
pressEight.addEventListener("click", ()=>{console.log(document.getElementById("display").value + pressEight.textContent)})
*/

/*************************************************** */


let pressNine = document.querySelector("#nine"); //PressNine will log the whole div
pressNine.addEventListener("click",()=>{console.log(9)} )

let pressMultiply = document.querySelector("#multiply");
pressMultiply.addEventListener("click", ()=>{console.log("*")})

//display output not a function. 
//create a function for the display and try this 
let pressFour = document.querySelector("#four");
pressFour.addEventListener("click", ()=>{
    displayOutput.appendNumber(pressFour.innerText)
})

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
//VERSION 6
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
    displayOutput = key5Value

    //Possibly mkae use of  **.this** to make displayOutput available outside of the pressFive function
    
    //Original display from and to DOM
    displayOutput = ""
    displayOutput.textContent = "" //parseInt()
    document.getElementById("display").value = displayOutput; //"original display" copy pasted inside the function for the scope of displayOutput(didnt work)
})

let pressSix = document.querySelector("#six");
pressSix.addEventListener("click", ()=>{console.log(6)})

let pressMinus = document.querySelector("#minus");
pressMinus.addEventListener("click", ()=>{console.log("-")})

let pressOne = document.querySelector("#one");
pressOne.addEventListener("click", ()=>{console.log(1)})

let pressTwo = document.querySelector("#two");
pressTwo.addEventListener("click", ()=>{console.log(2)})

let pressThree = document.querySelector("#three");
pressThree.addEventListener("click", ()=>{return pressThree})

let pressPlus = document.querySelector("#plus");
pressPlus.addEventListener("click", ()=>{console.log("+")})

let pressEquals = document.querySelector("#equals");
pressEquals.addEventListener("click", ()=>{console.log("=")})

let pressZero = document.querySelector("#zero");
pressZero.addEventListener("click", ()=>{console.log(0)})

let pressDelete = document.querySelector("#del");
pressDelete.addEventListener("click", ()=>{console.log(0)})

//Digit logs to console above


function buttonPresses(pressThree){
    console.log("five was pressed")}

/*
let buttonInput = document.querySelector(".buttons");
buttonInput.addEventListener("click", ()=> {console.log(buttonInput)})
*/
let calcButton = document.getElementsByClassName("buttons");
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