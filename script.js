function add (inputOne, inputTwo) {
	return inputOne + inputTwo;
}

function subtract (inputOne, inputTwo) {
	return inputOne - inputTwo;
}

function multiply(inputOne, inputTwo) {
	return inputOne * inputTwo;
}

function divide(inputOne, inputTwo) {
    return inputOne / inputTwo;
}

//receives processed user input from equals click event
function operate(operator, numOne, numTwo) {
	if (operator === "+") {
		return add(numOne, numTwo);
	}
	else if (operator === "-") {
		return subtract(numOne, numTwo);
	}
	else if (operator === "*") {
		return multiply(numOne, numTwo);
	}
	else if (operator === "/") {
		return divide(numOne, numTwo);
	}
}

const clear = document.querySelector("#clear");
const displayContent = document.querySelector("#displayContent");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals");

let numOneArr = [];
let numTwoArr = [];
let inputArr = [];
let operator = "";
let operatorsArr = ["+", "-", "*", "/"];

//populating the display
function populateDis(content) {
	if (inputArr.length === 0) {
		displayContent.textContent = content.textContent;
	}
	else if (inputArr.length < 13) {
		displayContent.textContent += content.textContent;
	}
}

//push user input to array/string and update display content with user input
//numbers
for (let i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener("click", () => {

		if (operator === "") {
			populateDis(numbers[i]);
			numOneArr.push(numbers[i].textContent);
		}
		else {
			populateDis(numbers[i]);
			numTwoArr.push(numbers[i].textContent);
		}

		inputArr.push(numbers[i].textContent);
	})
}

//operators
for (let k = 0; k < operators.length; k++) {
	operators[k].addEventListener("click", () => {

		//check if there's already an operator and compute result if true
		let opCheck = "";
		for (let o = 0; o < inputArr.length; o++) {
			for (let p = 0; p < operatorsArr.length; p++) {
				opCheck = inputArr.includes(operatorsArr[o]);
			}
		}
		
		if (opCheck === true) {
			getResult();
			populateDis(operators[k]);
			inputArr.push(operators[k].textContent);
			operator = operators[k].textContent;
		}
		else {
			populateDis(operators[k]);
			inputArr.push(operators[k].textContent);
			operator = operators[k].textContent;
		}
	})
}

//function for clearing display and array from user input
clear.addEventListener("click", () => {

	displayContent.textContent = "0";

	operator = "";
	inputArr.forEach( () => inputArr.splice(0));
	numOneArr.forEach( () => numOneArr.splice(0));
	numTwoArr.forEach( () => numTwoArr.splice(0));
})

//function for getting result based on user input
equals.addEventListener("click", () => {
	getResult();
})

function getResult() {
	for (let l = 0; l < inputArr.length; l++) {
		for (let m = 0; m < operatorsArr.length; m++) {
			//check if inputArr contains an operator
			let opCheck = inputArr.includes(operatorsArr[m]);
		}
	}

	let a = Number(numOneArr.join(""));
	let b = Number(numTwoArr.join(""));
	let result = operate(operator, a, b);
	
	displayContent.textContent = result;

	console.log(result);
	console.log(inputArr);

	operator = "";
	inputArr.forEach( () => inputArr.splice(0));
	numOneArr.forEach( () => numOneArr.splice(0));
	numTwoArr.forEach( () => numTwoArr.splice(0));
	numOneArr.push(result);
	inputArr.push(result);
}