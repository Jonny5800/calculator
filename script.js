
// This is the display
let displayOutput = 0
displayOutput = 7
let theMath = document.getElementById("display").value = displayOutput;



//buton values

let buttonOne = document.getElementById("one").textContent;
let buttonTwo = document.getElementById("two").textContent;
let buttonThree = document.getElementById("three").textContent;
let buttonFour = document.getElementById("four").textContent;
let buttonFive = document.getElementById("five").textContent;
let buttonSix = document.getElementById("six").textContent;
let buttonSeven = document.getElementById("seven").textContent;
let buttonEight = document.getElementById("eight").textContent;
let buttonNine = document.getElementById("nine").textContent;





function output() {
console.log(price.value)
}

let price = document.getElementById("nine").textContent; 
//price.addEventListener("click", output, true)

//console.log(price)

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

let pressEight = document.querySelector("#eight");
pressEight.addEventListener("click", ()=>{console.log(document.getElementById("display").value + pressEight.textContent)})

/*************************************************** */
let pressNine = document.querySelector("#nine");
pressNine.addEventListener("click",()=>{console.log(9)} )

let pressMultiply = document.querySelector("#multiply");
pressMultiply.addEventListener("click", ()=>{console.log("*")})

let pressFour = document.querySelector("#four");
pressFour.addEventListener("click", ()=>{console.log(4)})

let pressFive = document.querySelector("#five");
pressFive.addEventListener("click", ()=>{console.log(5)})

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

//console.log(pressNine)
//console.log(buttonNine)
