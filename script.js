function add (inputOne, inputTwo) {
	return inputOne + inputTwo;
}

function subtract (inputOne, inputTwo) {
	return inputOne - inputTwo;
}

function multiply(input) {
	if (input.length > 0) {
		return input.reduce((a, b) => a * b);
	}
	else {
	    return 0;
	}
}

function divide(inputOne, inputTwo) {
    return inputOne / inputTwo;
}

function operate(operator, numOne, numTwo) {
	if (operator === "+") {
		add(numOne, numTwo);
	}
	else if (operator === "-") {
		subtract(numOne, numTwo);
	}
	else if (operator === "*") {
		multiply(numOne, numTwo);
	}
	else if (operator === "/") {
		divide(numOne, numTwo);
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
//numbers
for (let i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener("click", () => {
		if (inputArr.length === 0) {
			displayContent.textContent = numbers[i].textContent;
			inputArr.push(numbers[i].textContent);
		}
		else if (inputArr.length < 13) {
			displayContent.textContent += numbers[i].textContent;
			inputArr.push(numbers[i].textContent);
		}
	})
}
//operators
for (let k = 0; k < operators.length; k++) {
	operators[k].addEventListener("click", () => {
		if (inputArr.length === 0) {
			displayContent.textContent = operators[k].textContent;
			inputArr.push(operators[k].textContent);
		}
		else if (inputArr.length < 13) {
			displayContent.textContent += operators[k].textContent;
			inputArr.push(operators[k].textContent);
			operator = operators[k].textContent;
		}
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
equals.addEventListener("click", () => {
	let operatorIndex = inputArr.indexOf(operator);
	let firstValue = ;
	let secondValue = ;

	if (operator === "+") {

	}
	else if (operator === "-") {

	}
	else if (operator === "*") {

	}
	else if (operator === "/") {

	}
})