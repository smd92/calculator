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

//push user input to array/string and update display content with user input
let inputArr = [];
let operator = "";

//populating the display
function populateDis(content) {
	if (inputArr.length === 0) {
		displayContent.textContent = content.textContent;
	}
	else if (inputArr.length < 13) {
		displayContent.textContent += content.textContent;
	}
}

//numbers
for (let i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener("click", () => {
		populateDis(numbers[i]);
		inputArr.push(numbers[i].textContent);
	})
}

//operators
for (let k = 0; k < operators.length; k++) {
	operators[k].addEventListener("click", () => {
		populateDis(operators[k]);
		inputArr.push(operators[k].textContent);
		operator = operators[k].textContent;
	})
}

//function for clearing display and array from user input
clear.addEventListener("click", () => {
	displayContent.textContent = "0";
	for (let j = inputArr.length; j > 0; j--) {
		inputArr.pop();
	}
})

//function for getting result based on user input
let operatorsArr = ["+", "-", "*", "/"];

equals.addEventListener("click", () => {
	for (let l = 0; l < inputArr.length; l++) {
		for (let m = 0; m < operatorsArr.length; m++) {

			//check if inputArr contains an operator
			let opCheck = inputArr.includes(operatorsArr[m]);

			if (opCheck === true) {
				let opIndex = inputArr.indexOf(operatorsArr[m]);
				operator == inputArr.splice(opIndex, 1);
			}
		}
	}
	let a = Number(inputArr[1]);
	console.log(typeof a);

	let b = Number(inputArr[2]);
	console.log(typeof b);
	let result = operate(operator, a, b);
	console.log(result);
})