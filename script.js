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

function power(inputOne, inputTwo) {
	return inputOne ** inputTwo;
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

for (let i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener("click", () => {
		displayContent.innerHTML += numbers[i].textContent;
	})
}