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
		let opCheck = inputArr.some((element) => {
			if (element === "+" || element === "-" || element === "*" || element === "/") {
				return true;
			}
			else {
				return false;
			}
		})
		
		if (opCheck === true) {
			getResult();
			inputArr.push(operators[k].textContent);
			populateDis(operators[k]);
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
	
	displayContent.textContent = result;
	clearData();

	numOneArr.push(result);
	inputArr.push(result);
}

function clearData() {
	operator = "";
	inputArr.forEach( () => inputArr.splice(0));
	numOneArr.forEach( () => numOneArr.splice(0));
	numTwoArr.forEach( () => numTwoArr.splice(0));
}