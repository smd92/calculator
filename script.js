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
const decimal = document.querySelector("#decimal");

let numOneArr = [];
let numTwoArr = [];
let inputArr = [];
let operator = "";
let operatorsArr = ["+", "-", "*", "/"];

//push user input to array/string and update display content with user input
//numbers
for (let i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener("click", () => {

		if (operator === "") {
			numOneArr.push(numbers[i].textContent);
		}
		else {
			numTwoArr.push(numbers[i].textContent);
		}
		populateDis(numbers[i]);
		inputArr.push(numbers[i].textContent);
	})
}

//operators
for (let k = 0; k < operators.length; k++) {
	operators[k].addEventListener("click", () => {

		//check if there's already an operator and compute result if true
		let opCheck = inputArr.some((element) => {
			return operatorsArr.includes(element);
		})
		
		if (numOneArr.length > 0 && operator.length > 0 && numTwoArr.length === 0) {
			numTwoArr.push(operators[k].textContent);
		}
		else if (opCheck === true) {
			getResult();
			operator = operators[k].textContent;
		}
		else {
			operator = operators[k].textContent;
		}

		populateDis(operators[k]);
		inputArr.push(operators[k].textContent);
	})
}

//allow floating point numbers to be entered
decimal.addEventListener("click", () => {

	let numOneCheck = numOneArr.some((elementOne) => {
		return ["."].includes(elementOne);
	})

	let numTwoCheck = numTwoArr.some((elementTwo) => {
		return ["."].includes(elementTwo);
	})
	
	if (operator.length === 0 && numOneCheck === false) {
		numOneArr.push(decimal.textContent);
		populateDis(decimal);
		inputArr.push(decimal);
	}
	else if (operator.length === 1 && numTwoCheck === false) {
		numTwoArr.push(decimal.textContent);
		populateDis(decimal);
		inputArr.push(decimal);
	}
})

//function for clearing display and array from user input
clear.addEventListener("click", () => {

	displayContent.textContent = "0";
	clearData();
})

equals.addEventListener("click", () => {
	getResult();
})

//populating the display
function populateDis(content) {
	if (inputArr.length === 0) {
		displayContent.textContent = content.textContent;
	}
	else if (inputArr.length < 13) {
		displayContent.textContent += content.textContent;
	}
}

//function for getting result based on user input
function getResult() {
	let a = Number(numOneArr.join(""));
	let b = Number(numTwoArr.join(""));
	let result = operate(operator, a, b);
	let rounded = Math.round((result + Number.EPSILON) * 100) / 100;
	
	displayContent.textContent = rounded;
	clearData();

	numOneArr.push(rounded);
	inputArr.push(rounded);
}

function clearData() {
	operator = "";
	inputArr.forEach( () => inputArr.splice(0));
	numOneArr.forEach( () => numOneArr.splice(0));
	numTwoArr.forEach( () => numTwoArr.splice(0));
}